import React from "react";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useEmailForm } from "@hooks/useEmailForm";
import "@css/SuportMe.css";

function SuportMe() {
  const [ref, isVisible] = useIntersectionObserver();
  const { formData, status, handleChange, handleSubmit } = useEmailForm(
    'https://backendportefolio-production.up.railway.app/send-email'
  );

  return (
    <div ref={ref} className={`suport1 fade-in ${isVisible ? 'visible' : ''}`}>
      <h1>Contact Me!</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name || ''}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email || ''}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message || ''}
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send!'}
        </button>
        
        {status === 'success' && <p className="status-msg success">Email enviado com sucesso!</p>}
        {status === 'error' && <p className="status-msg error">Erro ao enviar email. Tente novamente.</p>}
      </form>
    </div>
  );
}

export default SuportMe;
