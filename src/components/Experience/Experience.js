import React from 'react'
import danielcv from "../images/Daniel Mutandwa Mututa CV.pdf"
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Experience = () => {

  // const experince = [
  //   {img:"HTML5.png" , type:'HTML5'},
  //   {img:"CSS3.png" , type:'CSS3'},
  //   {img:"JAVASCRIPT.png" , type:'JAVASCRIPT'},
  //   {img:"REACT.png" , type:'REACT'},
  //   {img:"NODE.JS.png" , type:'NODE.JS'},
  //   {img:"MONGODB.png" , type:'MONGODB'}
  // ]



    const handleDownloadCV = () => {
 // Create a link element
 const link = document.createElement('a');
 link.href = danielcv;
 link.download = 'Daniel Mutandwa Mututa CV.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link); 
};




  return (
    <div id='experience--container'>
       <h2>RESUME</h2>

       <div className="experience-map-container">
        <h3>Experince</h3>
        <button onClick={handleDownloadCV}  className='experince-button'> <FontAwesomeIcon icon={faDownload} /> Download Resume</button>
       </div>


       <div className="experince-types">
        <div className="experinceflex-gap">

     
        <div className="experince-inner">
          <p>2024-present</p>
          <p>Web Developer</p>
        </div>

        <div className="experince-alltypes">
          <p className='experince-ps'>HTML5</p>
          <p className='experince-ps'>Tailwind</p>
          <p className='experince-ps'>CSS3</p>
          <p className='experince-ps'>Typscript</p>
          <p className='experince-ps'>JavaScript</p>
          <p className='experince-ps'>React.js</p>
          <p className='experince-ps'>Next.js</p>
          <p className='experince-ps'>Express</p>
          <p className='experince-ps'>Node.js</p>
          <p className='experince-ps'>PHP</p>
          <p className='experince-ps'>Laravel</p>
          <p className='experince-ps'>Mongo DB</p>
          <p className='experince-ps'>MY SQL</p>
        </div>
        </div>
       </div>



       <div className="experince-types">
        <div className="experinceflex-gap">

     
        <div className="experince-inner">
          <p>2024-present</p>
          <p>UI/UX Designer</p>
        </div>

        <div className="experince-alltypes">
          <p className='experince-ds'>Figma</p>
          <p className='experince-ds'>ADobe XD</p>  
        </div>
        </div>
       </div>



       <div className="education-map-container">
        <h3>Education</h3>
       </div>

       <div className="education-type">
        
        <div className="experinceflex-gap">

     
        <div className="education-inner">
          <p>2023-2024</p>
          <p className='experincetype'>Uncommon.org</p>
          <p className='experince-bcamp'>Bootcamp</p>
          
          <div className="experince-bootcamp">
            <p>Certificate</p>
            <p>Software Engineer</p>
          </div>
        </div>

        <div className="experince-alltypes">
          <p className='education-full'>Successfully completed the Software Engineering Bootcamp at Uncommon.org.
Gained expertise in web development, React, JavaScript, and RESTful APIs.
Developed hands-on projects to strengthen problem-solving and coding skills.</p>
        </div>
        </div>
       </div>


    </div>
  )
}

export default Experience