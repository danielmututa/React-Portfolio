import React from 'react'
import one from '../images/one.jpg'
import danielcv from "../images/Daniel Mututa Mutandwa CV - Copy.pdf"
import { Link } from 'react-router-dom'

const About = () => {

  const handleDownloadCV = () => {
 // Create a link element
 const link = document.createElement('a');
 link.href = danielcv;
 link.download = 'Daniel Mututa Mutandwa CV - Copy.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link); 
};





  return (
    <div id='about--allcontainer'>
      <div className="about--mecontainer">
          <h3>About me</h3>

        <p>Hi, I'm Daniel Mututa, a highly motivated and detail-oriented Frontend Developer with extensive expertise in crafting responsive, user-friendly, and visually appealing websites that provide exceptional user experiences. Additionally, I bring skills in UX/UI design, leveraging human-centered principles to create intuitive and engaging interfaces, and Digital Marketing, optimizing websites for maximum engagement, conversion, and business growth.</p> 
        
<div className="about-two--buttons">
    <button  onClick={handleDownloadCV} >Download CV</button>
    <Link to='/about-more'>Read More</Link>
</div>
      </div>

      <div className="about--meimg">
        <img className='about--imgcirle' src={one} alt="selfpic" />
      </div>

    </div>
  )
}

export default About