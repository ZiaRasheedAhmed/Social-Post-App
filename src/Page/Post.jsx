import React from 'react'
import './Post.css'
import Navbar from '../Components/NavBar/Navbar'
import UpperLeftBar from '../Components/LeftBars/UpperLeftBar'
import PostComponent from '../Components/MainPosts/PostComponent'
import RightBar from '../Components/RightBars/RightBar'

const Post = () => {
  return (
    <div>
      <Navbar/>
      <div className='body'>
        <UpperLeftBar/>
        <PostComponent/>
        <RightBar/>
      </div>
    </div>
  )
}

export default Post
