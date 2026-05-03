import React from 'react';
import './projects.css';
import imgConversor from '../../assets/conversor.png';
import imgBandeiras from '../../assets/acerteabandeira.jpg'; 
import imgRotina from '../../assets/planejamento.jpg';
import imgAdivinhacao from '../../assets/advinha.png';    
import imgCashback from '../../assets/Cashback.png'; 

const projectsData = [
  {
    title: "Calculadora de Cashback",
    description: "Aplicação Full Stack para cálculo automatizado de cashback com persistência de histórico por IP.",
    tech: "React.js • Python • Flask • SQLite",
    image: imgCashback,
    link: "https://github.com/Brunoverly77/cashback-calculator-nology" 
  },
  {
    title: "Conversor de Moedas",
    description: "Dashboard moderno com conversão em tempo real, suporte multilingue (PT, EN, ES) e modo privacidade.",
    tech: "React.js • Vite • CSS3",
    image: imgConversor, 
    link: "https://github.com/Brunoverly77/Converter_moeda_react"
  },
  {
    title: "Planejamento de Rotina",
    description: "Ferramenta para organização semanal personalizada com opção de exportar cronograma em PDF.",
    tech: "HTML5 • CSS3 • JavaScript",
    image: imgRotina,
    link: "https://github.com/Brunoverly77/Planning-Weekly"
  },
  {
    title: "Jogo das Bandeiras",
    description: "Desafio de conhecimentos gerais com cronômetro, sistema de fases e limite de tentativas.",
    tech: "HTML5 • CSS3 • JavaScript",
    image: imgBandeiras,
    link: "https://github.com/Brunoverly77/Acerte-a-bandeira-correta"
  },
  {
    title: "Jogo da Adivinhação",
    description: "Aplicação interativa de lógica onde o usuário tenta acertar o número secreto do sistema.",
    tech: "HTML5 • CSS3 • JavaScript",
    image: imgAdivinhacao,
    link: "https://github.com/Brunoverly77/Jovo-da-adivinha-"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={`Capa do projeto ${project.title}`} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <span className="project-tech-stack">{project.tech}</span>
                <a href={project.link} className="project-link-button" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;