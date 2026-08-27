import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';

export const HERRAMIENTAS_IA_COPYS: GeneratedBusinessCopy[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const profiles = [
    'Distribuidores que quieren automatizar su prospección en redes sociales',
    'Líderes creando guiones de video para TikTok, Instagram Reels y YouTube',
    'Socios que desean redactar respuestas de WhatsApp rápidas e inteligentes',
    'Emprendedores buscando crear imágenes y banners promocionales con IA',
    'Networkers que quieren optimizar su tiempo y delegar tareas repetitivas a la IA',
    'Distribuidores aprendiendo a usar ChatGPT, Gemini y Claude para su negocio',
    'Socios que buscan ganchos virales para captar clientes de salud y bienestar',
    'Líderes entrenando a sus equipos en Social Selling moderno y herramientas digitales',
    'Distribuidores creando testimonios y storytelling persuasivo con IA',
    'Emprendedores que desean diseñar embudos de prospección orgánicos'
  ];

  const angles = [
    {
      title: `Prompt Maestro para Generar 10 Ganchos Virales de TikTok y Reels #${num}`,
      hook: `Copia este Prompt para crear videos virales sobre HGW en segundos con IA (#${num}) 🎬🤖`,
      body: `Usa este comando en ChatGPT, Gemini o Claude:\n\n"Actúa como un experto en creación de contenido viral y copywriting para Network Marketing. Genera 10 ganchos de alto impacto de 3 segundos para videos de TikTok y Reels sobre [PRODUCTO O PLAN DE GANANCIA MUTUA HGW]. Cada gancho debe tocar un dolor común de energía, digestión, salud femenina o ingresos extra, y despertar curiosidad inmediata para llevar al espectador a comentar o escribir al WhatsApp."`,
      keyPoints: ['Ganchos virales en 3 segundos', 'Aumenta vistas y comentarios', 'Lleva tráfico directo a tu WhatsApp'],
      tags: ['#PromptTikTok', '#ReelsHGW', '#IAparaEmprendedores', '#ContenidoViral']
    },
    {
      title: `Automatización de Respuestas y Manejo de Objeciones con IA #${num}`,
      hook: `¿No sabes qué responderle a un prospecto difícil? La IA redacta tu respuesta perfecta (#${num}) 🧠💡`,
      body: `Usa este prompt inteligente cuando un prospecto te haga una pregunta compleja:\n\n"Actúa como un mentor de ventas empático y profesional de HGW. Mi prospecto me acaba de decir: '[PEGA AQUÍ LA DUDA O OBJECIÓN]'. Redacta una respuesta de 3 párrafos cortos para WhatsApp, validando su punto con empatía, explicando la ventaja real del modelo HGW y cerrando con una pregunta de avance."`,
      keyPoints: ['Respuestas a la medida en segundos', 'Tono empático y profesional', 'Cero improvisaciones'],
      tags: ['#PromptObjeciones', '#WhatsAppInteligente', '#CierreConIA', '#Productividad']
    },
    {
      title: `Creación de Imágenes Publicitarias con Prompts de Midjourney e Imagen 3 #${num}`,
      hook: `Genera imágenes de calidad publicitaria para tus productos HGW con IA (#${num}) 🎨📸`,
      body: `Copia los Prompts Master de imagen generados en nuestra app para Midjourney, Imagen 3 o DALL-E 3. Obtendrás fotografías fotorrealistas de tazas humeantes de Café con Ganoderma, productos de arándanos frescos y personas sonrientes en ambientes luminosos sin pagar fotógrafos ni agencias costosas.\n\nOptimizado en formatos 1:1 para Feed y 9:16 para Reels e Historias.`,
      keyPoints: ['Fotografía publicitaria con IA', 'Formatos 1:1 y 9:16 optimizados', 'Ahorro total en diseño'],
      tags: ['#PromptMasterImagen', '#MidjourneyHGW', '#DisenoConIA', '#MarketingVisual']
    },
    {
      title: `Estructura AIDA para Copys de Ventas Automáticos con IA #${num}`,
      hook: `Cómo redactar copys de alta conversión usando el método AIDA e Inteligencia Artificial (#${num}) ✍️🔥`,
      body: `El Método AIDA (Atención, Interés, Deseo, Acción) es la fórmula más probada del marketing. Pídele a tu IA:\n\n"Escribe un copy completo aplicando la fórmula AIDA para promocionar [PRODUCTO HGW] en Facebook. Incluye un gancho magnético, explicación de los beneficios coadyuvantes, llamado a la acción con mi enlace de WhatsApp y hashtags estratégicos."`,
      keyPoints: ['Fórmula AIDA comprobada', 'Estructura clara y persuasiva', 'Llamados a la acción dinámicos'],
      tags: ['#MetodoAIDA', '#CopywritingIA', '#VentasDigitales', '#HGWMarketing']
    },
    {
      title: `Estrategia de 15 Días de Contenido Automatizado para WhatsApp y Redes #${num}`,
      hook: `Planea un mes completo de publicaciones de HGW en menos de 10 minutos (#${num}) 📅🚀`,
      body: `Usa la IA para generar tu calendario editorial mensual:\n\n"Genera un calendario de 15 publicaciones para mis estados de WhatsApp e Instagram enfocado en HGW. Alterna entre: 1) Testimonios de producto, 2) Beneficios del Plan de Ganancia Mutua, 3) Frases de liderazgo y 4) Llamados a la acción para agendar presentaciones. Incluye el texto y la sugerencia de imagen."`,
      keyPoints: ['Calendario mensual en minutos', 'Contenido variado y estratégico', 'Constancia sin estrés'],
      tags: ['#CalendarioDeContenido', '#PlanificacionIA', '#RedesSocialesHGW', '#Eficiencia']
    }
  ];

  const selectedAngle = angles[(num - 1) % angles.length];
  const selectedProfile = profiles[(num - 1) % profiles.length];

  return {
    id: `ia-${num}`,
    stage: 'herramientas_ia',
    stageLabel: 'Herramientas con IA',
    title: selectedAngle.title,
    targetProfile: selectedProfile,
    hook: selectedAngle.hook,
    body: selectedAngle.body,
    keyPoints: selectedAngle.keyPoints,
    cta: `Copia este prompt y pruébalo ahora mismo en tu herramienta de IA favorita, o escríbeme para más plantillas.`,
    fullMessage: `${selectedAngle.hook}\n\n${selectedAngle.body}\n\n📌 **Beneficios de esta herramienta:**\n${selectedAngle.keyPoints.map(p => `• ${p}`).join('\n')}\n\n📲 **Solicita más prompts y entrenamiento aquí:** [WHATSAPP_LINK]\n(Código oficial: [CODIGO] - Asesor: [NOMBRE])`,
    tags: selectedAngle.tags
  };
});
