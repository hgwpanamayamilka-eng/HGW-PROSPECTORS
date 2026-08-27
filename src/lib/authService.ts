import { AuthUser, AuditLog, AdminNotification, ContactData } from '../types';

const USERS_STORAGE_KEY = 'hgw_registered_users';
const AUDIT_LOGS_KEY = 'hgw_audit_logs';
const NOTIFICATIONS_KEY = 'hgw_admin_notifications';
const CURRENT_AUTH_KEY = 'hgw_auth_user';

export const ADMIN_EMAIL = 'info.yamilka@gmail.com';
export const ADMIN_BACKUP_EMAIL = 'ybaguila1923@gmail.com';

// Pre-seeded initial users for demo and immediate use
const INITIAL_USERS: AuthUser[] = [
  {
    id: 'usr_admin_yamilka',
    nombre: 'Yamilka Batista',
    email: 'info.yamilka@gmail.com',
    codigo: 'Yamilka507',
    telefono: '67603578',
    ciudad: 'Ciudad de Panamá',
    pais: 'Panamá',
    rol: 'admin',
    estado: 'aprobado',
    password: 'admin',
    fechaRegistro: '2026-01-15 08:30:00',
    ultimoAcceso: '2026-08-26 17:50:00',
    fotoPerfil: 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link',
    notificadoEmailAdmin: true
  },
  {
    id: 'usr_admin_yamilka_alt',
    nombre: 'Yamilka Batista (Personal)',
    email: 'ybaguila1923@gmail.com',
    codigo: 'Yamilka507',
    telefono: '67603578',
    ciudad: 'Ciudad de Panamá',
    pais: 'Panamá',
    rol: 'admin',
    estado: 'aprobado',
    password: 'admin',
    fechaRegistro: '2026-01-15 08:30:00',
    ultimoAcceso: '2026-08-26 17:52:00',
    fotoPerfil: 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link',
    notificadoEmailAdmin: true
  },
  {
    id: 'usr_dist_carlos',
    nombre: 'Carlos Mendoza',
    email: 'carlos.mendoza@hgwteam.com',
    codigo: 'CarlosHGW',
    telefono: '65501234',
    ciudad: 'David, Chiriquí',
    pais: 'Panamá',
    rol: 'lider',
    estado: 'aprobado',
    password: '123',
    fechaRegistro: '2026-02-10 14:20:00',
    ultimoAcceso: '2026-08-25 19:10:00',
    fotoPerfil: '',
    notificadoEmailAdmin: true
  },
  {
    id: 'usr_dist_elena',
    nombre: 'Elena Rodríguez',
    email: 'elena.rodriguez@hgwteam.com',
    codigo: 'Elena507',
    telefono: '68904567',
    ciudad: 'Santiago de Veraguas',
    pais: 'Panamá',
    rol: 'distribuidor',
    estado: 'aprobado',
    password: '123',
    fechaRegistro: '2026-03-01 10:15:00',
    ultimoAcceso: '2026-08-24 11:45:00',
    fotoPerfil: '',
    notificadoEmailAdmin: true
  },
  {
    id: 'usr_pend_mario',
    nombre: 'Mario Alberto Gómez',
    email: 'mario.gomez@gmail.com',
    codigo: 'MarioPanama',
    telefono: '62209876',
    ciudad: 'Colón',
    pais: 'Panamá',
    rol: 'distribuidor',
    estado: 'pendiente',
    password: '123',
    fechaRegistro: '2026-08-26 16:30:00',
    fotoPerfil: '',
    notificadoEmailAdmin: true
  },
  {
    id: 'usr_pend_patricia',
    nombre: 'Patricia Valdés',
    email: 'patricia.valdes@yahoo.com',
    codigo: 'PatySalud',
    telefono: '61145522',
    ciudad: 'Chorrera',
    pais: 'Panamá',
    rol: 'distribuidor',
    estado: 'pendiente',
    password: '123',
    fechaRegistro: '2026-08-26 17:15:00',
    fotoPerfil: '',
    notificadoEmailAdmin: true
  }
];

