import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const ARTICULAR_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Movilidad y Confort Articular con Infrarrojo Lejano & Turmalina #${num}`,
      angle: 'Alivio Articular & Turmalina',
      hook: `¿Te cuesta levantarte por las mañanas debido a rigidez o dolor en rodillas y articulaciones? (#${num}) 🦵⚡`,
      body: `La tecnología biomagnética de los Protectores de Rodilla Autocalentables de Turmalina HGW genera microcorrientes y calor infrarrojo lejano que activa la microcirculación local, ayudando a relajar músculos tensos y desinflamar articulaciones sobrecargadas.\n\nÚsalos de 20 a 45 minutos al día y siente un alivio progresivo y natural.`,
      combo: 'Protector de Rodilla Autocalentable de Turmalina + Péptido de Colágeno de Arándano',
      cta: `Escríbeme por WhatsApp para consultar disponibilidad y tallas de los protectores de turmalina.`
    },
    {
      title: `Nutrición Celular para Cartílagos con Péptidos de Colágeno #${num}`,
      angle: 'Colágeno Bioactivo & Ginseng',
      hook: `Fortalece tu flexibilidad y regeneración articular desde el interior (#${num}) 🫐🦴`,
      body: `El Péptido de Colágeno de Arándano HGW aporta péptidos de bajo peso molecular de rápida absorción que nutren directamente los cartílagos, tendones y ligamentos. Acompáñalo con Peptipro Candy (colágeno + ginseng) para mantener tus articulaciones protegidas durante tu rutina activa.`,
      combo: 'Péptido de Colágeno de Arándano + Peptipro Candy (Colágeno y Ginseng)',
      cta: `Solicita tu combo articular con envío directo escribiéndome al WhatsApp.`
    },
    {
      title: `Alivio Cervical y Lumbar para Jornadas Largas con Faja de Turmalina #${num}`,
      angle: 'Descanso Lumbar & Cervical',
      hook: `¿Trabajas muchas horas sentado o de pie y terminas con dolor de cuello o cintura? (#${num}) 🧘‍♂️🎒`,
      body: `El Protector de Cintura de Turmalina (Cinturón Lumbar) y el Protector de Cuello Autocalentable de Turmalina HGW actúan al contacto con la piel liberando calor biológico y relajando la tensión muscular acumulada.\n\nUn soporte ergonómico y reconfortante en la comodidad de tu hogar.`,
      combo: 'Protector de Cintura de Turmalina + Protector de Cuello Autocalentable de Turmalina',
      cta: `Haz clic en mi enlace de WhatsApp para conocer más sobre la línea de turmalina terapéutica HGW.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-artic-${num}`,
    protocolId: 'inflamacion_articular',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🦴 **Combo Articular:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludArticular', '#TurmalinaHGW', '#PeptidoColageno', '#SinDolor', '#MovilidadTotal']
  };
});

