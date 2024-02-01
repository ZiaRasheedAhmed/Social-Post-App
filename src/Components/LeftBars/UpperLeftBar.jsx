import React from 'react'
import Image1 from '../../Assets/Images/profile.png'
import Image2 from '../../Assets/Images/man.png'
import Image3 from '../../Assets/Images/man1.png'
import Image4 from '../../Assets/Images/woman.png'
import ListItem from './ListItem'
import './UpperLeftBar.css'
import LowerLeftBar from './LowerLeftBar'

const UpperLeftBar = () => {
  return (
    <div className='mainDiv'>
        <div className="blog">
            <div className="heading">
                <h2>Blogs</h2>
            </div>
            <ListItem imageSrc={Image1} text="Tackle Your Closest Spring Cleaning" />
            <ListItem imageSrc={Image4} text="The Truth About Business Blogging" />
            <ListItem imageSrc={Image3} text="10 Top to Stay Healthy" />
            <ListItem imageSrc={Image2} text="Visiting Amsterdam on a Budget" />
        </div>
        <div className="lowerBar">
            <LowerLeftBar/>
        </div>
    </div>
  )
}

export default UpperLeftBar
