import { Analytics } from '@vercel/analytics/react';

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import SocialLinks from './components/SocialLinks'
import Tools from './components/Tools'
import Notification from '../Notification'


function App() {


  return (
    <>
    <Analytics />
    <Notification/>
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
