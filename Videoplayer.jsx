import React, { useEffect, useRef } from 'react';
import './css/Videoplayer.css';
import { IoIosMicOff } from "react-icons/io";
import { BsFillCameraVideoOffFill } from "react-icons/bs";


export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div className="video-player-container">
      Uid: {user.uid}
      <div
        ref={ref}
        className='video-screen'
      ></div>
      <div className='all-btn'>
        <div className='icon-border'>
         <IoIosMicOff className='mic-btn'/>
        </div>
        <div className='icon-border'>
         <BsFillCameraVideoOffFill className='mic-btn'/>
        </div>
      </div>
    </div>
  );
};
