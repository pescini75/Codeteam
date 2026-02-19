import React, { useState } from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const values = [
  {
    title: "Eccellenza Tecnica",
    description: "Non ci accontentiamo di codice che funziona. Scriviamo software pulito, scalabile e manutenibile, costruito per durare nel tempo.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Human Centric",
    description: "La tecnologia deve servire le persone, non il contrario. Progettiamo interfacce intuitive che migliorano la vita lavorativa degli utenti.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Innovazione Pragmatica",
    description: "Non seguiamo le mode per il gusto di farlo. Adottiamo tecnologie all'avanguardia solo quando portano un valore reale e misurabile al business.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-6">
               <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
               <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Il nostro DNA
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Oltre il codice: <br />
              La nostra filosofia
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400 mb-8">
              <p>
                In Codeteam crediamo che lo sviluppo software sia un'arte artigianale supportata dall'ingegneria industriale. Non siamo semplici esecutori, ma partner strategici che si immergono nel tuo dominio di business.
                Il nostro approccio si basa sulla trasparenza radicale e sulla collaborazione continua.
              </p>
              <p>
                Sempre al passo con i tempi: il nostro must.
              </p>
              <p>
                Dedichiamo parte del nostro tempo ad investire sulle nuove tecnologie, per capire come esse possano adattarsi ai processi industriali, a come possano essere integrate in azienda e semplificare i flussi di lavoro. Da questa ricerca continua traiamo la nostra forza. Nuovi strumenti di sviluppo, nuovi standard, nuove fruizioni dei contenuti ed esigenze di mobilità sempre più spinte. Noi ci siamo.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="flex items-start p-6 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl hover:border-brand-500/30 transition-colors group"
              >
                <div className={`flex-shrink-0 p-3 rounded-lg ${value.bg} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;