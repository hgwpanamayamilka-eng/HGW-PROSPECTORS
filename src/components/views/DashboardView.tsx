import React from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  FileText, 
  ImageIcon, 
  LayoutTemplate, 
  Quote, 
  Users, 
  Building2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ExternalLink, 
  PhoneCall,
  Award,
  UserPlus
} from 'lucide-react';
import { Product, ContactData } from '../../types';
import { TabType } from '../Sidebar';
import { getDirectImageUrl } from '../../lib/imageUtils';

interface DashboardViewProps {
  products: Product[];
  contact: ContactData;
  onNavigate: (tab: TabType) => void;
  onSelectProductForCopy: (product: Product) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  products,
  contact,
  onNavigate,
  onSelectProductForCopy
}) => {
  const featuredProduct = products.find(p => p.id === 'cafe-arandanos-hgw') || products[0];
  const waUrl = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
  const directPhoto = getDirectImageUrl(contact.fotoPerfil);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B3D2E] via-[#1F7A5A] to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-emerald-500/30">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Suite Oficial para Distribuidores HGW
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            Potencia tus ventas y prospección con Inteligencia Artificial
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
            Genera 30 copys persuasivos por producto, diseña prompts publicitarios de alta fidelidad, crea landing pages de 29 secciones con videos tutoriales y banners de reconocimiento oficial para tu equipo.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('banners')}
              className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Banners de Reconocimiento</span>
            </button>
            <button
              onClick={() => onNavigate('copys')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm backdrop-blur-xs transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>Generar 30 Copys</span>
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm backdrop-blur-xs transition flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-300" />
              <span>Ver Catálogo ({products.length})</span>
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:flex items-center justify-center">
          <span className="font-heading font-black text-9xl text-white">HGW</span>
        </div>
      </div>

      {/* Quick Access Grid / Suite Modules */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-slate-900">Módulos de Creación Rápida</h3>
            <p className="text-xs text-slate-500">Selecciona la herramienta que deseas utilizar hoy</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1: Recognition Banners (NEW) */}
          <div 
            onClick={() => onNavigate('banners')}
            className="group bg-white p-5 rounded-2xl border-2 border-amber-300/80 shadow-xs hover:shadow-lg hover:border-amber-400 cursor-pointer transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex items-center gap-1 mb-1">
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-800 transition">
                  Banners de Reconocimiento
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Bienvenidas, ascensos de rango y membresía, ganadores de viajes, autos y aniversarios.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-800 pt-2 border-t border-slate-100">
              <span>Crear Banners Gala</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Copys */}
          <div 
            onClick={() => onNavigate('copys')}
            className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-500/40 cursor-pointer transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B3D2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-emerald-700" />
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-emerald-700 transition">
                30 Copys Psicológicos
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Genera 30 textos persuasivos con hooks, desarrollo, beneficios y CTA personalizado.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 pt-2 border-t border-slate-100">
              <span>Abrir Generador</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Image Prompts */}
          <div 
            onClick={() => onNavigate('images')}
            className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-500/40 cursor-pointer transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-emerald-700 transition">
                Prompts Publicitarios
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Prompts con máxima fidelidad del empaque y logo para Midjourney, Leonardo y DALL-E.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-800 pt-2 border-t border-slate-100">
              <span>Crear Prompt</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Landing Pages */}
          <div 
            onClick={() => onNavigate('landing')}
            className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-500/40 cursor-pointer transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LayoutTemplate className="w-5 h-5 text-blue-700" />
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-blue-700 transition">
                Landing Page HTML
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Estructura de 29 secciones centradas, enlace de referido y videos tutoriales embebidos.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-blue-700 pt-2 border-t border-slate-100">
              <span>Diseñar Landing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: MLM & Zoom Closings */}
          <div 
            onClick={() => onNavigate('mlm')}
            className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-500/40 cursor-pointer transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-purple-700" />
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1 group-hover:text-purple-700 transition">
                Network Marketing
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Copys para activación de códigos, fin de mes, invitaciones a webinars y cierres de prospectos.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-purple-700 pt-2 border-t border-slate-100">
              <span>Ver Estrategias</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </div>

      {/* Featured Hero Product & Quick Info */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Featured Product Spotlight */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              ⭐ Producto Destacado de Alta Rotación
            </span>
            <span className="text-xs font-bold text-slate-400">Puntos BV: {featuredProduct.BV}</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 items-center my-2">
            <div className="flex justify-center bg-slate-50 p-4 rounded-xl border border-slate-100">
              <img
                src={featuredProduct.imagen}
                alt={featuredProduct.nombre}
                className="max-h-48 w-auto object-contain drop-shadow"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-slate-900 mb-2">{featuredProduct.nombre}</h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                {featuredProduct.descripcion}
              </p>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-extrabold text-slate-900">${featuredProduct.precio.toFixed(2)}</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Socio: ${featuredProduct.precio_distribuidor.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => onSelectProductForCopy(featuredProduct)}
                className="w-full bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Crear Campaña con este Producto</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            <div>
              <span className="font-bold text-slate-800 block">30</span>
              <span>Copys listos</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">1:1 / 9:16</span>
              <span>Prompts HD</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">29</span>
              <span>Secciones Web</span>
            </div>
          </div>
        </div>

        {/* Right Col: Distributor Profile & International Support */}
        <div className="space-y-4">
          
          {/* Official Profile Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F7A5A] to-[#0B3D2E] flex items-center justify-center font-heading font-black text-lg text-[#D4AF37] overflow-hidden border-2 border-emerald-500/40 shadow-md shrink-0">
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
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-white">{contact.nombre}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-emerald-400 font-mono">Código: {contact.codigo}</span>
                <span className="text-[11px] text-slate-400 block">{contact.ciudad}, {contact.pais}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Distribuidora Oficial Internacional de Health Green World (HGW). Gestiona tus enlaces automáticos para WhatsApp y captura prospectos directamente.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2 mb-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Probar Enlace de WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {contact.enlaceReferido && (
              <a
                href={contact.enlaceReferido}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500/20 hover:bg-amber-500/30 text-[#D4AF37] border border-amber-500/40 font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-2"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Enlace de Referido Oficial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Quick Offices Banner */}
          <div 
            onClick={() => onNavigate('offices')}
            className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 cursor-pointer hover:bg-emerald-100/70 transition flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-slate-900">Directorio de Oficinas</h5>
                <span className="text-[11px] text-emerald-800">10 países con atención física</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </div>

        </div>

      </div>

    </div>
  );
};
