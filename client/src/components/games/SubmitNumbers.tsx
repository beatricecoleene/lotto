import React from 'react';

interface SubmitNumbersProps {
  selectedNumbers: (number | undefined)[];
  onSubmit: () => void;
  onCancel: () => void;
  amount?: number;
  currency?: string;
}

const SubmitNumbers = ({
  selectedNumbers, onSubmit, onCancel, amount = 20.00, currency = 'PHP'
}: SubmitNumbersProps) => {
  const allNumbersSelected = selectedNumbers.length === 3 && 
    selectedNumbers.every(num => num !== undefined);

  if (!allNumbersSelected) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20" />
      
      {/* Bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 bg-purple-600 rounded-t-3xl p-4 z-50 shadow-lg mx-[15%]">
        <div className="flex items-center justify-between">
          <div className="bg-green-500 p-3 rounded-lg text-white font-bold 
             hover:bg-green-600 cursor-pointer 
             transition-all duration-300 ease-in-out" onClick={onCancel}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-green-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
              />
            </svg>
          </div>
          
          <div className="bg-green-500 flex-1 mx-4 p-4 rounded-lg flex flex-col items-center justify-center 
             hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in-out" onClick={onSubmit}>
            <div className="text-green-900 font-medium">Total amount</div>
            <div className="text-green-900 text-xl font-bold">
              {amount.toFixed(2)} {currency}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SubmitNumbers;