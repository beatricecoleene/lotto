import Header from "../components/headers/Header";
import SideNav from "../components/Nav"; 

const History = () => {
  const handledepositClick = () => {
    console.log("Deposit button clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile button clicked");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        title="History" 
        balance={1000} 
        onProfileClick={handleProfileClick}
        activePage="history"
      />
      
      <div className="flex flex-1 overflow-hidden bg-gray-900">
        {/* <SideNav activePage="history" /> */}
        
        <div className="flex-1 p-4 overflow-auto">
          <h2>HISTORY CONTENT</h2>
        </div>
      </div>
    </div>
  );
};

export default History;