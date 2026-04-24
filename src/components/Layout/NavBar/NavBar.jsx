import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { Close, Reorder } from '@mui/icons-material';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/aboutme", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

function NavBar() {
  const [expandNavBar, setExpandNavBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header className="navbar-shell">
      <nav className={`navbar ${expandNavBar ? "is-open" : ""}`}>
        <Link to="/" className="brand" aria-label="Luís Rodrigues home">
          <span className="brand-mark">LR</span>
          <span className="brand-copy">
            <strong>Luís Rodrigues</strong>
            <small>Developer Portfolio</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={expandNavBar ? "Fechar menu" : "Abrir menu"}
          aria-expanded={expandNavBar}
          onClick={() => setExpandNavBar((prev) => !prev)}
          type="button"
        >
          {expandNavBar ? <Close /> : <Reorder />}
        </button>

        <div className="nav-links">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} className={isActive(to)}>
              {label}
            </Link>
          ))}
          <a
            className="nav-cta"
            href="mailto:luisprodrigues01@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
