
import './App.css';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import { Route, Router } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Menu from './components/Navbar/Menu';
import { Routes ,Route } from 'react-router-dom';

function App() {



  return (
    <div className="App">
 <Navbar/>
 <Menu/>
<Routes>

<Route path='/home' element={<Home/>}/>
  <Route path='/projects' element={<Portfolio/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/resume' element={<Experience/>}/>
  
</Routes>
<Footer/>



     
 

    </div>
  );
}

export default App;
