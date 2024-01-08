// AboutMe.js
import React from 'react';
import '../styles/AboutMe.css'; // Import the CSS file

const AboutMe = () => {
  const handleButtonClick = () => {
    // Add the functionality you want when the button is clicked
    console.log('Button clicked!');
  };

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-subtitle">My name is Mike Smith aka WandererAbove, I am an aspiring Frontend engineer, Game developer, and Linux acolyte. Discover a world of thoughts and inspiration by exploring my blog – where my ideas come to life!</p>
      
      <button className="about-me-blog-button" onClick={handleButtonClick}>
        Click here to play <br />my latest game
      </button>
    </div>
  );
};

export default AboutMe;
