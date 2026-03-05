import React, { useEffect } from 'react';
import { Search, Zap, Shield, Gauge } from 'lucide-react';
import CodeWatermark from './CodeWatermark';

interface SviluppoFullstackProps {
    onBack: () => void;
}

const SviluppoFullstack: React.FC<SviluppoFullstackProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const methods = [
        { title: "Analisi strutturata dei requisiti", description: "Modellazione chiara e condivisa per una base solida.", icon: Search },
        { title: "Sviluppo iterativo", description: "Rilasci rapidi e progressivi per un feedback costante.", icon: Zap },
        { title: "Standardizzazione best practice", description: "Garanzia di manutenibilità e qualità nel tempo.", icon: Shield },
        { title: "Ottimizzazione performance", description: "Efficienza massima lato applicativo e infrastrutturale.", icon: Gauge }
    ];

    const showcaseItems = [
        {
            src: "/showcase/erp-grid.png",
            alt: "Piattaforma ERP - Gestione Clienti",
            label: "ERP",
            title: "Piattaforme Gestionali Complesse",
            description: "Interfacce ottimizzate per il data management massivo e l'automazione dei processi aziendali.",
            type: "desktop",
            gradient: "from-brand-500 to-orange-600",
        },
        {
            src: "/showcase/erp-details.png",
            alt: "ERP - Scheda Dettaglio Cliente",
            label: "CRM",
            title: "User Experience Analitica",
            description: "Moduli personalizzati con integrazione di mappe e flussi di dati in tempo reale.",
            type: "desktop",
            gradient: "from-purple-500 to-brand-500",
        },
        {
            src: "/showcase/app-login.png",
            alt: "App Mobile ComunUp - Login",
            label: "Mobile",
            title: "App Mobile – Accesso Sicuro",
            description: "Esperienza di login fluida e moderna con design nativo per iOS e Android.",
            type: "mobile",
            gradient: "from-brand-500 to-rose-500",
        },
        {
            src: "/showcase/app-home.png",
            alt: "App Mobile – Home Comune",
            label: "Mobile",
            title: "App Mobile – Portale Comunale",
            description: "Navigazione intuitiva tra servizi, gallerie e informazioni istituzionali.",
            type: "mobile",
            gradient: "from-purple-600 to-brand-500",
        },
    ];

    return (
        <div className="relative min-h-screen font-sans text-slate-200 overflow-x-hidden">
            <CodeWatermark />

            {/* Animated background blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
                <main className="pt-24 pb-32">
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 mt-12">

                        {/* Badge - centered at top of section */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 group cursor-default hover:bg-slate-900/60 hover:border-brand-500/30 transition-all duration-300">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse group-hover:scale-125 group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                                    Sviluppo Software
                                </span>
                            </div>
                        </div>

                        {/* Header Area */}
                        <div className="mb-20 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                                Sviluppo <span className="text-brand-500">Fullstack</span>
                            </h1>

                            <div className="flex justify-center">
                                <p className="text-2xl md:text-3xl font-medium text-slate-300 leading-snug mb-12 italic border-l-4 border-brand-500 pl-6 max-w-3xl">
                                    "Il nostro approccio con GeneXus e WorkWithPlus"
                                </p>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                            <div className="space-y-8 text-xl text-slate-400 leading-relaxed">
                                <p>
                                    Lavoriamo con <strong className="text-white font-semibold">GeneXus</strong> adottando un approccio <strong className="text-white font-semibold">model-driven</strong> che ci consente di progettare soluzioni robuste, scalabili e facilmente evolvibili nel tempo. La centralità del modello ci permette di mantenere coerenza architetturale, ridurre il debito tecnico e garantire continuità tecnologica anche in progetti complessi e di lunga durata.
                                </p>
                            </div>
                            <div className="space-y-8 text-xl text-slate-400 leading-relaxed">
                                <p>
                                    Integriamo <strong className="text-white font-semibold">WorkWithPlus</strong> per potenziare ulteriormente produttività, qualità dell'interfaccia utente e standardizzazione dello sviluppo. Grazie ai suoi pattern avanzati, acceleriamo la realizzazione di componenti CRUD, dashboard, sicurezza applicativa e funzionalità enterprise-ready, mantenendo al contempo elevati livelli di personalizzazione.
                                </p>
                            </div>
                        </div>

                        {/* Method Section */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-bold text-white mb-10 text-center">Il nostro metodo di lavoro si basa su:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {methods.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
                                    >
                                        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ===================== SHOWCASE IMAGES ===================== */}
                        <div className="relative mt-8 mb-16">
                            {/* Section intro */}
                            <div className="text-center mb-14">
                                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">I nostri lavori</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Soluzioni <span className="text-brand-500">Enterprise</span> &amp; <span className="text-brand-500">Mobile</span>
                                </h2>
                                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                    Dalle architetture gestionali complesse alle app mobile di nuova generazione: ecco alcuni esempi del nostro ecosistema digitale.
                                </p>
                            </div>

                            {/* Desktop screenshots — full width with stagger */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {showcaseItems.filter(i => i.type === "desktop").map((item, idx) => (
                                    <div key={idx} className="group relative">
                                        {/* Glow halo */}
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700`} />

                                        {/* Card */}
                                        <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
                                            {/* Top bar chrome */}
                                            <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                                                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                                                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                                <div className="ml-4 flex-1 h-5 bg-slate-700 rounded-full max-w-xs" />
                                            </div>

                                            {/* Screenshot */}
                                            <div className="relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-auto block"
                                                />
                                            </div>

                                            {/* Caption */}
                                            <div className="p-6 bg-slate-900/90 backdrop-blur-md">
                                                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 bg-gradient-to-r ${item.gradient} text-white`}>
                                                    {item.label}
                                                </span>
                                                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                                                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile screenshots — phone mockup style */}
                            <div className="relative">
                                {/* Decorative connecting line */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-40" />
                                </div>

                                <div className="text-center mb-10">
                                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">App Mobile</span>
                                    <p className="text-slate-500 text-sm">Applicazioni native iOS &amp; Android</p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-10 items-end">
                                    {showcaseItems.filter(i => i.type === "mobile").map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`group relative w-52 sm:w-60 ${idx === 0 ? 'transform -rotate-3 hover:rotate-0' : 'transform rotate-3 hover:rotate-0'} transition-all duration-700`}
                                            style={{ marginTop: idx === 1 ? '-3rem' : '0' }}
                                        >
                                            {/* Glow */}
                                            <div className={`absolute -inset-3 bg-gradient-to-b ${item.gradient} rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700`} />

                                            {/* Phone frame */}
                                            <div className="relative rounded-[2.8rem] border-[5px] border-slate-700 group-hover:border-slate-500 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 bg-black">
                                                {/* Notch */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-auto block"
                                                />
                                                {/* Home indicator */}
                                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-400/40 rounded-full z-10" />
                                            </div>

                                            {/* Label below phone */}
                                            <div className="mt-5 text-center">
                                                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 bg-gradient-to-r ${item.gradient} text-white`}>
                                                    {item.label}
                                                </span>
                                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                                <p className="text-xs text-slate-500 mt-1 leading-snug px-2">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* =============================================================== */}

                        {/* CTA Footer */}
                        <div className="mt-24 p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-4xl mx-auto">
                                L'obiettivo non è solo sviluppare software, ma costruire piattaforme digitali solide, performanti e pronte a crescere insieme al business del cliente.
                            </h2>
                            <div className="mt-10">
                                <button
                                    onClick={() => window.location.href = '/#contact'}
                                    className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-600/20"
                                >
                                    Inizia un progetto con noi
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default SviluppoFullstack;
