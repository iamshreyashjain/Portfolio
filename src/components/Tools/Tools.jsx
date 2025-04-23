import VSCode from './../../assets/Images/ToolsImages/VSCode.png'
import Postman from './../../assets/Images/ToolsImages/Postman.png'
import swagger from './../../assets/Images/ToolsImages/swagger.png'
import GitHub from './../../assets/Images/SkillsImages/GitHub.png'
import Git from './../../assets/Images/SkillsImages/Git.png'

export default function Tools() {
    const experience = [
        {
            id: 1,
            img: VSCode,
            title: 'VS Code',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            img: Postman,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
        {
            id: 3,
            img: swagger,
            title: 'Swagger',
            style: 'shadow-emerald-500'
        },
        {
            id: 7,
            img: GitHub,
            title: 'GitHub',
            style: 'shadow-violet-600'
        },
        {
            id: 8,
            img: Git,
            title: 'Git',
            style: 'shadow-orange-600'
        },

    ]

    return (
        <>
            <div name="Tools"
             className="w-full text-white bg-gradient-to-b from-gray-200 via-stone-50 to-gray-200 md:h-screen">
                 <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
                 <div>
                    <p className="inline text-4xl font-bold text-gray-700 border-b-4 border-gray-500">  
                            Tools
                            </p>
                        <p className="py-6 text-gray-900">These are the Tools I have worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                        {experience.map(({ img, title, style }, index) => (

                            <div key={index} className={`shadow-lg hover:scale-105  hover:animate-pulse  duration-500 py-2 rounded-lg ${style}`}>
                                <div className=''>
                                    <img src={img} className='w-15 h-12 mt-2 sm:h-20 sm:w-20 mx-auto ' />
                                    <p className='mt-4 truncate text-xs  sm:text-xl text-gray-900'>{title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}