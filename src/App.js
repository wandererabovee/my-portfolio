import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

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

      <Element name="home">
        <Home />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="contactMe">
        <ContactMe />
      </Element>
    </div>
  );
};

export default App;
