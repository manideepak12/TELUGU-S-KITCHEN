import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products, CartProvider } from './pages/Products'; // Import CartProvider from Products
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './style.css'; // Global styles

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App flex flex-col min-h-screen font-yeseva">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;