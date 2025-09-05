import React, { useEffect, useRef } from "react";
import { MonetizationOn } from "@mui/icons-material";
// import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import "../css/SuportMe.css";
import { POST } from "../api/email/route.ts";

function SuportMe() {
  const refs = useRef([]);

  const handleSendEmail = async () => {
    try {
      await POST();
      console.log('Email enviado com sucesso!');
      // Adicione qualquer lógica adicional após enviar o email, se necessário
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="suport1">
      <h1 ref={el => refs.current[0] = el} className='fade-in'>If you want to collaborate with me and give some support donate some!</h1>
      <p ref={el => refs.current[1] = el} className='fade-in'>Donate to Ko-Fi</p>
      <a href="https://ko-fi.com/luisrodrigues66052" target="_blank" ref={el => refs.current[2] = el} className='fade-in'>
        <MonetizationOn />
      </a>

      <h1>Contact Me!</h1> 

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type='submit' onClick={handleSendEmail}>Send!</button>

      </form>
    </div>
  );
}

export default SuportMe;
