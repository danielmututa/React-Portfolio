import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {

  const footericons= [
    {icon:faFacebookF, link:"https://www.facebook.com/profile.php?id=100079493274713"},
    {icon:faLinkedinIn, link:"https://www.linkedin.com/in/daniel-mututa-7483032aa/"},
    {icon:faWhatsapp, link: "https://wa.me/0775306263"}
  ]


  return (
    <div className='footer--container'>
        <h3>Portfolio</h3>
        <div className="footer--allicons">
            {
                footericons.map((item, index) => (

                    // <div className="footer--resvered"> <FontAwesomeIcon className='footer-icon' icon={item.icon}/> </div>

                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="footer--resvered">
                    <FontAwesomeIcon className='footer-icon' icon={item.icon} />
                  </a>
      
                ))

            }
        </div>
        <div className="footer--copy">
            <p>&copy; Copyright <span className='footer-name'>2024</span>  </p> <span className='footerline'>|</span>
            <p>All rights reserved by <span className='footer-name'>Daniel Mututa</span></p>
        </div>
    </div>
  )
}

export default Footer