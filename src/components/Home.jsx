import { useState, useEffect } from 'react';
import portfolio from './../assets/portfolioImg.jpg';
import ShreyashJain_Resume from './../assets/Resume/ShreyashJain_Resume.pdf';
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
            <div name="Home" className="w-full h-screen bg-gradient-to-b from-gray-200 via-stone-100 to-gray-300">
                <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto text-white md:flex-row'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='mt-32 text-4xl text-stone-800 sm:text-7xl'>I am Frontend Developer</h2>
                        <p className='max-w-md py-4 text-gray-700 indent-8'>
                            I aspire to work in an organization where I can effectively utilize my knowledge, talent, dedication, and hard work. 
                            My goal is to continually improve and enhance my skills, allowing me to contribute meaningfully and deliver my best performance.
                        </p>
                        <div>
                            <a href={ShreyashJain_Resume} download="ShreyashJain_Resume.pdf">
                                <button className='flex items-center justify-center px-6 py-3 my-4 cursor-pointer group hover:animate-pulse bg-gradient-to-br from-gray-300 to-stone-500 rounded-xl w-fit'>
                                    Download Resume
                                    <span className=''>
                                        <IoDocumentTextOutline size={25} className='ml-1' />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='w-2/3 mx-auto md:w-2/4'>
                        {isLoading ? (
                            <div className='h-64 bg-gray-500 animate-pulse rounded-2xl max-w-72 md:h-80'></div>
                        ) : (
                            <img src={portfolio} className='h-64 border-4 border-gray-400 sm:mt-20 rounded-2xl max-w-72 md:h-80' />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
