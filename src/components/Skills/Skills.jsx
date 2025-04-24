import HTML from './../../assets/Images/SkillsImages/HTML.png'
import CSS from './../../assets/Images/SkillsImages/CSS.png'
import JS from './../../assets/Images/SkillsImages/JS.png'
import ReactIcon from './../../assets/Images/SkillsImages/ReactIcon.png'
import ReduxLogo from './../../assets/Images/SkillsImages/ReduxLogo.png'
import Tailwind from './../../assets/Images/SkillsImages/TailwindImg.png'
import Bootstrap from './../../assets/Images/SkillsImages/Bootstrap.png'
import Firebase from './../../assets/Images/SkillsImages/Firebase.png'

import MySQL from './../../assets/Images/SkillsImages/MySQL.png'


export default function Skills() {
    const experience = [
        {
            id: 1,
            img: HTML,
            title: 'HTML',
            style: 'shadow-orange-500 bg-orange-800'
        },
        {
            id: 2,
            img: CSS,
            title: 'CSS',
            style: 'shadow-blue-500 bg-sky-800'
        },
        {
            id: 3,
            img: JS,
            title: 'JavaScript',
            style: 'shadow-yellow-500 bg-yellow-500'
        },
        {
            id: 5,
            img: ReactIcon,
            title: 'React',
            style: 'shadow-cyan-800 bg-cyan-800 '
        },
        {
            id: 10,
            img: ReduxLogo,
            title: 'Redux',
            style: 'shadow-purple-600 bg-violet-900'
        },
        {
            id: 6,
            img: Tailwind,
            title: 'Tailwind',
            style: 'shadow-teal-600 bg-cyan-700'
        },
        {
            id: 4,
            img: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600 bg-purple-900'
        },
        {
            id: 10,
            img: Firebase,
            title: 'Firebase',
            style: 'shadow-yellow-600 bg-amber-700'
        },
       
        {
            id: 9,
            img: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-600 bg-blue-900'
        },
    ]
    return (
        <>
            <div name="Skills"
             className="w-full text-white bg-gradient-to-b from-gray-200 via-stone-50 to-gray-200 md:h-screen">
                 <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
                    <div>
                    <p className="inline text-4xl font-bold text-gray-700 border-b-4 border-gray-500">  

                            Skills</p>
                        <p className="py-6 text-gray-900">These are the Technologies I have worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0  ">
                        {experience.map(({ img, title, style }, index) => (

                            <div key={index} className={`shadow-2xl hover:scale-105  hover:animate-pulse duration-500 py-2 rounded-lg ${style}`}>
                                <img src={img} className='w-15 h-12 mt-2 sm:h-20 sm:w-20 mx-auto' />
                                <p className='mt-4 truncate text-xs  sm:text-xl text-white'>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}   