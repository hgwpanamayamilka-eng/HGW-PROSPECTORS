import React from 'react';
import { 
  Sparkles, 
  Menu, 
  ExternalLink,
  ShieldCheck,
  LogOut
} from 'lucide-react';
import { ContactData } from '../types';
import { getDirectImageUrl } from '../lib/imageUtils';

interface HeaderProps {
  currentTabName: string;
  onOpenMobileMenu: () => void;
  contact: ContactData;
  onOpenSettings: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTabName,
  onOpenMobileMenu,
  contact,
  onOpenSettings,
  onLogout
}) => {
  const waUrl = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
  const directPhoto = getDirectImageUrl(contact.fotoPerfil);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile hamburger & Current Section Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition focus:outline-hidden cursor-pointer"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h1 className="font-heading text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {currentTabName}
              </h1>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Suite de Inteligencia Artificial para Distribuidores HGW
            </p>
          </div>
        </div>

        {/* Right: Distributor Info, WhatsApp quick trigger, Settings & Logout */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Official Badge */}
          <div 
            onClick={onOpenSettings}
            className="hidden md:flex items-center gap-2.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 rounded-xl px-3 py-1.5 cursor-pointer transition group"
            title="Haz clic para editar los datos de contacto y foto de perfil"
          >
            <div className="w-9 h-9 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center font-bold text-xs shadow-xs overflow-hidden border-2 border-emerald-600/40 shrink-0">
              {directPhoto ? (
                <img
                  src={directPhoto}
                  alt={contact.nombre}
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
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800 leading-none group-hover:text-emerald-800 transition">{contact.nombre}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-[10px] text-emerald-800 font-semibold">Cód: {contact.codigo}</span>
            </div>
          </div>

          {/* Quick WhatsApp Link Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 hidden sm:inline" />
          </a>

          {/* Logout Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition cursor-pointer"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
