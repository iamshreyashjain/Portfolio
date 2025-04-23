import HTML from './../../assets/Images/SkillsImages/HTML.png'
import CSS from './../../assets/Images/SkillsImages/CSS.png'
import JS from './../../assets/Images/SkillsImages/JS.png'
import ReactIcon from './../../assets/Images/SkillsImages/ReactIcon.png'

import Tailwind from './../../assets/Images/SkillsImages/Tailwind.png'
import Bootstrap from './../../assets/Images/SkillsImages/Bootstrap.png'
import Firebase from './../../assets/Images/SkillsImages/Firebase.png'

import MySQL from './../../assets/Images/SkillsImages/MySQL.png'


export default function Skills() {
    const experience = [
        {
            id: 1,
            img: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            img: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            img: JS,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            img: ReactIcon,
            title: 'React',
            style: 'shadow-cyan-500'
        },
        // {
        //     id: 10,
        //     img: Redux,
        //     title: 'Redux',
        //     style: 'shadow-purple-600'
        // },
        {
            id: 6,
            img: Tailwind,
            title: 'Tailwind',
            style: 'shadow-teal-600'
        },
        {
            id: 4,
            img: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id: 10,
            img: Firebase,
            title: 'Firebase',
            style: 'shadow-yellow-600'
        },
       
        {
            id: 9,
            img: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-600'
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
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 ">
                        {experience.map(({ img, title, style }, index) => (

                            <div key={index} className={`shadow-lg hover:scale-105 bg-gray-100 hover:animate-pulse duration-500 py-2 rounded-lg ${style}`}>
                                <img src={img} className='w-15 h-12 mt-2 sm:h-20 sm:w-20 mx-auto' />
                                <p className='mt-4 truncate text-xs  sm:text-xl text-gray-900'>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}   