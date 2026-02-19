import React, { useEffect } from 'react';
import { TeamMember } from '../types';
import { ArrowLeft, Linkedin, Mail, Phone } from 'lucide-react';
import CodeWatermark from './CodeWatermark';

interface TeamMemberDetailProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({ member, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-24 relative z-20 overflow-hidden" itemScope itemType="http://schema.org/Person">
      <CodeWatermark />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 flex justify-center">
            <button onClick={onBack} className="inline-flex items-center px-6 py-2.5 rounded-full bg-slate-950/40 backdrop-blur-md text-white hover:bg-brand-600 transition-all border border-slate-700 hover:border-brand-500 group shadow-xl">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Torna al Team</span>
            </button>
        </div>

        <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[120%] pointer-events-none select-none z-0">
                 <div className="transform -rotate-6 lg:-rotate-3 opacity-40 transition-opacity duration-700 relative">
                    <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <div 
                          className="font-sans font-black tracking-tighter text-white/10 text-6xl md:text-7xl lg:text-9xl uppercase whitespace-nowrap transform -rotate-90 origin-center"
                          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                        >
                            codeteam
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-[#FF6600] w-full py-16 lg:py-24 shadow-2xl border-y border-orange-400/20">
                        <div 
                          className="font-sans font-bold tracking-tight leading-none text-white/20 text-8xl md:text-9xl lg:text-[12rem] drop-shadow-lg" 
                          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
                        >
                            codeteam
                        </div>
                        <div className="text-white font-medium tracking-[0.3em] uppercase text-sm md:text-xl lg:text-2xl mt-4 opacity-90 drop-shadow-md">
                            Next step of software development
                        </div>
                    </div>
                 </div>
            </div>

            <div className="relative z-10 bg-slate-900/40 backdrop-blur-2xl rounded-3xl border border-slate-800 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
                    
                    <div className="flex flex-col items-center flex-shrink-0 w-full lg:w-auto">
                        <div className="relative mb-10 group">
                            <div className="absolute inset-0 bg-brand-500 rounded-full blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"></div>
                            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-brand-500 transition-all duration-500 shadow-2xl">
                                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" itemProp="image" />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-5">
                          {member.linkedinUrl && (
                            <a 
                              href={member.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="p-4 rounded-full bg-slate-950/50 text-slate-400 hover:text-brand-500 hover:bg-slate-800 transition-all border border-slate-800 hover:border-brand-500/50 shadow-lg"
                              aria-label={`Profilo LinkedIn di ${member.name}`}
                              itemProp="url"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          )}
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`} 
                              className="p-4 rounded-full bg-slate-950/50 text-slate-400 hover:text-brand-500 hover:bg-slate-800 transition-all border border-slate-800 hover:border-brand-500/50 shadow-lg"
                              aria-label={`Invia Email a ${member.name}`}
                              itemProp="email"
                            >
                              <Mail className="w-6 h-6" />
                            </a>
                          )}
                          {member.phoneNumber && (
                            <a 
                              href={`tel:${member.phoneNumber}`} 
                              className="p-4 rounded-full bg-slate-950/50 text-slate-400 hover:text-brand-500 hover:bg-slate-800 transition-all border border-slate-800 hover:border-brand-500/50 shadow-lg"
                              aria-label={`Chiama ${member.name}`}
                              itemProp="telephone"
                            >
                              <Phone className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="mb-8">
                            <div className="inline-flex items-center space-x-2 bg-slate-950/50 backdrop-blur border border-slate-700/50 rounded-full px-4 py-1.5 mb-4">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                              </span>
                              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
                                Codeteam member
                              </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 tracking-tight" itemProp="name">
                              {member.name}
                            </h1>
                            <h2 className="text-xl text-slate-400 leading-relaxed" itemProp="jobTitle">
                              {member.role}
                            </h2>
                            <meta itemProp="worksFor" content="CodeTeam S.r.l." />
                        </div>
                        
                        <div className="prose prose-invert prose-lg md:prose-xl text-slate-300 leading-relaxed text-left w-full max-w-none" itemProp="description">
                            {member.description.split('\n\n').map((paragraph, idx) => (
                               <p key={idx} className="mb-6 opacity-90">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;