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
        <Route path = '/' element = {<Home />} />
        <Route path = '/cyber' element = {<Cyber />} />
        <Route path = '/softwaredevelopment' element = {<SoftwareDevelopment />} />
      </Routes>
    </main>
    </>
  );
  }

  export default App;
