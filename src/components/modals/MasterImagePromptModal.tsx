import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  ImageIcon, 
  Lock, 
  ShieldCheck, 
  ExternalLink, 
  Phone, 
  Globe, 
  User, 
  Layers, 
  Bot,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GeneratedImagePromptResult, ImageFormat } from '../../types';

interface MasterImagePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imagePromptResult: GeneratedImagePromptResult;
  onFormatChange?: (format: ImageFormat) => void;
}

export const MasterImagePromptModal: React.FC<MasterImagePromptModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imagePromptResult,
  onFormatChange
}) => {
  const [activeLang, setActiveLang] = useState<'spanish' | 'english' | 'negative'>('spanish');
  const [copiedText, setCopiedText] = useState<'spanish' | 'english' | 'negative' | 'drive' | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'spanish' | 'english' | 'negative' | 'drive') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 my-6 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4 shrink-0">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-[#0B3D2E] to-emerald-800 p-2.5 rounded-2xl text-white shadow-sm shrink-0">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Prompt Master IA 8K
                </span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  Preservación 100% Activo Original
                </span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg mt-1">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="space-y-4 overflow-y-auto pr-1">

          {/* Golden Rule Notice */}
          <div className="bg-emerald-950 text-emerald-100 p-3.5 rounded-2xl text-xs space-y-1.5 border border-emerald-800/60 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#D4AF37]">
              <Lock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Regla Suprema de Prompt Master HGW</span>
            </div>
            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              La IA <strong>mantendrá el empaque, logotipo y diseño oficial del producto 100% idénticos</strong> y creará la composición publicitaria 8K, modelos humanos y el bloque de contacto a la izquierda.
            </p>
          </div>

          {/* Format & Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">Formato del Lienzo:</span>
              <div className="inline-flex rounded-xl bg-slate-200/80 p-0.5">
                <button
                  type="button"
                  onClick={() => onFormatChange?.('1:1')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    imagePromptResult.format === '1:1'
                      ? 'bg-[#0B3D2E] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  1:1 Cuadrado
                </button>
                <button
                  type="button"
                  onClick={() => onFormatChange?.('9:16')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    imagePromptResult.format === '9:16'
                      ? 'bg-[#0B3D2E] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  9:16 Stories / Reels
                </button>
              </div>
            </div>

            {imagePromptResult.driveUrl && (
              <button
                type="button"
                onClick={() => handleCopy(imagePromptResult.driveUrl || '', 'drive')}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 px-2.5 py-1 rounded-xl font-medium transition"
              >
                {copiedText === 'drive' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{copiedText === 'drive' ? '¡Enlace de Foto Copiado!' : 'Copiar Enlace de Foto Original'}</span>
              </button>
            )}
          </div>

          {/* Language / View Switcher Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              type="button"
              onClick={() => setActiveLang('spanish')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition -mb-px flex items-center gap-1.5 ${
                activeLang === 'spanish'
                  ? 'border-emerald-700 text-emerald-900 bg-emerald-50/50 rounded-t-xl'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>🇪🇸 Prompt Maestro (Español)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLang('english')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition -mb-px flex items-center gap-1.5 ${
                activeLang === 'english'
                  ? 'border-emerald-700 text-emerald-900 bg-emerald-50/50 rounded-t-xl'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>🇺🇸 Master Prompt (Inglés - Midjourney / DALL-E)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveLang('negative')}
              className={`px-4 py-2 text-xs font-bold border-b-2 transition -mb-px flex items-center gap-1.5 ${
                activeLang === 'negative'
                  ? 'border-red-600 text-red-900 bg-red-50/50 rounded-t-xl'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>🚫 Negative Prompt</span>
            </button>
          </div>

          {/* Prompt Code Block View */}
          <div className="relative">
            <pre className="bg-slate-950 text-emerald-300 p-4 rounded-2xl text-[11px] font-mono whitespace-pre-wrap max-h-64 sm:max-h-72 overflow-y-auto border border-slate-800 leading-relaxed select-all">
              {activeLang === 'spanish' && imagePromptResult.promptSpanish}
              {activeLang === 'english' && imagePromptResult.promptEnglish}
              {activeLang === 'negative' && imagePromptResult.negativePrompt}
            </pre>
          </div>

          {/* Quick instructions */}
          <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
            💡 <strong>Cómo usar:</strong> Copia el prompt en español o inglés y pégalo en <strong>ChatGPT (DALL-E 3)</strong>, <strong>Google Gemini</strong>, <strong>Midjourney v6</strong>, <strong>Ideogram</strong> o <strong>Flux</strong>. Si puedes adjuntar imagen, adjunta la foto original del producto para un resultado 100% fotográfico.
          </p>

        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition"
          >
            Cerrar
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopy(imagePromptResult.negativePrompt, 'negative')}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition active:scale-95"
            >
              {copiedText === 'negative' ? '¡Negative Copiado!' : 'Copiar Negative Prompt'}
            </button>

            <button
              type="button"
              onClick={() => handleCopy(imagePromptResult.promptEnglish, 'english')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition active:scale-95 ${
                copiedText === 'english'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-900 text-white'
              }`}
            >
              {copiedText === 'english' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText === 'english' ? '¡Prompt en Inglés Copiado!' : 'Copiar en Inglés'}</span>
            </button>

            <button
              type="button"
              onClick={() => handleCopy(imagePromptResult.promptSpanish, 'spanish')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                copiedText === 'spanish'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0B3D2E] hover:bg-emerald-900 text-white'
              }`}
            >
              {copiedText === 'spanish' ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
              <span>{copiedText === 'spanish' ? '¡Prompt Maestro Copiado!' : 'Copiar Prompt Maestro (Español)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
