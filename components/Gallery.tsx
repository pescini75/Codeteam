import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    title: "Sviluppo Frontend Avanzato",
    subtitle: "Codice pulito e interfacce reattive per esperienze utente senza compromessi."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=2000",
    title: "Intelligenza Artificiale Generativa",
    subtitle: "Sfruttiamo la potenza dei LLM per automatizzare e innovare i processi aziendali."
  },
  {
    id: 3,
    url: "https://i.ytimg.com/vi/ev67g3UI_gM/maxresdefault.jpg",
    title: "Noi usiamo Genexus",
    subtitle: "La potenza dell'AI per uno sviluppo software rapido, scalabile e multipiattaforma."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000",
    title: "Team Collaboration",
    subtitle: "Metodologie agili e lavoro di squadra per trasformare le idee in realtà."
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section id="projects" className="relative w-full h-[500px] md:h-[600px] bg-slate-950 overflow-hidden group">
      
      {/* Slides Container - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Semantic Image for SEO instead of background-image */}
              <div className="absolute inset-0">
                  <img 
                    src={slide.url} 
                    alt={`Progetto CodeTeam: ${slide.title} - ${slide.subtitle}`}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                        isActive ? 'scale-100' : 'scale-110'
                    }`}
                    loading={index === 0 ? "eager" : "lazy"} // Eager load first image for LCP
                  />
                  {/* Dark Overlay for text readability */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Content Container - Centered nicely but over the full width image */}
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start">
                 {/* 
                    Mobile: px-20 to clear arrows (centered text).
                    Tablet/Desktop: pl-24 to clear left arrow (left aligned text). 
                 */}
                 <div className="max-w-7xl mx-auto px-20 sm:px-6 sm:pl-24 lg:pl-32 w-full relative z-10">
                    <div className={`max-w-2xl transition-all duration-1000 delay-300 transform ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      <h2 className="text-sm md:text-base text-brand-500 font-semibold tracking-wide uppercase mb-2">Galleria Progetti</h2>
                      <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 shadow-black/50 drop-shadow-lg leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-base sm:text-xl text-slate-200 drop-shadow-md max-w-lg hidden sm:block">
                        {slide.subtitle}
                      </p>
                      {/* Mobile subtitle - smaller */}
                      <p className="text-sm text-slate-200 drop-shadow-md max-w-xs mx-auto sm:hidden">
                        {slide.subtitle}
                      </p>
                    </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Arrow - Positioned absolute left */}
      <div className="absolute top-1/2 left-2 md:left-8 -translate-y-1/2 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 md:p-3 rounded-full bg-slate-900/50 hover:bg-brand-600 text-white backdrop-blur border border-slate-700 transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Right Arrow - Positioned absolute right */}
      <div className="absolute top-1/2 right-2 md:right-8 -translate-y-1/2 z-20">
         <button 
          onClick={nextSlide}
          className="p-2 md:p-3 rounded-full bg-slate-900/50 hover:bg-brand-600 text-white backdrop-blur border border-slate-700 transition-all hover:scale-110 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-brand-500 scale-125' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;