import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; 
import './menu.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = (isMobile = false) => (
    <>
      <li><a href="#sobre" onClick={() => isMobile && setIsOpen(false)}>Sobre</a></li>
      <li><a href="#skills" onClick={() => isMobile && setIsOpen(false)}>Habilidades</a></li>
      <li><a href="#experiencia" onClick={() => isMobile && setIsOpen(false)}>Experiência</a></li>
      <li><a href="#projetos" onClick={() => isMobile && setIsOpen(false)}>Projetos</a></li>
      <li><a href="#contato" onClick={() => isMobile && setIsOpen(false)}>Contato</a></li>
    </>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Bruno Verly</h1>
      </div>

      <div className="navbar-right">
        <ul className="menu-links">
          {navLinks(false)}
        </ul>

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀️'}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              className="menu-links active"
              initial={{ x: "100%" }} 
              animate={{ x: 0 }}      
              exit={{ x: "100%" }}    
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {navLinks(true)}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes style={{color: '#00d2ff', position: 'fixed', right: '5%', zIndex: '10002'}} /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;