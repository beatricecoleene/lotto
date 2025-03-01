import { randomInt } from "crypto"; 
import Rounds from "../models/roundModel.js";

export class RoundSocket {
    constructor(io) {
        this.io = io;
        this.rSocketEvents();
        this.round = new Rounds();
        this.set_timer();
    }

    rSocketEvents() {
        this.io.on('connection', (socket) => {
            console.log('A user connected');
            socket.on('disconnect', () => {
                console.log('A user disconnected');
            });
        });
    }

    async set_timer() {
        let mins = 1;
        let secs = mins * 60 * 1000;
        let round_num = 1;  

        this.io.sockets.emit('roundNumber', round_num); 
        this.generateWinningNumber(); 

        while (true) {
            let timeRemaining = secs;

            while (timeRemaining > 0) {
                this.io.emit('timer-update', timeRemaining);
                await new Promise(resolve => setTimeout(resolve, 1000));
                timeRemaining -= 1000;
            }

            round_num++; 
            this.io.sockets.emit('roundNumber', round_num); 

            let winning_number = this.generateWinningNumber();
            let date = new Date();

            try {
                await this.round.start_round(round_num, winning_number, date);
            } catch (error) {
                console.error("Round creation error:", error.message);
            }
        }
    }

    generateWinningNumber() {
        let winning_number = [];
        for (let i = 0; i < 3; i++) {
            winning_number.push(randomInt(0, 10)); 
        }
        console.log(`Winning numbers for this round are: ${winning_number.join(', ')}`);
    
        this.io.emit('winning-numbers', winning_number);
        return winning_number; // Return the generated numbers for use in set_timer()
    }
}
