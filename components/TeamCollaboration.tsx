import React, { useEffect } from 'react';
import { Users2, Rocket, Shield, Target, CheckCircle2, ArrowLeft } from 'lucide-react';
import CodeWatermark from './CodeWatermark';

interface TeamCollaborationProps {
    onBack: () => void;
}

const TeamCollaboration: React.FC<TeamCollaborationProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const strengths = [
        { title: "Rapidità di esecuzione", icon: Rocket },
        { title: "Competenze tecnologiche aggiornate", icon: Users2 },
        { title: "Esperienza consolidata", icon: Shield },
        { title: "Approccio orientato al risultato", icon: Target }
    ];

    return (
        <div className="relative min-h-screen font-sans text-slate-200 overflow-x-hidden">
            <CodeWatermark />

            {/* Animated background blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
                <main className="pt-24 pb-32">
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-12">
                        {/* Badge - centered at top of section */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 group cursor-default hover:bg-slate-900/60 hover:border-brand-500/30 transition-all duration-300">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse group-hover:scale-125 group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                                    Punti di Forza
                                </span>
                            </div>
                        </div>

                        {/* Header Area */}
                        <div className="mb-20 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                                Team <span className="text-brand-500">Collaboration</span>
                            </h1>

                            <div className="flex justify-center">
                                <p className="text-2xl md:text-3xl font-medium text-slate-300 leading-snug mb-12 italic border-l-4 border-brand-500 pl-6 max-w-3xl">
                                    "Innovazione veloce. Esperienza solida. Risultati concreti."
                                </p>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                            <div className="space-y-8 text-xl text-slate-400 leading-relaxed">
                                <p>
                                    Siamo un team giovane e altamente specializzato che unisce l’energia delle nuove tecnologie a
                                    oltre <strong className="text-white">25 anni di esperienza</strong> maturata sul campo. Questo ci permette di offrire soluzioni
                                    moderne senza mai perdere di vista affidabilità, qualità e sostenibilità nel lungo periodo.
                                </p>
                                <p>
                                    Utilizziamo piattaforme evolute come <strong className="text-white">GeneXus</strong> per accelerare lo sviluppo e ridurre il
                                    time-to-market, integrando strumenti di <strong className="text-white">AI generativa</strong> per ottimizzare analisi,
                                    progettazione e automazione dei processi. Il risultato? Progetti più rapidi, più efficienti e con un ROI misurabile.
                                </p>
                            </div>
                            <div className="space-y-8 text-xl text-slate-400 leading-relaxed">
                                <p>
                                    La nostra collaborazione non è solo interna al team: lavoriamo fianco a fianco con i clienti,
                                    trasformando esigenze complesse in soluzioni scalabili e performanti. Studiamo costantemente
                                    nuovi metodi, nuove architetture e nuove tecnologie per garantire un vantaggio competitivo reale e duraturo.
                                </p>
                                <p className="text-white font-semibold">
                                    Per noi innovazione e affidabilità non sono alternative: sono la base del nostro valore.
                                </p>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {strengths.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
                                >
                                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* CTA Footer */}
                        <div className="mt-24 p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                            <h2 className="text-3xl font-bold text-white mb-6">Pronti a collaborare?</h2>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                                Sceglierci significa avere un partner che combina visione e pragmatismo per ogni sfida digitale.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = '/#contact'}
                                    className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-600/20"
                                >
                                    Inizia un progetto con noi
                                </button>
                                <button
                                    onClick={() => window.location.href = '/#team'}
                                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700 hover:border-brand-500 shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Users2 className="w-5 h-5" />
                                    Il team dietro ai progetti
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default TeamCollaboration;
