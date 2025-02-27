import User from "../models/accountModel.js";


export class UserSocket{
    constructor(io){
        this.io = io;
        this.userModel = new User();
        this.SocketEvents();

    }

    SocketEvents(){
        this.io.on("connection", (socket) => {
            console.log("User Connected", socket.id);

            socket.on("registerUser", async(data) =>{
                await this.createAccount(socket, data);
                
            });

            socket.on("disconnect", () =>{
                console.log("User disconnected", socket.id);
            });

        });
}

    async createAccount(socket, data){
        const {user_name, email, password,birthdate, contact_num} = data;

        try{
            await this.userModel.createUser(user_name, email, password,birthdate, contact_num);
            socket.emit("accountCreated", {message:"Account Created!" });

        }catch(error){
            socket.emit("creationError", {message: error.message});
            console.error(User);
        }
    }

}

export default UserSocket;