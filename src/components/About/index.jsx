import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';
import fotoPerfil from "../../assets/perfil.jpeg";

function About() {
  const titles = ["Full Stack", "Web", "Back-end", "Front-end"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="sobre" className="about-container">
      <div className="about-text">
        <p className="greeting">Olá, eu sou</p> 
        <h1>Bruno Verly</h1>
        
        <div className="role-wrapper">
          <h2 className="role-static">Desenvolvedor</h2>
          <div className="animated-title-container">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[index]}
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}  
                exit={{ y: -20, opacity: 0 }}   
                transition={{ duration: 0.5 }}   
                className="animated-title"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        
        <p className="description">
           Desenvolvedor em formação focado em criar interfaces modernas, responsivas e 
          focadas na experiência do usuário. Atualmente cursando Análise e Desenvolvimento de Sistemas, 
          combino minha disciplina e organização vindas da área administrativa com o domínio de 
          tecnologias como React.js e JavaScript para entregar soluções web eficientes.
        </p>
      <div className="button-group">
          <a 
          href="/Curriculo_Bruno_Verly.pdf" 
          className="download-btn" 
          download="Curriculo_Bruno_Verly.pdf"
        >
          Baixar Currículo
        </a>
        </div>
      </div>
      

      <div className="about-image">
        <div className="glow-effect">
          <img src={fotoPerfil} alt="Bruno Verly" />
        </div>
      </div>
    </section>
  );
}

export default About;