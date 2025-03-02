
import  connection  from "../config/db.js";


export class Rounds{
    constructor(){
        this.db = connection;

    }

    async start_Round(round_num){

        try{

            const round = await this.db.execute(
                "INSERT INTO rounds(round_id) VALUES(?)",
                [round_num]
            );
            const round_id = round.insertId;

            return round_id;



        }catch(err){
            console.error('<error> Rounds.start_round', err);
            throw err;
    
    }

    }
    async update_WinningNum( round_num,winning_number, drawtime){
        try{

            const result = await this.db.execute(
                "UPDATE rounds SET winning_numbers=?, draw_time= ? WHERE round_id =?",
                [winning_number, drawtime, round_num]
            );

            const round_id = round_num;

            const get_round= await this.db.execute(
                "SELECT * FROM rounds WHERE round_id = ? ",
                [round_id]
            );
            return get_round;


        }catch(err){
            console.error('<error> Rounds.update_WinningNum', err);
            throw err;
    
    }
}

    async get_roundNum(){
        try{
            const [get_round] = await this.db.execute(
                "SELECT * FROM rounds ORDER BY round_id DESC LIMIT 1"
            );
            if (!get_round.length) {
                return 0;
            }

            const roundId = get_round[0].round_id;
            console.log(roundId);

            return roundId;
            
        }catch(err){
            console.error('<error> Rounds.get_roundNum', err);
            throw err;
    
    }
    }
}

export default Rounds;