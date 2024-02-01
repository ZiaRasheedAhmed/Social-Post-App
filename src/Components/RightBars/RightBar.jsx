import React from 'react'
import TopBar from './TopBar'
import LowerLeftBar from '../LeftBars/LowerLeftBar'
import ListItem from '../LeftBars/ListItem'
import Image1 from '../../Assets/Images/profile.png'
import Image2 from '../../Assets/Images/man.png'
import Image3 from '../../Assets/Images/man1.png'
import Image4 from '../../Assets/Images/woman.png'
import './RightBar.css'

const RightBar = () => {
  return (
    <div className='main-container'>
        <TopBar/>
        <div className="blog">
            <div className="heading">
                <h2>Latest Updates</h2>
            </div>
            <ListItem imageSrc={Image1} text="John posted an update" />
            <ListItem imageSrc={Image4} text="Adele posted an update" />
            <ListItem imageSrc={Image3} text="John posted an update" />
            <ListItem imageSrc={Image2} text="John posted an update in the group" />
        </div>
        <LowerLeftBar/>
      
    </div>
  )
}

export default RightBar
