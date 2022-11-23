import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Profile} alt="" />
      </div>
    </div>
  )
}

export default ProfileCard