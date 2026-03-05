import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Cpu, Zap, Code2, Layers, BarChart3, ExternalLink } from 'lucide-react';
import CodeWatermark from './CodeWatermark';

interface GenerativeAIProps {
    onBack: () => void;
}

const features = [
    {
        icon: Brain,
        title: 'Agenti Intelligenti',
        description: 'Sviluppiamo agenti AI autonomi capaci di eseguire task complessi, integrare sistemi aziendali e automatizzare processi ripetitivi.',
    },
    {
        icon: Code2,
        title: 'Vibe Coding',
        description: "Con Antigravity e Claude Code entriamo in uno stato di flusso dove l'attenzione si sposta dal \"come\" al \"cosa\", lasciando all'AI l'implementazione tecnica.",
    },
    {
        icon: Zap,
        title: 'Sviluppo Rapido (RAD)',
        description: "L'unione di GeneXus Next e strumenti AI generativi ci permette di ridurre i tempi di sviluppo fino al 60% mantenendo alta qualità del codice.",
    },
    {
        icon: Layers,
        title: 'Integrazione con Sistemi Esistenti',
        description: 'Le soluzioni AI si integrano nativamente con ERP, CRM e sistemi legacy grazie ai nostri pattern di integrazione collaudati.',
    },
    {
        icon: Cpu,
        title: 'LLM & Modelli Custom',
        description: 'Valutiamo e implementiamo i modelli più adatti al contesto aziendale: da GPT-4 a Claude, da Gemini a modelli open-source on-premise.',
    },
    {
        icon: BarChart3,
        title: 'AI Analytics & BI',
        description: 'Potenziamo le soluzioni di Business Intelligence esistenti con layer AI per previsioni, anomaly detection e insight automatici.',
    },
];

const GenerativeAI: React.FC<GenerativeAIProps> = ({ onBack }) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen font-sans text-slate-200 overflow-x-hidden">
            <CodeWatermark />
            {/* Animated background blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-500/3 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Il Header è ora gestito globalmente in App.tsx */}

                <main className="pt-24 pb-32">


                    {/* Hero Section */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-12">
                        {/* Badge - centered at top of section */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 group cursor-default hover:bg-slate-900/60 hover:border-brand-500/30 transition-all duration-300">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse group-hover:scale-125 group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                                    AI Generativa
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>


                                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                                    Low-Code e{' '}
                                    <span className="italic text-brand-500">Vibe Coding</span>
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    Abbiamo integrato IDE Agentici come <strong className="text-white font-semibold">Antigravity e</strong> {' '}
                                    <strong className="text-white font-semibold">Claude Code</strong> nel nostro workflow di sviluppo, affiancandoli a{' '}
                                    <strong className="text-white font-semibold">GeneXus Next</strong>. Questo ci permette di operare in uno stato
                                    di flusso continuo, dove l'attenzione si sposta dal{' '}
                                    <em className="text-slate-300">"come scrivere il codice"</em> al{' '}
                                    <em className="text-brand-400">"cosa vogliamo realizzare"</em>.
                                </p>

                            </div>

                            {/* Right visual: AI Agents Image */}
                            <div className="relative group max-w-md mx-auto lg:ml-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
                                    <img
                                        src="/ai-agents.png"
                                        alt="AI Agents Visualization"
                                        className="w-full h-auto transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out"
                                    />
                                    {/* Overlay for glass effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats bar */}
                    <section className="bg-slate-900/60 border-y border-slate-800 py-10 mb-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                {[
                                    { value: '60%', label: 'Riduzione tempi di sviluppo' },
                                    { value: '3×', label: 'Velocità di prototipazione' },
                                    { value: '0', label: 'Interruzioni al workflow' },
                                    { value: '∞', label: 'Scalabilità delle soluzioni' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-black text-brand-500 mb-1">{stat.value}</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                        <div className="text-center mb-14">
                            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase mb-2">Capacità</h2>
                            <p className="text-3xl font-bold text-white">Cosa portiamo al tuo progetto</p>
                            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                                L'AI generativa non è un gadget — è un moltiplicatore di forza per ogni fase del ciclo di sviluppo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f) => (
                                <div
                                    key={f.title}
                                    className="group relative bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
                                >
                                    {/* Animated background glow inside the card */}
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                                    <div className="relative">
                                        <span className="inline-flex items-center justify-center p-3 bg-slate-800 text-brand-500 rounded-xl mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 ring-1 ring-white/5">
                                            <f.icon className="h-6 w-6" aria-hidden="true" />
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-500 transition-colors">{f.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Banner */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-10 overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                                <div className="lg:col-span-2">
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Vuoi portare l'AI nel tuo{' '}
                                        <span className="italic text-brand-500">flusso di sviluppo</span>?
                                    </h2>
                                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                        Possiamo aiutarti a costruire agenti intelligenti, automatizzare processi aziendali e
                                        integrare strumenti AI nel tuo stack tecnologico attuale.{' '}
                                        <strong className="text-white">Senza rivoluzionare ciò che già funziona.</strong>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 lg:items-end">
                                    <a
                                        href="https://cal.com/stefano-pescini75"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-500/30"
                                    >
                                        Prenota una call
                                        <ExternalLink className="w-4 h-4" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default GenerativeAI;
