import React from 'react';
import { Layers, Code2, LineChart, Database, Globe, Terminal } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Sviluppo software sartoriali",
    description: <>Realizzazione di ecosistemi digitali <strong className="font-black text-white">custom</strong>, applicazioni web e mobile progettate sartorialmente per rispondere a specifiche esigenze operative.</>,
    icon: Code2
  },
  {
    id: 2,
    title: "Integrazione di sistemi",
    description: <>Orchestrazione di sistemi eterogenei <strong className="font-black text-white">(ERP, CRM, Legacy)</strong> per garantire un flusso di dati unificato e automatizzare le operazioni aziendali complesse.</>,
    icon: Layers
  },
  {
    id: 3,
    title: "Analisi e consulenza",
    description: <><strong className="font-black text-white">Analisi approfondita</strong> dei flussi di lavoro e consulenza strategica per individuare le tecnologie più adatte a ottimizzare i processi e scalare il tuo business.</>,
    icon: LineChart
  },
  {
    id: 4,
    title: "Linguaggi di programmazione",
    description: <>Padronanza di stack tecnologici versatili tra cui Java, .NET, C#, Angular e sviluppo di logiche business ed API complesse e performanti. Utilizzo del <strong className="font-black text-white">RAD Genexus</strong> per uno sviluppo software rapido, scalabile e custom.</>,
    icon: Terminal
  },
  {
    id: 5,
    title: "Database relazionali",
    description: <>Progettazione e gestione di <strong className="font-black text-white">architetture dati robuste</strong> su Microsoft SQL Server, MySQL, Oracle e PostgreSQL per garantire integrità e velocità di accesso.</>,
    icon: Database
  },
  {
    id: 6,
    title: "Tecnologie web",
    description: <>Realizzazione di interfacce moderne, accessibili e responsive utilizzando gli standard più recenti: HTML5, CSS3, frontend frameworks come Bootstrap, Foundation e Sass ed integrazione con standard quali: <strong className="font-black text-white">JSON / XML / API Rest / SOAP</strong></>,
    icon: Globe
  }
];

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Cosa Facciamo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Servizi di Sviluppo Software Custom
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Offriamo un ecosistema mirato di servizi per supportare la crescita digitale della tua azienda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
            >
              {/* Animated background glow inside the card */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>

              <div className="relative">
                <span className="inline-flex items-center justify-center p-3 bg-slate-800 text-brand-500 rounded-xl mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 ring-1 ring-white/5">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;