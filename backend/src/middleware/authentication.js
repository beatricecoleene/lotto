import jwt from "jsonwebtoken";

// /**
//  * Middleware to authenticate users via WebSocket
//  *
//  * @param {import("socket.io").Socket} socket
//  * @param {Function} next
//  */


const authentication =(socket, next) => {
    const token = socket.handshake.auth?.token;

    if (!token){
        socket.emit("failedAuthentication", {message: "User not Authenticated"});
        return next(new Error("Authentication error"));
    }

    jwt.verify(token, process.env.API_SECRET_KEY, (err, decoded)=>{
        if (err){
            socket.emit("failedAuthentication", {message: "Invalid token"});
            return next(new Error ("Invalid Token"));
        }

        socket.email = decoded.email;
        socket.user_id = decoded.user_id;
        next();
    });

};

export default authentication;
