
interface WinningNumbersProps {
  numbers: number[] | null;
  maxNumbers?: number;
  isLoading?: boolean;
}

const WinningNumbers = ({ 
  numbers, 
  maxNumbers = 3, 
  isLoading = false 
}: WinningNumbersProps) => {
  
  // Create an array of placeholders if numbers aren't provided
  const displayNumbers = numbers || Array(maxNumbers).fill(null);
  
  // Validate that numbers are within the 0-9 range
  const validateNumber = (num: number | null): boolean => {
    return num !== null && num >= 0 && num <= 9;
  };
  
  return (
    <div className="flex justify-center items-center gap-4 p-4 mt-5">
      {displayNumbers.map((number, index) => (
        <div 
          key={index}
          className="w-20 h-20 bg-fuchsia-100 border-4 border-fuchsia-500 flex items-center justify-center rounded-sm">
          <span className="text-4xl font-bold text-black">
            {isLoading ? 
              "..." : 
              validateNumber(number) ? 
                number : 
                "?"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WinningNumbers;