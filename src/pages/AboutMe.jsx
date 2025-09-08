import React, { useEffect, useRef, useState } from 'react';
import "../css/AboutMe.css";

function AboutMe() {
  const refs = useRef([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backendportefolio-production.up.railway.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      console.log("Resposta do servidor:", data);

      if (res.ok) {
        alert("Email enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Erro ao enviar email: " + data.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro inesperado. Verifica a consola.");
    }
  };

  return (
    <div className='aboutme'>
      <div className='about1'>
        <h1 ref={el => refs.current[0] = el} className='fade-in'>Hey!</h1>
        <p ref={el => refs.current[1] = el} className='fade-in'>
          I'm Luís Rodrigues from Portugal!<br />
          I love programming, and learning new things!
          Feel free to get in touch or take a look to some of my work.
        </p>

        <div className='contact fade-in' ref={el => refs.current[2] = el}>
          <p>If you want to learn more about me, contact me!</p>
        </div>

        {/* Formulário */}
        <form className="email-form" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Nome"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Escreve a tua mensagem..."
            className="textarea-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn-email">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default AboutMe;
