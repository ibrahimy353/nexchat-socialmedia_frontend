import React from 'react'
import ProfileSlide from '../../components/profileSlide/ProfileSlide'
import PostSide from '../../PostSide/PostSide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSlide/>
        <PostSide/>
        <div className='RightSide'>Rightside</div>

    </div>
  )
}

export default Home 