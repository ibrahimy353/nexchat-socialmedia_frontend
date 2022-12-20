import React from 'react'
import ProfileSlide from '../../components/profileSlide/ProfileSlide'
import RightSide from '../../components/RightSide/RightSide'
import TrendCard from '../../components/TrendCard/TrendCard'
import PostSide from '../../PostSide/PostSide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSlide/>
        <PostSide/>
        <RightSide/>
        <TrendCard/>
    </div>
  )
}

export default Home 