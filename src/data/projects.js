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
  {
    _key: 'SucessfulasUsual',
    category: 'general',
    categoryLabel: 'Personal project',
    featured: true,
    name: "Sucessful as Usual",
    image: Img2,
    images: [Img2, Img10, Img12, Img13],
    skills: "HTML, CSS",
    focus: "Marketing website and polished brand presentation",
    description: "Website for a state agency with a more presentation-focused structure.",
    highlights: [
      "Landing page structure designed to communicate quickly and clearly.",
      "Static frontend implementation with visual hierarchy and branded sections.",
      "Deployed as a live web experience for public access.",
    ],
    github: "https://github.com/LuisPedro01/Projeto",
    link: "https://main--sucessfullasusual.netlify.app/index.html"
  },
  {
    _key: "WeatherApp",
    category: 'general',
    categoryLabel: 'Personal project',
    featured: true,
    name: "Weather App",
    image: Img3,
    skills: "React",
    focus: "Interactive utility with realtime information",
    description: "Weather application built in React to fetch and display forecast data.",
    highlights: [
      "React-based interface for searching and checking weather conditions.",
      "Useful real-world utility focused on clarity and speed.",
      "Clean single-purpose project with direct user value.",
    ],
    github: "https://github.com/LuisPedro01/Weather",
    link: "https://myweather12.netlify.app/"
  },
  {
    _key: "ToDoList",
    category: 'general',
    categoryLabel: 'Personal project',
    featured: false,
    name: "To Do List",
    image: Img1,
    skills: "React",
    focus: "Task management and UI interaction",
    description: "To-do list application focused on lightweight task organization.",
    highlights: [
      "Simple state-driven task management experience.",
      "Clear interaction model for adding and completing tasks.",
      "Useful practice in building reusable UI patterns with React.",
    ],
    github: "https://github.com/LuisPedro01/To-Do-List",
    link: "https://myytodolistt.netlify.app"
  },
  {
    _key: "FinanceBot",
    category: 'general',
    categoryLabel: 'Personal project',
    featured: false,
    name: "Finance Telegram Bot",
    image: Img1,
    skills: "Python, Notion API, Telegram",
    focus: "Automation and personal finance workflow",
    description: "Telegram bot that stores finance data in Notion and sends weekly expense summaries.",
    highlights: [
      "Automates expense tracking through conversational interaction.",
      "Uses Notion as a flexible database for personal finance data.",
      "Schedules recurring summaries to keep users informed.",
    ],
    github: "https://github.com/LuisPedro01/To-Do-List",
    link: ""
  },
  {
    _key: "GeographicInformation",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: true,
    name: "Geographic Information",
    image: MasterImg1,
    skills: "React, Leaflet",
    focus: "Maps, categories and data visualization",
    description: "Platform to create categories and visualize them on an interactive map.",
    highlights: [
      "Combines geospatial visualization with user-defined categorization.",
      "Uses Leaflet for mapping interactions and data display.",
      "Explores practical interfaces for geographic information systems.",
    ],
    github: "https://github.com/LuisPedro01/Informaco-Geografica",
    link: ""
  },
  {
    _key: "D3",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: true,
    name: "D3",
    image: MasterImg2,
    skills: "React, D3, REST API",
    focus: "Dashboards and drag-and-drop analytics",
    description: "Dashboard project showing SpaceX launch data with custom dashboard creation.",
    highlights: [
      "Data-rich interface using D3 for visual storytelling.",
      "Includes draggable, customizable dashboard interactions.",
      "Connects API data to more exploratory analytical views.",
    ],
    github: "https://github.com/LuisPedro01/d3",
    link: ""
  },
  {
    _key: "SpaceJump",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "Space Jump",
    image: MasterImg3,
    skills: "JavaScript, P5.js",
    focus: "Gameplay mechanics and browser interaction",
    description: "Game inspired by the original Space Jump concept.",
    highlights: [
      "Interactive browser game focused on timing and mechanics.",
      "Built with JavaScript and P5.js for creative coding.",
      "Explores playful interface design and animation.",
    ],
    github: "https://github.com/LuisPedro01/Space-Jump",
    link: ""
  },
  {
    _key: "ChatbotMobile",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "Chatbot Mobile",
    image: MasterImg4,
    skills: "React Native, Firebase, Dialogflow, NPM",
    focus: "Reusable mobile assistant component",
    description: "Chatbot package for React Native apps that can be integrated into other projects.",
    highlights: [
      "Designed as a reusable component for mobile applications.",
      "Integrates conversational flows with Dialogflow.",
      "Uses Firebase-backed services and package-based distribution.",
    ],
    github: "https://github.com/LuisPedro01/Chatbot-Mobile",
    link: ""
  },
  {
    _key: "AFrame",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "A-Frame",
    image: MasterImg5,
    skills: "JavaScript, A-Frame",
    focus: "Immersive interfaces and virtual environments",
    description: "Virtual stadium experience created with A-Frame.",
    highlights: [
      "Explores 3D and immersive interaction on the web.",
      "Built around virtual environment concepts and scene composition.",
      "Good example of experimenting outside standard 2D interfaces.",
    ],
    github: "https://github.com/LuisPedro01/A-FRAME",
    link: ""
  },
  {
    _key: "ChabotVue",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "Chatbot",
    image: MasterImg6,
    skills: "Vue.js, Firebase, Dialogflow",
    focus: "Conversational UI in Vue",
    description: "Chatbot project built with Vue.js and Firebase services.",
    highlights: [
      "Conversational interface implemented in a Vue.js application.",
      "Uses Dialogflow for natural language interaction flows.",
      "Combines frontend UI and cloud service integration.",
    ],
    github: "https://github.com/LuisPedro01/ChatBot-Vue",
    link: ""
  },
  {
    _key: "CompassFlow",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "Compass Flow",
    image: MasterImg7,
    skills: "React Native, Tensorflow, Expo Camera, Expo Sensors",
    focus: "Mobile sensors and device intelligence",
    description: "React Native project using smartphone sensors for interactive behavior.",
    highlights: [
      "Combines device sensors, camera input and mobile interaction.",
      "Explores intelligent behavior in a smartphone context.",
      "Strong example of native hardware-aware development.",
    ],
    github: "https://github.com/LuisPedro01/CompassFlow",
    link: ""
  },
  {
    _key: "Arduino",
    category: 'master',
    categoryLabel: "Master's degree",
    featured: false,
    name: "Arduino Game Project",
    image: MasterImg8,
    skills: "C, Arduino",
    focus: "Physical interaction and embedded systems",
    description: "Memory game made with Arduino Uno and sound cues.",
    highlights: [
      "Extends interaction design into hardware and embedded systems.",
      "Uses sound and memory patterns for gameplay feedback.",
      "Demonstrates comfort beyond web-only environments.",
    ],
    github: "",
    link: "https://www.tinkercad.com/things/dfzxovnXbsl-magnificent-crift"
  },
  {
    _key: "APIVoice",
    category: 'bachelor',
    categoryLabel: "Bachelor's degree",
    featured: false,
    name: "Api Voice",
    image: BachelorImg1,
    skills: "React Native, Firebase, Text-to-Speech",
    focus: "Accessibility and voice-driven mobile interaction",
    description: "React Native app for beekeepers using voice commands to simplify reporting.",
    highlights: [
      "Voice-first interaction aimed at real-world field usage.",
      "Supports accessibility and hands-busy workflows.",
      "Connects mobile UX with practical domain-specific needs.",
    ],
    github: "https://github.com/LuisPedro01/Apivoice",
    link: ""
  },
  {
    _key: "Flask",
    category: 'bachelor',
    categoryLabel: "Bachelor's degree",
    featured: false,
    name: "Flask Server",
    image: BachelorImg2,
    skills: "Python, Flask",
    focus: "Speech processing backend service",
    description: "Flask server used by the Api Voice mobile project to convert audio into text.",
    highlights: [
      "Backend service supporting voice-based mobile experiences.",
      "Processes audio and returns usable text to the application.",
      "Demonstrates service integration between mobile and backend layers.",
    ],
    github: "https://github.com/LuisPedro01/FlaskServer",
    link: ""
  }
];
