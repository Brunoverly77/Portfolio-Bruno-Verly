import { motion } from 'framer-motion';
import './skills.css';


function Skills() {
  const skillGroups = [
    {
      title: "Front-end",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Back-end",
      skills: ["Python","Node.js (básico)","PHP (básico)"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "VS Code", "Vercel"]
    },
    {
      title: "Office",
      skills: ["Excel", "Word"]
    },
    {
      title: "Idiomas",
      skills: ["Português (Nativo)", "Inglês (Leitura técnica)", "Espanhol (Intermediário)"]
    }
  ];

  return (
    <section id="habilidades" className="skills-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Habilidades
      </motion.h2>
      
      <div className="skills-sections">
        {skillGroups.map((group, groupIndex) => (
          <motion.div 
            key={groupIndex}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3>{group.title}</h3>
            <ul className="skills-list">
              {group.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;