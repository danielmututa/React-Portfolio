import React from 'react'

const Experience = () => {

  const experince = [
    {img:"HTML5.png" , type:'HTML5'},
    {img:"CSS3.png" , type:'CSS3'},
    {img:"JAVASCRIPT.png" , type:'JAVASCRIPT'},
    {img:"REACT.png" , type:'REACT'},
    {img:"NODE.JS.png" , type:'NODE.JS'},
    {img:"MONGODB.png" , type:'MONGODB'}
  ]

  return (
    <div id='experience--container'>
       <h2>EXPERIENCE</h2>

       <div className="experience-map-container">
        {
          experince.map((item, index)=> (
         <div className="experience--card" key={index}>
           <img src={require('../images/' + item.img)} className='experince--img' alt="" />
           <div className="experince--border-line"><span></span></div>
           <p>{item.type}</p>
        </div>
          ))  
        }
       </div>
    </div>
  )
}

export default Experience