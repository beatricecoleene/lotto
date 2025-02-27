import Header from "../components/headers/Header";
import Nav from "../components/Nav";

const History = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div>
      <Header
        title="History"
        balance={1000}
        onDepositClick={handledepositClick}
        onProfileClick={handleProfileClick}
      />
      <Nav activePage="history" />
    </div>
  );
};

export default History;
