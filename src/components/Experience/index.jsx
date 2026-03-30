import { motion } from 'framer-motion';
import './experience.css';

function Experience() {
  const experiences = [
    {
      role: "Assistente Administrativo",
      company: "Rio de Janeiro, RJ",
      period: "Experiência Profissional",
      description: [
        "Organização de planilhas e bases de dados no Excel.",
        "Criação e formatação de documentos e relatórios no Word."
      ]
    },
    {
      role: "Análise e Desenv. de Sistemas",
      company: "Univ. Cruzeiro do Sul",
      period: "3º Período - em andamento",
      description: [
        "Foco em desenvolvimento web (Front-end e Back-end).",
        "Estudo de estruturas de dados, algoritmos e bancos de dados SQL/NoSQL."
      ]
    }
  ];

  return (
    <section id="experiencia" className="experience-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Experiência & Formação
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <span className="period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;