import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const HIGADO_METABOLISMO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Depuración Hepática y Metabolismo Celular con Ganoderma Soluble Coffee #${num}`,
      angle: 'Desintoxicación Hepática & Ganoderma',
      hook: `¿Te sientes cansado sin razón, con pesadez o digestión de grasas muy lenta tras las comidas? (#${num}) 🌿🔬`,
      body: `El hígado es el laboratorio principal de nuestro cuerpo, procesando todo lo que comemos y respiramos. El Ganoderma Soluble Coffee HGW y el Té Moldeador Profesional aportan triterpenos y polisacáridos bioactivos que favorecen la función hepática normal y la eliminación eficiente de toxinas metabólicas.\n\nApoya tu metabolismo de forma natural y recupera tu energía.`,
      combo: 'Ganoderma Soluble Coffee + Té Moldeador Profesional (Pro Shaping Tea)',
      cta: `Escríbeme por WhatsApp para conocer el protocolo completo de soporte hepático.`
    },
    {
      title: `Equilibrio Metabólico y Digestión Ligera de Grasas #${num}`,
      angle: 'Metabolismo & Té Moldeador',
      hook: `Un hígado sobrecargado ralentiza tu metabolismo y te resta vitalidad diaria (#${num}) ☕⚡`,
      body: `Cuando le damos al organismo los triterpenos del hongo Ganoderma Lucidum y los extractos de espino y semillas de casia del Té Moldeador Profesional, apoyamos la metabolización adecuada de lípidos. Disfruta de Ganoderma Candy o Choco Gano para una nutrición funcional deliciosa.`,
      combo: 'Ganoderma Soluble Coffee + Té Moldeador Profesional + Ganoderma Candy',
      cta: `Solicita tu combo para bienestar metabólico escribiéndome al WhatsApp.`
    },
    {
      title: `Protección Antioxidante Contra el Estrés Oxidativo Hepático #${num}`,
      angle: 'Antioxidantes & Alcalinidad',
      hook: `Protege tus células hepáticas con Ganoderma y Agua Alcalinizada Waterson (#${num}) 🍄💧`,
      body: `El Ganoderma Soluble Coffee combinado con el agua enriquecida con microelementos del Termo de Turmalina Waterson protege las membranas celulares contra el daño oxidativo provocado por alimentos ultraprocesados y estrés.\n\nNutrición botánica de máxima pureza para tu bienestar integral.`,
      combo: 'Ganoderma Soluble Coffee + Termo de Turmalina Waterson + Choco Gano',
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
    tags: ['#SaludHepática', '#GanodermaHGW', '#TeMoldeador', '#MetabolismoActivo', '#HGW']
  };
});

