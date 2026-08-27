import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const COLICOS_MENSTRUALES_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Ciclo Menstrual Sin Dolor: Tecnología Aniónica & Turmalina #${num}`,
      angle: 'Alivio Térmico & Aniones',
      hook: `¿Los cólicos menstruales te obligan a poner tu vida en pausa cada mes? (#${num}) 🌸✨`,
      body: `Descubre una alternativa natural y libre de químicos tóxicos: las Toallas Sanitarias y Protectores SmarTea de HGW incorporan una banda de Turmalina con emisión de Aniones e Infrarrojo Lejano que emite un suave calor biológico que ayuda a calmar espasmos musculares y regular el flujo.\n\nAlgodón 100% transpirable y gel orgánico súper absorbente para máxima frescura y cero olores.`,
      combo: 'Kit Íntimo Femenino SmarTea (Toallas Día + Noche + Protectores de Turmalina)',
      cta: `Escríbeme por WhatsApp para pedir tu kit íntimo SmarTea y experimentar la diferencia este mes.`
    },
    {
      title: `Cuidado Íntimo Preventivo Diario con Protectores de Anión #${num}`,
      angle: 'Higiene & Confort Diario',
      hook: `El confort femenino no solo es para los días de periodo: cuida tu zona íntima todos los días (#${num}) 🌿💖`,
      body: `Los protectores diarios con turmalina SmarTea HGW ayudan a mantener el pH balanceado, oxigenan el área íntima con aniones naturales y previenen la proliferación bacteriana causante de molestias e irritaciones.\n\nSiente la libertad de moverte cómoda, fresca y segura todo el día.`,
      combo: 'Protectores Diarios SmarTea con Turmalina + Café con Arándanos HGW',
      cta: `Solicita tu paquete de protectores diarios con entrega segura escribiéndome a mi WhatsApp.`
    },
    {
      title: `Bienestar Hormonal y Nutrición Antioxidante Femenina #${num}`,
      angle: 'Antioxidantes y Relajación',
      hook: `Nutre tu cuerpo desde adentro durante tus días difíciles (#${num}) 🫐☕`,
      body: `Acompaña el uso de las toallas de turmalina con una deliciosa taza de Café con Arándanos HGW, rico en antocianinas y antioxidantes que apoyan la circulación sanguínea y ayudan a reducir la inflamación pélvica de forma deliciosa y reconfortante.`,
      combo: 'Toallas Sanitarias SmarTea + Café con Arándanos HGW',
      cta: `Haz clic en mi enlace de WhatsApp para recibir tu asesoría femenina personalizada.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-colicos-${num}`,
    protocolId: 'colicos_menstruales',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🌸 **Combo Femenino:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesora: [NOMBRE])`,
    tags: ['#SaludFemenina', '#SinColicos', '#ToallasSmarTea', '#TurmalinaHGW', '#BienestarMujer']
  };
});
