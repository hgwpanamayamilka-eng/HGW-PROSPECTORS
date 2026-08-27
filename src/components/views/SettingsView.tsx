import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Phone, 
  User, 
  Tag, 
  Globe, 
  Mail,
  Sparkles,
  Camera,
  Image as ImageIcon,
  Video,
  UserPlus,
  Copy
} from 'lucide-react';
import { ContactData } from '../../types';
import { getDirectImageUrl } from '../../lib/imageUtils';

interface SettingsViewProps {
  contact: ContactData;
  onUpdateContact: (newContact: ContactData) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  contact,
  onUpdateContact
}) => {
  const [formData, setFormData] = useState<ContactData>(contact);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  const defaultProfileUrl = 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link';
  const defaultReferralUrl = 'https://hgwpanama.com/registro?ref=Yamilka507';
  const defaultVideoTutorial = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Replace with distributor tutorial

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateContact(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleReset = () => {
    const defaults: ContactData = {
      nombre: 'Yamilka Batista',
      whatsapp: '67603578',
      codigo: 'Yamilka507',
      pais: 'Panamá',
      ciudad: 'Ciudad de Panamá',
      enlaceWhatsapp: 'https://wa.me/50767603578',
      email: 'ybaguila1923@gmail.com',
      sitioWeb: 'https://hgw.yamilkabatista.com',
      fotoPerfil: defaultProfileUrl,
      enlaceReferido: defaultReferralUrl,
      videoTutorialRegistro: defaultVideoTutorial,
      videoOpcional1: '',
      videoOpcional2: ''
    };
    setFormData(defaults);
    onUpdateContact(defaults);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const liveWaUrl = formData.enlaceWhatsapp || `https://wa.me/${formData.whatsapp.replace(/\D/g, '')}`;
  const directPhotoUrl = getDirectImageUrl(formData.fotoPerfil);

  const copyReferralLink = () => {
    if (formData.enlaceReferido) {
      navigator.clipboard.writeText(formData.enlaceReferido);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Settings className="w-6 h-6 text-emerald-700" />
          Configuración del Distribuidor, Enlaces & Videos
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Personaliza tus datos de contacto, enlace de referido oficial HGW, videos tutoriales de registro y fotografía oficial de Google Drive.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
        
        {/* SECTION 1: Photo Profile */}
        <div className="space-y-3">
          <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <ImageIcon className="w-4 h-4 text-emerald-700" />
            <span>Fotografía Oficial del Perfil (Google Drive o Enlace Web)</span>
          </h3>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative group shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1F7A5A] to-[#0B3D2E] overflow-hidden border-2 border-emerald-500 shadow-md flex items-center justify-center text-white font-bold text-xl">
                {directPhotoUrl ? (
                  <img
                    src={directPhotoUrl}
                    alt={formData.nombre}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span>YB</span>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-slate-950 p-1 rounded-full shadow-xs border border-white">
                <Camera className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex-1 w-full space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Enlace de Google Drive / URL de la Foto
                </label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fotoPerfil: defaultProfileUrl })}
                  className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 transition underline cursor-pointer"
                >
                  Cargar foto oficial de Yamilka (Drive)
                </button>
              </div>
              <input
                type="url"
                value={formData.fotoPerfil || ''}
                onChange={(e) => setFormData({ ...formData, fotoPerfil: e.target.value })}
                placeholder="https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link"
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
              <p className="text-[11px] text-slate-500">
                Acepta enlaces compartidos de Google Drive (`/view?usp=drive_link`) o URLs directas de imagen. Se sincroniza con el Header, Sidebar y Banners.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Distributor Core Data */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <User className="w-4 h-4 text-emerald-700" />
            <span>Datos Personales & Comerciales</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                Nombre del Distribuidor / Líder
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Official Code */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                Código Oficial de Socio HGW
              </label>
              <input
                type="text"
                required
                value={formData.codigo}
                onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                Número de WhatsApp
              </label>
              <input
                type="text"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="Ej. 67603578 o +507 6760-3578"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Direct WhatsApp Link */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                Enlace Directo de WhatsApp (wa.me)
              </label>
              <input
                type="text"
                value={formData.enlaceWhatsapp || ''}
                onChange={(e) => setFormData({ ...formData, enlaceWhatsapp: e.target.value })}
                placeholder="https://wa.me/50767603578"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                País Principal
              </label>
              <input
                type="text"
                value={formData.pais || 'Panamá'}
                onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Ciudad / Región
              </label>
              <input
                type="text"
                value={formData.ciudad || 'Ciudad de Panamá'}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                Email de Contacto Comercial
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                Sitio Web Oficial / Landing Page
              </label>
              <input
                type="text"
                value={formData.sitioWeb || ''}
                onChange={(e) => setFormData({ ...formData, sitioWeb: e.target.value })}
                placeholder="https://hgw.yamilkabatista.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

          </div>
        </div>

        {/* SECTION 3: Referral Link & Video Tutorials */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <UserPlus className="w-4 h-4 text-amber-600" />
            <span>Enlace de Referido & Videos de Registro para Landing Pages</span>
          </h3>

          {/* Referral Link */}
          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                <UserPlus className="w-4 h-4 text-amber-700" />
                <span>Enlace de Afiliación / Registro Oficial HGW (Referido)</span>
              </label>
              {formData.enlaceReferido && (
                <button
                  type="button"
                  onClick={copyReferralLink}
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                >
                  {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRef ? '¡Copiado!' : 'Copiar Enlace'}</span>
                </button>
              )}
            </div>

            <input
              type="url"
              value={formData.enlaceReferido || ''}
              onChange={(e) => setFormData({ ...formData, enlaceReferido: e.target.value })}
              placeholder="https://hgwpanama.com/registro?ref=Yamilka507"
              className="w-full bg-white border border-amber-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            />
            <p className="text-[11px] text-amber-800">
              Este enlace se inserta automáticamente en los botones de llamado a la acción de registro y compra de membresía en todas las landing pages.
            </p>
          </div>

          {/* Video Tutorial 1 (Mandatory / Main) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Video className="w-4 h-4 text-rose-600" />
              <span>Video Tutorial: Cómo Crear la Cuenta HGW y Registrarse (Principal)</span>
            </label>
            <input
              type="url"
              value={formData.videoTutorialRegistro || ''}
              onChange={(e) => setFormData({ ...formData, videoTutorialRegistro: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=... o Vimeo / Loom"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono"
            />
            <p className="text-[11px] text-slate-500">
              Aparecerá en la sección de tutorial paso a paso de la landing page con reproductor responsivo centrado.
            </p>
          </div>

          {/* Optional Videos (up to 2) */}
          <div className="grid sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Video Opcional 1 (Ej. Plan de Compensación / Negocio)
              </label>
              <input
                type="url"
                value={formData.videoOpcional1 || ''}
                onChange={(e) => setFormData({ ...formData, videoOpcional1: e.target.value })}
                placeholder="https://youtube.com/..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Video Opcional 2 (Ej. Oficina Virtual / Testimonios)
              </label>
              <input
                type="url"
                value={formData.videoOpcional2 || ''}
                onChange={(e) => setFormData({ ...formData, videoOpcional2: e.target.value })}
                placeholder="https://youtube.com/..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800"
              />
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 transition cursor-pointer w-full sm:w-auto justify-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Valores Predeterminados</span>
          </button>

          <button
            type="submit"
            className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-8 py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            {isSaved ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4 text-[#D4AF37]" />}
            <span>{isSaved ? '¡Configuración Guardada!' : 'Guardar Todos los Cambios'}</span>
          </button>
        </div>

      </form>

    </div>
  );
};
