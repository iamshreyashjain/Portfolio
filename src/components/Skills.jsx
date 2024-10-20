import HTML from './../assets/Skills/HTML.png'
import CSS from './../assets/Skills/CSS.png'
import JS from './../assets/Skills/JS.png'
import Bootstrap from './../assets/Skills/bootstrapTwo.png'
import ReactIcon from './../assets/Skills/React-icon.png'
import Tailwind from './../assets/Skills/tw2.png'
import GitHub from './../assets/Skills/github.png'
import Git from './../assets/Skills/git.png'
import MySQL from './../assets/Skills/MySQL.png'
import Redux from './../assets/Skills/redux.png'
import Firebase from './../assets/Skills/fireBase.png'
import DotNet from './../assets/Skills/DotNet.png'
import MSSqL from './../assets/Skills/MSSqL.png'

export default function Skills(){
    const experience = [
        {
            id: 1,
            img : HTML,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id: 2,
            img : CSS,
            title : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id: 3,
            img : JS,
            title : 'JavaScript',
            style : 'shadow-yellow-500'
        },
        // {
        //     id: 11,
        //     img : DotNet,
        //     title : 'DotNet',
        //     style : 'shadow-blue-600'
        // },
       
        {
            id: 5,
            img : ReactIcon,
            title : 'React',
            style : 'shadow-cyan-500'
        },

        {
            id: 10,
            img : Redux,
            title : 'Redux',
            style : 'shadow-purple-600'
        },
       
        {
            id: 6,
            img : Tailwind,
            title : 'Tailwind',
            style : 'shadow-teal-600'
        },
        {
            id: 4,
            img : Bootstrap,
            title : 'Bootstrap',
            style : 'shadow-purple-600'
        },
    
        {
            id: 7,
            img : GitHub,
            title : 'GitHub',
            style : 'shadow-violet-600'
        },
        {
            id: 10,
            img : Firebase,
            title : 'Firebase',
            style : 'shadow-blue-600'
        },
      
        {
            id: 8,
            img : Git,
            title : 'Git',
            style : 'shadow-orange-600'
        },
        {
            id: 9,
            img : MySQL,
            title : 'MySQL',
            style : 'shadow-blue-600'
        },
       
       
        // {
        //     id: 9,
        //     img : MSSqL,
        //     title : 'MSSqL',
        //     style : 'shadow-red-600'
        // },
       
       
]
    return(
        <>
            <div name="Skills"
                 className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800"> 
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                        <p className="py-6">These are the Technologies I have worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {experience.map(({ img, title, style}, index)=>(

                        <div key={index} className={`shadow-lg hover:scale-105  hover:animate-pulse duration-500 py-2 rounded-lg ${style}`}>
                            <img src ={img} className='w-15 h-12 mt-2 sm:h-20 sm:w-20 mx-auto' />
                            <p className='mt-4 truncate text-xs  sm:text-xl'>{title}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}   