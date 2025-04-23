
import { Analytics } from '@vercel/analytics/react';

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialLinks from './components/SocialSkills/SocialLinks'
import Tools from './components/Tools/Tools'
import Notification from '../Notification'


function App() {


  return (
    <>
    <Analytics/>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Tools/>
    <Contact/>
    </>
  )
}

export default App
