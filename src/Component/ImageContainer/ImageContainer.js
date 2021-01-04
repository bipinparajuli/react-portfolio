import React from 'react'
import {Image} from 'react-bootstrap'
import img from '../../Assets/Images/a.jpg'

const ImageContainer = () => {
    return (
    <div>
            <Image style={{borderRadius:"50%",height:"150px",width:"150px",margin:'10px 0 0 15px'}} src={img} roundedCircle />
    </div>
    )
}

export default ImageContainer
