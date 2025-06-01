import React from 'react'
// import danielcv from "../images/Daniel Mutandwa Mututa CV.pdf"
import mycv from "../images/Daniel Mutandwa Mututa CV 1.pdf"
import computing from "../images/describe claude computing.pdf"
import computingtype from "../images/describe.pdf"
import servicetypes from "../images/Achievements - danielmututa-5357 _ Microsoft Learn.pdf"
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
 link.href = mycv;
 link.download = 'Daniel Mutandwa Mututa CV.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link); 
};

    const Cloudservicetype = () => {
 // Create a link element
 const link = document.createElement('a');
 link.href = servicetypes;
 link.download = 'Daniel Mutandwa Mututa CV.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link); 
};

    const Cloudcomputing = () => {
 // Create a link element
 const link = document.createElement('a');
 link.href = computing;
 link.download = 'Daniel Mutandwa Mututa CV.pdf';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link); 
};

    const Computtingtype = () => {
 // Create a link element
 const link = document.createElement('a');
 link.href = computingtype;
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
          <p className='experince-ps'>CSS3</p>
          <p className='experince-ps'>Tailwind</p>
          <p className='experince-ps'>Typscript</p>
          <p className='experince-ps'>JavaScript</p>
          <p className='experince-ps'>React.js</p>
          <p className='experince-ps'>Next.js</p>
          <p className='experince-ps'>Node.js</p>
          <p className='experince-ps'>Express</p>
          <p className='experince-ps'>Fastify</p>
          <p className='experince-ps'>PHP</p>
          <p className='experince-ps'>Laravel</p>
          <p className='experince-ps'>Mongo DB</p>
          <p className='experince-ps'>MY SQL</p>
          <p className='experince-ps'>PostgreSQL</p>
          <p className='experince-ps'>Zod</p>
          <p className='experince-ps'>bcrypt</p>
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




{/* experince working  */}

  <div className="education-type">
        
        <div className="experinceflex-gap">

     
        <div className="education-inner">
          <p>2025</p>
          <p>03/03/25 - 05/31/25</p>
          <p className='experincetype'>Procode Platform</p>
         <p className='experince-bcamp'>Frontend Developer</p>
          <p className='experince-bcamp'>Contract</p>
          
          
        </div>

        <div className="experince-alltypes">
          <p className='education-full'>
            Designed and integrated Caserover, an AI-powered web solution for lawyers using React, TypeScript, TailwindCSS, and Node.js. Applied Zod for secure and efficient input validation, ensuring strong data integrity. Collaborated with backend developers to deliver a seamless and responsive user experience.
            <span className='experince-font-italic'>
Gained hands-on experience with web scraping, processing over 5,000 legal documents and converting them into PDFs using Python3.
</span>
</p>
        </div>
        </div>
       </div>

{/* end experinece working */}








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







       <div className="education-type">
        
        <div className="experinceflex-gap">

     
        <div className="education-inner">
          <p>2025-present</p>
          <p className='experincetype'>Microsoft Learn</p>
          <p className='experince-bcamp'></p>
          
          <div className="experince-bootcamp">
            <p>Badges</p>
            <p>Software Engineer</p>
          </div>
        </div>

        <div className="experince-alltypes">
          <p className='education-full'>I'm proud to have earned several official badges from Microsoft, demonstrating my commitment to continuous learning and growth in the tech industry. These badges validate my foundational and practical knowledge in various areas of technology, such as 
            <span className='experince-badges' onClick={Cloudcomputing}> cloud computing</span>,
            
               <span className='experince-badges' onClick={Cloudservicetype}> cloud types</span>, and
            
               <span className='experince-badges' onClick={ Computtingtype}> benefites of usind cloud service types</span>
            </p>
        </div>
        </div>
       </div>






       {/* <div className="education-map-container">
        <h3>Education</h3>
       </div> */}

     
    </div>
  )
}

export default Experience