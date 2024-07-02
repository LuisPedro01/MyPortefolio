import React, { useEffect, useRef } from 'react'
import "../assets/AboutMe.css";

function AboutMe() {
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
    <div className='aboutme'>
      <div className='about1'>
        <h1 ref={el => refs.current[0] = el} className='fade-in'>Hey!</h1>
        <p ref={el => refs.current[1] = el} className='fade-in'>I'm Luís Rodrigues from Portugal!<br />I love programming, and learning new things!
          Feel free to get in touch or take a look to some of my work.</p>
      </div>

    </div>
  )
}


export default AboutMe