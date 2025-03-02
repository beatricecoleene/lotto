import  connection  from "../config/db.js";

export class Bets{
    constructor(){
        this.db = connection;
    }

    async bet_numbers(user_id, numbers,round_id ){
        try{

            console.log("User ID:", user_id);
            console.log("Round ID:", round_id);
            console.log("Bet Numbers:", numbers);

            if (!Array.isArray(numbers) || numbers.length === 0) {
                throw new Error("Invalid bet numbers: Must be a non-empty array.");
            }
    
            const numbersStr = JSON.stringify(numbers); // Convert array to string for SQL
    
            const [result] = await this.db.execute(
                "INSERT INTO bets (user_id, numbers, round_id, status) VALUES (?, ?, ?, ?)",
                [user_id, numbersStr, round_id, "Pending"]
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