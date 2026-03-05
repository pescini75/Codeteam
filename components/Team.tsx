import React, { useState, useEffect } from 'react';
import { TeamMember } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const teamMembers: TeamMember[] = [
  {
    id: 5,
    name: "Stefano Pescini",
    role: "Codeteam Co-founder, Analyst / Web Developer",
    imageUrl: "https://www.codeteam.it/wp-content/uploads/2014/05/Stefano-270x270.png",
    description: `Cofondatore del progetto Codeteam. Analista e sviluppatore web si occupa principalmente di sviluppo di web e mobile applications gestionali, siti web e portali utilizzando differenti strumenti. Vanta profonda esperienza nell’uso del tool di sviluppo Genexus, nell’uso del linguaggio .Net e Visual studio, Java su Eclipse, soluzioni CMS come Wodpress e Magento e conosce approfonditamente i maggiori database relazionali presenti sul mercato: Microsoft SQL server, MySql, Oracle e PostgresSQL. La sua filosofia è che un ottimo programma web parta dall’integrazione perfetta delle due componenti principali: potenti logiche lato server e potenza nelle interfacce lato client. Linguaggi lato server, User Experience, Web usability, Peformances e Sicurezza devono combaciare perfettamente. Ha approfondita conoscenza di C, C++, C#, Java, HTML 5 e Css3, e tecnologie quali Ajax e Jquery. Si occupa anche di ricerca e sviluppo per Codeteam cercando sempre soluzioni innovative nell’ambito del web in una ottica di integrazione aziendale , integrazione dei sistemi, innovazione orientata all’uso massiccio del web , del cloud computing, e all’uso di soluzioni mobile per le quali sfrutta da tempo anche gli SDK nativi: Android SDK e iOS SDK.

Vanta un’ottima conoscenza del Tool di sviluppo Genexus per il quale ha svolto per 14 anni anche l'attività di formazione alle aziende per conto del distributore nazionale del tool di sviluppo. Considera Genexus il tool di punta del progetto Codeteam per le enorme potenzialità fornite.

La sua filosofia è: “Innovare, evolvere e scegliere sempre soluzioni nuove da proporre. Nel mondo dell’informatica, l’altro ieri è ormai preistoria.”`,
    linkedinUrl: "https://www.linkedin.com/in/stefano-pescini-24687217b",
    email: "stefano.pescini@codeteam.it",
    phoneNumber: "+39 3389865373"
  },
  {
    id: 1,
    name: "Annamaria Frugoni",
    role: "Codeteam Co-founder, Analyst / Developer",
    imageUrl: "http://www.codeteam.it/wp-content/uploads/2014/05/Unknown-1.jpeg",
    description: `Cofondatrice del progetto Codeteam. Laureata in Matematica, analista e sviluppatrice, ha esperienza ventennale sui software gestionali. Si occupa principalmente di analisi e gestione dei progetti e sviluppo software. Le sue conoscenze ed esperienza sono vaste e vanno principalmente dallo sviluppo su piattaforma As400, ai linguaggi Java e .Net, all’ utilizzo dei database relazionali Db2400, Microsoft SQL Server, MySQL. Ha notevole esperienza sia in ambiente Win che Web, nello sviluppo e gestione di soluzioni ERP, Gestione Magazzino anche attraverso soluzioni che fanno largo uso di strumenti mobili, Project management e nello sviluppo e fruizione dei web services e delle logiche di fornitura ed integrazione dati con gli odierni standard (JSON,XML,servizi rest, web services). Si occupa anche di sviluppo web affiancando parte del nostro team e vantando esperienza nella realizzazione di software E-commerce e software web integrati perfettamente con i gestionali aziendali.

Annamaria ha profonda esperienza nell’utilizzo del Tool di sviluppo Genexus, tool di punta di Codeteam e con il quale nel corso degli anni ha avuto modo di sviluppare e collaborare con altre software house per l’integrazione dei sistemi e l’affiancamento allo sviluppo. Esperta nell’utilizzo del CMS Gxportal per la realizzazione di portali web.

La sua filosofia è : “La qualità del software che produci impatta sulla gestione completa di una azienda. Software avanzato, azienda avanzata.”`,
    linkedinUrl: "https://www.linkedin.com/in/annamaria-frugoni-a9bb095a/",
    email: "annamaria.frugoni@codeteam.it",
    phoneNumber: "+39 335 8436829"
  },
  {
    id: 2,
    name: "Michela Bonesi",
    role: "Codeteam Co-founder, BI Analyst",
    imageUrl: "http://www.codeteam.it/wp-content/uploads/2014/05/BMphoto.jpg",
    description: `Cofondatrice del progetto Codeteam. Laurea in Matematica indirizzo applicativo , analista e sviluppatrice, si occupa con vasta esperienza di analisi e di gestione dei progetti e sviluppo software gestionali. Specializzata nell’analisi dati e nell’analisi funzionale vanta notevole esperienza nell’uso del linguaggio Java e su piattaforma As400 nativa e non, sviluppo win (interfacce GUI), sviluppo procedurale e logiche business. Si occupa anche di Business intelligence e sviluppo soluzioni datawarehousing / olap e query per la presa di decisioni strategiche aziendali.(Cruscotti analitici, integrazione con Servizi di Google, reportistica.)

Nel corso degli anni ha analizzato e sviluppato differenti tipi di software: ERP, Gestione Magazzino, contabilità occupandosi della gestione di grandi progetti e coordinamento di team di lavoro. Michela vanta ottima esperienza nell’utilizzo del tool di sviluppo Genexus , strumento di sviluppo di punta di Codeteam, e nell’utilizzo di strumenti quali Gxplorer / Gxquery che utilizza per la realizzazione di soluzioni di analisi statistica gestionale e business intelligence.

La sua filosofia è: “Da un’ottima analisi discendono sempre i software migliori.” E’ la nostra migliore analista.`,
    linkedinUrl: "https://www.linkedin.com/in/michela-bonesi-a9ab3038/",
    email: "michela.bonesi@codeteam.it",
    phoneNumber: "+39 3428781288"
  },
  {
    id: 3,
    name: "Roberto Morandi",
    role: "Web / Mobile Developer",
    imageUrl: "http://www.codeteam.it/wp-content/uploads/2025/11/IMG-20250617-WA0003-270x270.jpg",
    description: `Roberto è uno dei componenti del team di Sviluppo interno Codeteam. Ha una conoscenza approfondita dello sviluppo web in HMTL 5, Javascript, CSS e collabora con il team Design per la realizzazione delle applicazioni Web e Mobile, soprattutto nell’ambito delle app mobile con Android OS. Negli ultimi anni si è specializzato nell’uso dei servizi REST e del collegamento con le più svariate API, per i collegamenti con DB e servizi remoti. Da tempo si dedica allo studio e all’implementazione nei progetti web di grafica avanzata e standard grazie all’uso dei Front end frameworks presenti sul mercato in particolar modo: Bootstrap, Foundation, Sass.`,
    linkedinUrl: "https://www.linkedin.com/in/roberto-morandi-82a693217/",
    email: "roberto.morandi@codeteam.it",
    phoneNumber: "+39 3484547522"
  },
  {
    id: 4,
    name: "Alberto Campana",
    role: "Web Developer / Designer",
    imageUrl: "http://www.codeteam.it/wp-content/uploads/2014/05/Campana-270x270.jpg",
    description: `Ingegnere delle Telecomunicazioni, Alberto è sviluppatore software con profonda conoscenza in ambito web: vanta esperienza nella programmazione in Php, C, C++, C#, nel web design e nell’uso di standard quali HTML 5 e CSS3 e si occupa da svariati anni dell’analisi, sviluppo di siti web e grandi portali sia di presentazione aziendale sia principalmente rivolti alle soluzioni e-commerce per piccole e medie aziende. Ha profonda esperienza nell’uso di CMS come WordPress e Magento, conosce approfonditamente le logiche di manipolazione lato client: Ajax, Javascript, JQuery, Protoyope. Ha esperienza nell’uso di Microsoft Visual Studio, CTS Microwave studio, Wireshark, Angular JS, del framework Ionic e della piattaforma Apache Cordova e della Adobe Creative Suite.

Da tempo si dedica allo studio e all’implementazione nei progetti web di grafica avanzata e standard grazie all’uso dei Front end frameworks presenti sul mercato in particolar modo: Boostrap, Foundation, Sass.`
  }
];

