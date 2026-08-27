import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SALUD_RENAL_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Protección de Vías Urinarias con Arándano Silvestre (Cranberry) #${num}`,
      angle: 'Vías Urinarias & Proantocianidinas',
      hook: `¿Sueles tener molestias urinarias recurrentes o ardor al orinar? (#${num}) 🫐💧`,
      body: `Las proantocianidinas tipo A presentes en los arándanos seleccionados por HGW actúan como un escudo botánico que impide la adhesión de bacterias en las paredes de las vías urinarias, promoviendo su expulsión natural mediante una hidratación adecuada.\n\nProtección natural, segura y sin alterar la flora beneficiosa.`,
      combo: 'Jugo de Arándano Concentrado HGW + Abundante Agua Mineralizada',
      cta: `Escríbeme por WhatsApp para consultar cómo integrar el concentrado de arándano en tu rutina diaria.`
    },
    {
      title: `Energía Vital Renal y Fuerza Ancestral con Cordyceps Sinensis #${num}`,
      angle: 'Fortaleza Renal & Cordyceps',
      hook: `En la medicina tradicional, los riñones son la fuente de nuestra energía vital (#${num}) 🍄⚡`,
      body: `El Cordyceps Sinensis es venerado por su capacidad para tonificar la energía renal, mejorar la microcirculación y apoyar el equilibrio hídrico del organismo. Disfruta de una taza matutina de Café con Cordyceps HGW para sentir vitalidad duradera sin sobreestimular tu organismo.`,
      combo: 'Café con Cordyceps HGW + Té de Arándanos',
      cta: `Solicita tu combo para salud renal escribiéndome directo al WhatsApp.`
    },
    {
      title: `Depuración y Balance Hídrico Natural #${num}`,
      angle: 'Depuración y Filtración Suave',
      hook: `Favorece la filtración natural y la eliminación de líquidos retenidos (#${num}) 🍃✨`,
      body: `La combinación de infusiones botánicas antioxidantes y extractos de arándano apoya el trabajo de filtración de los riñones, ayudando a reducir la pesadez en piernas y facilitando un balance hídrico saludable.`,
      combo: 'LactiBerry + Té Verde / Infusión Botánica HGW',
      cta: `Haz clic en mi enlace de WhatsApp para recibir orientación personalizada.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-renal-${num}`,
    protocolId: 'salud_renal',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n💧 **Combo Renal & Vías Urinarias:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludRenal', '#ViasUrinarias', '#ArandanosHGW', '#Cordyceps', '#BienestarNatural']
  };
});
