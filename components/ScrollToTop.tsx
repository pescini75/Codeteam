import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  shouldShow: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ shouldShow }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Logic: Must be allowed by parent (shouldShow) AND user must have scrolled
  const isVisible = shouldShow && isScrolled;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900 border border-brand-500/20"
        aria-label="Torna su"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;