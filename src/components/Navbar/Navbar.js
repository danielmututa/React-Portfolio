import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  

   

  return (
    <div className='navbar--container'>
    {/* <div className="navbar-logo">  */}
    <div  className= 'navbar-logo'> 

    <Link to='/' className="navbar--p-c">
            <div className='navbar-p-color'>D</div>
            
            <span className="portfolio-text">mututa</span>
            {/* <div className='navbar-p-color'>P</div>ortfolio */}
          </Link>

     
         </div>
        
        <div className="navbar--alllinks">

        

          <Link to="/resume" >
            Resume
          </Link>


          <Link to="/projects" 
          >
            Projects
          </Link>

        

          <Link 
            to="/contact" 
          >
            Contact
          </Link>

            {/* <NavLink to=''  onClick={() => scrollToSection('home-top-section')}>Home </NavLink> */}
           
            
        </div>

    </div>
  )
}

export default Navbar





