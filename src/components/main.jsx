import React from 'react'
import videoBG from '../CNQR.mp4';

const main = () => {
  return (
    <div className='main'>
        <video src={videoBG} autoPlay loop mute/>
    </div>
  )
}

export default main