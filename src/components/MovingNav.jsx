import React from 'react';
import './MovingNav.css';

const MovingNav = () => {
  const row1 = [
    "Technology",
    "Design",
    "Artificial Intelligence",
    "AI Chat Bot",
    "Customizable",
    "3d Model"
  ];

  const row2 = [
    "People",
    "Create Videos",
    "Analyze",
    "Outfits",
    "3d Model",
    "Voice Chat",
    "Marketing"
  ];
  const gradients = [
    'linear-gradient(45deg, #2d4653, #2c2e2f)',
    'linear-gradient(45deg, #593058, #252425)',
    'linear-gradient(45deg, #232324, #41305a)',
    'linear-gradient(45deg, #41305a, #232324)',
    'linear-gradient(45deg, #593058, #252425)',
    'linear-gradient(45deg, #2c2e2f, #2d4653)',
    'linear-gradient(45deg, #41305a, #232324)'
  ];

  return (
    <>
    <div className='MovingNavContainer'>
    <div className='mic'>
            🎙️
          </div>
          <div className='reactIcon'>
        <img
          className='reacticonimg'
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Icon"
        />
      </div>
      <div className='videoimgdiv'>
        <img 
        className='videoimg'
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Fvideo-player-8943484&psig=AOvVaw1Lm_HESAnQ8O64oHGVd0Ev&ust=1718084448565000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiXm7up0IYDFQAAAAAdAAAAABAG" alt="" />
      </div>
      <div className='row row1'>
        {row1.concat(row1).map((text, index) => (
          <button className="buttons" key={`row1-${index}`} 
          style={{ background: gradients[index % gradients.length] }}
          >{text}</button>
        ))}
      </div>
      <div className='row row2'>
        {row2.concat(row2).map((text, index) => (
          <button className="buttons" key={`row2-${index}`}
          style={{ background: gradients[index % gradients.length] }}
          >{text}</button>
          
        ))}
       
      </div>
    </div>
    </>
  );
}

export default MovingNav;
