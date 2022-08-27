import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Thanks from './components/Thanks';
import SocialFollow from './components/SocialFollow';

function App() {

  return (
    <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/work" element={<Projects/>}/>
              <Route path="/" element={<Home/>} />
              <Route path="/Thanks" element={<Thanks/>} />
            </Routes>
          <footer className='footer'>
              <SocialFollow />
          </footer>
        </div>
    </Router>
  );
}

export default App;