import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {

  const footericons= [
    {icon:faFacebookF},
    {icon:faLinkedinIn},
    {icon:faWhatsapp}
  ]


  return (
    <div className='footer--container'>
        <h3>Portfolio</h3>
        <div className="footer--allicons">
            {
                footericons.map((item) => (
                    <div className="footer--resvered"> <FontAwesomeIcon className='footer-icon' icon={item.icon}/> </div>
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