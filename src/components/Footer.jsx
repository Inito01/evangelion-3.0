import React from 'react'
import myProfilePic from '../images/bryanavatar.png';

export const Footer = () => {
  return (
    <div className='h-10 w-full'>
        <footer className='text-center lg:text-left font-monserrat text-sm'>
            <div className='text-gray-700 text-center p-4 flex justify-center'>
                © 2022 Designed with <span className='mx-1'>&#10084;</span> by
                <a href="https://github.com/Inito01" target="_blank" rel='noopener noreferrer' className='flex'>
                  <span className='text-gray-800 hover:opacity-75 mx-1' href="#bryan.dev"> Bryan</span>
                  <img src={myProfilePic} className='w-5 h-5 rounded-md border border-gray-300 bg-black' alt="Bryan's profile avatar" />
                </a>
            </div>
        </footer>
    </div>
  )
}
