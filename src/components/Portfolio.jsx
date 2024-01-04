import React from 'react';
import HeroImage from '../assets/dev_avatar_image.png';

const Portfolio = () => {

    const portfolioDetails = [
        {
            id: 1,
            src: HeroImage
        },
        {
            id: 2,
            src: HeroImage
        },
        {
            id: 3,
            src: HeroImage
        },
        {
            id: 4,
            src: HeroImage
        }
    ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my projects</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolioDetails.map(({src, id}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="Project information" className='rounded-md hover:scale-105 duration-200'/>
                            <div className='mt-2 flex justify-between'>
                                <button className='p-4 hover:scale-110 duration-200'>Demo</button>
                                <button className='p-4 hover:scale-110 duration-200'>Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Portfolio