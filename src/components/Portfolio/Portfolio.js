import React,{useState} from 'react'
import Datafile from '../Database/Database'

const Portfolio = () => {

    const [items, setItems] = useState(Datafile);

    const filterItem = (type) => {
        const updatedItems = Datafile.filter((curElem) => curElem.type === type);
        setItems(updatedItems);
      };
      


    // Function to handle button click
    const handleButtonClick = (link) => {
      if (link) {
          window.open(link, '_blank'); // Opens link in new tab
      }
  };


         


  return (
    <div className="portfolio-cover">
    <div id='portfolio--all-container'>
      <h2>PROJECTS</h2>

  <div className="portfolio--allfiteringbtns">
      <div className="portfolio-btn"> <button onClick={() => setItems(Datafile)}>All</button> </div>
      <div className="portfolio-btn"> <button onClick={() => filterItem('personal projects')}>Personal Projects</button> </div>
      <div className="portfolio-btn"> <button onClick={() => filterItem('collaboration')}>Collaboration</button> </div>
      <div className="portfolio-btn"> <button onClick={() => filterItem('coming soon')}>Comming Soon</button> </div>

  </div>
     

      <div className="portfolio-staf">
        {
            items.map((item,index)=>(

                <div className="portfolio--map" key={index}>
                  <div className="portfolio-w-flex">
                  <div className="portfolio--cover">
                    <p>{item.name}</p>
                  </div>
                  <div className="portfolio-des-view">
                    <p>{item.description}</p>

                    <button
                     onClick={() => handleButtonClick(item.link)}
                     // Optionally disable button if no link (for coming soon items)
                     disabled={!item.link}
                     // Optional: add different styling for disabled buttons
                     className={!item.link ? 'disabled-button' : ''}

                    >{item.button} </button>
                  </div>
                  </div>

                  <img src={require('../images/' + item.img)} alt="" className="porfolio-img" />
                </div>
            ))
        }
      </div>
    
    


    </div>
    <div className="portfolio-contactme">
      <p>Let's build something together</p>
      <button className='w'>Contact me</button>
    </div>

    </div>
  )
}

export default Portfolio