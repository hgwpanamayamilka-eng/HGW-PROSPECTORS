import { ContactData } from '../../types';

export type MLMObjectiveType = 
  | 'presentacion_negocio'
  | 'invitacion_zoom'
  | 'seguimiento_efectivo'
  | 'cierre_afiliacion'
  | 'activacion_codigo'
  | 'cierre_fin_de_mes'
  | 'reunion_productos'
  | 'promociones_especiales'
  | 'enfoque_salud'
  | 'liderazgo_expansion';

export interface MLMConfig {
  objective: MLMObjectiveType;
  targetAudience: string;
  tone: string;
  zoomLink?: string;
  zoomDate?: string;
  zoomTime?: string;
  speakerName?: string;
  speakerRank?: string;
  customProductOrTopic?: string;
  promoDetails?: string;
}

export function buildMLMPromptMaster(config: MLMConfig, contact: ContactData): string {
  return `Actúa como un Top Earner, copywriter y estratega de élite en Network Marketing y Social Selling para la compañía Health Green World (HGW).

OBJETIVO PRINCIPAL DE LA CAMPAÑA:
- Tipo de mensaje: ${config.objective.replace(/_/g, ' ').toUpperCase()}
- Audiencia objetivo: ${config.targetAudience}
- Tono: ${config.tone}
${config.zoomDate ? `- Fecha y Hora de la sesión: ${config.zoomDate} a las ${config.zoomTime || '8:00 PM'}` : ''}
${config.zoomLink ? `- Enlace Zoom: ${config.zoomLink}` : ''}
${config.speakerName ? `- Ponente / Invitado especial: ${config.speakerName} (${config.speakerRank || 'Líder Destacado'})` : ''}
${config.customProductOrTopic ? `- Tema / Producto central: ${config.customProductOrTopic}` : ''}
${config.promoDetails ? `- Promoción / Beneficio especial: ${config.promoDetails}` : ''}

DATOS DEL DISTRIBUIDOR / PATROCINADOR:
- Nombre del líder: ${contact.nombre}
- WhatsApp: ${contact.whatsapp}
- Enlace directo a WhatsApp: ${contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
- Código Oficial de Socio: ${contact.codigo}
- País / Sede: ${contact.pais || 'Panamá e Internacional'}

REGLAS DE ORO DE NETWORK MARKETING ÉTICO:
1. No vendas humo, ni prometas que se harán millonarios sin esfuerzo o de la noche a la mañana.
2. Destaca el modelo de **Plan de Ganancia Mutua** (unilateral, donde ganas por patrocinar y por el crecimiento de tu equipo sin candados absurdos), el respaldo de más de 31 años de la compañía en más de 69 países y la calidad certificada de los productos.
3. Genera copys magnéticos, persuasivos, estructurados con Gancho (Hook), Cuerpo/Desarrollo, Beneficio claro y Llamado a la Acción (CTA) directo a WhatsApp con enlace prellenado.
4. Si es para **Activación de Código**: habla con empatía, recordándole que ya tiene su membresía creada, que no pierda su posición en la red y los beneficios del 30% a 50% de descuento permanente en sus compras.
5. Si es para **Fin de Mes**: genera sentido de urgencia real (cierre de ciclo, calificación a rangos, maximizar bonos de equipo y promociones por volumen).
6. Si es para **Invitación a Zoom**: destaca la exclusividad de los cupos de la sala y el valor del entrenamiento.

Genera 10 variaciones de copys profesionales de alto impacto listos para WhatsApp, Instagram, Facebook y difusión privada.`;
}

export interface GeneratedMLMCopy {
  id: string;
  title: string;
  category: string;
  hook: string;
  body: string;
  cta: string;
  fullMessage: string;
  tags: string[];
}

