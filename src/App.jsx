import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  './components/Navbar1.css'
import './components/NavbarMain.css'
import './components/second.css'
import './components/MovingNav.css'
import './components/getstarted.css'
import './components/tokenomics.css'

import SlideUpComponent from './Animation/SlideUp'

import NavbarMain from './components/NavbarMain'
import Second from './components/Second'
import Third from './components/Third'
import MovingNav from './components/MovingNav'
import AnimationPage1 from './components/AnimationPage1'
import GetStarted from './components/GetStarted'
import Tokenomics from './components/Tokenomics'



function App() {
  const contents = [ <NavbarMain />, <Second />, <Third />, <MovingNav />,<Tokenomics />,<AnimationPage1 />,<GetStarted/>];

  

  return (
    <>
     
    <div className='mainDiv'>
        
        <SlideUpComponent  contents={contents} />
      </div>
    </>
  )
}

export default App
