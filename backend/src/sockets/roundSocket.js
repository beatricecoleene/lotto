import { randomInt } from "crypto"; 

export class RoundSocket {
    constructor(io) {
        this.io = io;
        this.rSocketEvents();
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
        let timeRemaining = secs;
        
    
        this.generateWinningNumber();

        setInterval(() => {
            timeRemaining -= 1000; 

           
            this.io.emit('timer-update', timeRemaining);

            this.io.sockets.emit('timer-update', timeRemaining);

            
            if (timeRemaining <= 0) {
                timeRemaining = secs; 
                this.generateWinningNumber(); 
            }
        }, 1000); 
    }

    generateWinningNumber() {
        let winning_number = [];
        for (let i = 0; i < 3; i++) {
            winning_number.push(randomInt(0, 10)); 
        }
        console.log(`Winning numbers for this round are: ${winning_number.join(', ')}`);
        
      
        this.io.emit('winning-numbers', winning_number);

       
        this.io.sockets.emit('winning-numbers', winning_number);
    }
}
