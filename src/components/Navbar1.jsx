import React from 'react'
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <>
    <div className='NavbarMain'>
       <div className="Navbar1">
          <div className='NavbarSub1'>
            <p>AI.GEN</p>
            <p>Feature</p>
            <p>Roadmap</p>
            <p>Tokenomics</p>
          </div>
          <div className='NavbarSub2'>
            <button className='wallpaerText'>Whitepaper</button>
            <button className='getStartedText'>Get Started</button>
          </div>
       </div>
       <div>
       <span className="material-symbols-outlined">
menu
</span>
       </div>
       </div>
      
    </>
  )
}

export default Navbar1
