import React from 'react'
import ImageList from './ImageList'
import './LowerLeftBar.css'


const LowerLeftBar = () => {
  return (
    <>
        <div className="list">
            <h2>I'm Following</h2>
            <ImageList/>
            <ImageList/>
            <ImageList/>
        </div>
    </>
  )
}

export default LowerLeftBar
