import React, { useEffect, useRef } from "react";
import { MonetizationOn } from "@mui/icons-material";
// import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import "../css/SuportMe.css";

function SuportMe() {
  const refs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="suport1">
      <h1 ref={el => refs.current[0] = el} className='fade-in'>If you want to collaborate with me and give some support donate some!</h1>
      <p ref={el => refs.current[1] = el} className='fade-in'>Donate to Ko-Fi</p>
      <a href="https://ko-fi.com/luisrodrigues66052" target="_blank" ref={el => refs.current[2] = el} className='fade-in'>
        <MonetizationOn />
      </a>
    </div>
  );
}

export default SuportMe;
