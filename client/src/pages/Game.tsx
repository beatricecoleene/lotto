import Header from "../components/headers/Header";
import Nav from "../components/Nav";

const Game = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div>
      <Header
        title="Game"
        balance={1000}
        onDepositClick={handledepositClick}
        onProfileClick={handleProfileClick}
      />
      <Nav activePage="game" />
    </div>
  );
};

export default Game;
