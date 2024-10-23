
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Menu from './components/Navbar/Menu';
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
