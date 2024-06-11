import React from 'react'
import {ArrowRight} from 'react-feather';
import './getstarted.css';

const GetStarted = () => {
  return (
    <div className='mainGet'>
      <div className='getstartedBox'>
         <h1 className='getText'>Get Started<span className='arrowText'><ArrowRight /></span></h1>
      </div>
      <div className='getTextMain'>
    
             <div className='text2'>
                <p>Dash dash terraUSD neo uniswap <br/> kadena helium avalanche polymath<br/> bancor</p>
             </div>
            
             <div className='buttonText'>
                <input type="text" name="" id="" placeholder='Enter your Email' className='inputText'/>
                <button className='submitButton'> Submit</button>
             </div>
            
         </div>
    </div>
  )
}

export default GetStarted
