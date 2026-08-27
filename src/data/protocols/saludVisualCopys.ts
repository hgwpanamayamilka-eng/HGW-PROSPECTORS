import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SALUD_VISUAL_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Protección Ocular & Antocianinas de Arándano Silvestre #${num}`,
      angle: 'Fatiga Visual & Pantallas',
      hook: `¿Pasas más de 6 horas al día frente a pantallas de celular o computadora y sientes ojos secos o vista cansada? (#${num}) 📱👀`,
      body: `La luz azul acelera la oxidación de la retina. El Jugo de Arándano Concentrado y los Caramelos de Arándano HGW aportan la dosis más alta de antocianinas y flavonoides naturales, nutrientes esenciales que mejoran la microcirculación en los capilares oculares y protegen la mácula.\n\nNutre tu vista y reduce la pesadez ocular de forma deliciosa.`,
      combo: 'Jugo / Caramelos de Arándanos HGW + Berry Oil Softgels',
      cta: `Escríbeme por WhatsApp para consultar la disponibilidad del combo de salud visual.`
    },
    {
      title: `Nutrición Celular para la Mácula y Agudeza Visual #${num}`,
      angle: 'Antioxidantes de Alta Potencia',
      hook: `Cuida tu agudeza visual con el poder antioxidante del rey de las bayas: el Arándano (#${num}) 🫐✨`,
      body: `Los arándanos orgánicos seleccionados por HGW contienen pigmentos bioactivos que favorecen la síntesis de rodopsina, el pigmento retiniano responsable de la visión en condiciones de poca luz.\n\nUn soporte nutricional diario indispensable para estudiantes, profesionales y adultos mayores.`,
      combo: 'Café con Arándanos HGW + Caramelos de Arándano',
      cta: `Solicita tu combo visual con entrega a domicilio escribiéndome al WhatsApp.`
    },
    {
      title: `Hidratación Ocular y Prevención del Envejecimiento Prematuro de la Vista #${num}`,
      angle: 'Omega 7 & Ácidos Grasos Esenciales',
      hook: `¿Sientes arenilla, ardor o visión borrosa al final del día? (#${num}) 💧👁️`,
      body: `El Berry Oil de HGW (aceite puro de espino amarillo y arándano) aporta Omegas 3, 6, 7 y 9 que ayudan a mantener las mucosas oculares hidratadas y protegidas contra la inflamación y resequedad ambiental.\n\nProtege tus ojos desde el interior con nutrientes botánicos puros.`,
      combo: 'Berry Oil Softgels + Jugo de Arándano HGW',
      cta: `Haz clic en mi enlace de WhatsApp para recibir orientación sobre nutrición ocular.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-visual-${num}`,
    protocolId: 'salud_visual',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🫐 **Combo Visual:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SaludVisual', '#ArandanosHGW', '#FatigaVisual', '#BerryOil', '#VisionSaludable']
  };
});
