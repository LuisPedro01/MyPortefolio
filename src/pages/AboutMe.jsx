import React from 'react';
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useEmailForm } from "@hooks/useEmailForm";
import "@css/AboutMe.css";

function AboutMe() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [textRef, isTextVisible] = useIntersectionObserver();
  const [contactRef, isContactVisible] = useIntersectionObserver();

  const { formData, status, handleChange, handleSubmit } = useEmailForm(
    'https://backendportefolio-production.up.railway.app/send-email'
  );

  return (
    <div className='aboutme'>
      <div className='about1'>
        <h1 ref={titleRef} className={`fade-in ${isTitleVisible ? 'visible' : ''}`}>Hey!</h1>
        <p ref={textRef} className={`fade-in ${isTextVisible ? 'visible' : ''}`}>
          I'm Luís Rodrigues from Portugal!<br />
          I love programming, and learning new things!
          Feel free to get in touch or take a look to some of my work.
        </p>

        <div ref={contactRef} className={`contact fade-in ${isContactVisible ? 'visible' : ''}`}>
          <p>If you want to learn more about me, contact me!</p>
        </div>

        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="input-field"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email || ''}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Escreve a tua mensagem..."
            className="textarea-field"
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
          <button 
            type="submit" 
            className="submit-btn-email"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'A enviar...' : 'Enviar'}
          </button>
          
          {status === 'success' && <p className="status-msg success">Email enviado com sucesso!</p>}
          {status === 'error' && <p className="status-msg error">Erro ao enviar email. Tente novamente.</p>}
        </form>
      </div>
    </div>
  );
}

export default AboutMe;
