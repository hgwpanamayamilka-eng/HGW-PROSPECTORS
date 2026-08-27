export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  descripcion_corta: string;
  descripcion: string;
  beneficios: string[];
  ingredientes: string[];
  presentacion: string;
  precio: number;
  precio_distribuidor: number;
  BV: number;
  informacion_adicional?: string;
  imagen: string;
  driveUrl?: string;
  imagenes_adicionales?: string[];
  claims_permitidos: string[];
  claims_no_permitidos: string[];
  materia_prima?: string;
  videoUrl?: string;
  isCustom?: boolean;
}

export type SocialNetwork =
  | 'WhatsApp'
  | 'Instagram'
  | 'Facebook'
  | 'TikTok'
  | 'Telegram'
  | 'LinkedIn'
  | 'Estados / Stories';

export type CopyObjective =
  | 'Venta directa'
  | 'WhatsApp'
  | 'Generar curiosidad'
  | 'Educación'
  | 'Problema/Solución'
  | 'Oferta'
  | 'Promoción'
  | 'Captación de clientes'
  | 'Captación de distribuidores'
  | 'Branding'
  | 'Testimonio'
  | 'Lanzamiento'
  | 'Urgencia'
  | 'Recompra'
  | 'Reactivación de código'
  | 'Invitación a Zoom';

export type CopyTone =
  | 'Persuasivo y cercano'
  | 'Profesional y confiable'
  | 'Energético y motivador'
  | 'Empático y reflexivo'
  | 'Exclusivo y elegante'
  | 'Directo y sin rodeos';

export type CopyLength = 'Corto (ideal Stories/Twitter)' | 'Medio (ideal Instagram/Facebook)' | 'Largo (ideal Copywriting profundo)';

export interface CopyGenerationConfig {
  productId: string;
  targetAudience: string;
  socialNetwork: SocialNetwork;
  objective: CopyObjective;
  tone: CopyTone;
  ctaType: string;
  length: CopyLength;
}

export interface GeneratedCopy {
  numero: number;
  hook: string;
  desarrollo: string;
  beneficio: string;
  cta: string;
  hashtags: string[];
  estrategia: string;
}

export type ImageFormat = '1:1' | '9:16';

export type ImageStyle =
  | 'FOTO PUBLICITARIA PREMIUM'
  | 'LUJO'
  | 'NATURAL / ORGÁNICO'
  | 'MINIMALISTA'
  | 'CINEMATOGRÁFICO'
  | 'FITNESS'
  | 'BIENESTAR'
  | 'FAMILIAR'
  | 'ELEGANTE'
  | 'TECNOLÓGICO'
  | 'SOCIAL MEDIA VIRAL';

export interface ImagePromptConfig {
  productId: string;
  imageReferenceUrl?: string;
  customImageBase64?: string;
  driveUrl?: string;
  format: ImageFormat;
  styles: ImageStyle[];
  ambiente: string;
  publico: string;
  textoEnImagen: string;
  ctaTexto: string;
  cantidadProductos: string;
  incluirPersonas?: boolean;
  tipoPersona?: string;
}

export interface GeneratedImagePromptResult {
  promptEnglish: string;
  promptSpanish: string;
  format: ImageFormat;
  stylesUsed: string[];
  productName: string;
  driveUrl?: string;
  instructions: string;
  negativePrompt: string;
  generatedImageUrl?: string;
}

export interface LandingFormData {
  // Información del producto
  nombreProducto: string;
  categoria: string;
  descripcion: string;
  beneficios: string;
  ingredientes: string;
  presentacion: string;
  precio: number;
  precioAnterior: number;
  oferta?: string;
  descuento: string;
  bv: number;
  publicoObjetivo: string;
  driveUrl?: string;

  // Información comercial
  nombreVendedor: string;
  empresa: string;
  codigoDistribuidor: string;
  whatsapp: string;
  telefono: string;
  email: string;
  paginaWeb: string;
  direccion?: string;
  ciudad: string;
  pais: string;

  // Conversión
  ctaPrincipal: string;
  ctaSecundario: string;
  linkWhatsapp: string;
  linkCompra?: string;
  garantia: string;
  tiempoPromocion: string;
  testimonios: string;
  faqs: string;

  // Diseño
  colorPrincipal: string;
  colorSecundario: string;
  estilo: string;
  imagenPrincipal: string;
  imagenesAdicionales?: string;
}

export type QuoteCategory =
  | 'Emprendimiento'
  | 'Éxito'
  | 'Disciplina'
  | 'Gratitud'
  | 'Esperanza'
  | 'Fe'
  | 'Motivación'
  | 'Superación'
  | 'Confianza'
  | 'Prosperidad'
  | 'Bienestar'
  | 'Ventas'
  | 'Liderazgo';

export interface GeneratedQuote {
  numero: number;
  frase: string;
  categoria: QuoteCategory;
  ideaVisual?: string;
  visualIdea?: string;
  emotion?: string;
  promptImagen: string;
  formato: ImageFormat;
}

export interface ContactData {
  nombre: string;
  whatsapp: string;
  enlaceWhatsapp?: string;
  telefono?: string;
  email?: string;
  web?: string;
  sitioWeb?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  codigo: string;
  pais?: string;
  ciudad?: string;
  fotoPerfil?: string;
}

export type HistoryCategory = 'copys' | 'images' | 'landing' | 'quotes' | 'network';

export interface HistoryItem {
  id: string;
  fecha: string;
  productoNombre: string;
  tipoContenido: HistoryCategory;
  titulo: string;
  resultado: any;
  resumen: string;
}

export type NetworkCopyType =
  | 'presentacion'
  | 'seguimiento'
  | 'cierre'
  | 'fin_de_mes'
  | 'no_activados'
  | 'zoom'
  | 'reunion_casera'
  | 'liderazgo'
  | 'salud'
  | 'promocion_bonos';

export interface NetworkMarketingCopyItem {
  id: string;
  tipo: NetworkCopyType;
  titulo: string;
  categoria: string;
  prospectoTipo: string;
  hook: string;
  cuerpo: string;
  beneficioClave: string;
  cta: string;
  sugerenciaCanal: string;
}

export interface HGWOffice {
  id: string;
  ciudad: string;
  pais: string;
  direccion: string;
  horario: string;
  contacto: string;
  imagen: string;
}
