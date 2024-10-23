import React, {useState} from 'react'
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';





const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };



  return (
    <div className="hamburger-menu">
        <div className="hamburger-menu-flex">

        
          
         
                
         <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="navvbar--link-menu" 
            offset={50} 
            delay={0}
          >
            <div className='navbar-p-color'>P</div>ortfolio
          </Link>


          <Hamburger className="position--fixed"
                toggled={isOpen} 
                toggle={handleToggle} 
            />



          </div>

        <div className={`menu-list ${isOpen ? 'show' : ''}`} role="navigation" aria-label="Main Menu">
                <ul className="height--menu">
                <li onClick={handleClose}> <Link 
                onClick={handleClose}
                activeClass="active" 
                to="home-container" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={50} 
                delay={0}
                >Home</Link></li>



                <li onClick={handleClose}><Link 
                onClick={handleClose}
                activeClass="active" 
            to="about--allcontainer" 
            spy={true} 
            smooth={true} 
            duration={700} 
            offset={50} 
            delay={0}
                className="white" >About</Link></li>



          <li onClick={handleClose}><Link 
          onClick={handleClose}
          activeClass="active" 
            to="portfolio--all-container" 
            spy={true} 
            smooth={true} 
            duration={1000} 
            offset={50} 
            delay={0}
          
          className="white" >Portfolio</Link></li>



          <li onClick={handleClose}> <Link 
          
          onClick={handleClose}
          activeClass="active" 
            to="experience--container" 
            spy={true} 
            smooth={true} 
            duration={1500} 
            offset={50} 
            delay={0}
          
          
          
          className="white" >Experience</Link></li>



          <li onClick={handleClose}> <Link 
          onClick={handleClose}
          activeClass="active" 
          to="contact--container" 
          spy={true} 
          smooth={true} 
          duration={1500} 
          offset={50} 
          delay={0}
          className="white" >Contact</Link></li>
                </ul>
            </div>
        
        </div>
  )
}

export default Menu