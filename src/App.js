import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cyber from './pages/Cyber';
import SoftwareDevelopment from './pages/SoftwareDevelopment'

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path = '/HomanPortfolio' element = {<Home />} />
        <Route path = '/HomanPortfolio/cyber' element = {<Cyber />} />
        <Route path = '/HomanPortfolio/softwaredevelopment' element = {<SoftwareDevelopment />} />
      </Routes>
    </main>
    </>
  );
  }

  export default App;
