import React from 'react'
import voluteering from "../images/teaching.jpg"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'

const Aboutmore = () => {
    // const [navigate, setNavigate] = useState();
  const navigate = useNavigate();

const backbutton = () =>{
navigate(-1)
}


  return (
    <div className='aboutmore--container'>

        <div className="aboutmore--flexcontent">


        <h3>Volunteering</h3>
         <p>As a passionate advocate for technology education, I've had the privilege of volunteering my time to empower the next generation of innovators, equipping them with the skills and knowledge necessary to succeed in an increasingly digital world. Through my dedication to this cause, I've been teaching Scratch programming to young adults in local schools, inspiring them to explore the vast and exciting world of coding, unlock their creative potential, and develop essential problem-solving skills.
        </p>

<button onClick={backbutton }><FontAwesomeIcon icon={faLessThan}/> Back</button>

        </div>

        <div className="aboutmore--flex--img">
            <img className='aboutmore--img' src={voluteering} alt="" />
        </div>

</div>
  )
}

export default Aboutmore