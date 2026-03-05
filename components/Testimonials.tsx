import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    author: "Luigi Perazzi",
    role: "Gava IFC S.p.A.",
    content: "L'attenzione al cliente di CodeTeam è impareggiabile. Non si sono limitati a eseguire specifiche, ma hanno lavorato al nostro fianco per perfezionare la visione del prodotto, trattando il nostro successo come il loro. Un partner vero, non solo un fornitore.",
    category: "Freight forwarders and logistics"
  },
  {
    id: 2,
    author: "Andrea Emiliani",
    role: "BizLink S.R.L",
    content: "CodeTeam ci affianca da diversi anni, avendo contribuito a costruire il nostro sistema gestionale esattamente come lo volevamo. L'interfacciamento del software al software MES e le robuste soluzioni mobile su smartphone per il magazzino ci hanno consentito di risparmiare tempo e soldi. ",
    category: "Silicone Cable Solutions"
  },
  {
    id: 3,
    author: "Fedele Pizzetti",
    role: "Magri Gomme S.p.A",
    content: "Lavoriamo con CodeTeam da molti anni ed abbiamo ottenuto nel tempo una soluzione software altamente customizzata e scalabile che sarebbe stata impossibile ottenere con software standard. Abbiamo affiancato soluzioni EDI e di System Integration su misura che hanno centralizzato i dati e automatizzato i flussi, risolvendo numerose complessità altrimenti non risolvibili.",
    category: "Automotive"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="dicono-di-noi" className="py-24 relative bg-slate-900 border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Feedback Clienti</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Opinioni e Testimonianze su CodeTeam
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            La fiducia dei nostri partner è il nostro asset più prezioso. Ecco come abbiamo fatto la differenza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-lg hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-brand-500/50 hover:rotate-[5deg] transition-all duration-500 cursor-default"
            >
              {/* Animated background glow inside the card */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>

              {/* Neural Decoration Layer (Visible on Hover) */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                {/* Top Right Node */}
                <div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse"></div>
                  <div className="absolute top-1 right-1 w-16 h-[1px] bg-gradient-to-l from-brand-500/40 to-transparent rotate-45 origin-right"></div>
                  <div className="absolute top-6 right-1 h-12 w-[1px] bg-gradient-to-b from-brand-500/40 to-transparent"></div>
                </div>

                {/* Bottom Left Node */}
                <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse"></div>
                  <div className="absolute bottom-1 left-1 w-16 h-[1px] bg-gradient-to-r from-brand-500/40 to-transparent rotate-45 origin-left"></div>
                  <div className="absolute bottom-6 left-1 h-12 w-[1px] bg-gradient-to-t from-brand-500/40 to-transparent"></div>
                </div>

                {/* Diagonal Connection Line */}
                <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                  <defs>
                    <linearGradient id={`grad-${testimonial.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(249,115,22)', stopOpacity: 0 }} />
                      <stop offset="50%" style={{ stopColor: 'rgb(249,115,22)', stopOpacity: 0.1 }} />
                      <stop offset="100%" style={{ stopColor: 'rgb(249,115,22)', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <line x1="10%" y1="90%" x2="90%" y2="10%" stroke={`url(#grad-${testimonial.id})`} strokeWidth="1" />
                </svg>
              </div>

              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 bg-slate-900 border border-slate-700 p-2 rounded-lg text-brand-500 shadow-lg group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 z-20">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              <div className="relative z-10">
                <div className="flex space-x-1 mb-6 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto border-t border-slate-800 pt-6 flex flex-col">
                  <span className="text-white font-bold text-lg">{testimonial.author}</span>
                  <span className="text-brand-500 text-sm font-medium">{testimonial.role}</span>
                  <span className="mt-2 inline-block text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded w-fit">
                    #{testimonial.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;