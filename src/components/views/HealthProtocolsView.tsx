import React, { useState } from 'react';
import { 
  HeartPulse, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  XCircle, 
  Code, 
  X, 
  Search, 
  ShoppingBag, 
  Clock, 
  Leaf, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Stethoscope,
  ImageIcon
} from 'lucide-react';
import { ContactData, GeneratedImagePromptResult, ImageFormat, Product } from '../../types';
import { 
  HealthProtocolType, 
  HealthProtocolInfo, 
  HEALTH_PROTOCOLS, 
  PROTOCOL_COPYS, 
  HealthProtocolCopy,
  buildHealthProtocolMasterPrompt 
} from '../../lib/prompts/healthProtocolPrompts';
import { HGW_PRODUCTS } from '../../data/products';
import { buildMasterImagePromptForProtocol } from '../../lib/prompts/imagePrompts';
import { MasterImagePromptModal } from '../modals/MasterImagePromptModal';

interface HealthProtocolsViewProps {
  contact: ContactData;
}

export const HealthProtocolsView: React.FC<HealthProtocolsViewProps> = ({ contact }) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<HealthProtocolType>('limpieza_colon');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMasterPromptModal, setShowMasterPromptModal] = useState(false);
  const [copiedMasterPrompt, setCopiedMasterPrompt] = useState(false);

  // Master Image Prompt Modal state
  const [selectedCopyForImage, setSelectedCopyForImage] = useState<HealthProtocolCopy | null>(null);
  const [imageModalFormat, setImageModalFormat] = useState<ImageFormat>('1:1');
  const [imagePromptResult, setImagePromptResult] = useState<GeneratedImagePromptResult | null>(null);

  const protocolsList = Object.values(HEALTH_PROTOCOLS);
  const currentProtocol: HealthProtocolInfo = HEALTH_PROTOCOLS[selectedProtocolId];

  const formatMessageWithContact = (rawMessage: string): string => {
    const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
    return rawMessage
      .replace(/\[WHATSAPP_LINK\]/g, waLink)
      .replace(/\[NOMBRE\]/g, contact.nombre)
      .replace(/\[CODIGO\]/g, contact.codigo)
      .replace(/\[PAIS\]/g, contact.pais || 'Panamá e Internacional');
  };

  const filteredCopys = PROTOCOL_COPYS.filter(c => {
    if (c.protocolId !== selectedProtocolId) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      c.title.toLowerCase().includes(q) ||
      c.hook.toLowerCase().includes(q) ||
      c.body.toLowerCase().includes(q) ||
      c.suggestedCombo.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  const handleCopyText = (text: string, id: string) => {
    const formatted = formatMessageWithContact(text);
    navigator.clipboard.writeText(formatted);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendWhatsApp = (text: string) => {
    const formatted = formatMessageWithContact(text);
    const url = `https://wa.me/?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
  };

  const masterPromptText = buildHealthProtocolMasterPrompt(currentProtocol, contact);

  const handleCopyMasterPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopiedMasterPrompt(true);
    setTimeout(() => setCopiedMasterPrompt(false), 2000);
  };

  // Find primary product for the protocol
  const findPrimaryProduct = (): Product => {
    const firstRec = currentProtocol.recommendedProducts[0]?.toLowerCase() || '';
    const found = HGW_PRODUCTS.find(p => firstRec.includes(p.nombre.toLowerCase()) || p.nombre.toLowerCase().includes(firstRec.split(' ')[0]));
    return found || HGW_PRODUCTS[0];
  };

  const handleOpenImagePrompt = (copy: HealthProtocolCopy) => {
    setSelectedCopyForImage(copy);
    const primaryProd = findPrimaryProduct();
    const result = buildMasterImagePromptForProtocol(
      currentProtocol.shortTitle,
      copy.angle,
      copy.suggestedCombo,
      primaryProd,
      contact,
      imageModalFormat
    );
    setImagePromptResult(result);
  };

  const handleFormatChange = (format: ImageFormat) => {
    setImageModalFormat(format);
    if (selectedCopyForImage) {
      const primaryProd = findPrimaryProduct();
      const result = buildMasterImagePromptForProtocol(
        currentProtocol.shortTitle,
        selectedCopyForImage.angle,
        selectedCopyForImage.suggestedCombo,
        primaryProd,
        contact,
        format
      );
      setImagePromptResult(result);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#0B3D2E] via-[#0F4C3A] to-[#08281F] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -top-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-[#D4AF37]">
              <Leaf className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Protocolos de Bienestar & Nutrición Celular HGW</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Protocolos de Salud Coadyuvante & Nutracéutica Ética
            </h2>
            
            <p className="text-sm text-slate-200 leading-relaxed">
              Guías nutricionales y copys especializados para: <strong>Limpieza de Colon, Cólicos Menstruales y Salud Femenina, Inflamación y Articulaciones, Salud Visual, Hígado, Riñones, Pulmones, Sistema Inmunológico y Desafíos Crónicos</strong> como coadyuvantes nutricionales, sin promesas médicas.
            </p>

            {/* Quick Distributor Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-emerald-200/90">
              <span className="bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                Asesora Oficial: <strong className="text-white">{contact.nombre}</strong>
              </span>
              <span className="bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                Código: <strong className="text-[#D4AF37]">{contact.codigo}</strong>
              </span>
              <span className="bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                WhatsApp: <strong className="text-white">{contact.whatsapp}</strong>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => setShowMasterPromptModal(true)}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#e5c04a] hover:to-[#d4af37] text-slate-950 font-bold px-5 py-3 rounded-2xl shadow-md transition active:scale-95 text-xs sm:text-sm"
            >
              <Code className="w-4 h-4 text-slate-950" />
              <span>Prompt Maestro IA de este Protocolo</span>
            </button>

            <div className="inline-flex items-center justify-center gap-2 bg-emerald-950/80 px-4 py-2 rounded-2xl border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Cumplimiento 100% Ético & Legal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Ethical Compliance Alert Banner */}
      <div className="bg-amber-500/10 border-2 border-amber-400/40 rounded-2xl p-4 flex items-start gap-3.5 shadow-xs">
        <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-slate-700 leading-relaxed">
          <span className="font-heading font-extrabold text-amber-950 uppercase tracking-wide block">
            Directriz Ética Obligatoria en Salud: Coadyuvantes sin Promesas de Curación
          </span>
          <p>
            Los productos de Health Green World son <strong>alimentos funcionales, suplementos nutricionales y complementos de confort físico</strong> que actúan como coadyuvantes en la nutrición celular. <strong>Queda estrictamente prohibido prometer curaciones mágicas, diagnósticos o sustitución de medicamentos</strong>. Todos los copys y prompts generados en esta sección respetan rigurosamente esta normativa.
          </p>
        </div>
      </div>

      {/* Protocol Selection Horizontal Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {protocolsList.map((proto) => {
          const isSelected = selectedProtocolId === proto.id;
          return (
            <button
              key={proto.id}
              onClick={() => setSelectedProtocolId(proto.id)}
              className={`p-3.5 rounded-2xl text-left border transition relative flex flex-col justify-between h-full space-y-2 ${
                isSelected
                  ? 'bg-[#0B3D2E] text-white border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/40'
                  : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{proto.iconText}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-emerald-900 text-[#D4AF37]' : 'bg-slate-100 text-slate-600'
                }`}>
                  {proto.badge}
                </span>
              </div>
              <div>
                <h4 className={`font-heading font-bold text-xs leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {proto.shortTitle}
                </h4>
                <p className={`text-[10px] line-clamp-1 mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>
                  {proto.focusArea}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Protocol Comprehensive Detail Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
        
        {/* Protocol Title & Focus */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentProtocol.iconText}</span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentProtocol.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              {currentProtocol.description}
            </p>
          </div>

          <button
            onClick={() => setShowMasterPromptModal(true)}
            className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300/80 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 self-start sm:self-auto"
          >
            <Code className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ver Prompt IA</span>
          </button>
        </div>

        {/* 3-Column Info Breakdown: Recommended Products, How to Use, & Permitted Claims */}
        <div className="grid md:grid-cols-3 gap-5">
          
          {/* 1. Recommended Products & Combo */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-heading font-bold text-sm">
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span>Productos HGW del Protocolo</span>
            </div>
            
            <ul className="space-y-2 text-xs text-slate-700">
              {currentProtocol.recommendedProducts.map((prod, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{prod}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-950">
              <strong>Combo Sugerido:</strong> {currentProtocol.productComboSummary}
            </div>
          </div>

          {/* 2. How to Use / Daily Routine */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm">
              <Clock className="w-4 h-4 text-slate-700" />
              <span>Modo de Consumo / Rutina</span>
            </div>
            
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentProtocol.howToUse}
            </p>

            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 italic">
              *Se recomienda mantener hábitos de alimentación balanceada y actividad física moderada.
            </div>
          </div>

          {/* 3. Permitted Claims & Prohibited Warnings */}
          <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-blue-950 font-heading font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>Beneficios Permitidos</span>
            </div>

            <ul className="space-y-1.5 text-[11px] text-slate-700">
              {currentProtocol.compliantBenefits.map((ben, bIdx) => (
                <li key={bIdx} className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold shrink-0">•</span>
                  <span>{ben}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-blue-200/60 text-[10px] text-red-700 font-medium">
              <strong>Evitar siempre:</strong> {currentProtocol.nonCompliantClaims[0]}
            </div>
          </div>

        </div>

        {/* Disclaimer Footer Note */}
        <div className="bg-slate-100 p-3 rounded-xl text-[11px] text-slate-600 flex items-start gap-2">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>{currentProtocol.disclaimer}</span>
        </div>

      </div>

      {/* Ready-to-Use Copys for this Protocol */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80">
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Copys con Método AIDA Listos para Redes & WhatsApp ({filteredCopys.length} de 30)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Contenido persuasivo con llamado a la acción personalizado y botón para generar imagen Master con IA.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en este protocolo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-1.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {filteredCopys.map((copy) => {
            const isCopied = copiedId === copy.id;

            return (
              <div 
                key={copy.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                          {copy.angle}
                        </span>
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200/60 px-2 py-0.5 rounded-md uppercase">
                          AIDA
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-slate-900 leading-snug">
                        {copy.title}
                      </h4>
                    </div>

                    <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-mono shrink-0">
                      {copy.id}
                    </span>
                  </div>

                  {/* [A] ATENCIÓN (Hook Box) */}
                  <div className="bg-slate-50 border-l-4 border-[#0B3D2E] border-y border-r border-slate-200/60 p-3 rounded-2xl space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-900 bg-emerald-100/80 px-1.5 py-0.5 rounded inline-block">
                      [A] ATENCIÓN · GANCHO HOOK
                    </span>
                    <p className="text-xs font-semibold text-slate-800 leading-relaxed italic">
                      "{copy.hook}"
                    </p>
                  </div>

                  {/* [I & D] Body Text */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                      [I & D] INTERÉS & DESEO (BENEFICIOS COADYUVANTES)
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line pl-1">
                      {copy.body}
                    </p>
                  </div>

                  {/* Suggested Combo Tag */}
                  <div className="bg-emerald-50/80 border border-emerald-200/60 rounded-xl px-3 py-1.5 text-xs text-emerald-950 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span><strong>Combo Sugerido:</strong> {copy.suggestedCombo}</span>
                  </div>

                  {/* [A] CTA */}
                  <div className="bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-amber-900 block">
                      [A] ACCIÓN · CTA PERSONALIZADO
                    </span>
                    <p className="text-xs text-slate-800 font-semibold">
                      {copy.cta}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {copy.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                  
                  {/* Copy Text Button */}
                  <button
                    onClick={() => handleCopyText(copy.fullMessage, copy.id)}
                    className={`flex-1 w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0B3D2E] hover:bg-emerald-900 text-white'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    <span>{isCopied ? '¡Copiado con tu WhatsApp!' : 'Copiar Copy Completo'}</span>
                  </button>

                  {/* Prompt Master Image Generator Button */}
                  <button
                    onClick={() => handleOpenImagePrompt(copy)}
                    className="w-full sm:w-auto px-3 py-2.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300/80 transition flex items-center justify-center gap-1.5 active:scale-95 shadow-2xs"
                    title="Crear Prompt Master de Imagen para este protocolo"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
                    <span>Prompt Master Imagen IA</span>
                  </button>

                  {/* Send Direct WhatsApp */}
                  <button
                    onClick={() => handleSendWhatsApp(copy.fullMessage)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl transition active:scale-95 shrink-0"
                    title="Compartir directo en WhatsApp"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Master AI Prompt Modal for Protocol */}
      {showMasterPromptModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 my-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <Stethoscope className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    Prompt Maestro IA: {currentProtocol.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Diseñado para generar nuevos copys 100% éticos y coadyuvantes con el Método AIDA
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMasterPromptModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prompt Code View */}
            <div className="relative">
              <pre className="bg-slate-900 text-emerald-300 p-4 rounded-2xl text-[11px] font-mono whitespace-pre-wrap max-h-72 overflow-y-auto border border-slate-800 leading-relaxed select-all">
                {masterPromptText}
              </pre>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowMasterPromptModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
              >
                Cerrar
              </button>
              <button
                onClick={handleCopyMasterPrompt}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                  copiedMasterPrompt
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#0B3D2E] hover:bg-emerald-900 text-white'
                }`}
              >
                {copiedMasterPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
                <span>{copiedMasterPrompt ? '¡Prompt Maestro Copiado!' : 'Copiar Prompt para ChatGPT / Gemini'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Master Image Prompt Modal for Protocol */}
      {selectedCopyForImage && imagePromptResult && (
        <MasterImagePromptModal
          isOpen={!!selectedCopyForImage}
          onClose={() => setSelectedCopyForImage(null)}
          title={`Prompt Master de Imagen: Protocolo ${currentProtocol.shortTitle}`}
          subtitle={`Basado en el Copy "${selectedCopyForImage.title}" (${selectedCopyForImage.angle})`}
          imagePromptResult={imagePromptResult}
          onFormatChange={handleFormatChange}
        />
      )}

    </div>
  );
};
