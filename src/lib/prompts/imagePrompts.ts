import { Product, ImagePromptConfig, GeneratedImagePromptResult, ContactData, GeneratedCopy } from '../../types';

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

  const brandName = config.marcaNombre || config.contactoNombre;
  const brandProfession = config.marcaProfesion;
  const brandSocial = config.marcaRedSocial;
  const brandContact = config.marcaContacto || config.contactoTelefono || config.contactoWeb;

  const hasPersonalBrand = Boolean(brandName || brandProfession || brandSocial || brandContact);

  const personalBrandDirectiveEnglish = hasPersonalBrand
    ? `
PERSONAL BRAND & ADVISOR BADGE OVERLAY ON THE IMAGE (LOWER CORNER OR LEFT MARGIN):
* Visual Layout: A sleek, minimalist semi-transparent dark container (rgba(0, 0, 0, 0.65) background) with thin metallic gold/emerald border and rounded corners (12px radius).
* Typographic Styling: Crisp, ultra-readable white text (#FFFFFF) with subtle drop shadow.
* Elements to visually display clearly:
  ${brandName ? `- Full Name / Personal Brand: "${brandName}" (Bold, prominent display font)` : ''}
  ${brandProfession ? `- Profession / Title / Rank: "${brandProfession}" (Refined subtext)` : ''}
  ${brandSocial ? `- Social Media / Handle: "${brandSocial}" (e.g. Instagram / TikTok handle)` : ''}
  ${brandContact ? `- Contact Link / WhatsApp: "${brandContact}" (Optional direct action link)` : ''}
* Composition Rule: Neatly anchored in the lower-left or bottom corner, perfectly legible, high-end branding style, without obstructing the main hero product.`
    : '';

  const personalBrandDirectiveSpanish = hasPersonalBrand
    ? `
BLOQUE DE MARCA PERSONAL Y DISTRIBUIDOR EN LA IMAGEN (ESQUINA INFERIOR O LATERAL):
* Diseño Visual: Caja/Insignia elegante con fondo oscuro semi-transparente al 65% (rgba(0,0,0,0.65)), esquinas redondeadas y borde fino sutil en tono oro o esmeralda.
* Tipografía: Letras nítidas en color BLANCO (#FFFFFF) con sombra suave (drop shadow) para total legibilidad.
* Datos visibles a incorporar en la imagen:
  ${brandName ? `- Nombre / Marca Personal: "${brandName}" (Destacado en negrita)` : ''}
  ${brandProfession ? `- Profesión / Título / Rango: "${brandProfession}"` : ''}
  ${brandSocial ? `- Red Social / Marca: "${brandSocial}"` : ''}
  ${brandContact ? `- Enlace de Contacto / WhatsApp: "${brandContact}"` : ''}
* Regla de Composición: Ubicado armónicamente en el margen inferior o lateral sin tapar el producto protagonista.`
    : '';

  const titleDirectiveEnglish = config.tituloImagen?.trim()
    ? `
MAIN HEADLINE / ADVERTISING TITLE ON IMAGE (TOP OR UPPER-CENTER):
* Primary Title Text: "${config.tituloImagen.trim()}"
* Headline Styling: Bold, modern luxury advertising typography, uppercase or title case, high contrast against background with subtle drop shadow, gold/emerald accent or clean white (#FFFFFF) with elegant tracking.`
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
${personalBrandDirectiveSpanish}

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
${personalBrandDirectiveEnglish}

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

/**
 * Builds a tailored Master Image Prompt directly from a specific generated copy
 */
export function buildMasterImagePromptForCopy(
  product: Product, 
  copy: GeneratedCopy, 
  contact?: ContactData,
  format: '1:1' | '9:16' = '1:1'
): GeneratedImagePromptResult {
  const config: ImagePromptConfig = {
    productId: product.id,
    format,
    styles: ['FOTO PUBLICITARIA PREMIUM', 'LUJO', 'BIENESTAR'],
    ambiente: `Escenario publicitario premium de alta gama para ${product.categoria}, con pedestal de mármol/madera fina, iluminación suave cinematográfica y elementos botánicos frescos que complementan a ${product.nombre}`,
    publico: 'Consumidores de bienestar, salud y nutrición natural',
    tituloImagen: copy.hook.length > 60 ? copy.hook.slice(0, 57) + '...' : copy.hook,
    estiloTitulo: 'oro_lujo',
    textoEnImagen: product.nombre,
    ctaTexto: 'Pruébalo Hoy',
    cantidadProductos: '1 unidad principal destacada al centro',
    incluirPersonas: true,
    tipoPersona: `Persona radiante y saludable transmitiendo el beneficio: "${copy.beneficio.split('\n')[0]?.replace(/^[🔹•\s]+/, '') || 'bienestar total'}"`,
    driveUrl: product.driveUrl || product.imagen,
    incluirContacto: true,
    contactoNombre: contact?.nombre || 'Asesora Oficial HGW',
    contactoTelefono: contact?.whatsapp || '',
    contactoWeb: contact?.sitioWeb || contact?.enlaceWhatsapp || ''
  };

  return buildMasterImagePrompt(product, config);
}

