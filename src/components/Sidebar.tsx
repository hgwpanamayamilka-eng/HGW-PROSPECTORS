import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  FileText, 
  Image as ImageIcon, 
  LayoutTemplate, 
  Quote, 
  Users, 
  Building2, 
  Settings, 
  X,
  ChevronRight,
  ExternalLink,
  Award,
  LogOut,
  ShieldAlert,
  ShieldCheck,
  Briefcase,
  HeartPulse,
  Bot
} from 'lucide-react';
import { ContactData, AuthUser } from '../types';
import { getDirectImageUrl } from '../lib/imageUtils';
import { AuthService } from '../lib/authService';

export type TabType = 
  | 'dashboard'
  | 'catalog'
  | 'copys'
  | 'images'
  | 'banners'
  | 'landing'
  | 'quotes'
  | 'business_opportunity'
  | 'health_protocols'
  | 'mlm'
  | 'offices'
  | 'settings'
  | 'admin_users';

interface SidebarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  contact: ContactData;
  authUser: AuthUser;
  onLogout?: () => void;
}

interface NavItem {
  id: TabType;
  label: string;
  badge?: string;
  icon: React.ElementType;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
  contact,
  authUser,
  onLogout
}) => {
  const isAdmin = authUser.rol === 'admin';
  const pendingCount = isAdmin ? AuthService.getUsers().filter(u => u.estado === 'pendiente').length : 0;

  const distributorNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Panel de Control', icon: LayoutDashboard },
    { id: 'catalog', label: 'Catálogo de Productos', badge: '12', icon: ShoppingBag },
    { id: 'copys', label: 'Generador de 30 Copys', badge: 'IA', icon: FileText },
    { id: 'business_opportunity', label: 'Oportunidad & Sistema IA', badge: 'Prospección', icon: Briefcase },
    { id: 'health_protocols', label: 'Protocolos de Salud', badge: 'Coadyuvante', icon: HeartPulse },
    { id: 'images', label: 'Prompts de Imágenes', badge: 'Fidelidad', icon: ImageIcon },
    { id: 'banners', label: 'Banners de Reconocimiento', badge: 'Gala HGW', icon: Award },
    { id: 'landing', label: 'Landing Page HTML', badge: '29 Sec', icon: LayoutTemplate },
    { id: 'quotes', label: '30 Frases & Motivación', badge: 'Social', icon: Quote },
    { id: 'mlm', label: 'Network Marketing & Zoom', badge: 'Cierres', icon: Users },
    { id: 'offices', label: 'Oficinas Internacionales', badge: '10 Países', icon: Building2 },
    { id: 'settings', label: 'Configuración de Datos', icon: Settings },
  ];

  const adminNavItems: NavItem[] = [
    { 
      id: 'admin_users', 
      label: 'Panel de Administrador', 
      badge: pendingCount > 0 ? `${pendingCount} Pendiente${pendingCount > 1 ? 's' : ''}` : 'Admin', 
      icon: ShieldAlert 
    }
  ];

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    onCloseMobile();
  };

  const directPhoto = getDirectImageUrl(contact.fotoPerfil);

  const content = (
    <div className="h-full flex flex-col justify-between bg-slate-900 text-slate-300 select-none overflow-y-auto">
      
      {/* Brand Header */}
      <div>
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F7A5A] to-[#0B3D2E] p-0.5 shadow-lg border border-emerald-500/30 flex items-center justify-center">
              <span className="font-heading font-black text-lg text-[#D4AF37] tracking-wider">HGW</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-white tracking-tight">Marketing AI</span>
                <span className="text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-sm">
                  {isAdmin ? 'ADMIN' : 'PRO'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Health Green World</p>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-3">
          
          {/* Admin Navigation (ONLY IF USER IS ADMIN) */}
          {isAdmin && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>Gestión de Plataforma</span>
              </div>
              {adminNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-md shadow-amber-950/40 border border-amber-400/40'
                        : 'text-amber-200 bg-amber-950/30 border border-amber-500/20 hover:bg-amber-900/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 transition ${isActive ? 'text-[#D4AF37]' : 'text-amber-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          pendingCount > 0 
                            ? 'bg-amber-400 text-slate-950 animate-pulse'
                            : isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-amber-900/60 text-amber-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-amber-200" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Distributor Tools */}
          <div className="space-y-1">
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {isAdmin ? 'Herramientas de Distribuidor' : 'Herramientas Principales'}
            </div>
            {distributorNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-700 to-emerald-900 text-white shadow-md shadow-emerald-950/40 border border-emerald-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition ${isActive ? 'text-[#D4AF37]' : 'text-slate-400 group-hover:text-emerald-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-800 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-300" />}
                  </div>
                </button>
              );
            })}
          </div>

        </nav>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-4 border-t border-slate-800/80 space-y-3">
        <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-slate-950 font-extrabold flex items-center justify-center text-xs overflow-hidden border-2 border-emerald-500/50 shrink-0">
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
            <div className="overflow-hidden flex-1">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-white block truncate">{contact.nombre}</span>
                {isAdmin && (
                  <span className="bg-amber-400/20 text-amber-300 text-[9px] font-extrabold px-1 rounded">ADMIN</span>
                )}
              </div>
              <span className="text-[11px] text-emerald-400 block font-mono">Código: {contact.codigo}</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Rol Activo:</span>
            <span className="text-[#D4AF37] font-semibold uppercase">{authUser.rol || 'Distribuidor'}</span>
          </div>
        </div>

        {/* Logout button */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-rose-950/40 hover:text-rose-300 text-slate-400 py-2 rounded-xl text-xs font-semibold border border-slate-700/50 transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Cerrar Sesión</span>
          </button>
        )}

        <div className="flex items-center justify-between px-1 text-[11px] text-slate-400">
          <span>v2.8 · HGW Suite</span>
          <a
            href="https://hgw.yamilkabatista.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 flex items-center gap-1 transition"
          >
            <span>Sitio Oficial</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-72 h-screen sticky top-0 shrink-0 z-20 border-r border-slate-800">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
            onClick={onCloseMobile} 
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
