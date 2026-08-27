import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const CIERRE_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Prospectos convencidos listos para afiliarse',
    'Personas decidiendo entre membresía Junior, Senior o Master',
    'Prospectos aprovechando promociones de cierre de mes o quincena',
    'Nuevos distribuidores eligiendo su paquete de productos iniciales',
    'Emprendedores buscando posicionarse en los primeros lugares de la red',
    'Comerciantes que desean activar su código con descuento mayorista',
    'Personas listas para hacer su pago y registro oficial en HGW',
    'Prospectos que necesitan el empujón final para tomar acción',
    'Líderes que desean ingresar con paquete Master de máximo beneficio',
    'Socios que desean asegurar su kit de bienvenida y catálogo'
  ];

  const angles = [
    {
      title: `Cierre de Doble Alternativa: ¿Con cuál membresía iniciamos? #${num}`,
      hook: `¿Estás listo para dar el paso hacia tu libertad financiera hoy? (#${num}) 🏁💎`,
      body: `Ya vimos el respaldo de la empresa, los productos de alta demanda y el Plan de Ganancia Mutua 50%. En base a tus metas actuales:\n¿Prefieres arrancar con la Membresía Master para obtener el máximo porcentaje de ganancia desde el día 1, o iniciamos con la Membresía Junior / Senior y vamos escalando con tus recompras?`,
      keyPoints: ['Cierre de doble alternativa', 'Claridad en la elección de membresía', 'Activación inmediata'],
      tags: ['#CierreEfectivo', '#MembresiaHGW', '#InicioExitoso', '#AccionYa']
    },
    {
      title: `Urgencia y Posicionamiento en el Equipo #${num}`,
      hook: `Las posiciones en la red no se repiten: asegura tu lugar hoy (#${num}) ⚡🚀`,
      body: `En este momento estamos integrando a nuevas personas en nuestro equipo de expansión. Registrarte hoy te permite quedar posicionado antes de las próximas presentaciones de esta semana y aprovechar el derrame y apalancamiento de equipo.\n\nEl registro toma solo 3 minutos y te acompaño paso a paso.`,
      keyPoints: ['Posicionamiento prioritario', 'Apalancamiento de equipo', 'Registro rápido en 3 minutos'],
      tags: ['#Posicionamiento', '#UrgenciaPositiva', '#EquipoGanador', '#HGW']
    },
    {
      title: `Selección del Paquete de Productos de Bienvenida #${num}`,
      hook: `Elige los productos que tú y tu familia más necesitan para tu paquete inicial (#${num}) 📦🌿`,
      body: `Lo mejor de tu membresía HGW es que el 100% de tu dinero se convierte en productos útiles: Café con Ganoderma, Toallas de Turmalina, LactiBerry o Cuidado Personal. Tú eliges exactamente qué productos llevarte en tu kit de inicio.\n\nTe ayudo a armar el combo más rentable para autoconsumo o venta rápida.`,
      keyPoints: ['100% en productos a elección', 'Asesoría para armar el combo ideal', 'Envío directo a tu domicilio'],
      tags: ['#KitDeInicio', '#ProductosHGW', '#InversionSegura', '#SaludYNegocio']
    },
    {
      title: `Cierre de Garantía y Acompañamiento VIP #${num}`,
      hook: `Al registrarte hoy tienes acceso inmediato a nuestro sistema educativo VIP (#${num}) 🎓🌟`,
      body: `No vas a estar solo. Al activar tu código HGW hoy con nuestro equipo recibes:\n1. Acceso a nuestra plataforma de capacitación y materiales digitales.\n2. Generador de Prompts y copys con Inteligencia Artificial.\n3. Sesión de arranque rápido personalizada en las primeras 24 horas.\n\nTodo lo que necesitas para tener tus primeros clientes en tu primera semana.`,
      keyPoints: ['Sistema educativo VIP', 'Herramientas de IA incluidas', 'Arranque rápido en 24 horas'],
      tags: ['#AcompanamientoVIP', '#ArranqueRapido', '#HerramientasDigitales', '#CierreHGW']
    },
    {
      title: `Paso a Paso para Registro Inmediato en la Plataforma Oficial #${num}`,
      hook: `Completa tu registro oficial en HGW en 3 sencillos pasos (#${num}) 📝✅`,
      body: `Para activar tu código oficial de distribuidor independiente HGW solo necesitamos:\n1. Ingresar al enlace oficial de registro con mi código de patrocinio.\n2. Llenar tus datos personales de contacto.\n3. Seleccionar tu membresía y método de pago seguro.\n\nEn cuanto completes el registro, te envío la confirmación y agendamos tu inducción.`,
      keyPoints: ['Registro formal y seguro', 'Código de patrocinio verificado', 'Activación en tiempo real'],
      tags: ['#RegistroOficial', '#BienvenidaHGW', '#NuevoSocio', '#Exito']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `cie-${num}`,
    stage: 'cierre',
    stageLabel: 'Cierre de Membresías',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Escríbeme al WhatsApp con la palabra 'REGISTRO' para enviarte el enlace oficial y ayudarte a completar tu activación ahora mismo.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Beneficios de tu Activación:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Escríbeme para activar tu membresía hoy:** [WHATSAPP_LINK]\n(Código de patrocinio oficial: [CODIGO] - Patrocinador: [NOMBRE])`,
    tags: selectedAngle.tags
  };
});
