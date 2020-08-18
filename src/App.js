import React from 'react';
import { Switch, Route } from 'react-router-dom'


import './App.css';

// IMPORTING COMPONENT PARTIALS
import Navbar from './Component/Partials/Navbar/Navbar';
import Footer from './Component/Partials/Footer/Footer';

// IMPORTING SECTIONS
import BigDisplay from './Component/Sections/BigDisplay/BigDisplay';
import Projects from './Component/Sections/Projects/Projects';
import Contact from './Component/Sections/Contact/Contact'


function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={BigDisplay} />
        <Route path='/project' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
