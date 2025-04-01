import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
export default function Navbar(){
    const links = [
        {
            id: 1,
            link : 'Home'
        },
        {
            id: 2,
            link : 'About'
        },
   
        {
            id: 3,
            link : 'Portfolio'
        },
        {
            id: 4,
            link : 'Skills'
        },
        {
            id: 5,
            link : 'Contact'
        },
    ]
    const [nav, setNav] = useState(false)
    return(
        <>
        <div className="fixed z-20 flex items-center justify-between w-full h-24 px-4 bg-stone-900">
            <div>
                <h1 className="ml-2 text-4xl text-gray-200 font-heading">Shreyash</h1>
            </div>
            <ul className="hidden md:flex">
            {links.map(({id, link})=>(
                <li key={id} className="px-4 font-medium text-gray-200 capitalize duration-200 cursor-pointer hover:scale-105" >
                    <Link to ={link} smooth duration={500} onClick={()=>console.log('clicked')}>{link}</Link>
                </li>
            ))}
            </ul>
            
            <div onClick={()=>setNav(!nav)} className="z-10 pr-4 text-gray-100 cursor-pointer md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            
            {nav &&
            <ul className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-screen bg-gray-300 text-stone-800">
            {links.map(({id, link})=>(
                <li key={id} className="py-4 text-5xl font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105" >
                    <Link to ={link} smooth duration={600} onClick={()=>(setNav(false))} >{link}</Link>
                </li>
            ))}
            </ul>
        }
        </div>
        </>
    )
}