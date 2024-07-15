import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from '../src/component/Navbar';
import Content from '../src/component/Content';
import Facts from '../src/component/Facts';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


  return (
    <Router>
      <Header toggleMenu={toggleMenu}/>
      <div className='home'>
        <Navbar isMenuOpen={isMenuOpen}/>
        <Content isMenuOpen={isMenuOpen}/>
        <Facts />
      </div>
      <Footer />
    </Router>
  )
}

export default App
