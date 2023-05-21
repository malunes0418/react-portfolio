import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MyWorks from './pages/MyWorks';

const App: React.FC = () => {

	return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/my-works" element={<MyWorks/>} />
      </Routes>
    </Router>
	);
};

export default App;
