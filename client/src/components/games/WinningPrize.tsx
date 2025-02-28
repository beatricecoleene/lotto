import "../../css/WP.css";

interface WinningPrizeProps {
  prize: number;
}

const WinningPrize = ({prize}: WinningPrizeProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20">
      <div className="inline-block text-center">
        <div className="bg-purple-900 text-pink-300 font-bold text-center py-3 px-10 rounded-full 
        mb-1 text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] tracking-wider w-auto inline-block">
          WINNING PRIZE
        </div>
        
        <div className="bg-pink-200 rounded-lg px-6 sm:px-8 md:px-10 py-3 flex justify-center border-2 border-purple-800 
      shadow-[0px_8px_20px_rgba(128,0,128,0.7)]">
          <div className="text-purple-900 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-widest">
            {prize.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningPrize;