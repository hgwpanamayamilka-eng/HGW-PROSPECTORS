import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const ARTICULAR_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Movilidad y Confort Articular con Infrarrojo Lejano #${num}`,
      angle: 'Alivio Articular & Férulas',
      hook: `¿Te cuesta levantarte por las mañanas debido a rigidez o dolor en rodillas y articulaciones? (#${num}) 🦵⚡`,
      body: `La tecnología biomagnética de las Férulas y Rodilleras de Turmalina HGW genera microcorrientes y calor biológico infrarrojo lejano que activa la microcirculación local, ayudando a relajar músculos tensos y desinflamar articulaciones sobrecargadas.\n\nÚsalas en casa mientras descansas y siente un alivio progresivo y natural.`,
      combo: 'Rodilleras de Turmalina HGW + Café con Cordyceps (Nutrición Celular)',
      cta: `Escríbeme por WhatsApp para consultar tallas disponibles y formas de entrega de las férulas de turmalina.`
    },
    {
      title: `Nutrición Adaptógena para Músculos y Articulaciones #${num}`,
      angle: 'Nutrición Celular con Cordyceps',
      hook: `Fortalece tu flexibilidad y resistencia articular desde el interior (#${num}) 🍄☕`,
      body: `El hongo Cordyceps Sinensis y el Ganoderma Lucidum son reconocidos en la medicina oriental por sus propiedades adaptógenas que apoyan la regeneración de tejidos y mejoran la oxigenación muscular.\n\nCombina nutrición celular diaria con terapias térmicas de turmalina para una movilidad plena.`,
      combo: 'Café con Cordyceps HGW + Férula para Cuello / Rodilla con Turmalina',
      cta: `Solicita tu combo articular con envío directo escribiéndome al WhatsApp.`
    },
    {
      title: `Alivio Cervical y Lumbar para Jornadas Largas #${num}`,
      angle: 'Descanso Lumbar y Cervical',
      hook: `¿Trabajas muchas horas sentado o manejando y terminas con dolor de cuello o espalda? (#${num}) 🧘‍♂️🎒`,
      body: `Nuestra Férula Cervical de Turmalina HGW actúa en solo 20 a 30 minutos al contacto con la piel, liberando tensión en la zona del cuello y hombros gracias a sus imanes permanentes y piedras de turmalina.\n\nUn spa de descanso en la comodidad de tu hogar.`,
      combo: 'Férula Cervical de Turmalina HGW + Té de Arándanos',
      cta: `Haz clic en mi enlace de WhatsApp para conocer más sobre la línea de turmalina terapéutica.`
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
    tags: ['#SaludArticular', '#TurmalinaHGW', '#Cordyceps', '#SinDolor', '#MovilidadTotal']
  };
});
