import React, { useEffect } from 'react';
import { FileText, Scale, AlertCircle, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-24 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Back to Home Button */}
        <div className="flex justify-center mb-8">
            <button 
                onClick={onBack}
                className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur text-white hover:bg-brand-600 transition-colors border border-slate-700 hover:border-brand-500 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Torna alla Home
            </button>
        </div>

        <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          <div className="border-b border-slate-800 pb-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
               <FileText className="w-8 h-8 text-brand-500" />
               <span className="text-brand-500 font-mono uppercase tracking-wider text-sm">Documentazione Legale</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Termini e Condizioni</h1>
            <p className="text-slate-400">
              Condizioni generali di utilizzo del sito web CodeTeam
            </p>
          </div>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                1. Premessa e Accettazione
              </h2>
              <p>
                Il presente sito web è di proprietà di <strong>CodeTeam S.r.l.</strong>, con sede legale in Via Iseo, 6, 25030 Villa Pedergnano (BS).<br/>
                L'accesso e l'utilizzo di questo sito web implicano l'accettazione piena e senza riserve dei presenti Termini e Condizioni. Qualora l'utente non dovesse concordare, in tutto o in parte, con le presenti condizioni, è pregato di non utilizzare il sito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                2. Modifiche ai Termini
              </h2>
              <p>
                CodeTeam si riserva il diritto di modificare, aggiornare o integrare i presenti Termini e Condizioni in qualsiasi momento e senza preavviso. L'utente è tenuto a verificare periodicamente questa pagina per prendere visione di eventuali cambiamenti. L'uso continuato del sito dopo la pubblicazione delle modifiche costituisce accettazione delle stesse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                3. Proprietà Intellettuale
              </h2>
              <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800 mb-4">
                <p className="text-sm">
                  Tutti i contenuti presenti sul sito (testi, immagini, loghi, grafica, layout, codice sorgente, software) sono di proprietà esclusiva di CodeTeam o dei rispettivi licenziatari e sono protetti dalle leggi italiane e internazionali sul diritto d'autore e sulla proprietà intellettuale.
                </p>
              </div>
              <p>
                È severamente vietata la riproduzione, distribuzione, modifica, o utilizzo non autorizzato di qualsiasi materiale presente sul sito senza il preventivo consenso scritto di CodeTeam.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                4. Utilizzo del Sito
              </h2>
              <p className="mb-2">L'utente si impegna a utilizzare il sito esclusivamente per scopi leciti e in modo da non:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                <li>Violare leggi o regolamenti vigenti.</li>
                <li>Compromettere la sicurezza del sito o tentare di accedere ad aree riservate senza autorizzazione.</li>
                <li>Utilizzare software automatizzati (bot, scraper) per estrarre dati senza consenso.</li>
                <li>Trasmettere virus, malware o altro codice dannoso.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                5. Limitazione di Responsabilità
              </h2>
              <div className="flex items-start gap-4 p-4 bg-slate-950/50 backdrop-blur-sm rounded-lg border border-slate-800">
                 <AlertCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                 <p className="text-sm">
                   Il sito viene fornito "così com'è" e "come disponibile". CodeTeam non garantisce che il sito sia privo di errori, interruzioni o virus. CodeTeam non potrà essere ritenuta responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il sito.
                 </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                6. Collegamenti a Terze Parti
              </h2>
              <p>
                Il sito potrebbe contenere link a siti web esterni gestiti da terze parti. CodeTeam non ha alcun controllo su tali siti e non si assume alcuna responsabilità per i contenuti, le policy o le pratiche di tali siti esterni. L'accesso a siti terzi avviene a rischio esclusivo dell'utente.
              </p>
            </section>

             <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                7. Privacy e Cookie
              </h2>
              <p>
                I dati personali dell'utente vengono trattati in conformità con la nostra Privacy Policy. L'utilizzo del sito implica il consenso al trattamento dei dati descritto in tale informativa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                8. Legge Applicabile e Foro Competente
              </h2>
              <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800 flex items-start gap-3">
                  <Scale className="w-5 h-5 text-brand-500 mt-1" />
                  <p>
                    I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia inerente l'interpretazione, validità o esecuzione dei presenti Termini, sarà competente in via esclusiva il <strong>Foro di Brescia</strong>.
                  </p>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-800 mt-8">
              <p className="text-sm text-slate-500">
                Ultimo aggiornamento: 23 Ottobre 2024
              </p>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;