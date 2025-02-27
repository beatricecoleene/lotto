import Header from "../components/headers/Header";
import Nav from "../components/Nav";

const Main = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div>
      <Header
        title="Home"
        balance={1000}
        onDepositClick={handledepositClick}
        onProfileClick={handleProfileClick}
      />
      <Nav activePage="home" />
    </div>
  );
};

export default Main;
