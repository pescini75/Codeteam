import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import BlogPostDetail from './components/BlogPostDetail';
import TeamMemberDetail from './components/TeamMemberDetail';
import Genexus from './components/Genexus';
import GenerativeAI from './components/GenerativeAI';
import TeamCollaboration from './components/TeamCollaboration';
import SviluppoFullstack from './components/SviluppoFullstack';
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';
import ScrollToTopButton from './components/ScrollToTop';
import PostGenerator from './components/PostGenerator';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import { BlogPost, TeamMember } from './types';
import { blogPosts as initialFallbackPosts } from './data/posts';
import { teamMembers } from './components/Team';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

// Wrapper components for routes that need params
const BlogPostWrapper = ({ posts, onBack, onNavigateToBlog }: { posts: BlogPost[], onBack: () => void, onNavigateToBlog: () => void }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id.toString() === id);
  if (!post) return <Navigate to="/blog" replace />;
  return <BlogPostDetail post={post} onBack={onBack} onNavigateToBlog={onNavigateToBlog} />;
};

const TeamMemberWrapper = ({ members, onBack }: { members: TeamMember[], onBack: () => void }) => {
  const { id } = useParams<{ id: string }>();
  const member = members.find(m => m.id.toString() === id);
  if (!member) return <Navigate to="/" replace />;
  return <TeamMemberDetail member={member} onBack={onBack} />;
};

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // Not used here directly but can be handy
  const [posts, setPosts] = useState<BlogPost[]>(initialFallbackPosts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Dynamic SEO management
  useEffect(() => {
    const baseUrl = "https://www.codeteam.it";
    const path = location.pathname;
    const url = `${baseUrl}${path}${location.hash}`;

    let title = "Codeteam | Sviluppo Software Gestionali web e mobile custom e Systems Integrator a Brescia";
    let description = "Software House a Brescia: sviluppo software su misura, applicazioni web e mobile, integrazione sistemi ERP e consulenza IT avanzata.";
    let canonical = `${baseUrl}${path}`;

    if (path === '/') {
      if (location.hash === '#servizi') {
        title = "Servizi di Sviluppo Software Custom a Brescia | CodeTeam";
        description = "Esplora i nostri servizi: sviluppo software sartoriale, integrazione sistemi ERP/CRM, consulenza IT e soluzioni model-driven con GeneXus.";
      } else if (location.hash === '#team') {
        title = "Incontra il Team di Esperti CodeTeam | Professionisti del Software";
        description = "Conosci i fondatori e gli sviluppatori di CodeTeam. Oltre 25 anni di esperienza nell'analisi e nello sviluppo di soluzioni software complesse.";
      } else if (location.hash === '#filosofia') {
        title = "La Nostra Filosofia: Oltre il Codice | Visione CodeTeam";
        description = "In CodeTeam crediamo nell'eccellenza tecnica, nell'innovazione pragmatica e in un approccio human-centric allo sviluppo software.";
      } else if (location.hash === '#blog') {
        title = "Blog Tecnico & Ultime Novità Digitali | CodeTeam";
        description = "Resta aggiornato sulle ultime tecnologie: AI, WebAssembly, React e tendenze della digital transformation nel nostro blog ufficiale.";
      } else if (location.hash === '#contact') {
        title = "Contattaci per il tuo Prossimo Progetto Software | CodeTeam";
        description = "Pronto a trasformare la tua idea in realtà? Contatta CodeTeam a Brescia per una consulenza su software, web o mobile app.";
      } else if (location.hash === '#dicono-di-noi') {
        title = "Testimonianze e Casi di Successo | Opinioni su CodeTeam";
        description = "Scopri cosa dicono i nostri clienti della loro esperienza con CodeTeam. Risultati concreti e partnership durature nel mondo del software.";
      }
    }

    if (path.startsWith('/blog/')) {
      const id = path.split('/').pop();
      const post = posts.find(p => p.id.toString() === id);
      if (post) {
        title = `${post.title} | Blog CodeTeam`;
        description = post.excerpt;
      }
    } else if (path === '/genexus') {
      title = "Tecnologia GeneXus AI | Sviluppo Software Low-Code Enterprise | CodeTeam";
      description = "Accellera lo sviluppo software enterprise con GeneXus Next e l'AI. Riduci il debito tecnico e modernizza i sistemi legacy con approccio Model-Driven.";
    } else if (path === '/generative-ai') {
      title = "AI Generativa & Vibe Coding | Antigravity & Claude Code | CodeTeam";
      description = "Implementiamo soluzioni di Intelligenza Artificiale Generativa e Agenti Intelligenti per ottimizzare i processi aziendali e il flusso di sviluppo.";
    } else if (path === '/team-collaboration') {
      title = "Team Collaboration & Supporto IT | Oltre 25 anni di Esperienza | CodeTeam";
      description = "Scopri il nostro metodo di lavoro: un mix di esperienza consolidata e innovazione tecnologica per risultati concreti nel software development.";
    } else if (path === '/sviluppo-fullstack') {
      title = "Sviluppo Fullstack Model-Driven | GeneXus & WorkWithPlus | CodeTeam";
      description = "Creiamo piattaforme digitali solide e scalabili con GeneXus e WorkWithPlus. Sviluppo software enterprise focalizzato su performance e UX.";
    } else if (path === '/blog') {
      title = "Blog Tecnico: AI, Sviluppo Software e Digital Transformation | CodeTeam";
      description = "Insights e approfondimenti su WebAssembly, React, Intelligenza Artificiale e le ultime tendenze dello sviluppo software a Brescia.";
    } else if (path.startsWith('/team/')) {
      const id = path.split('/').pop();
      const member = teamMembers.find(m => m.id.toString() === id);
      if (member) {
        title = `${member.name} | Esperto Sviluppo Software CodeTeam`;
        description = `Profilo di ${member.name}, ${member.role} presso CodeTeam. Scopri le competenze tecniche e l'esperienza del nostro team di professionisti.`;
      }
    } else if (path === '/privacy') {
      title = "Privacy Policy | Protezione Dati | CodeTeam S.r.l.";
      description = "Informativa sul trattamento dei dati personali per gli utenti del sito web di CodeTeam S.r.l.";
    } else if (path === '/terms') {
      title = "Termini e Condizioni di Utilizzo | CodeTeam S.r.l.";
      description = "Termini e condizioni generali per l'utilizzo dei servizi e del sito web ufficiale di CodeTeam.";
    } else if (path === '/cookie-policy') {
      title = "Cookie Policy | Gestione Preferenze | CodeTeam S.r.l.";
      description = "Informativa sull'utilizzo dei cookie e tecnologie simili sul sito di CodeTeam S.r.l.";
    }

    document.title = title;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);

    // OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // SiteNavigationElement Structured Data for Sitelinks
    const navigationSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "SiteNavigationElement", "position": 1, "name": "Servizi Software Custom", "url": `${baseUrl}/#servizi` },
        { "@type": "SiteNavigationElement", "position": 2, "name": "Tecnologia GeneXus AI", "url": `${baseUrl}/genexus` },
        { "@type": "SiteNavigationElement", "position": 3, "name": "AI Generativa & Agenti", "url": `${baseUrl}/generative-ai` },
        { "@type": "SiteNavigationElement", "position": 4, "name": "Team Collaboration Expert", "url": `${baseUrl}/team-collaboration` },
        { "@type": "SiteNavigationElement", "position": 5, "name": "Sviluppo Fullstack RAD", "url": `${baseUrl}/sviluppo-fullstack` },
        { "@type": "SiteNavigationElement", "position": 6, "name": "Blog Tecnico & News", "url": `${baseUrl}/blog` },
        { "@type": "SiteNavigationElement", "position": 7, "name": "Il Nostro Team", "url": `${baseUrl}/#team` },
        { "@type": "SiteNavigationElement", "position": 8, "name": "Contatti & Preventivi", "url": `${baseUrl}/#contact` }
      ]
    };

    let scriptTag = document.getElementById('ld-navigation');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'ld-navigation';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(navigationSchema);

  }, [location.pathname, location.hash, posts]);

  useEffect(() => {
    const loadExternalPosts = async () => {
      try {
        const response = await fetch('/posts.json?t=' + new Date().getTime());
        if (response.ok) {
          const externalPosts = await response.json();
          if (Array.isArray(externalPosts) && externalPosts.length > 0) {
            setPosts(externalPosts);
          }
        }
      } catch (error) {
        console.error("Impossibile caricare posts.json:", error);
      }
    };
    loadExternalPosts();
  }, []);

  const handlePostClick = (post: BlogPost) => { navigate(`/blog/${post.id}`); };
  const handleAddPost = (newPost: BlogPost) => {
    setPosts([...posts, newPost]);
    navigate('/blog');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/admin');
  };

  const handleHeaderNavigation = (href: string) => {
    if (href.startsWith('#')) {
      navigate(`/${href}`);
    } else {
      navigate(href);
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-black text-slate-200 overflow-x-hidden">
      <NeuralNetworkBackground />
      <div className="relative z-10">
        <Header onNavigate={handleHeaderNavigation} />
        <main id="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Gallery onActionClick={handleHeaderNavigation} />
                <Services />
                <Philosophy />
                <Team onMemberClick={(m) => navigate(`/team/${m.id}`)} />
                <Testimonials />
                <Blog posts={posts} onPostClick={handlePostClick} onViewAll={() => navigate('/blog')} />
                <Contact />
              </>
            } />
            <Route path="/genexus" element={<Genexus onBack={() => navigate('/')} />} />
            <Route path="/generative-ai" element={<GenerativeAI onBack={() => navigate('/')} />} />
            <Route path="/team-collaboration" element={<TeamCollaboration onBack={() => navigate('/')} />} />
            <Route path="/sviluppo-fullstack" element={<SviluppoFullstack onBack={() => navigate('/')} />} />
            <Route path="/blog" element={
              <BlogPage
                posts={posts}
                onPostClick={handlePostClick}
                onBack={() => navigate('/')}
                onContactClick={() => handleHeaderNavigation('#contact')}
              />
            } />
            <Route path="/blog/:id" element={
              <BlogPostWrapper posts={posts} onBack={() => navigate(-1)} onNavigateToBlog={() => navigate('/blog')} />
            } />
            <Route path="/team/:id" element={
              <TeamMemberWrapper members={teamMembers} onBack={() => navigate(-1)} />
            } />
            <Route path="/privacy" element={<PrivacyPolicy onBack={() => navigate('/')} />} />
            <Route path="/terms" element={<TermsOfService onBack={() => navigate('/')} />} />
            <Route path="/cookie-policy" element={<CookiePolicy onBack={() => navigate('/')} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} onBack={() => navigate('/')} />} />
            <Route path="/admin" element={
              isAuthenticated ? (
                <PostGenerator onBack={() => navigate('/')} onAddPost={handleAddPost} existingPosts={posts} />
              ) : (
                <Navigate to="/login" replace />
              )
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer
          onAdminClick={() => navigate('/admin')}
          onPrivacyClick={() => navigate('/privacy')}
          onTermsClick={() => navigate('/terms')}
          onCookieClick={() => navigate('/cookie-policy')}
        />
        <ScrollToTopButton shouldShow={location.pathname === '/'} />
        <CookieBanner onOpenPolicy={() => navigate('/cookie-policy')} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;