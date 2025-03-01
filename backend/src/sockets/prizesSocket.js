import Prizes from "../models/prizesModel.js";
import authentication from "../middleware/authentication.js";

console.log("PrizeSocket initialized!");

export class PrizeSocket {
    constructor(io) {
        console.log("PrizeSocket initialized!");
        this.io = io;
        this.prizeModel = new Prizes();
        // this.pSocketEvents();
    }

    // You can call this function after successful login
    pSocketEvents() {
       
        // this.io.use(authentication);

        this.io.on("connection", (socket) => {
            console.log(`User connected to PrizeSocket: ${socket.user_id}`);

            if (!socket.user_id) {
                console.error("User authentication failed");
                socket.disconnect();
                return;
            }

            socket.on("claimCoins", async () => {
                console.log(`claimCoins event received from user ${socket.user_id}`);
                await this.claim_Coins(socket);
            });

            socket.on("disconnect", () => {
                console.log(`User ${socket.user_id} disconnected`);
            });
        });
    }
    
    async claim_Coins(socket) {
        const user_id = socket.user_id;

        if (!user_id) {
            console.warn("Claiming Error: User ID missing");
            return socket.emit("claimingError", { message: "User ID is required" });
        }

        try {
            console.log(`Processing coin claim for user ${user_id}`);
            const result = await this.prizeModel.claim_coins(user_id);
            console.log("Claim Result:", result);

            if (!result || typeof result.total !== "number") {
                console.error(`Error: Failed to update coin balance for user ${user_id}`);
                return socket.emit("claimingError", { message: "Failed to update coin balance" });
            }

            console.log(`User ${user_id} claimed coins. New balance: ${result.total}`);

            socket.emit("coinsClaimed", { message: "Coins claimed successfully!", coins: result.total });
        } catch (error) {
            console.error(`Error processing coin claim for user ${user_id}:`, error.message);
            socket.emit("claimingError", { message: error.message });
        }
    }
}

export default PrizeSocket;
