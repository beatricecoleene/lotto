import jwt from "jsonwebtoken";

const authentication = (socket, next) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
        socket.emit("failedAuthentication", { message: "User not Authenticated" });
        return next(new Error("Authentication error"));
    }

    jwt.verify(token, process.env.API_SECRET_KEY, (err, decoded) => {
        if (err) {
            socket.emit("failedAuthentication", { message: "Invalid token" });
            return next(new Error("Invalid Token"));
        }

        // Attach decoded user data to socket
        socket.user_id = decoded.user_id;
        socket.email = decoded.email;
        
        next();
    });
};

export default authentication;
