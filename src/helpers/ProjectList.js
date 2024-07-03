import Img1 from "../assets/3.png";
import Img2 from "../assets/suceesfull.png";
import Img10 from "../assets/image1.1.png";
import Img12 from "../assets/image1.2.png";
import Img13 from "../assets/image1.3.png";

import Img3 from "../assets/1.png"

export const ProjectList = [
    {
      _key: 'SucessfulasUsual',
      name: "Sucessful as Usual",
      image: Img2,
      images: [
        Img2,
        Img10,
        Img12,
        Img13
      ],
      skills: "HTML, CSS",
      description: "Website for a state agency",
      github: "https://github.com/LuisPedro01/Projeto",
      link: "https://main--sucessfullasusual.netlify.app/index.html"
    },
    {
      _key: "WeatherApp",
      name: "Weather App",
      image: Img3,
      skills: "React",
      description: "Weather site",
      github: "https://github.com/LuisPedro01/Weather",
      link: "https://myweather12.netlify.app/"
    },
    {
      _key: "ToDoList",
      name: "To Do List",
      image: Img1,
      skills: "React",
      description: "To Do List",
      github: "https://github.com/LuisPedro01/To-Do-List",
      link: "https://myytodolistt.netlify.app"
    }    
  ];
