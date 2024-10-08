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
        <div className="flex justify-between items-center w-full h-24  text-white bg-black fixed px-4 z-20">
            <div>
                <h1 className="text-4xl font-heading ml-2">Shreyash</h1>
            </div>
            <ul className="hidden md:flex">
            {links.map(({id, link})=>(
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200" >
                    <Link to ={link} smooth duration={500} onClick={()=>console.log('clicked')}>{link}</Link>
                </li>
            ))}
            </ul>
            
            <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            
            {nav &&
            <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link})=>(
                <li key={id} className="py-4 text-5xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200" >
                    <Link to ={link} smooth duration={600} onClick={()=>(setNav(false))} >{link}</Link>
                </li>
            ))}
            </ul>
        }
        </div>
        </>
    )
}