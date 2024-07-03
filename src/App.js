import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from "./pages/Experince";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import AboutMe from "./pages/AboutMe";
import SuportMe from "./pages/SuporteMe";

export default function App() {
  return (
    <div className='App'> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:key" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience />}/>
          <Route path="/support" element={<SuportMe />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}






