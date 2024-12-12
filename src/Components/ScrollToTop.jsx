// src/Components/ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={styles.scrollButton}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#FFD700', // Golden color (Hex code for gold)
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default ScrollToTop;
