import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const COADYUVANTE_CRONICO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Nutrición Coadyuvante Integral para Mejor Calidad de Vida #${num}`,
      angle: 'Soporte Celular & Calidad de Vida',
      hook: `¿Buscas un soporte nutricional natural para complementar tu estilo de vida y bienestar diario? (#${num}) 🌿🕊️`,
      body: `La nutrición celular de HGW a base de Ganoderma Lucidum, Cordyceps Sinensis y Arándanos Silvestres ofrece un perfil bioactivo único que ayuda al organismo a regular procesos inflamatorios, combatir el estrés oxidativo y mantener la energía celular.\n\n*Nota ética:* Este protocolo actúa como complemento alimenticio y coadyuvante en el bienestar general, trabajando en armonía con las indicaciones de tu médico tratante.`,
      combo: 'Pack Bienestar Integral (Ganoderma + Cordyceps + Berry Oil + LactiBerry)',
      cta: `Escríbeme por WhatsApp para recibir orientación personalizada sobre este protocolo coadyuvante.`
    },
    {
      title: `Protección Antioxidante y Reducción del Estrés Celular #${num}`,
      angle: 'Antioxidantes y Regeneración',
      hook: `Apoya la recuperación y vitalidad de tu cuerpo con micronutrientes botánicos puros (#${num}) 🫐💧`,
      body: `Los flavonoides y antocianinas concentrados en la línea de arándanos HGW neutralizan los radicales libres que desgastan los tejidos, apoyando la circulación, la salud cardiovascular y la energía mitocondrial de manera segura y constante.`,
      combo: 'Café con Arándanos HGW + Berry Oil Softgels',
      cta: `Solicita tu kit de nutrición celular con entrega segura escribiéndome al WhatsApp.`
    },
    {
      title: `Equilibrio Sistémico y Bienestar Diario #${num}`,
      angle: 'Armonía y Adaptógenos',
      hook: `Dale a tu organismo los mejores adaptógenos de la botánica milenaria (#${num}) 🍄✨`,
      body: `Los adaptógenos ayudan al cuerpo a adaptarse a situaciones de estrés físico y metabólico, promoviendo un balance interno sin efectos secundarios agresivos. Disfruta de una rutina de salud preventiva y consciente.`,
      combo: 'Café con Cordyceps + Té Botánico HGW',
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
    tags: ['#NutricionCoadyuvante', '#Ganoderma', '#Cordyceps', '#SaludPreventiva', '#CalidadDeVida']
  };
});
