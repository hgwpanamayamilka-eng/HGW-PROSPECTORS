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

  // Login verification with strict password check for both admin and users
  login(identifier: string, pass: string): { success: boolean; user?: AuthUser; message: string } {
    const cleanId = identifier.trim().toLowerCase();
    const cleanPass = pass.trim();

    if (!cleanId || !cleanPass) {
      return { success: false, message: 'Por favor ingresa tu correo/código y tu contraseña de acceso.' };
    }

    const users = this.getUsers();
    
    // Find user by email or HGW code
    const foundUser = users.find(u => 
      u.email.toLowerCase() === cleanId || u.codigo.toLowerCase() === cleanId
    );

    if (!foundUser) {
      return { success: false, message: 'Usuario no encontrado. Verifica tu correo electrónico o código HGW registrado.' };
    }

    // STRICT PASSWORD CHECK - Both admin and regular users must provide their exact password
    if (foundUser.password !== cleanPass) {
      this.logAudit({
        usuarioId: foundUser.id,
        usuarioNombre: foundUser.nombre,
        usuarioEmail: foundUser.email,
        usuarioCodigo: foundUser.codigo,
        accion: 'Intento de inicio de sesión fallido (Contraseña incorrecta)',
        detalles: `Identificador ingresado: ${identifier}`
      });
      return { success: false, message: 'Contraseña incorrecta. Por favor verifica tus credenciales e intenta nuevamente.' };
    }

    // CHECK AUTHORIZATION STATUS (Must be approved by admin)
    if (foundUser.estado === 'pendiente') {
      return {
        success: false,
        message: `Tu cuenta (${foundUser.codigo}) aún está PENDIENTE DE APROBACIÓN por la administradora (${ADMIN_EMAIL}). Por favor espera su autorización.`
      };
    }

    if (foundUser.estado === 'rechazado') {
      return {
        success: false,
        message: 'Tu acceso a la plataforma ha sido denegado o suspendido por la administradora.'
      };
    }

    // Update last access timestamp
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
      accion: `Inicio de Sesión Exitoso (${updatedUser.rol === 'admin' ? 'Administradora' : updatedUser.rol === 'lider' ? 'Líder' : 'Distribuidor'})`,
      detalles: `Código HGW: ${updatedUser.codigo} · Rol: ${updatedUser.rol.toUpperCase()}`
    });

    return { 
      success: true, 
      user: updatedUser, 
      message: updatedUser.rol === 'admin' 
        ? `¡Bienvenida Administradora ${updatedUser.nombre}!` 
        : `¡Bienvenido/a ${updatedUser.nombre}!` 
    };
  },

  // Update password for user
  updatePassword(userId: string, currentPass: string, newPass: string): { success: boolean; message: string } {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return { success: false, message: 'Usuario no encontrado.' };
    }
    if (users[index].password !== currentPass.trim()) {
      return { success: false, message: 'La contraseña actual no coincide.' };
    }
    if (newPass.trim().length < 3) {
      return { success: false, message: 'La nueva contraseña debe tener al menos 3 caracteres.' };
    }
    users[index].password = newPass.trim();
    this.saveUsers(users);

    const current = this.getCurrentUser();
    if (current && current.id === userId) {
      this.setCurrentUser({ ...current, password: newPass.trim() });
    }

    this.logAudit({
      usuarioId: users[index].id,
      usuarioNombre: users[index].nombre,
      usuarioEmail: users[index].email,
      usuarioCodigo: users[index].codigo,
      accion: 'Cambio de contraseña exitoso',
      detalles: 'Contraseña actualizada por el usuario'
    });

    return { success: true, message: '¡Contraseña actualizada correctamente!' };
  },

  // Admin reset password for any user
  adminResetPassword(userId: string, newPass: string): { success: boolean; message: string } {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return { success: false, message: 'Usuario no encontrado.' };
    }
    if (!newPass.trim()) {
      return { success: false, message: 'La nueva contraseña no puede estar vacía.' };
    }
    users[index].password = newPass.trim();
    this.saveUsers(users);

    this.logAudit({
      usuarioId: users[index].id,
      usuarioNombre: users[index].nombre,
      usuarioEmail: users[index].email,
      usuarioCodigo: users[index].codigo,
      accion: 'Contraseña restablecida por Administradora',
      detalles: `Modificada por ${ADMIN_EMAIL}`
    });

    return { success: true, message: `Contraseña de ${users[index].nombre} restablecida correctamente a: ${newPass.trim()}` };
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
