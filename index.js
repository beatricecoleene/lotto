import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import UserSocket from "./backend/src/sockets/userSocket.js";
import PrizeSocket from "./backend/src/sockets/prizesSocket.js"; 
// import { RoundSocket } from "./backend/src/sockets/roundSocket.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const publicPath = path.join(__dirname, "backend", "public");

// const publicPath = path.join(__dirname, "client");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

new UserSocket(io);
new PrizeSocket(io);
// new RoundSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
