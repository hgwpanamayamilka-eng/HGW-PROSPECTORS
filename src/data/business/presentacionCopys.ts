import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const PRESENTACION_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Prospectos listos para conocer el plan de compensación HGW',
    'Networkers buscando un plan justo sin candados ni cortes de rango',
    'Personas invitadas a sesión de Zoom o videollamada 1 a 1',
    'Profesionales analizando modelos de ingresos residuales',
    'Comerciantes evaluando márgenes y bonos de patrocinio',
    'Líderes de equipo evaluando expansión internacional',
    'Emprendedores buscando apalancamiento financiero real',
    'Personas que asistieron a una reunión presencial o evento',
    'Prospectos que vieron un video preliminar de 3 minutos',
    'Contactos de redes sociales solicitando detalles del negocio'
  ];

  const angles = [
    {
      title: `Presentación Oficial: El Revolucionario Plan de Ganancia Mutua 50% #${num}`,
      hook: `¿Por qué el Plan de Ganancia Mutua de HGW está rompiendo esquemas en la industria? (#${num}) 📈💎`,
      body: `En los planes tradicionales, si tu socio crece más que tú, dejas de cobrar o te cortan el rango. En HGW creamos el sistema de Ganancia Mutua: ganas el 50% de ganancia mutua de lo que generan tus patrocinados directos, sin candados, sin igualación forzada y de por vida.\n\nUn modelo unilateral patentado y humanizado donde el éxito de tu equipo es directamente tu éxito financiero.`,
      keyPoints: ['50% de Ganancia Mutua real', 'Sin cortes por rangos superiores', 'Cobros semanales transparentes'],
      tags: ['#GananciaMutua', '#PlanDeCompensacion', '#HGWGlobal', '#FinanzasInteligentes']
    },
    {
      title: `Presentación Zoom: 4 Formas de Generar Ingresos con HGW #${num}`,
      hook: `Conoce las 4 fuentes de ingresos inmediatos y residuales con HGW en 25 minutos (#${num}) 💻✨`,
      body: `Te invitamos a nuestra sesión exclusiva donde explicamos:\n1. Venta directa con hasta 50% de descuento y margen inmediato.\n2. Bono de Inicio Rápido y Ganancia Mutua 50%.\n3. Bono de Recompra y Desarrollo de Equipo.\n4. Bonos Élite por Liderazgo y Premios Internacionales.\n\nUna presentación directa, al grano y con testimonios reales de resultados.`,
      keyPoints: ['4 fuentes de ingreso simultáneas', 'Márgenes de venta de alta rentabilidad', 'Presentación en vivo con preguntas y respuestas'],
      tags: ['#PresentacionHGW', '#ZoomDeNegocios', '#IngresosResiduales', '#Crecimiento']
    },
    {
      title: `Estructura de Membresías: De Pre-Junior a Master Acumulable #${num}`,
      hook: `Inicia según tus posibilidades y sube de rango con tus propias recompras (#${num}) 🛒🚀`,
      body: `En HGW no pierdes tus puntos ni estás obligado a compras millonarias. Puedes comenzar con Membresía Pre-Junior, Junior, Senior o Master.\n\nLo más poderoso: tus compras y ventas se acumulan mes a mes para subir de membresía y desbloquear el máximo porcentaje de ganancias de por vida.`,
      keyPoints: ['Puntos acumulables sin vencimiento', 'Flexibilidad para todo presupuesto', '100% de la inversión en productos útiles'],
      tags: ['#MembresiasHGW', '#InversionInteligente', '#SinCandados', '#NetworkMarketing']
    },
    {
      title: `Respaldo Corporativo: Más de 30 Años de Trayectoria Mundial #${num}`,
      hook: `No te unas a experimentos: asóciate con una multinacional con más de 30 años (#${num}) 🌍🏢`,
      body: `Health Green World (HGW) cuenta con centros de investigación biológica propios, fábricas con certificación GMP, FDA e ISO, y presencia consolidada en más de 60 países de Asia, Europa y América Latina.\n\nEstabilidad, solidez y legalidad absoluta para construir un patrimonio a largo plazo.`,
      keyPoints: ['Más de 30 años de experiencia', 'Fábricas y patentes propias', 'Legalidad y facturación formal'],
      tags: ['#RespaldoCorporativo', '#HGWOficial', '#SeguridadFinanciera', '#EmpresaGlobal']
    },
    {
      title: `Presentación Rápida 1 a 1: Cómo Funciona el Ecosistema HGW #${num}`,
      hook: `¿Tienes 15 minutos para ver una presentación personalizada de HGW? (#${num}) 🎯🤝`,
      body: `Sin rodeos ni tecnicismos confusos: te muestro en una videollamada de 15 minutos cómo generamos ingresos recomendando productos de consumo diario y cómo el Plan de Ganancia Mutua beneficia tanto al que recién inicia como al líder consolidado.`,
      keyPoints: ['Explicación 1 a 1 personalizada', 'Demostración de oficina virtual y pagos', 'Respuestas a todas tus dudas'],
      tags: ['#Presentacion1a1', '#NegocioTransparente', '#LiderazgoHGW', '#Oportunidad']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `pres-${num}`,
    stage: 'presentacion',
    stageLabel: 'Presentación Ganancia Mutua',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Aparta tu lugar para nuestra próxima presentación o solicita el enlace de acceso por WhatsApp.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Detalles del Plan:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Solicita tu acceso a la presentación aquí:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Presentado por: [NOMBRE])`,
    tags: selectedAngle.tags
  };
});
