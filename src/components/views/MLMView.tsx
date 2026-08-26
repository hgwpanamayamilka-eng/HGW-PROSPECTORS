import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Calendar, 
  Video, 
  Clock, 
  Flame, 
  Share2,
  Code,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { ContactData } from '../../types';
import { 
  MLMObjectiveType, 
  MLMConfig, 
  buildMLMPromptMaster, 
  generateMLMCollection,
  GeneratedMLMCopy 
} from '../../lib/prompts/networkMarketingPrompts';

interface MLMViewProps {
  contact: ContactData;
}

export const MLMView: React.FC<MLMViewProps> = ({ contact }) => {
  const [config, setConfig] = useState<MLMConfig>({
    objective: 'activacion_codigo',
    targetAudience: 'Personas registradas con código que aún no han hecho su primera compra de activación',
    tone: 'Empático, Persuasivo y Amigable',
    zoomDate: 'Hoy a las 8:00 PM',
    zoomTime: '8:00 PM',
    zoomLink: 'https://zoom.us/j/123456789',
    speakerName: contact.nombre,
    speakerRank: 'Líder Diamante Oficial HGW',
    customProductOrTopic: 'Café Saludable & Plan de Ganancia Mutua',
    promoDetails: 'Asesoría personalizada y combo con hasta 50% de descuento en membresía'
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedMasterPrompt, setCopiedMasterPrompt] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);

  const objectives: Array<{ id: MLMObjectiveType; label: string; iconText: string; desc: string }> = [
    { id: 'activacion_codigo', label: 'Activación de Códigos', iconText: '🔑', desc: 'Para personas registradas que tienen su código pero no han activado su compra' },
    { id: 'cierre_fin_de_mes', label: 'Cierre de Fin de Mes', iconText: '🔥', desc: 'Urgencia, calificación de rangos, maximizar bonos de equipo y volumen' },
    { id: 'invitacion_zoom', label: 'Invitación a Sala Zoom', iconText: '🎥', desc: 'Convocatoria a presentaciones de negocio y masterclasses virtuales' },
    { id: 'presentacion_negocio', label: 'Presentación Ganancia Mutua', iconText: '💼', desc: 'Explicación del modelo sin candados con 50% de ganancia mutua' },
    { id: 'seguimiento_efectivo', label: 'Seguimiento Post-Reunión', iconText: '🤝', desc: 'Preguntas de valor para prospectos que ya vieron la información' },
    { id: 'cierre_afiliacion', label: 'Cierre de Afiliación', iconText: '🎯', desc: 'Llamado directo a registrarse como nuevo socio con tu patrocinio' },
    { id: 'reunion_productos', label: 'Demostración de Productos', iconText: '🌿', desc: 'Invitación a spa facial, degustación de café y pruebas de turmalina' },
    { id: 'promociones_especiales', label: 'Promociones y Descuentos', iconText: '🎁', desc: 'Combos de temporada, promociones 2x1 y beneficios exclusivos' },
    { id: 'enfoque_salud', label: 'Enfoque de Salud y Bienestar', iconText: '🩺', desc: 'Prevención botánica, defensas, digestión limpia y nutrición celular' },
    { id: 'liderazgo_expansion', label: 'Liderazgo & Expansión Global', iconText: '👑', desc: 'Convocatoria a visionarios para apertura de nuevos países y ciudades' }
  ];

  const generatedCopys: GeneratedMLMCopy[] = generateMLMCollection(config, contact);
  const masterPromptText = buildMLMPromptMaster(config, contact);

  const copyCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyMasterPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopiedMasterPrompt(true);
    setTimeout(() => setCopiedMasterPrompt(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-emerald-700" />
            Suite de Network Marketing & Cierres HGW
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Copys y prompts especializados para activación de códigos, fin de mes, Zoom, prospección y seguimiento
          </p>
        </div>

        <button
          onClick={() => setShowPromptModal(true)}
          className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs active:scale-95 self-start sm:self-auto"
        >
          <Code className="w-4 h-4 text-[#D4AF37]" />
          <span>Ver Prompt Maestro MLM</span>
        </button>
      </div>

      {/* Objective Selector Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Selecciona el Objetivo Estratégico
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {objectives.map((obj) => {
              const isSelected = config.objective === obj.id;
              return (
                <button
                  key={obj.id}
                  onClick={() => setConfig({ ...config, objective: obj.id })}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#0B3D2E] to-emerald-900 text-white border-emerald-500 shadow-md scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xl mb-1">{obj.iconText}</span>
                  <span className="text-xs font-bold leading-snug block">{obj.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Context Parameters (Zoom info or extra data) */}
        {(config.objective === 'invitacion_zoom' || config.objective === 'cierre_fin_de_mes' || config.objective === 'activacion_codigo') && (
          <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Fecha / Horario</label>
              <input
                type="text"
                value={config.zoomDate || ''}
                onChange={(e) => setConfig({ ...config, zoomDate: e.target.value })}
                placeholder="Ej. Hoy 8:00 PM o Últimas 24 horas"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Ponente / Invitado</label>
              <input
                type="text"
                value={config.speakerName || ''}
                onChange={(e) => setConfig({ ...config, speakerName: e.target.value })}
                placeholder="Nombre del orador o líder"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Beneficio / Oferta Clave</label>
              <input
                type="text"
                value={config.promoDetails || ''}
                onChange={(e) => setConfig({ ...config, promoDetails: e.target.value })}
                placeholder="Ej. Descuento 30%-50% en activación"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
              />
            </div>
          </div>
        )}

      </div>

      {/* Generated Copys List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Plantillas Listas para Difusión en WhatsApp & Redes
          </span>
          <span className="text-xs text-emerald-800 font-semibold">
            Personalizadas con el código: {contact.codigo}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {generatedCopys.map((copy) => {
            const isCopied = copiedId === copy.id;
            const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(copy.fullMessage)}`;

            return (
              <div
                key={copy.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D2E] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      <Target className="w-3.5 h-3.5 text-emerald-600" />
                      {copy.title}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => copyCopyText(copy.fullMessage, copy.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-[#0B3D2E] hover:bg-emerald-50 transition"
                        title="Copiar texto completo"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <a
                        href={waShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-[#25D366] transition"
                        title="Enviar directo por WhatsApp"
                      >
                        <Share2 className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Hook */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-0.5">Gancho</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {copy.hook}
                    </p>
                  </div>

                  {/* Body */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Mensaje Principal</span>
                    <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                      {copy.body}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/60">
                    <span className="text-[10px] uppercase font-bold text-[#0B3D2E] block mb-0.5">Cierre / CTA</span>
                    <p className="text-xs text-slate-800 font-semibold">
                      {copy.cta}
                    </p>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => copyCopyText(copy.fullMessage, copy.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{isCopied ? '¡Texto Copiado!' : 'Copiar Mensaje Completo'}</span>
                  </button>

                  <a
                    href={waShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2 rounded-xl text-xs font-bold shadow-xs transition"
                    title="Enviar a WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: View Master MLM Prompt */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-700" />
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Prompt Maestro para Network Marketing & Cierres
                </h3>
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
                {copiedMasterPrompt ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
                <span>{copiedMasterPrompt ? '¡Prompt Copiado!' : 'Copiar Prompt Maestro MLM'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
