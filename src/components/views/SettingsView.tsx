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
  Sparkles
} from 'lucide-react';
import { ContactData } from '../../types';

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
      email: 'contacto@yamilkabatista.com',
      sitioWeb: 'https://hgw.yamilkabatista.com'
    };
    setFormData(defaults);
    onUpdateContact(defaults);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const liveWaUrl = formData.enlaceWhatsapp || `https://wa.me/${formData.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="max-w-3xl space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Settings className="w-6 h-6 text-emerald-700" />
          Configuración del Distribuidor & WhatsApp
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Personaliza los datos de contacto que se insertan automáticamente en todos los copys, landing pages y cierres
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
        
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
          <div className="sm:col-span-2">
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

        </div>

        {/* Live Test Banner */}
        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80 flex items-center justify-between">
          <div className="text-xs text-emerald-950">
            <strong>Vista previa del enlace:</strong> <span className="font-mono text-emerald-800">{liveWaUrl}</span>
          </div>
          <a
            href={liveWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs transition flex items-center gap-1 shrink-0"
          >
            <span>Probar Enlace</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Valores Predeterminados</span>
          </button>

          <button
            type="submit"
            className="bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2 active:scale-95"
          >
            {isSaved ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4 text-[#D4AF37]" />}
            <span>{isSaved ? '¡Configuración Guardada!' : 'Guardar Cambios'}</span>
          </button>
        </div>

      </form>

    </div>
  );
};
