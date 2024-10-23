
import './App.css';
import About from './componets/About/About';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';
// import { Routes, Route } from 'react-router-dom';
import Portfolio from './componets/Portfolio/Portfolio';
import Contact from './componets/Contact/Contact';
import Experience from './componets/Experience/Experience';
import Footer from './componets/Footer/Footer';
import Menu from './componets/Navbar/Menu';
// import { Link}  from 'react-scroll'
// import { Fragment } from 'react';
// import { Link } from 'react-scroll';
// import Footer from './componets/Footer/Footer';

// import Navbar from './Components/Navbar/Navbar';

function App() {



  return (
    <div className="App">

    {/* <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
   <Route path='/portfolio' element={<Portfolio/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/experince' element={<Experience/>}/>
   </Routes>

 <Footer/> */}



     <Navbar />
     < Menu/>
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Experience id="experience" />
      <Contact id="contact" />

      <Footer />
 

    </div>
  );
}

export default App;
