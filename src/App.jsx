
import React from 'react';
import './App.css';

import Navbar1 from './components/Navbar1'
import NavbarMain from './components/NavbarMain'
import Second from './components/Second'
import Third from './components/Third'
import MovingNav from './components/MovingNav';
import Tokenomics from './components/Tokenomics'
import AnimationPage1 from './components/AnimationPage1'
import GetStarted from './components/GetStarted'
import './components/Navbar1.css'
import './components/NavbarMain.css'
import './components/second.css'
import './components/Third.css'
import './components/MovingNav.css'
import './components/tokenomics.css'
import './components/AnimationPage.css'
import './components/getstarted.css'
import ScrollAnimation from './Animation/SlideUp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main>
        <div className="spacer">
        <ScrollAnimation>
          <div className='nav'>
          <Navbar1/>
          </div>
          <NavbarMain />
          <br/>
          <br/>
          <Second />
          <Third />
          <MovingNav />
          <Tokenomics />
          <AnimationPage1 />
          <div className='get'>
          <GetStarted />
          </div>
        </ScrollAnimation>
        </div>
      </main>
    </div>
  );
}

export default App;

