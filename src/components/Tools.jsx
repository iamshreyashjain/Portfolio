import VSCode from './../assets/Tools/VSCode.png'
import Postman from './../assets/Tools/Postman.png'
import swagger from './../assets/Tools/swagger.png'

export default function Tools(){
    const experience = [
        {
            id: 1,
            img : VSCode,
            title : 'VSCode',
            style : 'shadow-blue-600'
        },
        {
            id: 2,
            img : Postman,
            title : 'Postman',
            style : 'shadow-orange-600'
        },
        {
            id: 2,
            img : swagger,
            title : 'Swagger',
            style : 'shadow-emerald-500'
        },
    ]
    return(
        <>
            <div name="Tools"
                 className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800"> 
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Tools</p>
                        <p className="py-6">These are the Tools I have worked with</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {experience.map(({ img, title, style}, index)=>(

                        <div key={index} className={`shadow-lg hover:scale-105  hover:animate-pulse  duration-500 py-2 rounded-lg ${style}`}>
                        <div className=''>
                            <img src ={img} className='w-15 h-12 mt-2 sm:h-20 sm:w-20 mx-auto ' />
                            <p className='mt-4 truncate text-xs  sm:text-xl'>{title}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}