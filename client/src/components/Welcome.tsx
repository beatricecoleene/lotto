import { useState } from "react";
import { PiSpeakerHighFill } from "react-icons/pi";
import { FaCoins, FaUserCircle } from "react-icons/fa";
import LotteryTicker from "./LotteryTicker";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-gradient-to-b from-black to-red-900/30">
      <header className="py-4 px-6 flex justify-between items-center border-b border-yellow-500/30">
        <div className="flex items-center">
          <FaCoins className="w-8 h-8 mr-2 text-yellow-400" />
          <h1 className="text-2xl font-bold text-yellow-400">3 NUMBERS</h1>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-yellow-400 hover:text-yellow-300 transition-colors px-4 py-2 flex items-center cursor-pointer"
            onClick={() => navigate("/login")}>
            <FaUserCircle className="mr-2" />
            Login
          </a>
          <a className="bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 cursor-pointer hover:to-yellow-300 text-black font-bold px-4 py-2 rounded-md shadow-lg transition-all"
            onClick={() => navigate("/register")}>
            Register
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 py-8 md:px-[10%]">
        <div className="text-center mb-8">
          <h2 className="text-xl text-yellow-400">CURRENT JACKPOT</h2>
          <div className="inline-block mt-2 bg-black/60 border-2 border-yellow-500 rounded-lg p-4 shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            <div className="text-4xl md:text-6xl font-bold tracking-widest bg-gradient-to-b from-yellow-300 to-yellow-600 text-transparent bg-clip-text">
              $1,000,000
            </div>
          </div>
        </div>
        
        {/* Main Lottery Visual */}
        <div className="flex-1 relative bg-black/60 border-2 border-yellow-500 rounded-2xl p-8 shadow-[0_0_20px_rgba(255,215,0,0.4)] mb-8 overflow-hidden">
          {/* <div className="absolute inset-0 opacity-10 overflow-hidden flex flex-wrap justify-center items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <div key={num} className="text-8xl p-4 text-yellow-500">{num}</div>
            ))}
          </div> */}
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="text-7xl md:text-8xl font-bold text-yellow-500 mb-4 relative z-10">
                  3
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 relative z-10">
                  NUMBERS
                </div>
                <div className="absolute w-full h-full left-0 top-0 rounded-full bg-red-600/20 filter blur-xl z-0"></div>
              </div>

            </div>
          </div>
          
          {/* START BUTTON */}
          <div className="absolute w-full bottom-8 left-0 flex justify-center">
            <button 
                className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-xl font-bold text-white rounded-lg 
                          border-2 border-yellow-500
                          shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] 
                          transform hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => navigate("/login")}
              >
                START
            </button>
          </div>
        </div>
        
        {/* TEXT TICKER */}
        <div className="bg-black/60 border border-yellow-500/50 rounded-lg p-3 flex flex-row gap-2 items-center">
          <button 
            className={`text-2xl ${audioEnabled ? 'text-yellow-400' : 'text-yellow-400/30'}`}
            onClick={() => setAudioEnabled(!audioEnabled)}
          >
            <PiSpeakerHighFill />
          </button>
          <div className="flex-1 overflow-hidden">
            <LotteryTicker />
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Welcome;