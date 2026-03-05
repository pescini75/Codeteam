import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-24 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
              <Shield className="w-8 h-8 text-brand-500" />
              <span className="text-brand-500 font-mono uppercase tracking-wider text-sm">Documentazione Legale</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400">
              Informativa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR)
            </p>
          </div>

          <div className="space-y-8 text-slate-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                1. Titolare del Trattamento
              </h2>
              <p>
                Il Titolare del trattamento dei dati è <strong>CodeTeam S.r.l.</strong> (di seguito "il Titolare"), con sede legale in Via Iseo, 6, 25030 Villa Pedergnano (BS).<br />
                Per qualsiasi chiarimento, informazione o per l'esercizio dei diritti elencati nella presente informativa, è possibile contattare il Titolare al seguente indirizzo email: <a href="mailto:info@codeteam.it" className="text-brand-500 hover:underline">info@codeteam.it</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                2. Tipologie di Dati raccolti
              </h2>
              <p className="mb-2">Durante la navigazione su questo sito web, possono essere raccolti i seguenti dati:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                <li>
                  <strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, orari delle richieste, metodo utilizzato nel sottoporre la richiesta al server).
                </li>
                <li>
                  <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito o la compilazione di form di contatto comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                3. Finalità del Trattamento
              </h2>
              <p className="mb-2">I dati raccolti sono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                <li>Permettere la navigazione e la consultazione del sito web CodeTeam.</li>
                <li>Rispondere a richieste di assistenza, supporto o informazioni commerciali inviate tramite il modulo di contatto.</li>
                <li>Adempiere a obblighi previsti dalla legge, da un regolamento, dalla normativa comunitaria o da un ordine dell’Autorità.</li>
                <li>Statistica anonima sull'uso del sito per controllarne il corretto funzionamento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                4. Base Giuridica
              </h2>
              <p>
                Il trattamento dei dati personali si fonda sulle seguenti basi giuridiche:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-brand-500">
                <li>L'esecuzione di misure precontrattuali o contrattuali (es. risposta a richieste di contatto).</li>
                <li>Il legittimo interesse del Titolare (es. sicurezza del sito).</li>
                <li>Il consenso dell'interessato (ove esplicitamente richiesto).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                5. Modalità di Trattamento e Sicurezza
              </h2>
              <div className="flex items-start gap-4 p-4 bg-slate-950/50 backdrop-blur-sm rounded-lg border border-slate-800">
                <Lock className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                6. Luogo di Trattamento
              </h2>
              <p>
                I dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. I dati non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE) salvo che non sussistano garanzie adeguate (es. clausole contrattuali standard).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                7. Periodo di Conservazione
              </h2>
              <p>
                I dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. I dati personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                8. Diritti dell'Interessato
              </h2>
              <p className="mb-4">
                Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                  <strong className="text-white block mb-1">Accesso e Rettifica</strong>
                  Chiedere la conferma dell'esistenza dei dati e ottenerne la rettifica se inesatti.
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                  <strong className="text-white block mb-1">Cancellazione (Oblio)</strong>
                  Chiedere la cancellazione dei dati qualora non più necessari o in caso di revoca del consenso.
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                  <strong className="text-white block mb-1">Limitazione</strong>
                  Chiedere la limitazione del trattamento in determinate circostanze.
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                  <strong className="text-white block mb-1">Portabilità</strong>
                  Ricevere i propri dati in un formato strutturato e leggibile da dispositivo automatico.
                </div>
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

export default PrivacyPolicy;