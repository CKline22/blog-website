import NavbarComponent from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Pages
import Home from './pages/homePage'
import About from './pages/aboutPage'
import Contact from './pages/contactPage'
import Explore from './pages/explorePage';
import Gear from './pages/gearPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/gear" element={<Gear/>}/>
      </Routes>
    </Router>
  );
}

export default App;
