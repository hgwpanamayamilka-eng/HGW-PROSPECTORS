import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const LIMPIEZA_COLON_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Digestión Ligera y Desinflamación Abdominal #${num}`,
      angle: 'Desinflamación y Limpieza Suave',
      hook: `¿Te sientes pesado, con el abdomen inflamado o con digestión lenta después de comer? (#${num}) 🌿✨`,
      body: `El 70% de nuestro sistema inmune vive en el intestino. Cuando acumulamos toxinas o tenemos tránsito lento, el cuerpo se siente agotado y pesado.\n\nNuestro Protocolo de Limpieza Digestiva combina Fresh Drink Chang JingJing (bebida botánica con cebada alcalina, bayas de goji y fibra natural) con Lactiberry (té negro fermentado con arándanos y lácteo) para limpiar suavemente el tracto gastrointestinal y nutrir tu microbiota sin cólicos agresivos.`,
      combo: 'Fresh Drink Chang JingJing + Lactiberry + Biolacti Candy',
      cta: `Escríbeme por WhatsApp para compartirte la guía de uso paso a paso y disponibilidad de este combo digestivo.`
    },
    {
      title: `Microbiota Fuerte y Vientre Plano con Té Moldeador #${num}`,
      angle: 'Metabolismo & Microbiota',
      hook: `¿Sabías que un colon limpio es la base para una piel radiante y mayor vitalidad diaria? (#${num}) 🫐💧`,
      body: `El Té Moldeador Profesional HGW (Pro Shaping Tea) con espino y hojas de loto estimula la digestión de grasas pesadas mientras Lactiberry aporta probióticos y antioxidantes de arándano silvestre.\n\nDisfruta de una digestión ligera y regular que respeta tu ritmo natural sin efectos secundarios.`,
      combo: 'Té Moldeador Profesional (Pro Shaping Tea) + Lactiberry + Termo de Turmalina Waterson',
      cta: `Solicita tu combo de salud digestiva con envío a todo el país escribiéndome al WhatsApp.`
    },
    {
      title: `Adiós a la Pesadez Digestiva con Botánica Natural HGW #${num}`,
      angle: 'Tránsito Regular & Confort',
      hook: `Recupera la ligereza de tu cuerpo con una nutrición botánica especializada (#${num}) 🍵🍃`,
      body: `No necesitas recurrir a laxantes químicos agresivos. La combinación de fibras solubles de Fresh Drink Chang JingJing y los caramelos con probióticos Biolacti Candy estimulan el peristaltismo intestinal mientras equilibran la flora digestiva de manera deliciosa.`,
      combo: 'Fresh Drink Chang JingJing + Biolacti Candy (Caramelo con Probióticos)',
      cta: `Haz clic en mi enlace de WhatsApp para recibir asesoría personalizada sobre tu salud digestiva.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-colon-${num}`,
    protocolId: 'limpieza_colon',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🌿 **Combo Sugerido:** ${sel.combo}\n\n📲 **Contáctame al WhatsApp:** [WHATSAPP_LINK]\n(Código oficial de distribuidor: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludDigestiva', '#LimpiezaDeColon', '#FreshDrink', '#Lactiberry', '#MicrobiotaHGW']
  };
});

