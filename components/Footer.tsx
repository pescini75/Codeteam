
import React, { useEffect } from 'react';
import { Linkedin, Lock } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center mb-4 md:mb-0">
             {/* Recreated Logo Small */}
             <div className="relative font-sans text-2xl tracking-tight leading-none select-none group">
              <span className="font-normal text-[#ff6600]">code</span>
              <span className="font-normal text-slate-500">team</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/company/codeteam-it/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-900 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Codeteam - Tutti i diritti riservati
          </p>
          <div className="mt-4 md:mt-0 flex justify-center items-center space-x-6 text-sm text-slate-500">
             <button onClick={onPrivacyClick} className="hover:text-brand-500 transition-colors">Privacy</button>
             <button onClick={onTermsClick} className="hover:text-brand-500 transition-colors">Termini</button>
             <button 
                onClick={onAdminClick}
                className="hover:text-brand-500 transition-colors flex items-center gap-1"
                aria-label="Area Riservata"
             >
               <Lock className="w-3 h-3" /> Area Riservata
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
