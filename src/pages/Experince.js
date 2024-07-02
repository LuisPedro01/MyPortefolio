import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";
// import SchoolIcon from "@material-ui/icons/School";

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
          <img src={require("../assets/transferir.png")} alt="AEMC" />
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
            src={require("../assets/ipb.png")}
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
            src={require("../assets/logoIPVC.png")}
            alt="IPVC"
            height={250}
            width={200}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-elemental--education"
          date="September 2023-today"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Visor-AI</h3>
          <p>Junior Software Developer</p>
          <img
            src={require("../assets/logoVISORAI.webp")}
            alt="VISOR"
            height={250}
            width={400}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experince;
