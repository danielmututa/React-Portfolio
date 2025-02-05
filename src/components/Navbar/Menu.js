import React, {useState} from 'react'
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';





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
             
            to="/" 
            className="navvbar--link-menu" 
           
          >
            <div className='navbar-p-color'>D</div>mututa
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
                to="/" 
                    className="white"
                >Home</Link></li>



                



          <li onClick={handleClose}><Link 
          onClick={handleClose}
          activeClass="active" 
            to="/resume" 
            
          className="white" >Resume</Link></li>



          <li onClick={handleClose}> <Link 
          
          onClick={handleClose}
          activeClass="active" 
            to="/projects" 
            className="white" >Projects</Link></li>



          <li onClick={handleClose}> <Link 
          onClick={handleClose}
          activeClass="active" 
          to="/contact" 
          
          className="white" >Contact</Link></li>
                </ul>
            </div>
        
        </div>
  )
}

export default Menu