import 'reflect-metadata';
import React from 'react';
import './style/App/app.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
