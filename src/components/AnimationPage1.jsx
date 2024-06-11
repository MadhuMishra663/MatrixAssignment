import React from 'react';
import './AnimationPage.css'; // Import CSS file for styling

const AnimationPage1 = () => {
  return (
    <>
    <h1 className='headingpage'>Roadmap</h1>
    <div className="page-container">
      
      <div className="text-container">
        {/* Your text content here */}
        <h1 className='headingpage2'>PHASE 1</h1>
       <ul className='ul-li'>
        <li>Horizen dai dai harmony dogecoin waves nexo.</li>
        <li>Flow horizen waves dash tether zcash waves dash<br/> terraUSD.</li>
        <li>Quant harmony amp cosmos PancakeSwap.</li>
        <li>Quant harmony amp cosmos PancakeSwap<br/> decentraland decred.</li>
        <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
       </ul>
      </div>
      <div className="image-container">
        {/* Your image and animation here */}
        <img src="https://s3-alpha-sig.figma.com/img/1ed6/5ed2/e5488157802b3c24d158c68f4c9002b8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m7Gh8O3D7P6M7quJCSATeakuui9rxjRpFxFreqQ2efqOXJZ59S7Jf2hTehfGmrwY6CfGGD~z5N7UuE7ucO5deyIgRFcw1ie1eAIW9F4VLPGLoE~cT3c02JOJAcczT3U3cX-tcWbqBxnrJUbvtZE6sABUmTvOs75qBkzLa-GUaS9N-yLJUyPEbRcrrGndS4kFq9WWLzPkiWhn4c~Iqt2---OvieFbDQvfLm-qtg7rbiXu7XG4HQlt1Op3OPLSCOpQ0g~libiv0Gmz2aHXGApQEMRzFaH-~1SJYjxX1U0M4KKpchbpCBAG4wRK5Uqm3wdDMS142vHCkD908QeCUkTeMA__" alt="Your Image" className="slide-from-right" />
      </div>
    </div>
    </>
  );
}

export default AnimationPage1;
