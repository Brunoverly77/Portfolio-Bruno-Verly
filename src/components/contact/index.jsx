import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = 'service_243xigz';
    const templateID = 'template_pxm0ihd';
    const publicKey = 'Q5xBXnKth4sjoecuI'; 

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          alert('Mensagem enviada com sucesso! Verifique seu e-mail.');
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          alert('Erro ao enviar. Tente novamente!');
          console.error('Erro EmailJS:', error.text);
      });
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-central-container">
        
        <h2 className="central-title">INFORMAÇÕES DE CONTATO</h2>
        
        <p className="contact-subtitle-v3">
          Estou em busca de oportunidades como Estagiário ou Desenvolvedor Júnior. 
          Se você gostou do meu perfil, conecte-se comigo!
        </p>
        
        <div className="contact-cards-grid">
          <a href="mailto:brunoverlysantos7@gmail.com?subject=Contato%20via%20Portfólio" className="contact-card-v2">
            <FaEnvelope className="card-icon-v2" />
            <h3>E-mail</h3>
            <p>brunoverlysantos7@gmail.com</p>
          </a>

          <a href="https://linkedin.com/in/brunoverly7" target="_blank" rel="noopener noreferrer" className="contact-card-v2">
            <FaLinkedin className="card-icon-v2" />
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/brunoverly7</p>
          </a>

          <a href="https://wa.me/5521969994649" target="_blank" rel="noopener noreferrer" className="contact-card-v2">
            <FaWhatsapp className="card-icon-v2" />
            <h3>WhatsApp</h3>
            <p>(21) 96999-4649</p>
          </a>

          <a href="https://github.com/Brunoverly77" target="_blank" rel="noopener noreferrer" className="contact-card-v2">
            <FaGithub className="card-icon-v2" />
            <h3>GitHub</h3>
            <p>github.com/Brunoverly77</p>
          </a>

          <a href="https://www.instagram.com/brunoverly7/" target="_blank" rel="noopener noreferrer" className="contact-card-v2">
            <FaInstagram className="card-icon-v2" />
            <h3>Instagram</h3>
            <p>@brunoverly7</p>
          </a>
        </div>

        <div className="form-wrapper-central">
          <h2 className="panel-title-v2">Envie uma Mensagem</h2>
          
          <form ref={form} className="contact-form-v2" onSubmit={sendEmail}>
            <div className="input-group-v2">
              <input 
                type="text" 
                name="name" 
                placeholder="Seu Nome" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-v2">
              <input 
                type="email" 
                name="email" 
                placeholder="Seu E-mail" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-v2">
              <textarea 
                name="message" 
                placeholder="Sua Mensagem" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button-v2">
              ENVIAR MENSAGEM <FaPaperPlane className="button-icon-v2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  ); 
};

export default Contact;