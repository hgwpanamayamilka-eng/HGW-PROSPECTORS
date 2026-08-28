import { Product, CopyGenerationConfig, GeneratedCopy, ContactData } from '../../types';

export function buildMasterCopyPrompt(product: Product, config: CopyGenerationConfig, contact?: ContactData): string {
  return `Actúa como un copywriter de élite experto en marketing de respuesta directa, psicología del consumidor y el MÉTODO AIDA (Atención, Interés, Deseo, Acción) para negocios de salud, bienestar y redes de mercadeo de Health Green World (HGW).

Analiza cuidadosamente el producto seleccionado:
- NOMBRE DEL PRODUCTO: ${product.nombre}
- CATEGORÍA: ${product.categoria}
- DESCRIPCIÓN: ${product.descripcion}
- BENEFICIOS CLAVE: ${product.beneficios.join(' | ')}
- INGREDIENTES / COMPOSICIÓN: ${product.ingredientes.join(', ')}
- PRESENTACIÓN: ${product.presentacion}
- PRECIO PÚBLICO: $${product.precio.toFixed(2)} | PRECIO DISTRIBUIDOR: $${product.precio_distribuidor.toFixed(2)} | BV: ${product.BV}
- CLAIMS PERMITIDOS: ${product.claims_permitidos.join(' | ')}
- CLAIMS NO PERMITIDOS (PROHIBIDO AFIRMAR): ${product.claims_no_permitidos.join(' | ')}

CONFIGURACIÓN DE LA CAMPAÑA:
- PÚBLICO OBJETIVO: ${config.targetAudience}
- RED SOCIAL PRINCIPAL: ${config.socialNetwork}
- OBJETIVO: ${config.objective}
- TONO: ${config.tone}
- LLAMADO A LA ACCIÓN (CTA): ${config.ctaType}
- LONGITUD DESEADA: ${config.length}
${contact ? `- DATOS DE CONTACTO: ${contact.nombre} | WhatsApp: ${contact.whatsapp} | Enlace: ${contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} | Código Distribuidor: ${contact.codigo}` : ''}

REGLAS DE ORO OBLIGATORIAS & MÉTODO AIDA:
1. REGLA SUPREMA PARA LA ATENCIÓN (HOOKS): Cada uno de los 30 ganchos DEBE ESTAR 100% ENFOCADO, PERSONALIZADO Y CONTEXTUALIZADO EN EL PRODUCTO SELECCIONADO ("${product.nombre}"), sus ingredientes específicos (${product.ingredientes.join(', ')}), sus beneficios reales (${product.beneficios.join(' | ')}) y el problema o deseo que soluciona. 
¡PROHIBIDO USAR GANCHOS GENÉRICOS O INAPROPIADOS PARA EL PRODUCTO!
2. MÉTODO AIDA EN CADA COPY:
   - [A] ATENCIÓN (Hook): Gancho magnético de 1-2 líneas que detiene el scroll de inmediato.
   - [I] INTERÉS: Conexión empática con la necesidad real, explicando la pureza de sus ingredientes (${product.ingredientes.slice(0, 2).join(', ')}) y la tecnología botánica de HGW.
   - [D] DESEO: Presentación de los beneficios transformadores, el bienestar palpable y el respaldo de más de 30 años de ciencia.
   - [A] ACCIÓN (CTA): Llamado a la acción inequívoco, urgente y persuasivo con enlace directo a WhatsApp y código de socia.
3. No inventes propiedades médicas, curaciones mágicas, ni garantices resultados de salud no verificados.
4. Genera EXACTAMENTE 30 copys completamente DIFERENTES entre sí, numerados del 1 al 30, cubriendo todas las estrategias psicológicas.

ESTRUCTURA DE CADA COPY (AIDA):
- Número y Nombre de la Estrategia Psicológica.
- [A] ATENCIÓN: Gancho magnético enfocado en ${product.nombre}.
- [I] INTERÉS: Argumentación empática, ciencia e ingredientes de valor.
- [D] DESEO: Beneficios tangibles y bienestar comprobado.
- [A] ACCIÓN (CTA): Llamado a la acción irresistible a WhatsApp con los datos de contacto.
- Hashtags (3-5 hashtags específicos).

Entrega exactamente los 30 copys estructurados con el Método AIDA.`;
}

function cleanBenefitText(b?: string): string {
  if (!b) return 'mejorar tu calidad de vida y bienestar';
  return b.replace(/^(\d+\.?|-|\*|•|🔹|✨)\s*/, '').replace(/\.$/, '').trim();
}

