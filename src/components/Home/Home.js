import React, { useEffect,useRef,useState } from 'react';
import Typed from 'typed.js';
import bannerimag from '../images/avtor.png';
import About from '../About/About';
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();

  const goToResume = () => {
    navigate("/resume");
  };
  const goToProjects = () => {
    navigate("/projects");
  };


  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Listen for mouse movement and update the cursor position
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


    const textRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(textRef.current, {
          strings: ['UI/UX Designer ', 'Web Developer', 'Front-end Developer', 'Full-Stack Developer'],
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
<div className="">
    <div id='home-container'>

<div
      className="home-curser"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    />

      <div className="home--innerc">

     
      <div className="home-text-typing">
       
        <h1>Daniel Mututa</h1>
        <p className="front">I'm a <span ref={textRef}></span></p>   {/* Add class 'front' to the p tag */}
      </div>

      <div className="home-img-banner">
        <img className='hoemoimgbanner' src={bannerimag} alt="" />
      </div>

      <div className="home-buttons">
        <button onClick={goToResume} className='home-btns1'>Resume</button>
        <button onClick={goToProjects} className='home-btns'>Projects</button>
      </div>


      </div>
      
     
    </div>
     <About/>
     </div>
     
  );
};

export default Home;
























// // App.jsx
// import { useEffect, useRef } from 'react';
// import { Spheres1Background } from 'threejs-components/backgrounds/spheres1';

// const App = () => {
//   const canvasRef = useRef(null);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     if (canvasRef.current) {
//       bgRef.current = Spheres1Background(canvasRef.current, {
//         count: 300,
//         minSize: 0.3,
//         maxSize: 1,
//         gravity: 1 // Gravity enabled by default
//       });

//       // Set up color change interval
//       const colorInterval = setInterval(() => {
//         if (bgRef.current) {
//           bgRef.current.spheres.setColors([
//             0xffffff * Math.random(),
//             0xffffff * Math.random(),
//             0xffffff * Math.random()
//           ]);
//         }
//       }, 60000); // 60000ms = 1 minute

//       // Cleanup
//       return () => {
//         clearInterval(colorInterval);
//       };
//     }
//   }, []);

//   return (
//     <div id="app">
//       <div className="hero">
//         <h1>Sphere</h1>
//         <h2>Packing</h2>
//       </div>
//       <canvas id="webgl-canvas" ref={canvasRef} />
//     </div>
//   );
// };

// export default App;






// /* styles.css */
// body, html, #app {
//   margin: 0;
//   width: 100%;
//   height: 100%;
//   background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5) 200%);
// }

// #app {
//   position: relative;
//   height: 100%;
//   font-family: "Montserrat", serif;
// }

// .hero {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// h1, h2 {
//   margin: 0;
//   padding: 0;
//   color: black;
//   text-transform: uppercase;
//   text-shadow: 0 0 20px rgba(255, 255, 255, 1);
//   line-height: 100%;
//   user-select: none;
// }

// h1 {
//   position: relative;
//   z-index: 2;
//   font-size: 100px;
//   font-weight: 700;
// }

// h2 {
//   font-size: 80px;
//   font-weight: 500;
// }

// #webgl-canvas {
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   overflow: hidden;
//   z-index: 1;
// }