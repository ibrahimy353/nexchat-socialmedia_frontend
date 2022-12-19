import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Ibra</span>
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

            {ProfilePage && (
            <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>3</span>
              <span>Post</span>
            </div>
           </> 
           )}
           {/*if the profile page is true then it should return our jsx verticle line and post*/}
          
        </div>
         <hr />
      </div>
      {/*if the profile has nothing then return nothing but if its true then return ,my profile */}
      {ProfilePage ?'': 
     <span>
      My Profile
     </span>}

    </div>
  )
}

export default ProfileCard