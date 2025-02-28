import User from "../models/accountModel.js";
import jwt from "jsonwebtoken";

console.log("user socket")
export class UserSocket{
    constructor(io){
        this.io = io;
        this.userModel = new User();
        this.uSocketEvents();

    }

    uSocketEvents(){
        this.io.on("connection", (socket) => {
            console.log("User Connected", socket.id);

            socket.on("registerUser", async(data) =>{
                await this.createAccount(socket, data);
                
            });

            socket.on("userLogIn", async(data) => {
                await this.logIn(socket, data);

            });

            socket.on("disconnect", () =>{
                console.log("User disconnected", socket.id);
            });

        });
}

    async createAccount(socket, data){
        const {user_name, email, password,birthdate, contact_num} = data;

        try{
            const result=await this.userModel.createUser(user_name, email, password,birthdate, contact_num);
            console.log(result.user_id);
            console.log(result);
            socket.emit("accountCreated", {message:"Account Created!", user_id: result.id, 
                user_name: user_name,
                email: email,
                birthdate: birthdate,
                contact_num: contact_num});

        }catch(error){
            socket.emit("creationError", {message: error.message});
            console.error(User);
        }
    }

    async logIn(socket, data){
        const{email, password} = data;

        try{
            const user = await this.userModel.log_In(email, password);
           

            const token = jwt.sign(
                { user_id: user.id, email: user.email },
                process.env.API_SECRET_KEY,
                { expiresIn: "7d"}
            );
            console.log(token);
            socket.emit("LoggedIn", {message: "Logged In ", token: token});
        }catch(error){
            socket.emit("logInError",{message: error.message});
            console.error(error);
        }


    }

}

export default UserSocket;