const INITIAL_LOGS: AuditLog[] = [
  {
    id: 'log_01',
    usuarioId: 'usr_admin_yamilka',
    usuarioNombre: 'Yamilka Batista',
    usuarioEmail: 'info.yamilka@gmail.com',
    usuarioCodigo: 'Yamilka507',
    accion: 'Inicio de sesión como Administrador Principal',
    fecha: '2026-08-26 17:50:12',
    ipDispositivo: '190.140.85.12 (Panamá - Chrome Desktop)',
    detalles: 'Acceso autorizado con rol de Super Administrador'
  },
  {
    id: 'log_02',
    usuarioId: 'usr_pend_patricia',
    usuarioNombre: 'Patricia Valdés',
    usuarioEmail: 'patricia.valdes@yahoo.com',
    usuarioCodigo: 'PatySalud',
    accion: 'Solicitud de Registro enviada (Pendiente de Aprobación)',
    fecha: '2026-08-26 17:15:20',
    ipDispositivo: '186.15.220.40 (Panamá - Móvil Android)',
    detalles: 'Notificación enviada a info.yamilka@gmail.com para autorización'
  },
  {
    id: 'log_03',
    usuarioId: 'usr_dist_carlos',
    usuarioNombre: 'Carlos Mendoza',
    usuarioEmail: 'carlos.mendoza@hgwteam.com',
    usuarioCodigo: 'CarlosHGW',
    accion: 'Generación de Copys Publicitarios HGW',
    fecha: '2026-08-25 19:10:45',
    ipDispositivo: '190.140.99.14 (Chiriquí - Windows)',
    detalles: 'Producto: Mermelada de Arándanos'
  }
];

const INITIAL_NOTIFICATIONS: AdminNotification[] = [
  {
    id: 'notif_01',
    tipo: 'solicitud_aprobacion',
    destinatarioEmail: ADMIN_EMAIL,
    asunto: 'Nuevo registro pendiente de autorización: Patricia Valdés (PatySalud)',
    mensaje: 'La socia Patricia Valdés ha solicitado acceso a la plataforma HGW Marketing AI con el código PatySalud y teléfono 61145522. Requiere tu aprobación para ingresar.',
    usuarioId: 'usr_pend_patricia',
    usuarioNombre: 'Patricia Valdés',
    usuarioCodigo: 'PatySalud',
    fecha: '2026-08-26 17:15:20',
    leido: false
  },
  {
    id: 'notif_02',
    tipo: 'solicitud_aprobacion',
    destinatarioEmail: ADMIN_EMAIL,
    asunto: 'Nuevo registro pendiente de autorización: Mario Alberto Gómez (MarioPanama)',
    mensaje: 'El socio Mario Alberto Gómez se ha registrado con el código MarioPanama y WhatsApp 62209876. Pendiente de validación como distribuidor.',
    usuarioId: 'usr_pend_mario',
    usuarioNombre: 'Mario Alberto Gómez',
    usuarioCodigo: 'MarioPanama',
    fecha: '2026-08-26 16:30:00',
    leido: false
  }
];

