import { useState } from 'react';

interface NumberSelectorProps {
  onSelectNumber: (number: number) => void;
  selectedNumber?: number;
}

const NumberSelector = ({ onSelectNumber, selectedNumber }: NumberSelectorProps) => {
  const [selected, setSelected] = useState<number | undefined>(selectedNumber);
  
  const handleNumberClick = (number: number) => {
    setSelected(number);
    onSelectNumber(number);
  };
  
  // Generate numbers from 0 to 9
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  
  return (
    <div className="relative">
      {/* Shadow effect */}
      <div className="absolute inset-x-0 bottom-0 h-2 md:h-4 bg-pink-300 rounded-b-2xl translate-y-1 md:translate-y-2 blur-sm"></div>
      
      {/* Main container */}
      <div className="bg-purple-600 rounded-full py-1 md:py-3 px-2 md:px-4 flex justify-between items-center shadow-lg relative">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`
              w-6 h-6 
              xs:w-8 xs:h-8 
              sm:w-10 sm:h-10 
              md:w-12 md:h-12 
              lg:w-14 lg:h-14 
              rounded-full flex items-center justify-center 
              text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl 
              font-bold transition-all duration-200
              ${selected === number 
                ? 'bg-purple-800 text-white scale-110 shadow-lg' 
                : 'bg-pink-200 text-black hover:bg-pink-300'}
            `}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberSelector;