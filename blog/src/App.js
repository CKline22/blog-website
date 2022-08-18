import NavbarComponent from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Pages
import Home from './pages/homePage'
import About from './pages/aboutPage'
import Contact from './pages/contactPage'
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
