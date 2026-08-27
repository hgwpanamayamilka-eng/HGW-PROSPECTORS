import { HealthProtocolCopy } from '../../lib/prompts/healthProtocolPrompts';

export const SISTEMA_INMUNOLOGICO_COPYS: HealthProtocolCopy[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const variations = [
    {
      title: `Escudo Inmunológico con Ganoderma & Cordyceps Adaptógenos #${num}`,
      angle: 'Inmunomodulación Adaptógena',
      hook: `¿Te enfermas con frecuencia o sientes que tus defensas bajan ante el mínimo estrés? (#${num}) 🛡️🍄`,
      body: `El Ganoderma Lucidum y el Cordyceps Sinensis son reconocidos por la ciencia moderna como inmunomoduladores: no sobreestimulan el sistema, sino que ayudan a regular la respuesta celular y optimizar la actividad de los glóbulos blancos.\n\nNutre tu escudo inmunológico diario con una bebida funcional deliciosa y sin azúcar agregada.`,
      combo: 'Café con Ganoderma + Café con Cordyceps HGW',
      cta: `Escríbeme por WhatsApp para conocer el protocolo de inmunonutrición HGW.`
    },
    {
      title: `Sinergia Antioxidante: Arándanos + Probióticos para Defensas Fuertes #${num}`,
      angle: 'Microbiota & Antioxidantes',
      hook: `El 70% de tus defensas nace en tu flora intestinal: cuídala con LactiBerry (#${num}) 🫐💧`,
      body: `La combinación de millones de fermentos lácticos vivos con el poder antioxidante del arándano azul crea una barrera natural que protege tu organismo frente a virus y bacterias ambientales.\n\nFácil de preparar, delicioso y apto para toda la familia.`,
      combo: 'LactiBerry (Probióticos + Arándanos) + Jugo de Arándano HGW',
      cta: `Solicita tu combo para elevar defensas escribiéndome al WhatsApp.`
    },
    {
      title: `Vitalidad Celular y Resistencia Frente al Estrés #${num}`,
      angle: 'Energía Celular y Protección',
      hook: `Fortalece tu cuerpo frente al ritmo acelerado y la fatiga cotidiana (#${num}) ⚡🌿`,
      body: `Los bioactivos de Berry Oil y los hongos milenarios de HGW nutren las mitocondrias de tus células, brindándote una energía sostenida y una capacidad de respuesta superior frente al desgaste diario.`,
      combo: 'Berry Oil Softgels + Café Saludable HGW',
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
    tags: ['#SistemaInmune', '#DefensasFuertes', '#Ganoderma', '#LactiBerry', '#BienestarIntegral']
  };
});
