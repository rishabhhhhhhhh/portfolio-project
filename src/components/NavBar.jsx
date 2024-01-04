import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {

  const [ navExpanded, setNavExpanded ] = useState(false);

  const name = 'Rishabh';

  const navDetails = [
    {
      id: 1,
      linkName: 'home',
    },
    {
      id: 2,
      linkName: 'about',
    },
    {
      id: 3,
      linkName: 'portfolio',
    },
    {
      id: 4,
      linkName: 'experience',
    },
    {
      id: 5,
      linkName: 'contact',
    }
  ];

  return (
    <div className='flex justify-between items-center text-white bg-black w-full px-4 h-20 fixed'>
        <div>
            <h1 className='text-4xl font-signature'>{name}</h1>
        </div>

        <ul className='hidden md:flex'>
          {
            navDetails.map(({id, linkName}) => (
              <li 
                key={id}
                className='px-4 capitalize text-gray-500 cursor-pointer font-medium hover:scale-105 duration-150'
              >
                  <Link to={linkName} smooth duration={500}>{linkName}</Link>
              </li>
            ))
          }
        </ul>

        <div onClick={() => setNavExpanded(!navExpanded)} className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
          {
            navExpanded ? <FaTimes size={30} /> : <FaBars size={30} />  
          }
        </div>

        {
          navExpanded && (
            <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
              {
                  navDetails.map(({id, linkName}) => (
                    <li 
                      key={id}
                      className='px-4 capitalize text-gray-500 cursor-pointer text-5xl py-6'
                    >
                      <Link onClick={() => setNavExpanded(!navExpanded)} to={linkName} smooth duration={500}>{linkName}</Link>
                    </li>
                  ))
                }
            </ul>
          )
        }

    </div>
  )
}

export default NavBar