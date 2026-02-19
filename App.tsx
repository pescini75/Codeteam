import React, { useEffect, useState } from 'react';
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
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';
import ScrollToTop from './components/ScrollToTop';
import PostGenerator from './components/PostGenerator';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { BlogPost, TeamMember } from './types';
import { blogPosts as initialFallbackPosts } from './data/posts';

function App() {
  const [posts, setPosts] = useState<BlogPost[]>(initialFallbackPosts);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [currentTeamMember, setCurrentTeamMember] = useState<TeamMember | null>(null);
  const [isGenexusView, setIsGenexusView] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);
  const [isBlogListView, setIsBlogListView] = useState(false);
  const [isPrivacyView, setIsPrivacyView] = useState(false);
  const [isTermsView, setIsTermsView] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Dynamic SEO management
  useEffect(() => {
    let title = "Codeteam | Sviluppo Software, Web e Mobile su Misura a Brescia";
    let description = "Software House a Brescia: sviluppo software su misura, applicazioni web e mobile, integrazione sistemi ERP e consulenza IT avanzata.";

    if (currentPost) {
      title = `${currentPost.title} | Blog CodeTeam`;
      description = currentPost.excerpt;
    } else if (currentTeamMember) {
      title = `${currentTeamMember.name} - ${currentTeamMember.role} | Team CodeTeam`;
      description = `Profilo professionale di ${currentTeamMember.name}: ${currentTeamMember.role} presso CodeTeam Brescia.`;
    } else if (isGenexusView) {
      title = "Tecnologia GeneXus AI | Sviluppo Software Rapido | CodeTeam";
      description = "Scopri come usiamo GeneXus Next e l'AI per accelerare lo sviluppo software enterprise e ridurre il debito tecnico.";
    } else if (isBlogListView) {
      title = "Blog Tecnico & Insights Digitali | CodeTeam Brescia";
      description = "Rimani aggiornato su WebAssembly, React, AI e le ultime tendenze dello sviluppo software con il blog di CodeTeam.";
    } else if (isPrivacyView) {
      title = "Privacy Policy | CodeTeam S.r.l.";
    } else if (isTermsView) {
      title = "Termini e Condizioni | CodeTeam S.r.l.";
    }

    document.title = title;
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // OG Tags update
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
  }, [currentPost, currentTeamMember, isGenexusView, isBlogListView, isPrivacyView, isTermsView]);

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

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      if (currentPost || isGenexusView || currentTeamMember || isAdminView || isLoginView || isBlogListView || isPrivacyView || isTermsView) return;
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentPost, isGenexusView, currentTeamMember, isAdminView, isLoginView, isBlogListView, isPrivacyView, isTermsView]);

  const handlePostClick = (post: BlogPost) => { setCurrentPost(post); window.scrollTo(0, 0); };
  const handleAddPost = (newPost: BlogPost) => {
    setPosts([...posts, newPost]);
    setIsAdminView(false);
    setIsBlogListView(true);
    window.scrollTo(0, 0);
  };
  const handleTeamMemberClick = (member: TeamMember) => { setCurrentTeamMember(member); window.scrollTo(0, 0); };
  const handleBackToHome = () => {
    setCurrentPost(null); setIsGenexusView(false); setCurrentTeamMember(null);
    setIsAdminView(false); setIsLoginView(false); setIsBlogListView(false);
    setIsPrivacyView(false); setIsTermsView(false);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };
  const handleBackFromPost = () => {
    const postId = currentPost?.id;
    setCurrentPost(null);
    setTimeout(() => {
      if (postId) {
        const postElement = document.getElementById(`post-card-${postId}`);
        if (postElement) postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };
  const handleNavigateToBlog = () => { setCurrentPost(null); setIsBlogListView(true); window.scrollTo(0, 0); };
  const handleBackFromTeam = () => {
    setCurrentTeamMember(null);
    setTimeout(() => {
      const teamSection = document.getElementById('team');
      if (teamSection) teamSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const handleAdminClick = () => {
    if (isAuthenticated) setIsAdminView(true); else setIsLoginView(true);
    setCurrentPost(null); setIsGenexusView(false); setCurrentTeamMember(null); setIsBlogListView(false);
    setIsPrivacyView(false); setIsTermsView(false); window.scrollTo(0, 0);
  };
  const handlePrivacyClick = () => {
    setCurrentPost(null); setIsGenexusView(false); setCurrentTeamMember(null);
    setIsAdminView(false); setIsLoginView(false); setIsBlogListView(false);
    setIsPrivacyView(true); setIsTermsView(false); window.scrollTo(0, 0);
  };
  const handleTermsClick = () => {
    setCurrentPost(null); setIsGenexusView(false); setCurrentTeamMember(null);
    setIsAdminView(false); setIsLoginView(false); setIsBlogListView(false);
    setIsPrivacyView(false); setIsTermsView(true); window.scrollTo(0, 0);
  };
  const handleLoginSuccess = () => { setIsAuthenticated(true); setIsLoginView(false); setIsAdminView(true); };
  const handleViewAllPosts = () => { setIsBlogListView(true); window.scrollTo(0, 0); };
  const handleHeaderNavigation = (href: string) => {
    if (href === '#genexus') {
      setIsGenexusView(true); setCurrentPost(null); setCurrentTeamMember(null);
      setIsAdminView(false); setIsLoginView(false); setIsBlogListView(false);
      setIsPrivacyView(false); setIsTermsView(false); return;
    }
    const navigateToSection = () => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    if (currentPost || isGenexusView || currentTeamMember || isAdminView || isLoginView || isBlogListView || isPrivacyView || isTermsView) {
      setCurrentPost(null); setIsGenexusView(false); setCurrentTeamMember(null);
      setIsAdminView(false); setIsLoginView(false); setIsBlogListView(false);
      setIsPrivacyView(false); setIsTermsView(false);
      setTimeout(() => navigateToSection(), 50);
    } else navigateToSection();
  };

  return (
    <div className="relative min-h-screen font-sans bg-black text-slate-200 overflow-x-hidden">
      <NeuralNetworkBackground />
      <div className="relative z-10">
        <Header onNavigate={handleHeaderNavigation} />
        <main id="main-content">
          {isLoginView ? (
            <Login onLoginSuccess={handleLoginSuccess} onBack={handleBackToHome} />
          ) : isAdminView ? (
            <PostGenerator onBack={handleBackToHome} onAddPost={handleAddPost} existingPosts={posts} />
          ) : isGenexusView ? (
            <Genexus onBack={handleBackToHome} />
          ) : isPrivacyView ? (
            <PrivacyPolicy onBack={handleBackToHome} />
          ) : isTermsView ? (
            <TermsOfService onBack={handleBackToHome} />
          ) : currentPost ? (
            <BlogPostDetail
              post={currentPost}
              onBack={handleBackFromPost}
              onNavigateToBlog={handleNavigateToBlog}
            />
          ) : isBlogListView ? (
            <BlogPage
              posts={posts}
              onPostClick={handlePostClick}
              onBack={handleBackToHome}
              onContactClick={() => handleHeaderNavigation('#contact')}
            />
          ) : currentTeamMember ? (
            <TeamMemberDetail member={currentTeamMember} onBack={handleBackFromTeam} />
          ) : (
            <>
              <Hero />
              <Gallery />
              <Services />
              <Philosophy />
              <Team onMemberClick={handleTeamMemberClick} />
              <Testimonials />
              <Blog posts={posts} onPostClick={handlePostClick} onViewAll={handleViewAllPosts} />
              <Contact />
            </>
          )}
        </main>
        <Footer
          onAdminClick={handleAdminClick}
          onPrivacyClick={handlePrivacyClick}
          onTermsClick={handleTermsClick}
        />
        <ScrollToTop shouldShow={!currentPost && !isGenexusView && !currentTeamMember && !isAdminView && !isLoginView && !isBlogListView && !isPrivacyView && !isTermsView} />
      </div>
    </div>
  );
}

export default App;