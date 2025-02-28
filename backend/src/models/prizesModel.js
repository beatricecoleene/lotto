import  connection  from "../config/db.js";


export class Prizes{
    constructor(){
    this.db= connection;
    }
    

    async claim_coins(user_id, coins){

        try{
            const[get_coins] = await this.db.execute(
                "SELECT coins FROM users WHERE user_id=?",
                [user_id]
            )

            const total = get_coins.coins + coins;

            const [result] = await this.db.execute(
                "UPDATE user SET coins=? WHERE user_id=? ",
                [total, user_id]
                
            );


        }catch(err){
            console.error('<error> Prizes.claim_coins',err);
            throw err;
        }
    }

    // async placeBet(user_id, number, )

}


export default Prizes;