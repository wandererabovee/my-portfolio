import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import ScrollArrow from './components/ScrollArrow';

const App = () => {
  return (
    <div>
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="aboutMe" smooth={true} duration={500}>
        About Me
      </Link>
      <Link to="contactMe" smooth={true} duration={500}>
        Contact Me
      </Link>

      {/* Wrap the Links in a Link container */}
      <Link to="home" smooth={true} duration={500}>
        <Home />
      </Link>
      <Link to="aboutMe" smooth={true} duration={500}>
        <AboutMe />
      </Link>
      <Link to="contactMe" smooth={true} duration={500}>
        <ContactMe />
      </Link>

      <ScrollArrow />
    </div>
  );
};

export default App;