/**
 * Builds a tailored Master Image Prompt directly for a health protocol
 */
export function buildMasterImagePromptForProtocol(
  protocolTitle: string,
  protocolAngle: string,
  suggestedCombo: string,
  primaryProduct: Product,
  contact?: ContactData,
  format: '1:1' | '9:16' = '1:1'
): GeneratedImagePromptResult {
  const config: ImagePromptConfig = {
    productId: primaryProduct.id,
    format,
    styles: ['FOTO PUBLICITARIA PREMIUM', 'BIENESTAR', 'NATURAL / ORGÁNICO'],
    ambiente: `Ambiente médico/botánico de alta calidad, limpio, luminoso y profesional enfocado en el protocolo "${protocolTitle}", con iluminación natural, elementos orgánicos y atmósfera de confort`,
    publico: 'Personas que buscan bienestar integral, digestivo y hábitos saludables',
    tituloImagen: `Protocolo Coadyuvante: ${protocolTitle}`,
    estiloTitulo: 'esmeralda_moderno',
    textoEnImagen: `${primaryProduct.nombre} • Combo: ${suggestedCombo}`,
    ctaTexto: 'Consulta el Protocolo',
    cantidadProductos: 'Combo de productos HGW presentados armónicamente',
    incluirPersonas: true,
    tipoPersona: 'Persona saludable y relajada con una expresión de alivio y vitalidad en un ambiente de hogar luminoso',
    driveUrl: primaryProduct.driveUrl || primaryProduct.imagen,
    incluirContacto: true,
    contactoNombre: contact?.nombre || 'Asesora de Bienestar HGW',
    contactoTelefono: contact?.whatsapp || '',
    contactoWeb: contact?.sitioWeb || contact?.enlaceWhatsapp || ''
  };

  return buildMasterImagePrompt(primaryProduct, config);
}

/**
 * Builds a tailored Master Image Prompt for business opportunity copys
 */
export function buildMasterImagePromptForBusiness(
  stageTitle: string,
  copyHook: string,
  targetProfile: string,
  contact?: ContactData,
  format: '1:1' | '9:16' = '1:1'
): GeneratedImagePromptResult {
  const dummyBusinessProduct: Product = {
    id: 'hgw-business',
    nombre: 'Oportunidad de Negocio HGW - Plan de Ganancia Mutua',
    categoria: 'Negocio y Emprendimiento',
    descripcion_corta: 'Sistema de Expansión Global con Plan de Ganancia Mutua 50% y herramientas con Inteligencia Artificial.',
    descripcion: 'Oportunidad de distribución independiente con HGW.',
    beneficios: ['Ganancia mutua 50%', 'Membresías accesibles', 'Herramientas con IA'],
    ingredientes: ['Liderazgo', 'Tecnología', 'Comunidad Global'],
    presentacion: 'Membresías Pre-Junior, Junior, Senior y Master',
    precio: 0,
    precio_distribuidor: 0,
    BV: 0,
    imagen: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
    driveUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
    claims_permitidos: ['Ganancia Mutua 50%', 'Comisiones justas'],
    claims_no_permitidos: ['Garantía de dinero sin trabajar']
  };

  const config: ImagePromptConfig = {
    productId: dummyBusinessProduct.id,
    format,
    styles: ['LUJO', 'ELEGANTE', 'TECNOLÓGICO'],
    ambiente: 'Oficina ejecutiva moderna de alta gama con ventanales iluminados, atmósfera de éxito y tecnología, tonos verde esmeralda y acentos dorados sutiles',
    publico: targetProfile || 'Emprendedores, profesionales y líderes de redes de mercadeo',
    tituloImagen: copyHook.length > 55 ? copyHook.slice(0, 52) + '...' : copyHook,
    estiloTitulo: 'oro_lujo',
    textoEnImagen: 'HGW • Plan Ganancia Mutua 50%',
    ctaTexto: 'Únete a Nuestro Equipo',
    cantidadProductos: 'Kit de bienvenida corporativo HGW y agenda ejecutiva',
    incluirPersonas: true,
    tipoPersona: 'Emprendedor/a o líder moderno y carismático con vestimenta business-casual elegante, proyectando confianza, éxito y liderazgo',
    driveUrl: dummyBusinessProduct.imagen,
    incluirContacto: true,
    contactoNombre: contact?.nombre || 'Líder / Socia Oficial HGW',
    contactoTelefono: contact?.whatsapp || '',
    contactoWeb: contact?.sitioWeb || contact?.enlaceWhatsapp || ''
  };

  return buildMasterImagePrompt(dummyBusinessProduct, config);
}

