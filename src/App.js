import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Logo from './Logo';

const App = () => {
  return (
    <div>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element="Error 404" />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;