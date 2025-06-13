import pd from '../../assets/Data/portfolioData/portfolioData';
//ReactIcon
import { MdOpenInNew } from 'react-icons/md';

//Prop
import PortfolioProp from './PortfolioProp/PortfolioProp';

export default function Portfolio() {

    

    return (
        <>
            <div name="Portfolio" className="w-full text-white bg-gradient-to-b from-gray-200 via-stone-50 to-gray-200 md:h-screen">
                <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
                    <div className="pb-8">
                        <p className="inline text-4xl font-bold text-gray-700 border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6 text-gray-700">Check out some of my work right here</p>
                    </div>
                    <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 cols-4 sm:px-0'>
                        <PortfolioProp portfolios = {pd}/>
                    </div>
                </div>
            </div>
        </>
    );
}
