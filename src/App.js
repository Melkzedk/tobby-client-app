// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Branding from './pages/Branding';
import Illustrations from './pages/Illustrations';
import ProductPhotography from './pages/ProductPhotography';
import Clothing from './pages/Clothing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/product-photography" element={<ProductPhotography />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
