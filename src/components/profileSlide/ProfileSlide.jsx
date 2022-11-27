import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
import './ProfileSlide.css'

const ProfileSlide = () => {
  return (
    <div className='ProfileSlide'>
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSlide 