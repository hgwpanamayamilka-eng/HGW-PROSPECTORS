import { ContactData } from '../../types';

export type BusinessStage = 
  | 'prospeccion'
  | 'presentacion'
  | 'seguimiento'
  | 'cierre'
  | 'acompanamiento'
  | 'herramientas_trabajo'
  | 'herramientas_ia';

export interface BusinessOpportunityConfig {
  stage: BusinessStage;
  targetProfile: string;
  tone: string;
  presentationType?: 'zoom' | 'presencial' | 'uno_a_uno' | 'video_grabado';
  zoomLink?: string;
  zoomDate?: string;
  zoomTime?: string;
  customOpportunityAngle?: string;
  additionalNotes?: string;
}

export interface GeneratedBusinessCopy {
  id: string;
  stage: BusinessStage;
  stageLabel: string;
  title: string;
  targetProfile: string;
  hook: string;
  body: string;
  keyPoints: string[];
  cta: string;
  fullMessage: string;
  tags: string[];
}

export function buildBusinessOpportunityMasterPrompt(config: BusinessOpportunityConfig, contact: ContactData): string {
  const stageNames: Record<BusinessStage, string> = {
    prospeccion: 'PROSPECCIÓN & ATRACCIÓN DE TALENTOS',
    presentacion: 'PRESENTACIÓN DE OPORTUNIDAD HGW (PLAN DE GANANCIA MUTUA)',
    seguimiento: 'SEGUIMIENTO PROFESIONAL & RESOLUCIÓN DE OBJECIONES',
    cierre: 'CIERRE EFECTIVO DE AFILIACIONES Y MEMBRESÍAS',
    acompanamiento: 'ACOMPAÑAMIENTO, ONBOARDING Y DUPLICACIÓN DE SOCIOS',
    herramientas_trabajo: 'HERRAMIENTAS DE TRABAJO Y SISTEMA EDUCATIVO HGW',
    herramientas_ia: 'APLICACIÓN DE HERRAMIENTAS CON INTELIGENCIA ARTIFICIAL PARA NETWORK MARKETING'
  };

  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

  return `================================================================================
PROMPT MAESTRO: SISTEMA DE NEGOCIO, PROSPECCIÓN Y CIERRE HGW CON INTELIGENCIA ARTIFICIAL
================================================================================

Actúa como un Top Líder Diamante Internacional, Director de Expansión Global y Experto en Social Selling y Copywriting para la compañía **Health Green World (HGW)**.

1. OBJETIVO DE LA COMUNICACIÓN:
- Fase del Embudo de Negocio: ${stageNames[config.stage]}
- Perfil del Prospecto / Socio: ${config.targetProfile || 'Emprendedores, profesionales, mamás líderes o personas en búsqueda de ingresos adicionales'}
- Tono de Comunicación: ${config.tone || 'Profesional, empático, magnético y de liderazgo'}
${config.presentationType ? `- Modalidad de Presentación: ${config.presentationType.toUpperCase()}` : ''}
${config.zoomDate ? `- Datos de Sala Virtual: ${config.zoomDate} a las ${config.zoomTime || '8:00 PM'} (Link: ${config.zoomLink || 'Por privado'})` : ''}
${config.customOpportunityAngle ? `- Enfoque Estratégico Especial: ${config.customOpportunityAngle}` : ''}

2. DATOS OFICIALES DEL PATROCINADOR / DISTRIBUIDOR:
- Nombre del Líder: ${contact.nombre}
- Código Oficial de Patrocinio: ${contact.codigo}
- WhatsApp de Contacto: ${contact.whatsapp}
- Enlace Directo a WhatsApp: ${waLink}
- País / Sede: ${contact.pais || 'Panamá e Internacional'}

3. PILARES OFICIALES DEL MODELO DE NEGOCIO HGW A DESTACAR:
- **Plan de Ganancia Mutua (Unilateral)**: Ganas el 50% de ganancia mutua por el crecimiento de tus patrocinados, sin cortes, sin candados complejos, sin igualación de piernas obligatoria.
- **Respaldo Corporativo Internacional**: Más de 30 años de investigación, presencia en más de 69 países y fábricas propias con certificaciones FDA, GMP e ISO.
- **Productos de Consumo Masivo y Alta Rotación**: Salud preventiva, bienestar celular, turmalina infrarroja, arándanos orgánicos, café saludable y cuidado personal.
- **Membresías Accesibles**: Opciones flexibles de inicio (Pre-Junior, Junior, Senior y Master) con compras acumulables.
- **Sistema de Apoyo e Inteligencia Artificial**: Acompañamiento paso a paso, capacitaciones semanales y herramientas digitales modernas.

4. INSTRUCCIONES DE GENERACIÓN:
- Genera mensajes persuasivos con estructura: Gancho (Hook magnético), Desarrollo empático, Beneficios clave y Llamado a la Acción (CTA) directo a WhatsApp.
- Adapta el lenguaje para que sea 100% ético, sin promesas irreales de riqueza mágica, sino enfocado en desarrollo de habilidades, apalancamiento y libertad financiera real.`;
}

