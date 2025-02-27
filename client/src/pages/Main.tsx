import Header from "../components/Header"

const Main = () => {
    const handledepositClick = () => {
        console.log("Deposit button clicked");
    }

    const handleProfileClick = () => {
        console.log("Profile button clicked");
    }

  return (
    <div>
        <Header title="Main" balance={1000} onDepositClick={handledepositClick} onProfileClick={handleProfileClick}/>
    </div>
  )
}

export default Main