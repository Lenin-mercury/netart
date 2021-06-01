import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Display from './components/Display';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Display/>
      <Footer/>
    </div>
  );
};

export default App;
