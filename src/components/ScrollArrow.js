// ScrollArrow.js
import React, { useState, useEffect } from 'react';
import '../styles/ScrollArrow.css';

const ScrollArrow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down
      if (currentScrollY > lastScrollY) {
        setVisible(true);
        clearTimeout(scrollTimeout);

        // Hide the arrow after 2 seconds of inactivity
        scrollTimeout = setTimeout(() => {
          setVisible(false);
        }, 2000);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-arrow ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      &gt; {/* Greater-than symbol */}
    </div>
  );
};

export default ScrollArrow;
