import React, { useState, useEffect } from 'react';
import { 
  ImageIcon, 
  Sparkles, 
  Copy, 
  Check, 
  ShieldCheck, 
  AlertOctagon, 
  Eye, 
  ExternalLink,
  CheckCircle2, 
  Lock, 
  User, 
  Users, 
  Bot, 
  Zap, 
  FolderOpen,
  Phone,
  Globe,
  RotateCcw,
  Layout,
  Type,
  HelpCircle
} from 'lucide-react';
import { Product, ImageFormat, ImagePromptConfig, ContactData } from '../../types';
import { buildMasterImagePrompt } from '../../lib/prompts/imagePrompts';

interface ImagePromptViewProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
  contact?: ContactData;
}

export const ImagePromptView: React.FC<ImagePromptViewProps> = ({
  products,
  selectedProduct,
  onSelectProduct,
  contact
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

  const defaultTitlePresets = [
    `¡Descubre el Poder de ${currentProduct.nombre}!`,
    currentProduct.beneficios[0] ? `✨ ${currentProduct.beneficios[0]}` : '100% Orgánico, Certificado y Natural',
    currentProduct.beneficios[1] ? `🌿 ${currentProduct.beneficios[1]}` : 'Bienestar, Energía y Juventud con HGW',
    `¡Transforma tu Bienestar con ${currentProduct.nombre}!`,
    `Nutrición Pura y Resultados Reales (${currentProduct.presentacion})`
  ];

  const [config, setConfig] = useState<ImagePromptConfig>({
    productId: currentProduct.id,
    format: '1:1',
    styles: ['FOTOGRAFÍA PUBLICITARIA COMERCIAL', 'ESTUDIO ELEGANTE', 'NATURALEZA Y FRESCURA'],
    ambiente: 'Escenario de estudio de lujo con pedestal de mármol, luz cenital suave y elementos botánicos relacionados',
    publico: 'Consumidores de bienestar, emprendedores y personas orientadas a la salud natural',
    tituloImagen: `¡Descubre el Poder de ${currentProduct.nombre}!`,
    estiloTitulo: 'oro_lujo',
    textoEnImagen: currentProduct.nombre,
    ctaTexto: 'Pruébalo Hoy',
    cantidadProductos: '1 unidad principal al centro',
    incluirPersonas: true,
    tipoPersona: 'Mujer moderna sonriente disfrutando de su rutina matutina saludable en un espacio luminoso',
    driveUrl: currentProduct.driveUrl || currentProduct.imagen,
    incluirContacto: true,
    contactoNombre: contact?.nombre || 'Yamilka Batista',
    contactoTelefono: contact?.whatsapp || '67603578',
    contactoWeb: contact?.sitioWeb || 'https://hgw.yamilkabatista.com'
  });

  const [copiedEnglish, setCopiedEnglish] = useState(false);
  const [copiedSpanish, setCopiedSpanish] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedDrive, setCopiedDrive] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'prompts' | 'preview'>('prompts');

  // Synchronize config when selected product or contact changes
  useEffect(() => {
    if (selectedProduct) {
      setConfig(prev => ({
        ...prev,
        productId: selectedProduct.id,
        tituloImagen: prev.tituloImagen || `¡Descubre el Poder de ${selectedProduct.nombre}!`,
        textoEnImagen: selectedProduct.nombre,
        driveUrl: selectedProduct.driveUrl || selectedProduct.imagen
      }));
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (contact) {
      setConfig(prev => ({
        ...prev,
        contactoNombre: prev.contactoNombre || contact.nombre,
        contactoTelefono: prev.contactoTelefono || contact.whatsapp,
        contactoWeb: prev.contactoWeb || contact.sitioWeb || ''
      }));
    }
  }, [contact]);

  const toggleStyle = (style: string) => {
    if (config.styles.includes(style as any)) {
      setConfig({ ...config, styles: config.styles.filter(s => s !== style) });
    } else {
      setConfig({ ...config, styles: [...config.styles, style as any] });
    }
  };

  const handleProductChange = (productId: string) => {
    const p = products.find(prod => prod.id === productId);
    if (p) {
      onSelectProduct(p);
      setConfig(prev => ({
        ...prev,
        productId: p.id,
        tituloImagen: `¡Descubre el Poder de ${p.nombre}!`,
        textoEnImagen: p.nombre,
        driveUrl: p.driveUrl || p.imagen
      }));
    }
  };

  const masterPrompts = buildMasterImagePrompt(currentProduct, config);

  const copyToClipboard = (text: string, type: 'english' | 'spanish' | 'negative') => {
    navigator.clipboard.writeText(text);
    if (type === 'english') {
      setCopiedEnglish(true);
      setTimeout(() => setCopiedEnglish(false), 2000);
    } else if (type === 'spanish') {
      setCopiedSpanish(true);
      setTimeout(() => setCopiedSpanish(false), 2000);
    } else {
      setCopiedNegative(true);
      setTimeout(() => setCopiedNegative(false), 2000);
    }
    setActionNotice('¡Prompt copiado al portapapeles con éxito!');
    setTimeout(() => setActionNotice(null), 3000);
  };

  const copyDriveUrl = () => {
    if (currentProduct.driveUrl) {
      navigator.clipboard.writeText(currentProduct.driveUrl);
      setCopiedDrive(true);
      setTimeout(() => setCopiedDrive(false), 2000);
      setActionNotice('¡Enlace de Google Drive copiado!');
      setTimeout(() => setActionNotice(null), 3000);
    }
  };

  const resetContactToDefault = () => {
    if (contact) {
      setConfig(prev => ({
        ...prev,
        contactoNombre: contact.nombre,
        contactoTelefono: contact.whatsapp,
        contactoWeb: contact.sitioWeb || ''
      }));
      setActionNotice('Datos de contacto restablecidos a tu perfil oficial');
      setTimeout(() => setActionNotice(null), 2500);
    }
  };

  // Launch AI Tools
  const launchChatGPT = () => {
    navigator.clipboard.writeText(masterPrompts.promptSpanish);
    setActionNotice('Prompt en español copiado. Abriendo ChatGPT...');
    window.open('https://chatgpt.com', '_blank');
  };

  const launchGemini = () => {
    navigator.clipboard.writeText(masterPrompts.promptSpanish);
    setActionNotice('Prompt en español copiado. Abriendo Google Gemini...');
    window.open('https://gemini.google.com', '_blank');
  };

  const launchIdeogram = () => {
    navigator.clipboard.writeText(masterPrompts.promptEnglish);
    setActionNotice('Prompt en inglés copiado. Abriendo Ideogram AI...');
    window.open('https://ideogram.ai', '_blank');
  };

  const launchMidjourney = () => {
    navigator.clipboard.writeText(masterPrompts.promptEnglish);
    setActionNotice('Prompt en inglés copiado. Abriendo Midjourney / Discord...');
    window.open('https://discord.com/app', '_blank');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Toast Notification Banner */}
      {actionNotice && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#0B3D2E] text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-[#D4AF37] flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-bold">{actionNotice}</span>
        </div>
      )}

      {/* Header Banner with Launchers */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0B3D2E] to-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#D4AF37] text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
              Motor Visual HGW
            </span>
            <span className="text-xs text-emerald-300 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Empaque Protegido al 100%
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Generador de Prompts Maestros para Imágenes
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Crea imágenes publicitarias de alta conversión para ChatGPT, Google Gemini, Midjourney o Ideogram AI con título personalizado, datos de contacto integrados y respeto total al envase original.
          </p>
        </div>

        {/* Quick AI Launchers */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            id="btn-launch-chatgpt"
            onClick={launchChatGPT}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#10a37f] hover:bg-[#0d8568] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
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

      {/* Global Image Preservation Directive Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border-2 border-amber-400/40 rounded-2xl p-4 flex items-start gap-3.5 shadow-xs">
        <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-xs text-amber-950 uppercase tracking-wide">
              Directriz Maestra Global de Preservación Visual
            </span>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-300">
              Activa en toda la plataforma
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>La imagen original adjunta es la fuente visual absoluta:</strong> Todos los prompts maestros exigen estrictamente a la IA mantener el empaque, logotipo, colores y proporciones 100% idénticos al activo original, construyendo la composición publicitaria y modelos <em>alrededor</em> de la imagen, sin rediseñarla ni reinterpretarla.
          </p>
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
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
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded text-[10px] flex items-center gap-1 transition cursor-pointer"
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

            {/* ⭐️ IMAGE TITLE SECTION (REQUESTED BY USER: Añadir opción de ponerle título a las imágenes antes de enviar el prompt a ChatGPT o otra) */}
            <div className="bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-slate-900/5 p-4 rounded-xl border border-amber-300/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Type className="w-4 h-4 text-amber-700" />
                  <span>Título / Encabezado de la Imagen</span>
                </label>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                  Antes de Enviar a ChatGPT/IA
                </span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed">
                Este título se integrará en el prompt maestro y en la composición publicitaria para que la IA lo renderice con máxima legibilidad.
              </p>

              {/* Title Input */}
              <div>
                <input
                  type="text"
                  value={config.tituloImagen || ''}
                  onChange={(e) => setConfig({ ...config, tituloImagen: e.target.value })}
                  placeholder={`Ej. ¡Descubre el Poder de ${currentProduct.nombre}!`}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              {/* Quick Title Presets */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Sugerencias Rápidas de Títulos de Impacto:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {defaultTitlePresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setConfig({ ...config, tituloImagen: preset })}
                      className="text-[10px] font-medium bg-white hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 hover:border-amber-300 px-2 py-1 rounded-lg transition text-left cursor-pointer"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title Style Selector */}
              <div className="pt-2 border-t border-amber-200/60">
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                  Estilo Tipográfico del Título:
                </label>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold">
                  {[
                    { id: 'oro_lujo', label: 'Dorado Lujo HGW' },
                    { id: 'blanco_sombra', label: 'Blanco con Sombra' },
                    { id: 'esmeralda_moderno', label: 'Verde Esmeralda' }
                  ].map(st => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setConfig({ ...config, estiloTitulo: st.id as any })}
                      className={`p-2 rounded-lg border text-center transition cursor-pointer ${
                        config.estiloTitulo === st.id
                          ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PERSONAL BRAND & CONTACT INFORMATION SECTION (REQUESTED BY USER: Nombre, Profesión, Red Social o Marca Personal, Enlace de Contacto) */}
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-emerald-400" />
                  <span>Marca Personal & Contacto en la Imagen</span>
                </label>
                <input
                  type="checkbox"
                  id="toggle-incluir-contacto"
                  checked={config.incluirContacto ?? true}
                  onChange={(e) => setConfig({ ...config, incluirContacto: e.target.checked })}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
              </div>

              <div className="text-[11px] text-slate-300 bg-black/40 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Personaliza los datos que la IA debe renderizar en la insignia o marca de agua visual de la imagen publicitaria:
                </span>
              </div>

              {config.incluirContacto && (
                <div className="space-y-3 pt-1">
                  
                  {/* 1. Nombre que quiere que aparezca en la imagen */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <User className="w-3 h-3 text-emerald-400" />
                      <span>Nombre que aparecerá en la imagen *</span>
                    </label>
                    <input
                      type="text"
                      value={config.marcaNombre || config.contactoNombre || ''}
                      onChange={(e) => setConfig({ 
                        ...config, 
                        marcaNombre: e.target.value,
                        contactoNombre: e.target.value 
                      })}
                      placeholder="Ej. Yamilka Batista"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  {/* 2. Profesión / Rango */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Profesión / Rango / Título</span>
                    </label>
                    <input
                      type="text"
                      value={config.marcaProfesion || ''}
                      onChange={(e) => setConfig({ ...config, marcaProfesion: e.target.value })}
                      placeholder="Ej. Asesora de Salud & Bienestar o Líder Diamante HGW"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  {/* 3. Red Social o Marca Personal */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-blue-400" />
                      <span>Red Social o Marca Personal</span>
                    </label>
                    <input
                      type="text"
                      value={config.marcaRedSocial || ''}
                      onChange={(e) => setConfig({ ...config, marcaRedSocial: e.target.value })}
                      placeholder="Ej. @yamilka.hgw o Instagram / TikTok: @yamilkabatista"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  {/* 4. Enlace de Contacto (Opcional) */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#25D366]" />
                        <span>Enlace de Contacto / WhatsApp (Opcional)</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">Opcional</span>
                    </label>
                    <input
                      type="text"
                      value={config.marcaContacto || config.contactoTelefono || ''}
                      onChange={(e) => setConfig({ 
                        ...config, 
                        marcaContacto: e.target.value,
                        contactoTelefono: e.target.value 
                      })}
                      placeholder="Ej. +507 6760-3578 o wa.me/50767603578"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>

                  {contact && (
                    <button
                      type="button"
                      onClick={resetContactToDefault}
                      className="text-[10px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition cursor-pointer pt-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restablecer con mis datos de socia</span>
                    </button>
                  )}

                </div>
              )}
            </div>

            {/* PEOPLE INCLUSION SECTION */}
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
                        className={`w-full text-left text-xs p-2 rounded-lg border transition cursor-pointer flex items-start gap-2 ${
                          config.tipoPersona === preset
                            ? 'bg-emerald-100/90 text-emerald-950 border-emerald-400 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-emerald-600 font-bold shrink-0">{config.tipoPersona === preset ? '●' : '○'}</span>
                        <span className="line-clamp-2">{preset}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-1.5">
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      O describe un perfil específico personalizado:
                    </label>
                    <input
                      type="text"
                      value={config.tipoPersona || ''}
                      onChange={(e) => setConfig({ ...config, tipoPersona: e.target.value })}
                      placeholder="Ej. Pareja joven atlética bebiendo Berry Coffee en terraza..."
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Format Selection (1:1 or 9:16) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Relación de Aspecto / Formato
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, format: '1:1' })}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-2 cursor-pointer ${
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
                  className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-2 cursor-pointer ${
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
                  const isChecked = config.styles.includes(style as any);
                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => toggleStyle(style)}
                      className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer ${
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
              <li>✓ Título personalizado integrado antes de enviar a ChatGPT o Midjourney.</li>
              <li>✓ Datos de contacto integrados a la izquierda con fondo negro opaco al 65% y texto blanco con sombra.</li>
              <li>✓ Enlace de imagen original de Google Drive incluido para alimentar el generador.</li>
              <li>✓ Prohibido rediseñar o sustituir el envase del producto original HGW.</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Generated Master Prompts & Live Mockup Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Tab Navigation between Prompts and Mockup Visualizer */}
          <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('prompts')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'prompts'
                    ? 'bg-[#0B3D2E] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Prompts Maestros (IA)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-[#0B3D2E] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Previsualización del Diseño (Mockup)</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-400 pr-2 hidden sm:inline">
              Formato: {config.format}
            </span>
          </div>

          {/* MOCKUP PREVIEW TAB */}
          {activeTab === 'preview' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Layout className="w-4 h-4 text-emerald-700" />
                    <span>Simulación Visual de la Composición Publicitaria</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Así interpretarán Midjourney, ChatGPT o Ideogram la colocación del título, producto y tu tarjeta de contacto a la izquierda
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                  {config.format === '1:1' ? '1:1 Feed' : '9:16 Story/Reel'}
                </span>
              </div>

              {/* Canvas Container */}
              <div className="flex justify-center p-4 bg-slate-950/5 rounded-2xl border border-dashed border-slate-300">
                <div 
                  className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 ${
                    config.format === '1:1' 
                      ? 'w-full max-w-[420px] aspect-square' 
                      : 'w-full max-w-[340px] aspect-[9/16]'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #0B3D2E 0%, #1F7A5A 50%, #06241b 100%)'
                  }}
                >
                  {/* Background Artistic Lighting Bokeh */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.18),transparent_60%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

                  {/* Brand Watermark (Subtle Background) */}
                  <div className="absolute top-4 right-4 text-white/20 font-heading font-black text-2xl select-none">
                    HGW
                  </div>

                  {/* ⭐️ Top Section: Title / Headline (Rendered with high contrast and shadow) */}
                  <div className="relative z-10 text-center px-2 pt-2">
                    <h3 className={`font-heading font-black tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] ${
                      config.format === '1:1' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                    } ${
                      config.estiloTitulo === 'oro_lujo' 
                        ? 'text-[#D4AF37]' 
                        : config.estiloTitulo === 'esmeralda_moderno'
                        ? 'text-emerald-300'
                        : 'text-white'
                    }`}>
                      {config.tituloImagen || currentProduct.nombre}
                    </h3>
                    <p className="text-[10px] text-emerald-200/90 font-medium drop-shadow mt-0.5">
                      {currentProduct.categoria} · Health Green World
                    </p>
                  </div>

                  {/* Hero Product Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                    <img
                      src={currentProduct.imagen}
                      alt={currentProduct.nombre}
                      className="max-h-40 sm:max-h-48 w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transform hover:scale-105 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="mt-2 text-xs font-heading font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {currentProduct.nombre}
                    </span>
                  </div>

                  {/* Bottom Area: Contact Badge (Left) & Format Pill */}
                  <div className="relative z-20 flex items-end justify-between gap-2">
                    
                    {/* CONTACT INFORMATION BADGE AT THE LEFT (USER MANDATE: A LA IZQUIERDA CON FONDO NEGRO OPACIDAD 65% Y LETRA BLANCA CON SOMBRA) */}
                    {config.incluirContacto && (config.contactoNombre || config.contactoTelefono) ? (
                      <div 
                        className="max-w-[210px] sm:max-w-[230px] rounded-xl p-2.5 border border-white/20 shadow-2xl backdrop-blur-xs text-left"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.65)' // Fondo negro con 65% de opacidad exacto
                        }}
                      >
                        <div className="space-y-1 text-white">
                          {config.contactoNombre && (
                            <div className="flex items-center gap-1.5 font-heading font-bold text-xs leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                              <User className="w-3 h-3 text-[#D4AF37] shrink-0" />
                              <span className="truncate">{config.contactoNombre}</span>
                            </div>
                          )}

                          {config.contactoTelefono && (
                            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-emerald-300 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                              <Phone className="w-3 h-3 text-[#25D366] shrink-0" />
                              <span>{config.contactoTelefono}</span>
                            </div>
                          )}

                          {config.contactoWeb && (
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-200 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] pt-0.5 border-t border-white/15">
                              <Globe className="w-3 h-3 text-blue-300 shrink-0" />
                              <span className="truncate">{config.contactoWeb.replace(/^https?:\/\//, '')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : <div />}

                    {/* Format Indicator Pill */}
                    <div className="bg-black/50 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-1 rounded-md border border-white/10 shrink-0">
                      {config.format === '1:1' ? '1:1 Feed' : '9:16 Story'}
                    </div>

                  </div>

                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>¿Te gusta la distribución? Cambia a la pestaña de Prompts para copiar el texto para la IA.</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('prompts')}
                  className="px-3 py-1.5 bg-[#0B3D2E] text-white font-bold rounded-lg text-xs hover:bg-emerald-900 transition cursor-pointer"
                >
                  Ver Prompts
                </button>
              </div>
            </div>
          )}

          {/* SPANISH MASTER PROMPT BOX (OPTIMIZED FOR CHATGPT & GEMINI) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ES
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Prompt Maestro en Español
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Recomendado para ChatGPT Plus (DALL-E 3) y Google Gemini
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={launchChatGPT}
                  className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg transition flex items-center gap-1 cursor-pointer"
                  title="Copiar y abrir en ChatGPT"
                >
                  <Bot className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enviar a ChatGPT</span>
                </button>

                <button
                  type="button"
                  onClick={() => copyToClipboard(masterPrompts.promptSpanish, 'spanish')}
                  className="px-3.5 py-1.5 bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                >
                  {copiedSpanish ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSpanish ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 font-mono text-xs p-4 rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-72 border border-slate-800">
                {masterPrompts.promptSpanish}
              </pre>
            </div>
          </div>

          {/* ENGLISH MASTER PROMPT BOX (OPTIMIZED FOR MIDJOURNEY & IDEOGRAM) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                  EN
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Master Prompt in English (High Fidelity)
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Recomendado para Midjourney v6, Ideogram AI, Leonardo & Flux
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={launchIdeogram}
                  className="px-2.5 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold rounded-lg transition flex items-center gap-1 cursor-pointer"
                  title="Copiar y abrir en Ideogram"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-purple-600" />
                  <span>Ideogram</span>
                </button>

                <button
                  type="button"
                  onClick={() => copyToClipboard(masterPrompts.promptEnglish, 'english')}
                  className="px-3.5 py-1.5 bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                >
                  {copiedEnglish ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEnglish ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 font-mono text-xs p-4 rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-72 border border-slate-800">
                {masterPrompts.promptEnglish}
              </pre>
            </div>
          </div>

          {/* NEGATIVE PROMPT BOX */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                  <AlertOctagon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Negative Prompt (Filtro Anti-Deformaciones)
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Evita etiquetas falsas, envases genéricos y errores tipográficos
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(masterPrompts.negativePrompt, 'negative')}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition flex items-center gap-1.5 cursor-pointer"
              >
                {copiedNegative ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedNegative ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <pre className="bg-slate-50 text-slate-700 font-mono text-xs p-3.5 rounded-xl whitespace-pre-wrap leading-relaxed border border-slate-200">
              {masterPrompts.negativePrompt}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
};
