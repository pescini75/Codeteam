import React, { useEffect } from 'react';
import { ArrowLeft, Cookie, ShieldCheck, Settings, Info } from 'lucide-react';

interface CookiePolicyProps {
    onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
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
                            <Cookie className="w-8 h-8 text-brand-500" />
                            <span className="text-brand-500 font-mono uppercase tracking-wider text-sm">Documentazione Legale</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
                        <p className="text-slate-400">
                            Informativa sull'utilizzo dei cookie ai sensi della normativa vigente.
                        </p>
                    </div>

                    <div className="space-y-8 text-slate-300 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                <Info className="w-5 h-5 mr-2 text-brand-500" />
                                1. Cosa sono i Cookie
                            </h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie delle c.d. "terze parti" vengono, invece, impostati da un sito web diverso da quello che l'utente sta visitando. Questo perché su ogni sito possono essere presenti elementi (immagini, mappe, suoni, specifici link a pagine web di altri domini, ecc.) che risiedono su server diversi da quello del sito visitato.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                <ShieldCheck className="w-5 h-5 mr-2 text-brand-500" />
                                2. Tipologie di Cookie utilizzati
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                                    <h3 className="text-white font-bold mb-2">Cookie Tecnici (Necessari)</h3>
                                    <p className="text-sm">
                                        Sono cookie che servono a effettuare la navigazione o a fornire un servizio richiesto dall'utente. Non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare del sito web. Senza il ricorso a tali cookie, alcune operazioni non potrebbero essere compiute o sarebbero più complesse e/o meno sicure.
                                    </p>
                                </div>

                                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                                    <h3 className="text-white font-bold mb-2">Cookie Analitici</h3>
                                    <p className="text-sm">
                                        Utilizzati per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso. I dati vengono utilizzati esclusivamente per scopi statistici anonimi per migliorare le prestazioni del sito.
                                    </p>
                                </div>

                                <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-lg border border-slate-800">
                                    <h3 className="text-white font-bold mb-2">Cookie di Profilazione e Terze Parti</h3>
                                    <p className="text-sm">
                                        Questi cookie sono volti a creare profili relativi all'utente e vengono utilizzati al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dallo stesso nell'ambito della navigazione in rete.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                <Settings className="w-5 h-5 mr-2 text-brand-500" />
                                3. Gestione delle preferenze
                            </h2>
                            <p>
                                L'utente può gestire le proprie preferenze relative ai cookie direttamente all'interno della finestra di consenso (Banner) che compare al primo accesso al sito, oppure attraverso le impostazioni del proprio browser. È possibile bloccare o eliminare i cookie già memorizzati sul proprio dispositivo.
                            </p>
                            <p className="mt-2 italic text-sm">
                                Nota: il blocco dei cookie tecnici potrebbe compromettere la corretta visualizzazione o il funzionamento di alcune parti del sito.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3">
                                4. Titolare del Trattamento
                            </h2>
                            <p>
                                Il Titolare del trattamento è <strong>CodeTeam S.r.l.</strong>, con sede legale in Via Iseo, 6, 25030 Villa Pedergnano (BS). Per qualunque richiesta è possibile scrivere a <a href="mailto:info@codeteam.it" className="text-brand-500 hover:underline">info@codeteam.it</a>.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-800 mt-8">
                            <p className="text-sm text-slate-500">
                                Ultimo aggiornamento: 25 Febbraio 2026
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;
