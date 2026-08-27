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
      'LactiBerry (Probióticos + Arándano)',
      'Café con Cordyceps o Ganoderma HGW',
      'Té Verde / Infusiones Botánicas HGW'
    ],
    productComboSummary: 'LactiBerry (1 sobre al día) + Café Saludable HGW por la mañana + abundante agua mineralizada.',
    howToUse: 'Tomar 1 sobre de LactiBerry disuelto en agua tibia en ayunas o antes de dormir. Acompañar con una taza de Café con Cordyceps HGW a media mañana para estimular el peristaltismo natural. Mantener hidratación óptima (2 a 3 litros de agua al día).',
    compliantBenefits: [
      'Favorece el tránsito intestinal natural sin provocar irritación ni cólicos agresivos.',
      'Aporta millones de probióticos activos y antioxidantes de arándano para nutrir la microbiota.',
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
      'Toallas Sanitarias con Turmalina & Anión SmarTea HGW (Día y Noche)',
      'Protectores Diarios con Turmalina HGW',
      'Café con Arándanos HGW (Antioxidantes)'
    ],
    productComboSummary: 'Kit Íntimo Femenino SmarTea (Toallas Día + Noche + Protectores Diarios de Anión y Turmalina).',
    howToUse: 'Usar protectores diarios de turmalina para el cuidado preventivo continuo y cambiar a las toallas sanitarias SmarTea durante los días del periodo. La banda verde de turmalina emite aniones e infrarrojo lejano que ayudan a relajar los músculos del útero y neutralizar olores.',
    compliantBenefits: [
      'Emisión natural de aniones que favorece la oxigenación y previene la proliferación bacteriana.',
      'El infrarrojo lejano de la turmalina genera un suave calor biológico que ayuda a calmar espasmos musculares y cólicos.',
      'Capa de algodón 100% transpirable libre de químicos blanqueadores que cuida la piel sensible.',
      'Máxima absorción con polímero orgánico que mantiene la zona seca y libre de humedad.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura quistes de ovario, miomas uterinos o endometriosis".',
      'NO prometer: "Elimina la infertilidad femenina de forma garantizada".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Las toallas y protectores de turmalina HGW son productos de higiene y confort personal. Para afecciones ginecológicas específicas, consulte siempre a su especialista médico.'
  },

  inflamacion_articular: {
    id: 'inflamacion_articular',
    title: 'Protocolo de Confort Articular, Movilidad & Alivio Muscular',
    shortTitle: 'Articulaciones & Movilidad',
    badge: 'Movilidad & Flexibilidad',
    iconText: '🦴',
    focusArea: 'Rigidez articular, inflamación de rodillas, espalda, cuello, lumbalgias y bienestar muscular',
    description: 'Terapia térmica de infrarrojo lejano e iones negativos a través de la turmalina HGW combinada con nutrición celular para el cartílago y los tejidos conectivos.',
    recommendedProducts: [
      'Colágeno Hidrolizado con Arándano HGW',
      'Férulas de Turmalina HGW (Rodilleras, Coderas, Faja Lumbar o Cuello)',
      'Café con Cordyceps HGW'
    ],
    productComboSummary: 'Férula de Turmalina específica + Colágeno con Arándano diario + Café Cordyceps.',
    howToUse: 'Colocar la férula o rodillera de turmalina en contacto con la piel húmeda durante 20 a 30 minutos al día para sentir el calor biológico relajante. Tomar 1 porción de Colágeno con Arándano en la mañana y disfrutar una taza de Café Cordyceps para apoyar la oxigenación muscular.',
    compliantBenefits: [
      'La turmalina emite calor térmico que estimula la microcirculación y relaja contracturas musculares.',
      'El colágeno hidrolizado aporta aminoácidos esenciales para la elasticidad de cartílagos, tendones y ligamentos.',
      'Los adaptógenos del Cordyceps ayudan a mitigar la sensación de fatiga muscular.',
      'Brinda mayor sensación de libertad y flexibilidad en el movimiento diario.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura la artritis reumatoide, artrosis degenerativa terminal o hernias discales".',
      'NO prometer: "Regenera el cartílago al 100% en una semana".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Férulas de soporte externo y suplementación alimenticia coadyuvante. No reemplazan cirugías traumatológicas ni terapias farmacológicas recetadas.'
  },

  salud_visual: {
    id: 'salud_visual',
    title: 'Protocolo de Protección Ocular, Retina & Agudeza Visual',
    shortTitle: 'Salud Visual & Retina',
    badge: 'Cuidado Ocular & Filtro Azul',
    iconText: '🫐',
    focusArea: 'Fatiga visual por pantallas, visión nocturna, lubricación ocular y protección de la mácula',
    description: 'Nutrición celular de alta densidad a base de antocianinas puras de arándano silvestre y antioxidantes bioactivos para nutrir la microcirculación capilar del globo ocular.',
    recommendedProducts: [
      'Polvo de Arándanos con Luteína HGW',
      'Caramelos de Arándano HGW',
      'Café con Arándanos HGW'
    ],
    productComboSummary: 'Polvo de Arándanos concentrado diario + Caramelos de Arándano para merienda antioxidante.',
    howToUse: 'Disolver 1 medida de Polvo de Arándanos en agua o zumo natural por las mañanas. Consumir 2 a 3 Caramelos de Arándano durante horas de trabajo intenso en pantallas o lectura. Mantener descansos visuales periódicos (regla 20-20-20).',
    compliantBenefits: [
      'Las antocianinas del arándano favorecen la regeneración de la rodopsina (pigmento retiniano).',
      'Ayuda a reducir la sensación de ojos secos, arenilla y fatiga provocada por la luz azul de pantallas.',
      'Aporte de antioxidantes que protegen las células oculares contra el daño de los radicales libres.',
      'Favorece la nitidez y el confort visual en ambientes de poca luz.'
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
    description: 'Apoyo nutricional botánico con Ganoderma Lucidum y extractos botánicos que promueven los procesos naturales de filtración y depuración del hígado.',
    recommendedProducts: [
      'Café con Ganoderma Lucidum HGW',
      'LactiBerry HGW',
      'Té Verde / Infusiones Botánicas HGW'
    ],
    productComboSummary: 'Café con Ganoderma por la mañana + LactiBerry por la noche para sincronizar el eje intestino-hígado.',
    howToUse: 'Tomar 1 taza de Café con Ganoderma después del desayuno para activar el metabolismo de grasas y proteger las células hepáticas. Finalizar el día con 1 sobre de LactiBerry para evitar la sobrecarga de toxinas desde el colon hacia el hígado.',
    compliantBenefits: [
      'Los triterpenos y polisacáridos del Ganoderma apoyan la capacidad desintoxicante natural del hígado.',
      'Ayuda a evitar la pesadez tras consumir alimentos grasos y mejora la vitalidad metabólica.',
      'Favorece la modulación de enzimas hepáticas y combate los radicales libres.',
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
    focusArea: 'Equilibrio de líquidos, confort en vías urinarias, eliminación de ácido úrico y filtración',
    description: 'Nutrientes botánicos con arándano y adaptógenos que favorecen la diuresis suave, la hidratación celular y el mantenimiento de un tracto urinario limpio.',
    recommendedProducts: [
      'Polvo de Arándanos HGW',
      'Café con Cordyceps HGW',
      'Caramelos de Arándano HGW'
    ],
    productComboSummary: 'Polvo de Arándano en agua abundante + Café con Cordyceps para energía renal.',
    howToUse: 'Mezclar 1 medida de Polvo de Arándano en 500ml de agua pura y beber durante la mañana. Tomar 1 taza de Café con Cordyceps para respaldar la energía renal según la tradición herbaria oriental. Beber suficiente agua durante el día.',
    compliantBenefits: [
      'Las proantocianidinas (PACs) del arándano ayudan a evitar la adherencia de bacterias en las paredes de las vías urinarias.',
      'El Cordyceps favorece la función energética de los túbulos renales y la resistencia física.',
      'Apoya la eliminación natural de desechos metabólicos y líquidos retenidos.',
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
    description: 'El hongo adaptógeno Cordyceps Sinensis ha sido utilizado durante siglos en la medicina tradicional asiática por su afinidad para tonificar la energía de los pulmones y mejorar la absorción de oxígeno.',
    recommendedProducts: [
      'Café con Cordyceps Sinensis HGW',
      'Caramelos de Arándano HGW',
      'Polvo de Arándano HGW'
    ],
    productComboSummary: 'Café con Cordyceps por la mañana + Caramelos de Arándano para suavizar la garganta.',
    howToUse: 'Disfrutar 1 sobre de Café con Cordyceps en agua caliente por la mañana o 30 minutos antes de hacer ejercicio. Chupar caramelos de arándano cuando se sienta sequedad o irritación en la garganta.',
    compliantBenefits: [
      'Favorece la síntesis de ATP mitocondrial y la captación de oxígeno en el tejido pulmonar.',
      'Ayuda a aumentar la resistencia física y reduce la sensación de fatiga al respirar.',
      'Aporta antioxidantes que protegen las vías respiratorias frente a la contaminación ambiental.',
      'Brinda confort bronquial y calidez respiratoria natural.'
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
    description: 'Cóctel de fitonutrientes, polisacáridos de hongos superiores y bioflavonoides que brindan a las células del sistema inmunitario la materia prima necesaria para responder con eficacia.',
    recommendedProducts: [
      'Caramelos de Arándano HGW (Vitamina C + Arándano)',
      'Café con Ganoderma Lucidum HGW',
      'LactiBerry (Probióticos de flora intestinal) HGW',
      'Polvo de Arándanos HGW'
    ],
    productComboSummary: 'Combo Inmuno-Fuerte: Café Ganoderma + LactiBerry + Caramelos de Arándano diarios.',
    howToUse: 'Iniciar el día con Café Ganoderma, tomar 1 sobre de LactiBerry antes del almuerzo para fortalecer el 70% de la inmunidad alojada en el intestino, y consumir 2 a 3 caramelos de arándano a lo largo de la jornada.',
    compliantBenefits: [
      'Los beta-glucanos del Ganoderma apoyan la actividad equilibrada de glóbulos blancos y macrófagos.',
      'La combinación de probióticos y vitamina C fortalece la primera línea de defensa del organismo.',
      'Protege a las células contra el estrés oxidativo generado por cambios de clima o estrés.',
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
      'Polvo de Arándanos con Luteína HGW',
      'Colágeno Hidrolizado con Arándano HGW',
      'Café con Ganoderma o Cordyceps HGW',
      'Línea de Turmalina HGW (Fajas/Rodilleras/Accesorios)'
    ],
    productComboSummary: 'Pack Nutrición Celular Integral: Arándano + Ganoderma + Colágeno + Turmalina.',
    howToUse: 'Consumir los suplementos de manera espaciada a lo largo del día, acompañando la alimentación habitual y manteniendo siempre los medicamentos recetados por su médico tratante. La constancia y los hábitos saludables son la clave.',
    compliantBenefits: [
      'Aporte masivo de antioxidantes naturales (antocianinas, polifenoles y triterpenos) para frenar el daño por radicales libres.',
      'Apoyo a la microcirculación y elasticidad de los tejidos con péptidos de colágeno y turmalina.',
      'Favorece la energía mitocondrial celular, el descanso reparador y la vitalidad general.',
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
