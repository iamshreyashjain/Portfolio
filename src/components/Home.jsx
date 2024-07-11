import portfolio from './../assets/portfolioImg.jpg'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
export default function Home(){
    return(
        <>
            <div name ="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
                <div className='md:flex-row max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  text-white'>
                    <div className='flex flex-col justify-center ' >
                        <h2 className='text-4xl sm:text-7xl'>I am React Js Developer</h2>
                        <p className='text-gray-500  max-w-md py-4'>
                            I aspire to work in an organization where I can effectively utilize my knowledge, talent, dedication, and hard work. 
                            My goal is to continually improve and enhance my skills, allowing me to contribute meaningfully and deliver my best performance.
                        </p>
                    <div>
                        <button className='group flex items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-600 rounded-xl p-2'>
                            Portfolio
                            <span>
                                <MdOutlineKeyboardArrowRight size={25} className='group-hover:rotate-90 duration-300'/>
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