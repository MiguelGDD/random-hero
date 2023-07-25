'use client';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const VideoWrapper = () => {
    const [isSeted, setisSeted] = useState(false)

    useEffect(() => {
        setisSeted(true)
    }, [])
    

  return ( isSeted ?
    <div className="w-screen h-screen flex">
        <ReactPlayer
          url="/onlineBg.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
    </div>
    : 
    <div className="w-screen h-screen flex bg-black" />
  )
}

export default VideoWrapper