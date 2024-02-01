import React from 'react'
import Image1 from '../../Assets/Images/profile.png'
import Image2 from '../../Assets/Images/man.png'
import Image3 from '../../Assets/Images/man1.png'
import Image4 from '../../Assets/Images/woman.png'
import Image5 from '../../Assets/Images/gamer.png'
import '../LeftBars/ImageList.css'

const ImageList = () => {
    const imagePaths = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
    ];

    return (
        <div className="image-list">
            {imagePaths.map((imagePath, index) => (
                <img key={index} src={imagePath} alt={`Image ${index}`} className="image-item" />
            ))}
        </div>
    );
}

export default ImageList
