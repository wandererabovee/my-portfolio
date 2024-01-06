import React from 'react';
import '../styles/AboutMe.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">About Me</h1>
      <p className="subtitle">My name is Mike Smith aka WandererAbove, I am a aspiring
Frontend enginner, Game developer, and Linux acolyte.
Discover a world of thoughts and inspiration by 
exploring my blog – where my ideas come to life!</p>
      
      {/* White box with a link to play the latest game */}
      <div className="game-box">
        <p>Click here to play <br />to look at my blog</p>
      </div>

      {/* Arrow symbol */}
      <div className="arrow">&#62;</div>

      {/* Add more content as needed */}
    </div>
  );
};

export default Home;
