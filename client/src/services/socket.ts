import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3000"; // Backend URL
let socket: Socket | null = null;

export const connectSocket = (): Socket => {
  if (!socket) {
    const token = localStorage.getItem("token"); 

    socket = io(SERVER_URL, {
      autoConnect: false, 
      reconnectionAttempts: 10,
      reconnectionDelay: 2000,
      auth: { token },
    });

    socket.on("connect", () => {
      console.log(`✅ Connected to WebSocket: ${socket?.id}`);
    });

    socket.on("disconnect", (reason) => {
      console.warn(`⚠️ Disconnected: ${reason}`);
      if (reason === "io server disconnect") {
        console.log("Server disconnected. Trying to reconnect...");
        socket?.connect();
      }
    });

    socket.on("reconnect_attempt", (attempt) => {
      console.log(`🔄 Reconnection attempt #${attempt}`);
    });

    socket.on("reconnect", (attempt) => {
      console.log(`✅ Reconnected after ${attempt} attempts`);
    });

    socket.on("reconnect_failed", () => {
      console.error("❌ Reconnection failed. Please check server status.");
    });
  }

  socket.connect(); 
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    console.log("🔌 Disconnecting WebSocket...");
    socket.disconnect();
    socket = null;
  }
};

export const updateAuthToken = (newToken: string) => {
  if (socket) {
    socket.auth = { token: newToken }; 
    localStorage.setItem("token", newToken);

    console.log("🔑 Token updated. Reconnecting socket...");
    socket.disconnect(); 
    socket.connect(); 
  }
};
