import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const SEGUIMIENTO_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Prospectos que vieron la presentación pero no han tomado decisión',
    'Personas con dudas sobre el tiempo requerido para el negocio',
    'Contactos que manifestaron objeción de falta de dinero para iniciar',
    'Personas con dudas sobre sus habilidades de ventas',
    'Prospectos esperando cobrar su sueldo o quincena para ingresar',
    'Contactos que pidieron información adicional sobre los productos',
    'Prospectos que desean hablar con su pareja o socio antes de decidir',
    'Personas interesadas en testimonios de salud antes de emprender',
    'Emprendedores evaluando el retorno de inversión',
    'Contactos que asistieron al Zoom de la semana pasada'
  ];

  const angles = [
    {
      title: `Seguimiento Profesional Post-Presentación #${num}`,
      hook: `Hola, ¿qué fue lo que más te llamó la atención de la presentación de HGW? (#${num}) 💬✨`,
      body: `Hacer seguimiento no es perseguir, es acompañar con información de valor. Quería saber si tuviste oportunidad de revisar la propuesta del Plan de Ganancia Mutua y qué fue lo que más resonó contigo: ¿la parte de mejorar tu salud con los productos o la oportunidad de generar ingresos extra?`,
      keyPoints: ['Pregunta abierta no invasiva', 'Enfoque en lo que más le interesó', 'Acompañamiento profesional'],
      tags: ['#SeguimientoEfectivo', '#Profesionalismo', '#HGWTeam', '#Crecimiento']
    },
    {
      title: `Resolución de Objeción: "¿No tengo tiempo suficiente?" #${num}`,
      hook: `¿Sientes que tu día a día no te deja tiempo para un nuevo proyecto? (#${num}) ⏳💡`,
      body: `El 80% de nuestros socios comenzó dedicándole apenas 1 o 2 horas al día mientras mantenía su empleo o negocio. Con nuestro sistema digital y herramientas automatizadas con IA, no necesitas descuidar tu rutina: se trata de apalancar tu tiempo con herramientas que trabajan por ti.`,
      keyPoints: ['Solo 1 a 2 horas diarias', 'Herramientas automatizadas', 'Apalancamiento de equipo'],
      tags: ['#GestionDelTiempo', '#Productividad', '#EmprenderConEmpleo', '#HGW']
    },
    {
      title: `Resolución de Objeción: "¿No tengo el dinero para la membresía?" #${num}`,
      hook: `¿Te gustaría empezar pero en este momento estás corto de presupuesto? (#${num}) 💡🤝`,
      body: `Precisamente porque el dinero escasea es el motivo principal para emprender. HGW diseñó la Membresía Pre-Junior para que cualquier persona pueda iniciar con una compra mínima accesible y capitalizarse rápidamente mediante la venta directa y el Plan de Ganancia Mutua.\n\nTenemos estrategias de prelanzamiento para recuperar tu inversión en los primeros 7 días.`,
      keyPoints: ['Membresía Pre-Junior accesible', 'Plan de recuperación en 7 días', 'Estrategias de preventa'],
      tags: ['#SinExcusas', '#InversionInteligente', '#Superacion', '#HGWNegocios']
    },
    {
      title: `Resolución de Objeción: "¿Y si no sé vender?" #${num}`,
      hook: `¿Te da miedo o pena el tema de las ventas tradicionales? (#${num}) 🧘‍♂️📱`,
      body: `Aquí no salimos a vender de puerta en puerta ni a perseguir amigos. Enseñamos Social Selling y marketing de atracción con Inteligencia Artificial: compartes tu testimonio honesto y la gente interesada te escribe directamente a tu WhatsApp buscando soluciones para su salud o finanzas.`,
      keyPoints: ['Social Selling moderno', 'Marketing de atracción con IA', 'Sin persecución de familiares'],
      tags: ['#SocialSelling', '#VentasModernas', '#MarketingAtraccion', '#EducacionHGW']
    },
    {
      title: `Compartir Testimonio Real de Salud y Resultados de Negocio #${num}`,
      hook: `Te comparto este testimonio de 2 minutos que te dará mucha claridad (#${num}) 🎥🌟`,
      body: `Quiero compartirte la historia real de un socio de nuestro equipo que comenzó con las mismas dudas que tú y hoy en día genera ingresos consistentes mientras disfruta de una excelente salud gracias a los productos HGW.\n\nVer testimonios reales es la mejor forma de comprobar la efectividad del sistema.`,
      keyPoints: ['Testimonios 100% verificados', 'Casos de éxito reales en tu país', 'Seguridad y confianza'],
      tags: ['#TestimoniosHGW', '#CasosDeExito', '#ResultadosReales', '#Confianza']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `seg-${num}`,
    stage: 'seguimiento',
    stageLabel: 'Seguimiento Profesional',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Respóndeme con un mensaje y con gusto agendamos una llamada de 10 minutos para aclarar todas tus dudas.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Recuerda:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Sigamos en contacto directo por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesoría por: [NOMBRE])`,
    tags: selectedAngle.tags
  };
});
