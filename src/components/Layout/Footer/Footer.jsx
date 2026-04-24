import React from 'react';
import { GitHub, LinkedIn, Mail, Launch } from '@mui/icons-material';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-copy'>
          <span>Luís Rodrigues</span>
          <h3>Open to building thoughtful digital products.</h3>
          <p>
            Frontend, full-stack and product-minded development with a clean, modern approach.
          </p>
        </div>

        <div className='footer-actions'>
          <a href='mailto:luisprodrigues01@gmail.com' target="_blank" rel="noopener noreferrer">
            <Mail />
            Email
          </a>
          <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank" rel="noopener noreferrer">
            <LinkedIn />
            LinkedIn
          </a>
          <a href='https://github.com/LuisPedro01' target="_blank" rel="noopener noreferrer">
            <GitHub />
            GitHub
          </a>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Luís Rodrigues. Crafted with React.</p>
        <a href='mailto:luisprodrigues01@gmail.com'>
          Say hello
          <Launch />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
