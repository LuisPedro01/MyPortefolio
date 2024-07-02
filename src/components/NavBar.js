import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"; 
import "../assets/NavBar.css";
import { Reorder } from '@mui/icons-material';
import Logo from "../assets/Logo6.png";
import Logo2 from "../assets/logo3.png";

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className='navbar' id={expandNavBar ? "open" : "close"}>
            <div className='toggleButton'> 
                <div className='logo'>
                    <img src={Logo2} className="img" alt="Logo" />
                </div>            
                <button onClick={() => {setExpandNavBar((prev) => !prev)}}>
                    <Reorder/> 
                </button>
            </div>
            <div className='links'>
                <div className='name'> 
                    <Link to="/"><span className='hide'><img src={Logo} className="img" alt="Logo" /></span></Link>
                </div>
                <Link to="/" className={isActive("/")}> Home </Link>
                <Link to="/aboutme" className={isActive("/aboutme")}> About </Link>
                <Link to="/experience" className={isActive("/experience")}> Experience </Link>
                <Link to="/projects" className={isActive("/projects")}> Projects </Link>
                <Link to="/support" className={isActive("/support")}> Support </Link>
            </div>
        </div>
    );
}

export default NavBar;
