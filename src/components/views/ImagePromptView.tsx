import React, { useState } from 'react';
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
  Lock
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

  const [config, setConfig] = useState<ImagePromptConfig>({
    productId: currentProduct.id,
    format: '1:1',
    styles: ['FOTOGRAFÍA PUBLICITARIA COMERCIAL', 'ESTUDIO ELEGANTE', 'NATURALEZA Y FRESCURA'],
    ambiente: 'Escenario de estudio de lujo con pedestal de mármol, luz cenital suave y elementos botánicos relacionados',
    publico: 'Consumidores de bienestar, emprendedores y personas orientadas a la salud natural',
    textoEnImagen: currentProduct.nombre,
    ctaTexto: 'Pruébalo Hoy',
    cantidadProductos: '1 unidad principal al centro'
  });

  const [copiedEnglish, setCopiedEnglish] = useState(false);
  const [copiedSpanish, setCopiedSpanish] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);

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
        textoEnImagen: prod.nombre
      });
    }
  };

  const promptResult = buildMasterImagePrompt(currentProduct, config);

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

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-emerald-700" />
            Generador de Prompts para Imágenes Publicitarias
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Crea composiciones de alto impacto para Midjourney, DALL-E 3, Ideogram o Imagen 3 con máxima fidelidad del producto
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Fidelidad de Empaque & Marca Bloqueada</span>
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

            {/* Product Visual Reference Display */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-lg p-1.5 border border-slate-200 flex items-center justify-center shrink-0">
                <img
                  src={currentProduct.imagen}
                  alt={currentProduct.nombre}
                  className="max-h-16 max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs space-y-1">
                <span className="font-bold text-slate-900 block">{currentProduct.nombre}</span>
                <span className="text-slate-500 block">{currentProduct.presentacion}</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Empaque y logo protegidos
                </span>
              </div>
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
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-1 border border-slate-100 rounded-xl">
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
              <li>✓ Fondo a sangrado completo (Full Bleed), sin bordes blancos.</li>
              <li>✓ Iluminación comercial realista y sombras naturales.</li>
              <li>✓ Prohibido rediseñar o sustituir el envase del producto original.</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Generated Master Prompts & Copy Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Main English Prompt Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt Maestro en Inglés (Midjourney, DALL-E 3, Ideogram)
                </h3>
              </div>
              <button
                onClick={copyEnglish}
                className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95"
              >
                {copiedEnglish ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                <span>{copiedEnglish ? '¡Copiado!' : 'Copiar Prompt'}</span>
              </button>
            </div>

            <div className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto border border-slate-800">
              {promptResult.promptEnglish}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Formato: <strong>{promptResult.format}</strong></span>
              <span>Listo para usar con imagen de referencia</span>
            </div>
          </div>

          {/* Spanish Master Prompt Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt en Español (Para ChatGPT, Gemini o Copilot)
                </h3>
              </div>
              <button
                onClick={copySpanish}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition"
              >
                {copiedSpanish ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSpanish ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            <div className="bg-slate-50 text-slate-800 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap border border-slate-200 max-h-48 overflow-y-auto">
              {promptResult.promptSpanish}
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
