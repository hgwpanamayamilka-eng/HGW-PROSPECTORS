import { GeneratedBusinessCopy } from '../../lib/prompts/businessOpportunityPrompts';
import { PROSPECCION_COPYS } from './prospeccionCopys';
import { PRESENTACION_COPYS } from './presentacionCopys';
import { SEGUIMIENTO_COPYS } from './seguimientoCopys';
import { CIERRE_COPYS } from './cierreCopys';
import { ACOMPANAMIENTO_COPYS } from './acompanamientoCopys';
import { HERRAMIENTAS_IA_COPYS } from './herramientasIaCopys';

export const ALL_PREBUILT_BUSINESS_COPYS: GeneratedBusinessCopy[] = [
  ...PROSPECCION_COPYS,
  ...PRESENTACION_COPYS,
  ...SEGUIMIENTO_COPYS,
  ...CIERRE_COPYS,
  ...ACOMPANAMIENTO_COPYS,
  ...HERRAMIENTAS_IA_COPYS
];
