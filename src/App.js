import React from 'react';
import { Link, Element } from 'react-scroll';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const App = () => {
  return (
    <div>
      <Link to="page1" smooth={true} duration={500}>
        Page 1
      </Link>
      <Link to="page2" smooth={true} duration={500}>
        Page 2
      </Link>
      <Link to="page3" smooth={true} duration={500}>
        Page 3
      </Link>

      <Element name="page1">
        <Page1 />
      </Element>
      <Element name="page2">
        <Page2 />
      </Element>
      <Element name="page3">
        <Page3 />
      </Element>
    </div>
  );
};

export default App;
