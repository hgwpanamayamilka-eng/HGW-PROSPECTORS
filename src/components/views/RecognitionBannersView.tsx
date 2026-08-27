import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Bot,
  Zap,
  Users,
  Car,
  Home,
  Plane,
  Crown,
  Flame,
  Calendar,
  Image as ImageIcon,
  FolderOpen,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Layers,
  ArrowRight
} from 'lucide-react';
import { BannerCategory, BannerFormData, ContactData } from '../../types';
import { buildMasterBannerPrompt } from '../../lib/prompts/bannerPrompts';
import { getDirectImageUrl } from '../../lib/imageUtils';

interface RecognitionBannersViewProps {
  contact: ContactData;
}

export const RecognitionBannersView: React.FC<RecognitionBannersViewProps> = ({
  contact
}) => {
  const [formData, setFormData] = useState<BannerFormData>({
    tipo: 'ascenso_rango',
    nombreHomenajeado: 'Yamilka Batista',
    fotoHomenajeado: contact.fotoPerfil || 'https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png',
    driveFotoUrl: 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link',
    rango: 'Diamante',
    membresia: 'Master',
    paisCiudad: `${contact.ciudad || 'Ciudad de Panamá'}, ${contact.pais || 'Panamá'}`,
    patrocinador: 'Liderazgo HGW Internacional',
    premioNombre: 'Convención Internacional & Crucero de Lujo',
    fechaEvento: new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
    mensajePersonalizado: 'Tu constancia, visión y pasión inspiran a toda nuestra organización.',
    paletaColor: 'esmeralda_oro',
    formato: '1:1',
    incluirLogoHGW: true
  });

  const [copiedSpanish, setCopiedSpanish] = useState(false);
  const [copiedEnglish, setCopiedEnglish] = useState(false);
  const [copiedNegative, setCopiedNegative] = useState(false);
  const [copiedDrive, setCopiedDrive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const bannerCategories: { id: BannerCategory; label: string; icon: React.ElementType; color: string; desc: string }[] = [
    { id: 'bienvenida', label: 'Bienvenida de Equipo', icon: Users, color: 'from-emerald-700 to-teal-900', desc: 'Nuevo socio o socia en la organización' },
    { id: 'ascenso_rango', label: 'Ascenso de Rango', icon: Crown, color: 'from-amber-600 to-amber-900', desc: 'Plata, Oro, Platino, Diamante, Corona...' },
    { id: 'ascenso_membresia', label: 'Ascenso de Membresía', icon: Award, color: 'from-blue-700 to-indigo-900', desc: 'Pre-Junior, Junior, Senior, Master' },
    { id: 'ganador_viajes', label: 'Ganador(a) de Viajes', icon: Plane, color: 'from-cyan-600 to-blue-900', desc: 'Calificación a Convenciones y Cruceros' },
    { id: 'ganador_carro', label: 'Ganador(a) de Carro', icon: Car, color: 'from-rose-600 to-red-950', desc: 'Bono de Auto 0 KM HGW' },
    { id: 'ganador_casa', label: 'Ganador(a) de Casa', icon: Home, color: 'from-emerald-800 to-slate-900', desc: 'Bono Inmobiliario y Patrimonio' },
    { id: 'aniversario', label: 'Aniversario de HGW', icon: Calendar, color: 'from-purple-700 to-slate-950', desc: 'Gala Global y Aniversario de la Compañía' },
  ];

  const rangosHGW = [
    'Plata',
    'Oro',
    'Platino',
    'Diamante',
    'Diamante 1 Estrella',
    'Diamante 2 Estrellas',
    'Diamante 3 Estrellas',
    'Diamante 4 Estrellas',
    'Diamante 5 Estrellas',
    'Corona HGW',
    'Embajador Corona'
  ];

  const membresiasHGW = [
    'Pre-Junior',
    'Junior',
    'Senior',
    'Master'
  ];

  const promptResult = buildMasterBannerPrompt(formData);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copySpanish = () => {
    navigator.clipboard.writeText(promptResult.promptSpanish);
    setCopiedSpanish(true);
    showToast('¡Prompt en Español copiado!');
    setTimeout(() => setCopiedSpanish(false), 2000);
  };

  const copyEnglish = () => {
    navigator.clipboard.writeText(promptResult.promptEnglish);
    setCopiedEnglish(true);
    showToast('¡Prompt en Inglés copiado!');
    setTimeout(() => setCopiedEnglish(false), 2000);
  };

  const copyNegative = () => {
    navigator.clipboard.writeText(promptResult.negativePrompt);
    setCopiedNegative(true);
    showToast('Prompt Negativo copiado');
    setTimeout(() => setCopiedNegative(false), 2000);
  };

  const copyDriveUrl = () => {
    if (formData.driveFotoUrl) {
      navigator.clipboard.writeText(formData.driveFotoUrl);
      setCopiedDrive(true);
      showToast('Enlace de Google Drive copiado');
      setTimeout(() => setCopiedDrive(false), 2000);
    }
  };

  const launchChatGPT = () => {
    const fullText = `${promptResult.promptSpanish}\n\n[FOTO DEL HOMENAJEADO EN GOOGLE DRIVE]: ${formData.driveFotoUrl || formData.fotoHomenajeado}`;
    navigator.clipboard.writeText(fullText);
    showToast('¡Prompt y Foto copiados! Abriendo ChatGPT...');
    window.open('https://chatgpt.com/', '_blank');
  };

  const launchGemini = () => {
    const fullText = `${promptResult.promptSpanish}\n\n[FOTO DEL HOMENAJEADO EN GOOGLE DRIVE]: ${formData.driveFotoUrl || formData.fotoHomenajeado}`;
    navigator.clipboard.writeText(fullText);
    showToast('¡Prompt y Foto copiados! Abriendo Gemini...');
    window.open('https://gemini.google.com/app', '_blank');
  };

  const launchIdeogram = () => {
    navigator.clipboard.writeText(promptResult.promptEnglish);
    showToast('¡Prompt en inglés copiado! Abriendo Ideogram AI...');
    window.open('https://ideogram.ai/', '_blank');
  };

  const launchMidjourney = () => {
    navigator.clipboard.writeText(promptResult.promptEnglish);
    showToast('¡Prompt para Midjourney copiado!');
    window.open('https://www.midjourney.com/app/', '_blank');
  };

  const directPhotoUrl = getDirectImageUrl(formData.driveFotoUrl) || getDirectImageUrl(formData.fotoHomenajeado);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#0B3D2E] text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-400/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 text-xs sm:text-sm font-semibold">
          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-700" />
            Prompts Maestros para Banners de Reconocimiento & Eventos HGW
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Genera afiches publicitarios de gala para bienvenidas, ascensos de rango, membresías Master, ganadores de viajes, auto, casa y aniversarios
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Formato Corporativo HGW 8K</span>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {bannerCategories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = formData.tipo === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFormData({ ...formData, tipo: cat.id })}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] shadow-md ring-2 ring-emerald-500/50'
                  : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/15 text-[#D4AF37]' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isSelected && <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>}
              </div>
              <div>
                <span className="font-heading font-bold text-xs block leading-tight">{cat.label}</span>
                <span className="text-[10px] opacity-75 line-clamp-1 mt-0.5">{cat.desc}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* AI Quick Launcher Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0B3D2E] to-slate-900 p-4 rounded-2xl text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-white">Lanzador Directo de Banners con IA</h3>
            <p className="text-xs text-emerald-200/80">Copia el prompt de gala con tu foto y abre la herramienta con un clic</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={launchChatGPT}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#10A37F] hover:bg-[#0E8A6C] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt y abrir ChatGPT"
          >
            <Bot className="w-4 h-4" />
            <span>Abrir ChatGPT</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
            onClick={launchGemini}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt y abrir Google Gemini"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Abrir Gemini</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
            onClick={launchIdeogram}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
            title="Copiar prompt en inglés y abrir Ideogram"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Ideogram AI</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          <button
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

      {/* Main Grid: Builder Form & Output */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Column: Form Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            
            {/* Header Form */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                <Crown className="w-4 h-4 text-emerald-700" />
                <span>Datos del Banner & Homenajeado</span>
              </h3>
              <span className="text-[11px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                {bannerCategories.find(c => c.id === formData.tipo)?.label}
              </span>
            </div>

            {/* Honoree Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Nombre del Homenajeado / Líder
              </label>
              <input
                type="text"
                value={formData.nombreHomenajeado}
                onChange={(e) => setFormData({ ...formData, nombreHomenajeado: e.target.value })}
                placeholder="Ej. Yamilka Batista"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Photo & Google Drive URL Box */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-700" />
                  <span>Foto del Homenajeado</span>
                </label>
                <button
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    driveFotoUrl: 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link',
                    fotoHomenajeado: 'https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png'
                  })}
                  className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 underline"
                >
                  Cargar foto de Yamilka
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center shrink-0">
                  {directPhotoUrl ? (
                    <img
                      src={directPhotoUrl}
                      alt={formData.nombreHomenajeado}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <Users className="w-6 h-6 text-slate-400" />
                  )}
                </div>
                <div className="flex-1 space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold text-slate-500">
                    Enlace de Google Drive / URL de la Foto:
                  </label>
                  <input
                    type="url"
                    value={formData.driveFotoUrl || ''}
                    onChange={(e) => setFormData({ ...formData, driveFotoUrl: e.target.value })}
                    placeholder="https://drive.google.com/file/d/... o URL directa"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {formData.driveFotoUrl && (
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="truncate max-w-[200px] font-mono text-[10px]">{formData.driveFotoUrl}</span>
                  <button
                    type="button"
                    onClick={copyDriveUrl}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded text-[10px] flex items-center gap-1 transition"
                  >
                    {copiedDrive ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedDrive ? 'Copiado' : 'Copiar enlace'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dynamic Specific Inputs by Category */}
            {formData.tipo === 'ascenso_rango' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Rango Alcanzado
                </label>
                <select
                  value={formData.rango}
                  onChange={(e) => setFormData({ ...formData, rango: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  {rangosHGW.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            )}

            {formData.tipo === 'ascenso_membresia' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nivel de Membresía
                </label>
                <select
                  value={formData.membresia}
                  onChange={(e) => setFormData({ ...formData, membresia: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  {membresiasHGW.map((m) => (
                    <option key={m} value={m}>Membresía {m}</option>
                  ))}
                </select>
              </div>
            )}

            {(formData.tipo === 'ganador_viajes' || formData.tipo === 'ganador_carro' || formData.tipo === 'ganador_casa') && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nombre del Premio / Destino
                </label>
                <input
                  type="text"
                  value={formData.premioNombre || ''}
                  onChange={(e) => setFormData({ ...formData, premioNombre: e.target.value })}
                  placeholder={
                    formData.tipo === 'ganador_viajes' 
                      ? 'Ej. Convención Internacional & Crucero de Lujo' 
                      : formData.tipo === 'ganador_carro' 
                        ? 'Ej. Bono de Auto 0 KM HGW' 
                        : 'Ej. Bono Inmobiliario Casa de Ensueño'
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            )}

            {/* City / Country & Sponsor */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Ciudad / País
                </label>
                <input
                  type="text"
                  value={formData.paisCiudad || ''}
                  onChange={(e) => setFormData({ ...formData, paisCiudad: e.target.value })}
                  placeholder="Ej. Panamá City, Panamá"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Patrocinador / Equipo
                </label>
                <input
                  type="text"
                  value={formData.patrocinador || ''}
                  onChange={(e) => setFormData({ ...formData, patrocinador: e.target.value })}
                  placeholder="Ej. Equipo Diamantes HGW"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
                />
              </div>
            </div>

            {/* Format Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Formato del Banner
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1:1', label: '1:1 Cuadrado', desc: 'Instagram / WhatsApp' },
                  { id: '9:16', label: '9:16 Vertical', desc: 'Stories / Reels' },
                  { id: '16:9', label: '16:9 Escenario', desc: 'Zoom / Presentación' }
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, formato: fmt.id as any })}
                    className={`p-2 rounded-xl border text-center transition ${
                      formData.formato === fmt.id
                        ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] font-bold shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs block font-bold">{fmt.label}</span>
                    <span className="text-[10px] opacity-80 block">{fmt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mensaje de Felicitación / Elogio
              </label>
              <textarea
                rows={2}
                value={formData.mensajePersonalizado || ''}
                onChange={(e) => setFormData({ ...formData, mensajePersonalizado: e.target.value })}
                placeholder="Escribe un mensaje inspirador para el homenajeado..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

          </div>
        </div>

        {/* Right Column: Visual Mockup Card & Generated Master Prompts (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Banner Visual Preview Mockup */}
          <div className="bg-gradient-to-br from-slate-900 via-[#0B3D2E] to-slate-950 p-6 rounded-2xl text-white shadow-xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#D4AF37] to-amber-200 p-1 shadow-2xl shrink-0">
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  {directPhotoUrl ? (
                    <img
                      src={directPhotoUrl}
                      alt={formData.nombreHomenajeado}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Users className="w-10 h-10 text-amber-300" />
                  )}
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1.5 flex-1">
                <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-slate-950 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>{bannerCategories.find(c => c.id === formData.tipo)?.label}</span>
                </div>
                
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white leading-tight">
                  {promptResult.headline}
                </h3>
                
                <p className="text-amber-300 font-bold text-sm">
                  {formData.nombreHomenajeado || 'Líder HGW'}
                </p>

                <p className="text-xs text-slate-300 italic line-clamp-2">
                  "{formData.mensajePersonalizado || 'Inspirando grandeza y libertad financiera.'}"
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] text-emerald-300/90 font-medium">
                  <span>📍 {formData.paisCiudad}</span>
                  {formData.patrocinador && <span>🤝 Patrocinador: {formData.patrocinador}</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Spanish Master Prompt Box (For ChatGPT and Gemini) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10A37F]"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt Maestro en Español (ChatGPT y Google Gemini)
                </h3>
              </div>
              <button
                onClick={copySpanish}
                className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer"
              >
                {copiedSpanish ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                <span>{copiedSpanish ? '¡Copiado!' : 'Copiar Prompt'}</span>
              </button>
            </div>

            <div className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto border border-slate-800">
              {promptResult.promptSpanish}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Formato: <strong>{formData.formato}</strong></span>
              <span className="text-emerald-700 font-semibold">Incluye enlace fotográfico en alta resolución</span>
            </div>
          </div>

          {/* English Master Prompt Box (Midjourney / Ideogram) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Prompt en Inglés (Midjourney / Ideogram / DALL-E 3)
                </h3>
              </div>
              <button
                onClick={copyEnglish}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer"
              >
                {copiedEnglish ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEnglish ? '¡Copiado!' : 'Copiar Inglés'}</span>
              </button>
            </div>

            <div className="bg-slate-50 text-slate-800 p-4 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap border border-slate-200 max-h-56 overflow-y-auto">
              {promptResult.promptEnglish}
            </div>
          </div>

          {/* Negative Prompt */}
          <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-rose-900">
                Prompt Negativo Especializado (Negative Prompt)
              </span>
              <button
                onClick={copyNegative}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer"
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