interface TeamProps {
  onMemberClick: (member: TeamMember) => void;
}

const Team: React.FC<TeamProps> = ({ onMemberClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // If mobile/tablet (less than lg breakpoint 1024px), show all 5
      if (window.innerWidth < 1024) {
        setItemsPerPage(5);
        setCurrentPage(0); // Reset to first page when changing mode
      } else {
        // Desktop shows 4 per page
        setItemsPerPage(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleMembers = teamMembers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="team" className="py-24 relative bg-slate-900/50 overflow-hidden">
      {/* Decorative slant */}
      <div className="absolute inset-0 transform -skew-y-2 origin-top-left bg-slate-900/50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Il Team di Esperti</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Le menti dietro ai sistemi CodeTeam
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Clicca sui membri del team per scoprire di più sulla loro esperienza.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[500px]">

          {/* Navigation Buttons (Hidden if only 1 page) */}
          {totalPages > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-16 xl:-ml-20 z-20 p-3 rounded-full bg-slate-800/80 backdrop-blur text-white hover:bg-brand-500 hover:text-white transition-all shadow-xl border border-slate-700"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-16 xl:-mr-20 z-20 p-3 rounded-full bg-slate-800/80 backdrop-blur text-white hover:bg-brand-500 hover:text-white transition-all shadow-xl border border-slate-700"
                aria-label="Next page"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Grid Layout - Optimized responsiveness */}
          <div className="transition-all duration-500 ease-in-out">
            <div
              key={`${currentPage}-${itemsPerPage}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 animate-fade-in"
            >
              {visibleMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => onMemberClick(member)}
                  className="group flex flex-col items-center text-center cursor-pointer"
                >
                  {/* Image Section - Scaled for desktop visibility */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-60 lg:h-60 xl:w-72 xl:h-72 relative rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-brand-500 transition-all duration-500 shadow-2xl">
                      <img
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        src={member.imageUrl}
                        alt={member.name}
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-brand-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                      {member.role.split(',')[0]}
                    </p>
                    <div className="w-8 h-1 bg-brand-500/30 mx-auto rounded-full group-hover:w-16 group-hover:bg-brand-500 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots (Only if multiple pages) */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 space-x-3">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentPage === idx ? 'w-10 bg-brand-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                    }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Team;