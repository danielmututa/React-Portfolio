import React from 'react'
import one from '../images/one.jpg'
import danielcv from "../images/Daniel Mututa Mutandwa CV - Copy.pdf"

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

        <p>Hi, i'm Daniel Mututa, a Frontend Developer with expertise in creating responsive and user-friendly websites. In addition to my web development skills, i have also gained experience in UX/UI design and digital Marketing, with a focus on driving engagement and conversion. I also volunteered teaching Scratch programming to students in schools, inspiring the next generation of coders.</p> 
        
<div className="about-two--buttons">
    <button  onClick={handleDownloadCV} >Download CV</button>
    <button>Read More</button>
</div>
      </div>

      <div className="about--meimg">
        <img className='about--imgcirle' src={one} alt="" />
      </div>

    </div>
  )
}

export default About