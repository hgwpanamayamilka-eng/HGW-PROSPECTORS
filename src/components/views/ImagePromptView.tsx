import React, { useState, useEffect } from 'react';
import { 
  ImageIcon, 
  Sparkles, 
  Copy, 
  Check, 
  Layers, 
  ShieldCheck, 
  AlertOctagon, 
  Eye, 
  ExternalLink,
  Sliders,
  CheckCircle2,
  Lock,
  User,
  Users,
  Share2,
  Bot,
  Zap,
  FolderOpen
} from 'lucide-react';
import { Product, ImageFormat, ImagePromptConfig } from '../../types';
import { buildMasterImagePrompt } from '../../lib/prompts/imagePrompts';

interface ImagePromptViewProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
}

export const ImagePromptView: React.FC<ImagePromptViewProps> = ({
  products,
  selectedProduct,
  onSelectProduct
}) => {
  const currentProduct = selectedProduct || products[0];

  const availableStyles = [
    'FOTOGRAFÍA PUBLICITARIA COMERCIAL',
    'ESTUDIO ELEGANTE',
    'COMPOSICIÓN DE IMPACTO',
    'ESTILO DE VIDA Y BIENESTAR',
    'MINIMALISTA PREMIUM',
    'NATURALEZA Y FRESCURA',
    'CIENCIA Y BOTÁNICA',
    'EDITORIAL DE REVISTA DE SALUD',
    'COLORES VIBRANTES',
    'ILUMINACIÓN CINEMATOGRÁFICA',
    'VISUAL PARA INSTAGRAM / TIKTOK',
    'PROMOCIONAL DE TEMPORADA',
    'ANUNCIO PARA CONVERSIÓN'
  ];

  const personasPresets = [
    'Mujer moderna sonriente disfrutando de su rutina matutina saludable en un espacio luminoso',
    'Persona activa o deportista con energía y vitalidad, demostrando bienestar físico',
    'Emprendedor / Líder de negocios HGW en ambiente profesional con laptop y agenda',
    'Familia saludable y alegre compartiendo en un hogar moderno y cálido',
    'Adulto maduro con postura erguida y sonrisa, transmitiendo confort y vitalidad',
    'Mujer elegante con piel radiante y aspecto fresco y natural'
  ];

  const [config, setConfig] = useState<ImagePromptConfig>({
    productId: currentProduct.id,
    format: '1:1',
    styles: ['FOTOGRAFÍA PUBLICITARIA COMERCIAL', 'ESTUDIO ELEGANTE', 'NATURALEZA Y FRESCURA'],
    ambiente: 'Escenario de estudio de lujo con pedestal de mármol, luz cenital suave y elementos botánicos relacionados',
    publico: 'Consumidores de bienestar, emprendedores y personas orientadas a la salud natural',
    textoEnImagen: currentProduct.nombre,
    ctaTexto: 'Pruébalo Hoy',
    cantidadProductos: '1 unidad principal al centro',
    incluirPersonas: true,
    tipoPersona: 'Mujer moderna sonriente disfrutando de su rutina matutina saludable en un espacio luminoso',
    driveUrl: currentProduct.driveUrl || currentProduct.imagen
  });

  const [copiedEnglish, setCopiedEnglish] = useState(false);
  const [copiedSpanish, setCopiedSpanish] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedDrive, setCopiedDrive] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Synchronize config when selected product changes
  useEffect(() => {
    if (selectedProduct) {
      setConfig(prev => ({
        ...prev,
        productId: selectedProduct.id,
        textoEnImagen: selectedProduct.nombre,
        driveUrl: selectedProduct.driveUrl || selectedProduct.imagen
      }));
    }
  }, [selectedProduct]);

  const toggleStyle = (style: string) => {
    if (config.styles.includes(style)) {
      setConfig({ ...config, styles: config.styles.filter(s => s !== style) });
    } else {
      setConfig({ ...config, styles: [...config.styles, style] });
    }
  };

  const handleProductChange = (productId: string) => {
    const prod = products.find(p => p.id === productId);
    if (prod) {
      onSelectProduct(prod);
      setConfig({
        ...config,
        productId: prod.id,
        textoEnImagen: prod.nombre,
        driveUrl: prod.driveUrl || prod.imagen
      });
    }
  };

  const promptResult = buildMasterImagePrompt(currentProduct, config);

  const copyToClipboardWithToast = (text: string, notice: string) => {
    navigator.clipboard.writeText(text);
    setActionNotice(notice);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const copyEnglish = () => {
    navigator.clipboard.writeText(promptResult.promptEnglish);
    setCopiedEnglish(true);
    setTimeout(() => setCopiedEnglish(false), 2000);
  };

  const copySpanish = () => {
    navigator.clipboard.writeText(promptResult.promptSpanish);
    setCopiedSpanish(true);
    setTimeout(() => setCopiedSpanish(false), 2000);
  };

  const copyNegative = () => {
    navigator.clipboard.writeText(promptResult.negativePrompt);
    setCopiedNegative(true);
    setTimeout(() => setCopiedNegative(false), 2000);
  };

  const copyDriveUrl = () => {
    if (currentProduct.driveUrl) {
      navigator.clipboard.writeText(currentProduct.driveUrl);
      setCopiedDrive(true);
      setTimeout(() => setCopiedDrive(false), 2000);
    }
  };

  const launchChatGPT = () => {
    const fullText = `${promptResult.promptSpanish}\n\n[IMAGEN DE REFERENCIA DEL PRODUCTO EN GOOGLE DRIVE]: ${currentProduct.driveUrl || currentProduct.imagen}`;
    copyToClipboardWithToast(fullText, '¡Prompt copiado al portapapeles! Abriendo ChatGPT...');
    window.open('https://chatgpt.com/', '_blank');
  };

  const launchGemini = () => {
    const fullText = `${promptResult.promptSpanish}\n\n[IMAGEN DE REFERENCIA DEL PRODUCTO EN GOOGLE DRIVE]: ${currentProduct.driveUrl || currentProduct.imagen}`;
    copyToClipboardWithToast(fullText, '¡Prompt copiado al portapapeles! Abriendo Google Gemini...');
    window.open('https://gemini.google.com/app', '_blank');
  };

  const launchIdeogram = () => {
    copyToClipboardWithToast(promptResult.promptEnglish, '¡Prompt en inglés copiado! Abriendo Ideogram AI...');
    window.open('https://ideogram.ai/', '_blank');
  };

  const launchMidjourney = () => {
    copyToClipboardWithToast(promptResult.promptEnglish, '¡Prompt en inglés copiado! Abriendo Midjourney...');
    window.open('https://www.midjourney.com/app/', '_blank');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Toast Notice */}
      {actionNotice && (
        <div className="fixed top-5 right-5 z-50 bg-[#0B3D2E] text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-400/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 text-xs sm:text-sm font-semibold">
          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-emerald-700" />
            Generador de Prompts para Imágenes Publicitarias
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Crea composiciones de alto impacto con personas reales y máxima fidelidad del producto para Midjourney, ChatGPT DALL-E 3, Gemini e Ideogram
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Fidelidad de Empaque & Marca Bloqueada</span>
        </div>
      </div>

      {/* Quick AI Launch Action Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0B3D2E] to-slate-900 p-4 rounded-2xl text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-white">Lanzador Directo a Herramientas de IA</h3>
            <p className="text-xs text-emerald-200/80">Copia el prompt maestro y abre la plataforma seleccionada con un solo clic</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <button
            id="btn-launch-chatgpt"
            onClick={launchChatGPT}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#10A37F] hover:bg-[#0E8A6C] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt y abrir ChatGPT"
          >
            <Bot className="w-4 h-4" />
            <span>Abrir ChatGPT</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
            id="btn-launch-gemini"
            onClick={launchGemini}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt y abrir Google Gemini"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Abrir Gemini</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
            id="btn-launch-ideogram"
            onClick={launchIdeogram}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt en inglés y abrir Ideogram"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Ideogram AI</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
            id="btn-launch-midjourney"
            onClick={launchMidjourney}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer border border-slate-700"
            title="Copiar prompt en inglés y abrir Midjourney"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Midjourney</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Column: Configuration Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            
            {/* Product Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Producto Base (Referencia Visual)
              </label>
              <select
                id="select-image-product"
                value={currentProduct.id}
                onChange={(e) => handleProductChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre} ({p.categoria})
                  </option>
                ))}
              </select>
            </div>

            {/* Product Visual Reference Display with Google Drive Link */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-lg p-1.5 border border-slate-200 flex items-center justify-center shrink-0">
                  <img
                    src={currentProduct.imagen}
                    alt={currentProduct.nombre}
                    className="max-h-16 max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs space-y-1 flex-1">
                  <span className="font-bold text-slate-900 block line-clamp-1">{currentProduct.nombre}</span>
                  <span className="text-slate-500 block">{currentProduct.presentacion}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Empaque y logo protegidos
                  </span>
                </div>
              </div>

              {/* Google Drive Link Box */}
              {currentProduct.driveUrl && (
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 truncate">
                    <FolderOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate font-mono text-[11px]">{currentProduct.driveUrl}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={copyDriveUrl}
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded text-[10px] flex items-center gap-1 transition"
                      title="Copiar enlace de Google Drive"
                    >
                      {copiedDrive ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedDrive ? 'Copiado' : 'Copiar'}</span>
                    </button>
                    <a
                      href={currentProduct.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition"
                      title="Abrir imagen en Google Drive"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* PEOPLE INCLUSION SECTION (Requested by User) */}
            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span>Incluir Personas Relacionadas al Copy</span>
                </label>
                <input
                  type="checkbox"
                  id="toggle-incluir-personas"
                  checked={config.incluirPersonas ?? true}
                  onChange={(e) => setConfig({ ...config, incluirPersonas: e.target.checked })}
                  className="w-4 h-4 accent-[#0B3D2E] rounded cursor-pointer"
                />
              </div>

              {config.incluirPersonas && (
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] text-emerald-900 font-semibold block">
                    Selecciona o personaliza el perfil de persona/modelo:
                  </span>
                  <div className="space-y-1.5">
                    {personasPresets.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setConfig({ ...config, tipoPersona: preset })}
                        className={`w-full text-left text-[11px] p-2 rounded-lg transition border leading-snug flex items-start gap-2 ${
                          config.tipoPersona === preset
                            ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] font-medium shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <User className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{preset}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-1">
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">
                      O describe tu propio perfil de persona:
                    </label>
                    <input
                      type="text"
                      value={config.tipoPersona || ''}
                      onChange={(e) => setConfig({ ...config, tipoPersona: e.target.value })}
                      placeholder="Ej. Joven profesional tomando café en terraza moderna..."
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Aspect Ratio Format */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Formato de Aspecto (Canvas)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, format: '1:1' })}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-2 ${
                    config.format === '1:1'
                      ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-md border-2 border-current flex items-center justify-center text-[10px]">
                    1:1
                  </div>
                  <span>Cuadrado 1:1</span>
                  <span className="text-[10px] opacity-80 font-normal">Feed Instagram / WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, format: '9:16' })}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-2 ${
                    config.format === '9:16'
                      ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="w-5 h-8 rounded-md border-2 border-current flex items-center justify-center text-[10px]">
                    9:16
                  </div>
                  <span>Vertical 9:16</span>
                  <span className="text-[10px] opacity-80 font-normal">Reels / TikTok / Stories</span>
                </button>
              </div>
            </div>

            {/* Visual Styles Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
                <span>Estilos Visuales ({config.styles.length} seleccionados)</span>
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1 border border-slate-100 rounded-xl">
                {availableStyles.map((style) => {
                  const isChecked = config.styles.includes(style);
                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => toggleStyle(style)}
                      className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition ${
                        isChecked
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}
                      {style}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Environment Prompt Customizer */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Ambiente / Entorno Sugerido
              </label>
              <input
                type="text"
                value={config.ambiente || ''}
                onChange={(e) => setConfig({ ...config, ambiente: e.target.value })}
                placeholder="Ej. Estudio de lujo con pedestal, hojas frescas y luz suave..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

          </div>

          {/* Golden Rules Reminder */}
          <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80 text-xs space-y-2">
            <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Reglas de Oro del Prompt Maestro
            </h4>
            <ul className="space-y-1 text-emerald-800 text-[11px]">
              <li>✓ Enlace de imagen original de Google Drive incluido para alimentar el generador.</li>
              <li>✓ Personas y modelos integrados de forma armónica con el copy y producto.</li>
              <li>✓ Fondo a sangrado completo (Full Bleed), iluminación comercial realista.</li>
              <li>✓ Prohibido rediseñar o sustituir el envase del producto original HGW.</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Generated Master Prompts & Copy Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Spanish Master Prompt Box (Optimized for ChatGPT and Gemini) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10A37F]"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt Maestro en Español (Para ChatGPT y Google Gemini)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copySpanish}
                  className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95"
                >
                  {copiedSpanish ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  <span>{copiedSpanish ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto border border-slate-800">
              {promptResult.promptSpanish}
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 gap-2">
              <span>Formato: <strong>{promptResult.format}</strong></span>
              <span className="text-emerald-700 font-semibold">Incluye enlace Google Drive e instrucciones de personas</span>
            </div>
          </div>

          {/* Main English Prompt Box (Midjourney / Ideogram / DALL-E 3) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt en Inglés (Midjourney / DALL-E 3 / Ideogram)
                </h3>
              </div>
              <button
                onClick={copyEnglish}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition"
              >
                {copiedEnglish ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEnglish ? '¡Copiado!' : 'Copiar Inglés'}</span>
              </button>
            </div>

            <div className="bg-slate-50 text-slate-800 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap border border-slate-200 max-h-60 overflow-y-auto">
              {promptResult.promptEnglish}
            </div>
          </div>

          {/* Negative Prompt Box */}
          <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900">
                  Prompt Negativo (Negative Prompt)
                </h4>
              </div>
              <button
                onClick={copyNegative}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1"
              >
                {copiedNegative ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedNegative ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
            <p className="font-mono text-xs text-rose-800 bg-white/80 p-2.5 rounded-xl border border-rose-200">
              {promptResult.negativePrompt}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
