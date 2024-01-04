import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeroImage from '../assets/dev_avatar_image.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div>
                <h1 className='text-white sm:text-7xl'>I'm a Full Stack developer</h1>
                <p className='text-gray-500 py-6 max-w-md'>
                    I have 8 years of experience building and designing software. 
                    Currently, I love to work on web applications using technologies like React, NextJS, tailwind etc.
                </p>
                <div>
                    <Link to={"portfolio"} smooth duration={500} className='group w-fit text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 rounded-md'>
                        Portfolio
                        <MdOutlineKeyboardArrowRight size={25} className='group-hover:rotate-90 duration-300 ml-1'/>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt='My Portfolio' className='rounded-full mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home