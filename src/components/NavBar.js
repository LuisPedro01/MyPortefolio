import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"; 
import "../assets/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder"
import Logo from "../assets/logo5.png"
import Logo2 from "../assets/logo2.png"

function NavBar() {
    const [expandNavBar, setExpandNavBar] =useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);



  return (
    <div className='navbar' id={expandNavBar ? "open" : "close"}>
        <div className='toggleButton'> 
      <p className='narrow'><img src={Logo2} className="img"/></p>
        <button onClick={() => {setExpandNavBar((prev) => !prev)}}>
             <ReorderIcon/> 
        </button>
        </div>
        <div className='links'>
            <div className='name'> <Link to="/"><span className='hide'><img src={Logo} className="img"/></span></Link></div>
            <Link to="/"> Home </Link>
            <Link to="/aboutme">About</Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/support"> Support </Link>

        </div>
    </div>
  );
}


export default NavBar