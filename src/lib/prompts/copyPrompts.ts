import { Product, CopyGenerationConfig, GeneratedCopy, ContactData } from '../../types';

export function buildMasterCopyPrompt(product: Product, config: CopyGenerationConfig, contact?: ContactData): string {
  return `Actúa como un copywriter experto en marketing de respuesta directa, psicología del consumidor, ventas sociales y contenido viral para negocios de salud, bienestar y redes de mercadeo.

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

REGLAS DE ORO OBLIGATORIAS:
1. REGLA SUPREMA PARA LOS GANCHOS (HOOKS): Cada uno de los 30 ganchos ("Hook") DEBE ESTAR 100% ENFOCADO, PERSONALIZADO Y CONTEXTUALIZADO EN EL PRODUCTO SELECCIONADO ("${product.nombre}"), sus ingredientes específicos (${product.ingredientes.join(', ')}), sus beneficios reales (${product.beneficios.join(' | ')}) y el problema o deseo que soluciona. 
¡QUEDA ESTRICTAMENTE PROHIBIDO USAR GANCHOS GENÉRICOS O INAPROPIADOS PARA EL PRODUCTO (por ejemplo, hablar de café si el producto es colágeno, toallas higiénicas, jabón, pasta dental, suplemento o mermelada)!
2. No inventes propiedades médicas, curaciones mágicas, ni garantices resultados de salud no verificados.
3. Utiliza un lenguaje natural, persuasivo, ético y altamente conversacional.
4. Genera EXACTAMENTE 30 copys completamente DIFERENTES entre sí, numerados del 1 al 30.
5. Cada uno de los 30 copys debe aplicar una estrategia psicológica diferente de la siguiente lista:
   [1. Curiosidad intrigante, 2. Problema-Solución directo, 3. Beneficio transformador, 4. Storytelling cotidiano, 5. Pregunta provocadora, 6. Ruptura de mito común, 7. Error frecuente que comete la gente, 8. Comparación inteligente, 9. Educación de valor, 10. Sentido de urgencia / escasez, 11. Exclusividad y estatus, 12. Prueba social / recomendación, 13. Identificación y empatía, 14. Aspiración de estilo de vida, 15. Transformación de hábitos, 16. Derribo de objeción de precio, 17. Pregunta frecuente (FAQ), 18. Antes / Después conceptual, 19. Formato lista / Checklist, 20. Reto personal de 7 o 21 días, 21. Consejo de experto amigable, 22. Advertencia positiva, 23. Ventana de oportunidad de ahorro, 24. CTA directo y sin rodeos, 25. Analogía sorprendente, 26. Enfoque regalo / autorecompensa, 27. Momentos del día (Rutina matutina/nocturna), 28. Fórmula PAS (Problema, Agitación, Solución), 29. Fórmula AIDA (Atención, Interés, Deseo, Acción), 30. Testimonio vivencial y cierre].

ESTRUCTURA DE CADA COPY:
Cada copy debe incluir obligatoriamente:
- Número de copy y Nombre de la Estrategia Psicológica.
- Hook (Gancho inicial magnético de 1-2 líneas 100% enfocado en ${product.nombre}).
- Desarrollo (Cuerpo persuasivo y empático hablando de ${product.nombre} y sus bondades).
- Beneficio (El valor central basado estrictamente en la información oficial del producto).
- CTA (Llamado a la acción claro, adaptado a WhatsApp o la red elegida con los datos de contacto).
- Hashtags (3-5 hashtags específicos y relevantes).

Entrega exactamente los 30 copys estructurados.`;
}

function cleanBenefitText(b?: string): string {
  if (!b) return 'mejorar tu calidad de vida';
  return b.replace(/^(\d+\.?|-|\*|•|🔹)\s*/, '').replace(/\.$/, '');
}

