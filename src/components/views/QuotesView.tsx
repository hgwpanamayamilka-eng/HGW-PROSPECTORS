import React, { useState } from 'react';
import { 
  Quote as QuoteIcon, 
  Sparkles, 
  Copy, 
  Check, 
  ImageIcon, 
  Share2, 
  Filter, 
  RefreshCw,
  Code,
  Layers,
  User,
  Globe,
  Phone,
  Sliders
} from 'lucide-react';
import { QuoteCategory, ImageFormat, GeneratedQuote, QuoteBrandConfig, ContactData } from '../../types';
import { generate30Quotes, buildMasterQuotePrompt } from '../../lib/prompts/quotePrompts';

interface QuotesViewProps {
  contact?: ContactData;
}

export const QuotesView: React.FC<QuotesViewProps> = ({ contact }) => {
  const [selectedCategory, setSelectedCategory] = useState<QuoteCategory>('Emprendimiento');
  const [selectedFormat, setSelectedFormat] = useState<ImageFormat>('1:1');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [brandConfig, setBrandConfig] = useState<QuoteBrandConfig>({
    nombre: contact?.nombre || 'Yamilka Batista',
    profesion: 'Líder & Mentora HGW',
    redSocial: '@yamilka.hgw',
    enlaceContacto: contact?.enlaceWhatsapp || (contact?.whatsapp ? `wa.me/${contact.whatsapp.replace(/\D/g, '')}` : 'wa.me/50767603578'),
    incluirMarca: true
  });

  const [showBrandControls, setShowBrandControls] = useState(true);

  const categories: QuoteCategory[] = [
    'Emprendimiento',
    'Éxito',
    'Disciplina',
    'Liderazgo',
    'Gratitud',
    'Ventas',
    'Bienestar',
    'Superación'
  ];

  const quotes = generate30Quotes(selectedCategory, selectedFormat, brandConfig);

  const filteredQuotes = quotes.filter(q => 
    q.frase.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.emotion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyQuoteText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyPromptText = (prompt: string, index: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptIndex(index);
    setTimeout(() => setCopiedPromptIndex(null), 2000);
  };

  const copyAll30Quotes = () => {
    const fullText = quotes.map(q => `========================================\nFRASE #${q.numero} [${q.categoria} · ${q.emotion}]\n========================================\n"${q.frase}"\n\nPROMPT PARA IMAGEN (${q.formato}):\n${q.promptImagen}\n\n`).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <QuoteIcon className="w-6 h-6 text-emerald-700" />
            30 Frases & Motivación para Redes Sociales
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Colecciones de 30 frases de alto impacto con prompt publicitario visual integrado y personalización de marca
          </p>
        </div>

        <button
          onClick={copyAll30Quotes}
          className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs active:scale-95 self-start sm:self-auto"
        >
          {copiedAll ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
          <span>{copiedAll ? '¡30 Frases Copiadas!' : 'Copiar las 30 Frases & Prompts'}</span>
        </button>
      </div>

      {/* Brand Configuration Card (Requested by user) */}
      <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Personalización de Marca en las Imágenes de Frases
                {brandConfig.incluirMarca && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    Activa
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400">
                La IA incluirá tu nombre, profesión, red social y enlace de contacto en los prompts de imagen de las frases
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs text-slate-300 font-medium flex items-center gap-2 cursor-pointer">
              <span>Incluir en Prompts</span>
              <input
                type="checkbox"
                checked={brandConfig.incluirMarca}
                onChange={(e) => setBrandConfig({ ...brandConfig, incluirMarca: e.target.checked })}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </label>
            <button
              onClick={() => setShowBrandControls(!showBrandControls)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg transition border border-slate-700"
            >
              {showBrandControls ? 'Ocultar' : 'Editar Datos'}
            </button>
          </div>
        </div>

        {showBrandControls && brandConfig.incluirMarca && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800">
            {/* 1. Nombre */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-emerald-400" />
                <span>Nombre en la imagen *</span>
              </label>
              <input
                type="text"
                value={brandConfig.nombre}
                onChange={(e) => setBrandConfig({ ...brandConfig, nombre: e.target.value })}
                placeholder="Ej. Yamilka Batista"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* 2. Profesión / Rango */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Profesión / Rango</span>
              </label>
              <input
                type="text"
                value={brandConfig.profesion || ''}
                onChange={(e) => setBrandConfig({ ...brandConfig, profesion: e.target.value })}
                placeholder="Ej. Líder & Mentora HGW"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* 3. Red Social o Marca Personal */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                <Globe className="w-3 h-3 text-blue-400" />
                <span>Red Social o Marca</span>
              </label>
              <input
                type="text"
                value={brandConfig.redSocial || ''}
                onChange={(e) => setBrandConfig({ ...brandConfig, redSocial: e.target.value })}
                placeholder="Ej. @yamilka.hgw"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* 4. Enlace de Contacto (Opcional) */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#25D366]" />
                  <span>Enlace Contacto (Opcional)</span>
                </span>
                <span className="text-[10px] text-slate-400">Opcional</span>
              </label>
              <input
                type="text"
                value={brandConfig.enlaceContacto || ''}
                onChange={(e) => setBrandConfig({ ...brandConfig, enlaceContacto: e.target.value })}
                placeholder="Ej. wa.me/50767603578"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white font-mono placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>
        )}
      </div>

      {/* Categories & Format Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        
        {/* Category selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Categoría Temática
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                    isSelected
                      ? 'bg-[#0B3D2E] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Format Selector & Search */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Formato:</span>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setSelectedFormat('1:1')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedFormat === '1:1' ? 'bg-[#0B3D2E] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1:1 Cuadrado
              </button>
              <button
                onClick={() => setSelectedFormat('9:16')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedFormat === '9:16' ? 'bg-[#0B3D2E] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                9:16 Vertical
              </button>
            </div>
          </div>

          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Buscar en las 30 frases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

        </div>

      </div>

      {/* 30 Quotes Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredQuotes.map((q) => {
          const isCopied = copiedIndex === q.numero;
          const isPromptCopied = copiedPromptIndex === q.numero;
          const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`"${q.frase}" ✨ #HGW #Emprendimiento #Salud`)}`;

          return (
            <div
              key={q.numero}
              id={`quote-card-${q.numero}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-1 rounded-full">
                    <span>#{q.numero}</span>
                    <span>·</span>
                    <span>{q.emotion}</span>
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => copyQuoteText(q.frase, q.numero)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-[#0B3D2E] hover:bg-emerald-50 transition"
                      title="Copiar solo la frase"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={waShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-[#25D366] transition"
                      title="Compartir en WhatsApp"
                    >
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Phrase Typography */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="font-heading text-sm sm:text-base font-bold text-slate-900 leading-relaxed italic">
                    "{q.frase}"
                  </p>
                </div>

                {/* Visual Concept */}
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-700 block mb-0.5">Idea de Composición Visual:</span>
                  <p className="leading-relaxed">{q.visualIdea}</p>
                </div>

              </div>

              {/* Prompt for Image Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => copyPromptText(q.promptImagen, q.numero)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    isPromptCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isPromptCopied ? '¡Prompt de Imagen Copiado!' : `Copiar Prompt Imagen (${q.formato})`}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
