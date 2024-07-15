import HTML from './../assets/HTML.png'
import CSS from './../assets/CSS.png'
import JS from './../assets/jss.png'
import Bootstrap from './../assets/bootstrapTwo.png'
import ReactIcon from './../assets/React-icon.png'
import Tailwind from './../assets/tw2.png'
import GitHub from './../assets/github.png'

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
        {
            id: 5,
            img : ReactIcon,
            title : 'React',
            style : 'shadow-teal-500'
        },
        {
            id: 4,
            img : Bootstrap,
            title : 'Bootstrap',
            style : 'shadow-violet-600'
        },
       
        {
            id: 6,
            img : Tailwind,
            title : 'Tailwind',
            style : 'shadow-teal-600'
        },
        {
            id: 7,
            img : GitHub,
            title : 'GitHub',
            style : 'shadow-purple-600'
        },
]
    return(
        <>
            <div name="Skills"
                 className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"> 
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                        <p className="py-6">These are the Technologies I have worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {experience.map(({id, img, title, style})=>(

                        <div key={id} className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src ={img} className='w-20 mx-auto' style={{minHeight:"80px", maxHeight:'80px'}}/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                    </div>
                </div>                

            </div>
        </>
    )
}   