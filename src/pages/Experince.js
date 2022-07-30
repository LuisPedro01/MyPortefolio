import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experince() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
      className='vertical-timeline-elemental--education'
      date="2007-2019"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">
          Escola Básica e Secundária de Macedo de Cavaleiros
        </h3>
        <p>Ensino Secundário</p>
        <img src={require("../assets/transferir.png")} alt="AEMC"/>
      </VerticalTimelineElement>

      
      <VerticalTimelineElement 
      className='vertical-timeline-elemental--education'
      date="2019-today"
      iconStyle={{background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">
         Instituto Politécnico de Bragança
        </h3>
        <p>Licenciatura em Engenharia Informática</p>
        <img src={require("../assets/ipb.png")} alt="IPB" height={250} width={200}/>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </div>
  )
}

export default Experince