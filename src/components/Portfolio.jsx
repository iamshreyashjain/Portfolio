import eComm from './../assets/Projects/eComm.png'
import JainShadi from './../assets/Projects/JainShadi.png'
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
            id: 2,
            src: JainShadi,
            vercelLink: 'https://todo-plus-sable.vercel.app/',
            gitLink: 'https://github.com/iamshreyashjain/TodoPlus'
        },

        {
            id: 1,
            src: eComm,
            vercelLink: 'https://e-commerce-lovat-nine.vercel.app/',
            gitLink: 'https://github.com/iamshreyashjain/e-commerce'
        },
       
    ];

    return (
        <>
            <div name="Portfolio" className="w-full text-white bg-gradient-to-b from-gray-200 via-stone-50 to-gray-200 md:h-screen">
                <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
                    <div className="pb-8">
                        <p className="inline text-4xl font-bold text-gray-700 border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6 text-gray-700">Check out some of my work right here</p>
                    </div>
                    <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 cols-4 sm:px-0'>
                        {portfolios.map(({ id, src, vercelLink, gitLink }) => (
                            <div className='overflow-hidden rounded-lg shadow-md shadow-gray-400' key={id}>
                                <img src={src} alt="" className='min-w-full duration-200 rounded-top hover:scale-105 hover:animate-pulse h-44 ' />
                                <div className='flex items-center justify-center'>
                                    <a href={vercelLink} target="_blank" >
                                        <button className='w-1/2 px-6 py-3 m-4 text-gray-800 duration-200 hover:scale-105'>Demo</button>
                                    </a>
                                    <a href={gitLink} target="_blank" >
                                        <button className='w-1/2 px-6 py-3 m-4 text-gray-800 duration-200 hover:scale-105'>Code</button>
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
