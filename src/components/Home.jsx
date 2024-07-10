import portfolio from './../assets/portfolioImg.jpg'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
export default function Home(){
    return(
        <>
            <div name ="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center h-full' >
                    <h2 className='text-4xl sm:text-8xl'>I am React Js Developer</h2>
                    <p className='text-gray-500 py-5 max-w-md'>
                    I aspire to work in an organization where I can effectively utilize my knowledge, talent, dedication, and hard work. 
                    My goal is to continually improve and enhance my skills, allowing me to contribute meaningfully and deliver my best performance.
                    </p>
                
                <div>
                <button>
                    Portfolio
                    <span>
                        <MdOutlineKeyboardArrowRight/>
                    </span>
                </button>
                </div>
                </div>
                <div>
                    <img src={portfolio} className='rounded-2xl fake object-cover mx-auto w-2/3 md:w-full'/>
                </div>
            </div>
        </div>

        </>
    )
}