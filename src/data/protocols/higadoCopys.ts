import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const HIGADO_METABOLISMO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Depuración Hepática y Metabolismo Celular con Ganoderma #${num}`,
      angle: 'Desintoxicación Hepática',
      hook: `¿Te sientes cansado sin razón, con boca amarga por las mañanas o digestión de grasas muy lenta? (#${num}) 🌿🔬`,
      body: `El hígado es el laboratorio principal de nuestro cuerpo, procesando todo lo que comemos y respiramos. El Ganoderma Lucidum y el Té Botánico HGW aportan triterpenos y polisacáridos bioactivos que favorecen la función hepática normal y la eliminación eficiente de toxinas metabólicas.\n\nApoya tu metabolismo de forma natural y recupera tu energía.`,
      combo: 'Café con Ganoderma HGW + Té Verde / Infusión Botánica',
      cta: `Escríbeme por WhatsApp para conocer el protocolo completo de soporte hepático.`
    },
    {
      title: `Equilibrio Metabólico y Apoyo a los Niveles de Energía #${num}`,
      angle: 'Metabolismo y Vitalidad',
      hook: `Un hígado sobrecargado ralentiza tu metabolismo y te quita energía (#${num}) ☕⚡`,
      body: `Cuando le damos al organismo antioxidantes concentrados de arándanos y hongos adaptógenos, apoyamos la metabolización adecuada de lípidos y glucosa. Comienza tu día con una taza de Café Saludable HGW y siente la diferencia en tu rendimiento y ligereza.`,
      combo: 'Café con Cordyceps y Ganoderma + LactiBerry',
      cta: `Solicita tu combo para bienestar metabólico escribiéndome al WhatsApp.`
    },
    {
      title: `Protección Antioxidante Contra el Estrés Oxidativo Hepático #${num}`,
      angle: 'Antioxidantes y Omega 7',
      hook: `Protege tus células hepáticas con el poder del Espino Amarillo y Arándano (#${num}) 🫐🛡️`,
      body: `El Berry Oil de HGW aporta antioxidantes solubles en lípidos que protegen las membranas celulares contra el daño oxidativo provocado por alimentos ultraprocesados, estrés y contaminación.\n\nNutrición botánica de máxima pureza para tu bienestar integral.`,
      combo: 'Berry Oil Softgels + Té Botánico HGW',
      cta: `Haz clic en mi enlace de WhatsApp para recibir asesoría personalizada.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-higado-${num}`,
    protocolId: 'higado_metabolismo',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🌿 **Combo Hepático:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludHepática', '#GanodermaHGW', '#MetabolismoActivo', '#DetoxNatural', '#HGW']
  };
});
