import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>kilonzi</span>
        <span>Mtu wa mjei</span>
      </div>
      
      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>7534</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>
            <span>1</span>
            <span>Followers</span>
          
        </div>
         <hr />
      </div>
     <span>
      My Profile
     </span>

    </div>
  )
}

export default ProfileCard