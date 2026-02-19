import React, { useEffect } from 'react';
import { Sparkles, Bot, Zap, Box, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import CodeWatermark from './CodeWatermark';

interface GenexusProps {
  onBack?: () => void;
}

const features = [
  {
    title: "AI-First Development",
    description: "Sfrutta algoritmi avanzati per convertire requisiti di business in codice funzionante in pochi minuti, non mesi.",
    icon: Sparkles
  },
  {
    title: "Integrazione Legacy",
    description: "Modernizza i sistemi esistenti senza dover riscrivere tutto da zero. GeneXus si connette ai tuoi DB e API attuali.",
    icon: Zap
  },
  {
    title: "Multi-Platform Deploy",
    description: "Scrivi una volta, esegui ovunque. Genera app native per iOS, Android, Web (React/Angular) e Backend (Java/.NET/Node).",
    icon: Box
  }
];

const Genexus: React.FC<GenexusProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-40 pb-20 relative overflow-hidden z-20 transition-all duration-700">
      <CodeWatermark />

      {/* Decorative Neural Hub Graphic - Consistent with the site's neural identity */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] pointer-events-none z-0 opacity-10 select-none hidden lg:block">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Dashed Ring - Slow Rotation */}
          <div className="absolute w-[80%] h-[80%] border border-dashed border-brand-500/30 rounded-full animate-[spin_30s_linear_infinite]"></div>

          {/* Middle Ring - Reverse Rotation */}
          <div className="absolute w-[60%] h-[60%] border border-slate-700/50 rounded-full animate-[spin_20s_linear_infinite_reverse]">
            {/* Orbiting Node on Middle Ring */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
          </div>

          {/* Inner Ring with variable width */}
          <div className="absolute w-[40%] h-[40%] border-2 border-slate-800 rounded-full animate-pulse"></div>

          {/* Core Pulse */}
          <div className="relative z-10 w-32 h-32 bg-brand-900/20 rounded-full backdrop-blur-sm flex items-center justify-center border border-brand-500/20 animate-pulse">
            <div className="w-10 h-10 bg-brand-500 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] animate-ping opacity-20 absolute"></div>
            <div className="w-8 h-8 bg-brand-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_80s_linear_infinite]">
            <line x1="50%" y1="50%" x2="95%" y2="15%" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="5%" y2="85%" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GeneXus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-yellow-500">Next</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed">
            La rivoluzione dello sviluppo software è qui. GeneXus Next combina l'Intelligenza Artificiale Simbolica con i moderni LLM per trasformare il modo in cui le aziende creano software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Dal linguaggio naturale al <span className="text-brand-500">Software Enterprise</span></h3>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p className="text-base md:text-lg">Con <strong>GeneXus Next</strong>, abbattiamo le barriere tra idea e implementazione. Grazie ai nuovi assistenti AI, puoi descrivere le tue necessità in linguaggio naturale.</p>
              <p className="text-base md:text-lg">L'approccio deterministico di GeneXus garantisce che il software generato sia sempre corretto, manutenibile e privo di debito tecnico.</p>
            </div>
            <ul className="space-y-5">
              {["Generazione automatica di Backend e Frontend", "Modellazione dati assistita da AI", "Deploy automatico su Cloud", "Creazione di Super Apps native"].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-600 blur-2xl opacity-20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl group aspect-video">
              <img
                src="https://i.ytimg.com/vi/ev67g3UI_gM/maxresdefault.jpg"
                alt="GeneXus Next: The AI-Powered Low-Code Platform"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900 p-10 rounded-2xl shadow-lg border border-slate-800 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
            >
              {/* Animated background glow inside the card */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>

              <div className="relative">
                <div className="w-14 h-14 bg-slate-800 text-brand-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 ring-1 ring-white/5">
                  <feature.icon className="w-6 h-6 transform transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-500 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genexus;