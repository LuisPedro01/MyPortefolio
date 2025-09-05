import React, { useEffect, useRef, useState } from "react";
import { MonetizationOn } from "@mui/icons-material";
import "../css/SuportMe.css";

function SuportMe() {
  const refs = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {

      fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'João', email: 'joao@email.com', message: 'Teste' }),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
      
      
      // const res = await fetch("/api/email/route", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
  
      // if (res.ok) {
      //   console.log("Email enviado com sucesso!");
      //   alert("Mensagem enviada com sucesso!");
      //   setFormData({ name: "", email: "", message: "" });
      // } else {
      //   console.error("Erro ao enviar email:", await res.json());
      //   alert("Erro ao enviar a mensagem. Tenta novamente.");
      // }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro inesperado.");
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="suport1">
      <h1>Contact Me!</h1>

      <form onSubmit={handleSendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export default SuportMe;
