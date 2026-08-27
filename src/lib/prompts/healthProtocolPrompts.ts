import { ContactData } from '../../types';

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
    title: 'Protocolo de Bienestar Articular, Celular & Anti-Inflamación',
    shortTitle: 'Inflamación & Articulaciones',
    badge: 'Movilidad & Células',
    iconText: '⚡',
    focusArea: 'Flexibilidad en articulaciones, cartílagos, desinflamación celular y alivio muscular',
    description: 'Sinergia de péptidos de colágeno bioactivo, polifenoles de arándano y accesorios con nanotecnología de turmalina para proteger la estructura musculoesquelética.',
    recommendedProducts: [
      'Colágeno Hidrolizado con Arándano HGW',
      'Rodilleras / Faja / Collar de Turmalina HGW',
      'Jabón de Turmalina o Aceite de Oliva HGW'
    ],
    productComboSummary: 'Colágeno con Arándano (1 toma diaria) + Accesorio de Turmalina en la zona afectada.',
    howToUse: 'Disolver 1 sachet de Colágeno con Arándano en agua o jugo a media mañana. Colocar la rodillera, faja o soporte de turmalina HGW humedeciendo ligeramente la zona de contacto durante 20-30 minutos para activar el calor infrarrojo.',
    compliantBenefits: [
      'Aporta aminoácidos esenciales para la síntesis de colágeno en cartílagos, tendones y piel.',
      'Los bioflavonoides del arándano ayudan a neutralizar los radicales libres que aceleran el desgaste celular.',
      'La turmalina favorece la microcirculación local y ayuda a relajar zonas con tensión acumulada.',
      'Mejora la movilidad matutina y la sensación de ligereza en las articulaciones.'
    ],
    nonCompliantClaims: [
      'NO decir: "Cura la artritis reumatoide, artrosis severa o hernias discales".',
      'NO prometer: "Regenera el cartílago al 100% en 15 días".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Este protocolo es un suplemento alimenticio y de bienestar físico. No constituye un medicamento antiinflamatorio farmacéutico ni reemplaza la terapia médica ortopédica.'
  },

  salud_visual: {
    id: 'salud_visual',
    title: 'Protocolo de Nutrición Celular & Cuidado de la Salud Visual',
    shortTitle: 'Salud Visual',
    badge: 'Ojos & Pantallas',
    iconText: '👁️',
    focusArea: 'Fatiga ocular por pantallas, agudeza visual, protección de retina y microcirculación ocular',
    description: 'Concentrado botánico de arándanos silvestres (Blueberry) ricos en antocianinas y flavonoides protectores que nutren los capilares del ojo y protegen la mácula.',
    recommendedProducts: [
      'Polvo de Arándanos con Luteína HGW',
      'Caramelos de Arándano HGW',
      'Café con Arándanos HGW'
    ],
    productComboSummary: 'Polvo de Arándano (1 cucharadita diaria) + Caramelos de Arándano durante horas de trabajo frente a pantallas.',
    howToUse: 'Consumir el Polvo de Arándano disuelto en agua o yogur por la mañana. Mantener caramelos de arándano a mano durante jornadas prolongadas frente a computadoras o celulares para estimular la lubricación y nutrición ocular.',
    compliantBenefits: [
      'Las antocianinas del arándano apoyan la regeneración de la rodopsina, pigmento esencial para la visión nocturna.',
      'Ayuda a reducir la sensación de ojos secos, ardor y cansancio visual por exposición a luz azul.',
      'Potente protección antioxidante contra el estrés oxidativo en la retina y cristalino.',
      'Favorece el flujo sanguíneo en los microcapilares que irrigan el nervio óptico.'
    ],
    nonCompliantClaims: [
      'NO decir: "Elimina las cataratas, cura el glaucoma o quita la miopía para no usar lentes".',
      'NO prometer: "Recuperación milagrosa del 100% de la visión en 30 días".'
    ],
    disclaimer: 'Nota de Bienestar Ético: Este producto es un alimento funcional antioxidante. Para diagnósticos oftalmológicos, graduación de lentes o patologías oculares, consulte a su médico oftalmólogo.'
  },

  higado_metabolismo: {
    id: 'higado_metabolismo',
    title: 'Protocolo de Apoyo Hepático & Desintoxicación Metabólica',
    shortTitle: 'Hígado & Metabolismo',
    badge: 'Detox Hepático',
    iconText: '🍃',
    focusArea: 'Función hepática, digestión de grasas, energía metabólica y depuración celular',
    description: 'Combinación de hongos adaptógenos milenarios (Ganoderma Lucidum / Cordyceps) y antioxidantes que respaldan la labor natural de filtrado del hígado.',
    recommendedProducts: [
      'Café con Ganoderma Lucidum HGW',
      'Café con Cordyceps Sinensis HGW',
      'LactiBerry HGW'
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

// Ready-to-use copys per protocol (36 specialized, high-converting ethical copys)
export const PROTOCOL_COPYS: HealthProtocolCopy[] = [
  // 1. LIMPIEZA DE COLON & SALUD DIGESTIVA (4 copys)
  {
    id: 'cop-col-1',
    protocolId: 'limpieza_colon',
    title: 'Digestión Ligera & Cero Pesadez',
    angle: 'Bienestar digestivo diario',
    hook: '¿Sientes tu abdomen inflamado y pesado después de cada comida? 🌿',
    body: 'El 80% de nuestra salud y energía comienza en el sistema digestivo. Cuando el colon acumula toxinas y la flora intestinal está desequilibrada, es común sentir fatiga, lentitud y pesadez constante.\n\nEl protocolo botánico de HGW combina **LactiBerry** (ricos en probióticos vivos y antioxidantes de arándano) con nuestro **Café Saludable**, promoviendo un tránsito intestinal suave y natural sin cólicos ni irritaciones agresivas.',
    suggestedCombo: 'LactiBerry + Café con Cordyceps HGW',
    cta: 'Escríbeme por WhatsApp y te enseño cómo realizar este reseteo digestivo de 7 días.',
    fullMessage: `¿Sientes tu abdomen inflamado y pesado después de cada comida? 🌿✨\n\nEl 80% de nuestra salud y energía comienza en el sistema digestivo. Cuando el colon acumula toxinas y la flora intestinal está desequilibrada, es común sentir fatiga, lentitud y pesadez constante.\n\nEl protocolo botánico de HGW combina **LactiBerry** (ricos en probióticos vivos y antioxidantes de arándano) con nuestro **Café Saludable**, promoviendo un tránsito intestinal suave y natural sin cólicos ni irritaciones agresivas.\n\n🔹 Desinflama de forma natural\n🔹 Nutre tu microbiota intestinal\n🔹 Recupera tu energía y ligereza\n\n📲 Escríbeme al WhatsApp para solicitar tu combo digestivo con precio especial: [WHATSAPP_LINK] (Asesora [NOMBRE] - Código [CODIGO])\n\n*Complemento nutricional coadyuvante. No sustituye la consulta médica.*`,
    tags: ['#SaludDigestiva', '#LimpiezaDeColon', '#ProbioticosHGW', '#LactiBerry', '#BienestarNatural']
  },
  {
    id: 'cop-col-2',
    protocolId: 'limpieza_colon',
    title: 'La Clave de los Probióticos de Arándano',
    angle: 'Educación nutricional',
    hook: 'No todos los desintoxicantes son iguales: cuida tu microbiota con LactiBerry 🫐',
    body: 'Muchos productos para el colon son laxantes agresivos que barren tu flora intestinal. En HGW cuidamos tu salud desde la nutrición celular: LactiBerry no solo ayuda a regular el tránsito, sino que reimplanta bacterias benéficas gracias al poder del arándano.',
    suggestedCombo: 'LactiBerry HGW (Caja de sobres)',
    cta: 'Pide tu caja de LactiBerry hoy mismo con envío directo.',
    fullMessage: `No todos los desintoxicantes son iguales: cuida tu microbiota con LactiBerry 🫐🌿\n\nMuchos productos para el colon son laxantes agresivos que barren tu flora intestinal. En HGW cuidamos tu salud desde la nutrición celular: LactiBerry no solo ayuda a regular el tránsito, sino que reimplanta bacterias benéficas gracias al poder del arándano.\n\n✨ Disfruta una digestión feliz todos los días.\n📲 Contáctame aquí para pedidos y asesoría: [WHATSAPP_LINK]`,
    tags: ['#LactiBerry', '#FloraIntestinal', '#HGWPanama', '#Probioticos']
  },
  {
    id: 'cop-col-3',
    protocolId: 'limpieza_colon',
    title: 'Reseteo Digestivo Botánico de 7 Días',
    angle: 'Desafío y transformación',
    hook: 'En solo 7 días tu digestión puede sentirse completamente renovada 🌱',
    body: 'Cuando limpias tu organismo de forma respetuosa y sin químicos invasivos, no solo mejora tu tránsito intestinal: tu piel luce más despejada, tu abdomen se desinflama y despiertas con mucha más energía.\n\nEl dúo de LactiBerry y Café Ganoderma HGW trabaja en armonía para estimular la depuración sin dolores ni emergencias.',
    suggestedCombo: 'Dúo Detox: LactiBerry + Café Ganoderma HGW',
    cta: 'Únete al reseteo de 7 días pidiendo tu combo hoy.',
    fullMessage: `En solo 7 días tu digestión puede sentirse completamente renovada 🌱✨\n\nCuando limpias tu organismo de forma respetuosa y sin químicos invasivos, no solo mejora tu tránsito intestinal: tu piel luce más despejada, tu abdomen se desinflama y despiertas con mucha más energía.\n\nEl dúo de LactiBerry y Café Ganoderma HGW trabaja en armonía para estimular la depuración sin dolores ni emergencias.\n\n☕ 1 Taza de Café Saludable por la mañana\n🫐 1 Sobre de LactiBerry por la noche\n\n📲 Solicita tu pack de 7 días aquí: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#DetoxSaludable', '#ReseteoDigestivo', '#VientrePlano', '#HGW']
  },
  {
    id: 'cop-col-4',
    protocolId: 'limpieza_colon',
    title: 'Adiós al Estreñimiento Ocasional sin Laxantes Irritantes',
    angle: 'Solución natural a problemas comunes',
    hook: '¿Pasan días sin que puedas ir al baño con normalidad? No sufras más en silencio 🍃',
    body: 'El estreñimiento no se soluciona con purgantes que irritan las paredes del intestino. La respuesta está en devolverle a tu cuerpo la fibra soluble, las enzimas naturales y los probióticos vivos que estimulan el movimiento peristáltico natural.\n\nDescubre el confort de LactiBerry de HGW y siente la verdadera ligereza cada mañana.',
    suggestedCombo: 'LactiBerry (Tratamiento mensual)',
    cta: 'Escríbeme para recibir una guía de alimentación y tu LactiBerry.',
    fullMessage: `¿Pasan días sin que puedas ir al baño con normalidad? No sufras más en silencio 🍃\n\nEl estreñimiento no se soluciona con purgantes que irritan las paredes del intestino. La respuesta está en devolverle a tu cuerpo la fibra soluble, las enzimas naturales y los probióticos vivos que estimulan el movimiento peristáltico natural.\n\nDescubre el confort de LactiBerry de HGW y siente la verdadera ligereza cada mañana.\n\n📲 Contáctame al WhatsApp: [WHATSAPP_LINK] (Asesora [NOMBRE])`,
    tags: ['#EstreñimientoNatural', '#LactiBerryHGW', '#SaludIntestinal']
  },

  // 2. CÓLICOS MENSTRUALES & SALUD FEMENINA (4 copys)
  {
    id: 'cop-men-1',
    protocolId: 'colicos_menstruales',
    title: 'Tu Ciclo Menstrual en Total Confort & Sin Químicos',
    angle: 'Salud íntima femenina',
    hook: '¿Días del mes difíciles por cólicos e incomodidad? Cambia a toallas con Turmalina 🌸',
    body: 'La gran mayoría de toallas comerciales contienen plástico y químicos blanqueadores que aumentan el calor, la irritación y los cólicos. Las toallas sanitarias **SmarTea de HGW** cuentan con una banda verde con nano-turmalina y aniones que emite calor infrarrojo suave, ayudando a calmar los espasmos musculares y brindando máxima frescura y transpirabilidad.',
    suggestedCombo: 'Kit Íntimo Femenino SmarTea (Toallas Día + Noche + Protectores Diarios)',
    cta: 'Pide tu kit íntimo hoy y siente la verdadera diferencia en tu próximo ciclo.',
    fullMessage: `¿Días del mes difíciles por cólicos e incomodidad? Cambia a toallas con Turmalina 🌸✨\n\nLa gran mayoría de toallas comerciales contienen plástico y químicos blanqueadores que aumentan el calor, la irritación y los cólicos. Las toallas sanitarias **SmarTea de HGW** cuentan con una banda verde con nano-turmalina y aniones que emite calor infrarrojo suave, ayudando a calmar los espasmos musculares y brindando máxima frescura y transpirabilidad.\n\n🌿 100% Algodón transpirable\n🌿 Banda de aniones y turmalina para alivio térmico\n🌿 Sin perfumes artificiales ni químicos agresivos\n\n📲 Solicita tu kit íntimo femenino aquí: [WHATSAPP_LINK] (Código [CODIGO])`,
    tags: ['#ToallasTurmalina', '#SmarTeaHGW', '#SaludFemenina', '#SinDolorMenstrual', '#ConfortIntimo']
  },
  {
    id: 'cop-men-2',
    protocolId: 'colicos_menstruales',
    title: 'Protectores Diarios de Anión para Cuidado Preventivo',
    angle: 'Prevención diaria de la mujer',
    hook: 'El hábito diario que toda mujer agradece conocer 💖',
    body: 'Los protectores diarios de anión y turmalina HGW ayudan a equilibrar el pH íntimo, neutralizar olores y prevenir la proliferación de bacterias gracias al flujo de aniones naturales. Suaves como el algodón y totalmente transpirables.',
    suggestedCombo: 'Protectores Diarios SmarTea HGW',
    cta: 'Escríbeme para consultar la disponibilidad y precios de socia.',
    fullMessage: `El hábito diario que toda mujer agradece conocer 💖🌿\n\nLos protectores diarios de anión y turmalina HGW ayudan a equilibrar el pH íntimo, neutralizar olores y prevenir la proliferación de bacterias gracias al flujo de aniones naturales. Suaves como el algodón y totalmente transpirables.\n\n📲 Haz tu pedido directo por WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#ProtectoresDiarios', '#TurmalinaHGW', '#HigieneFemenina']
  },
  {
    id: 'cop-men-3',
    protocolId: 'colicos_menstruales',
    title: '¿Sabías que las Toallas Comerciales Contienen Derivados del Petróleo?',
    angle: 'Concientización y salud',
    hook: '¿Por qué tantas mujeres sufren de irritación y cólicos intensos cada mes? 🛑',
    body: 'El uso continuo de toallas sintéticas no transpirables atrapa la humedad y altera el equilibrio vaginal. La tecnología de aniones de SmarTea HGW permite la circulación continua de aire mientras que la turmalina genera microcorrientes bioeléctricas que relajan la zona pélvica.',
    suggestedCombo: 'Pack Familiar de Toallas SmarTea HGW',
    cta: 'Haz la prueba en tu siguiente periodo y no volverás a usar toallas comunes.',
    fullMessage: `¿Por qué tantas mujeres sufren de irritación y cólicos intensos cada mes? 🛑🌸\n\nEl uso continuo de toallas sintéticas no transpirables atrapa la humedad y altera el equilibrio vaginal. La tecnología de aniones de SmarTea HGW permite la circulación continua de aire mientras que la turmalina genera microcorrientes bioeléctricas que relajan la zona pélvica.\n\n✨ 0% Fugas\n✨ 0% Plástico en contacto con tu piel\n✨ Alivio natural de la pesadez menstrual\n\n📲 Escríbeme y solicita tu paquete: [WHATSAPP_LINK]`,
    tags: ['#SaludDeLaMujer', '#ToallasSmarTea', '#TurmalinaNatural']
  },
  {
    id: 'cop-men-4',
    protocolId: 'colicos_menstruales',
    title: 'Noches de Sueño Ininterrumpido Durante Tu Periodo',
    angle: 'Confort nocturno',
    hook: 'Duerme tranquila y sin miedo a manchas con las Toallas Noche SmarTea 🌙',
    body: 'Diseñadas con mayor longitud, alas ergonómicas y una capacidad de absorción instantánea de gel vegetal que bloquea la humedad en segundos. Despierta descansada, fresca y protegida.',
    suggestedCombo: 'Toallas Sanitarias de Noche SmarTea HGW',
    cta: 'Pide tu paquete nocturno por WhatsApp.',
    fullMessage: `Duerme tranquila y sin miedo a manchas con las Toallas Noche SmarTea 🌙✨\n\nDiseñadas con mayor longitud, alas ergonómicas y una capacidad de absorción instantánea de gel vegetal que bloquea la humedad en segundos. Despierta descansada, fresca y protegida.\n\n📲 Pídelas aquí con entrega inmediata: [WHATSAPP_LINK] (Código distribuidora: [CODIGO])`,
    tags: ['#NochesTranquilas', '#SmarTeaNoche', '#HGWPanama']
  },

  // 3. INFLAMACIÓN & ARTICULACIONES (4 copys)
  {
    id: 'cop-inf-1',
    protocolId: 'inflamacion_articular',
    title: 'Libertad de Movimiento & Protección Articular',
    angle: 'Movilidad y articulaciones',
    hook: '¿Molestias en rodillas, espalda o articulaciones al despertar? ⚡',
    body: 'Con el paso del tiempo, el cuerpo disminuye su producción natural de colágeno y el estrés oxidativo desgasta los cartílagos. Nuestro protocolo combina **Colágeno Hidrolizado con Arándano** (máxima biodisponibilidad) con los **Accesorios de Turmalina HGW**, que emiten calor infrarrojo para activar la microcirculación local y brindar una sensación reconfortante en tus articulaciones.',
    suggestedCombo: 'Colágeno con Arándano + Rodillera o Faja de Turmalina HGW',
    cta: 'Escríbeme para armar tu combo de movilidad según la zona que más necesitas cuidar.',
    fullMessage: `¿Molestias en rodillas, espalda o articulaciones al despertar? ⚡🏃‍♂️\n\nCon el paso del tiempo, el cuerpo disminuye su producción natural de colágeno y el estrés oxidativo desgasta los cartílagos. Nuestro protocolo combina **Colágeno Hidrolizado con Arándano** (máxima biodisponibilidad) con los **Accesorios de Turmalina HGW**, que emiten calor infrarrojo para activar la microcirculación local y brindar una sensación reconfortante en tus articulaciones.\n\n🔹 Péptidos bioactivos de colágeno\n🔹 Antioxidantes protectores de arándano silvestre\n🔹 Termoterapia con turmalina infrarroja lejana\n\n📲 Escríbeme y recupera tu bienestar articular: [WHATSAPP_LINK] (Código socio: [CODIGO])\n\n*Suplemento alimenticio coadyuvante.*`,
    tags: ['#ColagenoHGW', '#BienestarArticular', '#TurmalinaInfrarroja', '#Movilidad']
  },
  {
    id: 'cop-inf-2',
    protocolId: 'inflamacion_articular',
    title: 'Colágeno Hidrolizado con Arándano: Nutrición Desde Adentro',
    angle: 'Nutrición del cartílago',
    hook: 'No todos los colágenos se absorben igual: la clave está en los péptidos bioactivos 🫐',
    body: 'El colágeno de HGW está micronizado para garantizar una asimilación celular superior. Al estar enriquecido con extracto puro de arándano, aporta una dosis masiva de antioxidantes que frenan los radicales libres responsables del deterioro prematuro de ligamentos, articulaciones y piel.',
    suggestedCombo: 'Colágeno Hidrolizado con Arándano HGW',
    cta: 'Pide tu bote de colágeno hoy y comienza tu rutina de nutrición celular.',
    fullMessage: `No todos los colágenos se absorben igual: la clave está en los péptidos bioactivos 🫐✨\n\nEl colágeno de HGW está micronizado para garantizar una asimilación celular superior. Al estar enriquecido con extracto puro de arándano, aporta una dosis masiva de antioxidantes que frenan los radicales libres responsables del deterioro prematuro de ligamentos, articulaciones y piel.\n\n🔹 Nutre tendones y cartílagos\n🔹 Mejora la flexibilidad\n🔹 Aporta firmeza a la piel y brillo al cabello\n\n📲 Haz tu pedido aquí: [WHATSAPP_LINK]`,
    tags: ['#ColagenoConArandano', '#NutricionArticular', '#HGW']
  },
  {
    id: 'cop-inf-3',
    protocolId: 'inflamacion_articular',
    title: 'Termoterapia con Turmalina para Espalda y Rodillas',
    angle: 'Tecnología de bienestar físico',
    hook: '¿Dolor lumbar o pesadez en las rodillas después de un largo día de trabajo? 🦵🔥',
    body: 'Las rodilleras y fajas lumbares de turmalina de HGW no necesitan electricidad ni baterías: reaccionan con la temperatura de tu propio cuerpo emitiendo rayos infrarrojos lejanos y aniones que ayudan a dilatar los capilares y calmar la tensión muscular acumulada.',
    suggestedCombo: 'Faja Lumbar o Rodilleras de Turmalina HGW',
    cta: 'Consulta las tallas disponibles y pide la tuya hoy.',
    fullMessage: `¿Dolor lumbar o pesadez en las rodillas después de un largo día de trabajo? 🦵🔥\n\nLas rodilleras y fajas lumbares de turmalina de HGW no necesitan electricidad ni baterías: reaccionan con la temperatura de tu propio cuerpo emitiendo rayos infrarrojos lejanos y aniones que ayudan a dilatar los capilares y calmar la tensión muscular acumulada.\n\n✅ Alivio térmico natural\n✅ Cómodo y discreto para usar bajo la ropa\n✅ Durabilidad de por vida\n\n📲 Escríbeme para ordenar tu accesorio de turmalina: [WHATSAPP_LINK]`,
    tags: ['#FajaTurmalina', '#RodillerasTurmalina', '#Termoterapia']
  },
  {
    id: 'cop-inf-4',
    protocolId: 'inflamacion_articular',
    title: 'Rutina Matutina Anti-Rigidez para Adultos Activos',
    angle: 'Estilo de vida saludable',
    hook: 'Empieza tus mañanas con agilidad y sin sensación de pesadez en las articulaciones 🌅',
    body: 'Tomar tu café con Ganoderma o Cordyceps junto a una porción de Colágeno con Arándano le brinda a tu sistema músculo-esquelético los aminoácidos y adaptógenos que requiere para mantenerse ágil durante todo el día.',
    suggestedCombo: 'Pack Movilidad: Café Saludable + Colágeno con Arándano',
    cta: 'Escríbeme para armar tu pack matutino.',
    fullMessage: `Empieza tus mañanas con agilidad y sin sensación de pesadez en las articulaciones 🌅🏃‍♀️\n\nTomar tu café con Ganoderma o Cordyceps junto a una porción de Colágeno con Arándano le brinda a tu sistema músculo-esquelético los aminoácidos y adaptógenos que requiere para mantenerse ágil durante todo el día.\n\n📲 Escríbeme y renueva tu vitalidad: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#VidaActiva', '#CuidadoArticular', '#HGWPanama']
  },

  // 4. SALUD VISUAL (4 copys)
  {
    id: 'cop-vis-1',
    protocolId: 'salud_visual',
    title: 'Protege tus Ojos de la Luz Azul & el Cansancio',
    angle: 'Cuidado ocular y pantallas',
    hook: '¿Pasas más de 5 horas al día frente al celular o la computadora? 👁️📱',
    body: 'La luz azul de las pantallas y la radiación ultravioleta generan una alta cantidad de radicales libres en la retina, causando ardor, ojos secos y visión borrosa al final de la jornada.\n\nEl **Polvo de Arándanos con Luteína de HGW** aporta altas concentraciones de antocianinas, pigmentos antioxidantes que nutren los capilares oculares y protegen la mácula del ojo de forma 100% natural.',
    suggestedCombo: 'Polvo de Arándano con Luteína + Caramelos de Arándano HGW',
    cta: 'Escríbeme al WhatsApp y cuida la salud de tus ojos hoy mismo.',
    fullMessage: `¿Pasas más de 5 horas al día frente al celular o la computadora? 👁️📱✨\n\nLa luz azul de las pantallas y la radiación ultravioleta generan una alta cantidad de radicales libres en la retina, causando ardor, ojos secos y visión borrosa al final de la jornada.\n\nEl **Polvo de Arándanos con Luteína de HGW** aporta altas concentraciones de antocianinas, pigmentos antioxidantes que nutren los capilares oculares y protegen la mácula del ojo de forma 100% natural.\n\n🫐 Alivia la fatiga visual y el enrojecimiento\n🫐 Nutre la retina y estimula la agudeza visual\n🫐 Delicioso sabor natural sin azúcares dañinos\n\n📲 Pide tu Polvo de Arándano aquí: [WHATSAPP_LINK] (Distribuidora [NOMBRE])\n\n*Alimento funcional antioxidante.*`,
    tags: ['#SaludVisual', '#ArandanoHGW', '#Luteina', '#CuidadoDeOjos', '#LuzAzul']
  },
  {
    id: 'cop-vis-2',
    protocolId: 'salud_visual',
    title: 'Caramelos de Arándano: Nutrición Ocular que Encanta a Toda la Familia',
    angle: 'Snack saludable para ojos',
    hook: 'El snack funcional que protege la vista de tus hijos mientras estudian 🫐🍬',
    body: 'Los caramelos de arándano HGW combinan el extracto concentrado de blueberry silvestre con vitamina C. Son ideales para llevar en la cartera, mochila o auto, ayudando a humectar la vista y aportar antioxidantes esenciales en cada bocado.',
    suggestedCombo: 'Caramelos de Arándano HGW (Bolsa familiar)',
    cta: 'Pide tus caramelos de arándano por WhatsApp.',
    fullMessage: `El snack funcional que protege la vista de tus hijos mientras estudian 🫐🍬✨\n\nLos caramelos de arándano HGW combinan el extracto concentrado de blueberry silvestre con vitamina C. Son ideales para llevar en la cartera, mochila o auto, ayudando a humectar la vista y aportar antioxidantes esenciales en cada bocado.\n\n✅ Deliciosos y sin excesos de azúcar\n✅ Refuerzo antioxidante para niños y adultos\n✅ Estimula la lubricación ocular\n\n📲 Pide tu bolsa aquí: [WHATSAPP_LINK]`,
    tags: ['#CaramelosDeArandano', '#SnackSaludable', '#OjosSanos']
  },
  {
    id: 'cop-vis-3',
    protocolId: 'salud_visual',
    title: 'Visión Nocturna & Agudeza con Antocianinas Silvestres',
    angle: 'Conducción y fatiga nocturna',
    hook: '¿Te cuesta enfocar cuando manejas de noche o sientes destellos molestos? 🚗🌙',
    body: 'Las antocianinas del arándano favorecen la regeneración de la rodopsina, la proteína que permite a la retina adaptarse a la oscuridad y cambios bruscos de iluminación. Dale a tus ojos el soporte nutricional que necesitan con nuestro Polvo de Arándano concentrado.',
    suggestedCombo: 'Polvo de Arándanos con Luteína HGW',
    cta: 'Escríbeme para solicitar tu bote de polvo de arándano.',
    fullMessage: `¿Te cuesta enfocar cuando manejas de noche o sientes destellos molestos? 🚗🌙\n\nLas antocianinas del arándano favorecen la regeneración de la rodopsina, la proteína que permite a la retina adaptarse a la oscuridad y cambios bruscos de iluminación. Dale a tus ojos el soporte nutricional que necesitan con nuestro Polvo de Arándano concentrado.\n\n📲 Pídelo al WhatsApp: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#VisionNocturna', '#ArandanoPuro', '#SaludOcular']
  },
  {
    id: 'cop-vis-4',
    protocolId: 'salud_visual',
    title: 'Pack Completo de Protección Ocular para Oficinistas y Gamers',
    angle: 'Profesionales digitales',
    hook: 'Si tu trabajo depende de una pantalla, tus ojos merecen este cuidado diario 💻⚡',
    body: 'Combina el Polvo de Arándano en tus batidos matutinos con los Caramelos de Arándano durante tus horas de mayor concentración. Reduce la sequedad, el parpadeo constante y la pesadez en los párpados.',
    suggestedCombo: 'Dúo Visión Pro: Polvo de Arándano + Caramelos',
    cta: 'Solicita tu Dúo Visión Pro con descuento especial.',
    fullMessage: `Si tu trabajo depende de una pantalla, tus ojos merecen este cuidado diario 💻⚡👁️\n\nCombina el Polvo de Arándano en tus batidos matutinos con los Caramelos de Arándano durante tus horas de mayor concentración. Reduce la sequedad, el parpadeo constante y la pesadez en los párpados.\n\n📲 Contáctame aquí: [WHATSAPP_LINK] (Distribuidora [NOMBRE])`,
    tags: ['#OficinaSaludable', '#GamersSalud', '#ArandanoHGW']
  },

  // 5. HÍGADO & METABOLISMO (4 copys)
  {
    id: 'cop-hig-1',
    protocolId: 'higado_metabolismo',
    title: 'Respaldo Natural para tu Hígado & Metabolismo',
    angle: 'Apoyo hepático con Ganoderma',
    hook: 'Dale a tu hígado el respiro que necesita con el poder del Ganoderma ☕🍃',
    body: 'El hígado es el laboratorio principal de tu cuerpo: filtra todo lo que comes, bebes y respiras. Cuando se sobrecarga con grasas y estrés, la digestión se vuelve lenta y la energía decae.\n\nEl **Café con Ganoderma Lucidum de HGW** aporta triterpenos y polisacáridos bioactivos que favorecen la función hepática normal y el metabolismo saludable de las grasas.',
    suggestedCombo: 'Café con Ganoderma Lucidum + LactiBerry HGW',
    cta: 'Descubre cómo reemplazar tu café diario por una opción que cuida tu hígado.',
    fullMessage: `Dale a tu hígado el respiro que necesita con el poder del Ganoderma ☕🍃\n\nEl hígado es el laboratorio principal de tu cuerpo: filtra todo lo que comes, bebes y respiras. Cuando se sobrecarga con grasas y estrés, la digestión se vuelve lenta y la energía decae.\n\nEl **Café con Ganoderma Lucidum de HGW** aporta triterpenos y polisacáridos bioactivos que favorecen la función hepática normal y el metabolismo saludable de las grasas.\n\n☕ Sabor gourmet exquisito\n🌿 Apoyo adaptógeno para la función hepática\n⚡ Energía estable sin acidez estomacal\n\n📲 Escríbeme y haz tu pedido: [WHATSAPP_LINK] (Código: [CODIGO])\n\n*Suplemento nutricional coadyuvante.*`,
    tags: ['#GanodermaHGW', '#SaludHepatica', '#CafeSaludable', '#Metabolismo']
  },
  {
    id: 'cop-hig-2',
    protocolId: 'higado_metabolismo',
    title: 'Digestión de Grasas sin Pesadez Post-Almuerzo',
    angle: 'Metabolismo lipídico',
    hook: '¿Sientes modorra y digestión pesada después de comer comidas con grasa? 🍽️',
    body: 'Cuando el hígado y la vesícula no procesan eficientemente los lípidos, sobreviene la somnolencia y la inflamación. Una taza de Café con Ganoderma Lucidum tras el almuerzo estimula la producción normal de bilis y agiliza la digestión.',
    suggestedCombo: 'Café con Ganoderma Lucidum HGW',
    cta: 'Pide tu caja de Café Ganoderma hoy mismo.',
    fullMessage: `¿Sientes modorra y digestión pesada después de comer comidas con grasa? 🍽️☕\n\nCuando el hígado y la vesícula no procesan eficientemente los lípidos, sobreviene la somnolencia y la inflamación. Una taza de Café con Ganoderma Lucidum tras el almuerzo estimula la producción normal de bilis y agiliza la digestión.\n\n📲 Haz tu pedido por WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#GanodermaLucidum', '#DigestionDeGrasas', '#HGW']
  },
  {
    id: 'cop-hig-3',
    protocolId: 'higado_metabolismo',
    title: 'Sincronía Intestino-Hígado con LactiBerry y Ganoderma',
    angle: 'Desintoxicación integral',
    hook: 'El secreto de una piel luminosa y un metabolismo activo: depurar el eje hepático-intestinal 🌟',
    body: 'Si el colon está congestionado, el hígado recibe una carga doble de toxinas. Al combinar la repoblación de probióticos de LactiBerry con el soporte celular del Ganoderma, liberas a tu hígado para que cumpla sus más de 500 funciones vitales.',
    suggestedCombo: 'Dúo Eje Hepático: LactiBerry + Café Ganoderma',
    cta: 'Escríbeme para iniciar tu plan de desintoxicación metabólica.',
    fullMessage: `El secreto de una piel luminosa y un metabolismo activo: depurar el eje hepático-intestinal 🌟🌿\n\nSi el colon está congestionado, el hígado recibe una carga doble de toxinas. Al combinar la repoblación de probióticos de LactiBerry con el soporte celular del Ganoderma, liberas a tu hígado para que cumpla sus más de 500 funciones vitales.\n\n📲 Asesoría y pedidos: [WHATSAPP_LINK] (Asesora [NOMBRE])`,
    tags: ['#DetoxMetabolico', '#LactiBerry', '#GanodermaHGW']
  },
  {
    id: 'cop-hig-4',
    protocolId: 'higado_metabolismo',
    title: 'Energía Limpia sin Sobrecargar tu Sistema',
    angle: 'Vitalidad matutina',
    hook: 'Cambia las bebidas energéticas artificiales por el poder milenario del Ganoderma ☕⚡',
    body: 'El hongo Reishi (Ganoderma) es venerado como el rey de los adaptógenos. Aporta vigor sostenible sin provocar taquicardia ni picos de cortisol, cuidando tus células hepáticas en cada sorbo.',
    suggestedCombo: 'Café con Ganoderma HGW (Caja de 15 sobres)',
    cta: 'Pide tu caja de café adaptógeno aquí.',
    fullMessage: `Cambia las bebidas energéticas artificiales por el poder milenario del Ganoderma ☕⚡✨\n\nEl hongo Reishi (Ganoderma) es venerado como el rey de los adaptógenos. Aporta vigor sostenible sin provocar taquicardia ni picos de cortisol, cuidando tus células hepáticas en cada sorbo.\n\n📲 Solicítalo aquí: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#EnergiaLimpia', '#Adaptogenos', '#SaludTotal']
  },

  // 6. SALUD RENAL & VÍAS URINARIAS (4 copys)
  {
    id: 'cop-ren-1',
    protocolId: 'salud_renal',
    title: 'Vías Urinarias Limpias & Equilibrio Renal',
    angle: 'Cuidado renal con arándano y cordyceps',
    hook: 'Protección natural para tus vías urinarias y riñones 💧🫐',
    body: 'Las molestias urinarias recurrentes y la pesadez renal pueden evitarse nutriendo adecuadamente el organismo. El extracto de arándano silvestre HGW contiene proantocianidinas que impiden que las bacterias se adhieran al tracto urinario, mientras que el Cordyceps aporta vigor a los túbulos renales.',
    suggestedCombo: 'Polvo de Arándanos + Café con Cordyceps HGW',
    cta: 'Escríbeme para solicitar tu combo de bienestar renal con envío seguro.',
    fullMessage: `Protección natural para tus vías urinarias y riñones 💧🫐✨\n\nLas molestias urinarias recurrentes y la pesadez renal pueden evitarse nutriendo adecuadamente el organismo. El extracto de arándano silvestre HGW contiene proantocianidinas que impiden que las bacterias se adhieran al tracto urinario, mientras que el Cordyceps aporta vigor a los túbulos renales.\n\n🔹 Favorece la eliminación de líquidos\n🔹 Mantiene las vías urinarias protegidas\n🔹 Antioxidantes puros de alta concentración\n\n📲 Contáctame al WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#SaludRenal', '#ViasUrinarias', '#ArandanoPuro', '#HGW']
  },
  {
    id: 'cop-ren-2',
    protocolId: 'salud_renal',
    title: 'El Poder de las Proantocianidinas de Arándano Tipo A',
    angle: 'Ciencia botánica y prevención',
    hook: '¿Molestias al orinar con frecuencia? Descubre el escudo natural del Arándano silvestre 🛡️',
    body: 'Las proantocianidinas del arándano actúan como un recubrimiento anti-adherente en las paredes de la vejiga y uréteres. Al no poder fijarse, los microorganismos son expulsados de forma natural con el flujo urinario.',
    suggestedCombo: 'Polvo de Arándanos HGW',
    cta: 'Pide tu polvo de arándano para mantener tus vías urinarias saludables.',
    fullMessage: `¿Molestias al orinar con frecuencia? Descubre el escudo natural del Arándano silvestre 🛡️🫐\n\nLas proantocianidinas del arándano actúan como un recubrimiento anti-adherente en las paredes de la vejiga y uréteres. Al no poder fijarse, los microorganismos son expulsados de forma natural con el flujo urinario.\n\n📲 Haz tu pedido aquí: [WHATSAPP_LINK] (Código distribuidor: [CODIGO])`,
    tags: ['#Proantocianidinas', '#CuidadoUrinario', '#ArandanoHGW']
  },
  {
    id: 'cop-ren-3',
    protocolId: 'salud_renal',
    title: 'Cordyceps Sinensis: Tónico Renal Ancestral',
    angle: 'Medicina tradicional adaptógena',
    hook: 'En la herbolaria milenaria, el Cordyceps es el rey del meridiano del riñón 🫘⚡',
    body: 'Apoya el equilibrio hídrico, favorece la correcta filtración y combate la retención de líquidos en piernas y tobillos. Disfrútalo en un delicioso café soluble cada mañana.',
    suggestedCombo: 'Café con Cordyceps Sinensis HGW',
    cta: 'Escríbeme para solicitar tu café con Cordyceps.',
    fullMessage: `En la herbolaria milenaria, el Cordyceps es el rey del meridiano del riñón 🫘⚡\n\nApoya el equilibrio hídrico, favorece la correcta filtración y combate la retención de líquidos en piernas y tobillos. Disfrútalo en un delicioso café soluble cada mañana.\n\n📲 Pídelo al WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#CordycepsRenal', '#RetencionDeLiquidos', '#HGWPanama']
  },
  {
    id: 'cop-ren-4',
    protocolId: 'salud_renal',
    title: 'Hidratación Celular + Nutrición Renal para Mujeres y Hombres',
    angle: 'Hábito diario de salud',
    hook: 'Un vaso de agua con Polvo de Arándano al despertar es el mejor regalo para tus riñones 💧',
    body: 'Fácil de preparar, con sabor refrescante y sin azúcares procesados. Ayuda a mantener tu sistema urinario limpio, alcalinizado y libre de impurezas.',
    suggestedCombo: 'Polvo de Arándano + LactiBerry HGW',
    cta: 'Escríbeme para ordenar tu tratamiento.',
    fullMessage: `Un vaso de agua con Polvo de Arándano al despertar es el mejor regalo para tus riñones 💧🫐\n\nFácil de preparar, con sabor refrescante y sin azúcares procesados. Ayuda a mantener tu sistema urinario limpio, alcalinizado y libre de impurezas.\n\n📲 Escríbeme: [WHATSAPP_LINK] (Asesora [NOMBRE])`,
    tags: ['#HidratacionSaludable', '#RinonesSanos', '#NutricionHGW']
  },

  // 7. PULMONES & RESPIRATORIO (4 copys)
  {
    id: 'cop-pul-1',
    protocolId: 'pulmones_respiratorio',
    title: 'Oxigenación Celular & Fortaleza Pulmonar con Cordyceps',
    angle: 'Vigor respiratorio adaptógeno',
    hook: 'Respira con libertad y renueva tu energía pulmonar con Cordyceps Sinensis 🫁✨',
    body: 'El Cordyceps Sinensis es conocido en Oriente como el "hongo de la longevidad y el aliento vital". Ayuda a optimizar la captación de oxígeno en los pulmones, mejora la resistencia ante el esfuerzo físico y protege el tejido respiratorio de agresiones ambientales.',
    suggestedCombo: 'Café con Cordyceps Sinensis + Caramelos de Arándano HGW',
    cta: 'Pide tu caja de Café Cordyceps y siente la diferencia en tu respiración.',
    fullMessage: `Respira con libertad y renueva tu energía pulmonar con Cordyceps Sinensis 🫁✨\n\nEl Cordyceps Sinensis es conocido en Oriente como el "hongo de la longevidad y el aliento vital". Ayuda a optimizar la captación de oxígeno en los pulmones, mejora la resistencia ante el esfuerzo físico y protege el tejido respiratorio de agresiones ambientales.\n\n🫁 Apoya la capacidad y oxigenación pulmonar\n⚡ Aumenta la resistencia y vitalidad celular\n🌿 100% natural, seguro y libre de aditivos artificiales\n\n📲 Solicítalo hoy mismo aquí: [WHATSAPP_LINK] (Código de socia: [CODIGO])\n\n*Complemento alimenticio coadyuvante.*`,
    tags: ['#CordycepsHGW', '#SaludPulmonar', '#OxigenacionCelular', '#VigorNatural']
  },
  {
    id: 'cop-pul-2',
    protocolId: 'pulmones_respiratorio',
    title: 'Protección Bronquial ante Cambios de Clima y Contaminación',
    angle: 'Cuidado de vías respiratorias',
    hook: '¿Sientes el pecho cerrado o cansancio al subir escaleras? Cuida tus pulmones 🌫️🫁',
    body: 'Los bioactivos del hongo Cordyceps ayudan a relajar la musculatura lisa bronquial, facilitando una respiración profunda y serena. Acompañado de los antioxidantes de arándano, protege tus vías aéreas frente al polvo y el aire acondicionado.',
    suggestedCombo: 'Café con Cordyceps + Caramelos de Arándano',
    cta: 'Escríbeme para solicitar tu combo respiratorio.',
    fullMessage: `¿Sientes el pecho cerrado o cansancio al subir escaleras? Cuida tus pulmones 🌫️🫁\n\nLos bioactivos del hongo Cordyceps ayudan a relajar la musculatura lisa bronquial, facilitando una respiración profunda y serena. Acompañado de los antioxidantes de arándano, protege tus vías aéreas frente al polvo y el aire acondicionado.\n\n📲 Pídelo al WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#ViasRespiratorias', '#Cordyceps', '#AireLimpio']
  },
  {
    id: 'cop-pul-3',
    protocolId: 'pulmones_respiratorio',
    title: 'Rendimiento Deportivo y Capacidad de Oxígeno',
    angle: 'Atletas y personas activas',
    hook: '¿Haces ejercicio y te falta el aire rápidamente? Descubre el secreto de los atletas de alto rendimiento 🏃‍♂️💨',
    body: 'El Cordyceps Sinensis aumenta la producción de ATP (energía celular) y apoya el VO2 máx (consumo máximo de oxígeno). Es el suplemento adaptógeno ideal para entrenar con mayor vigor y recuperarte más rápido.',
    suggestedCombo: 'Café con Cordyceps HGW',
    cta: 'Pide tu Café Cordyceps y potencia tus entrenamientos.',
    fullMessage: `¿Haces ejercicio y te falta el aire rápidamente? Descubre el secreto de los atletas de alto rendimiento 🏃‍♂️💨\n\nEl Cordyceps Sinensis aumenta la producción de ATP (energía celular) y apoya el VO2 máx (consumo máximo de oxígeno). Es el suplemento adaptógeno ideal para entrenar con mayor vigor y recuperarte más rápido.\n\n📲 Haz tu pedido aquí: [WHATSAPP_LINK] (Código [CODIGO])`,
    tags: ['#RendimientoDeportivo', '#CordycepsFitness', '#OxigenoPuro']
  },
  {
    id: 'cop-pul-4',
    protocolId: 'pulmones_respiratorio',
    title: 'Caramelos de Arándano: Suavidad para la Garganta Irritada',
    angle: 'Confort de garganta',
    hook: 'Alivia la resequedad de garganta causada por el aire acondicionado o hablar en público 🎤🫐',
    body: 'Con extracto puro de arándano silvestre y vitamina C, humectan las cuerdas vocales y brindan frescura inmediata en cualquier momento del día.',
    suggestedCombo: 'Caramelos de Arándano HGW',
    cta: 'Lleva tu paquete de caramelos a todas partes.',
    fullMessage: `Alivia la resequedad de garganta causada por el aire acondicionado o hablar en público 🎤🫐🍬\n\nCon extracto puro de arándano silvestre y vitamina C, humectan las cuerdas vocales y brindan frescura inmediata en cualquier momento del día.\n\n📲 Pídelos al WhatsApp: [WHATSAPP_LINK]`,
    tags: ['#GargantaFresca', '#CaramelosHGW', '#VozClara']
  },

  // 8. SISTEMA INMUNOLÓGICO & DEFENSAS (4 copys)
  {
    id: 'cop-inm-1',
    protocolId: 'sistema_inmunologico',
    title: 'Blindaje Inmune Natural para Toda la Familia',
    angle: 'Defensas y vitalidad',
    hook: '¿Cambios de clima y defensas bajas? Refuerza tu sistema inmunológico 🛡️👨‍👩‍👧',
    body: 'Tu sistema inmune necesita nutrientes clave para protegerte todos los días. Nuestro combo inmunológico integra **Caramelos de Arándano con Vitamina C**, **Café con Ganoderma** y **LactiBerry**, estimulando tus defensas naturales desde el intestino hasta cada célula de tu cuerpo.',
    suggestedCombo: 'Caramelos de Arándano + Café Ganoderma + LactiBerry HGW',
    cta: 'Escríbeme y protege a tu familia con productos naturales certificados.',
    fullMessage: `¿Cambios de clima y defensas bajas? Refuerza tu sistema inmunológico 🛡️👨‍👩‍👧✨\n\nTu sistema inmune necesita nutrientes clave para protegerte todos los días. Nuestro combo inmunológico integra **Caramelos de Arándano con Vitamina C**, **Café con Ganoderma** y **LactiBerry**, estimulando tus defensas naturales desde el intestino hasta cada célula de tu cuerpo.\n\n🔹 Potente escudo antioxidante\n🔹 Refuerza la microbiota protectora\n🔹 Delicioso para niños, jóvenes y adultos\n\n📲 Escríbeme y pide tu combo familiar: [WHATSAPP_LINK] (Distribuidora [NOMBRE])`,
    tags: ['#SistemaInmune', '#DefensasFuertes', '#Ganoderma', '#VitaminaC', '#SaludFamiliar']
  },
  {
    id: 'cop-inm-2',
    protocolId: 'sistema_inmunologico',
    title: 'El 70% de tus Defensas Nacen en el Intestino',
    angle: 'Microbiota e inmunidad',
    hook: '¿Sabías que la primera barrera inmune de tu cuerpo está en tu flora digestiva? 🦠🛡️',
    body: 'Cuando tu intestino tiene las bacterias correctas, los patógenos no pueden instalarse. LactiBerry de HGW reimplanta millones de probióticos benéficos potenciados con el poder antioxidante del arándano para mantener tus defensas al 100%.',
    suggestedCombo: 'LactiBerry HGW',
    cta: 'Pide tu tratamiento de probióticos hoy mismo.',
    fullMessage: `¿Sabías que la primera barrera inmune de tu cuerpo está en tu flora digestiva? 🦠🛡️✨\n\nCuando tu intestino tiene las bacterias correctas, los patógenos no pueden instalarse. LactiBerry de HGW reimplanta millones de probióticos benéficos potenciados con el poder antioxidante del arándano para mantener tus defensas al 100%.\n\n📲 Pide tu LactiBerry aquí: [WHATSAPP_LINK]`,
    tags: ['#MicrobiotaInmune', '#LactiBerry', '#DefensasNaturales']
  },
  {
    id: 'cop-inm-3',
    protocolId: 'sistema_inmunologico',
    title: 'Beta-Glucanos de Ganoderma: Modulación Celular Inteligente',
    angle: 'Inmunomodulación avanzada',
    hook: 'No solo estimules tus defensas: enséñales a responder con equilibrio 🧠🍄',
    body: 'El Ganoderma Lucidum contiene beta-glucanos que no sobrecargan el sistema inmune, sino que lo modulan para responder con precisión ante agresiones externas sin generar inflamaciones desmedidas.',
    suggestedCombo: 'Café con Ganoderma Lucidum HGW',
    cta: 'Escríbeme para solicitar tu café con Ganoderma.',
    fullMessage: `No solo estimules tus defensas: enséñales a responder con equilibrio 🧠🍄☕\n\nEl Ganoderma Lucidum contiene beta-glucanos que no sobrecargan el sistema inmune, sino que lo modulan para responder con precisión ante agresiones externas sin generar inflamaciones desmedidas.\n\n📲 Contáctame al WhatsApp: [WHATSAPP_LINK] (Código [CODIGO])`,
    tags: ['#GanodermaInmune', '#ModulacionCelular', '#HGW']
  },
  {
    id: 'cop-inm-4',
    protocolId: 'sistema_inmunologico',
    title: 'Pack Escudo Diario para la Escuela y el Trabajo',
    angle: 'Prevención diaria',
    hook: 'Evita contagios recurrentes en casa con este escudo botánico de triple acción 🛡️✨',
    body: 'Un sobre de Café Ganoderma para los adultos, caramelos de arándano para los pequeños y LactiBerry para toda la familia. La forma más deliciosa de blindar el hogar.',
    suggestedCombo: 'Pack Escudo Familiar HGW',
    cta: 'Solicita tu Pack Escudo Familiar con precio de distribuidor.',
    fullMessage: `Evita contagios recurrentes en casa con este escudo botánico de triple acción 🛡️✨👨‍👩‍👦\n\nUn sobre de Café Ganoderma para los adultos, caramelos de arándano para los pequeños y LactiBerry para toda la familia. La forma más deliciosa de blindar el hogar.\n\n📲 Escríbeme hoy mismo: [WHATSAPP_LINK] (Asesora [NOMBRE])`,
    tags: ['#EscudoFamiliar', '#SaludIntegral', '#HGWPanama']
  },

  // 9. NUTRICIÓN CELULAR COADYUVANTE EN DESAFÍOS CRÓNICOS (4 copys)
  {
    id: 'cop-cro-1',
    protocolId: 'coadyuvante_cronico',
    title: 'Nutrición Celular Coadyuvante en Desafíos de Salud',
    angle: 'Soporte ético y nutrición ortomolecular',
    hook: 'Cuando el cuerpo enfrenta desafíos crónicos, la nutrición celular marca la diferencia 🧬🌿',
    body: 'Acompañar los tratamientos médicos con una nutrición rica en antioxidantes de alto impacto ayuda a combatir el estrés oxidativo, apoya la regeneración de los tejidos y mejora la calidad de vida diaria.\n\nLos extractos botánicos de **Arándano, Ganoderma y Colágeno HGW** brindan micronutrientes bioactivos de primera línea para acompañar a tu organismo con respeto y vitalidad.',
    suggestedCombo: 'Pack Nutrición Celular: Polvo de Arándano + Café Ganoderma + Colágeno HGW',
    cta: 'Contáctame para recibir una orientación personalizada sobre estos complementos nutricionales.',
    fullMessage: `Cuando el cuerpo enfrenta desafíos crónicos, la nutrición celular marca la diferencia 🧬🌿✨\n\nAcompañar los tratamientos médicos con una nutrición rica en antioxidantes de alto impacto ayuda a combatir el estrés oxidativo, apoya la regeneración de los tejidos y mejora la calidad de vida diaria.\n\nLos extractos botánicos de **Arándano, Ganoderma y Colágeno HGW** brindan micronutrientes bioactivos de primera línea para acompañar a tu organismo con respeto y vitalidad.\n\n🔹 Combate los radicales libres y el desgaste celular\n🔹 Favorece la microcirculación y el descanso\n🔹 100% complementario y respetuoso con tus indicaciones médicas\n\n📲 Escríbeme para una asesoría cordial y personalizada: [WHATSAPP_LINK] (Código oficial: [CODIGO])\n\n*Nota ética: Los productos HGW son complementos nutricionales coadyuvantes. No son fármacos ni sustituyen prescripciones o tratamientos médicos.*`,
    tags: ['#NutricionCelular', '#Coadyuvante', '#AntioxidantesHGW', '#CalidadDeVida', '#SaludEtica']
  },
  {
    id: 'cop-cro-2',
    protocolId: 'coadyuvante_cronico',
    title: 'Frenar el Estrés Oxidativo: La Clave Antienvejecimiento y Vitalidad',
    angle: 'Antioxidantes de alto espectro',
    hook: 'Los radicales libres aceleran el desgaste de tus órganos: combátelos con arándano puro 🫐🛡️',
    body: 'El arándano silvestre posee uno de los puntajes ORAC (capacidad de absorción de radicales de oxígeno) más altos de la naturaleza. Tomarlo a diario brinda a tus células la protección que necesitan para mantenerse fuertes y funcionales.',
    suggestedCombo: 'Polvo de Arándanos con Luteína HGW',
    cta: 'Pide tu Polvo de Arándano y fortalece tu nutrición celular.',
    fullMessage: `Los radicales libres aceleran el desgaste de tus órganos: combátelos con arándano puro 🫐🛡️✨\n\nEl arándano silvestre posee uno de los puntajes ORAC (capacidad de absorción de radicales de oxígeno) más altos de la naturaleza. Tomarlo a diario brinda a tus células la protección que necesitan para mantenerse fuertes y funcionales.\n\n📲 Haz tu pedido aquí: [WHATSAPP_LINK] (Código [CODIGO])`,
    tags: ['#EstresOxidativo', '#PuntajeORAC', '#AntioxidantesPuros']
  },
  {
    id: 'cop-cro-3',
    protocolId: 'coadyuvante_cronico',
    title: 'Acompañamiento Nutricional Respetuoso y Sinérgico',
    angle: 'Coadyuvante ético',
    hook: 'Nunca dejes tus medicamentos: súmale la mejor nutrición botánica a tu día a día 🤝🌱',
    body: 'La medicina moderna trata los síntomas, pero la nutrición celular le da a tus órganos los bloques de construcción necesarios para su reparación. Los adaptógenos de HGW actúan en perfecta armonía con tu estilo de vida.',
    suggestedCombo: 'Pack Bienestar Integral HGW (Café Adaptógeno + Arándano + Colágeno)',
    cta: 'Escríbeme para conversar sobre cómo integrar estos suplementos a tu rutina.',
    fullMessage: `Nunca dejes tus medicamentos: súmale la mejor nutrición botánica a tu día a día 🤝🌱✨\n\nLa medicina moderna trata los síntomas, pero la nutrición celular le da a tus órganos los bloques de construcción necesarios para su reparación. Los adaptógenos de HGW actúan en perfecta armonía con tu estilo de vida.\n\n📲 Escríbeme con total confianza: [WHATSAPP_LINK] (Asesora [NOMBRE])\n\n*Suplementos nutricionales coadyuvantes.*`,
    tags: ['#SaludEtica', '#NutricionCoadyuvante', '#BienestarIntegral']
  },
  {
    id: 'cop-cro-4',
    protocolId: 'coadyuvante_cronico',
    title: 'Recupera la Vitalidad y la Energía para Disfrutar a Tu Familia',
    angle: 'Bienestar y calidad de vida',
    hook: 'Vivir con vitalidad, buen ánimo y descanso reparador es posible 🌅💖',
    body: 'La sinergia de Ganoderma, Cordyceps, Turmalina y Arándano ayuda a mejorar la oxigenación, calmar la sensación de fatiga crónica y brindar un confort integral en el día a día.',
    suggestedCombo: 'Combo Vitalidad Celular HGW',
    cta: 'Escríbeme al WhatsApp para conocer los testimonios de personas reales.',
    fullMessage: `Vivir con vitalidad, buen ánimo y descanso reparador es posible 🌅💖✨\n\nLa sinergia de Ganoderma, Cordyceps, Turmalina y Arándano ayuda a mejorar la oxigenación, calmar la sensación de fatiga crónica y brindar un confort integral en el día a día.\n\n📲 Escríbeme y demos el primer paso juntos: [WHATSAPP_LINK] (Código: [CODIGO])`,
    tags: ['#CalidadDeVida', '#EnergiaCelular', '#HGW']
  }
];

export function buildHealthProtocolMasterPrompt(protocol: HealthProtocolInfo, contact: ContactData): string {
  const waLink = contact.enlaceWhatsapp || `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

  return `================================================================================
PROMPT MAESTRO: PROTOCOLO DE BIENESTAR Y NUTRICIÓN CELULAR HGW (SIN PROMESAS MÉDICAS)
================================================================================

Actúa como un Especialista en Comunicación de Nutracéutica, Salud Preventiva y Copywriting Ético para Health Green World (HGW).

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

4. ESTRUCTURA DE LOS COPYS A GENERAR:
- Genera 5 copys altamente persuasivos, cálidos y profesionales para WhatsApp, Instagram y Facebook.
- Estructura: Gancho (Hook reflexivo o de identificación), Explicación educativa sencilla, Beneficios botánicos permitidos, y Llamado a la Acción (CTA) directo con el enlace de WhatsApp de ${contact.nombre}.`;
}
