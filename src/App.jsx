import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from '../src/component/Navbar';
import Content from '../src/component/Content';
import Facts from '../src/component/Facts';
import Cart from './component/Cart';
import {CartProvider} from './contexts/cartContext'
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
 
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


  return (
    <Router>
      <CartProvider>
      <Header toggleMenu={toggleMenu} setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart}/>
      <div className='home'>
        <Navbar isMenuOpen={isMenuOpen}/>
        <Content isMenuOpen={isMenuOpen} setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
       {
       !isOpenCart? <Facts />: <Cart setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart} />
       } 
      </div>
      <Footer />
      </CartProvider>
    </Router>
  )
}

export default App
