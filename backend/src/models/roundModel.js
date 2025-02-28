import res from "express/lib/response.js";
import  connection  from "../config/db.js";


class Rounds{
    constructor(){
        this.db = connection;

    }
    async start_round(winning_number, drawtime){
        try{
            const result = await this.db.execute(
                "INSERT INTO rounds(winning_numbers, drawtime) VALUES(?,?)",
                [winning_number, drawtime]
            );

            const round_id = result.inserId;

            const get_round= await this.db.execute(
                "SELECT * FROM rounds WHERE round_id = ? ",
                [round_id]
            );
            return get_round;


        }catch(err){
            console.error('<error> Rounds.start_round', err);
            throw err;
    
    }
}
}