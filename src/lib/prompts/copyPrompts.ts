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
1. No inventes propiedades médicas, curaciones mágicas, ni garantices resultados de salud no verificados.
2. Utiliza un lenguaje natural, persuasivo, ético y altamente conversacional.
3. Genera EXACTAMENTE 30 copys completamente DIFERENTES entre sí, numerados del 1 al 30.
4. Cada uno de los 30 copys debe aplicar una estrategia psicológica diferente de la siguiente lista:
   [1. Curiosidad intrigante, 2. Problema-Solución directo, 3. Beneficio transformador, 4. Storytelling cotidiano, 5. Pregunta provocadora, 6. Ruptura de mito común, 7. Error frecuente que comete la gente, 8. Comparación inteligente, 9. Educación de valor, 10. Sentido de urgencia / escasez, 11. Exclusividad y estatus, 12. Prueba social / recomendación, 13. Identificación y empatía, 14. Aspiración de estilo de vida, 15. Transformación de hábitos, 16. Derribo de objeción de precio, 17. Pregunta frecuente (FAQ), 18. Antes / Después conceptual, 19. Formato lista / Checklist, 20. Reto personal de 7 o 21 días, 21. Consejo de experto amigable, 22. Advertencia positiva, 23. Ventana de oportunidad de ahorro, 24. CTA directo y sin rodeos, 25. Analogía sorprendente, 26. Enfoque regalo / autorecompensa, 27. Momentos del día (Rutina matutina/nocturna), 28. Fórmula PAS (Problema, Agitación, Solución), 29. Fórmula AIDA (Atención, Interés, Deseo, Acción), 30. Testimonio vivencial y cierre].

ESTRUCTURA DE CADA COPY:
Cada copy debe incluir obligatoriamente:
- Número de copy y Nombre de la Estrategia Psicológica.
- Hook (Gancho inicial magnético de 1-2 líneas).
- Desarrollo (Cuerpo persuasivo y empático).
- Beneficio (El valor central basado estrictamente en la información oficial del producto).
- CTA (Llamado a la acción claro, adaptado a WhatsApp o la red elegida con los datos de contacto).
- Hashtags (3-5 hashtags específicos y relevantes).

