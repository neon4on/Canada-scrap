import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import HowToScrap from './components/HowToScrap';
import ScrapForCash from './components/ScrapForCash';
import CarForm from './components/CarForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-scrap" element={<HowToScrap />} />
        <Route path="/scrap-for-cash" element={<ScrapForCash />} />
        <Route path="/form" element={<CarForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
