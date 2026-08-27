import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const ACOMPANAMIENTO_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Nuevos socios en sus primeras 24 a 48 horas tras afiliarse',
    'Distribuidores preparando su primera lista de contactos y prospección',
    'Socios aprendiendo a utilizar su oficina virtual y colocar pedidos',
    'Distribuidores organizando su primera reunión casera o Zoom de lanzamiento',
    'Socios que desean aprender a recomendar los productos de forma ética',
    'Distribuidores que quieren duplicar el sistema con sus propios socios',
    'Socios buscando mantener la motivación y el ritmo de trabajo semanal',
    'Nuevos afiliados configurando sus herramientas digitales y WhatsApp',
    'Socios activos preparándose para calificar a su siguiente rango',
    'Distribuidores participando en el sistema de capacitaciones semanales'
  ];

  const angles = [
    {
      title: `Plan de Arranque Rápido en las Primeras 48 Horas #${num}`,
      hook: `¡Bienvenido a la familia HGW! Estos son tus 4 primeros pasos para el éxito (#${num}) 🚀🌟`,
      body: `Felicitaciones por tomar la decisión de emprender con nosotros. En tus primeras 48 horas vamos a enfocarnos en:\n1. Conocer tu oficina virtual y verificar tu código.\n2. Probar tus primeros productos para tener tu testimonio personal.\n3. Armar tu lista de 20 contactos clave con nuestro guion de prospección.\n4. Agendar tu Zoom de prelanzamiento para generar tus primeras ventas y socios.`,
      keyPoints: ['Enfoque claro en 4 pasos', 'Sin abrumarte con exceso de información', 'Primeros resultados en menos de 7 días'],
      tags: ['#ArranqueRapido', '#NuevosSocios', '#OnboardingHGW', '#Liderazgo']
    },
    {
      title: `Guía para la Primera Reunión de Lanzamiento o Zoom Inaugural #${num}`,
      hook: `Cómo organizar tu inauguración de negocio HGW con éxito garantizado (#${num}) ☕🎉`,
      body: `Tu inauguración de negocio es el evento más importante de tu primer mes. Puedes hacerlo presencial en tu casa con una degustación de Café con Ganoderma o por Zoom con el apoyo de tu patrocinador.\n\nTú solo invitas con nuestro guion simple y nosotros presentamos el proyecto por ti para que aprendas viendo cómo se hace.`,
      keyPoints: ['Acompañamiento del patrocinador en vivo', 'Degustación y experiencia de producto', 'Cero presión para el nuevo socio'],
      tags: ['#LanzamientoDeNegocio', '#InauguracionHGW', '#Duplicacion', '#TrabajoEnEquipo']
    },
    {
      title: `Dominio de la Oficina Virtual y Seguimiento de Pedidos #${num}`,
      hook: `Aprende a gestionar tu negocio global desde tu celular (#${num}) 📱📊`,
      body: `Tu oficina virtual HGW te permite ver tus compras, comisiones en tiempo real, registro de nuevos socios y seguimiento de envíos 24/7.\n\nTe preparé un video tutorial de 4 minutos donde te muestro paso a paso cómo navegar en el sistema y cobrar tus comisiones semanales a tu cuenta bancaria.`,
      keyPoints: ['Tutorial en video de 4 minutos', 'Cobro de comisiones bancarias', 'Control total de tu red'],
      tags: ['#OficinaVirtual', '#TutorialHGW', '#ControlTotal', '#NegocioDigital']
    },
    {
      title: `Cultura de Capacitación y Sistema Educativo Semanal #${num}`,
      hook: `El secreto de los grandes líderes es la educación continua (#${num}) 📚🎙️`,
      body: `Un negocio crece al ritmo en que tú creces como persona y profesional. Te invito a conectarte a nuestro sistema educativo oficial de la semana:\n• Lunes: Capacitación de producto con especialistas.\n• Miércoles: Escuela de liderazgo y ventas.\n• Sábado: Masterclass de duplicación y testimonios.\n\nConéctate y conecta a tu equipo para construir un ingreso verdaderamente residual.`,
      keyPoints: ['Capacitaciones semanales gratuitas', 'Desarrollo personal y financiero', 'Cultura de equipo'],
      tags: ['#SistemaEducativo', '#CapacitacionHGW', '#CrecimientoPersonal', '#Mentoria']
    },
    {
      title: `Estrategia de Duplicación: Ayuda a tu Primer Socio a Ganar #${num}`,
      hook: `La clave del Plan de Ganancia Mutua es hacer ganar a tus socios (#${num}) 🤝💎`,
      body: `Cuando inscribes a tu primer socio, tu meta principal es ayudarlo a recuperar su inversión y tener sus primeros resultados en sus primeros 15 días. Al aplicar el mismo sistema de arranque rápido con él, se activa la magia de la duplicación y tus comisiones crecen de forma sólida y constante.`,
      keyPoints: ['Enfoque en el éxito del socio', 'Duplicación simple y replicable', 'Crecimiento sostenible'],
      tags: ['#DuplicacionEfectiva', '#GananciaMutuaHGW', '#LiderazgoServicial', '#ExitoCompartido']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `aco-${num}`,
    stage: 'acompanamiento',
    stageLabel: 'Acompañamiento de Nuevos Socios',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Revisa estos puntos y avísame por WhatsApp para agendar nuestra sesión de trabajo de hoy.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Acciones Inmediatas:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Coordinemos por WhatsApp:** [WHATSAPP_LINK]\n(Tu mentor y patrocinador: [NOMBRE] - Código: [CODIGO])`,
    tags: selectedAngle.tags
  };
});
