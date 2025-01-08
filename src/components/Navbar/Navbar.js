import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar--container'>
    {/* <div className="navbar-logo">  */}
    <div  className={`navbar-logo ${scrolled ? 'scrolled' : ''}`}> 

    <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            offset={50} 
            delay={0}
            className="navbar--p-c"
          >
            <div className='navbar-p-color'>P</div>
            <span className="portfolio-text">ortfolio</span>
            {/* <div className='navbar-p-color'>P</div>ortfolio */}
          </Link>

     
         </div>
        
        <div className="navbar--alllinks">

        <Link 
            activeClass="active" 
            to="home-container" 
            spy={true} 
            smooth={true} 
            duration={500} 
            offset={50} 
            delay={0}
          >
            Home
          </Link>

          <Link 
            activeClass="active" 
            to="about--allcontainer" 
            spy={true} 
            smooth={true} 
            duration={700} 
            offset={50} 
            delay={0}
          >
            About
          </Link>

          <Link 
            activeClass="active" 
            to="portfolio--all-container" 
            spy={true} 
            smooth={true} 
            duration={1000} 
            offset={50} 
            delay={0}
          >
            Portfolio
          </Link>

          <Link 
            activeClass="active" 
            to="experience--container" 
            spy={true} 
            smooth={true} 
            duration={1500} 
            offset={50} 
            delay={0}
          >
            Experience
          </Link>

          <Link 
            activeClass="active" 
            to="contact--container" 
            spy={true} 
            smooth={true} 
            duration={1500} 
            offset={50} 
            delay={0}
          >
            Contact
          </Link>

            {/* <NavLink to=''  onClick={() => scrollToSection('home-top-section')}>Home </NavLink> */}
           
            
        </div>

    </div>
  )
}

export default Navbar





