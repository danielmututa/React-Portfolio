
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Menu from './components/Navbar/Menu';

function App() {



  return (
    <div className="App">


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
