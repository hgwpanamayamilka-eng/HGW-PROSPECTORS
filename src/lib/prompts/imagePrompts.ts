import { Product, ImagePromptConfig, GeneratedImagePromptResult } from '../../types';

export function buildMasterImagePrompt(product: Product, config: ImagePromptConfig): GeneratedImagePromptResult {
  const stylesText = config.styles.length > 0 ? config.styles.join(', ') : 'FOTO PUBLICITARIA PREMIUM, ELEGANTE, BIENESTAR';
  const formatText = config.format === '1:1' ? '1:1 Square (Full Bleed canvas for Instagram / Facebook Feed / WhatsApp status)' : '9:16 Vertical (Full Bleed canvas for TikTok / Instagram Reels / Stories / YouTube Shorts)';

  const driveReference = product.driveUrl || config.driveUrl || config.imageReferenceUrl || product.imagen;

  const peopleDirectiveEnglish = config.incluirPersonas !== false
    ? `* Human Subject & Interaction Integration: Include realistic, expressive human models/people interacting naturally with the product or reflecting its core emotional benefit (${config.tipoPersona || 'Happy radiant person enjoying the wellness benefits, healthy energetic lifestyle, genuine smile, authentic emotions'}). The person must look sophisticated, healthy, and visually aligned with the marketing message/copy.`
    : '* Human Presence: Clean minimalist product-first focus with subtle lifestyle elements.';

  const peopleDirectiveSpanish = config.incluirPersonas !== false
    ? `* Integración de Personas Reales: Incluir modelos humanos/personas auténticas y expresivas interactuando con el producto (${config.tipoPersona || 'Persona feliz, radiante y saludable disfrutando del producto con una sonrisa genuina'}). La persona debe reflejar directamente el mensaje persuasivo del copy publicitario y el beneficio de bienestar.`
    : '* Enfoque: Énfasis puro en el producto con escenario publicitario limpio.';

  const contactDirectiveEnglish = config.incluirContacto && (config.contactoNombre || config.contactoTelefono)
    ? `
CONTACT INFORMATION OVERLAY ON THE IMAGE (LOCATED ON THE LEFT SIDE):
* Position & Layout: Positioned on the LEFT SIDE (lower-left or mid-left margin).
* Graphic Styling: Semi-transparent dark container with exact 65% black opacity background (rgba(0, 0, 0, 0.65)), sleek rounded corners (border-radius: 12px), subtle thin white border.
* Typography & Effect: Crisp, pure white text (#FFFFFF) with a distinct drop-shadow effect for ultra-clear readability against any background.
* Contact Details to clearly display on the left:
  - Name / Advisor: "${config.contactoNombre || 'Distribuidor Oficial'}"
  - Phone / WhatsApp: "${config.contactoTelefono || ''}"
  ${config.contactoWeb ? `- Official Website: "${config.contactoWeb}"` : ''}
* Ensure the contact information box is neatly arranged on the left side, elegant, highly legible, professional, and does not obstruct the hero product or model's face.`
    : '';

  const titleDirectiveEnglish = config.tituloImagen?.trim()
    ? `
MAIN HEADLINE / ADVERTISING TITLE ON IMAGE (TOP OR UPPER-CENTER):
* Primary Title Text: "${config.tituloImagen.trim()}"
* Headline Styling: Bold, modern luxury advertising typography, uppercase or title case, high contrast against background with subtle drop shadow, gold/emerald accent or clean white (#FFFFFF) with elegant tracking.`
    : '';

  const contactDirectiveSpanish = config.incluirContacto && (config.contactoNombre || config.contactoTelefono)
    ? `
BLOQUE DE CONTACTO EN LA IMAGEN (UBICADO A LA IZQUIERDA):
* Ubicación: En el LATERAL IZQUIERDO (margen izquierdo flotante o inferior-izquierdo).
* Estilo Gráfico: Tarjeta/Caja rectangular con fondo negro al 65% de opacidad (negro translúcido elegante rgba(0,0,0,0.65)), esquinas redondeadas y borde blanco sutil.
* Tipografía y Efecto: Letras en color BLANCO nítido con SOMBRA (drop shadow) tipográfica pronunciada para máxima legibilidad sobre cualquier fondo.
* Datos de Contacto incluidos a la izquierda:
  - Nombre: ${config.contactoNombre || 'Distribuidor Oficial'}
  - Teléfono / WhatsApp: ${config.contactoTelefono || ''}
  ${config.contactoWeb ? `- Sitio Web: ${config.contactoWeb}` : ''}`
    : '';

  const titleDirectiveSpanish = config.tituloImagen?.trim()
    ? `
TÍTULO / ENCABEZADO PUBLICITARIO EN LA IMAGEN (PARTE SUPERIOR):
* Título Principal: "${config.tituloImagen.trim()}"
* Estilo del Título: Tipografía publicitaria moderna, de alto impacto y legible, ubicada en la zona superior, con sombra suave o acento dorado/esmeralda para destacar sobre el fondo.`
    : '';

  const promptEnglish = `Create a premium commercial advertising image using the uploaded product reference image.

PRODUCT FIDELITY IS THE HIGHEST PRIORITY:
Preserve exactly:
* product packaging,
* logo,
* brand name ("HGW" / "Health Green World"),
* product name ("${product.nombre}"),
* label details and branding typography,
* authentic packaging colors,
* exact physical proportions and aspect ratio,
* shape, cap, container and sealing materials,
* visible text and official logos,
* brand visual identity.
* Official High-Res Product Asset Reference: ${driveReference}

HUMAN MODELS & LIFESTYLE STORYTELLING (PEOPLE RELATED TO THE COPY):
${peopleDirectiveEnglish}
* Add realistic people reflecting the marketing copy: vibrant vitality, wellness, healthy skin, focus, or family harmony according to the product benefits.
${titleDirectiveEnglish}
${contactDirectiveEnglish}

STRICT NEGATIVE CONSTRAINTS (DO NOT):
* Do NOT redesign the product or recreate it from scratch.
* Do NOT replace the product with a generic alternative.
* Do NOT invent a similar or hypothetical package.
* Do NOT change or alter the official HGW logo.
* Do NOT replace or translate the packaging label text.
* Do NOT distort the packaging perspective or dimensions.
* Do NOT change the product's natural proportions or colors.
* Do NOT morph the product or add fictional visual ingredients onto the physical box.
* Do NOT duplicate the product incorrectly.
* Do NOT invent random typography or placeholder text on the packaging.
* Do NOT leave white borders, empty margins, letterboxing, or blank canvas areas.

ADVERTISING COMPOSITION & ENVIRONMENT:
* Product Featured: "${product.nombre}" (${product.categoria}).
* Visual Art Direction Styles: ${stylesText}.
* Environment & Background Atmosphere: ${config.ambiente || `High-end commercial lifestyle setting related to ${product.categoria} with organic textures, elegant interior, soft natural botanicals and warm cinematic lighting`}.
* Target Audience & Mood: ${config.publico || 'Discerning wellness consumers, network marketing professionals and modern families'}.
* Text overlay on background graphic (if present): "${config.textoEnImagen || product.nombre}".
* Call to action banner note: "${config.ctaTexto || 'Descubre el bienestar HGW'}".
* Number of main product units featured: ${config.cantidadProductos || '1 single centered hero product container'}.

TECHNICAL PHOTOGRAPHY SPECS:
* Premium commercial lifestyle and product photography, 8k resolution look.
* Photorealistic studio strobe lighting with soft key light, gentle natural skin tones, and subtle rim light.
* Natural soft ground shadows and physically accurate glossy reflections.
* High-end art director composition with shallow depth of field (f/2.8 bokeh).
* Crisp, tactile surface textures on packaging cardboard, matte glass, healthy skin and metallic accents.
* Full-bleed background filling 100% of the canvas area seamlessly without margins or watermarks.

Aspect Ratio: ${config.format} (${formatText}).`;

  const promptSpanish = `Genera una fotografía publicitaria comercial de alto impacto utilizando la imagen del producto "${product.nombre}" como REFERENCIA VISUAL EXACTA.

FIDELIDAD TOTAL AL PRODUCTO ORIGINAL:
* Conserva exactamente el empaque, logotipo de HGW, nombre del producto, colores originales, tipografía de la etiqueta, proporciones del envase y tapa.
* Enlace de Referencia Oficial de Google Drive: ${driveReference}
* NO modificar, rediseñar, deformar, ni sustituir el producto por uno inventado.

INTEGRACIÓN DE PERSONAS RELACIONADAS AL COPY:
${peopleDirectiveSpanish}
* Incluir modelos reales en situaciones cotidianas o de éxito que refuercen los beneficios comunicados en el texto publicitario.
${titleDirectiveSpanish}
${contactDirectiveSpanish}

ENTORNO Y ESTILO:
* Entorno y Fondo: ${config.ambiente || `Escenario publicitario premium y estilo de vida acorde a ${product.categoria}, con iluminación cinematográfica y detalles botánicos/hogar elegante`}.
* Estilos combinados: ${stylesText}.
* Formato seleccionado: ${config.format} (${config.format === '1:1' ? 'Cuadrado 1:1 para Feed de Instagram/Facebook/WhatsApp' : 'Vertical 9:16 para Reels/TikTok/Stories'}).
* Composición a sangrado completo (Full Bleed), sin bordes blancos, sin marcas de agua y sin espacios vacíos.`;

  const negativePrompt = 'distorted product, deformed packaging, wrong logo, altered brand name, blurry text, cartoon, low resolution, white borders, empty borders, cropped packaging, bad proportions, watermark, fake ingredients on box, artificial mockup errors, unnatural human anatomy, extra limbs';

  const instructions = 'Copia y pega este prompt maestro en ChatGPT, Gemini, Midjourney o DALL-E. Adjunta el enlace o archivo de Google Drive del producto para que la IA replique el envase exacto e incorpore las personas en la escena.';

  return {
    promptEnglish,
    promptSpanish,
    format: config.format,
    stylesUsed: config.styles,
    productName: product.nombre,
    driveUrl: product.driveUrl || config.driveUrl,
    instructions,
    negativePrompt
  };
}
