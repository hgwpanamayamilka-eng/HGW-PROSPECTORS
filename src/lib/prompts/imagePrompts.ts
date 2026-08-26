import { Product, ImagePromptConfig, GeneratedImagePromptResult } from '../../types';

export function buildMasterImagePrompt(product: Product, config: ImagePromptConfig): GeneratedImagePromptResult {
  const stylesText = config.styles.length > 0 ? config.styles.join(', ') : 'FOTO PUBLICITARIA PREMIUM, ELEGANTE, BIENESTAR';
  const formatText = config.format === '1:1' ? '1:1 Square (Full Bleed canvas for Instagram / Facebook Feed / WhatsApp status)' : '9:16 Vertical (Full Bleed canvas for TikTok / Instagram Reels / Stories / YouTube Shorts)';

  const promptEnglish = `Create a premium commercial advertising image using the uploaded product image as the exact visual reference.

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
* Environment & Background Atmosphere: ${config.ambiente || `High-end commercial studio staging related to ${product.categoria} with organic textures, elegant marble pedestal, soft natural botanicals and subtle atmospheric backlight`}.
* Target Audience & Mood: ${config.publico || 'Discerning wellness consumers, network marketing professionals and modern families'}.
* Text overlay on background graphic (if present): "${config.textoEnImagen || product.nombre}".
* Call to action banner note: "${config.ctaTexto || 'Descubre el bienestar HGW'}".
* Number of main product units featured: ${config.cantidadProductos || '1 single centered hero product container'}.

TECHNICAL PHOTOGRAPHY SPECS:
* Premium commercial product photography, 8k resolution look.
* Photorealistic studio strobe lighting with soft key light and subtle rim light.
* Natural soft ground shadows and physically accurate glossy reflections.
* High-end art director composition with shallow depth of field (f/2.8 macro bokeh).
* Crisp, tactile surface textures on packaging cardboard, matte glass and metallic accents.
* Full-bleed background filling 100% of the canvas area seamlessly without margins or watermarks.

Aspect Ratio: ${config.format} (${formatText}).`;

  const promptSpanish = `Genera una fotografía publicitaria comercial de alto impacto utilizando la imagen del producto "${product.nombre}" como REFERENCIA VISUAL EXACTA.

FIDELIDAD TOTAL AL PRODUCTO ORIGINAL:
* Conserva exactamente el empaque, logotipo de HGW, nombre del producto, colores originales, tipografía de la etiqueta, proporciones del envase y tapa.
* NO modificar, rediseñar, deformar, ni sustituir el producto por uno inventado.
* Entorno y Fondo: ${config.ambiente || `Escenario publicitario premium acorde a ${product.categoria}, con iluminación de estudio, pedestal de lujo y elementos naturales sutiles`}.
* Estilos combinados: ${stylesText}.
* Formato seleccionado: ${config.format} (${config.format === '1:1' ? 'Cuadrado 1:1 para Feed de Instagram/Facebook/WhatsApp' : 'Vertical 9:16 para Reels/TikTok/Stories'}).
* Composición a sangrado completo (Full Bleed), sin bordes blancos, sin marcas de agua y sin espacios vacíos.`;

  const negativePrompt = 'distorted product, deformed packaging, wrong logo, altered brand name, blurry text, cartoon, low resolution, white borders, empty borders, cropped packaging, bad proportions, watermark, fake ingredients on box, artificial mockup errors';

  const instructions = 'Copia y pega este prompt maestro en Midjourney, DALL-E 3, Google Imagen, Ideogram o cualquier generador de IA. Recuerda adjuntar la imagen original del producto como referencia visual para garantizar la máxima fidelidad de marca.';

  return {
    promptEnglish,
    promptSpanish,
    format: config.format,
    stylesUsed: config.styles,
    productName: product.nombre,
    instructions,
    negativePrompt
  };
}
