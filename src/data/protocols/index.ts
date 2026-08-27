import { HealthProtocolCopy, HealthProtocolType } from '../../lib/prompts/healthProtocolPrompts';
import { LIMPIEZA_COLON_COPYS } from './limpiezaColonCopys';
import { COLICOS_MENSTRUALES_COPYS } from './colicosMenstrualesCopys';
import { ARTICULAR_COPYS } from './articularCopys';
import { SALUD_VISUAL_COPYS } from './saludVisualCopys';
import { HIGADO_METABOLISMO_COPYS } from './higadoCopys';
import { SALUD_RENAL_COPYS } from './saludRenalCopys';
import { PULMONES_RESPIRATORIO_COPYS } from './pulmonesCopys';
import { SISTEMA_INMUNOLOGICO_COPYS } from './sistemaInmuneCopys';
import { COADYUVANTE_CRONICO_COPYS } from './coadyuvanteCronicoCopys';

export const ALL_HEALTH_PROTOCOL_COPYS: HealthProtocolCopy[] = [
  ...LIMPIEZA_COLON_COPYS,
  ...COLICOS_MENSTRUALES_COPYS,
  ...ARTICULAR_COPYS,
  ...SALUD_VISUAL_COPYS,
  ...HIGADO_METABOLISMO_COPYS,
  ...SALUD_RENAL_COPYS,
  ...PULMONES_RESPIRATORIO_COPYS,
  ...SISTEMA_INMUNOLOGICO_COPYS,
  ...COADYUVANTE_CRONICO_COPYS
];

export const HEALTH_PROTOCOL_COPYS_BY_ID: Record<HealthProtocolType, HealthProtocolCopy[]> = {
  limpieza_colon: LIMPIEZA_COLON_COPYS,
  colicos_menstruales: COLICOS_MENSTRUALES_COPYS,
  inflamacion_articular: ARTICULAR_COPYS,
  salud_visual: SALUD_VISUAL_COPYS,
  higado_metabolismo: HIGADO_METABOLISMO_COPYS,
  salud_renal: SALUD_RENAL_COPYS,
  pulmones_respiratorio: PULMONES_RESPIRATORIO_COPYS,
  sistema_inmunologico: SISTEMA_INMUNOLOGICO_COPYS,
  coadyuvante_cronico: COADYUVANTE_CRONICO_COPYS
};
