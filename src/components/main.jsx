import React from 'react'
import videoBG from '../CNQR.mp4';

const main = () => {
  return (
    <div className='main'>
        <video src={videoBG} autoPlay={true} loop={true} muted={true} playsInline={true}/>
    </div>
  )
}

export default main