import { useState } from "react";
import { PiSpeakerHighFill } from "react-icons/pi";
import LotteryTicker from "./LotteryTicker";
import CountdownTimer from "./games/CountDown";

const Welcome = () => {
  const [audioEnabled, setAudioEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#1E1633] text-white flex flex-col">
      {/* Header with login/register */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-[#FF00FF]/30">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#FF00FF" strokeWidth="2" />
            <circle cx="8" cy="9" r="2" fill="#FF00FF" />
            <circle cx="16" cy="9" r="2" fill="#FF00FF" />
            <path d="M8 16L16 16" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1 className="text-2xl font-bold text-[#FF00FF]">LOTTOMOTO</h1>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="/login" 
            className="text-[#FF99FF] hover:text-[#FF00FF] transition-colors px-4 py-2"
          >
            Login
          </a>
          <a 
            href="/register" 
            className="bg-[#FF00FF] hover:bg-[#FF33FF] text-white px-4 py-2 rounded-md shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all"
          >
            Register
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 py-8 md:px-[10%]">
        {/* Prize Display */}
        <div className="text-center mb-8">
          <h2 className="text-xl text-[#FF99FF]">CURRENT JACKPOT</h2>
          <div className="inline-block mt-2 bg-[#2A1F45] border-2 border-[#FF00FF] rounded-lg p-4 shadow-[0_0_15px_rgba(255,0,255,0.5)]">
            <div className="text-4xl md:text-6xl font-bold tracking-widest text-white">
              1,000,000
            </div>
          </div>
        </div>
        
        {/* Main Lottery Visual */}
        <div className="flex-1 relative bg-[#2A1F45] border-2 border-[#FF00FF] rounded-2xl p-4 shadow-[0_0_20px_rgba(255,0,255,0.4)] mb-8">

          
          {/* Claim Now Button */}
          <div className="absolute w-full bottom-8 left-0 flex justify-center">
            <button 
                className="px-8 py-3 bg-[#FF00FF] hover:bg-[#FF33FF] text-xl font-bold text-white rounded-lg 
                          shadow-[0_0_15px_rgba(255,0,255,0.7)] hover:shadow-[0_0_20px_rgba(255,51,255,0.9)] 
                          transform hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => window.location.href = '/login'}
              >
                CLAIM NOW
            </button>

          </div>
        </div>
        
        {/* Ticker Section */}
        <div className="bg-[#2A1F45] border border-[#FF00FF]/50 rounded-lg p-3 flex flex-row gap-2 items-center">
          <button 
            className={`text-2xl ${audioEnabled ? 'text-[#FF00FF]' : 'text-[#FF99FF]/50'}`}
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