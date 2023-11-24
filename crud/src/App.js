// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Pag2 from './Pages/Pag2';

const App = () => {
 return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/getList" element={<Pag2 />} />
        <Route path="/post" element={<Pag2 />} />
        <Route path="/put" element={<Pag2 />} />
        <Route path="/delete" element={<Pag2 />} />
        <Route path="/get" element={<Pag2 />} />
      </Routes>
    </>
 );
};

export default App;