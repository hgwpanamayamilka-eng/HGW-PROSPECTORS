import React, { useState, useEffect } from 'react';
import { 
  LayoutTemplate, 
  Sparkles, 
  Eye, 
  Download, 
  Copy, 
  Check, 
  Code, 
  ExternalLink,
  Layers,
  Palette,
  ShieldCheck,
  Smartphone,
  Laptop
} from 'lucide-react';
import { Product, ContactData, LandingFormData } from '../../types';
import { buildChatGPTLandingPrompt, generateStandAloneLandingHTML } from '../../lib/prompts/landingPrompts';

interface LandingBuilderViewProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
  contact: ContactData;
}

export const LandingBuilderView: React.FC<LandingBuilderViewProps> = ({
  products,
  selectedProduct,
  onSelectProduct,
  contact
}) => {
  const currentProduct = selectedProduct || products[0];

  const [formData, setFormData] = useState<LandingFormData>({
    nombreProducto: currentProduct.nombre,
    categoria: currentProduct.categoria,
    descripcion: currentProduct.descripcion,
    beneficios: currentProduct.beneficios.join('\n• '),
    ingredientes: currentProduct.ingredientes.join(', '),
    presentacion: currentProduct.presentacion,
    precio: currentProduct.precio,
    precioAnterior: currentProduct.precio * 1.3,
    descuento: '30% Ahorro Especial',
    bv: currentProduct.BV,
    publicoObjetivo: 'Personas interesadas en salud natural, vitalidad y bienestar preventivo',
    nombreVendedor: contact.nombre,
    empresa: 'Health Green World (HGW)',
    codigoDistribuidor: contact.codigo,
    whatsapp: contact.whatsapp,
    linkWhatsapp: contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`,
    telefono: contact.whatsapp,
    email: contact.email || 'contacto@yamilkabatista.com',
    paginaWeb: 'https://hgw.yamilkabatista.com',
    ciudad: contact.ciudad || 'Ciudad de Panamá',
    pais: contact.pais || 'Panamá',
    enlaceReferido: contact.enlaceReferido || `https://hgwpanama.com/registro?ref=${contact.codigo}`,
    videoTutorialRegistro: contact.videoTutorialRegistro || '',
    videoOpcional1: contact.videoOpcional1 || '',
    videoOpcional2: contact.videoOpcional2 || '',
    ctaPrincipal: '👉 ORDENAR POR WHATSAPP CON DESCUENTO',
    ctaSecundario: '💬 CONSULTAR CON UN ASESOR',
    garantia: 'Garantía oficial de autenticidad HGW. Envío rápido y seguro.',
    tiempoPromocion: 'Oferta válida por tiempo limitado',
    testimonios: 'Más de 10,000 clientes satisfechos en Panamá y América Latina.',
    faqs: '¿Cómo se consume? ¿Tienen envíos a todo el país? ¿Cómo me afilio con el 30%-50% de descuento permanente?',
    colorPrincipal: '#0B3D2E',
    colorSecundario: '#D4AF37',
    estilo: 'SaaS Premium / E-commerce de Alto Nivel, limpio y Mobile First',
    imagenPrincipal: currentProduct.imagen,
    driveUrl: currentProduct.driveUrl || currentProduct.imagen
  });

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Update formData when product changes
  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        nombreProducto: selectedProduct.nombre,
        categoria: selectedProduct.categoria,
        descripcion: selectedProduct.descripcion,
        beneficios: selectedProduct.beneficios.join('\n• '),
        ingredientes: selectedProduct.ingredientes.join(', '),
        presentacion: selectedProduct.presentacion,
        precio: selectedProduct.precio,
        precioAnterior: selectedProduct.precio * 1.3,
        bv: selectedProduct.BV,
        imagenPrincipal: selectedProduct.imagen,
        driveUrl: selectedProduct.driveUrl || selectedProduct.imagen
      }));
    }
  }, [selectedProduct]);

  const handleProductSelectChange = (productId: string) => {
    const prod = products.find(p => p.id === productId);
    if (prod) {
      onSelectProduct(prod);
    }
  };

  const masterPrompt = buildChatGPTLandingPrompt(formData);
  const generatedHTML = generateStandAloneLandingHTML(formData);

  const copyPrompt = () => {
    navigator.clipboard.writeText(masterPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const copyHTML = () => {
    navigator.clipboard.writeText(generatedHTML);
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  };

  const downloadHTML = () => {
    const blob = new Blob([generatedHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `landing-${formData.nombreProducto.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <LayoutTemplate className="w-6 h-6 text-emerald-700" />
            Creador de Landing Pages de 29 Secciones
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Genera la página web completa y autónoma en HTML + Tailwind CSS lista para convertir prospectos
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs active:scale-95"
          >
            <Eye className="w-4 h-4 text-emerald-400" />
            <span>Vista Previa Interactiva</span>
          </button>

          <button
            onClick={downloadHTML}
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs active:scale-95"
          >
            <Download className="w-4 h-4 text-[#D4AF37]" />
            <span>Descargar index.html</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form Editor vs Live Actions */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Column: Form Setup (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Datos del Producto & Oferta Comercial
            </span>
            <span className="text-xs text-emerald-700 font-semibold">29 Secciones Automáticas</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Product Selector */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Cargar Producto del Catálogo
              </label>
              <select
                value={currentProduct.id}
                onChange={(e) => handleProductSelectChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre} (${p.precio.toFixed(2)} - {p.BV} BV)
                  </option>
                ))}
              </select>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nombre del Producto</label>
              <input
                type="text"
                value={formData.nombreProducto}
                onChange={(e) => setFormData({ ...formData, nombreProducto: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Categoría</label>
              <input
                type="text"
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Pricing Offer */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Precio de Oferta ($ USD)</label>
              <input
                type="number"
                step="0.01"
                value={formData.precio}
                onChange={(e) => setFormData({ ...formData, precio: parseFloat(e.target.value) || 0 })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Previous Price */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Precio Antes / Tachado ($ USD)</label>
              <input
                type="number"
                step="0.01"
                value={formData.precioAnterior}
                onChange={(e) => setFormData({ ...formData, precioAnterior: parseFloat(e.target.value) || 0 })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Distributor Contact Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Distribuidora Autorizada</label>
              <input
                type="text"
                value={formData.nombreVendedor}
                onChange={(e) => setFormData({ ...formData, nombreVendedor: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold"
              />
            </div>

            {/* Official Code */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Código de Socio HGW</label>
              <input
                type="text"
                value={formData.codigoDistribuidor}
                onChange={(e) => setFormData({ ...formData, codigoDistribuidor: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono font-bold"
              />
            </div>

            {/* WhatsApp */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp de Pedidos</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono"
              />
            </div>

            {/* Benefits */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Beneficios Principales</label>
              <textarea
                rows={3}
                value={formData.beneficios}
                onChange={(e) => setFormData({ ...formData, beneficios: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 leading-relaxed"
              />
            </div>

            {/* Referral Link */}
            <div className="sm:col-span-2 bg-amber-50/70 p-3 rounded-xl border border-amber-200 space-y-1">
              <label className="block text-xs font-bold text-amber-950">
                Enlace Oficial de Referido / Afiliación HGW
              </label>
              <input
                type="url"
                value={formData.enlaceReferido || ''}
                onChange={(e) => setFormData({ ...formData, enlaceReferido: e.target.value })}
                placeholder="https://hgwpanama.com/registro?ref=Yamilka507"
                className="w-full bg-white border border-amber-300 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-900"
              />
            </div>

            {/* Video Tutorial */}
            <div className="sm:col-span-2 space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                URL Video Tutorial: Cómo Crear la Cuenta HGW
              </label>
              <input
                type="url"
                value={formData.videoTutorialRegistro || ''}
                onChange={(e) => setFormData({ ...formData, videoTutorialRegistro: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-800"
              />
            </div>

          </div>

        </div>

        {/* Right Column: Prompt Master & Code Tools (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Quick Preview Card */}
          <div className="bg-gradient-to-br from-[#0B3D2E] to-slate-900 text-white p-5 rounded-2xl border border-emerald-500/30 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={formData.imagenPrincipal}
                  alt={formData.nombreProducto}
                  className="max-h-8 max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs text-emerald-300 font-bold block">{formData.nombreProducto}</span>
                <span className="text-[11px] text-slate-300">Oferta: ${formData.precio.toFixed(2)} USD</span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/90 leading-relaxed mb-4">
              La landing page incluirá el botón flotante de WhatsApp preconfigurado para contactar a <strong>{formData.nombreVendedor}</strong> (Cód: {formData.codigoDistribuidor}).
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Ver Demo Live</span>
              </button>
              <button
                onClick={downloadHTML}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition active:scale-95 border border-white/20"
              >
                <Download className="w-3.5 h-3.5 text-emerald-300" />
                <span>Guardar HTML</span>
              </button>
            </div>
          </div>

          {/* Master Prompt for ChatGPT */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-700" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Prompt Maestro para ChatGPT / Claude
                </h4>
              </div>
              <button
                onClick={copyPrompt}
                className="text-xs font-bold text-[#0B3D2E] hover:text-emerald-900 flex items-center gap-1"
              >
                {copiedPrompt ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPrompt ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            <div className="bg-slate-900 text-emerald-300 p-3.5 rounded-xl font-mono text-[11px] leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto border border-slate-800">
              {masterPrompt}
            </div>
          </div>

          {/* Standalone HTML block */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Código HTML Autocontenido
                </h4>
              </div>
              <button
                onClick={copyHTML}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
              >
                {copiedHTML ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedHTML ? '¡HTML Copiado!' : 'Copiar HTML'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Listo para alojar en Vercel, GitHub Pages, Netlify o cualquier hosting cPanel como index.html.
            </p>
          </div>

        </div>

      </div>

      {/* Interactive Modal Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-6xl h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
            
            {/* Top Toolbar */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-sm text-emerald-400">
                  Vista Previa en Vivo: {formData.nombreProducto}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">| HTML5 + Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Device switchers */}
                <div className="flex items-center bg-slate-800 p-1 rounded-xl">
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      previewDevice === 'desktop' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Laptop className="w-4 h-4" />
                    <span className="hidden sm:inline">Escritorio</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      previewDevice === 'mobile' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="hidden sm:inline">Móvil</span>
                  </button>
                </div>

                <button
                  onClick={downloadHTML}
                  className="bg-[#D4AF37] text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Descargar</span>
                </button>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-slate-400 hover:text-white font-bold p-1 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* iFrame Container */}
            <div className="flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <div 
                className={`h-full bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                  previewDevice === 'mobile' ? 'w-full max-w-sm border-8 border-slate-800' : 'w-full'
                }`}
              >
                <iframe
                  srcDoc={generatedHTML}
                  title="Landing Page Preview"
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
