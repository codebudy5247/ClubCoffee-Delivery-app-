import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Router from './Routes/Router';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Router />
     <Footer />
    </div>
  );
}

export default App;
