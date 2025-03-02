import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // const [time, setTime] = useState({ hours: 0, minutes: 42, seconds: 27 });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(prevTime => {
  //       const newSeconds = prevTime.seconds > 0 ? prevTime.seconds - 1 : 59;
  //       const newMinutes = newSeconds === 59 
  //         ? (prevTime.minutes > 0 ? prevTime.minutes - 1 : 59) 
  //         : prevTime.minutes;
  //       const newHours = newMinutes === 59 && newSeconds === 59
  //         ? (prevTime.hours > 0 ? prevTime.hours - 1 : 23)
  //         : prevTime.hours;
        
  //       return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-4 bg-black rounded-lg border-2 border-yellow-500 shadow-lg">
      <div className="text-yellow-500 font-bold text-xl mb-2 uppercase tracking-wider">
        Time Remaining
      </div>
      
      <div className="flex items-center justify-center gap-4">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-black border-2 border-yellow-500 rounded-lg p-2 w-24 flex items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
            <span className="text-red-600 text-5xl font-bold font-mono relative z-10 glow-text">
              {/* {formatNumber(time.hours)} */}
              00
            </span>
          </div>
          <span className="text-yellow-500 text-sm mt-1 uppercase">Hours</span>
        </div>

        {/* Divider */}
        <div className="flex flex-col justify-center items-center mt-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mb-1"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1"></div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-black border-2 border-yellow-500 rounded-lg p-2 w-24 flex items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
            <span className="text-red-600 text-5xl font-bold font-mono relative z-10 glow-text">
              {/* {formatNumber(time.minutes)} */}
              12
            </span>
          </div>
          <span className="text-yellow-500 text-sm mt-1 uppercase">Minutes</span>
        </div>

        {/* Divider */}
        <div className="flex flex-col justify-center items-center mt-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mb-1"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1"></div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-black border-2 border-yellow-500 rounded-lg p-2 w-24 flex items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
            <span className="text-red-600 text-5xl font-bold font-mono relative z-10 glow-text">
              {/* {formatNumber(time.seconds)} */}
              34
            </span>
          </div>
          <span className="text-yellow-500 text-sm mt-1 uppercase">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;