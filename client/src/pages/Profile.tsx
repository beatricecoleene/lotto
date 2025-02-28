import React from 'react'
import Header from '../components/headers/Header'

const Profile = () => {

    const handledepositClick = () => {
    console.log("Deposit button clicked");
    };

    const handleProfileClick = () => {
    console.log("Profile button clicked");
    };

  return (
    <div>Profile
      <Header
        title="Profile"
        balance={1000}
        onProfileClick={handleProfileClick}
        activePage="profile"
      />
    </div>
  )
}

export default Profile