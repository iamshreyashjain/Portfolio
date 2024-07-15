import portfolio from './../assets/portfolioImg.jpg'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
export default function Home(){
    return(
        <>
            <div name = "Home" className = "h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
                <div className='md:flex-row max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white'>
                    <div className='flex flex-col justify-center ' >
                        <h2 className='text-4xl sm:text-7xl mt-32'>I am React  Developer</h2>
                        <p className='text-gray-500  max-w-md py-4'>
                            I aspire to work in an organization where I can effectively utilize my knowledge, talent, dedication, and hard work. 
                            My goal is to continually improve and enhance my skills, allowing me to contribute meaningfully and deliver my best performance.
                        </p>
                    <div>
                    <Link to = "Portfolio" smooth duration={500}>
                    <button className='group flex items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-400 rounded-xl px-6 py-3 my-4 w-fit cursor-pointer'>Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={portfolio} className='rounded-2xl fake object-cover mx-auto w-2/3 md:w-full '/>
                </div>
            </div>
        </div>

        </>
    )
}