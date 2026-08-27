import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SALUD_VISUAL_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Protección Ocular & Antocianinas con Berry Juice HIGH VC #${num}`,
      angle: 'Fatiga Visual & Pantallas',
      hook: `¿Pasas más de 6 horas al día frente a pantallas de celular o computadora y sientes ojos secos o vista cansada? (#${num}) 📱👀`,
      body: `La luz azul acelera la oxidación de la retina. El Berry Juice HIGH VC y los Blueberry Candy (Caramelos de Arándano) HGW aportan la dosis más alta de antocianinas y vitamina C bioactiva, nutrientes esenciales que mejoran la microcirculación en los capilares oculares y protegen la mácula.\n\nNutre tu vista y reduce la pesadez ocular de forma deliciosa.`,
      combo: 'Berry Juice HIGH VC (Zumo de Frutos Rojos) + Blueberry Candy (Caramelos de Arándano)',
      cta: `Escríbeme por WhatsApp para consultar la disponibilidad del combo de salud visual.`
    },
    {
      title: `Nutrición Celular para la Mácula y Agudeza Visual #${num}`,
      angle: 'Antioxidantes de Alta Potencia',
      hook: `Cuida tu agudeza visual con el poder antioxidante del rey de las bayas: el Arándano (#${num}) 🫐✨`,
      body: `Los arándanos orgánicos seleccionados por HGW contienen pigmentos bioactivos que favorecen la regeneración de la rodopsina, el pigmento retiniano responsable de la visión en condiciones de poca luz.\n\nUn soporte nutricional diario indispensable para estudiantes, profesionales y adultos mayores.`,
      combo: 'Blueberry Coffee (Café con Arándanos) + Blueberry Candy HGW',
      cta: `Solicita tu combo visual con entrega a domicilio escribiéndome al WhatsApp.`
    },
    {
      title: `Hidratación Ocular y Prevención del Desgaste de la Vista #${num}`,
      angle: 'Antioxidantes & Flavonoides',
      hook: `¿Sientes arenilla, ardor o visión borrosa al final de tu jornada? (#${num}) 💧👁️`,
      body: `El Berry Juice HIGH VC combinado con Choco Blue (Chocolate con Arándanos) aporta polifenoles y flavonoides puros que protegen las células oculares contra la inflamación y resequedad ambiental.\n\nProtege tus ojos desde el interior con la nutrición botánica más pura de HGW.`,
      combo: 'Berry Juice HIGH VC + Choco Blue (Chocolate con Arándanos)',
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
    tags: ['#SaludVisual', '#BerryJuice', '#BlueberryCandy', '#VisionSaludable', '#HGW']
  };
});

