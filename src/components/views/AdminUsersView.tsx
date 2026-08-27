import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  Mail, 
  Phone, 
  Search, 
  Check, 
  X, 
  Trash2, 
  UserPlus, 
  RotateCcw, 
  AlertCircle, 
  History, 
  Bell, 
  CheckCheck, 
  Send, 
  Eye, 
  ExternalLink,
  MapPin,
  Sparkles,
  Key
} from 'lucide-react';
import { AuthUser, AuditLog, AdminNotification } from '../../types';
import { AuthService, ADMIN_EMAIL } from '../../lib/authService';

interface AdminUsersViewProps {
  currentAdminUser: AuthUser;
}

export const AdminUsersView: React.FC<AdminUsersViewProps> = ({ currentAdminUser }) => {
  const [activeSubTab, setActiveSubTab] = useState<'users' | 'pending' | 'audit' | 'notifications'>('pending');
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'todos' | 'aprobado' | 'pendiente' | 'rechazado'>('todos');
  const [roleFilter, setRoleFilter] = useState<'todos' | 'admin' | 'lider' | 'distribuidor'>('todos');

  // Modal for new user
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserCode, setNewUserCode] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');
  const [newUserRole, setNewUserRole] = useState<'distribuidor' | 'lider' | 'admin'>('distribuidor');
  const [newUserCity, setNewUserCity] = useState('Ciudad de Panamá');
  const [newUserCountry, setNewUserCountry] = useState('Panamá');

  // Toast feedback
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback(null), 4000);
  };

  const reloadData = () => {
    setUsers(AuthService.getUsers());
    setAuditLogs(AuthService.getAuditLogs());
    setNotifications(AuthService.getNotifications());
  };

  useEffect(() => {
    reloadData();
  }, []);

  const handleApprove = (userId: string, userName: string) => {
    const success = AuthService.approveUser(userId);
    if (success) {
      showToast(`¡Usuario ${userName} APROBADO exitosamente! Ahora puede ingresar.`);
      reloadData();
    }
  };

  const handleReject = (userId: string, userName: string) => {
    const success = AuthService.rejectUser(userId);
    if (success) {
      showToast(`Acceso para ${userName} ha sido REVOCADO / RECHAZADO.`, 'error');
      reloadData();
    }
  };

  const handleChangeRole = (userId: string, newRole: 'admin' | 'lider' | 'distribuidor', userName: string) => {
    const success = AuthService.changeUserRole(userId, newRole);
    if (success) {
      showToast(`Rol de ${userName} actualizado a: ${newRole.toUpperCase()}`);
      reloadData();
    }
  };

  const handleDelete = (userId: string, userName: string) => {
    if (confirm(`¿Estás seguro de eliminar permanentemente al usuario ${userName}?`)) {
      AuthService.deleteUser(userId);
      showToast(`Usuario ${userName} eliminado del sistema.`);
      reloadData();
    }
  };

  const handleCreateNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim() || !newUserCode.trim()) {
      showToast('Por favor completa todos los campos obligatorios.', 'error');
      return;
    }

    const res = AuthService.registerUser({
      nombre: newUserName,
      email: newUserEmail,
      codigo: newUserCode,
      telefono: newUserPhone,
      ciudad: newUserCity,
      pais: newUserCountry,
      rol: newUserRole,
      password: '123'
    }, true); // pre-approved

    if (res.success) {
      showToast(`¡Usuario ${newUserName} creado y aprobado exitosamente!`);
      setShowAddModal(false);
      setNewUserName('');
      setNewUserEmail('');
      setNewUserCode('');
      setNewUserPhone('');
      reloadData();
    } else {
      showToast(res.message, 'error');
    }
  };

  const pendingCount = users.filter(u => u.estado === 'pendiente').length;
  const approvedCount = users.filter(u => u.estado === 'aprobado').length;
  const unreadNotifsCount = notifications.filter(n => !n.leido).length;

  const filteredUsers = users.filter(u => {
    const matchesSearch = 
      u.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (u.telefono && u.telefono.includes(searchTerm));
    
    const matchesStatus = statusFilter === 'todos' || u.estado === statusFilter;
    const matchesRole = roleFilter === 'todos' || u.rol === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Toast Notice */}
      {feedback && (
        <div className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-2xl shadow-2xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 text-xs sm:text-sm font-bold text-white ${
          feedback.type === 'success' ? 'bg-[#0B3D2E] border-emerald-400' : 'bg-rose-900 border-rose-400'
        }`}>
          {feedback.type === 'success' ? <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> : <AlertCircle className="w-5 h-5 text-rose-300" />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0B3D2E] to-slate-900 text-white p-6 rounded-3xl border border-emerald-500/30 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#D4AF37] text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
              Panel de Super Administrador
            </span>
            <span className="text-xs text-emerald-300 font-mono">Admin Principal: {ADMIN_EMAIL}</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />
            Control de Acceso, Aprobación de Usuarios & Bitácora
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Autoriza el ingreso de nuevos distribuidores, gestiona roles y consulta el registro en tiempo real de quiénes acceden a la plataforma.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition active:scale-95 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Dar de Alta Usuario</span>
          </button>
          <button
            onClick={reloadData}
            className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-xl text-xs transition cursor-pointer"
            title="Recargar datos"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => { setActiveSubTab('pending'); setStatusFilter('pendiente'); }}
          className={`p-4 rounded-2xl border transition cursor-pointer ${
            pendingCount > 0 
              ? 'bg-amber-500/10 border-amber-400/80 shadow-md ring-2 ring-amber-400/20' 
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Pendientes de Autorización</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{pendingCount}</span>
            {pendingCount > 0 && (
              <span className="text-[11px] font-bold text-amber-700 animate-pulse">¡Requiere tu acción!</span>
            )}
          </div>
        </div>

        <div 
          onClick={() => { setActiveSubTab('users'); setStatusFilter('aprobado'); }}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-emerald-400 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Usuarios Aprobados</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{approvedCount}</span>
            <span className="text-[11px] text-emerald-700 font-semibold">Socios activos</span>
          </div>
        </div>

        <div 
          onClick={() => setActiveSubTab('notifications')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-blue-400 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Avisos a {ADMIN_EMAIL}</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{notifications.length}</span>
            {unreadNotifsCount > 0 && (
              <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">
                {unreadNotifsCount} nuevas
              </span>
            )}
          </div>
        </div>

        <div 
          onClick={() => setActiveSubTab('audit')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-purple-400 transition"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Registro de Accesos</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <History className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{auditLogs.length}</span>
            <span className="text-[11px] text-slate-500">Eventos registrados</span>
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => { setActiveSubTab('pending'); setStatusFilter('pendiente'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'pending'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Pendientes de Autorizar ({pendingCount})</span>
          </button>

          <button
            onClick={() => { setActiveSubTab('users'); setStatusFilter('todos'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'users'
                ? 'bg-[#0B3D2E] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Todos los Usuarios ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('audit')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'audit'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Bitácora de Accesos ({auditLogs.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('notifications')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'notifications'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Notificaciones por Email ({unreadNotifsCount})</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-500 font-medium px-3">
          Administrador: <strong className="text-slate-800">{currentAdminUser.email}</strong>
        </div>
      </div>

      {/* SUBTAB 1 & 2: USERS & PENDING APPROVALS LIST */}
      {(activeSubTab === 'users' || activeSubTab === 'pending') && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, correo, código..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {activeSubTab === 'users' && (
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="aprobado">Aprobados</option>
                  <option value="pendiente">Pendientes</option>
                  <option value="rechazado">Rechazados</option>
                </select>
              )}

              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800"
              >
                <option value="todos">Todos los Roles</option>
                <option value="admin">Administradores</option>
                <option value="lider">Líderes de Equipo</option>
                <option value="distribuidor">Distribuidores</option>
              </select>
            </div>
          </div>

          {/* Pending Alert Banner if in pending view */}
          {activeSubTab === 'pending' && pendingCount > 0 && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Hay <strong>{pendingCount}</strong> socio(s) esperando tu autorización para acceder.
                </span>
              </div>
              <button
                onClick={() => {
                  users.filter(u => u.estado === 'pendiente').forEach(u => AuthService.approveUser(u.id));
                  showToast('¡Todos los usuarios pendientes han sido aprobados!');
                  reloadData();
                }}
                className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs transition cursor-pointer"
              >
                Aprobar Todos
              </button>
            </div>
          )}

          {/* Users Table / Grid */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3 rounded-l-xl">Socio / Usuario</th>
                  <th className="p-3">Código HGW</th>
                  <th className="p-3">Contacto</th>
                  <th className="p-3">Rol</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Registro / Último Acceso</th>
                  <th className="p-3 text-right rounded-r-xl">Acciones de Autorización</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-400">
                      No se encontraron usuarios con los filtros seleccionados.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/80 transition">
                      
                      {/* Name and Email */}
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs shrink-0 overflow-hidden">
                            {user.fotoPerfil ? (
                              <img src={user.fotoPerfil} alt={user.nombre} className="w-full h-full object-cover" />
                            ) : (
                              <span>{user.nombre.substring(0, 2).toUpperCase()}</span>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 flex items-center gap-1.5">
                              <span>{user.nombre}</span>
                              {user.rol === 'admin' && (
                                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-1.5 py-0.2 rounded">ADMIN</span>
                              )}
                            </div>
                            <span className="text-slate-500 font-mono text-[11px] block">{user.email}</span>
                          </div>
                        </div>
                      </td>

                      {/* Code */}
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        {user.codigo}
                      </td>

                      {/* Contact */}
                      <td className="p-3 text-slate-600">
                        <div className="space-y-0.5">
                          {user.telefono && (
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3 text-[#25D366]" />
                              <span>{user.telefono}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <MapPin className="w-3 h-3" />
                            <span>{user.ciudad || 'Panamá'}</span>
                          </div>
                        </div>
                      </td>

                      {/* Role Selector */}
                      <td className="p-3">
                        <select
                          value={user.rol}
                          onChange={(e) => handleChangeRole(user.id, e.target.value as any, user.nombre)}
                          disabled={user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()}
                          className="bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-800 cursor-pointer disabled:opacity-50"
                        >
                          <option value="distribuidor">Distribuidor</option>
                          <option value="lider">Líder</option>
                          <option value="admin">Administrador</option>
                        </select>
                      </td>

                      {/* Status */}
                      <td className="p-3">
                        {user.estado === 'aprobado' && (
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                            <Check className="w-3 h-3" /> Aprobado
                          </span>
                        )}
                        {user.estado === 'pendiente' && (
                          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full text-[11px] animate-pulse">
                            <Clock className="w-3 h-3" /> Pendiente
                          </span>
                        )}
                        {user.estado === 'rechazado' && (
                          <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                            <X className="w-3 h-3" /> Rechazado
                          </span>
                        )}
                      </td>

                      {/* Registration Date */}
                      <td className="p-3 text-[11px] text-slate-500 font-mono">
                        <div>Reg: {user.fechaRegistro || '2026-08-26'}</div>
                        {user.ultimoAcceso && (
                          <div className="text-slate-400">Último: {user.ultimoAcceso}</div>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          
                          {/* Approve Button */}
                          {user.estado !== 'aprobado' && (
                            <button
                              onClick={() => handleApprove(user.id, user.nombre)}
                              className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs flex items-center gap-1 shadow-xs transition cursor-pointer"
                              title="Aprobar y permitir acceso"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Autorizar</span>
                            </button>
                          )}

                          {/* Reject Button */}
                          {user.estado === 'aprobado' && user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase() && (
                            <button
                              onClick={() => handleReject(user.id, user.nombre)}
                              className="p-1.5 text-amber-700 hover:bg-amber-100 rounded-lg transition"
                              title="Revocar acceso temporalmente"
                            >
                              <UserX className="w-4 h-4" />
                            </button>
                          )}

                          {/* Email notification */}
                          <a
                            href={`mailto:${user.email}?subject=Bienvenido%20a%20HGW%20Marketing%20AI&body=Hola%20${encodeURIComponent(user.nombre)},%20tu%20cuenta%20ha%20sido%20autorizada%20con%20éxito.`}
                            className="p-1.5 text-blue-700 hover:bg-blue-50 rounded-lg transition"
                            title="Enviar correo"
                          >
                            <Send className="w-4 h-4" />
                          </a>

                          {/* Delete Button */}
                          {user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase() && (
                            <button
                              onClick={() => handleDelete(user.id, user.nombre)}
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                              title="Eliminar usuario"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* SUBTAB 3: AUDIT LOGS (QUIÉNES ENTRAN & HISTORIAL) */}
      {activeSubTab === 'audit' && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                <History className="w-4 h-4 text-emerald-700" />
                <span>Registro de Accesos y Auditoría en Tiempo Real</span>
              </h3>
              <p className="text-xs text-slate-500">
                Historial detallado de qué usuarios inician sesión, hora exacta, IP y acciones realizadas.
              </p>
            </div>
            <button
              onClick={() => {
                if (confirm('¿Deseas vaciar la bitácora de auditoría?')) {
                  AuthService.clearAuditLogs();
                  reloadData();
                  showToast('Bitácora de auditoría vaciada.');
                }
              }}
              className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpiar Historial</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3 rounded-l-xl">Fecha & Hora</th>
                  <th className="p-3">Usuario</th>
                  <th className="p-3">Código HGW</th>
                  <th className="p-3">Acción Registrada</th>
                  <th className="p-3">Dispositivo / IP</th>
                  <th className="p-3 rounded-r-xl">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {auditLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-400">
                      No hay registros de accesos en este momento.
                    </td>
                  </tr>
                ) : (
                  auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                        {log.fecha}
                      </td>
                      <td className="p-3 font-bold text-slate-900">
                        <div>{log.usuarioNombre}</div>
                        <span className="text-[11px] font-normal text-slate-400 font-mono">{log.usuarioEmail}</span>
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        {log.usuarioCodigo}
                      </td>
                      <td className="p-3">
                        <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          {log.accion}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[11px] text-slate-500">
                        {log.ipDispositivo || '190.140.85.12'}
                      </td>
                      <td className="p-3 text-slate-600 text-[11px]">
                        {log.detalles || '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 4: NOTIFICATIONS TO info.yamilka@gmail.com */}
      {activeSubTab === 'notifications' && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Bandeja de Notificaciones Enviadas a {ADMIN_EMAIL}</span>
              </h3>
              <p className="text-xs text-slate-500">
                Cada vez que un nuevo distribuidor se registra, el sistema despacha una notificación por email para su autorización.
              </p>
            </div>
            <button
              onClick={() => {
                AuthService.markAllNotificationsAsRead();
                reloadData();
                showToast('Todas las notificaciones marcadas como leídas');
              }}
              className="text-xs text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Marcar todo leído</span>
            </button>
          </div>

          <div className="space-y-3">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                No hay notificaciones en la bandeja.
              </div>
            ) : (
              notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    !notif.leido ? 'bg-blue-50/70 border-blue-200' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      !notif.leido ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{notif.asunto}</span>
                        {!notif.leido && (
                          <span className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">NUEVO</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{notif.mensaje}</p>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">
                        Destinatario: {notif.destinatarioEmail} · Fecha: {notif.fecha}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => {
                        AuthService.approveUser(notif.usuarioId);
                        AuthService.markNotificationAsRead(notif.id);
                        reloadData();
                        showToast(`¡Usuario ${notif.usuarioNombre} aprobado!`);
                      }}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center gap-1 shadow-xs transition cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Aprobar Usuario</span>
                    </button>

                    <button
                      onClick={() => {
                        AuthService.markNotificationAsRead(notif.id);
                        reloadData();
                      }}
                      className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition"
                      title="Marcar como leída"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      )}

      {/* Modal: Add New Pre-Approved User Directly */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-4">
            
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-[#0B3D2E]" />
                <span>Dar de Alta Nuevo Socio (Pre-Aprobado)</span>
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Registra un socio directamente desde el panel de administración con acceso pre-autorizado.
            </p>

            <form onSubmit={handleCreateNewUser} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Ej. Carmen Ortiz"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="socio@hgw.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Código HGW *</label>
                  <input
                    type="text"
                    required
                    value={newUserCode}
                    onChange={(e) => setNewUserCode(e.target.value)}
                    placeholder="Carmen507"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Teléfono</label>
                  <input
                    type="text"
                    value={newUserPhone}
                    onChange={(e) => setNewUserPhone(e.target.value)}
                    placeholder="65001234"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rol Asignado</label>
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900"
                  >
                    <option value="distribuidor">Distribuidor</option>
                    <option value="lider">Líder</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0B3D2E] hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
                >
                  Guardar & Autorizar
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
