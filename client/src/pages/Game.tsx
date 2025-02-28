import WinningPrize from "../components/games/WinningPrize";
import Header from "../components/headers/Header";
import SideNav from "../components/Nav"; 

const Game = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        title="Game" 
        balance={1000} 
        onDepositClick={handledepositClick} 
        onProfileClick={handleProfileClick}
        activePage="game"
      />
      
      <div className="flex flex-1 overflow-hidden">
        <SideNav activePage="game" />
        
        <div className="flex-1 p-4 overflow-auto">
          <h2>GAME CONTENT</h2>

          <WinningPrize prize = {10323000}/>
          

        </div>
      </div>
    </div>
  );
};

export default Game;