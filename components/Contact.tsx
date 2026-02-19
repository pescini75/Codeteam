import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const emailTo = "info@codeteam.it";
    const emailSubject = encodeURIComponent(subject || "Richiesta contatto da CodeTeam Web");
    const emailBody = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
    );

    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="contact" className="pt-24 pb-0 relative bg-slate-950 overflow-hidden">
      {/* Animated Neural Hub Graphic - Decorative Background */}
      <div className="absolute top-1/4 left-0 -translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] pointer-events-none z-0 opacity-20 select-none hidden lg:block">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Dashed Ring - Slow Rotation */}
          <div className="absolute w-[80%] h-[80%] border border-dashed border-brand-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>

          {/* Middle Ring - Reverse Rotation */}
          <div className="absolute w-[60%] h-[60%] border border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]">
            {/* Orbiting Node on Middle Ring */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
          </div>

          {/* Inner Ring with variable width */}
          <div className="absolute w-[40%] h-[40%] border-2 border-slate-800 rounded-full animate-pulse"></div>

          {/* Core Pulse */}
          <div className="relative z-10 w-24 h-24 bg-brand-900/20 rounded-full backdrop-blur-sm flex items-center justify-center border border-brand-500/20 animate-pulse">
            <div className="w-8 h-8 bg-brand-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] animate-ping opacity-20 absolute"></div>
            <div className="w-6 h-6 bg-brand-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]">
            <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="rgba(249,115,22,0.1)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="10%" y2="80%" stroke="rgba(249,115,22,0.1)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(249,115,22,0.1)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info & Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Contattaci</h2>
              <h2 className="mt-2 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
                Parliamo del tuo prossimo progetto
              </h2>
              <p className="mt-4 text-xl text-slate-400 leading-relaxed">
                Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. Compila il form o contattaci direttamente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative inline-flex items-center justify-center h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 text-brand-500 group-hover:border-brand-500/50 transition-colors">
                    <Mail className="h-6 w-6" />
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-white">Email</p>
                  <a href="mailto:info@codeteam.it" className="mt-1 text-slate-400 hover:text-brand-500 transition-colors block">info@codeteam.it</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative inline-flex items-center justify-center h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 text-brand-500 group-hover:border-brand-500/50 transition-colors">
                    <Phone className="h-6 w-6" />
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-white">Telefono</p>
                  <div className="mt-1 text-slate-400 flex flex-col gap-1">
                    <a href="tel:+393358436829" className="hover:text-brand-500 transition-colors">Annamaria Frugoni: +39 335 843 6829</a>
                    <a href="tel:+393428781288" className="hover:text-brand-500 transition-colors">Michela Bonesi: +39 342 878 1288</a>
                    <a href="tel:+393389865373" className="hover:text-brand-500 transition-colors">Stefano Pescini: +39 338 986 5373</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative inline-flex items-center justify-center h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 text-brand-500 group-hover:border-brand-500/50 transition-colors">
                    <MapPin className="h-6 w-6" />
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-white">Sede</p>
                  <p className="mt-1 text-slate-400">Via Iseo, 6<br />25030 Villa Pedergnano (BS)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-800 relative overflow-hidden group">
            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Subtle Scanning Line Animation across the form */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-lg bg-slate-950 border border-slate-700 text-white px-4 py-3 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none focus:bg-slate-900 transition-all placeholder-slate-600 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-lg bg-slate-950 border border-slate-700 text-white px-4 py-3 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none focus:bg-slate-900 transition-all placeholder-slate-600 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                    placeholder="mario@esempio.it"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                  Oggetto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-2 block w-full rounded-lg bg-slate-950 border border-slate-700 text-white px-4 py-3 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none focus:bg-slate-900 transition-all placeholder-slate-600 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                  placeholder="Informazioni sui servizi"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-lg bg-slate-950 border border-slate-700 text-white px-4 py-3 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none focus:bg-slate-900 transition-all placeholder-slate-600 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                  placeholder="Scrivi qui il tuo messaggio..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-slate-900 transition-all shadow-lg shadow-brand-600/20 group-hover:shadow-brand-600/40"
              >
                Invia Messaggio
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Full Width Map with Pulsing Overlay */}
      <div className="w-full h-[450px] bg-slate-900 border-t border-slate-800 relative z-10 overflow-hidden group">

        {/* Pulsing Neural Connection Overlay - Enhanced Graphic */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Main Color Wash */}
          <div className="absolute inset-0 bg-brand-500 animate-map-pulse mix-blend-overlay"></div>

          {/* Neural Connection SVG Graphic */}
          <svg className="absolute inset-0 w-full h-full opacity-30 select-none" preserveAspectRatio="none">
            <defs>
              <filter id="neural-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#neural-glow)" className="animate-neural-float">
              {/* Simulated connection lines */}
              <path d="M-50,100 Q200,50 400,150 T900,100 T1400,200" fill="none" stroke="#f97316" strokeWidth="0.8" strokeDasharray="5,10" className="animate-neural-dash" />
              <path d="M-50,300 Q300,400 600,250 T1100,350 T1400,150" fill="none" stroke="#f97316" strokeWidth="0.8" strokeDasharray="8,12" className="animate-neural-dash-alt" />
              <path d="M200,-50 Q400,200 100,400 T500,600" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.4" />
              <path d="M800,-50 Q1000,250 850,500" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.4" />

              {/* Pulse Nodes scattered around */}
              <circle cx="15%" cy="25%" r="2" fill="#f97316" className="animate-pulse" />
              <circle cx="45%" cy="65%" r="3" fill="#f97316" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="75%" cy="35%" r="2.5" fill="#f97316" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="85%" cy="75%" r="2" fill="#f97316" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </g>
          </svg>
        </div>

        {/* Custom Marker with Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+8px)] z-30 pointer-events-none drop-shadow-2xl">
          <div className="flex flex-col items-center">
            {/* Logo Bubble */}
            <div className="bg-slate-950/95 backdrop-blur-md border border-brand-500/30 rounded-lg px-3 py-1.5 shadow-2xl shadow-brand-500/20 transform transition-transform duration-300 hover:scale-110">
              <div className="font-sans text-sm tracking-tight leading-none font-bold select-none">
                <span className="text-[#ff6600]">code</span>
                <span className="text-slate-200">team</span>
              </div>
            </div>
            {/* Pin Arrow */}
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-brand-500/30 mt-[-1px]"></div>

            {/* Dot on map */}
            <div className="w-3 h-3 bg-brand-500 rounded-full mt-1 relative">
              <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        <iframe
          src="https://maps.google.com/maps?q=Via%20Iseo%2C%206%2C%2025030%20Villa%20Pedergnano%20BS&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 map-iframe"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sede CodeTeam"
        ></iframe>
      </div>

      <style>{`
        @keyframes map-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes neural-dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes neural-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-map-pulse {
          animation: map-pulse 4s ease-in-out infinite;
        }
        .animate-neural-dash {
          animation: neural-dash 20s linear infinite;
        }
        .animate-neural-dash-alt {
          animation: neural-dash 25s linear infinite reverse;
        }
        .animate-neural-float {
          animation: neural-float 8s ease-in-out infinite;
        }
        .map-iframe {
            filter: grayscale(100%) invert(90%) contrast(85%);
            transition: filter 0.5s ease-in-out;
        }
        .group:hover .map-iframe {
            filter: grayscale(0%) invert(0%) contrast(100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;