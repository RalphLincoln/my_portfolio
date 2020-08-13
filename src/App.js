import React from 'react';
// import { Switch, Route } from 'react-router-dom'


import './App.css';

import Navbar from './Component/Partials/Navbar/Navbar';
import Footer from './Component/Partials/Footer/Footer';
import BigDisplay from './Component/Sections/BigDisplay/BigDisplay';
// import AboutMe from './Component/Sections/AboutMe/AboutMe';
import Projects from './Component/Sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BigDisplay />
      <Projects />
      {/* <AboutMe /> */}
      <Footer />
    </div>
  );
}

export default App;
