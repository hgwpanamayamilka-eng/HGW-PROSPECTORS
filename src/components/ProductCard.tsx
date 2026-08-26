import React from 'react';
import { 
  Sparkles, 
  FileText, 
  LayoutTemplate, 
  Image as ImageIcon, 
  Info, 
  CheckCircle2, 
  Tag, 
  Layers
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onGenerateCopys: (product: Product) => void;
  onGenerateImagePrompt: (product: Product) => void;
  onCreateLanding: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onGenerateCopys,
  onGenerateImagePrompt,
  onCreateLanding
}) => {
  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-emerald-500/40"
    >
      {/* Top Banner with Category & BV Points */}
      <div className="relative p-5 pb-0">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-[#0B3D2E] border border-emerald-200/60 px-2.5 py-1 rounded-full">
            <Tag className="w-3 h-3 text-emerald-600" />
            {product.categoria}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-extrabold bg-amber-50 text-amber-900 border border-amber-200/80 px-2.5 py-1 rounded-full">
            <Layers className="w-3 h-3 text-amber-700" />
            {product.BV} BV
          </span>
        </div>

        {/* Product Image Stage */}
        <div 
          onClick={() => onOpenDetails(product)}
          className="relative h-48 sm:h-52 w-full rounded-xl bg-gradient-to-b from-slate-50 to-emerald-50/30 flex items-center justify-center p-3 cursor-pointer overflow-hidden border border-slate-100 group-hover:bg-emerald-50/50 transition"
        >
          <img
            src={product.imagen}
            alt={product.nombre}
            className="h-full max-h-44 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-600" />
              Ver Ficha Técnica
            </span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onOpenDetails(product)}
            className="font-heading text-lg font-bold text-slate-900 leading-snug hover:text-emerald-700 cursor-pointer transition line-clamp-1 mb-1"
          >
            {product.nombre}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            {product.descripcion_corta}
          </p>

          {/* Key Benefit Pill */}
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-[11px] text-slate-700 font-medium line-clamp-2">
                {product.beneficios[0] || 'Fórmula natural de alta pureza'}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Público</span>
              <span className="text-xl font-extrabold text-slate-900">${product.precio.toFixed(2)}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-emerald-700 block tracking-wider">Socio Distribuidor</span>
              <span className="text-base font-bold text-emerald-700 font-mono">${product.precio_distribuidor.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-3 gap-2">
            <button
              id={`btn-copy-${product.id}`}
              onClick={() => onGenerateCopys(product)}
              className="flex flex-col items-center justify-center gap-1 bg-emerald-50 hover:bg-[#0B3D2E] text-[#0B3D2E] hover:text-white p-2.5 rounded-xl text-[11px] font-bold transition group/btn border border-emerald-200/60 hover:border-transparent active:scale-95"
              title="Generar 30 copys persuasivos"
            >
              <FileText className="w-4 h-4 text-emerald-700 group-hover/btn:text-[#D4AF37]" />
              <span>30 Copys</span>
            </button>

            <button
              id={`btn-img-${product.id}`}
              onClick={() => onGenerateImagePrompt(product)}
              className="flex flex-col items-center justify-center gap-1 bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white p-2.5 rounded-xl text-[11px] font-bold transition group/btn border border-slate-200 hover:border-transparent active:scale-95"
              title="Generar prompt de imagen con fidelidad"
            >
              <ImageIcon className="w-4 h-4 text-slate-500 group-hover/btn:text-amber-400" />
              <span>Prompt Img</span>
            </button>

            <button
              id={`btn-landing-${product.id}`}
              onClick={() => onCreateLanding(product)}
              className="flex flex-col items-center justify-center gap-1 bg-amber-50 hover:bg-amber-600 text-amber-900 hover:text-white p-2.5 rounded-xl text-[11px] font-bold transition group/btn border border-amber-200 hover:border-transparent active:scale-95"
              title="Crear Landing Page de 29 secciones"
            >
              <LayoutTemplate className="w-4 h-4 text-amber-700 group-hover/btn:text-white" />
              <span>Landing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
