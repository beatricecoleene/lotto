
const WinningPrize = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative">
        {/* Purple header banner with rounded corners */}
        <div className="bg-purple-900 text-pink-300 font-bold text-center py-1 px-6 rounded-full mb-1 text-lg tracking-wider">
          WINNING PRIZE
        </div>
        
        {/* Main display box with shadow effect */}
        <div className="bg-pink-200 rounded-lg px-6 py-3 flex justify-center border-2 border-purple-800 
      shadow-[0px_8px_20px_rgba(128,0,128,0.7)]">
          <div className="text-purple-900 text-4xl font-bold tracking-widest">
            1,000,000
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default WinningPrize;