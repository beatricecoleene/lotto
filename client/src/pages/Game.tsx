import { useState } from "react";
import CountdownTimer from "../components/games/CountDown";
import WinningNumbersDisplay from "../components/games/WinningNumber";
import WinningPrize from "../components/games/WinningPrize";
import Header from "../components/headers/Header";
import SideNav from "../components/Nav"; 
import NumberSelector from "../components/games/NumberSelector";
import SubmitNumbers from "../components/games/SubmitNumbers";

const Game = () => {
  // Create separate state variables for each row
  const [firstNumber, setFirstNumber] = useState<number | undefined>();
  const [secondNumber, setSecondNumber] = useState<number | undefined>();
  const [thirdNumber, setThirdNumber] = useState<number | undefined>();
  
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  const handleSubmit = () => {
    console.log("Submitting numbers:", [firstNumber, secondNumber, thirdNumber]);
    // Add API call or other submission logic here
    
    // Reset selections after submission
    setFirstNumber(undefined);
    setSecondNumber(undefined);
    setThirdNumber(undefined);
  };

  const handleCancel = () => {
    // Reset selections
    setFirstNumber(undefined);
    setSecondNumber(undefined);
    setThirdNumber(undefined);
  };

  // Get selected numbers as an array
  const selectedNumbers = [firstNumber, secondNumber, thirdNumber].filter(
    (num): num is number => num !== undefined
  );

  return (
    <div className="flex flex-col h-screen">
      <Header 
        title="Game" 
        balance={1000} 
        onProfileClick={handleProfileClick}
        activePage="game"
      />
      
      <div className="flex flex-1 overflow-hidden bg-gray-900">
        {/* <SideNav activePage="game" /> */}
        
        <div className="flex-1 p-4 overflow-auto pb-25">
          <WinningPrize prize={10323000}/>
          <CountdownTimer />
          <WinningNumbersDisplay numbers={null} isLoading={false} />
          
          <div className="flex flex-col space-y-4 md:space-y-6 mt-6 md:mx-10">
            {/* Row 1 */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm md:text-2xl font-bold">1</div>
              <div className="flex-1">
                <NumberSelector onSelectNumber={setFirstNumber} selectedNumber={firstNumber} />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm md:text-2xl font-bold">2</div>
              <div className="flex-1">
                <NumberSelector onSelectNumber={setSecondNumber} selectedNumber={secondNumber} />
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm md:text-2xl font-bold">3</div>
              <div className="flex-1">
                <NumberSelector onSelectNumber={setThirdNumber} selectedNumber={thirdNumber} />
              </div>
            </div>
          </div>
          
          <SubmitNumbers 
            selectedNumbers={selectedNumbers}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            amount={20.00}
            currency="PHP"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;