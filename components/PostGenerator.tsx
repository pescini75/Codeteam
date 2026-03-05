import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeft, Download, Info, Upload, X, Image as ImageIcon, Copy, Check, Bold, Italic, Link, List, ListOrdered, Quote, Code, Minus, Heading2, Heading3, Code2 } from 'lucide-react';
import { BlogPost } from '../types';

interface PostGeneratorProps {
  onBack: () => void;
  onAddPost?: (post: BlogPost) => void;
  existingPosts?: BlogPost[];
}

const PostGenerator: React.FC<PostGeneratorProps> = ({ onBack, onAddPost, existingPosts = [] }) => {
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    imageUrl: '',
    readTime: '5 min',
    tags: ''
  });

  const nextId = existingPosts.length > 0
    ? Math.max(...existingPosts.map(p => p.id)) + 1
    : 1;

  const currentDate = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '' }));
  };

  const getTagsArray = () => {
    return formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
  };

  const getEditorContent = () => editorRef.current?.innerHTML ?? '';

  const createNewPostObject = (): BlogPost => {
    return {
      id: nextId,
      title: formData.title,
      excerpt: formData.excerpt,
      content: getEditorContent(),
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
      date: currentDate,
      readTime: formData.readTime,
      tags: getTagsArray()
    };
  };

  // --- WYSIWYG Toolbar ---
  const execCmd = useCallback((command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  }, []);

  const insertHTML = useCallback((html: string) => {
    editorRef.current?.focus();
    document.execCommand('insertHTML', false, html);
  }, []);

  const handleLinkInsert = useCallback(() => {
    const sel = window.getSelection();
    const selectedText = sel && sel.toString() ? sel.toString() : 'testo del link';
    const url = window.prompt('URL del link:', 'https://');
    if (!url) return;
    insertHTML(`<a href="${url}" target="_blank" rel="noopener noreferrer">${selectedText}</a>`);
  }, [insertHTML]);

  const toolbarGroups = [
    [
      { icon: Heading2, title: 'Titolo H2', action: () => insertHTML('<h2>Titolo sezione</h2><p></p>') },
      { icon: Heading3, title: 'Titolo H3', action: () => insertHTML('<h3>Sottotitolo</h3><p></p>') },
    ],
    [
      { icon: Bold, title: 'Grassetto', action: () => execCmd('bold') },
      { icon: Italic, title: 'Corsivo', action: () => execCmd('italic') },
      { icon: Link, title: 'Link', action: handleLinkInsert },
    ],
    [
      { icon: List, title: 'Lista •', action: () => execCmd('insertUnorderedList') },
      { icon: ListOrdered, title: 'Lista num.', action: () => execCmd('insertOrderedList') },
      { icon: Quote, title: 'Citazione', action: () => insertHTML('<blockquote>Testo della citazione</blockquote><p></p>') },
    ],
    [
      { icon: Code, title: 'Codice inline', action: () => insertHTML('<code>codice</code>') },
      { icon: Code2, title: 'Blocco codice', action: () => insertHTML('<pre><code>// codice qui</code></pre><p></p>') },
      { icon: Minus, title: 'Separatore', action: () => insertHTML('<hr><p></p>') },
    ],
  ];

  const handleDownloadJSON = () => {
    const newPost = createNewPostObject();
    const updatedPosts = [...existingPosts, newPost];
    const jsonString = JSON.stringify(updatedPosts, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "posts.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = () => {
    const newPost = createNewPostObject();
    const codeString = JSON.stringify(newPost, null, 2) + ",";
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreview = () => {
    const post = createNewPostObject();
    const html = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anteprima: ${post.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #020617; color: #e2e8f0; font-family: 'Inter', sans-serif; min-height: 100vh; padding: 3rem 1rem; }
    .container { max-width: 860px; margin: 0 auto; }
    .banner { text-align: center; margin-bottom: 1.5rem; }
    .banner span { display: inline-block; background: #1e293b; border: 1px solid #334155; color: #f97316; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.35rem 1rem; border-radius: 9999px; }
    .card { background: #0f172a; border: 1px solid #1e293b; border-radius: 1.5rem; overflow: hidden; }
    .cover { position: relative; width: 100%; height: 320px; overflow: hidden; }
    .cover img { width: 100%; height: 100%; object-fit: cover; opacity: 0.4; }
    .cover-gradient { position: absolute; inset: 0; background: linear-gradient(to top, #0f172a 10%, transparent 80%); }
    .content { padding: 2.5rem 3rem; }
    .meta { display: flex; gap: 1.5rem; margin-bottom: 1.25rem; font-size: 0.85rem; color: #94a3b8; }
    h1 { font-size: 2.5rem; font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 1.25rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
    .tag { background: #020617; border: 1px solid #334155; color: #fb923c; font-size: 0.75rem; font-weight: 600; padding: 0.3rem 0.85rem; border-radius: 9999px; }
    .divider { border: none; border-top: 1px solid #1e293b; margin-bottom: 2.5rem; }
    .prose h2 { font-size: 1.6rem; font-weight: 700; color: #fff; margin: 2rem 0 0.75rem; }
    .prose h3 { font-size: 1.25rem; font-weight: 700; color: #fff; margin: 1.75rem 0 0.6rem; }
    .prose p { color: #cbd5e1; line-height: 1.85; margin-bottom: 1.25rem; }
    .prose strong { color: #fff; font-weight: 600; }
    .prose em { color: #e2e8f0; font-style: italic; }
    .prose a { color: #fb923c; text-decoration: underline; }
    .prose ul, .prose ol { color: #cbd5e1; padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .prose li { margin-bottom: 0.4rem; line-height: 1.7; }
    .prose blockquote { border-left: 4px solid #f97316; padding-left: 1.25rem; margin: 1.5rem 0; font-style: italic; color: #94a3b8; }
    .prose code { background: #1e293b; color: #fb923c; border-radius: 0.25rem; padding: 0.1rem 0.4rem; font-size: 0.88em; font-family: monospace; }
    .prose pre { background: #020617; border: 1px solid #1e293b; border-radius: 0.75rem; padding: 1.25rem; margin: 1.5rem 0; overflow-x: auto; }
    .prose pre code { background: none; padding: 0; color: #94a3b8; }
    .prose hr { border: none; border-top: 1px solid #1e293b; margin: 2rem 0; }
    .footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #1e293b; display: flex; justify-content: space-between; align-items: center; color: #64748b; font-size: 0.85rem; font-style: italic; }
    @media (max-width: 640px) { .content { padding: 1.5rem; } h1 { font-size: 1.75rem; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="banner"><span>⚡ Anteprima Articolo — non pubblicato</span></div>
    <div class="card">
      ${post.imageUrl ? `<div class="cover"><img src="${post.imageUrl}" alt="${post.title}"><div class="cover-gradient"></div></div>` : ''}
      <div class="content">
        <div class="meta"><span>📅 ${post.date}</span><span>⏱ ${post.readTime} di lettura</span></div>
        <h1>${post.title}</h1>
        <div class="tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <hr class="divider">
        <div class="prose">${post.content}</div>
        <div class="footer">
          <span>Scritto dal team di CodeTeam</span>
          <a href="javascript:window.close()" style="color:#f97316;text-decoration:none;font-style:normal;font-weight:600;">← Chiudi anteprima</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  return (
    <section className="min-h-screen pt-24 pb-24 relative bg-slate-950 z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col items-center gap-6 relative">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur text-white hover:bg-brand-600 transition-colors border border-slate-700 hover:border-brand-500 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Torna alla Home
          </button>
          <span className="text-brand-500 font-mono text-sm uppercase tracking-wider">Gestione Blog JSON</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="mb-8 pb-8 border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-2">Nuovo Articolo</h2>
            <p className="text-slate-400">Compila i campi. Scrivi il contenuto con l'editor visuale e scarica il file aggiornato.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-8">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Titolo Articolo</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                placeholder="Es: L'evoluzione dell'AI nel 2024" />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Breve Descrizione (Excerpt)</label>
              <input type="text" name="excerpt" value={formData.excerpt} onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                placeholder="Una o due frasi di riassunto..." />
            </div>

            {/* WYSIWYG Editor */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Contenuto Articolo</label>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-800 border border-slate-700 border-b-0 rounded-t-xl">
                {toolbarGroups.map((group, gi) => (
                  <React.Fragment key={gi}>
                    {gi > 0 && <div className="w-px h-5 bg-slate-600 mx-1" />}
                    {group.map(({ icon: Icon, title, action }) => (
                      <button
                        key={title}
                        type="button"
                        title={title}
                        onMouseDown={e => { e.preventDefault(); action(); }}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white active:bg-brand-600 active:text-white transition-colors text-xs font-medium select-none"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden md:inline">{title}</span>
                      </button>
                    ))}
                  </React.Fragment>
                ))}
              </div>

              {/* Editor area: contentEditable */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                data-placeholder="Inizia a scrivere il tuo articolo qui..."
                className="wysiwyg-editor w-full min-h-[320px] bg-slate-950 border border-slate-700 rounded-b-xl px-5 py-4 text-slate-200 outline-none focus:border-brand-500 transition-colors overflow-y-auto"
              />

              <style>{`
                .wysiwyg-editor:empty:before {
                  content: attr(data-placeholder);
                  color: #475569;
                  pointer-events: none;
                }
                .wysiwyg-editor h2 { font-size: 1.5rem; font-weight: 700; color: #fff; margin: 1.25rem 0 0.5rem; }
                .wysiwyg-editor h3 { font-size: 1.2rem; font-weight: 700; color: #fff; margin: 1rem 0 0.4rem; }
                .wysiwyg-editor p  { color: #cbd5e1; line-height: 1.8; margin-bottom: 0.75rem; }
                .wysiwyg-editor strong { color: #fff; font-weight: 600; }
                .wysiwyg-editor em    { color: #e2e8f0; font-style: italic; }
                .wysiwyg-editor a    { color: #fb923c; text-decoration: underline; }
                .wysiwyg-editor ul, .wysiwyg-editor ol { color: #cbd5e1; padding-left: 1.5rem; margin-bottom: 0.75rem; }
                .wysiwyg-editor li   { margin-bottom: 0.25rem; line-height: 1.7; }
                .wysiwyg-editor blockquote { border-left: 4px solid #f97316; padding-left: 1rem; margin: 1rem 0; font-style: italic; color: #94a3b8; }
                .wysiwyg-editor code { background: #1e293b; color: #fb923c; border-radius: 4px; padding: 0.1em 0.4em; font-family: monospace; font-size: 0.9em; }
                .wysiwyg-editor pre  { background: #020617; border: 1px solid #1e293b; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0; overflow-x: auto; }
                .wysiwyg-editor pre code { background: none; color: #94a3b8; }
                .wysiwyg-editor hr   { border: none; border-top: 1px solid #1e293b; margin: 1.5rem 0; }
              `}</style>
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Immagine di Copertina</label>
              {!formData.imageUrl ? (
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center bg-slate-950/50 hover:border-brand-500 transition-all group">
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                  <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center w-full">
                    <Upload className="w-8 h-8 text-slate-500 group-hover:text-brand-500 mb-2 transition-colors" />
                    <span className="text-sm text-slate-400 group-hover:text-slate-200">Clicca per caricare un'immagine</span>
                    <span className="text-xs text-slate-600 mt-1">PNG, JPG fino a 5MB</span>
                  </label>
                  <div className="flex items-center w-full mt-4 mb-4">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <span className="px-3 text-xs text-slate-500 uppercase">oppure usa URL</span>
                    <div className="h-px bg-slate-800 flex-1"></div>
                  </div>
                  <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:border-brand-500 outline-none"
                    placeholder="https://..." />
                </div>
              ) : (
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-slate-700 group">
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={handleRemoveImage} className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center backdrop-blur transition-all">
                      <X className="w-4 h-4 mr-2" /> Rimuovi
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Read time + Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tempo Lettura</label>
                <input type="text" name="readTime" value={formData.readTime} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Data</label>
                <div className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed">{currentDate}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tags (virgola)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 outline-none transition-colors"
                  placeholder="Tech, React, AI" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-4">
              <button onClick={handlePreview}
                className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.title}>
                <ImageIcon className="w-5 h-5 mr-2" />Anteprima Post
              </button>
              <button onClick={handleCopyCode}
                className={`flex-1 inline-flex items-center justify-center px-6 py-4 rounded-lg font-bold transition-all border disabled:opacity-50 disabled:cursor-not-allowed ${copied ? 'bg-brand-500/10 text-brand-500 border-brand-500' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'}`}
                disabled={!formData.title}>
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copiato!' : 'Copia Codice Post'}
              </button>
            </div>
            <button onClick={handleDownloadJSON}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold transition-all shadow-lg shadow-green-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.title}>
              <Download className="w-5 h-5 mr-2" />Scarica File posts.json Completo (Consigliato)
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-brand-900/10 border border-brand-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-brand-500 font-bold mb-2">Due Metodi di Aggiornamento</h4>
                <div className="mb-4">
                  <strong className="text-white block mb-1">Metodo 1: Scarica File (Consigliato)</strong>
                  <p className="text-sm text-slate-300">Scarica il file <code className="bg-slate-800 px-1 rounded text-brand-400">posts.json</code> completo e sovrascrivi quello esistente nella cartella del sito (FTP).</p>
                </div>
                <div>
                  <strong className="text-white block mb-1">Metodo 2: Copia Codice</strong>
                  <p className="text-sm text-slate-300">Copia solo il codice del nuovo post e incollalo nel file <code className="bg-slate-800 px-1 rounded text-brand-400">posts.json</code> esistente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostGenerator;