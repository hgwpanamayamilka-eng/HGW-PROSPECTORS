import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const PULMONES_RESPIRATORIO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Capacidad Pulmonar y Oxigenación Celular con Cordyceps Coffee Cream #${num}`,
      angle: 'Oxigenación y Vías Respiratorias',
      hook: `¿Sientes fatiga al subir escaleras o respiración corta ante el menor esfuerzo físico? (#${num}) 🫁💨`,
      body: `El Cordyceps Sinensis presente en Cordyceps Coffee Cream y Coffee Ceps de HGW es conocido por mejorar la captación de oxígeno a nivel celular y relajar la musculatura de las vías respiratorias. Aporta mayor resistencia, vitalidad pulmonar y respiración profunda y reconfortante.\n\nUna taza de Café con Cordyceps HGW es el inicio ideal de tu día.`,
      combo: 'Cordyceps Coffee Cream / Coffee Ceps + Herbal Fresh Candy HGW',
      cta: `Escríbeme por WhatsApp para conocer más sobre los beneficios respiratorios del Cordyceps.`
    },
    {
      title: `Protección de Mucosas y Frescura Bronquial con Herbal Fresh Candy #${num}`,
      angle: 'Protección de Mucosas & Frescura',
      hook: `Protege tu garganta y pecho de los cambios bruscos de clima y el polvo ambiental (#${num}) 🌿🛡️`,
      body: `Herbal Fresh Candy HGW combina extractos botánicos de menta y hierbas refrescantes para calmar la carraspera y mantener las vías respiratorias despejadas y reconfortadas durante el día.\n\nAcompáñalo con Spirulina Plus Capsule para nutrir los tejidos pulmonares con clorofila pura y proteínas vegetales.`,
      combo: 'Herbal Fresh Candy HGW + Spirulina Plus Capsule (Espirulina en Cápsula)',
      cta: `Solicita tu combo respiratorio con envío a domicilio escribiéndome al WhatsApp.`
    },
    {
      title: `Defensas Respiratorias y Respiración Plena con Cordyceps & Berry Juice #${num}`,
      angle: 'Inmunidad Respiratoria & Antioxidantes',
      hook: `Fortalece tus vías respiratorias de forma natural en cualquier época del año (#${num}) ☕🍃`,
      body: `La sinergia entre los antioxidantes de Berry Juice HIGH VC y los polisacáridos de Cordyceps Coffee Cream brinda un apoyo integral para que respires con total libertad y mantengas tu sistema respiratorio fuerte y protegido.`,
      combo: 'Cordyceps Coffee Cream + Berry Juice HIGH VC (Zumo de Frutos Rojos)',
      cta: `Haz clic en mi enlace de WhatsApp para recibir orientación personalizada.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-pulmon-${num}`,
    protocolId: 'pulmones_respiratorio',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🫁 **Combo Respiratorio:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludRespiratoria', '#CordycepsHGW', '#HerbalFreshCandy', '#Oxigenacion', '#HGW']
  };
});

