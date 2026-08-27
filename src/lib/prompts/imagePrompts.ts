import { Product, ImagePromptConfig, GeneratedImagePromptResult } from '../../types';

export function buildMasterImagePrompt(product: Product, config: ImagePromptConfig): GeneratedImagePromptResult {
  const stylesText = config.styles.length > 0 ? config.styles.join(', ') : 'FOTOGRAFÍA PUBLICITARIA COMERCIAL, ESTUDIO ELEGANTE, BIENESTAR';
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

  const promptSpanish = `================================================================================
REGLA PRINCIPAL OBLIGATORIA (PRESERVACIÓN VISUAL ABSOLUTA):
LA IMAGEN ORIGINAL ADJUNTA POR EL USUARIO ES LA FUENTE VISUAL ABSOLUTA Y DEBE MANTENERSE 100% IDÉNTICA A LA ORIGINAL CUANDO SEA UTILIZADA COMO REFERENCIA.

* NO regenerar la imagen original.
* NO recrear la imagen original.
* NO reinterpretar la imagen original.
* La IA debe crear la nueva composición publicitaria, fondos, iluminación y modelos ALREDEDOR DE LA IMAGEN ORIGINAL, no reconstruirla.
================================================================================

Genera una fotografía publicitaria comercial y de presentación de alto impacto utilizando la imagen original del producto "${product.nombre}" como ACTIVO VISUAL INMUTABLE.

1. ACTIVO ORIGINAL DE REFERENCIA (FUENTE VISUAL ABSOLUTA):
* Enlace Oficial en Alta Resolución / Google Drive: ${driveReference}
* Conservar de forma intacta e idéntica: logotipo oficial de HGW, nombre del producto ("${product.nombre}"), diseño y textos exactos del empaque, colores de marca, proporciones físicas, textura y tapa/envase.

2. INTEGRACIÓN DE MODELOS / PERSONAS RELACIONADAS AL COPY:
${peopleDirectiveSpanish}
* Los modelos y elementos humanos deben interactuar armoniosamente alrededor del producto sin taparlo ni deformarlo.
${titleDirectiveSpanish}
${contactDirectiveSpanish}

3. DIRECCIÓN DE ARTE Y AMBIENTACIÓN PUBLICITARIA:
* Producto Destacado: "${product.nombre}" (${product.categoria}).
* Estilos Publicitarios: ${stylesText}.
* Entorno y Fondo: ${config.ambiente || `Escenario publicitario premium acorde a ${product.categoria}, iluminación cinematográfica suave, pedestal de lujo y elementos botánicos frescos`}.
* Público Objetivo: ${config.publico || 'Consumidores de bienestar, distribuidores independientes y familias'}.
* Número de unidades principales: ${config.cantidadProductos || '1 unidad central protagónica'}.
* Formato del Lienzo: ${config.format} (${config.format === '1:1' ? 'Cuadrado 1:1 para Feed de Instagram/Facebook/WhatsApp' : 'Vertical 9:16 para Reels/TikTok/Stories'}).

4. ESPECIFICACIONES TÉCNICAS:
* Composición a sangre completa (Full Bleed), 100% del lienzo ocupado, sin bordes blancos, sin marcas de agua, calidad publicitaria 8K hiperrealista con sombras de contacto naturales y reflejos precisos.`;

  const promptEnglish = `================================================================================
CRITICAL MASTER DIRECTIVE (ABSOLUTE VISUAL FIDELITY):
THE ATTACHED ORIGINAL IMAGE IS THE ABSOLUTE AND UNALTERABLE VISUAL SOURCE.
IT MUST REMAIN 100% IDENTICAL TO THE ORIGINAL WITHOUT ANY MODIFICATIONS.

* DO NOT regenerate the original image.
* DO NOT recreate the original image.
* DO NOT reinterpret the original image.
* THE AI MUST BUILD THE NEW ADVERTISING COMPOSITION, LIGHTING, ENVIRONMENT AND SURROUNDING ATMOSPHERE *AROUND* THE ORIGINAL IMAGE ASSET, NEVER RECONSTRUCTING IT.
================================================================================

Create a high-impact commercial advertising and product showcase visual using the attached original asset of "${product.nombre}" as the absolute reference.

1. ORIGINAL ASSET PRESERVATION (IMMUTABLE HERO SUBJECT):
* Official High-Res Asset Reference: ${driveReference}
* Preserve exactly: official HGW logo, packaging typography, exact brand colors, label artwork, physical container shape, lid/seal details, and authentic dimensions.

2. HUMAN MODELS & LIFESTYLE STORYTELLING:
${peopleDirectiveEnglish}
* Add realistic people supporting the marketing message, positioned naturally around the hero product without obstructing its branding.
${titleDirectiveEnglish}
${contactDirectiveEnglish}

3. ADVERTISING COMPOSITION & ENVIRONMENT:
* Product Featured: "${product.nombre}" (${product.categoria}).
* Visual Art Direction Styles: ${stylesText}.
* Environment & Background Atmosphere: ${config.ambiente || `High-end commercial lifestyle setting related to ${product.categoria} with organic textures, elegant interior, soft natural botanicals and warm cinematic lighting`}.
* Target Audience: ${config.publico || 'Discerning wellness consumers, network marketing professionals and modern families'}.
* Text overlay / Caption: "${config.textoEnImagen || product.nombre}".
* Number of main product units: ${config.cantidadProductos || '1 single centered hero product container'}.

4. TECHNICAL PHOTOGRAPHY SPECS:
* Premium commercial lifestyle photography, 8k resolution look, studio lighting with soft key light, gentle natural skin tones, physically accurate contact shadows.
* Full-bleed background filling 100% of the canvas area seamlessly without white margins, letterboxing, or watermarks.

Aspect Ratio: ${config.format} (${formatText}).`;

  const negativePrompt = 'regenerated product, altered packaging, recreated logo, modified branding, deformed container, wrong typography on label, fake ingredients on box, blurry text, cartoon, low resolution, white borders, empty borders, cropped packaging, bad proportions, watermark, artificial mockup errors, unnatural human anatomy, extra limbs';

  const instructions = 'Copia y pega este prompt maestro en ChatGPT (DALL-E), Google Gemini, Midjourney o Ideogram AI. Adjunta la imagen original o enlace de Google Drive: la IA mantendrá el producto idéntico y construirá la escena publicitaria a su alrededor.';

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
