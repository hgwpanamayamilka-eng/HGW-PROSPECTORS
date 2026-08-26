import React from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ImageIcon, 
  LayoutTemplate, 
  ExternalLink,
  ShieldCheck,
  Tag,
  Layers,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onGenerateCopys: (product: Product) => void;
  onGenerateImagePrompt: (product: Product) => void;
  onCreateLanding: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onGenerateCopys,
  onGenerateImagePrompt,
  onCreateLanding
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center text-[#D4AF37] font-bold">
              HGW
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">{product.categoria}</span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white">{product.nombre}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          
          {/* Top Overview Grid */}
          <div className="grid sm:grid-cols-2 gap-6 items-center bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100">
            <div className="flex justify-center bg-white p-4 rounded-xl shadow-xs border border-slate-100">
              <img
                src={product.imagen}
                alt={product.nombre}
                className="max-h-56 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Presentación Oficial</span>
                <span className="font-semibold text-slate-900 text-base">{product.presentacion}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Precio Público</span>
                  <span className="text-xl font-extrabold text-slate-900">${product.precio.toFixed(2)}</span>
                </div>
                <div className="bg-emerald-100/70 p-3 rounded-xl border border-emerald-200">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Precio Socio</span>
                  <span className="text-xl font-extrabold text-emerald-800 font-mono">${product.precio_distribuidor.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-700" />
                  Puntos de Volumen (BV):
                </span>
                <span className="font-mono font-extrabold text-amber-900 text-sm">{product.BV} BV</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-2">Descripción Completa</h3>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {product.descripcion}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Beneficios Clave
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {product.beneficios.map((b, i) => (
                <div key={i} className="flex items-start gap-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-heading text-base font-bold text-slate-900 mb-2">Ingredientes & Composición</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredientes.map((ing, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium border border-slate-200">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Ethical Compliance: Allowed vs Forbidden Claims */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Claims Permitidos (Éticos)
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-800">
                {product.claims_permitidos.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Claims Prohibidos (NO Afirmar)
              </h4>
              <ul className="space-y-1.5 text-xs text-rose-800">
                {product.claims_no_permitidos.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>✕</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onGenerateCopys(product);
            }}
            className="flex items-center gap-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span>Generar 30 Copys</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onGenerateImagePrompt(product);
            }}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition active:scale-95"
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>Prompt de Imagen</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onCreateLanding(product);
            }}
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition active:scale-95"
          >
            <LayoutTemplate className="w-4 h-4" />
            <span>Crear Landing Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};
