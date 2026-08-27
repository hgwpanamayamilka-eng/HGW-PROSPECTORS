import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const PROSPECCION_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Emprendedores buscando diversificar ingresos',
    'Profesionales y empleados con ganas de independencia',
    'Madres de familia y amas de casa líderes',
    'Jóvenes universitarios y profesionales digitales',
    'Comerciantes y dueños de negocios tradicionales',
    'Personas apasionadas por la salud y el bienestar natural',
    'Líderes de ventas directas y networking',
    'Personas que buscan ingresos extra sin descuidar su empleo actual',
    'Profesionales de la salud integrativa y nutrición',
    'Emprendedores digitales y creadores de contenido'
  ];
  
  const angles = [
    {
      title: `Diversificación de Ingresos Inteligente #${num}`,
      hook: `¿Te has puesto a pensar qué pasaría si tu única fuente de ingresos se detiene hoy? (Opción #${num})`,
      body: `Los tiempos cambiaron y depender de un solo ingreso ya no es seguro. En Health Green World (HGW) desarrollamos un modelo inteligente de consumo masivo donde ganas por tu consumo y recomendación con el Plan de Ganancia Mutua 50%.\n\nSin inventarios obligatorios, con respaldo internacional en más de 60 países y productos de alta rotación diaria que la gente ya consume.`,
      keyPoints: ['Plan de Ganancia Mutua 50%', 'Sin inventarios forzados', 'Productos de bienestar masivo'],
      tags: ['#EmprendimientoHGW', '#IngresosExtra', '#LibertadFinanciera', '#Prospeccion']
    },
    {
      title: `Monetiza tu Consumo Diario de Bienestar #${num}`,
      hook: `¿Tomas café todos los días? Descubre cómo convertir ese hábito en un negocio rentable (#${num}) ☕💸`,
      body: `El café es la segunda bebida más consumida en el mundo. En HGW no te pedimos cambiar de hábitos, sino cambiar de marca a nuestro Café Saludable con Ganoderma y Cordyceps.\n\nAl compartirlo con amigos y familiares, activas un sistema de comisiones semanales con el plan más justo del mercado.`,
      keyPoints: ['Producto de consumo masivo', 'Mercado global en expansión', 'Cobros semanales directos'],
      tags: ['#CafeSaludable', '#GanodermaHGW', '#NegocioRentable', '#SocialSelling']
    },
    {
      title: `Negocio Digital desde Casa para Madres Emprendedoras #${num}`,
      hook: `Genera ingresos reales desde tu celular sin descuidar a tus hijos ni tus horarios (#${num}) 🌸📱`,
      body: `Muchas mamás sueñan con estar presentes en el crecimiento de sus hijos y a la vez tener independencia económica. Con HGW gestionas tu negocio desde WhatsApp y redes sociales con nuestro catálogo digital y envíos a nivel nacional.\n\nTe capacitamos paso a paso desde cero con herramientas de marketing e Inteligencia Artificial.`,
      keyPoints: ['100% desde casa', 'Comunidad de mujeres líderes', 'Entrenamiento gratuito'],
      tags: ['#MamasEmprendedoras', '#TrabajoDesdeCasa', '#MujeresHGW', '#Independencia']
    },
    {
      title: `Ecosistema de Salud y Bienestar de Alto Impacto #${num}`,
      hook: `La industria del bienestar factura billones al año. ¿Estás participando de ella? (#${num}) 🌿📊`,
      body: `Las personas hoy buscan prevención, defensas fuertes y calidad de vida. Los productos HGW (arándanos, turmalina, probióticos y nutrición celular) tienen demanda constante y recompra garantizada.\n\nPosiciónate en tu ciudad como distribuidor pionero y genera ingresos por cada recomendación.`,
      keyPoints: ['Alta rotación y recompra', 'Productos con patentes y certificaciones', 'Pioneros en tu región'],
      tags: ['#SaludPreventiva', '#BienestarIntegral', '#HGWGlobal', '#Pioneros']
    },
    {
      title: `Emprendimiento Sin Riesgo ni Grandes Inversiones #${num}`,
      hook: `¿Quieres emprender pero te frena el capital inicial o el riesgo de quebrar? (#${num}) 💡🚀`,
      body: `El modelo tradicional exige alquileres, empleados y grandes stocks. En HGW inicias con membresías accesibles y acumulables, recibes el 100% de tu dinero en productos de primera calidad y tienes acceso inmediato a tu oficina virtual global.\n\nTodo el apalancamiento de una multinacional con más de 30 años a tu favor.`,
      keyPoints: ['Membresías accesibles', '100% en producto usable', 'Oficina virtual y logística lista'],
      tags: ['#EmprenderSinRiesgo', '#BajaInversion', '#CrecimientoPersonal', '#HGW']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `prosp-${num}`,
    stage: 'prospeccion',
    stageLabel: 'Prospección',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Escríbeme por WhatsApp para enviarte un video resumen de 5 minutos y mostrarte cómo iniciar en nuestro equipo.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Puntos Clave:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Solicita la información completa aquí:** [WHATSAPP_LINK]\n(Código de patrocinio oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: selectedAngle.tags
  };
});
