import { useState, useEffect } from 'react';
import portfolio from './../assets/portfolioImg.jpg';
import ShreyashJain_Resume from './../assets/ShreyashJain_Resume.pdf';
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the timeout duration as needed 
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
                <div className='md:flex-row max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-4xl sm:text-7xl mt-32'>I am ReactJs Developer</h2>
                        <p className='text-gray-500 max-w-md py-4 indent-8'>
                            I aspire to work in an organization where I can effectively utilize my knowledge, talent, dedication, and hard work. 
                            My goal is to continually improve and enhance my skills, allowing me to contribute meaningfully and deliver my best performance.
                        </p>
                        <div>
                            <a href={ShreyashJain_Resume} download="ShreyashJain_Resume.pdf">
                                <button className='group hover:animate-pulse flex items-center justify-center bg-gradient-to-br from-blue-700 to-cyan-400 rounded-xl px-6 py-3 my-4 w-fit cursor-pointer'>
                                    Download Resume
                                    <span className=''>
                                        <IoDocumentTextOutline size={25} className='ml-1' />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='w-2/3 md:w-2/4 mx-auto'>
                        {isLoading ? (
                            <div className='animate-pulse bg-gray-500 rounded-2xl max-w-72  h-64 md:h-80'></div>
                        ) : (
                            <img src={portfolio} className='rounded-2xl max-w-72 h-64 md:h-80' />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