// 35+ High-Converting Pre-Built Business Copys across all 7 stages
export const PREBUILT_BUSINESS_COPYS: GeneratedBusinessCopy[] = [
  // 1. PROSPECCIÓN (5 copys)
  {
    id: 'prosp-1',
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: 'Diversificación de Ingresos para Emprendedores',
    targetProfile: 'Emprendedores y personas que buscan un segundo ingreso',
    hook: '¿Te has puesto a pensar qué pasaría si tu única fuente de ingresos se detiene hoy?',
    body: 'Los tiempos cambiaron y depender de un solo ingreso ya no es una opción segura. Hoy en día, la verdadera estabilidad está en construir un activo digital en una industria de consumo masivo que no se detiene: la salud y el bienestar integral.\n\nEn HGW desarrollamos un modelo inteligente donde no necesitas grandes inventarios ni experiencia previa. Trabajamos con un plan de Ganancia Mutua donde tu esfuerzo y el de tu equipo se multiplican desde el primer mes.',
    keyPoints: ['Sin inventarios obligatorios', 'Plan de Ganancia Mutua 50%', 'Acompañamiento desde el día 1'],
    cta: 'Si tienes 15 minutos para ver cómo estamos diversificando con éxito, escríbeme y te comparto los detalles sin compromiso.',
    fullMessage: `¿Te has puesto a pensar qué pasaría si tu única fuente de ingresos se detiene hoy? 🤔\n\nLos tiempos cambiaron y depender de un solo ingreso ya no es una opción segura. Hoy en día, la verdadera estabilidad está en construir un activo digital en una industria de consumo masivo que no se detiene: la salud y el bienestar integral.\n\nEn HGW desarrollamos un modelo inteligente donde no necesitas grandes inventarios ni experiencia previa. Trabajamos con un plan de Ganancia Mutua donde tu esfuerzo y el de tu equipo se multiplican desde el primer mes.\n\n✨ Si tienes 15 minutos para ver cómo estamos diversificando con éxito, escríbeme al WhatsApp y te comparto el acceso a nuestra próxima sesión informativa.\n\n📲 Escríbeme aquí: [WHATSAPP_LINK] (Código de patrocinio: [CODIGO])`,
    tags: ['#Emprendimiento', '#IngresosExtra', '#HGWBusiness', '#LibertadFinanciera']
  },
  {
    id: 'prosp-2',
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: 'Mamás Presentes con Negocio Digital',
    targetProfile: 'Madres que desean generar ingresos sin descuidar a sus hijos',
    hook: 'Ser mamá presente y profesional exitosa al mismo tiempo SÍ es posible.',
    body: 'Sé lo que se siente querer estar presente en cada etapa de tus hijos, pero también desear independencia económica y crecimiento personal.\n\nCon el sistema de negocio digital de HGW, puedes gestionar tu proyecto desde tu celular, en tus propios horarios, apoyándote en herramientas digitales e inteligencia artificial para automatizar tus ventas y prospectar de forma sencilla.',
    keyPoints: ['Manejo total de tu tiempo', 'Trabajo 100% desde el celular', 'Comunidad de apoyo entre mujeres líderes'],
    cta: 'Envíame un mensaje y te enseño cómo otras mamás estamos generando ingresos reales desde casa.',
    fullMessage: `Ser mamá presente y profesional exitosa al mismo tiempo SÍ es posible 👩‍👧‍👦✨\n\nSé lo que se siente querer estar presente en cada etapa de tus hijos, pero también desear independencia económica y crecimiento personal.\n\nCon el sistema de negocio digital de HGW, puedes gestionar tu proyecto desde tu celular, en tus propios horarios, apoyándote en herramientas digitales e inteligencia artificial para automatizar tus ventas y prospectar de forma sencilla.\n\n🌸 Envíame un mensaje directo y te muestro el paso a paso de cómo lo estamos logrando.\n\n📲 Contacto: [WHATSAPP_LINK] (Líder [NOMBRE] - Código [CODIGO])`,
    tags: ['#MamasEmprendedoras', '#NegocioDesdeCasa', '#HGWGlobal', '#MujeresLideres']
  },
  {
    id: 'prosp-3',
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: 'Profesionales en Búsqueda de Libertad de Tiempo',
    targetProfile: 'Empleados y profesionistas con horarios agotadores',
    hook: '¿Trabajas 8 a 10 horas al día y sientes que el sueldo se te va en la primera semana?',
    body: 'El problema no es tu capacidad ni tus ganas de trabajar: es el vehículo financiero. Trabajar por horas intercambiando tiempo por dinero tiene un límite natural.\n\nEl Network Marketing con HGW te permite crear un negocio apalancado, donde generas ingresos residuales mes tras mes por el consumo recurrente de productos de altísima demanda en salud y cuidado personal.',
    keyPoints: ['Ingresos residuales recurrentes', 'Expansión en más de 69 países', 'Educación financiera práctica'],
    cta: 'Escríbeme hoy mismo para coordinar una videollamada de 20 minutos y analizar si este modelo es para ti.',
    fullMessage: `¿Trabajas 8 a 10 horas al día y sientes que el sueldo se te va en la primera semana? ⏳\n\nEl problema no es tu capacidad ni tus ganas de trabajar: es el vehículo financiero. Trabajar por horas intercambiando tiempo por dinero tiene un límite natural.\n\nEl Network Marketing con HGW te permite crear un negocio apalancado, donde generas ingresos residuales mes tras mes por el consumo recurrente de productos de altísima demanda en salud y cuidado personal.\n\n🚀 Escríbeme hoy mismo y conversemos sobre cómo iniciar sin dejar tu empleo actual: [WHATSAPP_LINK]`,
    tags: ['#Apalancamiento', '#IngresosResiduales', '#CrecimientoProfesional']
  },
  {
    id: 'prosp-4',
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: 'Atracción por Productos de Alta Demanda',
    targetProfile: 'Comerciantes, estilistas, terapeutas y vendedores',
    hook: '¿Buscas un producto de alta rotación que la gente compre, recompre y recomiende con gusto?',
    body: 'El secreto de un negocio rentable no está en inventar la rueda, sino en comercializar productos que la gente YA necesita y consume a diario: café saludable, colágeno, cuidado femenino con turmalina, probióticos y nutrición antienvejecimiento.\n\nCon márgenes de ganancia directa de hasta el 50% al 100% y sin mínimos forzosos de recompra.',
    keyPoints: ['Ganancia directa inmediata', 'Productos orgánicos certificados', 'Recompra constante garantizada'],
    cta: 'Solicita el catálogo mayorista con precios de distribuidor escribiéndome al WhatsApp.',
    fullMessage: `¿Buscas un producto de alta rotación que la gente compre, recompre y recomiende con gusto? 🌿📦\n\nEl secreto de un negocio rentable no está en inventar la rueda, sino en comercializar productos que la gente YA necesita y consume a diario: café saludable, colágeno, cuidado femenino con turmalina, probióticos y nutrición antienvejecimiento.\n\nCon márgenes de ganancia directa de hasta el 50% al 100% y sin mínimos forzosos de recompra.\n\n📲 Solicita tu catálogo con precios de socio aquí: [WHATSAPP_LINK] (Código [CODIGO])`,
    tags: ['#VentasDirectas', '#CatalogoHGW', '#AltaRotacion', '#SaludNatural']
  },
  {
    id: 'prosp-5',
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: 'Jóvenes Emprendedores & Creadores Digitales',
    targetProfile: 'Jóvenes de 18 a 35 años interesados en monetizar redes sociales',
    hook: 'Tu celular pasa horas en tu mano: ¿te está costando dinero o te está generando ingresos?',
    body: 'Aprende a monetizar TikTok, Instagram y WhatsApp recomendando marcas internacionales en constante crecimiento. En HGW te entregamos todas las herramientas digitales, embudos con Inteligencia Artificial y capacitaciones gratuitas para que arranques tu franquicia digital sin riesgos de inventario.',
    keyPoints: ['Modelo 100% digital', 'Uso de IA para prospección', 'Comisiones semanales en dólares'],
    cta: 'Envíame un DM o mensaje por WhatsApp y te envío el video introductorio de 3 minutos.',
    fullMessage: `Tu celular pasa horas en tu mano: ¿te está costando dinero o te está generando ingresos? 📱💰\n\nAprende a monetizar TikTok, Instagram y WhatsApp recomendando marcas internacionales en constante crecimiento. En HGW te entregamos todas las herramientas digitales, embudos con Inteligencia Artificial y capacitaciones gratuitas para que arranques tu franquicia digital sin riesgos de inventario.\n\n⚡ Requisitos: Ganas de aprender y tu teléfono celular.\n📲 Escríbeme y te paso el video explicativo de 3 minutos: [WHATSAPP_LINK] (Líder [NOMBRE])`,
    tags: ['#JovenesEmprendedores', '#MonetizaTusRedes', '#NegociosDigitales']
  },

  // 2. PRESENTACIÓN DE NEGOCIO (5 copys)
  {
    id: 'pres-1',
    stage: 'presentacion',
    stageLabel: 'Presentación',
    title: 'El Revolucionario Plan de Ganancia Mutua HGW',
    targetProfile: 'Networkers con experiencia y nuevos prospectos',
    hook: 'Por primera vez en la industria: ganas el 50% de ganancia mutua por el éxito de tu equipo.',
    body: 'La gran mayoría de planes tradicionales en redes de mercadeo te ponen candados: cortes de rango, piernas balanceadas forzosas o pérdidas de comisiones si alguien de tu equipo te supera.\n\nEn HGW creamos el **Plan de Ganancia Mutua**: un sistema unilateral justo donde si tu socio gana, tú ganas exactamente el 50% de ganancia mutua de sus bonos de equipo. ¡Cero candados, máxima sinergia!',
    keyPoints: ['50% de ganancia mutua', 'Sin pérdida de comisiones por avance de rango', 'Línea unilateral sin ataduras'],
    cta: 'Conéctate a nuestra sala privada de Zoom esta noche para ver los números exactos en vivo.',
    fullMessage: `Por primera vez en la industria: ganas el 50% de ganancia mutua por el éxito de tu equipo 📈💎\n\nLa gran mayoría de planes tradicionales en redes de mercadeo te ponen candados: cortes de rango, piernas balanceadas forzosas o pérdidas de comisiones si alguien de tu equipo te supera.\n\nEn HGW creamos el **Plan de Ganancia Mutua**: un sistema unilateral justo donde si tu socio gana, tú ganas exactamente el 50% de ganancia mutua de sus bonos de equipo. ¡Cero candados, máxima sinergia!\n\n🎥 Conéctate a nuestra presentación de esta noche y conoce el plan que está rompiendo récords en más de 69 países.\n\nReserva tu cupo con anticipación: [WHATSAPP_LINK]`,
    tags: ['#PlanGananciaMutua', '#SinCandados', '#NetworkMarketingPro', '#HGW']
  },
  {
    id: 'pres-2',
    stage: 'presentacion',
    stageLabel: 'Presentación',
    title: 'Invitación a Masterclass de Negocios Virtual (Zoom)',
    targetProfile: 'Invitados especiales y prospectos tibios',
    hook: 'Tu invitación exclusiva para conocer el modelo de expansión empresarial HGW.',
    body: 'Esta noche abriremos una sesión ejecutiva vía Zoom donde explicaremos cómo posicionar la marca Health Green World en tu país o ciudad, cómo monetizar tus redes sociales y cómo calificar a los bonos de liderazgo.\n\nContaremos con la participación de líderes Diamante compartiendo su experiencia y resultados tangibles.',
    keyPoints: ['Sesión en vivo de 35 minutos', 'Demostración de productos y plan de compensación', 'Espacio de preguntas y respuestas'],
    cta: 'Confírmame tu asistencia para enviarte el enlace y la contraseña de la sala.',
    fullMessage: `Tu invitación exclusiva para conocer el modelo de expansión empresarial HGW 🌐💼\n\nEsta noche abriremos una sesión ejecutiva vía Zoom donde explicaremos cómo posicionar la marca Health Green World en tu país o ciudad, cómo monetizar tus redes sociales y cómo calificar a los bonos de liderazgo.\n\nContaremos con la participación de líderes Diamante compartiendo su experiencia y resultados tangibles.\n\n⏰ Horario: Hoy a las 8:00 PM (Hora Panamá / Internacional)\n📍 Sala privada de Zoom\n\n📲 Confírmame tu asistencia respondiendo a este mensaje para reservarte el acceso: [WHATSAPP_LINK]`,
    tags: ['#ZoomCorporativo', '#MasterclassHGW', '#OportunidadGlobal']
  },
  {
    id: 'pres-3',
    stage: 'presentacion',
    stageLabel: 'Presentación',
    title: 'Presentación Rápida de 4 Membresías HGW',
    targetProfile: 'Prospectos interesados en montos de inversión',
    hook: '¿Con cuánto se inicia en HGW? Descubre la membresía ideal para ti:',
    body: 'Una de las grandes ventajas de HGW es su accesibilidad. Puedes comenzar con una membresía pequeña y hacer upgrade acumulando compras sin límite de tiempo:\n\n1️⃣ **Pre-Junior**: Ideal para consumir con descuento y empezar a recomendar.\n2️⃣ **Junior**: Para generar ganancias rápidas de venta directa y bonos de inicio.\n3️⃣ **Senior**: Diseñada para quienes quieren construir equipo sólido.\n4️⃣ **Master**: La membresía élite con el 100% de los beneficios, máximos topes de ganancia y bonos globales.',
    keyPoints: ['Compras acumulativas de por vida', 'Sin fecha límite para subir de rango', 'Precios de socio desde el primer día'],
    cta: 'Dime con cuál de las 4 opciones te gustaría arrancar y te guío en tu registro oficial.',
    fullMessage: `¿Con cuánto se inicia en HGW? Descubre la membresía ideal para ti 💎📋\n\nUna de las grandes ventajas de HGW es su accesibilidad. Puedes comenzar con una membresía pequeña y hacer upgrade acumulando compras sin límite de tiempo:\n\n1️⃣ **Pre-Junior**: Ideal para consumir con descuento y empezar a recomendar.\n2️⃣ **Junior**: Para generar ganancias rápidas de venta directa y bonos de inicio.\n3️⃣ **Senior**: Diseñada para quienes quieren construir equipo sólido.\n4️⃣ **Master**: La membresía élite con el 100% de los beneficios, máximos topes de ganancia y bonos globales.\n\n✨ ¿Cuál se ajusta mejor a tu visión actual? Escríbeme y armamos tu combo de bienvenida: [WHATSAPP_LINK] (Código patrocinador: [CODIGO])`,
    tags: ['#MembresiasHGW', '#PreJunior', '#MasterHGW', '#InversionInteligente']
  },
  {
    id: 'pres-4',
    stage: 'presentacion',
    stageLabel: 'Presentación',
    title: 'Por Qué HGW es la Empresa de Mayor Expansión en América Latina',
    targetProfile: 'Líderes de la industria que buscan solidez corporativa',
    hook: 'Más de 30 años de respaldo científico global y la expansión más agresiva en Latinoamérica 🌎',
    body: 'Health Green World (HGW) no es una empresa improvisada. Con laboratorios propios de investigación botánica, presencia consolidada en más de 69 países y registros sanitarios al día en toda la región, ofrece el piso más firme para construir un patrimonio duradero para tu familia.',
    keyPoints: ['Fábricas y patentes propias', 'Respaldo científico internacional', 'Pioneros en Latinoamérica'],
    cta: 'Escríbeme para enviarte la ficha corporativa completa.',
    fullMessage: `Más de 30 años de respaldo científico global y la expansión más agresiva en Latinoamérica 🌎🌿\n\nHealth Green World (HGW) no es una empresa improvisada. Con laboratorios propios de investigación botánica, presencia consolidada en más de 69 países y registros sanitarios al día en toda la región, ofrece el piso más firme para construir un patrimonio duradero para tu familia.\n\n🚀 Sé pionero/a en tu ciudad o país y posiciónate al frente de la ola.\n📲 Contáctame aquí: [WHATSAPP_LINK] (Código distribuidor: [CODIGO])`,
    tags: ['#SolidezCorporativa', '#PionerosHGW', '#ExpansiónLatam']
  },
  {
    id: 'pres-5',
    stage: 'presentacion',
    stageLabel: 'Presentación',
    title: 'Video Resumen de 3 Minutos: Modelo HGW Explicado',
    targetProfile: 'Prospectos con poco tiempo que prefieren formato audiovisual',
    hook: '¿Tienes 3 minutos? Este corto video te explicará exactamente cómo funciona HGW 🎥⚡',
    body: 'Te comparto una cápsula ejecutiva donde verás: qué es HGW, nuestros productos estrella de alta rotación, cómo funciona el Plan de Ganancia Mutua y cómo registrarte hoy mismo.',
    keyPoints: ['Explicación dinámica en 3 minutos', 'Visual y conciso', 'Ideal para ver en el celular'],
    cta: 'Pídeme el enlace directo del video por WhatsApp.',
    fullMessage: `¿Tienes 3 minutos? Este corto video te explicará exactamente cómo funciona HGW 🎥⚡\n\nTe comparto una cápsula ejecutiva donde verás: qué es HGW, nuestros productos estrella de alta rotación, cómo funciona el Plan de Ganancia Mutua y cómo registrarte hoy mismo.\n\n📲 Pídeme el link directo del video respondiendo a este mensaje: [WHATSAPP_LINK]`,
    tags: ['#VideoExplicativo', '#HGWEn3Minutos', '#OportunidadClara']
  },

  // 3. SEGUIMIENTO (FOLLOW-UP) (5 copys)
  {
    id: 'seg-1',
    stage: 'seguimiento',
    stageLabel: 'Seguimiento',
    title: 'Seguimiento Inmediato Post-Zoom (Pregunta de Escala)',
    targetProfile: 'Prospectos que acaban de terminar de ver la presentación',
    hook: '¡Hola! Vi que pudiste conectarte a la sesión de hoy... 🙌',
    body: 'Cuéntame, del 1 al 10 (donde 1 es solo comprar productos para consumo personal y 10 es estar listo para arrancar el negocio hoy mismo), ¿en qué número te encuentras ahora mismo?\n\nMe encantaría saber qué fue lo que más te llamó la atención: ¿los productos de salud o el plan de Ganancia Mutua?',
    keyPoints: ['Pregunta directa y sin presión', 'Filtra el nivel de interés real', 'Abre el diálogo positivo'],
    cta: 'Dime tu número y con gusto resolvemos las dudas puntuales que tengas.',
    fullMessage: `¡Hola [NOMBRE]! Vi que pudiste conectarte a la sesión de hoy... 🙌✨\n\nCuéntame, del 1 al 10 (donde 1 es solo comprar productos para consumo personal y 10 es estar listo para arrancar el negocio hoy mismo), ¿en qué número te encuentras ahora mismo?\n\nMe encantaría saber qué fue lo que más te llamó la atención: ¿los productos de salud o el plan de Ganancia Mutua?\n\nQuedo atenta a tu respuesta para ayudarte en lo que necesites: [WHATSAPP_LINK]`,
    tags: ['#SeguimientoEfectivo', '#PreguntaDeEscala', '#CierreNatural']
  },
  {
    id: 'seg-2',
    stage: 'seguimiento',
    stageLabel: 'Seguimiento',
    title: 'Manejo de Objeción: "No tengo dinero en este momento"',
    targetProfile: 'Prospectos con interés pero con limitación de capital',
    hook: 'Entiendo perfectamente tu situación... de hecho, esa es la razón principal para empezar.',
    body: 'Si en este momento el dinero es una limitación, seguir haciendo exactamente lo mismo no va a cambiar esa realidad el próximo mes.\n\nEn HGW puedes arrancar con un paquete muy accesible como Pre-Junior, colocar los productos en preventa entre tus conocidos o familiares, recuperar tu inversión en 48 horas y generar tu primera ganancia neta. Nuestro equipo te enseña la estrategia exacta de lanzamiento.',
    keyPoints: ['Estrategia de preventa sin riesgo', 'Recuperación de inversión en 48 hrs', 'Acompañamiento en ventas'],
    cta: '¿Hacemos una llamada rápida de 10 minutos para mostrarte cómo financiar tu inicio sin poner en riesgo tus gastos?',
    fullMessage: `Entiendo perfectamente tu situación... de hecho, esa es la razón principal para empezar 💡\n\nSi en este momento el dinero es una limitación, seguir haciendo exactamente lo mismo no va a cambiar esa realidad el próximo mes.\n\nEn HGW puedes arrancar con un paquete muy accesible como Pre-Junior, colocar los productos en preventa entre tus conocidos o familiares, recuperar tu inversión en 48 horas y generar tu primera ganancia neta. Nuestro equipo te enseña la estrategia exacta de lanzamiento.\n\n📲 ¿Hacemos una llamada rápida de 10 minutos para mostrarte cómo financiar tu inicio? Escríbeme: [WHATSAPP_LINK]`,
    tags: ['#ManejoObjeciones', '#SolucionFinanciera', '#EmprendeSinExcusas']
  },
  {
    id: 'seg-3',
    stage: 'seguimiento',
    stageLabel: 'Seguimiento',
    title: 'Manejo de Objeción: "No tengo tiempo libre"',
    targetProfile: 'Personas con agendas ocupadas',
    hook: 'La mayoría de líderes exitosos en nuestro equipo empezaron con solo 1 hora al día.',
    body: 'No necesitas renunciar a tu trabajo ni descuidar a tu familia para hacer HGW. Lo potente de este negocio es el apalancamiento: aprendes a usar herramientas digitales, redes sociales y presentaciones grabadas para que el sistema trabaje por ti mientras continúas con tus actividades diarias.\n\nEl objetivo de hacer este negocio no es quitarte tiempo, sino darte en 1 o 2 años la libertad de tiempo que hoy no tienes.',
    keyPoints: ['Sistema automatizado con IA', '1 a 2 horas al día', 'Apalancamiento de equipo'],
    cta: 'Permíteme mostrarte cómo optimizamos el tiempo con nuestras herramientas automáticas.',
    fullMessage: `La mayoría de líderes exitosos en nuestro equipo empezaron con solo 1 hora al día ⏰✨\n\nNo necesitas renunciar a tu trabajo ni descuidar a tu familia para hacer HGW. Lo potente de este negocio es el apalancamiento: aprendes a usar herramientas digitales, redes sociales y presentaciones grabadas para que el sistema trabaje por ti mientras continúas con tus actividades diarias.\n\nEl objetivo de hacer este negocio no es quitarte tiempo, sino darte en 1 o 2 años la libertad de tiempo que hoy no tienes.\n\n🚀 Conversemos sobre cómo adaptarlo a tu rutina actual: [WHATSAPP_LINK]`,
    tags: ['#GestionDelTiempo', '#NegocioFlexible', '#Apalancamiento']
  },
  {
    id: 'seg-4',
    stage: 'seguimiento',
    stageLabel: 'Seguimiento',
    title: 'Manejo de Objeción: "No sé vender ni tengo experiencia"',
    targetProfile: 'Personas tímidas o sin experiencia comercial',
    hook: 'La buena noticia es que aquí no necesitas ser un vendedor tradicional...',
    body: 'El verdadero éxito en HGW se basa en **recomendar con autenticidad** productos que tú misma usas y amas (como el café saludable, el colágeno o las toallas de turmalina). Cuando sientes el beneficio en tu cuerpo, compartirlo con amigos y familiares surge de forma completamente natural.\n\nAdemás, contamos con un sistema educativo paso a paso donde te enseñamos desde cero cómo usar WhatsApp, redes sociales e inteligencia artificial.',
    keyPoints: ['Sistema educativo gratuito', 'Guiones y copys listos para usar', 'Recomendación genuina'],
    cta: 'Te daré acceso a nuestras capacitaciones exclusivas para que veas lo fácil que es.',
    fullMessage: `La buena noticia es que aquí no necesitas ser un vendedor tradicional... 🤝🌿\n\nEl verdadero éxito en HGW se basa en **recomendar con autenticidad** productos que tú misma usas y amas (como el café saludable, el colágeno o las toallas de turmalina). Cuando sientes el beneficio en tu cuerpo, compartirlo con amigos y familiares surge de forma completamente natural.\n\nAdemás, contamos con un sistema educativo paso a paso donde te enseñamos desde cero cómo usar WhatsApp, redes sociales e inteligencia artificial.\n\n📲 Escríbeme y te muestro las herramientas que recibirás al unirte: [WHATSAPP_LINK]`,
    tags: ['#EducacionGratis', '#VentasSinPresion', '#AprendeDesdeCero']
  },
  {
    id: 'seg-5',
    stage: 'seguimiento',
    stageLabel: 'Seguimiento',
    title: 'Manejo de Objeción: "Déjame consultarlo con mi pareja"',
    targetProfile: 'Prospectos que quieren evaluar la decisión en familia',
    hook: '¡Me parece excelente! Tomar decisiones en equipo con la pareja es lo más inteligente 👫',
    body: 'Para que tu pareja tenga la información de primera mano y no con dudas a medias, ¿qué tal si organizamos una breve llamada de 15 minutos hoy o mañana donde les explico a ambos cómo funciona el modelo y resolvemos sus inquietudes financieras juntos?',
    keyPoints: ['Respeto a la decisión familiar', 'Presentación conjunta sin sesgos', 'Claridad total'],
    cta: 'Dime si les queda mejor hoy en la noche o mañana en la tarde.',
    fullMessage: `¡Me parece excelente! Tomar decisiones en equipo con la pareja es lo más inteligente 👫💼\n\nPara que tu pareja tenga la información de primera mano y no con dudas a medias, ¿qué tal si organizamos una breve llamada de 15 minutos hoy o mañana donde les explico a ambos cómo funciona el modelo y resolvemos sus inquietudes financieras juntos?\n\n📲 Avísame qué horario les viene bien: [WHATSAPP_LINK]`,
    tags: ['#DecisionEnPareja', '#SeguimientoProfesional', '#Transparencia']
  },

  // 4. CIERRE (5 copys)
  {
    id: 'cie-1',
    stage: 'cierre',
    stageLabel: 'Cierre',
    title: 'Cierre Doble Opción de Membresía',
    targetProfile: 'Prospectos listos para tomar la decisión',
    hook: '¡Todo listo para arrancar tu nueva etapa de crecimiento con HGW! 🚀',
    body: 'Teniendo en cuenta tus metas y lo que conversamos:\n\n¿Prefieres arrancar con la membresía **Master** para aprovechar el 100% de los bonos y el máximo descuento, o prefieres iniciar con la membresía **Junior / Senior** e ir escalando con tus ventas?\n\nCualquiera que elijas, hoy mismo creamos tu usuario oficial y te entrego el plan de acción de 48 horas.',
    keyPoints: ['Elección simple y clara', 'Compromiso inmediato de mentoría', 'Registro oficial sin complicaciones'],
    cta: 'Dime cuál prefieres y te paso el enlace oficial de registro con mi código de patrocinio.',
    fullMessage: `¡Todo listo para arrancar tu nueva etapa de crecimiento con HGW! 🚀💎\n\nTeniendo en cuenta tus metas y lo que conversamos:\n\n¿Prefieres arrancar con la membresía **Master** para aprovechar el 100% de los bonos y el máximo descuento, o prefieres iniciar con la membresía **Junior / Senior** e ir escalando con tus ventas?\n\nCualquiera que elijas, hoy mismo creamos tu usuario oficial y te entrego el plan de acción de 48 horas.\n\n📲 Envíame tu elección aquí: [WHATSAPP_LINK] (Patrocinador: [NOMBRE] - Código [CODIGO])`,
    tags: ['#CierreDobleOpcion', '#AfiliacionHGW', '#BienvenidoAlEquipo']
  },
  {
    id: 'cie-2',
    stage: 'cierre',
    stageLabel: 'Cierre',
    title: 'Cierre por Urgencia de Posicionamiento en la Red',
    targetProfile: 'Prospectos indecisos para no perder posicionamiento',
    hook: 'Tengo dos nuevos socios que se van a registrar hoy en el equipo...',
    body: 'Como sabes, en nuestro plan de trabajo colocamos los nuevos registros de forma estratégica en la red. Si realizas tu afiliación hoy antes de las 6:00 PM, estos dos nuevos socios quedarán posicionados debajo de tu estructura, lo que te beneficiará directamente en volumen y crecimiento.\n\nEl posicionamiento temprano marca una diferencia gigantesca en este modelo.',
    keyPoints: ['Beneficio directo de posicionamiento', 'Sentido de urgencia real', 'Apalancamiento de nuevos ingresos'],
    cta: '¿Hacemos tu registro en 5 minutos para asegurar tu lugar prioritario?',
    fullMessage: `Tengo dos nuevos socios que se van a registrar hoy en el equipo... ⏳📍\n\nComo sabes, en nuestro plan de trabajo colocamos los nuevos registros de forma estratégica en la red. Si realizas tu afiliación hoy antes de las 6:00 PM, estos dos nuevos socios quedarán posicionados debajo de tu estructura, lo que te beneficiará directamente en volumen y crecimiento.\n\nEl posicionamiento temprano marca una diferencia gigantesca en este modelo.\n\n👉 Escríbeme de inmediato para tomar tu posición: [WHATSAPP_LINK] (Código de socio: [CODIGO])`,
    tags: ['#Posicionamiento', '#UrgenciaPositiva', '#DerrameDeEquipo']
  },
  {
    id: 'cie-3',
    stage: 'cierre',
    stageLabel: 'Cierre',
    title: 'Llamada de 3 Vías con Líder / Patrocinador',
    targetProfile: 'Prospectos analíticos que requieren validación extra',
    hook: 'Quiero presentarte a la persona que me está guiando en este proyecto.',
    body: 'Sé que quieres estar 100% seguro y tomar la mejor decisión para tu familia. Por eso coordiné un espacio especial de 15 minutos en una llamada de 3 vías con mi mentor y Líder Diamante en HGW.\n\nPodrás hacerle cualquier pregunta técnica sobre los pagos internacionales, envíos a domicilio y estrategias de escala.',
    keyPoints: ['Validación de liderazgo de alto nivel', 'Resolución transparente de dudas', 'Confianza y respaldo'],
    cta: '¿Te queda mejor hoy a las 5:00 PM o a las 7:30 PM para coordinar la llamada breve?',
    fullMessage: `Quiero presentarte a la persona que me está guiando en este proyecto 🤝📞\n\nSé que quieres estar 100% seguro y tomar la mejor decisión para tu familia. Por eso coordiné un espacio especial de 15 minutos en una llamada de 3 vías con mi mentor y Líder Diamante en HGW.\n\nPodrás hacerle cualquier pregunta técnica sobre los pagos internacionales, envíos a domicilio y estrategias de escala.\n\n📲 Dime qué hora te favorece: [WHATSAPP_LINK]`,
    tags: ['#Llamada3Vias', '#Mentoria', '#CierreProfesional']
  },
  {
    id: 'cie-4',
    stage: 'cierre',
    stageLabel: 'Cierre',
    title: 'Cierre de Registro en 5 Minutos (Paso a Paso)',
    targetProfile: 'Prospectos convencidos que solo necesitan los pasos técnicos',
    hook: '¡Excelente decisión! Estos son los 3 datos sencillos para tu registro oficial 📝',
    body: 'Para generar tu usuario oficial y código de socio HGW, solo necesito:\n\n1. Nombre completo.\n2. Número de cédula o identificación oficial.\n3. Correo electrónico y dirección de entrega de tu combo de productos.\n\nEn 5 minutos tendrás tu acceso al Backoffice activo.',
    keyPoints: ['Registro expedito', 'Sin trámites engorrosos', 'Activación inmediata'],
    cta: 'Envíame los datos por aquí y te comparto tu confirmación de ingreso.',
    fullMessage: `¡Excelente decisión! Estos son los 3 datos sencillos para tu registro oficial 📝💎\n\nPara generar tu usuario oficial y código de socio HGW, solo necesito:\n1️⃣ Nombre completo y número de cédula/ID.\n2️⃣ Correo electrónico y teléfono de contacto.\n3️⃣ Dirección de entrega para tu combo de bienvenida.\n\n📲 Envíame los datos por aquí y procedemos con tu alta: [WHATSAPP_LINK] (Patrocinador: [NOMBRE])`,
    tags: ['#RegistroOficial', '#AltaDeSocio', '#HGWDirecto']
  },
  {
    id: 'cie-5',
    stage: 'cierre',
    stageLabel: 'Cierre',
    title: 'Cierre de Autoconsumo Familiar y Ahorro',
    targetProfile: 'Prospectos interesados principalmente en consumir con descuento',
    hook: 'Aunque solo quieras consumir con descuento para tu familia, registrarte es la mejor opción 🛒🌿',
    body: 'Al registrarte como socio HGW, obtienes automáticamente el precio de fábrica con hasta el 50% de descuento en todos tus consumos de café, colágeno, toallas y probióticos. Sin compras forzadas mensuales: compras lo que necesitas, cuando lo necesitas.',
    keyPoints: ['Precios de mayorista de por vida', 'Sin compras mensuales obligatorias', 'Salud familiar accesible'],
    cta: 'Escríbeme para activar tu membresía de consumidor inteligente.',
    fullMessage: `Aunque solo quieras consumir con descuento para tu familia, registrarte es la mejor opción 🛒🌿✨\n\nAl registrarte como socio HGW, obtienes automáticamente el precio de fábrica con hasta el 50% de descuento en todos tus consumos de café, colágeno, toallas y probióticos. Sin compras forzadas mensuales: compras lo que necesitas, cuando lo necesitas.\n\n📲 Activa tu código de descuento aquí: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#ConsumoInteligente', '#DescuentoDeSocio', '#AhorroFamiliar']
  },

  // 5. ACOMPAÑAMIENTO Y DUPLICACIÓN (ONBOARDING) (5 copys)
  {
    id: 'acomp-1',
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento',
    title: 'Bienvenida Oficial & Plan de Acción de 48 Horas',
    targetProfile: 'Nuevo socio recién afiliado',
    hook: '¡OFICIALMENTE BIENVENIDO/A A LA FAMILIA HGW! 🎉💎',
    body: 'Estamos muy emocionados de tenerte en el equipo. Tu decisión marca el inicio de una etapa de abundancia, salud y crecimiento personal.\n\nPara garantizar tus primeros resultados en tus primeros 7 días, aquí tienes tus 3 primeros pasos inmediatos:\n1. Descarga la app / accede a tu Backoffice oficial con tu código.\n2. Coordina conmigo tu sesión de lanzamiento de negocio de 30 minutos.\n3. Prueba tus primeros productos y comparte tu experiencia.',
    keyPoints: ['Paso a paso para las primeras 48 horas', 'Acceso a grupos VIP de WhatsApp y Telegram', 'Lanzamiento guiado'],
    cta: 'Escríbeme confirmando que recibiste tu usuario para agendar tu sesión de inicio.',
    fullMessage: `¡OFICIALMENTE BIENVENIDO/A A LA FAMILIA HGW! 🎉💎✨\n\nEstamos muy emocionados de tenerte en el equipo. Tu decisión marca el inicio de una etapa de abundancia, salud y crecimiento personal.\n\nPara garantizar tus primeros resultados en tus primeros 7 días, aquí tienes tus 3 primeros pasos inmediatos:\n1️⃣ Descarga la app / accede a tu Backoffice oficial con tu código.\n2️⃣ Coordina conmigo tu sesión de lanzamiento de negocio de 30 minutos.\n3️⃣ Prueba tus primeros productos y comparte tu experiencia.\n\n📲 Escríbeme confirmando tu registro para enviarte los accesos a los grupos de apoyo: [WHATSAPP_LINK] (Tu patrocinador: [NOMBRE])`,
    tags: ['#BienvenidaHGW', '#Plan48Horas', '#Duplicacion', '#Lanzamiento']
  },
  {
    id: 'acomp-2',
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento',
    title: 'Guía para Crear tu Lista de Contactos Inteligente',
    targetProfile: 'Nuevos distribuidores aprendiendo a prospectar',
    hook: 'El activo más valioso de tu negocio al comenzar: Tu Lista de Contactos 📝',
    body: 'No intentes venderle a todo el mundo de golpe. Vamos a clasificar tu lista en 3 categorías estratégicas:\n\n🔥 **Mercado Caliente**: Amigos y familiares cercanos para degustación de productos o apoyo en tu inauguración.\n🌡️ **Mercado Tibio**: Conocidos, excompañeros de trabajo o redes sociales para presentarles la oportunidad de diversificar.\n❄️ **Mercado Frío**: Personas que atraeremos mediante publicaciones y herramientas de inteligencia artificial.\n\nTe entrego los guiones exactos para cada perfil para que no sientas pena ni incomodidad.',
    keyPoints: ['Segmentación estratégica de prospectos', 'Guiones prellenados sin fricción', 'Resultados sin quemar contactos'],
    cta: 'Escríbeme y revisamos tus primeros 15 contactos juntos en una llamada corta.',
    fullMessage: `El activo más valioso de tu negocio al comenzar: Tu Lista de Contactos 📝🔥\n\nNo intentes venderle a todo el mundo de golpe. Vamos a clasificar tu lista en 3 categorías estratégicas:\n\n🔥 **Mercado Caliente**: Amigos y familiares cercanos para degustación de productos o apoyo en tu inauguración.\n🌡️ **Mercado Tibio**: Conocidos, excompañeros de trabajo o redes sociales para presentarles la oportunidad de diversificar.\n❄️ **Mercado Frío**: Personas que atraeremos mediante publicaciones y herramientas de inteligencia artificial.\n\nTe entrego los guiones exactos para cada perfil para que no sientas pena ni incomodidad.\n\n📲 Avísame cuando tengas tus primeros 15 nombres listos: [WHATSAPP_LINK]`,
    tags: ['#ListaDeContactos', '#MetodoEfectivo', '#LiderazgoHGW']
  },
  {
    id: 'acomp-3',
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento',
    title: 'Estrategia para Lograr tu Primer Rango (Esmeralda / Zafiro)',
    targetProfile: 'Socios activos buscando calificación de rangos',
    hook: 'Vamos por tu primer rango este mes: La ruta clara para lograrlo 🏆',
    body: 'Subir de rango en HGW no es cuestión de suerte, sino de matemática y constancia:\n\n1. Asegura la activación mensual de tus socios directos.\n2. Realiza 2 inauguraciones de negocio virtuales por semana para tu equipo.\n3. Apaláncate de las promociones de fin de mes y combos de alta puntuación BV.\n4. Reconoce públicamente cada pequeño logro de tus afiliados con nuestros banners oficiales.',
    keyPoints: ['Metas numéricas claras en BV', 'Sinergia de equipo', 'Reconocimiento y motivación'],
    cta: 'Revisemos tu Backoffice hoy para calcular los puntos que te faltan y diseñar el plan de cierre.',
    fullMessage: `Vamos por tu primer rango este mes: La ruta clara para lograrlo 🏆📈\n\nSubir de rango en HGW no es cuestión de suerte, sino de matemática y constancia:\n\n1️⃣ Asegura la activación mensual de tus socios directos.\n2️⃣ Realiza 2 inauguraciones de negocio virtuales por semana para tu equipo.\n3️⃣ Apaláncate de las promociones de fin de mes y combos de alta puntuación BV.\n4️⃣ Reconoce públicamente cada pequeño logro de tus afiliados con nuestros banners oficiales.\n\n📲 Escríbeme y proyectamos tu cierre de mes con números exactos: [WHATSAPP_LINK]`,
    tags: ['#CalificacionDeRango', '#EsmeraldaHGW', '#ZafiroHGW', '#EnfoqueTotal']
  },
  {
    id: 'acomp-4',
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento',
    title: 'Enlace a Grupos VIP de WhatsApp y Canal de Testimonios',
    targetProfile: 'Nuevos socios para integrarse a la comunidad',
    hook: '¡Bienvenido a los canales oficiales de soporte y testimonios de nuestro equipo! 💬✨',
    body: 'Aquí tienes los enlaces directos para unirte a nuestra comunidad:\n\n📌 **Grupo de Noticias & Zoom**: Enlaces diarios de capacitaciones.\n📌 **Canal de Testimonios Reales**: Fotos de antes y después, audios y experiencias verificadas.\n📌 **Drive de Material Gráfico**: Fotos de alta resolución, banners y videos para estados.',
    keyPoints: ['Comunidad activa 24/7', 'Material listo para descargar', 'Capacitación constante'],
    cta: 'Haz clic en los enlaces y preséntate en el grupo principal.',
    fullMessage: `¡Bienvenido a los canales oficiales de soporte y testimonios de nuestro equipo! 💬✨\n\nAquí tienes tus accesos prioritarios:\n📌 **Grupo de Capacitación**: Enlaces de Zoom diarios y novedades.\n📌 **Banco de Testimonios**: Material verificado para tus redes.\n📌 **Drive de Herramientas**: Fichas técnicas y fotos profesionales.\n\n📲 Escríbeme para darte el acceso directo: [WHATSAPP_LINK] (Tu patrocinador: [NOMBRE])`,
    tags: ['#ComunidadHGW', '#GruposVIP', '#SoporteDeEquipo']
  },
  {
    id: 'acomp-5',
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento',
    title: 'Inauguración de Negocio Virtual (Home Party por Zoom)',
    targetProfile: 'Socios en su primera semana para generar sus primeras ventas',
    hook: 'Vamos a lanzar tu negocio este fin de semana con una Inauguración Virtual 🚀🎉',
    body: 'No tienes que dar la presentación tú solo. Organizamos una sesión de 25 minutos por Zoom donde yo, como tu patrocinador, presentaré los productos y la oportunidad a tus amigos y familiares más cercanos. Tú solo te encargas de enviar la invitación con el guion que te daré.',
    keyPoints: ['Lanzamiento asistido por patrocinador', 'Generación de primeras ventas en 48 hrs', 'Cero estrés para el nuevo socio'],
    cta: 'Escríbeme para fijar el día y la hora de tu inauguración.',
    fullMessage: `Vamos a lanzar tu negocio este fin de semana con una Inauguración Virtual 🚀🎉\n\nNo tienes que dar la presentación tú solo. Organizamos una sesión de 25 minutos por Zoom donde yo, como tu patrocinador, presentaré los productos y la oportunidad a tus amigos y familiares más cercanos. Tú solo te encargas de enviar la invitación con el guion que te daré.\n\n📲 Escríbeme y elijamos el horario: [WHATSAPP_LINK]`,
    tags: ['#InauguracionVirtual', '#LanzamientoAsistido', '#ExitoTemprano']
  },

  // 6. HERRAMIENTAS DE TRABAJO (5 copys)
  {
    id: 'herr-1',
    stage: 'herramientas_trabajo',
    stageLabel: 'Herramientas de Trabajo',
    title: 'Organización de Spa Facial / Demostración Casera de Productos',
    targetProfile: 'Distribuidoras organizando reuniones presenciales o caseras',
    hook: '¡Tarde de Spa Facial y Bienestar HGW en casa! 💆‍♀️☕',
    body: 'Te invito a una experiencia sensorial y de relajación totalmente gratis donde podrás:\n\n✨ Probar el Jabón de Oliva y la línea de Turmalina con efectos inmediatos.\n✨ Degustar nuestro delicioso Café Saludable con Arándanos o Ganoderma.\n✨ Conocer tips de cuidado dérmico y nutrición celular sin compromiso.\n\nCupos limitados a 6 personas para brindar atención personalizada.',
    keyPoints: ['Experiencia vivencial de alto impacto', 'Degustación en vivo', 'Cierre de ventas instantáneo'],
    cta: 'Reserva tu espacio respondiendo a este mensaje para darte la dirección exacta.',
    fullMessage: `¡Tarde de Spa Facial y Bienestar HGW en casa! 💆‍♀️☕✨\n\nTe invito a una experiencia sensorial y de relajación totalmente gratis donde podrás:\n\n✨ Probar el Jabón de Oliva y la línea de Turmalina con efectos inmediatos.\n✨ Degustar nuestro delicioso Café Saludable con Arándanos o Ganoderma.\n✨ Conocer tips de cuidado dérmico y nutrición celular sin compromiso.\n\nCupos limitados a 6 personas para brindar atención personalizada.\n\n🏡 Fecha y Lugar: Este fin de semana.\n📲 Reserva tu cupo aquí: [WHATSAPP_LINK]`,
    tags: ['#SpaFacialHGW', '#DemostracionEnVivo', '#ExperienciaHGW']
  },
  {
    id: 'herr-2',
    stage: 'herramientas_trabajo',
    stageLabel: 'Herramientas de Trabajo',
    title: 'Difusión de Catálogo Digital Interactivo con Precios',
    targetProfile: 'Clientes y prospectos en WhatsApp o Redes',
    hook: 'Descubre el Catálogo Digital Oficial de Bienestar HGW 📖🌿',
    body: 'Ya está disponible nuestro catálogo interactivo con toda la línea de productos de nutrición celular, cuidado femenino con turmalina, arándanos orgánicos y café saludable.\n\nIncluye ficha técnica de ingredientes, modo de uso y precios oficiales para clientes y socios registrados.',
    keyPoints: ['Catálogo en formato digital ligero', 'Detalle de beneficios por producto', 'Acceso directo a pedidos'],
    cta: 'Haz clic en el enlace para descargar o ver el catálogo en tu celular.',
    fullMessage: `Descubre el Catálogo Digital Oficial de Bienestar HGW 📖🌿✨\n\nYa está disponible nuestro catálogo interactivo con toda la línea de productos de nutrición celular, cuidado femenino con turmalina, arándanos orgánicos y café saludable.\n\nIncluye ficha técnica de ingredientes, modo de uso y precios oficiales para clientes y socios registrados.\n\n📲 Solicita tu copia en PDF interactivo por WhatsApp: [WHATSAPP_LINK] (Distribuidora [NOMBRE] - Código [CODIGO])`,
    tags: ['#CatalogoDigital', '#ProductosHGW', '#SaludIntegral']
  },
  {
    id: 'herr-3',
    stage: 'herramientas_trabajo',
    stageLabel: 'Herramientas de Trabajo',
    title: 'Manejo de la Oficina Virtual (Backoffice)',
    targetProfile: 'Socios que necesitan aprender a usar la plataforma oficial',
    hook: 'Aprende a dominar tu Oficina Virtual HGW en 15 minutos 💻📊',
    body: 'Tu Backoffice es el centro de comando de tu negocio. Desde allí puedes:\n\n🔹 Registrar nuevos socios en cualquier país abierto.\n🔹 Consultar tus puntos BV acumulados y bonos semanales.\n🔹 Realizar órdenes de compra con entrega a domicilio.\n🔹 Monitorear el crecimiento de tu red de Ganancia Mutua en tiempo real.\n\nTenemos un videotutorial corto paso a paso para que aprendas a usarlo sin perderte.',
    keyPoints: ['Gestión total de comisiones y puntos', 'Registros globales', 'Compras seguras en línea'],
    cta: 'Escríbeme para enviarte el video tutorial y el enlace oficial de ingreso.',
    fullMessage: `Aprende a dominar tu Oficina Virtual HGW en 15 minutos 💻📊\n\nTu Backoffice es el centro de comando de tu negocio. Desde allí puedes:\n\n🔹 Registrar nuevos socios en cualquier país abierto.\n🔹 Consultar tus puntos BV acumulados y bonos semanales.\n🔹 Realizar órdenes de compra con entrega a domicilio.\n🔹 Monitorear el crecimiento de tu red de Ganancia Mutua en tiempo real.\n\n📲 Solicita el tutorial guiado por WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#BackofficeHGW', '#OficinaVirtual', '#GestionEmpresarial']
  },
  {
    id: 'herr-4',
    stage: 'herramientas_trabajo',
    stageLabel: 'Herramientas de Trabajo',
    title: 'Convocatoria a Degustación de Café Saludable (Coffee Break)',
    targetProfile: 'Reuniones de negocios y degustación presencial',
    hook: 'Te invito a un café diferente: energía, sabor y bienestar en una sola taza ☕🌿',
    body: '¿Qué tal si compartimos un delicioso café con Ganoderma o Cordyceps mientras te cuento cómo este producto está transformando la salud de miles de personas y cómo puedes ser parte de su distribución?',
    keyPoints: ['Degustación agradable y relajada', 'Fácil de organizar en cafeterías o casas', 'Conversación natural'],
    cta: 'Avísame qué día de esta semana nos tomamos ese café.',
    fullMessage: `Te invito a un café diferente: energía, sabor y bienestar en una sola taza ☕🌿✨\n\n¿Qué tal si compartimos un delicioso café con Ganoderma o Cordyceps mientras te cuento cómo este producto está transformando la salud de miles de personas y cómo puedes ser parte de su distribución?\n\n📲 Dime qué día te queda bien: [WHATSAPP_LINK] (Asesora [NOMBRE])`,
    tags: ['#CoffeeBreakHGW', '#DegustacionDeCafe', '#NegocioAmigable']
  },
  {
    id: 'herr-5',
    stage: 'herramientas_trabajo',
    stageLabel: 'Herramientas de Trabajo',
    title: 'Promoción de Combos Especiales en Fechas Festivas',
    targetProfile: 'Clientes en temporadas de regalos (Día de la Madre, Navidad, etc.)',
    hook: 'El mejor regalo para quienes amas: Salud, Cuidado y Bienestar 🎁🌸',
    body: 'Sorprende a mamá o a tu ser querido con un Kit Especial de Bienestar HGW que incluye:\n\n✨ Colágeno con Arándano para piel y articulaciones.\n✨ Café Gourmet Saludable.\n✨ Crema dental con extractos botánicos.\n\nEmpacado en hermosa presentación de regalo con envío a domicilio.',
    keyPoints: ['Regalo útil y de alta gama', 'Empaque especial listo para entregar', 'Precios con descuento por combo'],
    cta: 'Reserva tu paquete de regalo antes de que se agoten las existencias.',
    fullMessage: `El mejor regalo para quienes amas: Salud, Cuidado y Bienestar 🎁🌸✨\n\nSorprende a mamá o a tu ser querido con un Kit Especial de Bienestar HGW que incluye:\n\n✨ Colágeno con Arándano para piel y articulaciones.\n✨ Café Gourmet Saludable.\n✨ Crema dental con extractos botánicos.\n\nEmpacado en hermosa presentación de regalo con envío a domicilio.\n\n📲 Pide tu kit hoy mismo: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#RegalosConProposito', '#CombosFestivos', '#HGWPanama']
  },

  // 7. HERRAMIENTAS CON IA PARA TRABAJAR TU NEGOCIO HGW (5 copys)
  {
    id: 'ia-1',
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: 'Cómo Usar Inteligencia Artificial para Prospectar en Redes',
    targetProfile: 'Socios y líderes que quieren automatizar y escalar su negocio',
    hook: '¿Te imaginas tener un asistente de marketing con IA trabajando para ti 24/7?',
    body: 'La era de mandar mensajes manuales uno a uno quedó en el pasado. Hoy en nuestro equipo de HGW utilizamos herramientas de Inteligencia Artificial para:\n\n🤖 Generar 30 copys virales personalizados por producto en 3 segundos.\n🎨 Crear imágenes publicitarias fotorrealistas respetando el empaque original.\n📱 Automatizar respuestas frecuentes en WhatsApp Business para filtrar prospectos calificados.\n🎬 Crear guiones para TikTok y Reels que atraigan clientes sin tener que rogarle a nadie.',
    keyPoints: ['Creación masiva de contenido', 'Automatización de respuestas', 'Atracción orgánica de prospectos'],
    cta: 'Únete a nuestro equipo para recibir acceso exclusivo a todas nuestras herramientas y plantillas con IA.',
    fullMessage: `¿Te imaginas tener un asistente de marketing con IA trabajando para ti 24/7? 🤖🚀\n\nLa era de mandar mensajes manuales uno a uno quedó en el pasado. Hoy en nuestro equipo de HGW utilizamos herramientas de Inteligencia Artificial para:\n\n✨ Generar 30 copys virales personalizados por producto en 3 segundos.\n🎨 Crear imágenes publicitarias fotorrealistas respetando el empaque original.\n📱 Automatizar respuestas frecuentes en WhatsApp Business para filtrar prospectos calificados.\n🎬 Crear guiones para TikTok y Reels que atraigan clientes sin tener que rogarle a nadie.\n\n💡 Cuando te unes a nuestra organización, recibes esta plataforma y el entrenamiento completo GRATIS.\n\n📲 Escríbeme y comencemos a trabajar con IA hoy: [WHATSAPP_LINK] (Líder [NOMBRE] - Código [CODIGO])`,
    tags: ['#InteligenciaArtificialMLM', '#IAparaNegocios', '#MarketingDigitalHGW', '#Innovacion']
  },
  {
    id: 'ia-2',
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: 'Prompt Maestro para Crear Guiones de TikTok y Reels con IA',
    targetProfile: 'Creadores de contenido para captar clientes y distribuidores',
    hook: 'Crea videos virales de 30 segundos sobre HGW usando este Prompt con ChatGPT o Gemini 🎬',
    body: 'Usa este comando en tu IA favorita:\n\n"Actúa como un experto en videos cortos de TikTok y Reels. Escribe 3 guiones de 30 segundos sobre [PRODUCTO O NEGOCIO HGW]. Cada guión debe incluir: Gancho visual de los primeros 3 segundos, problema cotidiano, demostración o beneficio clave, y llamado a la acción directo a mi enlace de WhatsApp en la biografía."',
    keyPoints: ['Guiones dinámicos de 30 segundos', 'Ganchos visuales que retienen la atención', 'Llamados a la acción directos'],
    cta: 'Copia este prompt y pruébalo hoy mismo para grabar tus primeros videos.',
    fullMessage: `Crea videos virales de 30 segundos sobre HGW usando este Prompt con ChatGPT o Gemini 🎬🤖\n\nCopia y pega este comando en tu IA:\n\n👉 "Actúa como un experto en videos cortos de TikTok y Reels. Escribe 3 guiones de 30 segundos sobre el Café con Arándanos HGW y la Oportunidad de Negocio. Cada guión debe incluir: Gancho visual de los primeros 3 segundos, problema cotidiano de energía o finanzas, beneficio clave y llamado a la acción directo a mi enlace de WhatsApp en la biografía."\n\n🚀 Si quieres más prompts y asesoría personalizada, contáctame al WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#PromptTikTok', '#ReelsHGW', '#ContenidoViral', '#ChatGPTparaMLM']
  },
  {
    id: 'ia-3',
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: 'Automatización de Respuestas Rápidas en WhatsApp Business con IA',
    targetProfile: 'Distribuidores con alto volumen de mensajes',
    hook: 'Optimiza tus respuestas de WhatsApp para no perder ningún cliente por tardanza ⚡',
    body: 'Configura estas respuestas automáticas basadas en IA en tu WhatsApp Business:\n\n💬 **Respuesta de Bienvenida**: "¡Hola! Gracias por comunicarte con [NOMBRE], asesora oficial HGW. ¿Te gustaría conocer el catálogo de productos con descuento o la oportunidad de negocio?"\n💬 **Filtro de Interés**: Envío automático de video de 3 minutos + enlace a la sala de Zoom.\n💬 **Cierre de Pedidos**: Mensaje prellenado con datos bancarios y formulario de entrega.',
    keyPoints: ['Cero prospectos desatendidos', 'Ahorro de hasta 3 horas al día', 'Flujo de ventas profesional'],
    cta: 'Escríbeme para enviarte la plantilla de respuestas rápidas lista para importar en tu celular.',
    fullMessage: `Optimiza tus respuestas de WhatsApp para no perder ningún cliente por tardanza ⚡📱\n\nConfigura estas respuestas automáticas basadas en IA en tu WhatsApp Business:\n\n💬 **Respuesta de Bienvenida**: "¡Hola! Gracias por comunicarte con [NOMBRE], asesora oficial HGW. ¿Te gustaría conocer el catálogo de productos con descuento o la oportunidad de negocio?"\n💬 **Filtro de Interés**: Envío automático de video de 3 minutos + enlace a la sala de Zoom.\n💬 **Cierre de Pedidos**: Mensaje prellenado con datos bancarios y formulario de entrega.\n\n📲 Solicita la guía completa de configuración aquí: [WHATSAPP_LINK]`,
    tags: ['#WhatsAppBusiness', '#Automatizacion', '#ProductividadHGW']
  },
  {
    id: 'ia-4',
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: 'Guion de Historia de Instagram de 15 Segundos para Prospección Masiva',
    targetProfile: 'Socios activos en historias de WhatsApp e Instagram',
    hook: 'La historia de 15 segundos que te llenará el WhatsApp de prospectos interesados 📱🔥',
    body: 'Graba o comparte una foto sosteniendo tu taza de Café HGW con este texto:\n\n"Empecé a cambiar mi café de siempre por este café orgánico con Ganoderma y no solo mejoró mi digestión... ¡también me está pagando comisiones semanales por recomendarlo! ☕💸 Si tomas café todos los días y quieres generar ingresos extra, responde YO a esta historia."',
    keyPoints: ['Historia rápida y conversacional', 'Curiosidad sin vender de forma invasiva', 'Fácil de responder para tus seguidores'],
    cta: 'Sube esta historia hoy y responde a cada persona con nuestro mensaje de seguimiento.',
    fullMessage: `La historia de 15 segundos que te llenará el WhatsApp de prospectos interesados 📱🔥\n\nPublica esto en tus Estados de WhatsApp e Historias de Instagram:\n\n📸 [Foto de tu taza de Café HGW]\nTexto: "Empecé a cambiar mi café de siempre por este café orgánico con Ganoderma y no solo mejoró mi digestión... ¡también me está pagando comisiones semanales por recomendarlo! ☕💸 Si tomas café todos los días y quieres generar ingresos extra, responde YO a esta historia."\n\n📲 Pruébalo hoy mismo y me cuentas cuántas personas te escribieron: [WHATSAPP_LINK]`,
    tags: ['#HistoriasQueVenden', '#HistoriasWhatsApp', '#ProspeccionOrganica']
  },
  {
    id: 'ia-5',
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: 'Prompt de IA para Superar Cualquier Objeción en Tiempo Real',
    targetProfile: 'Distribuidores frente a preguntas complejas de prospectos',
    hook: '¿Un prospecto te hizo una pregunta difícil? Deja que la IA te redacte la mejor respuesta 🧠💡',
    body: 'Usa este comando en ChatGPT o Gemini:\n\n"Actúa como un líder ético y mentor de Network Marketing en HGW. Mi prospecto me acaba de decir: \'[PEGA AQUÍ LA OBJECIÓN O DUDA]\'. Redáctame una respuesta empática, corta de 3 párrafos para WhatsApp, que valide su preocupación, ofrezca una solución clara con el modelo HGW y termine con una pregunta de cierre."',
    keyPoints: ['Respuestas a la medida en segundos', 'Tono profesional y empático', 'Aumenta tu tasa de cierre'],
    cta: 'Guarda este prompt en tus notas de WhatsApp.',
    fullMessage: `¿Un prospecto te hizo una pregunta difícil? Deja que la IA te redacte la mejor respuesta 🧠💡\n\nCopia este comando en ChatGPT o Gemini:\n\n👉 "Actúa como un líder ético y mentor de Network Marketing en HGW. Mi prospecto me acaba de decir: '[PEGA AQUÍ LA OBJECIÓN O DUDA]'. Redáctame una respuesta empática, corta de 3 párrafos para WhatsApp, que valide su preocupación, ofrezca una solución clara con el modelo HGW y termine con una pregunta de cierre."\n\n📲 Escríbeme si necesitas ayuda personalizada en tus cierres: [WHATSAPP_LINK]`,
    tags: ['#PromptObjeciones', '#IAMarketing', '#CierresInteligentes']
  }
];
