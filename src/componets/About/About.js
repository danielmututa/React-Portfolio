import React from 'react'
import one from '../images/one.jpg'

const About = () => {
  return (
    <div id='about--allcontainer'>
      <div className="about--mecontainer">
          <h3>About me</h3>

        <p>Hi, i'm Daniel Mututa, a Frontend Developer with expertise in creating responsive and user-friendly websites. In addition to my web development skills, i have also gained experience in UX/UI design and digital Marketing, with a focus on driving engagement and conversion. I also volunteered teaching Scratch programming to students in schools, inspiring the next generation of coders.</p> 
        
<div className="about-two--buttons">
    <button>Download CV</button>
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