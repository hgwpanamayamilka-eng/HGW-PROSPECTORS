import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const LIMPIEZA_COLON_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Digestión Ligera y Desinflamación Abdominal #${num}`,
      angle: 'Desinflamación y Ligereza',
      hook: `¿Te sientes pesado, con el abdomen inflamado o con digestión lenta después de comer? (#${num}) 🌿✨`,
      body: `El 70% de nuestro sistema inmune vive en el intestino. Cuando acumulamos toxinas o tenemos tránsito lento, el cuerpo se siente agotado y pesado.\n\nNuestro Protocolo de Limpieza de Colon combina LactiBerry (probióticos activos + arándanos antioxidantes) con Café Saludable con Ganoderma HGW para apoyar la microbiota y favorecer un tránsito intestinal regular de forma suave y sin cólicos.`,
      combo: 'LactiBerry (Probióticos + Arándano) + Café con Ganoderma / Cordyceps HGW',
      cta: `Escríbeme por WhatsApp para compartirte la guía de uso paso a paso y disponibilidad de este combo digestivo.`
    },
    {
      title: `Microbiota Fuerte: El Secreto de tu Energía Diaria #${num}`,
      angle: 'Nutrición de Microbiota',
      hook: `¿Sabías que un colon limpio es la base para una piel radiante y mayor vitalidad? (#${num}) 🫐💧`,
      body: `Cuando cuidamos la flora intestinal con probióticos de alta absorción y antioxidantes de arándano silvestre, mejoramos la asimilación de nutrientes y eliminamos la sensación de pesadez.\n\nDisfruta de una limpieza suave y natural que respeta tu ritmo digestivo diario sin efectos laxantes agresivos.`,
      combo: 'LactiBerry HGW + Té Verde Botánico',
      cta: `Solicita tu combo de salud digestiva con envío a todo el país escribiéndome al WhatsApp.`
    },
    {
      title: `Adiós a la Pesadez Digestiva con Botánica Natural #${num}`,
      angle: 'Tránsito Regular',
      hook: `Recupera la ligereza de tu cuerpo con una nutrición botánica especializada (#${num}) ☕🍃`,
      body: `No necesitas recurrir a métodos agresivos. La combinación de fibras solubles, fermentos probióticos y hongos adaptógenos (Cordyceps y Ganoderma) estimula el peristaltismo natural de tu intestino mientras te brinda energía limpia durante todo el día.`,
      combo: 'Café con Cordyceps HGW + LactiBerry en ayunas',
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
    tags: ['#SaludDigestiva', '#LimpiezaDeColon', '#LactiBerry', '#BienestarHGW', '#Microbiota']
  };
});
