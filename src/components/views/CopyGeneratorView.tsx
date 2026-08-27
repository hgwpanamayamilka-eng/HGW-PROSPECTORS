import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Filter, 
  Code, 
  Layers, 
  Zap, 
  Share2,
  RefreshCw,
  Eye,
  ImageIcon,
  ShieldCheck,
  Target,
  HeartHandshake
} from 'lucide-react';
import { Product, CopyGenerationConfig, GeneratedCopy, ContactData, GeneratedImagePromptResult, ImageFormat } from '../../types';
import { buildMasterCopyPrompt, generateLocal30Copys } from '../../lib/prompts/copyPrompts';
import { buildMasterImagePromptForCopy } from '../../lib/prompts/imagePrompts';
import { MasterImagePromptModal } from '../modals/MasterImagePromptModal';

interface CopyGeneratorViewProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
  contact: ContactData;
}

export const CopyGeneratorView: React.FC<CopyGeneratorViewProps> = ({
  products,
  selectedProduct,
  onSelectProduct,
  contact
}) => {
  const currentProduct = selectedProduct || products[0];

  const [config, setConfig] = useState<CopyGenerationConfig>({
    productId: currentProduct.id,
    targetAudience: 'Personas interesadas en salud natural y bienestar',
    socialNetwork: 'WhatsApp & Instagram',
    objective: 'Venta Directa y Conversión a WhatsApp',
    tone: 'Persuasivo, Empático y Profesional',
    ctaType: 'Escríbeme por WhatsApp para pedidos y asesoría',
    length: 'Medio (Ideal para publicaciones y mensajes de difusión)'
  });

  const [copys, setCopys] = useState<GeneratedCopy[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Master Image Prompt Modal State
  const [selectedCopyForImage, setSelectedCopyForImage] = useState<GeneratedCopy | null>(null);
  const [imageModalFormat, setImageModalFormat] = useState<ImageFormat>('1:1');
  const [imagePromptResult, setImagePromptResult] = useState<GeneratedImagePromptResult | null>(null);

  // Synchronize config with selectedProduct changes
  useEffect(() => {
    if (selectedProduct && config.productId !== selectedProduct.id) {
      setConfig(prev => ({ ...prev, productId: selectedProduct.id }));
    }
  }, [selectedProduct]);

  // Generate initial local 30 copys on first load or when product changes
  useEffect(() => {
    if (copys.length === 0 || copys[0]?.hook.indexOf(currentProduct.nombre) === -1) {
      const initialCopys = generateLocal30Copys(currentProduct, config, contact);
      setCopys(initialCopys);
    }
  }, [currentProduct.id]);

  const handleProductChange = (productId: string) => {
    const prod = products.find(p => p.id === productId);
    if (prod) {
      onSelectProduct(prod);
      setConfig(prev => ({ ...prev, productId: prod.id }));
      const newCopys = generateLocal30Copys(prod, { ...config, productId: prod.id }, contact);
      setCopys(newCopys);
    }
  };

  const handleGenerateLocal = () => {
    const newCopys = generateLocal30Copys(currentProduct, config, contact);
    setCopys(newCopys);
  };

  const handleGenerateAI = async () => {
    setIsLoadingAI(true);
    try {
      const response = await fetch('/api/generate-copys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: currentProduct,
          config,
          contact
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.copys && Array.isArray(data.copys) && data.copys.length > 0) {
          setCopys(data.copys);
          setIsLoadingAI(false);
          return;
        }
      }
    } catch (e) {
      console.warn('Backend API fallback triggered, generating local 30 psychological copys:', e);
    }

    // Fallback to rich deterministic psychological generator
    setTimeout(() => {
      const fallbackCopys = generateLocal30Copys(currentProduct, config, contact);
      setCopys(fallbackCopys);
      setIsLoadingAI(false);
    }, 600);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAllCopys = () => {
    const fullText = copys.map(c => `========================================\nCOPY #${c.numero}: ${c.estrategia.toUpperCase()} (MÉTODO AIDA)\n========================================\n[A] ATENCIÓN: ${c.hook}\n\n[I] INTERÉS: ${c.interes || c.desarrollo}\n\n[D] DESEO: ${c.deseo || c.beneficio}\n\n[A] ACCIÓN (CTA): ${c.cta}\n\n${c.hashtags.join(' ')}\n\n`).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const masterPromptText = buildMasterCopyPrompt(currentProduct, config, contact);

  const copyMasterPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleOpenImagePrompt = (copy: GeneratedCopy) => {
    setSelectedCopyForImage(copy);
    const result = buildMasterImagePromptForCopy(currentProduct, copy, contact, imageModalFormat);
    setImagePromptResult(result);
  };

  const handleFormatChange = (format: ImageFormat) => {
    setImageModalFormat(format);
    if (selectedCopyForImage) {
      const result = buildMasterImagePromptForCopy(currentProduct, selectedCopyForImage, contact, format);
      setImagePromptResult(result);
    }
  };

  const filteredCopys = copys.filter(c => 
    c.estrategia.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.hook.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.desarrollo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-900 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Estructura AIDA · Atención · Interés · Deseo · Acción (CTA)</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-700" />
            Generador de 30 Copys con Método AIDA
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Copys de alta conversión con ganchos 100% enfocados, CTA a WhatsApp y generador de Prompt Master de Imagen IA
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPromptModal(true)}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold transition"
          >
            <Code className="w-4 h-4 text-slate-600" />
            <span>Prompt Maestro AIDA</span>
          </button>

          <button
            onClick={copyAllCopys}
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs active:scale-95"
          >
            {copiedAll ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
            <span>{copiedAll ? '¡30 Copys Copiados!' : 'Copiar los 30 Copys'}</span>
          </button>
        </div>
      </div>

      {/* Configuration Box */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Product Select */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Producto Seleccionado
            </label>
            <select
              value={currentProduct.id}
              onChange={(e) => handleProductChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} (${p.precio.toFixed(2)} - {p.BV} BV)
                </option>
              ))}
            </select>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Público Objetivo
            </label>
            <select
              value={config.targetAudience}
              onChange={(e) => setConfig({ ...config, targetAudience: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="Personas interesadas en salud natural y bienestar">Salud y bienestar general</option>
              <option value="Emprendedores y profesionales que buscan ingresos extras">Emprendedores y Prospección</option>
              <option value="Madres y familias preocupadas por el cuidado del hogar">Familias y Hogar</option>
              <option value="Adultos con fatiga, estrés o digestión lenta">Fatiga, estrés y digestión</option>
              <option value="Deportistas y personas activas">Deportistas y Vitalidad</option>
            </select>
          </div>

          {/* Social Network */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Red Social / Canal
            </label>
            <select
              value={config.socialNetwork}
              onChange={(e) => setConfig({ ...config, socialNetwork: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="WhatsApp & Instagram">WhatsApp & Instagram</option>
              <option value="Facebook Ads & Grupos">Facebook Ads & Grupos</option>
              <option value="TikTok & Reels (Guiones de Video)">TikTok & Reels</option>
              <option value="Estados de WhatsApp & Stories">Estados & Stories</option>
              <option value="Difusión privada para clientes">Difusión Privada</option>
            </select>
          </div>

          {/* Objective */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Objetivo de la Campaña
            </label>
            <select
              value={config.objective}
              onChange={(e) => setConfig({ ...config, objective: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="Venta Directa y Conversión a WhatsApp">Venta Directa a WhatsApp</option>
              <option value="Prospección de Nuevos Distribuidores">Prospección de Socios</option>
              <option value="Educación y Conciencia de Salud">Educación y Valor</option>
              <option value="Promoción de Fin de Mes / Descuentos">Promoción y Descuentos</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Tono de Comunicación
            </label>
            <select
              value={config.tone}
              onChange={(e) => setConfig({ ...config, tone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="Persuasivo, Empático y Profesional">Persuasivo & Profesional</option>
              <option value="Cercano, Amigable y Conversacional">Cercano & Amigable</option>
              <option value="Inspirador y de Alto Impacto">Inspirador & Liderazgo</option>
              <option value="Urgente con Oferta Especial">Urgente & Promocional</option>
            </select>
          </div>

          {/* Action trigger button */}
          <div className="flex items-end gap-2">
            <button
              onClick={handleGenerateAI}
              disabled={isLoadingAI}
              className="w-full bg-gradient-to-r from-[#0B3D2E] to-emerald-800 hover:from-emerald-900 hover:to-emerald-950 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
            >
              {isLoadingAI ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#D4AF37]" />
                  <span>Generando con IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Generar 30 Copys AIDA</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Live Filter by Psychological Strategy */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-800">{copys.length}</span> copys con Método AIDA generados para <strong>{currentProduct.nombre}</strong>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Filtrar por estrategia o gancho (ej. curiosidad, urgencia)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-80 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>
        </div>

      </div>

      {/* 30 Copys Cards Grid with AIDA breakdown and Master Image Prompt button */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredCopys.map((c) => {
          const isCopied = copiedIndex === c.numero;
          const fullCopyFormatted = `${c.hook}\n\n${c.interes || c.desarrollo}\n\n${c.deseo || c.beneficio}\n\n${c.cta}\n\n${c.hashtags.join(' ')}`;
          const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullCopyFormatted)}`;

          return (
            <div
              key={c.numero}
              id={`copy-card-${c.numero}`}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase bg-emerald-50 text-[#0B3D2E] border border-emerald-200/60 px-3 py-1 rounded-full">
                      <span>#{c.numero}</span>
                      <span>·</span>
                      <span>{c.estrategia}</span>
                    </span>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/60 px-2 py-0.5 rounded-md uppercase">
                      AIDA
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyToClipboard(fullCopyFormatted, c.numero)}
                      className="p-1.5 rounded-xl text-slate-500 hover:text-[#0B3D2E] hover:bg-emerald-50 transition"
                      title="Copiar este copy completo"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={waShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xl text-slate-500 hover:text-white hover:bg-[#25D366] transition"
                      title="Compartir directo a WhatsApp"
                    >
                      <Share2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* [A] ATENCIÓN (Hook) */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border-l-4 border-[#0B3D2E] border-y border-r border-slate-200/60 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-extrabold text-emerald-900 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                      [A] ATENCIÓN · HOOK
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug italic">
                    "{c.hook}"
                  </p>
                </div>

                {/* [I] INTERÉS */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                    [I] INTERÉS
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed pl-1">
                    {c.interes || c.desarrollo}
                  </p>
                </div>

                {/* [D] DESEO */}
                <div className="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100/80 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-900 bg-emerald-100 px-1.5 py-0.5 rounded inline-block">
                    [D] DESEO · BENEFICIOS TRANSFORMADORES
                  </span>
                  <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed pl-1">
                    {c.deseo || c.beneficio}
                  </p>
                </div>

                {/* [A] ACCIÓN (CTA) */}
                <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60 space-y-1">
                  <span className="text-[10px] uppercase font-extrabold text-amber-950 bg-amber-200/80 px-1.5 py-0.5 rounded inline-block">
                    [A] ACCIÓN · CTA PERSONALIZADO
                  </span>
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed whitespace-pre-line">
                    {c.cta}
                  </p>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {c.hashtags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Copy Copy + Prompt Master Image Button */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                
                {/* Button 1: Copy full copy */}
                <button
                  onClick={() => copyToClipboard(fullCopyFormatted, c.numero)}
                  className={`flex-1 w-full py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-[#0B3D2E] hover:bg-emerald-900 text-white shadow-xs'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Copiado con tu WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copiar Copy AIDA #{c.numero}</span>
                    </>
                  )}
                </button>

                {/* Button 2: Prompt Master Image Generator */}
                <button
                  onClick={() => handleOpenImagePrompt(c)}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300/80 transition flex items-center justify-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Crear Prompt Master de Imagen para este copy"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Prompt Master Imagen IA</span>
                </button>

              </div>

            </div>
          );
        })}
      </div>

      {/* Modal: View Raw Master Copy Prompt */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-700" />
                <h3 className="font-heading font-bold text-lg text-slate-900">Prompt Maestro AIDA para 30 Copys</h3>
              </div>
              <button
                onClick={() => setShowPromptModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="my-4 overflow-y-auto flex-1 bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {masterPromptText}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={copyMasterPrompt}
                className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-xs"
              >
                {copiedPrompt ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
                <span>{copiedPrompt ? '¡Prompt Copiado!' : 'Copiar Prompt Maestro'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Master Image Prompt Modal */}
      {selectedCopyForImage && imagePromptResult && (
        <MasterImagePromptModal
          isOpen={!!selectedCopyForImage}
          onClose={() => setSelectedCopyForImage(null)}
          title={`Prompt Master de Imagen: ${currentProduct.nombre}`}
          subtitle={`Basado en el Copy #${selectedCopyForImage.numero} (${selectedCopyForImage.estrategia})`}
          imagePromptResult={imagePromptResult}
          onFormatChange={handleFormatChange}
        />
      )}

    </div>
  );
};

