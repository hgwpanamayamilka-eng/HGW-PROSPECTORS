import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const COADYUVANTE_CRONICO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Nutrición Coadyuvante Integral con Ganoderma & Spirulina Plus #${num}`,
      angle: 'Soporte Celular & Calidad de Vida',
      hook: `¿Buscas un soporte nutricional de alta pureza para acompañar tu bienestar diario? (#${num}) 🌿🕊️`,
      body: `La nutrición celular de HGW a base de Ganoderma Soluble Coffee, Spirulina Plus Capsule y Péptido de Colágeno de Arándano ofrece un perfil bioactivo único que ayuda al organismo a nutrir los tejidos, combatir el estrés oxidativo y mantener la vitalidad mitocondrial.\n\n*Nota ética:* Este protocolo actúa como complemento nutricional coadyuvante en el bienestar general, trabajando en armonía con las indicaciones de tu médico tratante.`,
      combo: 'Ganoderma Soluble Coffee + Spirulina Plus Capsule + Péptido de Colágeno de Arándano',
      cta: `Escríbeme por WhatsApp para recibir orientación personalizada sobre este protocolo coadyuvante.`
    },
    {
      title: `Protección Antioxidante y Reducción del Estrés Celular con Berry Juice #${num}`,
      angle: 'Antioxidantes & Regeneración',
      hook: `Apoya la vitalidad y recuperación de tu cuerpo con fitonutrientes botánicos puros (#${num}) 🫐💧`,
      body: `Los flavonoides y antocianinas concentrados en Berry Juice HIGH VC y Péptido de Colágeno de Arándano HGW neutralizan los radicales libres que desgastan las células, apoyando la elasticidad de los tejidos y la energía mitocondrial de manera natural.`,
      combo: 'Berry Juice HIGH VC (Zumo de Frutos Rojos) + Péptido de Colágeno de Arándano',
      cta: `Solicita tu kit de nutrición celular con entrega segura escribiéndome al WhatsApp.`
    },
    {
      title: `Equilibrio Sistémico y Bienestar Diario con Cordyceps & Turmalina #${num}`,
      angle: 'Adaptógenos & Termoterapia',
      hook: `Dale a tu organismo los mejores adaptógenos botánicos y calor biológico (#${num}) 🍄✨`,
      body: `La combinación de Cordyceps Coffee Cream con el calor infrarrojo lejano de los Protectores de Turmalina y el agua microestructurada del Termo Waterson promueve un balance interno y descanso reparador sin efectos secundarios agresivos.`,
      combo: 'Cordyceps Coffee Cream + Protector de Cintura de Turmalina + Termo Waterson',
      cta: `Haz clic en mi enlace de WhatsApp para resolver cualquier duda con un asesor oficial.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-coad-${num}`,
    protocolId: 'coadyuvante_cronico',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🌿 **Combo Coadyuvante:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#NutricionCoadyuvante', '#GanodermaHGW', '#SpirulinaPlus', '#PeptidoColageno', '#CalidadDeVida']
  };
});

