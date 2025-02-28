// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';

const CountdownTimer = () => {

// const CountdownTimer = ({ initialTime = { hours: 0, minutes: 0, seconds: 0 }, socketUrl = '', socketEvent = 'timer' }) => {
//   const [time, setTime] = useState(initialTime);
//   const [socket, setSocket] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);

//   // Initialize socket connection
//   useEffect(() => {
//     if (!socketUrl) return;

//     // const newSocket = io(socketUrl);
    
//     newSocket.on('connect', () => {
//       setIsConnected(true);
//       console.log('Connected to socket server');
//     });
    
//     newSocket.on('disconnect', () => {
//       setIsConnected(false);
//       console.log('Disconnected from socket server');
//     });
    
//     newSocket.on(socketEvent, (timerData) => {
//       setTime(timerData);
//     });
    
//     setSocket(newSocket);
    
//     return () => {
//       newSocket.disconnect();
//     };
//   }, [socketUrl, socketEvent]);

//   // Format numbers to always have two digits
//   const formatNumber = (num) => {
//     return num.toString().padStart(2, '0');
//   };

  return (
    <div className="flex items-center justify-center gap-2 text-white mt-10">
      {/* Hours */}
      <div className="flex flex-col items-center bg-fuchsia-500 px-6 py-2 rounded-3xl">
        {/* <span className="text-4xl font-bold">{formatNumber(time.hours)}</span> */}
        <span className="text-4xl font-bold">00</span>

        <span className="text-sm">hours</span>
      </div>
      
      {/* Separator */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white mb-1"></div>
        <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
      </div>
      
      {/* Minutes */}
      <div className="flex flex-col items-center bg-fuchsia-500 px-6 py-2 rounded-3xl">
        {/* <span className="text-4xl font-bold">{formatNumber(time.minutes)}</span> */}
        <span className="text-4xl font-bold">42</span>
        <span className="text-sm">minutes</span>
      </div>
      
      {/* Separator */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white mb-1"></div>
        <div className="w-2 h-2 rounded-full bg-white mt-1"></div>
      </div>
      
      {/* Seconds */}
      <div className="flex flex-col items-center bg-fuchsia-500 px-6 py-2 rounded-3xl">
        {/* <span className="text-4xl font-bold">{formatNumber(time.seconds)}</span> */}
        <span className="text-4xl font-bold">27</span>
        <span className="text-sm">seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;