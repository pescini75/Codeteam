import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Servizi', href: '#services' },
  { label: 'La nostra filosofia', href: '#philosophy' },
  { label: 'Il Team', href: '#team' },
  { label: 'Dicono di noi', href: '#testimonials' },
  { label: 'Genexus', href: '#genexus' },
  { label: 'Blog', href: '#blog' },
];

interface HeaderProps {
  onNavigate?: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If a custom navigation handler is provided (e.g., to exit detail view), call it
    if (onNavigate) {
      onNavigate(href);
    } else {
      // Default behavior
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer select-none" 
            onClick={() => handleNavClick('#home')}
            aria-label="Vai alla Home"
          >
            <div className="relative font-sans text-4xl tracking-tight leading-none group">
              <span className="font-normal text-[#ff6600]">code</span>
              <span className="font-normal text-slate-400">team</span>
            </div>
          </div>

          {/* Desktop Menu - Center */}
          <nav 
            aria-label="Navigazione Principale"
            itemScope 
            itemType="http://schema.org/SiteNavigationElement"
            className="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                itemProp="url"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs xl:text-sm font-semibold text-slate-300 hover:text-brand-500 transition-colors uppercase tracking-widest"
              >
                <span itemProp="name">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Right */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
              className="text-slate-300 hover:text-brand-500 focus:outline-none transition-transform duration-300 active:scale-90"
            >
              <div className={`transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </div>
            </button>
          </div>
          
          {/* Action button on desktop */}
          <div className="hidden lg:block w-32 flex-shrink-0 text-right">
              <a href="#contact" 
                 onClick={(e) => {
                   e.preventDefault();
                   handleNavClick('#contact');
                 }}
                 className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20">
                Contattaci
              </a>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu Panel */}
      <div 
        className={`lg:hidden bg-slate-950/98 backdrop-blur-3xl border-t border-slate-800 overflow-hidden relative transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Potenziato Neural Background per Mobile Menu */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-30' : 'opacity-0'}`}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="neural-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="rgba(249,115,22,0.3)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                
                {/* Pulsing Nodes */}
                <circle cx="15" cy="15" r="0.6" fill="#f97316" className="animate-pulse" />
                <circle cx="85" cy="25" r="0.8" fill="#f97316" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <circle cx="45" cy="50" r="0.5" fill="#f97316" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                <circle cx="25" cy="85" r="0.7" fill="#f97316" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                <circle cx="75" cy="80" r="0.6" fill="#f97316" className="animate-pulse" style={{ animationDelay: '1.6s' }} />
                
                {/* Animated Flow Lines */}
                <path d="M15,15 L85,25 L75,80 L25,85 Z" fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="0.2" />
                
                {/* Fast Moving Data Flows */}
                <path 
                    d="M-10,30 Q50,10 110,30" 
                    fill="none" 
                    stroke="url(#neural-line-grad)" 
                    strokeWidth="0.3" 
                    className="animate-flow-dash"
                    style={{ strokeDasharray: '20, 80' }}
                />
                <path 
                    d="M110,70 Q50,90 -10,70" 
                    fill="none" 
                    stroke="url(#neural-line-grad)" 
                    strokeWidth="0.3" 
                    className="animate-flow-dash-reverse"
                    style={{ strokeDasharray: '15, 85' }}
                />
            </svg>
        </div>

        <nav aria-label="Navigazione Mobile" className="relative z-10 px-8 pt-6 pb-8 space-y-0.5">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              style={{ transitionDelay: `${isMobileMenuOpen ? idx * 40 : 0}ms` }}
              className={`block px-4 py-2 rounded-xl text-sm font-bold text-slate-400 hover:text-brand-500 hover:bg-slate-900/40 border border-transparent hover:border-brand-500/20 transition-all transform tracking-widest uppercase ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div 
            className={`pt-5 transition-all duration-500 delay-300 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="block w-full text-center px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase text-white bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/20 active:scale-[0.98] transition-all"
            >
              Contattaci
            </a>
          </div>
        </nav>
      </div>
      <style>{`
        @keyframes flow-dash {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .animate-flow-dash {
          animation: flow-dash 4s linear infinite;
        }
        .animate-flow-dash-reverse {
          animation: flow-dash 6s linear infinite reverse;
        }
      `}</style>
    </header>
  );
};

export default Header;