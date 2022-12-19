import React from 'react'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../PostSide/PostSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
    </div>

  )
}

export default Profile