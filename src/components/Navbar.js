// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="blog" smooth={true} duration={500}>
        Blog
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
