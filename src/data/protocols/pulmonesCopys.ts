import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const PULMONES_RESPIRATORIO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Capacidad Pulmonar y Oxigenación Celular con Cordyceps #${num}`,
      angle: 'Oxigenación y Vías Respiratorias',
      hook: `¿Sientes fatiga al subir escaleras o respiración corta ante el menor esfuerzo? (#${num}) 🫁💨`,
      body: `El Cordyceps Sinensis es conocido mundialmente por mejorar la captación de oxígeno a nivel celular y relajar la musculatura de las vías respiratorias. En atletas y personas que buscan cuidar sus pulmones, aporta mayor resistencia y respiración profunda y reconfortante.\n\nUna taza de Café con Cordyceps HGW es el inicio ideal de tu día.`,
      combo: 'Café con Cordyceps HGW + Berry Oil Softgels',
      cta: `Escríbeme por WhatsApp para conocer más sobre los beneficios respiratorios del Cordyceps.`
    },
    {
      title: `Protección de Mucosas Respiratorias contra la Contaminación #${num}`,
      angle: 'Protección de Mucosas con Omega 7',
      hook: `Protege tu garganta y vías respiratorias de los cambios de clima y el polvo (#${num}) 🫐🛡️`,
      body: `El Berry Oil de HGW es rico en ácido palmitoleico (Omega 7), un nutriente clave para la regeneración y lubricación de las mucosas respiratorias. Ayuda a calmar la carraspera y mantener el epitelio pulmonar protegido frente a agentes irritantes externos.`,
      combo: 'Berry Oil Softgels + Jugo de Arándano HGW',
      cta: `Solicita tu combo respiratorio con envío a domicilio escribiéndome al WhatsApp.`
    },
    {
      title: `Defensas Respiratorias y Respiración Plena #${num}`,
      angle: 'Inmunidad Respiratoria',
      hook: `Fortalece tu pecho y garganta de forma natural ante cualquier temporada (#${num}) ☕🍃`,
      body: `La sinergia entre los antioxidantes del arándano y los polisacáridos del Cordyceps y Ganoderma brinda un apoyo integral para que respires con total libertad y mantengas tu sistema respiratorio fuerte y despejado.`,
      combo: 'Café con Cordyceps HGW + LactiBerry (Microbiota e Inmunidad)',
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
    tags: ['#SaludRespiratoria', '#CordycepsHGW', '#Oxigenacion', '#PulmonesSanos', '#Bienestar']
  };
});
