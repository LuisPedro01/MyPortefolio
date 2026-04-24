import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";
import "@css/Experience.css";

import LogoTransferir from "@assets/transferir.png";
import LogoIPB from "@assets/ipb.png";
import LogoIPVC from "@assets/logoIPVC.png";
import LogoVisorAI from "@assets/logoVISORAI.webp";

const experiences = [
  {
    type: "education",
    date: "2007 - 2019",
    title: "Escola Básica e Secundária de Macedo de Cavaleiros",
    role: "Ensino Secundário",
    logo: LogoTransferir,
    alt: "AEMC",
  },
  {
    type: "education",
    date: "2019 - 2023",
    title: "Instituto Politécnico de Bragança",
    role: "Licenciatura em Engenharia Informática",
    logo: LogoIPB,
    alt: "IPB",
  },
  {
    type: "education",
    date: "2023 - Present",
    title: "Instituto Politécnico de Viana do Castelo",
    role: "Mestrado em Engenharia Informática",
    logo: LogoIPVC,
    alt: "IPVC",
  },
  {
    type: "work",
    date: "September 2023 - December 2024",
    title: "Visor-AI",
    role: "Junior Software Developer",
    logo: LogoVisorAI,
    alt: "Visor AI",
  },
  {
    type: "work",
    date: "January 2025 - Present",
    title: "Visor-AI",
    role: "Analyst I - Software Developer",
    logo: LogoVisorAI,
    alt: "Visor AI",
  },
];

function Experince() {
  return (
    <div className="experience page-shell">
      <section className="experience-hero">
        <div className="section-heading">
          <span>Journey</span>
          <h2>Academic growth and real-world product experience.</h2>
          <p>
            A path shaped by computer engineering, continuous learning and hands-on work delivering software solutions.
          </p>
        </div>

        <div className="experience-badges">
          <div className="glass-panel">
            <strong>Education</strong>
            <p>Solid technical foundation in computer engineering.</p>
          </div>
          <div className="glass-panel">
            <strong>Industry</strong>
            <p>Professional experience building and evolving software products.</p>
          </div>
        </div>
      </section>

      <div className="timeline-wrap">
        <VerticalTimeline lineColor="rgba(17, 17, 17, 0.12)">
          {experiences.map((item) => (
            <VerticalTimelineElement
              key={`${item.title}-${item.date}`}
              className={`vertical-timeline-element--${item.type}`}
              date={item.date}
              iconStyle={{
                background: item.type === "work" ? "var(--accent)" : "var(--secondary-accent)",
                color: "#ffffff",
              }}
              icon={item.type === "work" ? <Work /> : <School />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <p>{item.role}</p>
              <img src={item.logo} alt={item.alt} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experince;
