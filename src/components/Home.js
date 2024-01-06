import React from 'react';
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to<br />Mike's Website</h1>
      <p className="subtitle">My Personal Library to Showcase My Websites and Games</p>
      
      {/* White box with a link to play the latest game */}
      <div className="game-box">
        <p>Click here to play <br />my latest game</p>
      </div>

      {/* Arrow symbol */}
      <div className="arrow">&#62;</div>

      {/* Add more content as needed */}
    </div>
  );
};

export default Home;