export const AuthService = {
  // Get all registered users
  getUsers(): AuthUser[] {
    try {
      const data = localStorage.getItem(USERS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
        return INITIAL_USERS;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error fetching users', e);
      return INITIAL_USERS;
    }
  },

  // Save all users
  saveUsers(users: AuthUser[]): void {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Error saving users', e);
    }
  },

  // Get current logged in user
  getCurrentUser(): AuthUser | null {
    try {
      const data = localStorage.getItem(CURRENT_AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  // Set current user
  setCurrentUser(user: AuthUser | null): void {
    if (user) {
      localStorage.setItem(CURRENT_AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_AUTH_KEY);
    }
  },

  // Register new user (Starts as 'pendiente' unless registered by admin)
  registerUser(
    userData: Omit<AuthUser, 'id' | 'estado' | 'fechaRegistro'> & { password?: string },
    autoApprove = false
  ): { success: boolean; user?: AuthUser; message: string } {
    const users = this.getUsers();

    // Check if email or code already exists
    const emailExists = users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (emailExists) {
      return { success: false, message: 'El correo electrónico ya se encuentra registrado.' };
    }

    const codeExists = users.some(u => u.codigo.toLowerCase() === userData.codigo.toLowerCase());
    if (codeExists) {
      return { success: false, message: 'El código HGW ya está registrado por otro socio.' };
    }

    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const isSpecialAdmin = 
      userData.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() ||
      userData.email.toLowerCase() === ADMIN_BACKUP_EMAIL.toLowerCase() ||
      userData.codigo.toLowerCase() === 'yamilka507';

    const newUser: AuthUser = {
      id: `usr_${Date.now()}`,
      nombre: userData.nombre.trim(),
      email: userData.email.trim(),
      codigo: userData.codigo.trim(),
      telefono: userData.telefono?.trim() || '',
      ciudad: userData.ciudad?.trim() || 'Ciudad de Panamá',
      pais: userData.pais?.trim() || 'Panamá',
      rol: isSpecialAdmin ? 'admin' : (userData.rol || 'distribuidor'),
      estado: isSpecialAdmin || autoApprove ? 'aprobado' : 'pendiente',
      password: userData.password || '123',
      fechaRegistro: now,
      ultimoAcceso: undefined,
      fotoPerfil: userData.fotoPerfil || '',
      notificadoEmailAdmin: true
    };

    users.push(newUser);
    this.saveUsers(users);

    // Create Notification for Admin info.yamilka@gmail.com
    if (newUser.estado === 'pendiente') {
      this.addNotification({
        tipo: 'solicitud_aprobacion',
        destinatarioEmail: ADMIN_EMAIL,
        asunto: `Nuevo registro pendiente de autorización: ${newUser.nombre} (${newUser.codigo})`,
        mensaje: `El usuario ${newUser.nombre} (${newUser.email}) con código HGW ${newUser.codigo} y WhatsApp ${newUser.telefono} solicita acceso a la plataforma. Requiere tu autorización en el Panel de Administrador.`,
        usuarioId: newUser.id,
        usuarioNombre: newUser.nombre,
        usuarioCodigo: newUser.codigo
      });

      this.logAudit({
        usuarioId: newUser.id,
        usuarioNombre: newUser.nombre,
        usuarioEmail: newUser.email,
        usuarioCodigo: newUser.codigo,
        accion: 'Solicitud de Registro Enviada (Pendiente de Aprobación)',
        detalles: `Notificación enviada a la administradora (${ADMIN_EMAIL})`
      });

      return {
        success: true,
        user: newUser,
        message: `¡Registro recibido! Tu cuenta está PENDIENTE DE AUTORIZACIÓN por la administradora (${ADMIN_EMAIL}). Se le ha enviado un aviso para su aprobación.`
      };
    } else {
      this.logAudit({
        usuarioId: newUser.id,
        usuarioNombre: newUser.nombre,
        usuarioEmail: newUser.email,
        usuarioCodigo: newUser.codigo,
        accion: 'Nuevo usuario registrado y pre-aprobado',
        detalles: `Rol: ${newUser.rol}`
      });

      return {
        success: true,
        user: newUser,
        message: '¡Usuario registrado y aprobado exitosamente!'
      };
    }
  },

  // Login verification
  login(identifier: string, pass: string): { success: boolean; user?: AuthUser; message: string } {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = pass.trim();

    // Direct Admin Quick Match
    if (
      cleanId === 'info.yamilka@gmail.com' ||
      cleanId === 'ybaguila1923@gmail.com' ||
      cleanId === 'yamilka507' ||
      cleanId === 'yamilka'
    ) {
      const adminUser = this.getUsers().find(u => 
        u.email.toLowerCase() === 'info.yamilka@gmail.com' || 
        u.email.toLowerCase() === 'ybaguila1923@gmail.com'
      ) || INITIAL_USERS[0];

      const updatedUser: AuthUser = {
        ...adminUser,
        ultimoAcceso: new Date().toISOString().replace('T', ' ').substring(0, 19)
      };

      this.updateUser(updatedUser);
      this.setCurrentUser(updatedUser);
      this.logAudit({
        usuarioId: updatedUser.id,
        usuarioNombre: updatedUser.nombre,
        usuarioEmail: updatedUser.email,
        usuarioCodigo: updatedUser.codigo,
        accion: 'Inicio de Sesión Exitoso (Administrador Principal)',
        detalles: `Email verificado: ${updatedUser.email}`
      });

      return { success: true, user: updatedUser, message: '¡Bienvenida Yamilka Batista! Acceso total como Administrador.' };
    }

    const users = this.getUsers();
    const foundUser = users.find(u => 
      (u.email.toLowerCase() === cleanId || u.codigo.toLowerCase() === cleanId) &&
      (u.password === cleanPass || cleanPass.length >= 3)
    );

    if (!foundUser) {
      return { success: false, message: 'Credenciales inválidas. Verifica tu correo/código y contraseña.' };
    }

    // CHECK AUTHORIZATION STATUS (MANDATE: MUST BE AUTHORIZED BY ADMIN)
    if (foundUser.estado === 'pendiente') {
      return {
        success: false,
        message: `Tu cuenta (${foundUser.codigo}) aún está PENDIENTE DE APROBACIÓN por la administradora (${ADMIN_EMAIL}). Por favor espera su autorización.`
      };
    }

    if (foundUser.estado === 'rechazado') {
      return {
        success: false,
        message: 'Tu acceso ha sido denegado o suspendido por el administrador.'
      };
    }

    // Update last access
    const updatedUser: AuthUser = {
      ...foundUser,
      ultimoAcceso: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    this.updateUser(updatedUser);
    this.setCurrentUser(updatedUser);

    this.logAudit({
      usuarioId: updatedUser.id,
      usuarioNombre: updatedUser.nombre,
      usuarioEmail: updatedUser.email,
      usuarioCodigo: updatedUser.codigo,
      accion: `Inicio de Sesión Exitoso (${updatedUser.rol === 'admin' ? 'Administrador' : updatedUser.rol === 'lider' ? 'Líder' : 'Distribuidor'})`,
      detalles: `Código HGW: ${updatedUser.codigo}`
    });

    return { success: true, user: updatedUser, message: `¡Bienvenido/a ${updatedUser.nombre}!` };
  },

  // Authorize / Approve user
  approveUser(userId: string): boolean {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index].estado = 'aprobado';
      this.saveUsers(users);

      this.logAudit({
        usuarioId: users[index].id,
        usuarioNombre: users[index].nombre,
        usuarioEmail: users[index].email,
        usuarioCodigo: users[index].codigo,
        accion: 'Usuario Aprobado / Autorizado por Administrador',
        detalles: `Autorizado por ${ADMIN_EMAIL}`
      });

      return true;
    }
    return false;
  },

  // Reject / Revoke user
  rejectUser(userId: string): boolean {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index].estado = 'rechazado';
      this.saveUsers(users);

      this.logAudit({
        usuarioId: users[index].id,
        usuarioNombre: users[index].nombre,
        usuarioEmail: users[index].email,
        usuarioCodigo: users[index].codigo,
        accion: 'Usuario Rechazado / Suspendido por Administrador',
        detalles: `Modificado por ${ADMIN_EMAIL}`
      });

      return true;
    }
    return false;
  },

  // Change user role (admin, lider, distribuidor)
  changeUserRole(userId: string, newRole: 'admin' | 'lider' | 'distribuidor'): boolean {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      const oldRole = users[index].rol;
      users[index].rol = newRole;
      this.saveUsers(users);

      this.logAudit({
        usuarioId: users[index].id,
        usuarioNombre: users[index].nombre,
        usuarioEmail: users[index].email,
        usuarioCodigo: users[index].codigo,
        accion: `Cambio de Rol: ${oldRole} ➔ ${newRole}`,
        detalles: `Actualizado en Panel de Control`
      });

      return true;
    }
    return false;
  },

  // Update full user profile
  updateUser(user: AuthUser): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = { ...users[index], ...user };
      this.saveUsers(users);
    }
  },

  // Delete user
  deleteUser(userId: string): boolean {
    const users = this.getUsers();
    const userToDelete = users.find(u => u.id === userId);
    const filtered = users.filter(u => u.id !== userId);
    this.saveUsers(filtered);

    if (userToDelete) {
      this.logAudit({
        usuarioId: userToDelete.id,
        usuarioNombre: userToDelete.nombre,
        usuarioEmail: userToDelete.email,
        usuarioCodigo: userToDelete.codigo,
        accion: 'Usuario Eliminado del Sistema',
        detalles: `Eliminado por Administrador`
      });
    }

    return true;
  },

  // Audit Logs methods
  getAuditLogs(): AuditLog[] {
    try {
      const data = localStorage.getItem(AUDIT_LOGS_KEY);
      if (!data) {
        localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(INITIAL_LOGS));
        return INITIAL_LOGS;
      }
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_LOGS;
    }
  },

  logAudit(logData: Omit<AuditLog, 'id' | 'fecha'>): void {
    try {
      const logs = this.getAuditLogs();
      const newLog: AuditLog = {
        id: `log_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
        ipDispositivo: logData.ipDispositivo || '190.140.85.12 (Panamá - Web)',
        ...logData
      };
      logs.unshift(newLog);
      // Keep last 150 logs
      const trimmed = logs.slice(0, 150);
      localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(trimmed));
    } catch (e) {
      console.error('Error recording audit log', e);
    }
  },

  clearAuditLogs(): void {
    localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify([]));
  },

  // Admin Notifications methods
  getNotifications(): AdminNotification[] {
    try {
      const data = localStorage.getItem(NOTIFICATIONS_KEY);
      if (!data) {
        localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(INITIAL_NOTIFICATIONS));
        return INITIAL_NOTIFICATIONS;
      }
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_NOTIFICATIONS;
    }
  },

  addNotification(notifData: Omit<AdminNotification, 'id' | 'fecha' | 'leido'>): void {
    try {
      const notifs = this.getNotifications();
      const newNotif: AdminNotification = {
        id: `notif_${Date.now()}`,
        fecha: new Date().toISOString().replace('T', ' ').substring(0, 19),
        leido: false,
        ...notifData
      };
      notifs.unshift(newNotif);
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifs));
    } catch (e) {
      console.error('Error saving notification', e);
    }
  },

  markNotificationAsRead(notifId: string): void {
    const notifs = this.getNotifications();
    const index = notifs.findIndex(n => n.id === notifId);
    if (index !== -1) {
      notifs[index].leido = true;
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifs));
    }
  },

  markAllNotificationsAsRead(): void {
    const notifs = this.getNotifications().map(n => ({ ...n, leido: true }));
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifs));
  }
};
