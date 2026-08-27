import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SISTEMA_INMUNOLOGICO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Escudo Inmunológico con Ganoderma Soluble Coffee & Cordyceps #${num}`,
      angle: 'Inmunomodulación Adaptógena',
      hook: `¿Te enfermas con frecuencia o sientes que tus defensas bajan ante el mínimo estrés? (#${num}) 🛡️🍄`,
      body: `El Ganoderma Lucidum presente en Ganoderma Soluble Coffee y el Cordyceps Sinensis son reconocidos por la ciencia moderna como inmunomoduladores: ayudan a equilibrar la respuesta celular y optimizar la actividad de los glóbulos blancos.\n\nNutre tu escudo inmunológico diario con una bebida funcional deliciosa y sin azúcar agregada.`,
      combo: 'Ganoderma Soluble Coffee + Spirulina Plus Capsule (Espirulina en Cápsula)',
      cta: `Escríbeme por WhatsApp para conocer el protocolo de inmunonutrición HGW.`
    },
    {
      title: `Blindaje Antioxidante: Berry Juice HIGH VC + Ganoderma Candy #${num}`,
      angle: 'Antioxidantes & Vitamina C',
      hook: `Fortalece las barreras celulares de toda tu familia de forma natural (#${num}) 🫐🛡️`,
      body: `La combinación de Berry Juice HIGH VC (rico en antocianinas y vitamina C) con Ganoderma Candy aporta micronutrientes esenciales que neutralizan radicales libres y respaldan la respuesta inmune rápida ante cambios ambientales.\n\nFácil de preparar, delicioso y apto para jóvenes y adultos.`,
      combo: 'Berry Juice HIGH VC + Ganoderma Candy (Caramelos de Ganoderma)',
      cta: `Solicita tu combo para elevar defensas escribiéndome al WhatsApp.`
    },
    {
      title: `Vitalidad Celular y Nutrición Integral con Spirulina Plus Capsule #${num}`,
      angle: 'Nutrición Mitocondrial & Probióticos',
      hook: `Fortalece tu cuerpo frente al ritmo acelerado y la fatiga cotidiana (#${num}) ⚡🌿`,
      body: `Spirulina Plus Capsule con Ginseng Americano aporta más del 56% de proteína vegetal, hierro bioasimilable y ficocianina, mientras Biolacti Candy refuerza los probióticos del sistema digestivo donde reside gran parte de la inmunidad.`,
      combo: 'Spirulina Plus Capsule + Biolacti Candy + Choco Gano',
      cta: `Haz clic en mi enlace de WhatsApp para recibir atención personalizada.`
    }
  ];

  const sel = variations[(num - 1) % variations.length];

  return {
    id: `proto-inmune-${num}`,
    protocolId: 'sistema_inmunologico',
    title: sel.title,
    angle: sel.angle,
    hook: sel.hook,
    body: sel.body,
    suggestedCombo: sel.combo,
    cta: sel.cta,
    fullMessage: `${sel.hook}\n\n${sel.body}\n\n🛡️ **Combo Inmunológico:** ${sel.combo}\n\n📲 **Escríbeme por WhatsApp:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: ['#SistemaInmune', '#DefensasFuertes', '#GanodermaHGW', '#SpirulinaPlus', '#BerryJuice']
  };
});

