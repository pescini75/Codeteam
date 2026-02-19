import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Base transition classes for consistency - Duration increased to 1500ms
  const transitionClasses = "transition-all duration-[1500ms] ease-out transform";
  const hiddenState = "opacity-0 translate-y-24"; // Increased slide up distance from 8 to 24
  const visibleState = "opacity-100 translate-y-0";

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center pt-20 pb-24 lg:pb-0 overflow-hidden">
      {/* Background elements are handled by NeuralNetworkBackground in App.tsx */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            {/* Availability Banner - Added group for hover animations */}
            <div className={`inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 mb-2 group cursor-default hover:bg-slate-900/60 hover:border-brand-500/30 transition-all duration-300 ${transitionClasses} ${isVisible ? visibleState : hiddenState}`}>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse group-hover:scale-125 group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                Sempre disponibili per nuovi progetti
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] ${transitionClasses} delay-300 ${isVisible ? visibleState : hiddenState}`}>
              Costruiamo il <br />
              <span className="text-white">
                Futuro Digitale
              </span>
            </h1>
            
            {/* Paragraph */}
            <p className={`text-lg text-slate-200 max-w-xl leading-relaxed ${transitionClasses} delay-500 ${isVisible ? visibleState : hiddenState}`}>
              Trasformiamo idee complesse in programmi funzionali. Siamo un team di sviluppatori specializzati nell'integrazione di sistemi, sviluppo software sartoriali custom e ERP gestionali.
            </p>
            
            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${transitionClasses} delay-700 ${isVisible ? visibleState : hiddenState}`}>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-500 hover:scale-105 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-300 shadow-lg shadow-brand-600/20">
                Scopri i servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#team" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-200 bg-slate-900/60 backdrop-blur hover:bg-slate-800 hover:scale-105 hover:shadow-xl hover:shadow-white/5 transition-all duration-300">
                Chi siamo
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end ${transitionClasses} delay-1000 ${isVisible ? visibleState : hiddenState}`}>
             <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-brand-900 to-slate-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main Code Card */}
                <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700 shadow-2xl rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 ring-1 ring-white/10 z-30 cursor-default group/card">
                  <div className="flex items-center space-x-2 mb-4 border-b border-slate-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-slate-500 group-hover/card:text-brand-500 transition-colors duration-300">// Inizializzazione sistema</div>
                    <div className="text-purple-400">const <span className="text-blue-400">Future</span> = <span className="text-yellow-400">await</span> Tech.build({'{'}</div>
                    <div className="pl-4 text-slate-400">efficienza: <span className="text-green-400">true</span>,</div>
                    <div className="pl-4 text-slate-400">scalabilità: <span className="text-brand-500">"illimitata"</span>,</div>
                    <div className="pl-4 text-slate-400">sicurezza: <span className="text-yellow-400">Priority.HIGH</span></div>
                    <div className="text-purple-400">{'}'});</div>
                    <div className="text-slate-500 mt-4">// Deploy automatico</div>
                    <div className="flex items-center text-slate-300">
                       <Terminal className="w-4 h-4 mr-2" />
                       <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>

                {/* Codeteam Badge - Rotated 10 degrees as requested */}
                <div className="absolute bottom-4 -left-2 right-6 z-20 transform rotate-[10deg] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer group/badge">
                  <div className="bg-[#FF6600] py-6 px-4 sm:py-10 sm:px-6 rounded-2xl shadow-[0_20px_50px_rgba(255,102,0,0.4)] border border-orange-400/20 w-full flex flex-col items-center justify-center group-hover/badge:shadow-[0_30px_60px_rgba(255,102,0,0.5)] transition-shadow duration-500">
                    <div 
                      className="font-sans font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none text-transparent opacity-95 mb-4"
                      style={{ WebkitTextStroke: '2px white' }}
                    >
                      codeteam
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-white font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center whitespace-nowrap">
                      Next step of software development
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;