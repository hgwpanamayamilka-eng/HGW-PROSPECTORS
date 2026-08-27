import { ContactData } from '../../types';
import { ALL_HEALTH_PROTOCOL_COPYS } from '../../data/protocols';

export type HealthProtocolType =
  | 'limpieza_colon'
  | 'colicos_menstruales'
  | 'inflamacion_articular'
  | 'salud_visual'
  | 'higado_metabolismo'
  | 'salud_renal'
  | 'pulmones_respiratorio'
  | 'sistema_inmunologico'
  | 'coadyuvante_cronico';

export interface HealthProtocolInfo {
  id: HealthProtocolType;
  title: string;
  shortTitle: string;
  badge: string;
  iconText: string;
  focusArea: string;
  description: string;
  recommendedProducts: string[];
  productComboSummary: string;
  howToUse: string;
  compliantBenefits: string[];
  nonCompliantClaims: string[];
  disclaimer: string;
}

export interface HealthProtocolCopy {
  id: string;
  protocolId: HealthProtocolType;
  title: string;
  angle: string;
  hook: string;
  body: string;
  suggestedCombo: string;
  cta: string;
  fullMessage: string;
  tags: string[];
}

export const HEALTH_PROTOCOLS: Record<HealthProtocolType, HealthProtocolInfo> = {
  limpieza_colon: {
    id: 'limpieza_colon',
    title: 'Protocolo de Limpieza de Colon & Salud Digestiva',
    shortTitle: 'Limpieza de Colon',
    badge: 'Digestión & Detox',
    iconText: '🌿',
    focusArea: 'Salud gastrointestinal, microbiota, tránsito intestinal y desintoxicación suave',
    description: 'Enfoque nutricional botánico diseñado para favorecer la eliminación de toxinas acumuladas, equilibrar la flora intestinal y promover una evacuación regular y placentera.',
    recommendedProducts: [
      'Fresh Drink Chang JingJing (Limpiador Digestivo)',
      'Lactiberry (Té Negro con Arándanos y Lácteo)',
      'Té Moldeador Profesional (Pro Shaping Tea)',
      'Biolacti Candy (Caramelo con Probióticos)',
      'Termo de Turmalina Waterson'
    ],
    productComboSummary: 'Fresh Drink Chang JingJing + Lactiberry + Té Moldeador Profesional + Biolacti Candy.',
    howToUse: 'Tomar 1 sachet de Fresh Drink Chang JingJing en agua tibia por la mañana para la limpieza digestiva profunda. Beber 1 taza de Té Moldeador Profesional después del almuerzo para favorecer el metabolismo y la digestión. Tomar 1 sobre de Lactiberry en la tarde o noche para nutrir la microbiota. Consumir Biolacti Candy como refuerzo probiótico diario.',
    compliantBenefits: [
      'Favorece el tránsito intestinal natural sin provocar irritación ni cólicos agresivos.',
      'Aporta fibra vegetal, cebada alcalinizante, bayas de goji y probióticos para nutrir la microbiota.',
      'Contribuye a desinflamar el abdomen y reducir la pesadez estomacal tras las comidas.',
      'Apoya la asimilación eficiente de nutrientes en el intestino delgado.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura el cáncer de colon, gastritis severa o úlceras".',
      'NO prometer: "Baja 10 kilos en 3 días de forma milagrosa".',
      'NO usar terminología de medicamentos o purgantes farmacéuticos agresivos.'
    ],
    disclaimer: 'Nota de Bienestar Ético: Este protocolo es un complemento nutricional y alimenticio. No reemplaza tratamientos médicos ni pretende diagnosticar, tratar o curar enfermedades gastrointestinales.'
  },

  colicos_menstruales: {
    id: 'colicos_menstruales',
    title: 'Protocolo de Bienestar Femenino & Alivio de Cólicos Menstruales',
    shortTitle: 'Cólicos Menstruales',
    badge: 'Salud Femenina',
    iconText: '🌸',
    focusArea: 'Ciclo menstrual sin dolor, equilibrio de pH íntimo, confort pélvico y bienestar hormonal',
    description: 'Tecnología biomagnética y aniónica con turmalina infrarroja lejana que brinda frescura, confort y alivio térmico natural durante el ciclo menstrual de la mujer.',
    recommendedProducts: [
      'Toalla Sanitaria SMILIFE con Turmalina Uso Día',
      'Toalla Sanitaria SMILIFE con Turmalina Uso Noche',
      'Protector Íntimo Diario SMILIFE con Turmalina',
      'Trébol Coffee Cream (Café Trébol)',
      'Pen Gel Íntimo Femenino HGW'
    ],
    productComboSummary: 'Kit Íntimo Femenino SMILIFE (Toallas Día + Noche + Protectores Diarios de Turmalina SMILIFE) + Trébol Coffee Cream.',
    howToUse: 'Usar los Protectores Íntimos Diarios SMILIFE con Turmalina para el cuidado preventivo continuo y cambiar a las Toallas Sanitarias SMILIFE Uso Día y Noche durante el periodo. La banda de turmalina emite aniones e infrarrojo lejano que ayudan a relajar los músculos del útero y neutralizar olores. Acompañar con 1 taza de Trébol Coffee Cream para el balance hormonal femenino.',
    compliantBenefits: [
      'Emisión natural de aniones SMILIFE que favorece la oxigenación y previene la proliferación bacteriana.',
      'El infrarrojo lejano de la turmalina genera un suave calor biológico que ayuda a calmar espasmos musculares y cólicos.',
      'Capa de algodón suave y transpirable libre de químicos blanqueadores que cuida la piel íntima sensible.',
      'Máxima absorción con polímero superabsorbente que mantiene la zona seca y libre de humedad.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura quistes de ovario, miomas uterinos o endometriosis".',
      'NO prometer: "Elimina la infertilidad femenina de forma garantizada".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Las toallas y protectores de turmalina SMILIFE HGW son productos de higiene y confort personal. Para afecciones ginecológicas específicas, consulte siempre a su especialista médico.'
  },

  inflamacion_articular: {
    id: 'inflamacion_articular',
    title: 'Protocolo de Confort Articular, Movilidad & Alivio Muscular',
    shortTitle: 'Articulaciones & Movilidad',
    badge: 'Movilidad & Flexibilidad',
    iconText: '🦴',
    focusArea: 'Rigidez articular, inflamación de rodillas, espalda, cuello, lumbalgias y bienestar muscular',
    description: 'Terapia térmica de infrarrojo lejano e iones negativos a través de los accesorios de turmalina HGW combinada con nutrición celular para el cartílago y los tejidos conectivos.',
    recommendedProducts: [
      'Péptido de Colágeno de Arándano',
      'Protector de Rodilla Autocalentable de Turmalina',
      'Protector de Cintura de Turmalina (Cinturón Lumbar)',
      'Protector de Cuello Autocalentable de Turmalina (Cuellera)',
      'Plantillas de Turmalina para el Cuidado de la Salud',
      'Peptipro Candy (Colágeno y Ginseng)'
    ],
    productComboSummary: 'Protector de Rodilla/Cintura de Turmalina + Péptido de Colágeno de Arándano + Peptipro Candy.',
    howToUse: 'Colocar el Protector de Rodilla, Cuello o Cintura de Turmalina en contacto con la piel durante 20 a 45 minutos al día para sentir el calor biológico relajante. Tomar 1 sachet bebible de Péptido de Colágeno de Arándano por la mañana y disfrutar Peptipro Candy a lo largo del día para nutrir cartílagos y tendones.',
    compliantBenefits: [
      'La nanoturmalina emite calor térmico e infrarrojo lejano que estimula la microcirculación y relaja contracturas.',
      'Los péptidos bioactivos de colágeno aportan aminoácidos de alta biodisponibilidad para la elasticidad de cartílagos y articulaciones.',
      'Las plantillas y fajas de turmalina brindan soporte ergonómico y descanso continuo.',
      'Brinda mayor sensación de libertad, alivio y flexibilidad en el movimiento diario.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura la artritis reumatoide, artrosis degenerativa terminal o hernias discales".',
      'NO prometer: "Regenera el cartílago al 100% en una semana".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Protectores de soporte externo y suplementación alimenticia coadyuvante. No reemplazan cirugías traumatológicas ni terapias farmacológicas recetadas.'
  },

  salud_visual: {
    id: 'salud_visual',
    title: 'Protocolo de Protección Ocular, Retina & Agudeza Visual',
    shortTitle: 'Salud Visual & Retina',
    badge: 'Cuidado Ocular & Filtro Azul',
    iconText: '🫐',
    focusArea: 'Fatiga visual por pantallas, visión nocturna, lubricación ocular y protección de la mácula',
    description: 'Nutrición celular de alta densidad a base de antocianinas puras de arándano y antioxidantes bioactivos para nutrir la microcirculación capilar del globo ocular.',
    recommendedProducts: [
      'Blueberry Candy (Caramelos de Arándano)',
      'Berry Juice HIGH VC (Zumo de Frutos Rojos)',
      'Blueberry Coffee (Café con Arándanos)',
      'Mermelada de Arándanos (Blueberry Fruit Tea Jam)',
      'Choco Blue (Chocolate con Arándanos)'
    ],
    productComboSummary: 'Berry Juice HIGH VC + Blueberry Candy + Blueberry Coffee.',
    howToUse: 'Disolver 1 sachet de Berry Juice HIGH VC en agua fría por las mañanas para una explosión antioxidante y vitamina C. Disfrutar de 1 a 3 unidades de Blueberry Candy durante horas de trabajo en pantallas o lectura para aliviar la fatiga ocular. Tomar una taza de Blueberry Coffee a media mañana.',
    compliantBenefits: [
      'Las antocianinas del arándano favorecen la regeneración de la rodopsina (pigmento retiniano).',
      'Ayuda a reducir la sensación de ojos secos, arenilla y fatiga provocada por la luz azul de pantallas y monitores.',
      'Aporte de antioxidantes y bioflavonoides que protegen las células oculares contra el estrés oxidativo.',
      'Favorece la nitidez, microcirculación y confort visual en ambientes de poca luz.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura cataratas, glaucoma, desprendimiento de retina o miopía".',
      'NO prometer: "Elimina la necesidad de usar lentes graduados".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Nutrición antioxidante complementaria para el cuidado ocular. Consulte a su oftalmólogo u optometrista para diagnósticos y graduación óptica.'
  },

  higado_metabolismo: {
    id: 'higado_metabolismo',
    title: 'Protocolo de Desintoxicación Hepática & Metabolismo Saludable',
    shortTitle: 'Hígado & Metabolismo',
    badge: 'Depuración Hepática',
    iconText: '🧪',
    focusArea: 'Procesamiento de grasas, pesadez postprandial, vitalidad metabólica y depuración biliar',
    description: 'Apoyo nutricional botánico con Ganoderma Lucidum, té verde y extractos botánicos que promueven los procesos naturales de filtración y depuración del hígado.',
    recommendedProducts: [
      'Ganoderma Soluble Coffee',
      'Té Moldeador Profesional (Pro Shaping Tea)',
      'Choco Gano (Chocolate con Ganoderma)',
      'Ganoderma Candy (Caramelos de Ganoderma)',
      'Fresh Drink Chang JingJing (Limpiador Digestivo)',
      'Termo de Turmalina Waterson'
    ],
    productComboSummary: 'Ganoderma Soluble Coffee + Té Moldeador Profesional + Ganoderma Candy.',
    howToUse: 'Tomar 1 taza de Ganoderma Soluble Coffee después del desayuno para activar el metabolismo y proteger las células hepáticas con triterpenos bioactivos. Beber 1 taza de Té Moldeador Profesional después de comidas copiosas para apoyar la digestión de grasas. Consumir Ganoderma Candy durante el día.',
    compliantBenefits: [
      'Los triterpenos y polisacáridos del Ganoderma Lucidum apoyan la capacidad desintoxicante natural del hígado.',
      'El Té Moldeador con espino y semillas de casia ayuda a evitar la pesadez tras consumir alimentos grasos.',
      'Favorece la modulación enzimática y neutralización de radicales libres hepáticos.',
      'Promueve un metabolismo lipídico más ágil y equilibrado.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura el hígado graso grado 3, cirrosis o hepatitis".',
      'NO prometer: "Limpia los cálculos biliares en 48 horas".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Este protocolo es un suplemento alimenticio y adaptógeno botánico. No reemplaza controles médicos ni tratamientos hepatológicos especializados.'
  },

  salud_renal: {
    id: 'salud_renal',
    title: 'Protocolo de Respaldo Renal & Vías Urinarias',
    shortTitle: 'Riñones & Vías Urinarias',
    badge: 'Depuración Renal',
    iconText: '💧',
    focusArea: 'Equilibrio de líquidos, confort en vías urinarias, eliminación de toxinas y filtración',
    description: 'Nutrientes botánicos con arándano y adaptógenos de Cordyceps Sinensis que favorecen la diuresis suave, la hidratación celular y el mantenimiento de un tracto urinario limpio.',
    recommendedProducts: [
      'Coffee Ceps (Café Cordyceps sin Azúcar)',
      'Cordyceps Coffee Cream',
      'Berry Juice HIGH VC (Zumo de Frutos Rojos)',
      'Blueberry Candy (Caramelos de Arándano)',
      'Termo de Turmalina Waterson'
    ],
    productComboSummary: 'Coffee Ceps / Cordyceps Coffee Cream + Berry Juice HIGH VC + Termo de Turmalina Waterson.',
    howToUse: 'Tomar 1 sobre de Coffee Ceps (versión sin azúcar) o Cordyceps Coffee Cream por la mañana para tonificar la energía renal. Beber Berry Juice HIGH VC disuelto en agua alcalinizada con el Termo Waterson durante la mañana para proteger las vías urinarias con proantocianidinas de arándano.',
    compliantBenefits: [
      'Las proantocianidinas de los frutos rojos ayudan a evitar la adherencia de bacterias en las paredes del tracto urinario.',
      'El Cordyceps Sinensis apoya la vitalidad y energía celular de los riñones según la tradición oriental.',
      'Apoya la eliminación natural de desechos metabólicos y líquidos retenidos con agua alcalinizada.',
      'Sensación de ligereza y confort al orinar.'
    ],
    nonCompliantClaims: [
      'NO decir: "Disuelve piedras en los riñones o cura la insuficiencia renal crónica".',
      'NO sustituir: La diálisis o medicamentos recetados por un nefrólogo.'
    ],
    disclaimer: 'Nota de Bienestar Ético: Suplemento de bienestar nutricional. No constituye un fármaco urológico ni sustituye la atención médica en infecciones renales agudas.'
  },

  pulmones_respiratorio: {
    id: 'pulmones_respiratorio',
    title: 'Protocolo de Vigor Respiratorio & Oxigenación Pulmonar',
    shortTitle: 'Pulmones & Vías Respiratorias',
    badge: 'Oxigenación & Vigor',
    iconText: '🫁',
    focusArea: 'Capacidad pulmonar, oxigenación celular, resistencia física y bienestar bronquial',
    description: 'El hongo adaptógeno Cordyceps Sinensis ha sido utilizado durante siglos en la tradición asiática por su afinidad para tonificar la energía de los pulmones y mejorar la absorción de oxígeno.',
    recommendedProducts: [
      'Cordyceps Coffee Cream',
      'Coffee Ceps (Café Cordyceps sin Azúcar)',
      'Herbal Fresh Candy HGW (Caramelo Herbal Refrescante)',
      'Spirulina Plus Capsule (Espirulina en Cápsula)',
      'Berry Juice HIGH VC (Zumo de Frutos Rojos)'
    ],
    productComboSummary: 'Cordyceps Coffee Cream / Coffee Ceps + Herbal Fresh Candy + Spirulina Plus Capsule.',
    howToUse: 'Disfrutar 1 sobre de Cordyceps Coffee Cream o Coffee Ceps por la mañana o antes de la actividad física. Tomar 2 cápsulas de Spirulina Plus para aportar oxígeno y nutrientes a los tejidos. Consumir Herbal Fresh Candy HGW para refrescar y calmar la garganta y vías respiratorias.',
    compliantBenefits: [
      'Favorece la captación de oxígeno a nivel celular y la síntesis de ATP con Cordyceps Sinensis.',
      'Ayuda a aumentar la resistencia física y reduce la sensación de fatiga al respirar.',
      'Herbal Fresh Candy con extractos botánicos y menta aporta frescura y confort inmediato en la garganta.',
      'La espirulina con clorofila y ficocianina apoya la vitalidad y oxigenación general.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura el asma, la EPOC, neumonía o tuberculosis".',
      'NO prometer: "Sustituye a los inhaladores de rescate o corticoides".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Suplemento alimenticio adaptógeno para apoyar la vitalidad y energía física. No sustituye la consulta ni el tratamiento con un médico neumólogo.'
  },

  sistema_inmunologico: {
    id: 'sistema_inmunologico',
    title: 'Protocolo de Refuerzo del Sistema Inmunológico & Defensas',
    shortTitle: 'Sistema Inmunológico',
    badge: 'Defensas Fuertes',
    iconText: '🛡️',
    focusArea: 'Defensas naturales, modulación inmunológica, energía vital y protección familiar',
    description: 'Cóctel de fitonutrientes, polisacáridos de hongos superiores, espirulina y vitamina C que brindan a las células del sistema inmunitario la materia prima necesaria para responder con eficacia.',
    recommendedProducts: [
      'Ganoderma Soluble Coffee',
      'Spirulina Plus Capsule (Espirulina en Cápsula)',
      'Berry Juice HIGH VC (Zumo de Frutos Rojos)',
      'Choco Gano (Chocolate con Ganoderma)',
      'Ganoderma Candy (Caramelos de Ganoderma)',
      'Biolacti Candy (Caramelo con Probióticos)'
    ],
    productComboSummary: 'Ganoderma Soluble Coffee + Spirulina Plus Capsule + Berry Juice HIGH VC.',
    howToUse: 'Iniciar el día con 1 taza de Ganoderma Soluble Coffee (o Choco Gano para niños y adultos), tomar 2 cápsulas de Spirulina Plus Capsule con el desayuno y beber 1 vaso de Berry Juice HIGH VC rico en Vitamina C por la tarde. Complementar con Biolacti Candy para reforzar la microbiota inmunológica.',
    compliantBenefits: [
      'Los beta-glucanos del Ganoderma Lucidum apoyan la actividad modulada de glóbulos blancos y macrófagos.',
      'La Spirulina Platensis con Ginseng Americano aporta más del 56% de proteína vegetal, hierro y micronutrientes.',
      'Berry Juice High VC aporta vitamina C y flavonoides de frutos rojos para blindaje antioxidante.',
      'Apto para reforzar la vitalidad de jóvenes, adultos y personas mayores.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura enfermedades autoinmunes, COVID-19 o infecciones virales graves".',
      'NO prometer: "Garantía de que nunca te enfermarás de gripe".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Complemento nutricional preventivo y de estilo de vida saludable. No reemplaza vacunas, antivirales ni prescripciones médicas.'
  },

  coadyuvante_cronico: {
    id: 'coadyuvante_cronico',
    title: 'Protocolo Nutricional Coadyuvante en Desafíos Crónicos de Salud',
    shortTitle: 'Soporte Coadyuvante',
    badge: 'Nutrición Celular Ética',
    iconText: '🧬',
    focusArea: 'Nutrición ortomolecular, combate al estrés oxidativo, microcirculación y apoyo al bienestar integral',
    description: 'Enfoque de soporte nutricional celular no invasivo para personas con desafíos crónicos de bienestar, enfocado en nutrir el cuerpo, reducir la carga oxidativa y acompañar sus tratamientos médicos oficiales.',
    recommendedProducts: [
      'Spirulina Plus Capsule (Espirulina en Cápsula)',
      'Péptido de Colágeno de Arándano',
      'Ganoderma Soluble Coffee',
      'Cordyceps Coffee Cream',
      'Berry Juice HIGH VC (Zumo de Frutos Rojos)',
      'Protector de Cintura de Turmalina (Cinturón Lumbar)',
      'Protector de Rodilla Autocalentable de Turmalina',
      'Termo de Turmalina Waterson'
    ],
    productComboSummary: 'Pack Nutrición Celular Coadyuvante: Spirulina Plus Capsule + Péptido de Colágeno de Arándano + Ganoderma Soluble Coffee + Termo Waterson.',
    howToUse: 'Consumir los suplementos de manera espaciada a lo largo del día: Spirulina Plus y Ganoderma Coffee por la mañana, Péptido de Colágeno a media tarde, y agua alcalinizada con el Termo Waterson durante todo el día. Mantener siempre los medicamentos y controles de su médico tratante.',
    compliantBenefits: [
      'Aporte masivo de antioxidantes naturales (antocianinas, polifenoles y triterpenos) para frenar el daño por radicales libres.',
      'Nutrición celular integral con Spirulina Plus (proteínas, clorofila, hierro y ginseng) y péptidos bioactivos de colágeno.',
      'Apoyo a la microcirculación y confort articular con las fajas y protectores de turmalina.',
      'Acompañamiento nutricional respetuoso y sinérgico con el tratamiento médico existente.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura la diabetes, el cáncer, hipertensión o lupus".',
      'NO recomendar jamás suspender medicamentos recetados por el médico.',
      'NO usar la palabra "tratamiento médico" para referirse a los suplementos HGW.'
    ],
    disclaimer: 'Nota de Bienestar Ético Fundamental: Los productos HGW son complementos nutricionales y de bienestar físico que actúan como coadyuvantes en la nutrición celular. NO son fármacos ni sustituyen las indicaciones, medicamentos o tratamientos de su médico especialista.'
  }
};

// 270 Complete Pre-Built Protocol Copys (30 per each of the 9 protocols)
export const PROTOCOL_COPYS: HealthProtocolCopy[] = ALL_HEALTH_PROTOCOL_COPYS;

export function buildHealthProtocolMasterPrompt(protocol: HealthProtocolInfo, contact: ContactData): string {
  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

  return `================================================================================
PROMPT MAESTRO AIDA: PROTOCOLO DE BIENESTAR Y NUTRICIÓN CELULAR HGW (SIN PROMESAS MÉDICAS)
================================================================================

Actúa como un Especialista en Comunicación de Nutracéutica, Salud Preventiva y Copywriting Ético AIDA para Health Green World (HGW).

1. PROTOCOLO SELECCIONADO:
- Nombre Oficial: ${protocol.title}
- Área de Enfoque: ${protocol.focusArea}
- Productos HGW Recomendados: ${protocol.recommendedProducts.join(', ')}
- Modo de Uso / Rutina: ${protocol.howToUse}

2. DATOS DEL ASESOR DE BIENESTAR HGW:
- Nombre: ${contact.nombre}
- WhatsApp: ${contact.whatsapp}
- Enlace Directo: ${waLink}
- Código Oficial de Distribuidor: ${contact.codigo}

3. REGLAS ÉTICAS Y LEGALES OBLIGATORIAS (CUMPLIMIENTO DE CLAIMS):
- **Cero Promesas Médicas**: QUEDA ESTRICTAMENTE PROHIBIDO afirmar que los productos curan, tratan o erradican enfermedades médicas (ej. cáncer, diabetes, artrosis, quistes, hipertensión, insuficiencia renal).
- **Posicionamiento Coadyuvante**: Los productos HGW deben ser presentados como *alimentos funcionales, suplementos nutricionales de alta biodisponibilidad y complementos de estilo de vida saludable* que apoyan los procesos biológicos naturales del organismo.
- **Transparencia**: Destacar los ingredientes botánicos (arándanos, ganoderma, cordyceps, turmalina, colágeno) y sus propiedades nutricionales comprobadas.
- **Descargo de Responsabilidad**: Incluir siempre el aviso de que no reemplaza tratamientos ni prescripciones de profesionales de la salud.

4. ESTRUCTURA AIDA DE LOS COPYS:
- [A] Atención: Gancho reflexivo o de identificación sin alarmismos.
- [I & D] Interés y Deseo: Explicación botánica de los beneficios coadyuvantes de los productos HGW sugeridos.
- [A] Acción: Llamado a la acción (CTA) directo con el enlace de WhatsApp (${waLink}) y código oficial (${contact.codigo}).`;
}
