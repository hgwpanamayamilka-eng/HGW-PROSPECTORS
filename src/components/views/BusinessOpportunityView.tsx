import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  Bot, 
  Code, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Search, 
  ChevronRight, 
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Video,
  FileSpreadsheet,
  X,
  ExternalLink,
  MessageSquare,
  Compass
} from 'lucide-react';
import { ContactData } from '../../types';
import { 
  BusinessStage, 
  BusinessOpportunityConfig, 
  buildBusinessOpportunityMasterPrompt, 
  PREBUILT_BUSINESS_COPYS,
  GeneratedBusinessCopy 
} from '../../lib/prompts/businessOpportunityPrompts';

interface BusinessOpportunityViewProps {
  contact: ContactData;
}

export const BusinessOpportunityView: React.FC<BusinessOpportunityViewProps> = ({ contact }) => {
  const [selectedStage, setSelectedStage] = useState<BusinessStage | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMasterPromptModal, setShowMasterPromptModal] = useState(false);
  const [copiedMasterPrompt, setCopiedMasterPrompt] = useState(false);

  const [customConfig, setCustomConfig] = useState<BusinessOpportunityConfig>({
    stage: 'prospeccion',
    targetProfile: 'Emprendedores y personas en búsqueda de ingresos adicionales',
    tone: 'Profesional, empático, magnético y de liderazgo',
    presentationType: 'zoom',
    zoomDate: 'Hoy a las 8:00 PM',
    zoomTime: '8:00 PM',
    zoomLink: 'https://zoom.us/j/123456789',
    customOpportunityAngle: 'Plan de Ganancia Mutua 50% unilateral y herramientas con IA'
  });

  const stageTabs: Array<{ id: BusinessStage | 'all'; label: string; icon: React.ElementType; badge?: string; desc: string }> = [
    { id: 'all', label: 'Todos los Copys', icon: Layers, desc: 'Ver todo el arsenal de prospección, cierres y herramientas' },
    { id: 'prospeccion', label: '1. Prospección', icon: Target, badge: 'Atracción', desc: 'Ganchos para captar prospectos en frío y tibio' },
    { id: 'presentacion', label: '2. Presentación', icon: Briefcase, badge: 'Ganancia Mutua', desc: 'Explicación del modelo, membresías y Zoom' },
    { id: 'seguimiento', label: '3. Seguimiento', icon: MessageSquare, badge: 'Objeciones', desc: 'Pregunta de escala y manejo de tiempo/dinero' },
    { id: 'cierre', label: '4. Cierre', icon: Award, badge: 'Afiliación', desc: 'Cierre doble opción, urgencia y llamada de 3 vías' },
    { id: 'acompanamiento', label: '5. Acompañamiento', icon: Users, badge: 'Duplicación', desc: 'Plan 48 hrs, bienvenida y lista inteligente' },
    { id: 'herramientas_trabajo', label: '6. Herramientas', icon: FileSpreadsheet, badge: 'Sistema', desc: 'Spa facial, catálogo digital y Backoffice' },
    { id: 'herramientas_ia', label: '7. Herramientas con IA', icon: Bot, badge: 'Automatización', desc: 'TikTok, Reels, ChatGPT y WhatsApp Business' }
  ];

  const formatMessageWithContact = (rawMessage: string): string => {
    const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
    return rawMessage
      .replace(/\[WHATSAPP_LINK\]/g, waLink)
      .replace(/\[NOMBRE\]/g, contact.nombre)
      .replace(/\[CODIGO\]/g, contact.codigo)
      .replace(/\[PAIS\]/g, contact.pais || 'Panamá e Internacional');
  };

  const filteredCopys = PREBUILT_BUSINESS_COPYS.filter(copy => {
    const matchesStage = selectedStage === 'all' || copy.stage === selectedStage;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === '' || 
      copy.title.toLowerCase().includes(query) ||
      copy.hook.toLowerCase().includes(query) ||
      copy.body.toLowerCase().includes(query) ||
      copy.targetProfile.toLowerCase().includes(query) ||
      copy.tags.some(t => t.toLowerCase().includes(query));
    return matchesStage && matchesSearch;
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

  const masterPromptText = buildBusinessOpportunityMasterPrompt(customConfig, contact);

  const handleCopyMasterPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopiedMasterPrompt(true);
    setTimeout(() => setCopiedMasterPrompt(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-[#0B3D2E] via-[#0F4C3A] to-[#08281F] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 -top-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sistema de Prospección & Expansión Global HGW</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Copys de Oportunidad de Negocio, Cierres & Sistema con IA
            </h2>
            
            <p className="text-sm text-slate-200 leading-relaxed">
              Guiones estratégicos paso a paso para cada etapa del embudo: <strong>Prospección, Presentación de Ganancia Mutua, Seguimiento profesional, Cierre de membresías, Acompañamiento de nuevos socios y Herramientas con Inteligencia Artificial</strong> para automatizar tu negocio HGW.
            </p>

            {/* Quick Distributor Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-emerald-200/90">
              <span className="bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                Líder: <strong className="text-white">{contact.nombre}</strong>
              </span>
              <span className="bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                Código de Socio: <strong className="text-[#D4AF37]">{contact.codigo}</strong>
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
              <span>Generar Prompt Maestro IA</span>
            </button>

            <button
              onClick={() => {
                const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
                window.open(waLink, '_blank');
              }}
              className="inline-flex items-center justify-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold px-4 py-2.5 rounded-2xl border border-emerald-700/50 text-xs transition"
            >
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>Probar Enlace WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stage Navigation & Search Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por palabra clave, perfil o tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-slate-500 flex items-center gap-2 self-end sm:self-center">
            <span className="font-semibold text-slate-800">{filteredCopys.length}</span>
            <span>guiones disponibles</span>
          </div>
        </div>

        {/* Stage Filter Buttons Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {stageTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedStage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedStage(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition shrink-0 ${
                  isSelected
                    ? 'bg-[#0B3D2E] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D4AF37]' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Copys Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredCopys.map((copy) => {
          const isCopied = copiedId === copy.id;
          const formattedFullMessage = formatMessageWithContact(copy.fullMessage);

          return (
            <div 
              key={copy.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold px-2.5 py-0.5 rounded-lg mb-1.5 uppercase tracking-wide">
                      {copy.stageLabel}
                    </span>
                    <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                      {copy.title}
                    </h3>
                  </div>

                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-mono shrink-0">
                    {copy.id}
                  </span>
                </div>

                {/* Target Profile */}
                <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl px-3 py-1.5 text-xs text-amber-900 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>Dirigido a:</strong> {copy.targetProfile}</span>
                </div>

                {/* Hook Highlight */}
                <div className="bg-slate-50 border-l-3 border-[#0B3D2E] p-3 rounded-r-xl space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-800 block">
                    Gancho Magnético (Hook)
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed italic">
                    "{copy.hook}"
                  </p>
                </div>

                {/* Body Text Preview */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 whitespace-pre-line">
                  {copy.body}
                </p>

                {/* Key Points */}
                {copy.keyPoints && copy.keyPoints.length > 0 && (
                  <div className="space-y-1 pt-1">
                    {copy.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {copy.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(copy.fullMessage, copy.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0B3D2E] hover:bg-emerald-900 text-white'
                  }`}
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  <span>{isCopied ? '¡Copiado con tus datos!' : 'Copiar Copy Completo'}</span>
                </button>

                <button
                  onClick={() => handleSendWhatsApp(copy.fullMessage)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-xl transition active:scale-95"
                  title="Compartir directo en WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCopys.length === 0 && (
        <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
          <Search className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="font-heading font-bold text-slate-800 text-base">No se encontraron copys con ese criterio</h3>
          <p className="text-xs text-slate-500">Prueba con otra palabra clave o selecciona "Todos los Copys".</p>
          <button
            onClick={() => { setSelectedStage('all'); setSearchQuery(''); }}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Master Prompt Modal */}
      {showMasterPromptModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 my-8">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <Bot className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    Prompt Maestro con IA para Negocio HGW
                  </h3>
                  <p className="text-xs text-slate-500">
                    Listo para copiar y pegar en ChatGPT, Google Gemini o Claude
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

            {/* Customizer options */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Fase del Embudo:</label>
                <select
                  value={customConfig.stage}
                  onChange={(e) => setCustomConfig({ ...customConfig, stage: e.target.value as BusinessStage })}
                  className="w-full p-2 bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="prospeccion">1. Prospección & Atracción</option>
                  <option value="presentacion">2. Presentación Ganancia Mutua</option>
                  <option value="seguimiento">3. Seguimiento & Objeciones</option>
                  <option value="cierre">4. Cierre de Membresías</option>
                  <option value="acompanamiento">5. Acompañamiento & Duplicación</option>
                  <option value="herramientas_trabajo">6. Herramientas de Trabajo</option>
                  <option value="herramientas_ia">7. Herramientas con IA</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Perfil del Prospecto:</label>
                <input
                  type="text"
                  value={customConfig.targetProfile}
                  onChange={(e) => setCustomConfig({ ...customConfig, targetProfile: e.target.value })}
                  placeholder="Ej: Emprendedores, mamás, empleados..."
                  className="w-full p-2 bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-slate-700 block mb-1">Enfoque Especial / Promoción:</label>
                <input
                  type="text"
                  value={customConfig.customOpportunityAngle || ''}
                  onChange={(e) => setCustomConfig({ ...customConfig, customOpportunityAngle: e.target.value })}
                  placeholder="Ej: Ganancia Mutua 50%, bono de patrocinio, combos con descuento..."
                  className="w-full p-2 bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Prompt Code View */}
            <div className="relative">
              <pre className="bg-slate-900 text-emerald-300 p-4 rounded-2xl text-[11px] font-mono whitespace-pre-wrap max-h-60 overflow-y-auto border border-slate-800 leading-relaxed select-all">
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

    </div>
  );
};
