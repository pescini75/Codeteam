import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import CodeWatermark from './CodeWatermark';
import BrandingBanner from './BrandingBanner';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
  onNavigateToBlog?: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack, onNavigateToBlog }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Inject BlogPosting Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `json-ld-post-${post.id}`;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.imageUrl,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "CodeTeam"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CodeTeam S.r.l.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.codeteam.it/wp-content/uploads/2014/05/logo-codeteam.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.codeteam.it/#blog/${post.id}`
      }
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`json-ld-post-${post.id}`);
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, [post]);

  return (
    <article className="min-h-screen pt-24 pb-0 relative z-20" itemScope itemType="http://schema.org/BlogPosting">
      <CodeWatermark />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex justify-center z-40 transition-all duration-500">
           <button 
              onClick={onBack}
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-slate-950/60 backdrop-blur-md text-white hover:bg-brand-600 transition-all border border-slate-700 hover:border-brand-500 group shadow-lg"
              aria-label="Torna all'elenco articoli"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Torna agli articoli</span>
            </button>
        </div>

        <div className="pt-8 transition-all duration-500">
            <BrandingBanner compact={true} className="mb-12 hidden md:block opacity-90" />
        </div>
        
        <div className="h-6 md:hidden"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative min-h-[600px]">
            <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 select-none pointer-events-none opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                <img src={post.imageUrl} alt="" className="w-full h-full object-cover" itemProp="image" />
            </div>

            <div className="relative z-10 p-8 md:p-16 w-full">
                <header className="mb-10 border-b border-slate-800/50 pb-10">
                    <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-400 mb-6">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-brand-500" />
                          <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
                        </div>
                        <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-brand-500" />{post.readTime} lettura</div>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg" itemProp="headline">
                      {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-950/80 backdrop-blur text-brand-400 border border-slate-700 shadow-sm" itemProp="keywords">
                              {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-lg md:prose-xl prose-invert max-w-none" itemProp="articleBody">
                    {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-8 leading-relaxed w-full">{paragraph}</p>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800/50 flex justify-between items-center">
                    <p className="text-slate-500 italic" itemProp="author">Scritto dal team di CodeTeam</p>
                    <button onClick={onNavigateToBlog || onBack} className="text-brand-500 hover:text-brand-400 font-medium transition-colors text-lg">
                      Leggi altri articoli &rarr;
                    </button>
                </div>
            </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;