export function generateMLMCollection(config: MLMConfig, contact: ContactData): GeneratedMLMCopy[] {
  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;
  const zoomInfo = config.zoomDate ? `📅 Fecha: ${config.zoomDate}\n⏰ Hora: ${config.zoomTime || '8:00 PM'}\n🔗 Sala Zoom: ${config.zoomLink || 'Enlace enviado por privado'}` : '';

  switch (config.objective) {
    case 'activacion_codigo':
      return [
        {
          id: 'act-1',
          title: 'Recordatorio Amigable de Membresía',
          category: 'Activación de Código',
          hook: '¡Hola! 👋 Quería saludarte y recordarte un beneficio que ya tienes activo en tus manos...',
          body: `Recuerda que ya cuentas con tu código oficial de socio en HGW (${contact.codigo}). Con este código tienes acceso a comprar con hasta un 30% y 50% de descuento en todos los productos de nutrición, cuidado personal y bienestar.\n\nAl realizar tu primera compra de activación, no solo aseguras tus productos favoritos para ti o tu familia, sino que también activas tu posición en el sistema de Ganancia Mutua sin riesgo de perder tu registro.`,
          cta: `¿Te gustaría que te ayude hoy a elegir tu combo de activación ideal según tus metas? Escríbeme directo: ${waLink}`,
          fullMessage: `¡Hola! 👋 Quería saludarte y recordarte un beneficio que ya tienes activo en tus manos...\n\nRecuerda que ya cuentas con tu código oficial de socio en HGW (${contact.codigo}). Con este código tienes acceso a comprar con hasta un 30% y 50% de descuento en todos los productos de nutrición, cuidado personal y bienestar.\n\nAl realizar tu primera compra de activación, no solo aseguras tus productos favoritos para ti o tu familia, sino que también activas tu posición en el sistema de Ganancia Mutua sin riesgo de perder tu registro.\n\n📲 Escríbeme y armamos tu pedido hoy: ${waLink}`,
          tags: ['#Activacion', '#CodigoHGW', '#DescuentoSocio', '#SaludIntegral']
        },
        {
          id: 'act-2',
          title: 'Protege tu Posición en la Red',
          category: 'Activación de Código',
          hook: '⚠️ Aviso importante sobre tu membresía HGW:',
          body: `Hola, paso por aquí para comentarte que tu código de registro sigue disponible, pero el sistema realiza actualizaciones periódicas de cuentas inactivas.\n\nCon una compra mínima de activación puedes comenzar a consumir productos premium (como el Café con Arándanos, Turmalina o Spirulina) a precio de mayorista y comenzar a generar ingresos si decides compartirlo.`,
          cta: `Dime qué productos te llaman la atención y te paso la lista de precios de socio: ${waLink}`,
          fullMessage: `⚠️ Aviso importante sobre tu membresía HGW:\n\nHola, paso por aquí para comentarte que tu código de registro sigue disponible, pero el sistema realiza actualizaciones periódicas de cuentas inactivas.\n\nCon una compra mínima de activación puedes comenzar a consumir productos premium (como el Café con Arándanos, Turmalina o Spirulina) a precio de mayorista y comenzar a generar ingresos si decides compartirlo.\n\n👉 Escríbeme para activar tu código hoy mismo: ${waLink}`,
          tags: ['#HGWPanama', '#Oportunidad', '#PlanDeGananciaMutua']
        },
        {
          id: 'act-3',
          title: 'Promoción Especial por Activación',
          category: 'Activación de Código',
          hook: '🎁 ¡Tenemos regalos y asesoría especial para las activaciones de esta semana!',
          body: `Si estabas esperando el mejor momento para activar tu código HGW (${contact.codigo}), esta semana tenemos un combo especial de bienvenida que incluye asesoría personalizada de bienestar y acceso a nuestros entrenamientos de la Academia Digital.`,
          cta: `Escríbeme 'QUIERO MI COMBO' al WhatsApp: ${waLink}`,
          fullMessage: `🎁 ¡Tenemos regalos y asesoría especial para las activaciones de esta semana!\n\nSi estabas esperando el mejor momento para activar tu código HGW (${contact.codigo}), esta semana tenemos un combo especial de bienvenida que incluye asesoría personalizada de bienestar y acceso a nuestros entrenamientos de la Academia Digital.\n\n📲 Escríbeme 'QUIERO MI COMBO' aquí: ${waLink}`,
          tags: ['#ActivacionHGW', '#Bienestar', '#Emprendimiento']
        }
      ];

    case 'cierre_fin_de_mes':
      return [
        {
          id: 'fdm-1',
          title: 'Cierre de Mes de Alto Impacto',
          category: 'Cierre de Fin de Mes',
          hook: '🔥 ¡Llegó el momento de cerrar el mes como los grandes!',
          body: `Estamos en las últimas 48 horas del ciclo mensual en HGW. Es el momento de revisar tu oficina virtual, consolidar tus puntos de volumen (BV), asegurar tu calificación a rango y maximizar tus bonos de Ganancia Mutua.\n\nSi te faltan pocos puntos para tu siguiente nivel o deseas aprovechar las promociones de volumen de fin de mes, ¡estoy disponible para ayudarte a planificar el cierre!`,
          cta: `Escríbeme directo para revisar tus números y estrategia de cierre: ${waLink}`,
          fullMessage: `🔥 ¡Llegó el momento de cerrar el mes como los grandes!\n\nEstamos en las últimas 48 horas del ciclo mensual en HGW. Es el momento de revisar tu oficina virtual, consolidar tus puntos de volumen (BV), asegurar tu calificación a rango y maximizar tus bonos de Ganancia Mutua.\n\nSi te faltan pocos puntos para tu siguiente nivel o deseas aprovechar las promociones de volumen de fin de mes, ¡estoy disponible para ayudarte a planificar el cierre!\n\n📲 Contáctame aquí: ${waLink}`,
          tags: ['#CierreDeMes', '#RangoHGW', '#GananciaMutua', '#Liderazgo']
        },
        {
          id: 'fdm-2',
          title: 'Último Día de Promociones Mensuales',
          category: 'Cierre de Fin de Mes',
          hook: '⏳ HOY termina la oportunidad de aprovechar los precios y bonos de este mes.',
          body: `A todos nuestros socios y clientes preferenciales: hoy a medianoche cierra el sistema para computar comisiones y promociones especiales del mes. Asegura tus pedidos en las oficinas autorizadas o a través de la plataforma web.`,
          cta: `Haz tu pedido de cierre ahora mismo: ${waLink}`,
          fullMessage: `⏳ HOY termina la oportunidad de aprovechar los precios y bonos de este mes.\n\nA todos nuestros socios y clientes preferenciales: hoy a medianoche cierra el sistema para computar comisiones y promociones especiales del mes. Asegura tus pedidos en las oficinas autorizadas o a través de la plataforma web.\n\n👉 Escríbeme antes del corte: ${waLink}`,
          tags: ['#FinDeMes', '#HGW', '#Descuentos', '#Socios']
        }
      ];

    case 'invitacion_zoom':
      return [
        {
          id: 'zoom-1',
          title: 'Invitación a Masterclass / Oportunidad Zoom',
          category: 'Invitación a Zoom',
          hook: '🚀 ¿Cómo generar ingresos desde casa en la industria del bienestar?',
          body: `Hoy tendremos una sesión exclusiva y gratuita por Zoom donde te mostraremos cómo una empresa global con más de 31 años en 69 países está revolucionando el comercio electrónico y las redes con su Plan de Ganancia Mutua.\n\n${zoomInfo}\n\n🎙️ Expositor: ${config.speakerName || contact.nombre} (${config.speakerRank || 'Líder Oficial HGW'})`,
          cta: `Cupos limitados en la sala. Confírmame tu asistencia para reservarte el acceso VIP: ${waLink}`,
          fullMessage: `🚀 ¿Cómo generar ingresos desde casa en la industria del bienestar?\n\nHoy tendremos una sesión exclusiva y gratuita por Zoom donde te mostraremos cómo una empresa global con más de 31 años en 69 países está revolucionando el comercio electrónico y las redes con su Plan de Ganancia Mutua.\n\n${zoomInfo}\n\n🎙️ Expositor: ${config.speakerName || contact.nombre} (${config.speakerRank || 'Líder Oficial HGW'})\n\n📲 Pídeme el enlace de acceso por WhatsApp: ${waLink}`,
          tags: ['#ZoomHGW', '#NegociosDigitales', '#Emprende', '#Masterclass']
        },
        {
          id: 'zoom-2',
          title: 'Charla de Salud y Prevención por Zoom',
          category: 'Invitación a Zoom',
          hook: '🌿 Conoce los secretos de la salud celular y fitoterapia natural en vivo.',
          body: `Te invito a una charla de 40 minutos donde especialistas en bienestar compartirán cómo mejorar tu calidad de vida, digestión, energía y defensas mediante extractos botánicos puros.\n\n${zoomInfo}`,
          cta: `Escríbeme 'QUIERO ASISTIR' y te envío el enlace directo: ${waLink}`,
          fullMessage: `🌿 Conoce los secretos de la salud celular y fitoterapia natural en vivo.\n\nTe invito a una charla de 40 minutos donde especialistas en bienestar compartirán cómo mejorar tu calidad de vida, digestión, energía y defensas mediante extractos botánicos puros.\n\n${zoomInfo}\n\n📲 Reserva tu cupo aquí: ${waLink}`,
          tags: ['#SaludNatural', '#WebinarSalud', '#BienestarIntegral']
        }
      ];

    case 'presentacion_negocio':
      return [
        {
          id: 'pres-1',
          title: 'Presentación de Negocio con Plan Ganancia Mutua',
          category: 'Presentación de Negocio',
          hook: '💼 ¿Buscas un negocio real, con productos de alta rotación y sin candados?',
          body: `Health Green World (HGW) ofrece un modelo innovador llamado Plan de Ganancia Mutua: ganas el 50% de las comisiones de las personas que patrocinas y el 50% del trabajo en equipo sin estructuras complejas.\n\nProductos con certificaciones internacionales (FDA, ISO 9001, Halal) que la gente ya consume a diario: café saludable, té, nutrición y cuidado personal.`,
          cta: `Te invito a conocer el plan de compensación completo en 15 minutos: ${waLink} (Código: ${contact.codigo})`,
          fullMessage: `💼 ¿Buscas un negocio real, con productos de alta rotación y sin candados?\n\nHealth Green World (HGW) ofrece un modelo innovador llamado Plan de Ganancia Mutua: ganas el 50% de las comisiones de las personas que patrocinas y el 50% del trabajo en equipo sin estructuras complejas.\n\nProductos con certificaciones internacionales (FDA, ISO 9001, Halal) que la gente ya consume a diario: café saludable, té, nutrición y cuidado personal.\n\n📲 Escríbeme y te paso el video explicativo: ${waLink}`,
          tags: ['#NegocioHGW', '#GananciaMutua', '#Emprendedores', '#LibertadFinanciera']
        }
      ];

    case 'seguimiento_efectivo':
      return [
        {
          id: 'seg-1',
          title: 'Seguimiento Cercano Post-Presentación',
          category: 'Seguimiento Efectivo',
          hook: '¡Hola! ¿Cómo estás? Me quedé pensando en la conversación que tuvimos...',
          body: `Quería saber si tuviste oportunidad de revisar la información que te compartí sobre los productos y el plan de ganancias de HGW. Sé que a veces surgen dudas sobre cómo empezar o qué paquete es el más conveniente.`,
          cta: `Dime qué fue lo que más te llamó la atención: ¿los productos para tu salud o la oportunidad de generar ingresos extras? Conversemos: ${waLink}`,
          fullMessage: `¡Hola! ¿Cómo estás? Me quedé pensando en la conversación que tuvimos...\n\nQuería saber si tuviste oportunidad de revisar la información que te compartí sobre los productos y el plan de ganancias de HGW. Sé que a veces surgen dudas sobre cómo empezar o qué paquete es el más conveniente.\n\n👉 Dime qué fue lo que más te llamó la atención: ¿los productos para tu salud o la oportunidad de generar ingresos extras? Conversemos: ${waLink}`,
          tags: ['#Seguimiento', '#Asesoria', '#HGW']
        }
      ];

    case 'cierre_afiliacion':
      return [
        {
          id: 'cie-1',
          title: 'Cierre de Afiliación Directo y Claro',
          category: 'Cierre de Afiliación',
          hook: '🎯 ¿Listo para dar el paso y comenzar a construir tu propio negocio con nosotros?',
          body: `El proceso de registro en HGW toma solo 3 minutos y te da acceso inmediato a:\n1. Código de socio internacional válido en más de 69 países.\n2. Descuento de hasta el 50% permanente.\n3. Tienda virtual y oficina en línea 24/7.\n4. Acompañamiento directo en nuestro equipo de liderazgo.`,
          cta: `Regístrate hoy con mi código de patrocinio ${contact.codigo} o escríbeme para hacerlo juntos paso a paso: ${waLink}`,
          fullMessage: `🎯 ¿Listo para dar el paso y comenzar a construir tu propio negocio con nosotros?\n\nEl proceso de registro en HGW toma solo 3 minutos y te da acceso inmediato a:\n1. Código de socio internacional válido en más de 69 países.\n2. Descuento de hasta el 50% permanente.\n3. Tienda virtual y oficina en línea 24/7.\n4. Acompañamiento directo en nuestro equipo de liderazgo.\n\n📲 Escríbeme y te registro ahora: ${waLink}`,
          tags: ['#AfiliacionHGW', '#EquipoLiderazgo', '#NuevoComienzo']
        }
      ];

    default:
      return [
        {
          id: 'gen-1',
          title: 'Mensaje de Valor y Salud',
          category: 'General',
          hook: '✨ La salud es tu mayor riqueza: cuídala con lo mejor de la naturaleza.',
          body: `En HGW creemos que un estilo de vida saludable está al alcance de todos. Conoce nuestra línea de café con arándanos, suplementos botánicos y tecnología de turmalina.`,
          cta: `Solicita tu catálogo digital completo al WhatsApp: ${waLink}`,
          fullMessage: `✨ La salud es tu mayor riqueza: cuídala con lo mejor de la naturaleza.\n\nEn HGW creemos que un estilo de vida saludable está al alcance de todos. Conoce nuestra línea de café con arándanos, suplementos botánicos y tecnología de turmalina.\n\n📲 Pide tu catálogo aquí: ${waLink}`,
          tags: ['#SaludHGW', '#Bienestar', '#VidaSaludable']
        }
      ];
  }
}
