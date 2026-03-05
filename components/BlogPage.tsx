import React, { useState, useMemo, useEffect, useRef } from 'react';
import { BlogPost } from '../types';
import { Search, Calendar, ArrowRight, Clock, Hash, ChevronRight } from 'lucide-react';
import CodeWatermark from './CodeWatermark';
import BrandingBanner from './BrandingBanner';

interface BlogPageProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  onBack: () => void;
  onContactClick?: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ posts, onPostClick, onBack, onContactClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const isFirstRender = useRef(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when filters change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTag, searchQuery]);

  // Helper to parse Italian date string to Date object
  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      'gennaio': 0, 'febbraio': 1, 'marzo': 2, 'aprile': 3, 'maggio': 4, 'giugno': 5,
      'luglio': 6, 'agosto': 7, 'settembre': 8, 'ottobre': 9, 'novembre': 10, 'dicembre': 11,
      'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
      'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
    };

    const parts = dateStr.split(' ');
    if (parts.length >= 3) {
      const day = parseInt(parts[0]);
      const monthName = parts[1].toLowerCase();
      const month = months[monthName] !== undefined ? months[monthName] : 0;
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    return new Date();
  };

  const filteredAndSortedPosts = useMemo(() => {
    return posts
      .filter(post => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  }, [posts, searchQuery, selectedTag]);

  const allTags = useMemo(() => {
    const tags = new Set(posts.flatMap(post => post.tags));
    return Array.from(tags).sort();
  }, [posts]);

  return (
    <section className="min-h-screen pt-24 pb-20 relative z-10">
      <CodeWatermark />

      <div className="relative">
        <div className="pt-8 transition-all duration-500">
          <BrandingBanner compact={true} className="opacity-90" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 mt-12 md:mt-16">
        <div className="mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Il nostro <span className="text-brand-500">blog</span>
            </h1>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl">
              Esplora le ultime innovazioni e le analisi tecniche del nostro team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            {filteredAndSortedPosts.length > 0 ? (
              filteredAndSortedPosts.map((post) => (
                <article
                  key={post.id}
                  id={`post-card-${post.id}`}
                  className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-3xl overflow-hidden hover:border-brand-500/40 transition-all duration-500 group flex flex-col md:flex-row shadow-2xl hover:shadow-brand-500/10 items-stretch md:h-[250px]"
                >
                  <div
                    className="w-full md:w-72 h-[180px] md:h-auto flex-shrink-0 relative overflow-hidden cursor-pointer"
                    onClick={() => onPostClick(post)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 md:hidden"></div>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-0.5 bg-brand-600/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                        Insights
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative min-w-0">
                    <div className="flex items-center gap-4 text-[10px] md:text-xs font-semibold text-slate-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-500/60" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-500/60" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex-1 overflow-hidden">
                      <h2
                        className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-brand-500 transition-colors cursor-pointer line-clamp-2"
                        onClick={() => onPostClick(post)}
                      >
                        {post.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-3 text-base">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800/50">
                      <div className="hidden sm:flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-500 uppercase tracking-wider"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => onPostClick(post)}
                        className="inline-flex items-center text-sm font-bold text-brand-500 hover:text-brand-400 transition-all group/btn"
                      >
                        Approfondisci <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-32 bg-slate-900/20 rounded-3xl border border-slate-800 border-dashed">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-400 text-lg">Nessun articolo trovato.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                  className="mt-4 text-brand-500 hover:underline font-medium"
                >
                  Reset Filtri
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-12">
            <div className="sticky top-28 space-y-12">

              {/* Search Widget - Containerized like Tags widget */}
              <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mr-4 border border-brand-500/20">
                    <Search className="w-5 h-5 text-brand-500" />
                  </div>
                  Cerca
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="cerca ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-brand-500 outline-none transition-all text-base"
                  />
                </div>
              </div>

              {/* Tags Widget - Pill version */}
              <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mr-4 border border-brand-500/20">
                    <Hash className="w-5 h-5 text-brand-500" />
                  </div>
                  Argomenti
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${selectedTag === tag
                        ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-600/20'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                  {selectedTag && (
                    <button
                      onClick={() => setSelectedTag(null)}
                      className="w-full mt-4 text-center text-sm text-slate-500 hover:text-brand-500 font-medium"
                    >
                      Mostra tutti
                    </button>
                  )}
                </div>
              </div>

              {/* CTA Widget */}
              <div className="bg-brand-600 p-8 rounded-3xl shadow-xl shadow-brand-600/20 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Hai un progetto?</h3>
                <p className="text-white/80 text-base mb-6 relative z-10">Parliamo di come le nostre soluzioni software possono far crescere la tua azienda.</p>
                <button
                  onClick={(e) => {
                    if (onContactClick) {
                      e.preventDefault();
                      onContactClick();
                    }
                  }}
                  className="inline-flex items-center px-8 py-3.5 bg-white text-brand-600 rounded-xl font-bold text-base hover:bg-slate-100 transition-colors relative z-10 shadow-lg"
                >
                  Contattaci Ora
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;