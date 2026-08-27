import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const COLICOS_MENSTRUALES_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Ciclo Menstrual Sin Dolor: Tecnología Aniónica & Turmalina SMILIFE #${num}`,
      angle: 'Alivio Térmico & Aniones SMILIFE',
      hook: `¿Los cólicos menstruales te obligan a poner tu vida en pausa cada mes? (#${num}) 🌸✨`,
      body: `Descubre una alternativa natural y libre de químicos blanqueadores: las Toallas Sanitarias SMILIFE con Turmalina (Uso Día y Uso Noche) incorporan una banda aniónica que genera infrarrojo lejano y emite un suave calor biológico que ayuda a calmar espasmos musculares y regular el flujo.\n\nAlgodón suave transpirable y polímero superabsorbente para máxima frescura y cero olores.`,
      combo: 'Toallas Sanitarias SMILIFE (Uso Día + Noche) + Protector Íntimo Diario SMILIFE',
      cta: `Escríbeme por WhatsApp para pedir tu kit íntimo SMILIFE y experimentar la diferencia este mes.`
    },
    {
      title: `Cuidado Íntimo Preventivo Diario con Protectores SMILIFE de Anión #${num}`,
      angle: 'Higiene & Confort Diario SMILIFE',
      hook: `El confort femenino no solo es para los días de periodo: cuida tu zona íntima todos los días (#${num}) 🌿💖`,
      body: `Los Protectores Íntimos Diarios SMILIFE con Turmalina HGW ayudan a mantener el pH balanceado, oxigenan el área delicada con aniones naturales y previenen la proliferación de bacterias causantes de molestias e irritaciones.\n\nSiente la libertad de moverte cómoda, fresca y segura todo el día.`,
      combo: 'Protector Íntimo Diario SMILIFE con Turmalina + Trébol Coffee Cream HGW',
      cta: `Solicita tu paquete de protectores diarios SMILIFE con entrega segura escribiéndome a mi WhatsApp.`
    },
    {
      title: `Bienestar Hormonal Femenino y Nutrición Botánica #${num}`,
      angle: 'Isoflavonas & Confort Femenino',
      hook: `Nutre tu cuerpo desde adentro durante tus días de ciclo o madurez femenina (#${num}) ☕🌸`,
      body: `Acompaña el uso de las Toallas Sanitarias SMILIFE con una deliciosa taza de Trébol Coffee Cream HGW, formulado con extracto de trébol rojo (isoflavonas naturales), rosa y raíz de pueraria para brindar relajación, calidez y bienestar en tus ciclos hormonales.`,
      combo: 'Toalla Sanitaria SMILIFE con Turmalina + Trébol Coffee Cream (Café Trébol)',
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
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🌸 **Combo Femenino SMILIFE:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesora: [NOMBRE])`,
    tags: ['#SaludFemenina', '#SinColicos', '#ToallasSMILIFE', '#TurmalinaHGW', '#BienestarMujer']
  };
});

