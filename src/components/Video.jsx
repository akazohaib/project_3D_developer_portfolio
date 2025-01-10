import React from 'react'
import Airport from '../assets/airport.mp4'

const Video = () => {
  return (
    <div className='flex justify-center'>
        <video src={Airport}  className='rounded-lg lg:w-[80%] w-full' autoPlay loop muted></video>
    </div>
  )
}

export default Video