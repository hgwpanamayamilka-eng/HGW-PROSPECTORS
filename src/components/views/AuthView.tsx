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
  Star
} from 'lucide-react';
import { AuthUser, ContactData } from '../../types';
import { getDirectImageUrl } from '../../lib/imageUtils';

interface AuthViewProps {
  onLoginSuccess: (user: AuthUser, contact?: Partial<ContactData>) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onLoginSuccess }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

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

  const yamilkaPhotoUrl = 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link';
  const directYamilkaPhoto = getDirectImageUrl(yamilkaPhotoUrl);

  const handleQuickLoginYamilka = () => {
    const yamilkaUser: AuthUser = {
      id: 'usr_yamilka_01',
      nombre: 'Yamilka Batista',
      email: 'ybaguila1923@gmail.com',
      codigo: 'Yamilka507',
      telefono: '67603578',
      pais: 'Panamá',
      rol: 'admin',
      fotoPerfil: yamilkaPhotoUrl
    };

    localStorage.setItem('hgw_auth_user', JSON.stringify(yamilkaUser));
    onLoginSuccess(yamilkaUser, {
      nombre: 'Yamilka Batista',
      whatsapp: '67603578',
      codigo: 'Yamilka507',
      ciudad: 'Ciudad de Panamá',
      pais: 'Panamá',
      enlaceWhatsapp: 'https://wa.me/50767603578',
      email: 'ybaguila1923@gmail.com',
      sitioWeb: 'https://hgw.yamilkabatista.com',
      fotoPerfil: yamilkaPhotoUrl,
      enlaceReferido: 'https://hgwpanama.com/registro?ref=Yamilka507'
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setError('Por favor completa tu correo o código y contraseña.');
      return;
    }

    // Check if it's Yamilka
    if (
      loginEmail.toLowerCase().includes('yamilka') || 
      loginEmail.toLowerCase().includes('ybaguila') || 
      loginEmail.toLowerCase() === 'yamilka507'
    ) {
      handleQuickLoginYamilka();
      return;
    }

    // Check localStorage registered users
    const registeredUsersStr = localStorage.getItem('hgw_registered_users');
    let registeredUsers: any[] = [];
    if (registeredUsersStr) {
      try {
        registeredUsers = JSON.parse(registeredUsersStr);
      } catch (err) {
        registeredUsers = [];
      }
    }

    const foundUser = registeredUsers.find(
      u => (u.email.toLowerCase() === loginEmail.toLowerCase() || u.codigo.toLowerCase() === loginEmail.toLowerCase()) &&
           u.password === loginPassword
    );

    if (foundUser) {
      const authUser: AuthUser = {
        id: foundUser.id,
        nombre: foundUser.nombre,
        email: foundUser.email,
        codigo: foundUser.codigo,
        telefono: foundUser.whatsapp,
        pais: foundUser.pais,
        rol: 'distribuidor',
        fotoPerfil: foundUser.fotoPerfil
      };
      localStorage.setItem('hgw_auth_user', JSON.stringify(authUser));
      onLoginSuccess(authUser, {
        nombre: foundUser.nombre,
        whatsapp: foundUser.whatsapp,
        codigo: foundUser.codigo,
        ciudad: foundUser.ciudad,
        pais: foundUser.pais,
        email: foundUser.email,
        fotoPerfil: foundUser.fotoPerfil,
        enlaceReferido: foundUser.enlaceReferido || `https://hgwpanama.com/registro?ref=${foundUser.codigo}`
      });
    } else {
      // Allow demo password if distributor enters
      if (loginPassword.length >= 4) {
        const guestUser: AuthUser = {
          id: `usr_${Date.now()}`,
          nombre: loginEmail.includes('@') ? loginEmail.split('@')[0] : loginEmail,
          email: loginEmail.includes('@') ? loginEmail : `${loginEmail}@hgwteam.com`,
          codigo: loginEmail.toUpperCase(),
          pais: 'Panamá',
          rol: 'distribuidor'
        };
        localStorage.setItem('hgw_auth_user', JSON.stringify(guestUser));
        onLoginSuccess(guestUser, {
          nombre: guestUser.nombre,
          codigo: guestUser.codigo,
          email: guestUser.email
        });
      } else {
        setError('Contraseña inválida. Introduce al menos 4 caracteres.');
      }
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!regName.trim() || !regEmail.trim() || !regPassword.trim() || !regCode.trim()) {
      setError('Por favor completa todos los campos obligatorios (*).');
      return;
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      nombre: regName.trim(),
      email: regEmail.trim(),
      password: regPassword.trim(),
      codigo: regCode.trim(),
      whatsapp: regWhatsapp.trim() || '50760000000',
      ciudad: regCity.trim() || 'Ciudad de Panamá',
      pais: regCountry.trim() || 'Panamá',
      enlaceReferido: `https://hgwpanama.com/registro?ref=${regCode.trim()}`,
      fotoPerfil: ''
    };

    // Save to registered list
    const registeredUsersStr = localStorage.getItem('hgw_registered_users');
    let registeredUsers: any[] = [];
    if (registeredUsersStr) {
      try {
        registeredUsers = JSON.parse(registeredUsersStr);
      } catch (err) {
        registeredUsers = [];
      }
    }
    registeredUsers.push(newUser);
    localStorage.setItem('hgw_registered_users', JSON.stringify(registeredUsers));

    const authUser: AuthUser = {
      id: newUser.id,
      nombre: newUser.nombre,
      email: newUser.email,
      codigo: newUser.codigo,
      telefono: newUser.whatsapp,
      pais: newUser.pais,
      rol: 'distribuidor'
    };

    localStorage.setItem('hgw_auth_user', JSON.stringify(authUser));
    setSuccessMsg('¡Registro exitoso! Iniciando sesión...');
    setTimeout(() => {
      onLoginSuccess(authUser, {
        nombre: newUser.nombre,
        whatsapp: newUser.whatsapp,
        codigo: newUser.codigo,
        ciudad: newUser.ciudad,
        pais: newUser.pais,
        email: newUser.email,
        enlaceReferido: newUser.enlaceReferido
      });
    }, 1000);
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
            Health Green World · Acceso Exclusivo para Socios & Distribuidores
          </p>
        </div>

        {/* Quick Access Card for Yamilka Batista */}
        <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/40 shadow-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-emerald-950 border border-[#D4AF37] shadow-xs shrink-0 flex items-center justify-center">
              {directYamilkaPhoto ? (
                <img
                  src={directYamilkaPhoto}
                  alt="Yamilka Batista"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="font-bold text-[#D4AF37]">YB</span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">Yamilka Batista</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs text-emerald-300 font-mono">Líder Oficial · Cód: Yamilka507</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleQuickLoginYamilka}
            className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer shrink-0"
          >
            <span>Acceso 1-Clic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Auth Form Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
          
          {/* Mode Selector Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl text-xs font-bold">
            <button
              type="button"
              onClick={() => { setIsRegisterMode(false); setError(null); }}
              className={`py-2.5 rounded-xl transition ${
                !isRegisterMode ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => { setIsRegisterMode(true); setError(null); }}
              className={`py-2.5 rounded-xl transition ${
                isRegisterMode ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Registrar Nuevo Socio
            </button>
          </div>

          {/* Error & Success Messages */}
          {error && (
            <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-xl text-xs font-medium animate-in fade-in">
              ⚠️ {error}
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
                    placeholder="ej. ybaguila1923@gmail.com o Yamilka507"
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
            </form>
          ) : (
            /* Registration Form */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
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
                    placeholder="Ej. 50767600000"
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
                <span>Registrarme y Acceder</span>
              </button>
            </form>
          )}

          {/* Security Notice */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Acceso protegido y cifrado para la red de distribuidores HGW</span>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400">
          Health Green World © {new Date().getFullYear()} · Sistema Oficial de Marketing IA
        </p>

      </div>

    </div>
  );
};
