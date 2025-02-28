import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import UserSocket from "./backend/src/sockets/userSocket.js";

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Set correct path for the 'public' folder inside 'backend'
const publicPath = path.join(__dirname, "backend", "public");

// Serve static files from backend/public
app.use(express.static(publicPath));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Initialize WebSocket logic
new UserSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
