import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import UserSocket from "./backend/src/sockets/userSocket.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// ✅ Initialize WebSocket logic properly
new UserSocket(io);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
