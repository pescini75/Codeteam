import React, { useState } from 'react';
import { ArrowLeft, Download, Info, PlusCircle, Send, Upload, X, Image as ImageIcon, Copy, Check, FileJson } from 'lucide-react';
import { BlogPost } from '../types';

interface PostGeneratorProps {
  onBack: () => void;
  onAddPost?: (post: BlogPost) => void;
  existingPosts?: BlogPost[];
}

const PostGenerator: React.FC<PostGeneratorProps> = ({ onBack, onAddPost, existingPosts = [] }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    readTime: '5 min',
    tags: ''
  });

  // Calculate next ID robustly
  const nextId = existingPosts.length > 0 
    ? Math.max(...existingPosts.map(p => p.id)) + 1 
    : 1;

  const currentDate = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const createNewPostObject = (): BlogPost => {
    return {
        id: nextId,
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
        date: currentDate,
        readTime: formData.readTime,
        tags: getTagsArray()
    };
  };

  const handleDownloadJSON = () => {
    const newPost = createNewPostObject();
    // Create a new array with all existing posts PLUS the new one
    const updatedPosts = [...existingPosts, newPost];
    
    // Create JSON blob
    const jsonString = JSON.stringify(updatedPosts, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "posts.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = () => {
    const newPost = createNewPostObject();
    // Generates a JSON snippet for the single post, ready to be pasted into an array
    const codeString = JSON.stringify(newPost, null, 2) + ",";
    
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreview = () => {
      if (!onAddPost) return;
      onAddPost(createNewPostObject());
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
            <p className="text-slate-400">Compila i campi. Puoi scaricare l'intero file aggiornato o copiare il codice del singolo post.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="col-span-full">
              <label className="block text-sm font-medium text-slate-300 mb-2">Titolo Articolo</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                placeholder="Es: L'evoluzione dell'AI nel 2024"
              />
            </div>

            <div className="col-span-full">
               <label className="block text-sm font-medium text-slate-300 mb-2">Breve Descrizione (Excerpt)</label>
               <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                placeholder="Una o due frasi di riassunto..."
              />
            </div>

            <div className="col-span-full">
               <label className="block text-sm font-medium text-slate-300 mb-2">Contenuto (Supporta invio a capo)</label>
               <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={6}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors font-mono text-sm"
                placeholder="Scrivi qui il contenuto completo dell'articolo..."
              />
            </div>

            {/* Image Upload Section */}
            <div className="col-span-full">
              <label className="block text-sm font-medium text-slate-300 mb-2">Immagine di Copertina</label>
              
              {!formData.imageUrl ? (
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-950/50 hover:bg-slate-950 hover:border-brand-500 transition-all group">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                      id="image-upload"
                    />
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

                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:border-brand-500 outline-none"
                        placeholder="https://..."
                    />
                </div>
              ) : (
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-slate-700 group">
                    <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={handleRemoveImage}
                          className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center backdrop-blur transition-all"
                        >
                            <X className="w-4 h-4 mr-2" /> Rimuovi
                        </button>
                    </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tempo Lettura</label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Data</label>
                  <div className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed">
                    {currentDate}
                  </div>
               </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium text-slate-300 mb-2">Tags (separati da virgola)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                placeholder="Tech, React, AI"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-4">
                  <button
                    onClick={handlePreview}
                    className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!formData.title || !formData.content}
                  >
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Anteprima
                  </button>

                  <button
                    onClick={handleCopyCode}
                    className={`flex-1 inline-flex items-center justify-center px-6 py-4 rounded-lg font-bold transition-all border disabled:opacity-50 disabled:cursor-not-allowed ${
                      copied 
                      ? 'bg-brand-500/10 text-brand-500 border-brand-500' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                    }`}
                    disabled={!formData.title || !formData.content}
                  >
                    {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                    {copied ? 'Copiato!' : 'Copia Codice Post'}
                  </button>
              </div>
              
              <button
                onClick={handleDownloadJSON}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold transition-all shadow-lg shadow-green-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.title || !formData.content}
              >
                <Download className="w-5 h-5 mr-2" />
                Scarica File posts.json Completo (Consigliato)
              </button>
          </div>

          {/* Instructions Box */}
          <div className="bg-brand-900/10 border border-brand-500/30 rounded-xl p-6 relative">
             <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="text-brand-500 font-bold mb-2">Due Metodi di Aggiornamento</h4>
                    
                    <div className="mb-4">
                        <strong className="text-white block mb-1">Metodo 1: Scarica File (Consigliato)</strong>
                        <p className="text-sm text-slate-300">
                            Scarica il file <code>posts.json</code> completo e sovrascrivi quello esistente nella cartella principale del sito (FTP).
                        </p>
                    </div>

                    <div>
                        <strong className="text-white block mb-1">Metodo 2: Copia Codice</strong>
                        <p className="text-sm text-slate-300">
                            Copia solo il codice del nuovo post e incollalo manualmente dentro il file <code>posts.json</code> esistente (ricorda di aggiungere una virgola se necessario).
                        </p>
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