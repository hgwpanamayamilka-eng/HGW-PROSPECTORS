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
  if (!b) return 'mejorar tu calidad de vida';
  return b.replace(/^(\d+\.?|-|\*|•|🔹)\s*/, '').replace(/\.$/, '');
}

// Deterministic generator fallback for immediate generation of 30 distinct psychological copys tailored to the selected product using AIDA
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

    // AIDA: Interés
    let interest = '';
    switch (index % 5) {
      case 0:
        interest = `${product.nombre} combina extractos botánicos de ${ingredient.toLowerCase()} con los más altos estándares de pureza y tecnología verde de HGW. ${product.descripcion_corta}`;
        break;
      case 1:
        interest = `Diseñado especialmente para personas activas que valoran su salud y buscan una alternativa natural, segura y de alta absorción (${product.presentacion}).`;
        break;
      case 2:
        interest = `Con más de 30 años de investigación global y respaldo científico en más de 69 países, su fórmula contiene ${product.ingredientes.slice(0, 3).join(', ')}.`;
        break;
      case 3:
        interest = `Fácil de integrar en tu rutina diaria, ofreciendo practicidad, excelente tolerancia y la garantía de ingredientes orgánicos certificados.`;
        break;
      default:
        interest = `${product.descripcion_corta} Respaldado por certificaciones internacionales y la preferencia de miles de consumidores en América Latina.`;
        break;
    }

    // AIDA: Deseo
    const desire = `✨ Beneficios clave para ti:\n• ${firstBenefit}\n• ${secondBenefit}\n• Presentación: ${product.presentacion} lista para tu consumo diario.`;

    // AIDA: Acción / CTA
    const actionCTA = `📲 ${config.ctaType}:\nEscríbeme por WhatsApp al ${contact.whatsapp} o ingresa a mi enlace directo: ${waUrl}\n(Código de socia: ${contact.codigo} - Asesora oficial: ${contact.nombre})`;

    const hashtags = [
      `#HGW${product.nombre.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#HGWMarketing`,
      `#${product.categoria.replace(/[^a-zA-Z0-9]/g, '')}`,
      `#SaludYBienestar`,
      `#MetodoAIDA`
    ];

    return {
      numero: num,
      hook: strat.hook,
      atencion: strat.hook,
      interes: interest,
      deseo: desire,
      accion: actionCTA,
      desarrollo: `${interest}\n\n${desire}`,
      beneficio: `🔹 ${firstBenefit}\n🔹 ${secondBenefit}`,
      cta: actionCTA,
      hashtags: hashtags,
      estrategia: strat.name
    };
  });
}

