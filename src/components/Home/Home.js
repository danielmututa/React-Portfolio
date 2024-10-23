import React, { useEffect,useRef } from 'react';
import Typed from 'typed.js';
import bannerimag from '../images/avtor.png';


const Home = () => {

    const textRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(textRef.current, {
          strings: ['UX/UI Designer', 'Front-end Developer'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
          showCursor: false,
          smartBackspace: false,
          replaceElement: true
        });
    
        return () => {
          typed.destroy(); 
        };
      }, []);
      
  return (

    <div id='home-container'>

      <div className="home--innerc">

     
      <div className="home-text-typing">
        <h1>Daniel Mututa</h1>
        <p className="front">I'm a <span ref={textRef}></span></p>   {/* Add class 'front' to the p tag */}
      </div>

      <div className="home-img-banner">
        <img className='hoemoimgbanner' src={bannerimag} alt="" />
      </div>

      </div>
      
    </div>
  );
};

export default Home;
