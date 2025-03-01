
import  connection  from "../config/db.js";


export class Rounds{
    constructor(){
        this.db = connection;

    }
    async start_round(round_num,winning_number, drawtime){
        try{
            const result = await this.db.execute(
                "INSERT INTO rounds(round_id,winning_numbers, draw_time) VALUES(?,?,?)",
                [round_num,winning_number, drawtime]
            );

            const round_id = result.inserId;

            const get_round= await this.db.execute(
                "SELECT * FROM rounds WHERE round_id = ? ",
                [round_num]
            );
            return get_round;


        }catch(err){
            console.error('<error> Rounds.start_round', err);
            throw err;
    
    }
}
}

export default Rounds;