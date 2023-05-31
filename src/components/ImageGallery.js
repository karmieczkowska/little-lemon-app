// import React from 'react'
// import "../styles/ImageGallery.css"
// import photo1 from "../assets/restaurant.jpg"

// function ImageGallery() {
//   return (
//     <div className="image-gallery">
//         <div className="row">
//             <div className="column">
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//             </div>
//             <div className="column">
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//             </div>
//             <div className="column">
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//             </div>
//             <div className="column">
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//                 <img src={photo1} alt="" className="gallery-photo"/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ImageGallery

import React, { useState } from 'react';
import "../styles/ImageGallery.css"
import { FaBars } from "react-icons/fa";

import { GalleryPhoto } from './menu/Data';


function ImageGallery() {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = ( imgSrc ) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
        <div className={model ? "model open" : "model"} >
            <img src={tempImgSrc} alt=""/>
            <FaBars onClick={() => setModel(false)}/>
        </div>
        <div className="gallery">
            {GalleryPhoto.map((item, i) => {
                return (
                    <div className="pictures" key={i} onClick={()=> getImg(item.imgSrc)} >
                        <img src={item.imgSrc} style={{width: '100%'}} alt=""/>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default ImageGallery