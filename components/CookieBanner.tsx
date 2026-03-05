import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, Settings, ChevronRight, Check } from 'lucide-react';

interface CookieSettings {
    necessary: boolean;
    analytical: boolean;
    marketing: boolean;
}

interface CookieBannerProps {
    onOpenPolicy: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPolicy }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState<CookieSettings>({
        necessary: true,
        analytical: false,
        marketing: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Delay visibility for a nice entrance effect
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const saveConsent = (newSettings: CookieSettings) => {
        localStorage.setItem('cookie-consent', JSON.stringify(newSettings));
        setIsVisible(false);
        // Here you would typically initialize analytics if analytical is true
    };

    const handleAcceptAll = () => {
        const allAccepted = { necessary: true, analytical: true, marketing: true };
        setSettings(allAccepted);
        saveConsent(allAccepted);
    };

    const handleRejectAll = () => {
        const allRejected = { necessary: true, analytical: false, marketing: false };
        setSettings(allRejected);
        saveConsent(allRejected);
    };

    const handleSavePreferences = () => {
        saveConsent(settings);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-6 text-white overflow-hidden relative">
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[50px] -z-10 rounded-full"></div>

                {!showSettings ? (
                    <div className="space-y-5">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-brand-500/20 rounded-lg">
                                    <Cookie className="w-5 h-5 text-brand-500" />
                                </div>
                                <h3 className="font-bold text-lg">Informativa Cookie</h3>
                            </div>
                            <button
                                onClick={handleRejectAll}
                                className="text-slate-400 hover:text-white transition-colors p-1"
                                aria-label="Chiudi"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed">
                            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito, analizzare il traffico e personalizzare i contenuti.
                            Puoi accettare tutti i cookie o gestire le tue preferenze.
                            Leggi la nostra <button onClick={onOpenPolicy} className="text-brand-500 hover:underline">Cookie Policy</button> per maggiori dettagli.
                        </p>

                        <div className="grid grid-cols-1 gap-2">
                            <button
                                onClick={handleAcceptAll}
                                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-xl transition-all shadow-lg shadow-brand-500/20"
                            >
                                Accetta Tutti
                            </button>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 rounded-xl transition-colors border border-slate-700"
                                >
                                    <Settings className="w-4 h-4 mr-2" />
                                    Personalizza
                                </button>
                                <button
                                    onClick={handleRejectAll}
                                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 rounded-xl transition-colors border border-slate-700"
                                >
                                    Solo Necessari
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="p-1.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                                aria-label="Indietro"
                            >
                                <ChevronRight className="w-4 h-4 rotate-180" />
                            </button>
                            <h3 className="font-bold text-lg">Personalizza Cookie</h3>
                        </div>

                        <div className="space-y-3">
                            {/* Necessary */}
                            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center">
                                        <Shield className="w-4 h-4 text-brand-500 mr-2" />
                                        <span className="font-semibold text-sm">Necessari</span>
                                    </div>
                                    <p className="text-[11px] text-slate-400 mt-1">Essenziali per il funzionamento</p>
                                </div>
                                <div className="w-10 h-5 bg-brand-500/20 rounded-full flex items-center justify-end px-1 border border-brand-500/30 opacity-50 cursor-not-allowed">
                                    <div className="w-3 h-3 bg-brand-500 rounded-full shadow-lg shadow-brand-500/50"></div>
                                </div>
                            </div>

                            {/* Analytical */}
                            <div
                                className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-center justify-between ${settings.analytical ? 'bg-slate-800 border-brand-500/50' : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                                    }`}
                                onClick={() => setSettings({ ...settings, analytical: !settings.analytical })}
                            >
                                <div>
                                    <span className="font-semibold text-sm">Analitici</span>
                                    <p className="text-[11px] text-slate-400 mt-1">Statistiche anonime di traffico</p>
                                </div>
                                <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${settings.analytical ? 'bg-brand-500' : 'bg-slate-700'
                                    }`}>
                                    <div className={`w-3 h-3 bg-white rounded-full transition-all shadow-md ${settings.analytical ? 'translate-x-5' : 'translate-x-0'
                                        }`}></div>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div
                                className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-center justify-between ${settings.marketing ? 'bg-slate-800 border-brand-500/50' : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                                    }`}
                                onClick={() => setSettings({ ...settings, marketing: !settings.marketing })}
                            >
                                <div>
                                    <span className="font-semibold text-sm">Marketing</span>
                                    <p className="text-[11px] text-slate-400 mt-1">Contenuti personalizzati</p>
                                </div>
                                <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${settings.marketing ? 'bg-brand-500' : 'bg-slate-700'
                                    }`}>
                                    <div className={`w-3 h-3 bg-white rounded-full transition-all shadow-md ${settings.marketing ? 'translate-x-5' : 'translate-x-0'
                                        }`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button
                                onClick={handleSavePreferences}
                                className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-brand-500/20"
                            >
                                <Check className="w-4 h-4 mr-2" />
                                Salva Scelte
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieBanner;
