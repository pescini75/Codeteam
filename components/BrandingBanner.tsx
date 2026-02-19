import React from 'react';

interface BrandingBannerProps {
  className?: string;
  compact?: boolean;
}

const BrandingBanner: React.FC<BrandingBannerProps> = ({ className = "", compact = false }) => {
  return (
    <div className={`relative w-full overflow-hidden ${compact ? 'py-4' : 'py-12'} ${className}`}>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm -z-10"></div>
        <div className="transform rotate-1 lg:rotate-0.5">
             <div className={`flex flex-col items-center justify-center bg-[#FF6600] w-full shadow-2xl shadow-orange-500/20 select-none hover:scale-[1.01] transition-transform cursor-default border-y border-orange-400/30 ${compact ? 'py-4 lg:py-6' : 'py-10 lg:py-16'}`}>
                <div className={`font-sans font-bold tracking-tight leading-none text-transparent opacity-90 ${compact ? 'text-4xl md:text-6xl' : 'text-7xl md:text-9xl'}`} style={{ WebkitTextStroke: compact ? '1px white' : '2px white' }}>
                    codeteam
                </div>
                <div className={`text-white font-medium tracking-widest uppercase opacity-80 ${compact ? 'text-xs sm:text-sm mt-1' : 'text-lg sm:text-2xl mt-3'}`}>
                    Next step of software development
                </div>
            </div>
        </div>
    </div>
  );
};

export default BrandingBanner;