// Deterministic generator fallback for immediate generation of 30 distinct psychological copys tailored to the selected product
export function generateLocal30Copys(product: Product, config: CopyGenerationConfig, contact: ContactData): GeneratedCopy[] {
  const b1 = cleanBenefitText(product.beneficios[0]) || product.descripcion_corta;
  const b2 = cleanBenefitText(product.beneficios[1]) || b1;
  const b3 = cleanBenefitText(product.beneficios[2]) || b2;
  const ing1 = product.ingredientes[0] || product.materia_prima || 'ingredientes naturales seleccionados';
  const ing2 = product.ingredientes[1] || ing1;
  const name = product.nombre;
  const cat = product.categoria;
  const pres = product.presentacion;

  const strategies = [
    { 
      name: 'Curiosidad intrigante', 
      hook: `¿Sabías que ${ing1.toLowerCase()} en ${name} puede transformar por completo cómo te sientes hoy?` 
    },
    { 
      name: 'Problema-Solución', 
      hook: `¿Buscas ${b1.toLowerCase()} de forma 100% natural y efectiva? Conoce la solución con ${name}.` 
    },
    { 
      name: 'Beneficio transformador', 
      hook: `Logra ${b2.toLowerCase()} gracias a la fórmula bioactiva y exclusiva de ${name}.` 
    },
    { 
      name: 'Storytelling cotidiano', 
      hook: `Probé muchas opciones en ${cat.toLowerCase()} sin notar cambios reales... hasta que descubrí ${name}.` 
    },
    { 
      name: 'Pregunta provocadora', 
      hook: `¿Le estás dando a tu cuerpo la calidad, pureza y nutrición que te ofrece ${name} todos los días?` 
    },
    { 
      name: 'Ruptura de mito', 
      hook: `Mito: Para lograr ${b1.toLowerCase()} tienes que gastar una fortuna o sufrir procesos difíciles. La verdad sobre ${name}:` 
    },
    { 
      name: 'Error común', 
      hook: `El error #1 al elegir productos de ${cat.toLowerCase()}: no verificar la pureza de sus ingredientes como en ${name}.` 
    },
    { 
      name: 'Comparación inteligente', 
      hook: `No todos los productos de ${cat.toLowerCase()} son iguales... la concentración de ${ing1.toLowerCase()} en ${name} marca la diferencia.` 
    },
    { 
      name: 'Educación de valor', 
      hook: `La ciencia de ${ing1.toLowerCase()}: por qué ${name} se ha convertido en el aliado perfecto para tu bienestar.` 
    },
    { 
      name: 'Sentido de urgencia', 
      hook: `¡Alta demanda de ${name}! Asegura tu ${pres} hoy mismo con disponibilidad inmediata y precio especial.` 
    },
    { 
      name: 'Exclusividad y estatus', 
      hook: `Para quienes no negocian la calidad y solo eligen lo mejor en ${cat.toLowerCase()}: ${name}.` 
    },
    { 
      name: 'Prueba social', 
      hook: `Cientos de familias y distribuidores en más de 69 países ya integraron ${name} en su día a día.` 
    },
    { 
      name: 'Identificación y empatía', 
      hook: `Sé lo difícil que es encontrar un producto de ${cat.toLowerCase()} que realmente cumpla lo que promete. Por eso elijo ${name}.` 
    },
    { 
      name: 'Aspiración de estilo de vida', 
      hook: `Imagina disfrutar cada jornada con ${b1.toLowerCase()} gracias al poder natural de ${name}.` 
    },
    { 
      name: 'Transformación de hábitos', 
      hook: `Un pequeño cambio en tu rutina con ${name} es suficiente para potenciar ${b2.toLowerCase()}.` 
    },
    { 
      name: 'Derribo de objeciones', 
      hook: `Invertir en ${name} no es un gasto: es el respaldo inteligente para ${b1.toLowerCase()} ($${product.precio.toFixed(2)} por ${pres}).` 
    },
    { 
      name: 'Pregunta frecuente (FAQ)', 
      hook: `Me preguntan con frecuencia: "¿Por qué ${name} es uno de los productos más recomendados de HGW?"` 
    },
    { 
      name: 'Antes y Después conceptual', 
      hook: `Antes: dudas y falta de ${b1.toLowerCase()}. Ahora: bienestar total y vitalidad renovada con ${name}.` 
    },
    { 
      name: 'Checklist / Lista práctica', 
      hook: `3 razones clave por las que ${name} (${pres}) no puede faltar en tu hogar:` 
    },
    { 
      name: 'Reto de bienestar', 
      hook: `Te reto a probar ${name} durante 7 días consecutivos y sentir la verdadera diferencia en tu salud.` 
    },
    { 
      name: 'Consejo amigable', 
      hook: `Tip de bienestar: potencia tu energía y salud aprovechando las propiedades de ${ing1.toLowerCase()} en ${name}.` 
    },
    { 
      name: 'Advertencia positiva', 
      hook: `Cuidado: una vez que compruebes los resultados de ${name}, no vas a querer volver a lo tradicional.` 
    },
    { 
      name: 'Oportunidad de ahorro', 
      hook: `Ahorra hasta un 30% o 50% en tu compra de ${name} activando tu membresía oficial HGW conmigo.` 
    },
    { 
      name: 'CTA directo y sin rodeos', 
      hook: `¡Disponible para entrega inmediata! Pide tu ${name} (${pres}) 100% original de HGW hoy mismo.` 
    },
    { 
      name: 'Analogía sorprendente', 
      hook: `Tu cuerpo merece el mejor combustible biológico: bríndale la pureza y tecnología de ${name}.` 
    },
    { 
      name: 'Regalo y autorecompensa', 
      hook: `Consiéntete hoy con el bienestar, frescura y confort que te brinda ${name}.` 
    },
    { 
      name: 'Momento del día / Rutina', 
      hook: `El ritual perfecto para disfrutar y consentirte con los beneficios de ${name} (${pres}).` 
    },
    { 
      name: 'Fórmula PAS (Problema-Agitación-Solución)', 
      hook: `¿Cansado de no encontrar soluciones naturales para ${b1.toLowerCase()}? La respuesta está en ${name}.` 
    },
    { 
      name: 'Fórmula AIDA (Atención-Interés-Deseo-Acción)', 
      hook: `Atención: La fórmula de ${name} con ${ing1.toLowerCase()} combina naturaleza y tecnología de punta.` 
    },
    { 
      name: 'Testimonio y recomendación de líder', 
      hook: `Como asesora y distribuidora oficial HGW, ${name} es el producto que siempre recomiendo a ojos cerrados.` 
    }
  ];

  const waUrl = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${contact.nombre}, quiero información y ordenar ${product.nombre}`)}`;

  return strategies.map((strat, index) => {
    const num = index + 1;
    const firstBenefit = product.beneficios[index % product.beneficios.length] || product.descripcion_corta;
    const secondBenefit = product.beneficios[(index + 1) % product.beneficios.length] || 'Fórmula natural de máxima calidad respaldada por HGW.';
    const ingredient = product.ingredientes[index % product.ingredientes.length] || product.materia_prima || 'ingredientes seleccionados';

    let dev = '';
    switch (index % 5) {
      case 0:
        dev = `${product.nombre} ha sido formulado especialmente para ${config.targetAudience.toLowerCase()}, combinando ${ingredient.toLowerCase()} con los más altos estándares de calidad internacional. ${product.descripcion_corta}`;
        break;
      case 1:
        dev = `Conoce todas las propiedades de ${product.nombre}, una opción diseñada para quienes buscan calidad, comodidad y resultados reales en su día a día. Presentación práctica: ${product.presentacion}.`;
        break;
      case 2:
        dev = `Si estás buscando una alternativa natural respaldada por más de 30 años de investigación global, ${product.nombre} es la elección ideal. Su formulación contiene ${product.ingredientes.slice(0, 3).join(', ')}.`;
        break;
      case 3:
        dev = `Incorporar ${product.nombre} a tus hábitos diarios es muy sencillo y conveniente. Ya sea en casa, en el trabajo o durante tus actividades, disfrutarás de una experiencia superior con ingredientes de primer nivel.`;
        break;
      default:
        dev = `${product.descripcion_corta} Disfruta de un producto seguro, confiable y con excelente aceptación en toda la comunidad HGW.`;
        break;
    }

    const cta = `${config.ctaType}: Escríbeme directo a WhatsApp al ${contact.whatsapp} o haz clic en el enlace de mi perfil: ${waUrl} (Código de socia: ${contact.codigo})`;

    const hashtags = [
      `#HGW${product.nombre.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#HGWMarketing`,
      `#${product.categoria.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#SaludYBienestar`,
      `#EmprendimientoHGW`
    ];

    return {
      numero: num,
      hook: strat.hook,
      desarrollo: dev,
      beneficio: `🔹 ${firstBenefit}\n🔹 ${secondBenefit}`,
      cta: cta,
      hashtags: hashtags,
      estrategia: strat.name
    };
  });
}
