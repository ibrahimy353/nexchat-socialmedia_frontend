import React from 'react'
import ProfileSlide from '../../components/profileSlide/ProfileSlide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSlide/>
        <div className='postSide'>Post</div>
        <div className='RightSide'>Rightside</div>

    </div>
  )
}

export default Home 