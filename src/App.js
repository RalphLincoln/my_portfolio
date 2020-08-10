import React from 'react';
import { Switch, Route } from 'react-router-dom'


import './App.css';

import Navbar from './Component/Partials/Navbar/Navbar';
import Footer from './Component/Partials/Footer/Footer';
import BigDisplay from './Component/Sections/BigDisplay/BigDisplay';

function App ()
{
  return (
    <div className="App">
      <Navbar />
      <BigDisplay />
      <Footer />
    </div>
  );
}

export default App;
