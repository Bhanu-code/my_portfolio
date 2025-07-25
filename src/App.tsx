
import './App.css'
import './index.css';
import About from './pages/About';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
