import React from 'react';
import treasureIcon from "../assets/images/treasure.png";
import coinIcon from "../assets/images/coin.png";


interface DepositItemProps {
  amount: number;
  price: number;
  currency?: string;
  onClick?: () => void;
}

const DepositItem: React.FC<DepositItemProps> = ({
  amount,
  price,
  currency = '₱',
  onClick
}) => {
  return (
    <div className="relative w-60 bg-purple-600 rounded-xl overflow-hidden shadow-lg ">
      {/* Shadow effect */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-purple-400 translate-y-3 blur-sm rounded-b-xl"></div>
      
      {/* Content container */}
      <div className="flex flex-col items-center p-4">

        <div className="mb-2 w-20 h-20">
          <img src={treasureIcon} alt='treasure-icon'></img>
        </div>
        
        {/* Coin amount with coin icon */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-white text-2xl font-bold mr-2">{amount}</span>
          <img src={coinIcon} alt='coin icon' className='w-6 h-6'></img>
        </div>
        
        {/* Price button */}
        <button 
          onClick={onClick}
          className="w-full py-2 bg-green-500 text-green-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
        >
          {currency} {price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default DepositItem;