// Generador determinístico de 30 copys altamente persuasivos, únicos y específicos para cada producto del catálogo HGW usando el Método AIDA
export function generateLocal30Copys(product: Product, config: CopyGenerationConfig, contact: ContactData): GeneratedCopy[] {
  const benefits = product.beneficios.map(b => cleanBenefitText(b)).filter(Boolean);
  const b1 = benefits[0] || product.descripcion_corta;
  const b2 = benefits[1] || benefits[0] || 'Aporte nutricional y bienestar integral comprobado.';
  const b3 = benefits[2] || benefits[0] || 'Fórmula natural de máxima biodisponibilidad y pureza.';
  const b4 = benefits[3] || b2;
  const b5 = benefits[4] || b3;

  const ingredientsList = product.ingredientes.length > 0 ? product.ingredientes : [product.materia_prima || 'Extractos botánicos seleccionados'];
  const ing1 = ingredientsList[0] || 'fitonutrientes naturales';
  const ing2 = ingredientsList[1] || ing1;
  const ing3 = ingredientsList[2] || ing2;

  const name = product.nombre;
  const cat = product.categoria;
  const pres = product.presentacion;
  const desc = product.descripcion;
  const shortDesc = product.descripcion_corta;
  const claims = product.claims_permitidos.length > 0 ? product.claims_permitidos : [b1, b2];
  const claim1 = claims[0] || b1;
  const claim2 = claims[1] || b2;

  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${contact.nombre}, quiero información y pedir ${product.nombre}`)}`;

  // 30 Estrategias psicológicas de copywriting de respuesta directa hiper-personalizadas al producto
  const copyStrategies = [
    {
      name: 'Dolor y Problema Oculto',
      hook: `¿Sientes que tu cuerpo te pide una pausa y buscas una forma natural de ${b1.toLowerCase()}? 🌿`,
      interest: `${name} fue desarrollado por HGW combinando la riqueza de ${ing1} con los más rigurosos estándares de biotecnología verde. ${shortDesc}`,
      desire: `✨ Lo que experimentarás al integrarlo en tu día:\n• ${b1}\n• ${b2}\n• ${claim1}\n• Presentación: ${pres}`,
    },
    {
      name: 'Curiosidad Científica y Botánica',
      hook: `¿Por qué miles de especialistas en bienestar recomiendan ${ing1} como ingrediente clave en su rutina? 🔬🍃`,
      interest: `La ciencia detrás de ${name} aprovecha la pureza de ${ing1}${ingredientsList.length > 1 ? ` junto con ${ing2}` : ''} para brindar una absorción celular superior sin químicos agresivos.`,
      desire: `✨ Principales beneficios respaldados:\n• ${b2}\n• ${b3}\n• ${claim2}\n• Ideal para tu consumo diario en su práctica presentación de ${pres}.`,
    },
    {
      name: 'Beneficio Transformador Directo',
      hook: `Transforma tu vitalidad y dale a tu organismo el respaldo de ${name} (${pres}) ✨`,
      interest: `${desc}\n\nCon más de 30 años de trayectoria de HGW a nivel internacional, esta fórmula destaca por su pureza botánica y concentración activa.`,
      desire: `🌿 Resultados clave que notarás:\n• ${b1}\n• ${b2}\n• ${b4}`,
    },
    {
      name: 'Storytelling y Experiencia Personal',
      hook: `Probé diversas alternativas en ${cat.toLowerCase()} sin sentir una diferencia real... hasta que incorporé ${name} en mi día a día ☕`,
      interest: `Desde la primera semana noté cómo ${ing1.toLowerCase()} apoyó mi bienestar de manera notable. No es una moda pasajera: es nutrición funcional inteligente.`,
      desire: `✨ Mis beneficios favoritos:\n• ${b1}\n• ${b3}\n• Sabor y practicidad inigualables (${pres})`,
    },
    {
      name: 'Pregunta Provocadora de Conciencia',
      hook: `¿Cuánto tiempo más vas a postergar el cuidado que tu cuerpo merece? 🤔 Dale la bienvenida a ${name}.`,
      interest: `Tu salud es tu activo más valioso. ${name} está formulado con ${ingredientsList.slice(0, 2).join(' y ')} para apoyar tus metas de bienestar de forma 100% natural.`,
      desire: `🌿 Beneficios esenciales:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Ruptura de Mitos y Desinformación',
      hook: `Mito: "Para lograr ${b1.toLowerCase()} necesitas soluciones complicadas o costosas". La realidad con ${name}: 💡`,
      interest: `HGW demuestra que la naturaleza y la tecnología botánica pueden ofrecer resultados extraordinarios de manera sencilla, accesible y segura. ${shortDesc}`,
      desire: `✨ La ventaja real de ${name}:\n• ${claim1}\n• ${b2}\n• Comodidad total: ${pres}`,
    },
    {
      name: 'Error Común en la Elección de Suplementos',
      hook: `El error #1 al elegir productos en ${cat.toLowerCase()}: no revisar la procedencia y pureza de sus ingredientes ⚠️`,
      interest: `${name} cuenta con la garantía de materia prima seleccionada (${product.materia_prima || ing1}) y certificaciones internacionales que aseguran su máxima eficacia.`,
      desire: `🌿 ¿Por qué elegir ${name} de HGW?\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Comparación Inteligente de Calidad',
      hook: `No todas las opciones del mercado son iguales... la concentración de ${ing1} en ${name} marca la diferencia absoluta 🏆`,
      interest: `Mientras otros productos diluyen sus activos, ${name} preserva las fracciones bioactivas más potentes gracias al proceso de extracción botánica patentado por HGW.`,
      desire: `✨ Lo que obtienes en cada uso:\n• ${b1}\n• ${claim1}\n• ${b3}`,
    },
    {
      name: 'Educación y Conexión de Valor',
      hook: `Aprende cómo ${ing1} actúa en tu organismo para potenciar ${b1.toLowerCase()} 📚🌿`,
      interest: `Los fitonutrientes presentes en ${name} nutren tus células a nivel profundo, brindando un soporte constante que se traduce en mayor ligereza y bienestar.`,
      desire: `🌿 Puntos destacados del producto:\n• ${b1}\n• ${b2}\n• ${b4}`,
    },
    {
      name: 'Sentido de Urgencia y Disponibilidad',
      hook: `¡Alta demanda! Asegura hoy tu ${name} (${pres}) con disponibilidad para entrega inmediata 📦⚡`,
      interest: `Este producto es uno de los más solicitados de la línea ${cat} de HGW gracias a su efectividad y excelentes comentarios de clientes en toda la región.`,
      desire: `✨ No te quedes sin disfrutar de:\n• ${b1}\n• ${b2}\n• Precio público: $${product.precio.toFixed(2)} | Consulta precio especial de socia`,
    },
    {
      name: 'Exclusividad y Estándar Premium',
      hook: `Para quienes no negocian con su salud y solo eligen lo mejor: conoce ${name} de HGW 💎`,
      interest: `Diseñado bajo los más altos estándares de calidad global, ${name} fusiona lo mejor de la tradición botánica con la innovación científica moderna.`,
      desire: `🌿 Beneficios exclusivos:\n• ${b1}\n• ${b2}\n• ${claim2}`,
    },
    {
      name: 'Prueba Social y Testimonios Globales',
      hook: `Miles de familias y distribuidores en más de 69 países ya disfrutan los beneficios diarios de ${name} 🌎✨`,
      interest: `La satisfacción de quienes consumen ${name} respalda su calidad. Elaborado con ${ingredientsList.slice(0, 3).join(', ')}, es un pilar indispensable para tu rutina.`,
      desire: `✨ Comprueba tú misma los resultados:\n• ${b1}\n• ${b3}\n• ${b2}`,
    },
    {
      name: 'Identificación y Empatía Genuina',
      hook: `Sé lo frustrante que es buscar soluciones que no cumplen lo que prometen. Por eso elegí y recomiendo ${name} 🤝`,
      interest: `Como asesora oficial de HGW, conozco de primera mano la pureza y los resultados que brinda este producto en ${cat.toLowerCase()}.`,
      desire: `🌿 Tu bienestar en buenas manos:\n• ${b1}\n• ${b2}\n• Asesoría continua incluida`,
    },
    {
      name: 'Aspiración y Estilo de Vida Saludable',
      hook: `Imagina iniciar tus mañanas sintiéndote con total vitalidad y ${b1.toLowerCase()} ☀️🌈`,
      interest: `Incorporar ${name} en tu rutina diaria es el paso más sencillo y delicioso para cuidar tu cuerpo de adentro hacia afuera.`,
      desire: `✨ Tu nueva rutina incluye:\n• ${b1}\n• ${b2}\n• ${b5 || b3}`,
    },
    {
      name: 'Transformación de Hábitos Sencillos',
      hook: `Un pequeño cambio diario puede transformar por completo cómo te sientes: prueba ${name} 🌱`,
      interest: `No necesitas rutinas extremas ni procesos complicados. Con solo disfrutar de tu porción diaria de ${name} (${pres}), le das a tu cuerpo nutrientes bioactivos esenciales.`,
      desire: `🌿 Beneficios diarios comprobados:\n• ${b1}\n• ${b2}\n• ${claim1}`,
    },
    {
      name: 'Derribo de Objeción sobre el Precio',
      hook: `Invertir en tu salud no es un gasto: es la mejor decisión para tu futuro con ${name} 💰🛡️`,
      interest: `Por solo $${product.precio.toFixed(2)} obtienes ${pres} de pura nutrición botánica premium. Además, puedes acceder a descuentos de hasta 30% a 50% como distribuidora.`,
      desire: `✨ Máximo valor por tu inversión:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Pregunta Frecuente (FAQ de Clientes)',
      hook: `Me preguntan seguido: "¿Por qué ${name} es tan popular dentro del catálogo de HGW?" ❓💬`,
      interest: `La respuesta es simple: resultados reales. Su combinación de ${ing1} con biotecnología avanzada permite una absorción óptima que se siente desde los primeros días.`,
      desire: `🌿 Beneficios que responden a tus dudas:\n• ${b1}\n• ${b2}\n• ${claim2}`,
    },
    {
      name: 'Antes y Después Conceptual',
      hook: `Antes: pesadez y falta de ${b1.toLowerCase()}. Ahora: bienestar renovado y energía constante con ${name} 🔄✨`,
      interest: `Dale a tu organismo la oportunidad de renovarse de forma natural con los extractos puros de ${ingredientsList.slice(0, 2).join(' y ')}.`,
      desire: `✨ La transformación que mereces:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Checklist de 3 Razones Clave',
      hook: `3 razones por las que ${name} (${pres}) debe estar en tu hogar hoy mismo 📋✅`,
      interest: `1. Contiene ${ing1} de grado premium.\n2. Diseñado para ${b1.toLowerCase()}.\n3. Cuenta con el respaldo internacional de HGW en más de 69 países.`,
      desire: `🌿 Beneficios adicionales:\n• ${b2}\n• ${b3}\n• ${claim1}`,
    },
    {
      name: 'Reto de Bienestar de 7 Días',
      hook: `Te reto a probar ${name} durante 7 días y comprobar la diferencia en tu calidad de vida 🗓️🔥`,
      interest: `Siente la ligereza, confort y vitalidad que aporta su fórmula botánica activa. Un hábito simple con impacto duradero en tu bienestar.`,
      desire: `✨ En solo 7 días notarás:\n• ${b1}\n• ${b2}\n• Mayor confort y rendimiento`,
    },
    {
      name: 'Consejo Amigable de Asesora',
      hook: `Tip de bienestar del día: potencia tu rutina diaria aprovechando las bondades de ${ing1} en ${name} 💡☕`,
      interest: `Combina ${name} con una hidratación adecuada y siente cómo tu cuerpo responde con más energía y balance natural. ${shortDesc}`,
      desire: `🌿 Lo que tu cuerpo agradecerá:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Advertencia Positiva de Satisfacción',
      hook: `Advertencia: una vez que compruebes lo bien que te hace sentir ${name}, se convertirá en tu favorito indispensable 🌿💚`,
      interest: `Quienes prueban ${name} destacan su excelente calidad, aroma y la sensación de confort que brinda día tras día.`,
      desire: `✨ Características irresistibles:\n• ${b1}\n• ${b2}\n• Presentación: ${pres}`,
    },
    {
      name: 'Oportunidad de Ahorro y Membresía',
      hook: `¿Sabías que puedes comprar ${name} con hasta un 30% a 50% de descuento directo? 🏷️🎉`,
      interest: `Al activar tu código de distribuidor o consumidor inteligente HGW, adquieres este producto a precio de socio ($${product.precio_distribuidor.toFixed(2)}) y acumulas ${product.BV} BV.`,
      desire: `🌿 Beneficios de tu membresía:\n• Ahorro directo en ${name}\n• Acceso a todo el catálogo oficial\n• Asesoría y acompañamiento exclusivo`,
    },
    {
      name: 'Llamado Directo a la Acción (Venta Rápida)',
      hook: `¡Listo para enviar a tu puerta! Pide tu ${name} 100% original de HGW hoy mismo 📦📲`,
      interest: `Contamos con stock fresco y garantizado para entrega rápida en tu ciudad. Atención directa y personalizada.`,
      desire: `✨ Tu paquete incluye:\n• ${name} (${pres})\n• Guía de uso y recomendaciones personalizadas\n• ${b1}`,
    },
    {
      name: 'Analogía Biológica Sorprendente',
      hook: `Así como un motor de alta gama necesita el mejor combustible, tu cuerpo merece los nutrientes bioactivos de ${name} 🏎️⚡`,
      interest: `${name} aporta fitonutrientes puros de ${ing1} que actúan a nivel celular para optimizar tus funciones diarias.`,
      desire: `🌿 Máximo rendimiento biológico:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Autocuidado y Consentirse',
      hook: `Hoy es el momento perfecto para consentirte y regalarte el bienestar que te brinda ${name} 🎁🧘‍♀️`,
      interest: `El ritmo de vida actual exige que tomemos pausas conscientes. Disfruta de un momento para ti con los beneficios botánicos de HGW.`,
      desire: `✨ Disfruta de:\n• ${b1}\n• ${b2}\n• Sensación de equilibrio y armonía`,
    },
    {
      name: 'Momento del Día y Ritual de Salud',
      hook: `El ritual perfecto para disfrutar los beneficios de ${name} en tu rutina matutina o vespertina 🌅☕`,
      interest: `Fácil de preparar o consumir (${pres}), se integra con naturalidad en tu estilo de vida para darte ese impulso saludable que necesitas.`,
      desire: `🌿 Cada porción te aporta:\n• ${b1}\n• ${b2}\n• ${claim1}`,
    },
    {
      name: 'Fórmula PAS (Problema - Agitación - Solución)',
      hook: `¿Preocupada por la falta de opciones naturales y confiables para ${b1.toLowerCase()}? La solución definitiva es ${name} 🛡️`,
      interest: `La acumulación de estrés y la mala nutrición desgastan tu organismo. ${name} frena ese ciclo aportando antioxidantes y nutrientes de máxima pureza.`,
      desire: `✨ La solución que estabas buscando:\n• ${b1}\n• ${b2}\n• ${b3}`,
    },
    {
      name: 'Fórmula AIDA Pura (Atención - Interés - Deseo - Acción)',
      hook: `Atención: La fórmula exclusiva de ${name} con ${ing1} marca un antes y un después en ${cat.toLowerCase()} 🌟`,
      interest: `Desarrollada tras años de investigación botánica por HGW, esta fórmula integra fitocomponentes de alta pureza para nutrir tu organismo.`,
      desire: `🌿 Deseo & Resultados:\n• ${b1}\n• ${b2}\n• ${claim2}\n• Presentación: ${pres}`,
    },
    {
      name: 'Recomendación de Líder y Asesora Oficial',
      hook: `Como asesora oficial de HGW, ${name} es el producto que recomiendo con total confianza y seguridad 🌿🤝`,
      interest: `Su respaldo internacional, formulación limpia con ${ingredientsList.slice(0, 2).join(' y ')} y los testimonios de mis clientes lo confirman todos los días.`,
      desire: `✨ Descubre sus beneficios conmigo:\n• ${b1}\n• ${b2}\n• Asesoría 1 a 1 para tus pedidos y dudas`,
    }
  ];

  return copyStrategies.map((strat, index) => {
    const num = index + 1;
    const actionCTA = `📲 ${config.ctaType}:\nEscríbeme al WhatsApp directo: ${contact.whatsapp} o haz clic en mi enlace: ${waLink}\n(Código oficial: ${contact.codigo} - Asesora: ${contact.nombre})`;

    const hashtags = [
      `#${product.nombre.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#HGW${product.categoria.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#BienestarHGW`,
      `#SaludNatural`,
      `#HGWPanama`,
      `#MetodoAIDA`
    ];

    const cleanCategoryTag = product.categoria.replace(/[^a-zA-Z0-9]/g, '');

    return {
      numero: num,
      hook: strat.hook,
      atencion: strat.hook,
      interes: strat.interest,
      deseo: strat.desire,
      accion: actionCTA,
      desarrollo: `${strat.interest}\n\n${strat.desire}`,
      beneficio: `🔹 ${b1}\n🔹 ${b2}`,
      cta: actionCTA,
      hashtags: hashtags,
      estrategia: strat.name
    };
  });
}

