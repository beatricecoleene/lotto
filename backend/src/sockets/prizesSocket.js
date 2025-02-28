import Prizes  from "../models/prizesModel.js";


export class PrizeSocket{
    constructor(io){
        this.io = io;
        this.prizeModel = new Prizes;
        this. SocketEvents();
    }

    SocketEvents(){
        this.io.on("connection",(socket) =>{
            console.log("User at Prize page", socket.id);

            socket.on("claimCoins", async(data)=> {
                
            });

            socket.on("disconnect", () =>{
                console.log("User disconnected", socket.id);
            });
        }); 
    }

    async claim_Coins(socket, data){
        const user_id = socket.user_id;
        console.log(user_id);

        const {coins} = data;

        try{
            const result= await this.prizeModel.claim_coins(user_id, coins);

            socket.emit("coinsClaimed
        }
    }





}
