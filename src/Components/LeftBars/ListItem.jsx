import React from 'react'
import '../LeftBars/ListItem.css'
const ListItem = ({imageSrc, text}) => {
  return (
    <div className="list-item">
            <img src={imageSrc} alt="Item" className="item-image" />
            <div className="item-text">{text}</div>
        </div>
  )
}

export default ListItem
