import React from 'react'
import evaHome from '../images/eva_01_header.jpg';
import titleHome from '../images/Evangelion_title.png';

export const Home = () => {
  return (
    <div id='home' className="h-screen w-full bg-white flex justify-center items-center sm:items-stretch">
      {/* Eva Image center */}
      <img src={evaHome} className='relative opacity-95' alt="Eva 01"></img>
      {/* Title Banner */}
      <div className='absolute top-36 mx-5 md:top-1/2 md:mx-28'>
        <img src={titleHome} className='md:w-[720px]' alt="Evangelion title png" />
      </div>
    </div>
  )
}
