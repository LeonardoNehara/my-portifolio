import React from 'react';
import '../styles/index.css';
import Header from '../components/Home/Header.js';
import About from '../components/Home/About.js';


function Home() {
  return (
    <div className="relative">
      <Header/>
      <About/>
    </div>
  );
}

export default Home;
