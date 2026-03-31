import { useState, useEffect } from 'react';
import './index.css';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/contact';
import Footer from '../../components/Footer';
import Navbar from '../../Navbar';

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <About />
      <div id="skills"><Skills /></div>
      <div id="experiencia"><Experience /></div>
      <div id="projetos"><Projects /></div>
      <div id="contato"><Contact /></div>
      <Footer />
    </div>
  );
}

export default Home;