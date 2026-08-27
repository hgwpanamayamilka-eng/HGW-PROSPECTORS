import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  Key, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Building2, 
  Check, 
  Eye, 
  EyeOff,
  Star,
  Clock,
  AlertCircle,
  BellRing,
  X
} from 'lucide-react';
import { AuthUser, ContactData } from '../../types';
import { AuthService, ADMIN_EMAIL } from '../../lib/authService';
import { getDirectImageUrl } from '../../lib/imageUtils';

interface AuthViewProps {
  onLoginSuccess: (user: AuthUser, contact?: Partial<ContactData>) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onLoginSuccess }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminSetupModal, setShowAdminSetupModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [pendingApprovalUser, setPendingApprovalUser] = useState<AuthUser | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCode, setRegCode] = useState('');
  const [regWhatsapp, setRegWhatsapp] = useState('');
  const [regCity, setRegCity] = useState('Ciudad de Panamá');
  const [regCountry, setRegCountry] = useState('Panamá');

  // Admin Master Password Setup State
  const [adminEmailInput, setAdminEmailInput] = useState(ADMIN_EMAIL);
  const [adminNewPassword, setAdminNewPassword] = useState('');
  const [adminConfirmPassword, setAdminConfirmPassword] = useState('');
  const [adminSetupError, setAdminSetupError] = useState<string | null>(null);

  const yamilkaPhotoUrl = 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link';

  const handleAdminSetupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminSetupError(null);

    if (!adminNewPassword.trim()) {
      setAdminSetupError('Por favor ingresa tu nueva contraseña.');
      return;
    }

    if (adminNewPassword.trim().length < 3) {
      setAdminSetupError('La contraseña debe tener al menos 3 caracteres.');
      return;
    }

    if (adminNewPassword.trim() !== adminConfirmPassword.trim()) {
      setAdminSetupError('Las contraseñas no coinciden. Por favor verifícalas.');
      return;
    }

    const res = AuthService.setupAdminMasterPassword(adminEmailInput, adminNewPassword);
    if (!res.success) {
      setAdminSetupError(res.message);
      return;
    }

    if (res.user) {
      setShowAdminSetupModal(false);
      setSuccessMsg(res.message);
      setTimeout(() => {
        onLoginSuccess(res.user!, {
          nombre: res.user!.nombre,
          whatsapp: res.user!.telefono || '67603578',
          codigo: res.user!.codigo,
          ciudad: res.user!.ciudad || 'Ciudad de Panamá',
          pais: res.user!.pais || 'Panamá',
          email: res.user!.email,
          fotoPerfil: yamilkaPhotoUrl,
          enlaceReferido: `https://hgwpanama.com/registro?ref=${res.user!.codigo}`
        });
      }, 600);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setPendingApprovalUser(null);

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setError('Por favor completa tu correo o código HGW y tu contraseña.');
      return;
    }

    const res = AuthService.login(loginEmail, loginPassword);

    if (!res.success) {
      setError(res.message);
      return;
    }

    if (res.user) {
      setSuccessMsg(res.message);
      setTimeout(() => {
        onLoginSuccess(res.user!, {
          nombre: res.user!.nombre,
          whatsapp: res.user!.telefono || '67603578',
          codigo: res.user!.codigo,
          ciudad: res.user!.ciudad || 'Ciudad de Panamá',
          pais: res.user!.pais || 'Panamá',
          email: res.user!.email,
          fotoPerfil: res.user!.fotoPerfil || (res.user!.rol === 'admin' ? yamilkaPhotoUrl : ''),
          enlaceReferido: `https://hgwpanama.com/registro?ref=${res.user!.codigo}`
        });
      }, 500);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setPendingApprovalUser(null);

    if (!regName.trim() || !regEmail.trim() || !regPassword.trim() || !regCode.trim()) {
      setError('Por favor completa todos los campos obligatorios (*).');
      return;
    }

    const res = AuthService.registerUser({
      nombre: regName.trim(),
      email: regEmail.trim(),
      password: regPassword.trim(),
      codigo: regCode.trim(),
      telefono: regWhatsapp.trim() || '50767600000',
      ciudad: regCity.trim() || 'Ciudad de Panamá',
      pais: regCountry.trim() || 'Panamá',
      rol: 'distribuidor',
      fotoPerfil: ''
    }, false); // All new registrations are strictly 'pendiente' requiring admin approval

    if (!res.success) {
      setError(res.message);
      return;
    }

    if (res.user) {
      setPendingApprovalUser(res.user);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0B3D2E] to-slate-900 flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md space-y-6 relative z-10">
        
        {/* Brand Logo & Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F7A5A] to-[#0B3D2E] text-white font-extrabold text-2xl shadow-xl border-2 border-emerald-400/40 mb-2">
            HGW
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Plataforma de Liderazgo & Marketing IA
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 font-medium">
            Health Green World · Acceso Exclusivo para Socios y Distribuidores Autorizados
          </p>
        </div>

        {/* If user just registered and is pending approval */}
        {pendingApprovalUser ? (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200 space-y-4 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Solicitud de Registro Enviada
            </h2>

            <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2 text-left">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <BellRing className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Notificación Enviada por Email a la Administradora</span>
              </div>
              <p>
                Tu solicitud ha sido registrada con el código <strong>{pendingApprovalUser.codigo}</strong>. La administradora principal (<strong>{ADMIN_EMAIL}</strong>) debe autorizar tu cuenta antes de que puedas iniciar sesión.
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200 text-left">
              <div><strong>Nombre:</strong> {pendingApprovalUser.nombre}</div>
              <div><strong>Correo:</strong> {pendingApprovalUser.email}</div>
              <div><strong>Código HGW:</strong> {pendingApprovalUser.codigo}</div>
              <div><strong>Estado:</strong> <span className="text-amber-700 font-bold">Pendiente de Autorización</span></div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => { setPendingApprovalUser(null); setIsRegisterMode(false); }}
                className="w-full bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>Ir al Inicio de Sesión</span>
              </button>
            </div>
          </div>
        ) : (
          /* Auth Form Container */
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
            
            {/* Mode Selector Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl text-xs font-bold">
              <button
                type="button"
                onClick={() => { setIsRegisterMode(false); setError(null); }}
                className={`py-2.5 rounded-xl transition cursor-pointer ${
                  !isRegisterMode ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={() => { setIsRegisterMode(true); setError(null); }}
                className={`py-2.5 rounded-xl transition cursor-pointer ${
                  isRegisterMode ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Registrar Nuevo Socio
              </button>
            </div>

            {/* Error & Success Messages */}
            {error && (
              <div className="p-3.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl text-xs font-medium flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-medium flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Login Form */}
            {!isRegisterMode ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Correo Electrónico o Código HGW
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="ej. info.yamilka@gmail.com o Yamilka507"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contraseña de Acceso
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer mt-2"
                >
                  <Lock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ingresar a la Plataforma</span>
                </button>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setAdminSetupError(null);
                      setAdminNewPassword('');
                      setAdminConfirmPassword('');
                      setAdminEmailInput(ADMIN_EMAIL);
                      setShowAdminSetupModal(true);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-emerald-900 hover:text-emerald-950 font-bold bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200 px-3 py-2 rounded-xl transition cursor-pointer"
                  >
                    <Key className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>¿Eres la Administradora? Crear / Configurar mi Contraseña</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Registration Form */
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200/80 text-[11px] text-amber-900">
                  ℹ️ Los nuevos registros requieren autorización previa de la administradora (<strong>{ADMIN_EMAIL}</strong>).
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Código HGW *
                    </label>
                    <input
                      type="text"
                      required
                      value={regCode}
                      onChange={(e) => setRegCode(e.target.value)}
                      placeholder="Ej. Socio507"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regWhatsapp}
                      onChange={(e) => setRegWhatsapp(e.target.value)}
                      placeholder="Ej. 67600000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contraseña *
                    </label>
                    <input
                      type="password"
                      required
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      value={regCity}
                      onChange={(e) => setRegCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      País
                    </label>
                    <input
                      type="text"
                      value={regCountry}
                      onChange={(e) => setRegCountry(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B3D2E] hover:bg-emerald-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer mt-3"
                >
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enviar Solicitud de Registro</span>
                </button>
              </form>
            )}

            {/* Security Notice */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Acceso protegido y cifrado para la red de distribuidores HGW</span>
            </div>

          </div>
        )}

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400">
          Health Green World © {new Date().getFullYear()} · Sistema Oficial de Marketing IA
        </p>

      </div>

      {/* MODAL: ESTABLECER / CREAR CONTRASEÑA DE ADMINISTRADORA */}
      {showAdminSetupModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Key className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-slate-900">
                    Contraseña de Administradora
                  </h3>
                  <p className="text-[11px] text-emerald-800 font-semibold">
                    Yamilka Batista · Super Administradora
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAdminSetupModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Configura tu Contraseña Maestra de Acceso</span>
              </div>
              <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                Crea una contraseña segura para tu cuenta de administradora ({ADMIN_EMAIL} / ybaguila1923@gmail.com). Con esta contraseña tendrás acceso exclusivo para autorizar nuevos distribuidores y gestionar todo el sistema.
              </p>
            </div>

            {adminSetupError && (
              <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{adminSetupError}</span>
              </div>
            )}

            <form onSubmit={handleAdminSetupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Correo o Código de Administradora
                </label>
                <input
                  type="text"
                  required
                  value={adminEmailInput}
                  onChange={(e) => setAdminEmailInput(e.target.value)}
                  placeholder="info.yamilka@gmail.com o Yamilka507"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Nueva Contraseña Maestra *
                </label>
                <input
                  type="password"
                  required
                  value={adminNewPassword}
                  onChange={(e) => setAdminNewPassword(e.target.value)}
                  placeholder="Crea tu contraseña segura"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Confirmar Contraseña *
                </label>
                <input
                  type="password"
                  required
                  value={adminConfirmPassword}
                  onChange={(e) => setAdminConfirmPassword(e.target.value)}
                  placeholder="Repite la contraseña"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAdminSetupModal(false)}
                  className="px-4 py-2 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0B3D2E] hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Key className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Guardar y Entrar como Admin</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
