// AboutMe.js
import React from 'react';
import '../styles/AboutMe.css'; // Import the CSS file

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-subtitle">My name is Mike Smith aka WandererAbove, I am an aspiring Frontend engineer, Game developer, and Linux acolyte. Discover a world of thoughts and inspiration by exploring my blog – where my ideas come to life!</p>
      
      <div className="about-me-blog-box">
        <p>Click here to play <br />my latest game</p>
      </div>

      {/* Arrow symbol */}
      <div className="about-me-arrow">&#62;</div>
    </div>
  );
};

export default AboutMe;
