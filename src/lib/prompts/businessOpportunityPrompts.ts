import { ContactData } from '../../types';
import { ALL_PREBUILT_BUSINESS_COPYS } from '../../data/business';

export type BusinessStage = 
  | 'prospeccion'
  | 'presentacion'
  | 'seguimiento'
  | 'cierre'
  | 'acompanamiento'
  | 'herramientas_trabajo'
  | 'herramientas_ia';

export interface BusinessOpportunityConfig {
  stage: BusinessStage;
  targetProfile: string;
  tone: string;
  presentationType?: 'zoom' | 'presencial' | 'uno_a_uno' | 'video_grabado';
  zoomLink?: string;
  zoomDate?: string;
  zoomTime?: string;
  customOpportunityAngle?: string;
  additionalNotes?: string;
}

export interface GeneratedBusinessCopy {
  id: string;
  stage: BusinessStage;
  stageLabel: string;
  title: string;
  targetProfile: string;
  hook: string;
  body: string;
  keyPoints: string[];
  cta: string;
  fullMessage: string;
  tags: string[];
}

export function buildBusinessOpportunityMasterPrompt(config: BusinessOpportunityConfig, contact: ContactData): string {
  const stageNames: Record<BusinessStage, string> = {
    prospeccion: 'PROSPECCIÓN & ATRACCIÓN DE TALENTOS (50 COPYS)',
    presentacion: 'PRESENTACIÓN DE OPORTUNIDAD HGW - PLAN DE GANANCIA MUTUA (50 COPYS)',
    seguimiento: 'SEGUIMIENTO PROFESIONAL & RESOLUCIÓN DE OBJECIONES (50 COPYS)',
    cierre: 'CIERRE EFECTIVO DE AFILIACIONES Y MEMBRESÍAS (50 COPYS)',
    acompanamiento: 'ACOMPAÑAMIENTO, ONBOARDING Y DUPLICACIÓN DE SOCIOS (50 COPYS)',
    herramientas_trabajo: 'HERRAMIENTAS DE TRABAJO Y SISTEMA EDUCATIVO HGW',
    herramientas_ia: 'APLICACIÓN DE HERRAMIENTAS CON INTELIGENCIA ARTIFICIAL (50 COPYS)'
  };

  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

  return `================================================================================
PROMPT MAESTRO AIDA: SISTEMA DE NEGOCIO, PROSPECCIÓN Y CIERRE HGW CON INTELIGENCIA ARTIFICIAL
================================================================================

Actúa como un Top Líder Diamante Internacional, Director de Expansión Global y Experto en Social Selling y Copywriting AIDA para la compañía **Health Green World (HGW)**.

1. OBJETIVO DE LA COMUNICACIÓN:
- Fase del Embudo de Negocio: ${stageNames[config.stage]}
- Perfil del Prospecto / Socio: ${config.targetProfile || 'Emprendedores, profesionales, mamás líderes o personas en búsqueda de ingresos adicionales'}
- Tono de Comunicación: ${config.tone || 'Profesional, empático, magnético y de liderazgo'}
${config.presentationType ? `- Modalidad de Presentación: ${config.presentationType.toUpperCase()}` : ''}
${config.zoomDate ? `- Datos de Sala Virtual: ${config.zoomDate} a las ${config.zoomTime || '8:00 PM'} (Link: ${config.zoomLink || 'Por privado'})` : ''}
${config.customOpportunityAngle ? `- Enfoque Estratégico Especial: ${config.customOpportunityAngle}` : ''}

2. DATOS OFICIALES DEL PATROCINADOR / DISTRIBUIDOR:
- Nombre del Líder: ${contact.nombre}
- Código Oficial de Patrocinio: ${contact.codigo}
- WhatsApp de Contacto: ${contact.whatsapp}
- Enlace Directo a WhatsApp: ${waLink}
- País / Sede: ${contact.pais || 'Panamá e Internacional'}

3. PILARES OFICIALES DEL MODELO DE NEGOCIO HGW A DESTACAR:
- **Plan de Ganancia Mutua (Unilateral)**: Ganas el 50% de ganancia mutua por el crecimiento de tus patrocinados, sin cortes, sin candados complejos, sin igualación de piernas obligatoria.
- **Respaldo Corporativo Internacional**: Más de 30 años de investigación, presencia en más de 69 países y fábricas propias con certificaciones FDA, GMP e ISO.
- **Productos de Consumo Masivo y Alta Rotación**: Salud preventiva, bienestar celular, turmalina infrarroja, arándanos orgánicos, café saludable y cuidado personal.
- **Membresías Accesibles**: Opciones flexibles de inicio (Pre-Junior, Junior, Senior y Master) con compras acumulables.
- **Sistema de Apoyo e Inteligencia Artificial**: Acompañamiento paso a paso, capacitaciones semanales y herramientas digitales modernas.

4. INSTRUCCIONES DE GENERACIÓN AIDA:
- [A] Atención: Gancho magnético de los primeros 3 segundos.
- [I & D] Interés y Deseo: Desarrollo empático con beneficios del Plan de Ganancia Mutua 50% y respaldo corporativo.
- [A] Acción: Llamado a la acción (CTA) directo con enlace a WhatsApp (${waLink}) y código oficial (${contact.codigo}).
- Adapta el lenguaje para que sea 100% ético, profesional y enfocado en desarrollo de habilidades y libertad financiera real.`;
}

// 300 Complete Pre-Built Business Copys (50 for each of the 6 core stages)
export const PREBUILT_BUSINESS_COPYS: GeneratedBusinessCopy[] = ALL_PREBUILT_BUSINESS_COPYS;
