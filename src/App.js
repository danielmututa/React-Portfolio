
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Menu from './components/Navbar/Menu';
import { Routes ,Route } from 'react-router-dom';
import Aboutmore from './components/About/Aboutmore';
function App() {



  return (
    <div className="App">

{/* <Routes>
  <Route path='/moreabout' element={<Aboutmore/>}/>
</Routes>


     <Navbar />
     < Menu/>
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Experience id="experience" />
      <Contact id="contact" />

      <Footer /> */}

<Routes>

<Route path="/" element={
          <div className="App">
            <Navbar />
            <Menu />
            <Home id="home" />
            <About id="about" />
            <Portfolio id="portfolio" />
            <Experience id="experience" />
            <Contact id="contact" />
            <Footer />
          </div>
        } />
        <Route path="/about-more" element={<Aboutmore/>} />
      </Routes>

     
 

    </div>
  );
}

export default App;
