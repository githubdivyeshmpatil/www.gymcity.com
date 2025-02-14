

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from './Services';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Home from './Home';




function App() {
  return (
    <Router>
    
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/services" element={<Services />} />
       <Route path="/about-us" element={<About />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/contact" element={<Contact />} />
       
       
    

       
      
      
      
     </Routes>
    <Footer/>
   </Router>
  )
}

export default App