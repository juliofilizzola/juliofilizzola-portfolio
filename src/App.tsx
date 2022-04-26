import 'reflect-metadata';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/App/app.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/contacts" element={ <Contacts/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