Entrega exactamente los 30 copys estructurados.`;
}

// Deterministic generator fallback for immediate generation of 30 distinct psychological copys
export function generateLocal30Copys(product: Product, config: CopyGenerationConfig, contact: ContactData): GeneratedCopy[] {
  const strategies = [
    { name: 'Curiosidad intrigante', hookPrefix: '¿Sabías que una sola taza de café puede cambiar por completo cómo te sientes hoy?' },
    { name: 'Problema-Solución', hookPrefix: '¿Cansancio a mitad de la tarde y falta de concentración?' },
    { name: 'Beneficio transformador', hookPrefix: 'Eleva tu energía diaria de manera 100% natural.' },
    { name: 'Storytelling cotidiano', hookPrefix: 'Pensé que era normal vivir agotada todos los días... hasta que probé esto.' },
    { name: 'Pregunta provocadora', hookPrefix: '¿Qué le estás dando a tu cuerpo a primera hora de la mañana?' },
    { name: 'Ruptura de mito', hookPrefix: 'Mito: Para cuidar tu salud tienes que renunciar a lo que más disfrutas.' },
    { name: 'Error común', hookPrefix: 'El error #1 que muchos cometen al elegir sus productos de bienestar:' },
    { name: 'Comparación inteligente', hookPrefix: 'No todos los productos del mercado son iguales... mira esta gran diferencia.' },
    { name: 'Educación de valor', hookPrefix: 'Descubre los increíbles fitonutrientes que hacen único a este producto.' },
    { name: 'Sentido de urgencia', hookPrefix: 'Últimas unidades disponibles con precio especial para distribuidores y clientes.' },
    { name: 'Exclusividad y estatus', hookPrefix: 'Para quienes no negocian la calidad ni el cuidado de su familia.' },
    { name: 'Prueba social', hookPrefix: 'Cientos de personas en más de 69 países ya integraron este producto a su rutina.' },
    { name: 'Identificación y empatía', hookPrefix: 'Sé exactamente lo difícil que es encontrar un producto que cumpla lo que promete.' },
    { name: 'Aspiración de estilo de vida', hookPrefix: 'Despertar con energía, enfoque y vitalidad ya no tiene que ser un reto.' },
    { name: 'Transformación de hábitos', hookPrefix: 'Un pequeño cambio en tu rutina matutina puede marcar una gran diferencia.' },
    { name: 'Derribo de objeciones', hookPrefix: '¿Invertir en tu salud te parece costoso? Espera a ver lo que cuesta descuidarla.' },
    { name: 'Pregunta frecuente (FAQ)', hookPrefix: 'Me preguntan seguido: "¿Cuál es el mejor momento para consumirlo?"' },
    { name: 'Antes y Después conceptual', hookPrefix: 'Antes: días pesados y fatiga. Ahora: vitalidad y bienestar pleno.' },
    { name: 'Checklist / Lista práctica', hookPrefix: '3 razones clave por las que este producto se convirtió en mi favorito:' },
    { name: 'Reto de bienestar', hookPrefix: 'Te reto a probarlo durante 7 días y sentir el verdadero cambio.' },
    { name: 'Consejo amigable', hookPrefix: 'Un tip simple para potenciar tu rendimiento diario sin complicaciones.' },
    { name: 'Advertencia positiva', hookPrefix: 'Cuidado: una vez que disfrutes su sabor y beneficios, no querrás cambiarlo.' },
    { name: 'Oportunidad de ahorro', hookPrefix: 'Ahorra hasta un 30% o 60% registrándote hoy como socio con mi código oficial.' },
    { name: 'CTA directo y sin rodeos', hookPrefix: 'Disponible para entrega inmediata en todo el país.' },
    { name: 'Analogía sorprendente', hookPrefix: 'Tu cuerpo es como un motor de alta gama: dale siempre el mejor combustible.' },
    { name: 'Regalo y autorecompensa', hookPrefix: 'Date el gusto que mereces mientras cuidas tu bienestar.' },
    { name: 'Momento del día / Rutina', hookPrefix: 'El ritual perfecto para comenzar tu mañana con la mejor actitud.' },
    { name: 'Fórmula PAS (Problema-Agitación-Solución)', hookPrefix: 'El ritmo diario te exige al máximo y tu cuerpo pide un respiro.' },
    { name: 'Fórmula AIDA (Atención-Interés-Deseo-Acción)', hookPrefix: 'Atención: Esta opción combina tradición oriental y calidad certificada.' },
    { name: 'Testimonio y recomendación de líder', hookPrefix: 'Como distribuidora oficial, este es el producto que siempre recomiendo a ojos cerrados.' }
  ];

  const waUrl = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${contact.nombre}, quiero información sobre ${product.nombre}`)}`;

  return strategies.map((strat, index) => {
    const num = index + 1;
    const firstBenefit = product.beneficios[index % product.beneficios.length] || product.descripcion_corta;
    const secondBenefit = product.beneficios[(index + 1) % product.beneficios.length] || 'Fórmula natural de máxima calidad.';
    const ingredient = product.ingredientes[index % product.ingredientes.length] || product.materia_prima || 'Ingredientes seleccionados';

    let dev = '';
    switch (index % 5) {
      case 0:
        dev = `${product.nombre} ha sido formulado especialmente para ${config.targetAudience.toLowerCase()}, combinando ${ingredient.toLowerCase()} con la más alta tecnología y estándares internacionales. ${product.descripcion_corta}`;
        break;
      case 1:
        dev = `Conoce las propiedades de ${product.nombre}, una opción diseñada para quienes buscan calidad, comodidad y resultados reales en su día a día. Presentación práctica: ${product.presentacion}.`;
        break;
      case 2:
        dev = `Si estás buscando una alternativa natural respaldada por más de 30 años de investigación global, ${product.nombre} es la elección ideal. Su formulación contiene ${product.ingredientes.slice(0, 3).join(', ')}.`;
        break;
      case 3:
        dev = `Incorporar ${product.nombre} a tus hábitos es muy sencillo. Ya sea en casa, en la oficina o durante tus actividades, disfrutarás de una experiencia superior con ingredientes de primer nivel.`;
        break;
      default:
        dev = `${product.descripcion_corta} Disfruta de un producto de alta rotación, seguro y con excelente aceptación en toda la comunidad HGW.`;
        break;
    }

    const cta = `${config.ctaType}: Escríbeme directo a WhatsApp al ${contact.whatsapp} o haz clic en el enlace del perfil: ${waUrl} (Código de socio: ${contact.codigo})`;

    const hashtags = [
      `#HGW${product.nombre.replace(/\s+/g, '')}`,
      `#HGWMarketing`,
      `#SaludYBienestar`,
      `#RedDeMercadeo`,
      `#EmprendimientoHGW`
    ];

    return {
      numero: num,
      hook: `${strat.hookPrefix} ✨ Conoce ${product.nombre}.`,
      desarrollo: dev,
      beneficio: `🔹 ${firstBenefit}\n🔹 ${secondBenefit}`,
      cta: cta,
      hashtags: hashtags,
      estrategia: strat.name
    };
  });
}
