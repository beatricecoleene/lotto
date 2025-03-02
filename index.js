import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import UserSocket from "./backend/src/sockets/userSocket.js";
import PrizeSocket from "./backend/src/sockets/prizesSocket.js";
import authenticateSocket from "./backend/src/middleware/authentication.js";
import RoundSocket from "./backend/src/sockets/roundSocket.js";
import BetSocket from "./backend/src/sockets/betsSocket.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const publicPath = path.join(__dirname, "backend", "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
io.on("connection", (socket) => {
  console.log(`User connected with ID: ${socket.id}`);

  const userSocket = new UserSocket(io);
  userSocket.handleSocket(socket); 


  socket.on("request-authentication", () => {
      authenticateSocket(socket, async (err) => {
          console.log("Handshake Data:", socket.handshake);
          console.log("here");

          if (err) {
              console.log("Authentication failed:", err.message);
              socket.emit("authentication-failed", "Invalid token"); 
              return;
          }

          console.log(`Authenticated user: ${socket.user_id}`);
          new PrizeSocket(io, socket);
          new RoundSocket(io);
          new BetSocket(io, socket);
          
          socket.emit("authentication-success"); 
      });
  });

  socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
  });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
