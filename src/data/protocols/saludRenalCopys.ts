import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SALUD_RENAL_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Protección de Vías Urinarias con Berry Juice HIGH VC #${num}`,
      angle: 'Vías Urinarias & Proantocianidinas',
      hook: `¿Sueles tener molestias urinarias recurrentes o ardor al orinar? (#${num}) 🫐💧`,
      body: `Las proantocianidinas presentes en el Berry Juice HIGH VC de HGW actúan como un escudo botánico que impide la adhesión de bacterias en las paredes de las vías urinarias, promoviendo su expulsión natural mediante una hidratación adecuada.\n\nProtección natural, segura y sin alterar la flora beneficiosa.`,
      combo: 'Berry Juice HIGH VC (Zumo de Frutos Rojos) + Termo de Turmalina Waterson',
      cta: `Escríbeme por WhatsApp para consultar cómo integrar el Berry Juice en tu rutina diaria.`
    },
    {
      title: `Energía Vital Renal con Cordyceps Coffee Cream & Coffee Ceps #${num}`,
      angle: 'Fortaleza Renal & Cordyceps',
      hook: `En la tradición oriental, los riñones son la fuente de nuestra energía vital (#${num}) 🍄⚡`,
      body: `El Cordyceps Sinensis presente en Cordyceps Coffee Cream y Coffee Ceps (sin azúcar) es venerado por su capacidad para tonificar la energía de los riñones, mejorar la microcirculación y apoyar el balance hídrico del organismo. Disfruta de una taza matutina para sentir vitalidad duradera.`,
      combo: 'Cordyceps Coffee Cream / Coffee Ceps + Blueberry Candy',
      cta: `Solicita tu combo para salud renal escribiéndome directo al WhatsApp.`
    },
    {
      title: `Depuración y Balance Hídrico con Termo de Turmalina Waterson #${num}`,
      angle: 'Depuración y Filtración Suave',
      hook: `Favorece la filtración natural de tus riñones y la eliminación de líquidos retenidos (#${num}) 💧✨`,
      body: `El Termo de Turmalina Waterson alcaliniza y microestructura el agua, permitiendo una hidratación celular profunda que alivia la carga de filtración en los riñones. Combínalo con Berry Juice HIGH VC para un soporte depurativo integral.`,
      combo: 'Berry Juice HIGH VC + Termo de Turmalina Waterson',
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
    tags: ['#SaludRenal', '#BerryJuice', '#CoffeeCeps', '#TermoWaterson', '#BienestarHGW']
  };
});

