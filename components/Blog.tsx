import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import { Tag as TagIcon, X, ArrowRight, Clock } from 'lucide-react';

interface BlogProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  onViewAll?: () => void;
}

const Blog: React.FC<BlogProps> = ({ posts, onPostClick, onViewAll }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags based on current posts and limit to 10
  const allTags = useMemo(() => {
    const tags = new Set(posts.flatMap(post => post.tags));
    return Array.from(tags).sort().slice(0, 10);
  }, [posts]);

  // Filter logic - Only Tags
  const filteredPosts = posts.filter(post => {
    return selectedTag === null || post.tags.includes(selectedTag);
  });

  // Limit to 3 posts for display (Reverse to show newest first)
  const displayedPosts = [...filteredPosts].reverse().slice(0, 3);

  const clearFilters = () => {
    setSelectedTag(null);
  };

  const hasActiveFilters = selectedTag !== null;

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-base text-brand-500 font-semibold tracking-wide uppercase">Dall'archivio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Ultime Novità e Risorse
            </p>
          </div>
        </div>

        {/* Simplified Filters Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
            
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="flex items-center ml-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4 mr-1" />
                Reset filtri
              </button>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {displayedPosts.length > 0 ? (
            displayedPosts.map((post) => (
              <article 
                key={post.id}
                id={`post-card-${post.id}`}
                onClick={() => onPostClick(post)}
                className="group flex flex-col bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-brand-500/50 cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                   <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-xs font-medium text-slate-500 mb-3 space-x-4">
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="block mt-2">
                      <p className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">
                        {post.title}
                      </p>
                      <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-brand-500 font-bold text-sm">
                    Approfondisci <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
              <p className="text-slate-400">Nessun articolo trovato per il tag selezionato.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-brand-500 hover:underline"
              >
                Mostra tutti gli articoli
              </button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
            <button 
                onClick={onViewAll}
                className="inline-flex items-center px-8 py-3.5 border border-slate-700 rounded-xl text-base font-semibold text-white hover:bg-slate-800 hover:border-brand-500 transition-all group shadow-lg"
            >
                Vedi tutti gli articoli <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;