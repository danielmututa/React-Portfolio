import React,{useState} from 'react'
import Datafile from '../Database/Database'

const Portfolio = () => {

    const [items, setItems] = useState(Datafile);

    const filterItem = (type) => {
        const updatedItems = Datafile.filter((curElem) => curElem.type === type);
        setItems(updatedItems);
      };
      


         


  return (
    <div id='portfolio--all-container'>
      <h2>PORTFOLIO</h2>

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
                  <img src={require('../images/' + item.img)} alt="" className="porfolio-img" />
                  <div className="portfolio--cover">
                    <p>{item.name}</p>
                  </div>
                  <div className="portfolio-des-view">
                    <p>{item.description}</p>
                    <button>{item.button}</button>
                  </div>
                </div>
            ))
        }
      </div>
   
    

    </div>
  )
}

export default Portfolio