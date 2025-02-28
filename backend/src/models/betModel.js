import  connection  from "../config/db.js";

export class Bets{
    constructor(){
        this.db = connection;
    }

    async bet_numbers(user_id, numbers,round_id ){
        try{
            const result = await this.db.execute(
                "INSERT INTO bets (user_id, numbers, round_id, status) VALUES(?,?,?,?)",
                [user_id, numbers, round_id, "Pending"]
            );

            const bet_id = result.insertId;

            const get_bet = await this.db.execute(
                "SELECT * FROM bets WHERE user_id= ? AND bet_id = ?",
                [user_id, bet_id]
            );

            console.log(get_bet);
            return get_bet;
        }catch(err){
            console.error('<error> Bets.bet_numbers', err);
            throw err;
        }
    }
}

export default Bets;