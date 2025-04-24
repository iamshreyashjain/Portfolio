import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

export default function PortfolioProp({ portfolios }) {
    return (
        <>
            {portfolios.map(({ id, src, title }) => (
                <div className='overflow-hidden rounded-lg shadow-md shadow-gray-400' key={id}>
                    <img src={src} alt="" className='min-w-full duration-200 hover:scale-105 hover:animate-pulse h-44 ' />
                    <div className='flex items-center justify-between px-4'>
                            <p className='py-4  text-gray-800 '>{title}</p>
                           <Link to= {`/${id}`} ><MdOpenInNew size={30} className="rounded-full shadow-sm hover:shadow-md text-xl p-1 text-blue-500" /></Link>
                    </div>
                </div>
            ))}
        </>
    )
}