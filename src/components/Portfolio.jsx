import eComm from './../assets/Projects/eComm.png'
import TodoApp from './../assets/Projects/TodoApp.png'
import CRM from './../assets/Projects/CRM.jpeg'

export default function Portfolio() {
    const portfolios = [
        {
            id: 3,
            src: CRM,
            vercelLink: 'https://igniculusscrm.com/',
            gitLink: 'https://igniculusscrm.com/',

        },
        {
            id: 1,
            src: eComm,
            vercelLink: 'https://e-commerce-lovat-nine.vercel.app/',
            gitLink: 'https://github.com/iamshreyashjain/e-commerce'
        },
        {
            id: 2,
            src: TodoApp,
            vercelLink: 'https://todo-plus-sable.vercel.app/',
            gitLink: 'https://github.com/iamshreyashjain/TodoPlus'
        },
       
    ];

    return (
        <>
            <div name="Portfolio" className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6 ">Check out some of my work right here</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 cols-4 gap-8 px-12 sm:px-0'>
                        {portfolios.map(({ id, src, vercelLink, gitLink }) => (
                            <div className='shadow-md shadow-gray-400 rounded-lg overflow-hidden' key={id}>
                                <img src={src} alt="" className='rounded-top duration-200 hover:scale-105 hover:animate-pulse h-44 min-w-full	' />
                                <div className='flex items-center justify-center'>
                                    <a href={vercelLink} target="_blank" >
                                        <button className='w-1/2 px-6 py-3 shadow-md m-4 duration-200 hover:scale-105'>Demo</button>
                                    </a>
                                    <a href={gitLink} target="_blank" >
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
