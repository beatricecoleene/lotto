import Header from "../components/headers/Header";
import SideNav from "../components/Nav";

const Main = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Home"
        balance={1000}
        onDepositClick={handledepositClick}
        onProfileClick={handleProfileClick}
        activePage="home"
      />

      <div className="flex flex-1 overflow-hidden">
        <SideNav activePage="home" />

        <div className="flex-1 p-4 overflow-auto">
          <h2>HOME CONTENT</h2>
          {/* Your home content goes here */}
        </div>

      </div>
    </div>
  );
};

export default Main;
