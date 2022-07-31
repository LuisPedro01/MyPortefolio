import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"; 
import "../assets/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function NavBar() {
    const [expandNavBar, setExpandNavBar] =useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);



  return (
    <div className='navbar' id={expandNavBar ? "open" : "close"}>
        <div className='toggleButton'> 
        <button onClick={() => {setExpandNavBar((prev) => !prev)}}>
             <ReorderIcon/> 
        </button>
        </div>
        <div className='links'>
            <div className='name'> <Link to="/"> Luís Rodrigues </Link></div>
            <Link to="/"> Home </Link>
            <Link to="/aboutme">About</Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/projects"> Projects </Link>
            
        </div>
    </div>
  );
}


export default NavBar