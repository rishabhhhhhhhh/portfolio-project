import React from 'react';
import HtmlImage from '../assets/html.png';
import CSSImage from '../assets/css.png';
import GithubImage from '../assets/github.png';
import GraphQLImage from '../assets/graphql.png';
import ReactImage from '../assets/react.png';
import NextJSImage from '../assets/nextjs.png';
import TailwindImage from '../assets/tailwind.png';
import JavascriptImage from '../assets/js.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: HtmlImage,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSSImage,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JavascriptImage,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: TailwindImage,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: NextJSImage,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: GraphQLImage,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: GithubImage,
            title: 'Github',
            style: 'shadow-gray-500'
        }
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white'>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I have used for projects in the past</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({src, id, title, style}) => (
                        <div key={id} className={` ${style} shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}>
                            <img src={src} height={25} width={20} alt="My experience with tech" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Experience