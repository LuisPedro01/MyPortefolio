import Img3 from "@assets/1.png";
import Img1 from "@assets/3.png";
import Img2 from "@assets/suceesfull.png";
import Img10 from "@assets/image1.1.png";
import Img12 from "@assets/image1.2.png";
import Img13 from "@assets/image1.3.png";

import MasterImg1 from "@assets/image.png";
import MasterImg2 from "@assets/image2.png";
import MasterImg3 from "@assets/image3.png";
import MasterImg4 from "@assets/image4.png";
import MasterImg5 from "@assets/image5.png";
import MasterImg6 from "@assets/image6.png";
import MasterImg7 from "@assets/image7.png";
import MasterImg8 from "@assets/image8.png";

import BachelorImg1 from "@assets/image9.png";
import BachelorImg2 from "@assets/image10.png";

export const projects = [
  // General Projects
  {
    _key: 'SucessfulasUsual',
    category: 'general',
    name: "Sucessful as Usual",
    image: Img2,
    images: [Img2, Img10, Img12, Img13],
    skills: "HTML, CSS",
    description: "Website for a state agency",
    github: "https://github.com/LuisPedro01/Projeto",
    link: "https://main--sucessfullasusual.netlify.app/index.html"
  },
  {
    _key: "WeatherApp",
    category: 'general',
    name: "Weather App",
    image: Img3,
    skills: "React",
    description: "Weather site",
    github: "https://github.com/LuisPedro01/Weather",
    link: "https://myweather12.netlify.app/"
  },
  {
    _key: "ToDoList",
    category: 'general',
    name: "To Do List",
    image: Img1,
    skills: "React",
    description: "To Do List",
    github: "https://github.com/LuisPedro01/To-Do-List",
    link: "https://myytodolistt.netlify.app"
  },
  {
    _key: "FinanceBot",
    category: 'general',
    name: "Finance Telegram Bot",
    image: Img1,
    skills: "Python",
    description: "A telegram bot that can store all the information about finance in Notion Database. It also sends a weekly message to the user with the total expenses of the week.",
    github: "https://github.com/LuisPedro01/To-Do-List",
    link: "https://myytodolistt.netlify.app"
  },
  // Master Projects
  {
    _key: "GeographicInformation",
    category: 'master',
    name: "Geographic Information",
    image: MasterImg1,
    skills: "React, Leaflet",
    description: "Website with the posibility to create categories and visualize them in a Map",
    github: "https://github.com/LuisPedro01/Informaco-Geografica",
    link: ""
  },
  {
    _key: "D3",
    category: 'master',
    name: "D3",
    image: MasterImg2,
    skills: "React, D3, RestfulAPI",
    description: "Project that displays several dashboards from launchs of SpaceX. Possibility to create dashboards and drag and drop them.",
    github: "https://github.com/LuisPedro01/d3",
    link: ""
  },
  {
    _key: "SpaceJump",
    category: 'master',
    name: "Space Jump",
    image: MasterImg3,
    skills: "Javascript, P5.js",
    description: "A game that simulates the original Space Jump Game",
    github: "https://github.com/LuisPedro01/Space-Jump",
    link: ""
  },
  {
    _key: "ChatbotMobile",
    category: 'master',
    name: "Chatbot Mobile",
    image: MasterImg4,
    skills: "React-Native, Firebase, NPM, Dialogflow",
    description: "A Chatbot for React Native apps, to integrate the Chatbot in another project just installing the NPM package.",
    github: "https://github.com/LuisPedro01/Chatbot-Mobile",
    link: ""
  },
  {
    _key: "AFrame",
    category: 'master',
    name: "A-Frame",
    image: MasterImg5,
    skills: "Javascript, A-Frame",
    description: "A game that simulates a Virtual Stadium",
    github: "https://github.com/LuisPedro01/A-FRAME",
    link: ""
  },
  {
    _key: "ChabotVue",
    category: 'master',
    name: "Chatbot",
    image: MasterImg6,
    skills: "Vue.js, Firebase, DialogFlow",
    description: "A game that simulates the origianl Space Jump Game",
    github: "https://github.com/LuisPedro01/ChatBot-Vue",
    link: ""
  },
  {
    _key: "CompassFlow",
    category: 'master',
    name: "Compass Flow",
    image: MasterImg7,
    skills: "React-Native, Tensorflow Expo-Camera, Expo-Sensors",
    description: "A React-Native project that uses severall sensors of the smatphone.",
    github: "https://github.com/LuisPedro01/CompassFlow",
    link: ""
  },
  {
    _key: "Arduino",
    category: 'master',
    name: "Arduino Game Project",
    image: MasterImg8,
    skills: "C, Arduino",
    description: "A game of memory, using sounds in Arduino Uno",
    github: "",
    link: "https://www.tinkercad.com/things/dfzxovnXbsl-magnificent-crift"
  },
  // Bachelor Projects
  {
    _key: "APIVoice",
    category: 'bachelor',
    name: "Api Voice",
    image: BachelorImg1,
    skills: "React-Native, Firebase, Text-to-Speech",
    description: "React-Native app for beekeepers that uses voice commands to control the app, making easier the beekeepers to make reports about the bees.",
    github: "https://github.com/LuisPedro01/Apivoice",
    link: ""
  },
  {
    _key: "Flask",
    category: 'bachelor',
    name: "Flask Server",
    image: BachelorImg2,
    skills: "Python",
    description: "Flask Server integrated with the API Voice project to convert the audio from the App to text and send the text back to the App.",
    github: "https://github.com/LuisPedro01/FlaskServer",
    link: ""
  }
];
