import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import msgimage  from "../images/message-contact.jpg";

const Contact = () => {
 
    const contactsection = [
        {icon:faPhone, name:'Phone' , type:'+263-775306263'},
        {icon: faEnvelope, name:'Email' , type:'mututadaniel54@gmail.com'},
        {icon:faLocationDot, name:'Location' , type:'Harare'}
    ]
  



  return (
    <div id='contact--container'>

        <div className="contact--section-text">
        <h2>CONTACT ME</h2>
     <p>Let's connect! I'm always up for a discussion.</p>
        </div>


        <div className="contact--p-e-l">


          {
            contactsection.map((item)=>(
                <div className="contact-phone">
                
                <div className="contact-backg-icon">
                <FontAwesomeIcon className='contact-icon'  icon={item.icon} />
                </div>
                <h5>{item.name}</h5>
                <p>{item.type}</p>
           
            </div>
            ))
          }

        </div>


          <div className="contact--form--img">
            <form action="" className="contact-form">

               <div className="contact-twoinputs">
                <input className='input-text-area' type="text" placeholder='name'  />
                <input type="text" className='input-text-area' name="" id="" placeholder='email' />
               </div>

               <textarea name="" id="" className='contact-onemessage' placeholder='message'/>

              <div className="contact-senda-message">
               <button className="contact-msg"> Send Message</button>
              </div>

            </form>
            <div className="contact--msg-img">
                <img src={msgimage} className='mssg-img' alt="" />
            </div>
          </div>




       </div>
  )
}

export default Contact