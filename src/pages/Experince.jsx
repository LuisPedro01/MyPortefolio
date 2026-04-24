import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

import LogoTransferir from "@assets/transferir.png";
import LogoIPB from "@assets/ipb.png";
import LogoIPVC from "@assets/logoIPVC.png";
import LogoVisorAI from "@assets/logoVISORAI.webp";

function Experince() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-elemental--education"
          date="2007-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Escola Básica e Secundária de Macedo de Cavaleiros
          </h3>
          <p>Ensino Secundário</p>
          <img src={LogoTransferir} alt="AEMC" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-elemental--education"
          date="2019-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Instituto Politécnico de Bragança
          </h3>
          <p>Licenciatura em Engenharia Informática</p>
          <img
            src={LogoIPB}
            alt="IPB"
            height={250}
            width={200}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-elemental--education"
          date="2023-today"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Instituto Politécnico de Viana do Castelo
          </h3>
          <p>Mestrado em Engenharia Informática</p>
          <img
            src={LogoIPVC}
            alt="IPVC"
            height={250}
            width={200}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2023 - December 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Visor-AI</h3>
          <p>Junior Software Developer</p>
          <img
            src={LogoVisorAI}
            alt="VISOR"
            height={250}
            width={300}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2025 - today"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Visor-AI</h3>
          <p>Analyst I - Software Developer</p>
          <img
            src={LogoVisorAI}
            alt="VISOR"
            height={250}
            width={300}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experince;
