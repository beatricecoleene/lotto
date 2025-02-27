import  connection  from "../config/db.js";

export class User{
    constructor(){
        this.db = connection;
    }

    async createUser(user_name, email, password,birthdate, contact_num){
        try{
            const [result] = await this.db.execute(
                "INSERT INTO users (user_name, email, password, birthdate, contact_num) VALUES (?, ?, ?, ?, ?)",
                [user_name,  email, password,birthdate, contact_num ]

            );
            return result;

        }catch(err){
            console.error('<error> User.createUser', err);
            throw err;
        }
        }
}

export default User;
