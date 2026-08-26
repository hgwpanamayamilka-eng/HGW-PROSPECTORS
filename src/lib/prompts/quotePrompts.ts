import { QuoteCategory, ImageFormat, GeneratedQuote } from '../../types';

export function buildMasterQuotePrompt(phrase: string, category: QuoteCategory, emotion: string, format: ImageFormat): string {
  return `Create a premium inspirational social media image.

Main concept:
"${phrase}"

Category / Theme:
${category}

Visual emotion:
${emotion || 'Inspiración, determinación, liderazgo y superación personal'}

Art Direction Instructions:
- Create an elegant, emotionally powerful and inspiring composition.
- The phrase must be the visual focus, integrated seamlessly with artistic typography.
- Use highly readable, modern typography.
- The text must be correctly written in Spanish with proper accents and punctuation.
- Do not misspell words.
- Do not add random text or unrelated logos.
- Create a complete full-bleed composition without white borders or empty margins.
- No empty spaces, no unused canvas areas, no watermark.
- Use professional lighting, warm cinematic color grading, and visual storytelling.
- Create an image perfectly formatted for high engagement on social media.

Format: [${format === '1:1' ? '1:1 Square Full Bleed' : '9:16 Vertical Full Bleed'}].`;
}

// 30 rich motivational quotes per theme generator
export function generate30Quotes(category: QuoteCategory, format: ImageFormat): GeneratedQuote[] {
  const quoteTemplates: Record<QuoteCategory, Array<{ phrase: string; emotion: string; visualIdea: string }>> = {
    Emprendimiento: [
      { phrase: 'El éxito no es cuestión de suerte, es cuestión de constancia y acción diaria.', emotion: 'Determinación', visualIdea: 'Emprendedor visualizando el horizonte de una gran ciudad al amanecer.' },
      { phrase: 'Tu negocio crecerá en la misma medida en que crezcas tú como persona.', emotion: 'Crecimiento personal', visualIdea: 'Camino ascendente en la montaña con luz dorada al final.' },
      { phrase: 'No esperes el momento perfecto; toma el momento y hazlo perfecto.', emotion: 'Empoderamiento', visualIdea: 'Manos sosteniendo una brújula dorada en un mapa antiguo.' },
      { phrase: 'El mayor riesgo en la vida es no arriesgarse a construir tus propios sueños.', emotion: 'Audacia', visualIdea: 'Puente moderno iluminado conectando dos orillas en la noche.' },
      { phrase: 'Cada llamada, cada reunión y cada ‘no’ te acerca más a tu gran victoria.', emotion: 'Resiliencia', visualIdea: 'Escalones de piedra iluminados por rayos de sol entre la niebla.' },
      { phrase: 'Un líder no busca seguidores; crea nuevos líderes que transformen el mundo.', emotion: 'Liderazgo visionario', visualIdea: 'Grupo de personas en la cima de una colina celebrando juntos.' },
      { phrase: 'La diferencia entre un sueño y una meta es una fecha y un plan de acción.', emotion: 'Claridad', visualIdea: 'Cuaderno de cuero elegante con pluma dorada y café caliente.' },
      { phrase: 'Trabaja hoy por lo que otros no quieren, para vivir mañana como otros no pueden.', emotion: 'Sacrificio y recompensa', visualIdea: 'Atleta o profesional contemplando el amanecer en la ciudad.' },
      { phrase: 'La abundancia comienza en la mente: cree que lo mereces y acciona en consecuencia.', emotion: 'Prosperidad', visualIdea: 'Árbol majestuoso con hojas doradas brillando bajo el sol.' },
      { phrase: 'El network marketing no es vender un producto, es ofrecer una oportunidad de libertad.', emotion: 'Libertad financiera', visualIdea: 'Persona sonriente con los brazos abiertos frente al mar.' },
      { phrase: 'Tus resultados de hoy son el reflejo de tus decisiones de ayer. Decide ganar.', emotion: 'Responsabilidad', visualIdea: 'Ajedrez de cristal con la reina avanzando con seguridad.' },
      { phrase: 'El miedo te paraliza o te impulsa; tú decides de qué lado de la historia estar.', emotion: 'Valentía', visualIdea: 'Faro iluminando un mar bravío con luz firme.' },
      { phrase: 'No construyas un negocio para sobrevivir, construye un legado para trascender.', emotion: 'Trascendencia', visualIdea: 'Cielo estrellado infinito sobre siluetas de rascacielos.' },
      { phrase: 'La consistencia supera al talento cuando el talento no es consistente.', emotion: 'Disciplina', visualIdea: 'Gota de agua cayendo rítmicamente sobre una roca pulida.' },
      { phrase: 'Cada día que te levantas tienes dos opciones: volver a dormir o salir a conquistar.', emotion: 'Energía', visualIdea: 'Sol naciente en tonos naranjas y dorados sobre las colinas.' },
      { phrase: 'La mejor inversión que puedes hacer en tu vida es en tu propia mente y salud.', emotion: 'Sabiduría', visualIdea: 'Biblioteca moderna iluminada con luz natural cálida.' },
      { phrase: 'Si quieres resultados diferentes, empieza a rodearte de personas que te inspiren a crecer.', emotion: 'Sinergia', visualIdea: 'Círculo de personas en una mesa de cristal compartiendo ideas.' },
      { phrase: 'El fracaso no es lo opuesto al éxito; es parte fundamental del camino hacia él.', emotion: 'Aprendizaje', visualIdea: 'Semilla brotando con fuerza a través de la tierra fértil.' },
      { phrase: 'El plan de ganancia mutua: cuando ayudas a otros a ganar, tu éxito es inevitable.', emotion: 'Generosidad', visualIdea: 'Dos manos unidas sosteniendo una luz brillante compartida.' },
      { phrase: 'No cuentes los días, haz que cada día cuente para tus metas financieras.', emotion: 'Enfoque', visualIdea: 'Reloj de arena elegante con arena dorada brillando.' },
      { phrase: 'Tu historia de superación será la inspiración que alguien más necesita para empezar.', emotion: 'Inspiración', visualIdea: 'Escenario iluminado con silueta de una persona inspiradora.' },
      { phrase: 'Celebra cada pequeño logro; los grandes imperios se construyen ladrillo a ladrillo.', emotion: 'Gratitud', visualIdea: 'Castillo moderno en lo alto de una colina iluminada.' },
      { phrase: 'La duda destruye más sueños que el propio fracaso. Confía en tu potencial.', emotion: 'Autoconfianza', visualIdea: 'Espejo reflejando a una persona con mirada decidida y segura.' },
      { phrase: 'Tu pasión es tu combustible; tu disciplina es el volante hacia la meta.', emotion: 'Pasión', visualIdea: 'Auto deportivo de lujo en una carretera despejada al atardecer.' },
      { phrase: 'El éxito ama la velocidad de implementación: aprende, aplica y duplica.', emotion: 'Acción rápida', visualIdea: 'Rayo de luz dorada cruzando el espacio con velocidad.' },
      { phrase: 'No busques la aprobación de los demás cuando Dios ya te dio la capacidad de triunfar.', emotion: 'Fe y convicción', visualIdea: 'Persona en la cima con luz divina descendiendo suavemente.' },
      { phrase: 'El compromiso no es negociable cuando tienes claras las razones por las que empezaste.', emotion: 'Compromiso', visualIdea: 'Ancla dorada fuerte sobre pedestal de mármol pulido.' },
      { phrase: 'Convierte tus excusas en tu mayor testimonio de victoria.', emotion: 'Superación', visualIdea: 'Cadena rota liberando una paloma blanca hacia el cielo.' },
      { phrase: 'La riqueza no se mide solo por lo que tienes, sino por la paz y salud con la que vives.', emotion: 'Bienestar integral', visualIdea: 'Lago sereno en las montañas con reflejo cristalino.' },
      { phrase: 'Hoy es el día para dar el siguiente paso. Tu futuro te está esperando.', emotion: 'Llamado a la acción', visualIdea: 'Puerta abierta hacia un paisaje lleno de luz, flores y éxito.' }
    ],
    Éxito: [
      { phrase: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día sin rendirse.', emotion: 'Perseverancia', visualIdea: 'Monedas doradas y escalones ascendentes hacia la cima.' },
      { phrase: 'Los grandes logros no son fruto de la casualidad, sino del compromiso inquebrantable.', emotion: 'Excelencia', visualIdea: 'Trofeo de cristal y oro bajo luz cenital dramática.' },
      { phrase: 'Alcanzarás la cumbre cuando tu deseo de triunfar sea mayor que tu miedo a caer.', emotion: 'Coraje', visualIdea: 'Alpinista en la cima más alta contemplando las nubes.' },
      { phrase: 'El éxito verdadero deja huellas para que otros también puedan alcanzarlo.', emotion: 'Generosidad', visualIdea: 'Huellas doradas iluminadas en un sendero de bosque verde.' },
      { phrase: 'La excelencia no es un acto, es un hábito diario que marca la diferencia.', emotion: 'Maestría', visualIdea: 'Escultura de mármol pulida meticulosamente bajo luz suave.' },
      { phrase: 'Mide tu éxito por los obstáculos que has superado para llegar hasta aquí.', emotion: 'Orgullo sano', visualIdea: 'Muro de piedra superado con flores naciendo en la cúspide.' },
      { phrase: 'El éxito sabe mejor cuando se comparte con las personas que amas.', emotion: 'Amor familiar', visualIdea: 'Familia feliz en un jardín iluminado por el atardecer.' },
      { phrase: 'Quien tiene un porqué lo suficientemente grande, supera cualquier cómo.', emotion: 'Propósito', visualIdea: 'Corazón brillante de luz en el centro del pecho de un líder.' },
      { phrase: 'No persigas el éxito; conviértete en la persona que atrae el éxito naturalmente.', emotion: 'Magnetismo', visualIdea: 'Imán dorado atrayendo estrellas brillantes en la oscuridad.' },
      { phrase: 'Tu capacidad de aprender más rápido que los demás es tu mayor ventaja competitiva.', emotion: 'Crecimiento', visualIdea: 'Libro abierto del cual emanan destellos de sabiduría.' },
      { phrase: 'El éxito sin salud es una victoria vacía: cuida tu cuerpo tanto como tus metas.', emotion: 'Salud y equilibrio', visualIdea: 'Taza de té verde humeante junto a una medalla de oro.' },
      { phrase: 'El secreto del éxito radica en estar preparado cuando llegue la oportunidad.', emotion: 'Preparación', visualIdea: 'Arquero tensando el arco con máxima precisión.' },
      { phrase: 'Rodéate de gigantes si quieres aprender a mirar más lejos.', emotion: 'Mentoría', visualIdea: 'Cumbre de rascacielos con telescopio apuntando a las estrellas.' },
      { phrase: 'El éxito no cambia a las personas; solo magnifica quiénes realmente son.', emotion: 'Integridad', visualIdea: 'Diamante puro reflejando colores prismáticos limpios.' },
      { phrase: 'Cada fracaso es simplemente una lección que te prepara para tu mayor triunfo.', emotion: 'Sabiduría', visualIdea: 'Ave Fénix renaciendo de cenizas con alas doradas luminosas.' },
      { phrase: 'No te conformes con lo bueno cuando naciste para alcanzar lo extraordinario.', emotion: 'Ambición positiva', visualIdea: 'Águila real volando alto por encima de las tormentas.' },
      { phrase: 'El éxito llega a aquellos que están demasiado ocupados buscándolo como para detenerse.', emotion: 'Laboriosidad', visualIdea: 'Taller de orfebrería con chispas doradas y piezas brillantes.' },
      { phrase: 'La gratitud abre las puertas a una abundancia sin límites.', emotion: 'Agradecimiento', visualIdea: 'Manos extendidas al cielo recibiendo lluvia de luz dorada.' },
      { phrase: 'Para tener lo que pocos tienen, haz lo que pocos están dispuestos a hacer.', emotion: 'Diferenciación', visualIdea: 'Sendero iluminado que se separa de una carretera congestionada.' },
      { phrase: 'El éxito no es el final, el fracaso no es fatal: lo que cuenta es el valor para continuar.', emotion: 'Tenacidad', visualIdea: 'Barco navegando con velas firmes a través del oleaje.' },
      { phrase: 'Visualiza tu meta con claridad, trabaja con pasión y el resultado llegará.', emotion: 'Visualización', visualIdea: 'Ojo con destellos de galaxias mirando hacia un mapa de sueños.' },
      { phrase: 'Tu actitud determina tu altitud en el camino del éxito.', emotion: 'Optimismo', visualIdea: 'Globo aerostático elevándose sobre cordilleras verdes.' },
      { phrase: 'Haz de la excelencia tu estándar en cada detalle de tu negocio.', emotion: 'Calidad', visualIdea: 'Reloj suizo mecánico de alta precisión con engranajes de oro.' },
      { phrase: 'El verdadero éxito es la paz mental de saber que diste lo mejor de ti.', emotion: 'Paz interior', visualIdea: 'Monje o persona meditando en un acantilado al amanecer.' },
      { phrase: 'No hay atajos hacia los lugares que realmente valen la pena.', emotion: 'Autenticidad', visualIdea: 'Camino empedrado serpenteante rodeado de flores silvestres.' },
      { phrase: 'El éxito no es para los que lo quieren, es para los que trabajan por él.', emotion: 'Acción', visualIdea: 'Botas de trabajo sobre tierra fértil con brotes verdes.' },
      { phrase: 'Atrévete a brillar tan fuerte que inspires a otros a encender su propia luz.', emotion: 'Inspiración', visualIdea: 'Vela encendiendo a cientos de velas en un salón elegante.' },
      { phrase: 'Cuando tus metas son claras, las decisiones difíciles se vuelven sencillas.', emotion: 'Enfoque', visualIdea: 'Rayo láser cruzando la niebla en línea recta.' },
      { phrase: 'El éxito es construir una vida de la que no necesites vacaciones.', emotion: 'Libertad', visualIdea: 'Hamaca entre palmeras con laptop y jugo de arándanos.' },
      { phrase: 'Tu mayor victoria está a un paso de tu mayor desafío. ¡No te rindas!', emotion: 'Triunfo final', visualIdea: 'Línea de meta de maratón con cinta dorada rompiéndose.' }
    ],
    Disciplina: [
      { phrase: 'La disciplina es el puente entre tus metas y tus logros.', emotion: 'Determinación', visualIdea: 'Puente colgante firme cruzando un cañón majestuoso.' },
      { phrase: 'Haz lo que debes hacer, incluso cuando no tengas ganas de hacerlo.', emotion: 'Fuerza de voluntad', visualIdea: 'Corredor entrenando bajo la lluvia matutina con enfoque.' },
      { phrase: 'La motivación te hace empezar; la disciplina te mantiene creciendo.', emotion: 'Constancia', visualIdea: 'Planta creciendo día tras día hasta convertirse en roble.' },
      { phrase: 'El dolor de la disciplina pesa gramos; el dolor del arrepentimiento pesa toneladas.', emotion: 'Madurez', visualIdea: 'Balanza antigua comparando una pluma dorada con una roca.' },
      { phrase: 'Tu futuro se decide en las pequeñas elecciones que tomas cada día.', emotion: 'Conciencia', visualIdea: 'Encrucijada en un bosque donde un sendero brilla con luz.' },
      { phrase: 'El dominio propio es la mayor victoria que un ser humano puede conquistar.', emotion: 'Autocontrol', visualIdea: 'Espadachín samurái en perfecta postura zen.' },
      { phrase: 'La disciplina no limita tu libertad, es la única que la hace posible.', emotion: 'Emancipación', visualIdea: 'Pájaro saliendo de una jaula dorada hacia el cielo azul.' },
      { phrase: 'No negocies con tu mente cuando ya tomaste una decisión con tu corazón.', emotion: 'Firmeza', visualIdea: 'Roca inamovible frente al romper de las olas.' },
      { phrase: 'El hábito diario vence a la motivación ocasional siempre.', emotion: 'Persistencia', visualIdea: 'Calendario de madera con cada día marcado con check dorado.' },
      { phrase: 'Sé más fuerte que tus excusas más convincentes.', emotion: 'Superación', visualIdea: 'Hombre levantando una carga que se transforma en oro.' },
      { phrase: 'Cada repetición cuenta, cada día suma, cada esfuerzo construye tu imperio.', emotion: 'Acumulación', visualIdea: 'Pirámide de piedra sólida levantándose hacia el cielo.' },
      { phrase: 'La disciplina es recordar siempre lo que realmente quieres a largo plazo.', emotion: 'Visión', visualIdea: 'Faro guiando barcos en la noche hacia puerto seguro.' },
      { phrase: 'El éxito no es un evento, es un estilo de vida disciplinado.', emotion: 'Identidad', visualIdea: 'Atleta preparándose meticulosamente su equipo antes del alba.' },
      { phrase: 'Cuando la disciplina se vuelve una costumbre, los milagros se vuelven rutina.', emotion: 'Transformación', visualIdea: 'Campo de flores brotando de manera uniforme y radiante.' },
      { phrase: 'La constancia diaria convierte lo ordinario en extraordinario.', emotion: 'Excelencia', visualIdea: 'Diamante siendo tallado faceta por faceta con precisión.' },
      { phrase: 'No busques motivación exterior; forja disciplina interior.', emotion: 'Autosuficiencia', visualIdea: 'Fuego interior ardiendo en el pecho de un guerrero sereno.' },
      { phrase: 'El orden en tus hábitos refleja el orden en tus resultados.', emotion: 'Organización', visualIdea: 'Escritorio minimalista impecable con luz natural y libreta.' },
      { phrase: 'La disciplina es el combustible de los ganadores en el network marketing.', emotion: 'Profesionalismo', visualIdea: 'Agenda ejecutiva con citas y llamadas de prospección cumplidas.' },
      { phrase: 'Si conquistas tus mañanas, habrás conquistado tu destino.', emotion: 'Vitalidad', visualIdea: 'Reloj despertador a las 5:00 AM con taza de café HGW humeante.' },
      { phrase: 'El respeto hacia ti mismo se demuestra cumpliendo tus propias promesas.', emotion: 'Dignidad', visualIdea: 'Firma dorada sobre un contrato sellado con cera roja.' },
      { phrase: 'No esperes a sentirte listo; la acción disciplinada genera la preparación.', emotion: 'Audacia', visualIdea: 'Saltador en el trampolín listo para ejecutar un salto impecable.' },
      { phrase: 'Tu carácter se forja en los momentos en que nadie te está mirando.', emotion: 'Integridad', visualIdea: 'Escultor trabajando a solas a la luz de una vela.' },
      { phrase: 'La disciplina es elegir entre lo que quieres ahora y lo que quieres más.', emotion: 'Prioridad', visualIdea: 'Dos caminos: uno fácil de arena y otro firme hacia la cima.' },
      { phrase: 'Sé implacable con tus metas y flexible con tus métodos.', emotion: 'Estrategia', visualIdea: 'Bambú doblándose con el viento pero sin quebrarse jamás.' },
      { phrase: 'Los resultados extraordinarios son la recompensa de la disciplina invisible.', emotion: 'Satisfacción', visualIdea: 'Escenario ovacionando a quien entrenó durante años en silencio.' },
      { phrase: 'Cada ‘no’ que superas con disciplina forja tu próximo gran ‘sí’.', emotion: 'Resiliencia', visualIdea: 'Herrero forjando una espada de acero brillante.' },
      { phrase: 'La disciplina en tu salud es la base para sostener tu éxito financiero.', emotion: 'Salud integral', visualIdea: 'Fruta fresca de arándano y cápsula de espirulina junto a monedas de oro.' },
      { phrase: 'Tu nivel de disciplina determinará el tamaño de tu legado.', emotion: 'Trascendencia', visualIdea: 'Monumento imponente tallado en roca viva que perdura siglos.' },
      { phrase: 'No bajes la meta; sube el nivel de tu disciplina diaria.', emotion: 'Exigencia positiva', visualIdea: 'Varilla de salto alto elevándose hacia un cielo despejado.' },
      { phrase: 'Hoy cumplí conmigo mismo. Mañana volveré a hacerlo.', emotion: 'Victoria personal', visualIdea: 'Atleta descansando con una sonrisa de paz al caer la noche.' }
    ],
    Liderazgo: [
      { phrase: 'Un verdadero líder no crea seguidores, forma más líderes con propósito.', emotion: 'Duplicación', visualIdea: 'Árbol que da sombra y miles de nuevos brotes creciendo a su alrededor.' },
      { phrase: 'El liderazgo es servir con humildad y guiar con el ejemplo.', emotion: 'Servicio', visualIdea: 'Líder ayudando a un compañero a subir el último tramo de la montaña.' },
      { phrase: 'La gente no sigue lo que dices; sigue lo que haces y cómo los haces sentir.', emotion: 'Congruencia', visualIdea: 'Huellas luminosas que otros siguen con alegría y confianza.' },
      { phrase: 'El Plan de Ganancia Mutua en HGW: Tu mayor cheque es el reflejo de cuántas vidas ayudaste a transformar.', emotion: 'Impacto social', visualIdea: 'Red de luces doradas interconectadas en un mapa mundial.' },
      { phrase: 'Un líder ve en las personas el potencial que ellas mismas aún no pueden ver.', emotion: 'Visión empática', visualIdea: 'Escultor descubriendo una obra de arte dentro de una roca rústica.' },
      { phrase: 'La mayor cualidad de un líder en redes es escuchar con el corazón y actuar con estrategia.', emotion: 'Empatía', visualIdea: 'Dos personas conversando en un café con mirada atenta y sincera.' },
      { phrase: 'El liderazgo no es una posición o un rango; es una decisión de servir todos los días.', emotion: 'Compromiso', visualIdea: 'Capitán en el timón de un barco guiando a su tripulación en la tormenta.' },
      { phrase: 'Inspira a tu equipo a soñar más, aprender más, hacer más y ser más.', emotion: 'Inspiración', visualIdea: 'Águila enseñando a volar a sus crías en un cielo azul radiante.' },
      { phrase: 'La duplicación perfecta nace de la sencillez en el sistema de trabajo.', emotion: 'Simplicidad', visualIdea: 'Engranajes dorados perfectamente sincronizados moviendo una gran maquinaria.' },
      { phrase: 'Celebra los triunfos de tu equipo más fuerte que los tuyos propios.', emotion: 'Celebración', visualIdea: 'Lluvia de confeti dorado sobre un equipo de distribuidores felices.' },
      { phrase: 'Un líder forja su carácter en las dificultades y comparte su gloria en la victoria.', emotion: 'Nobleza', visualIdea: 'Escudo dorado pulido con laureles de victoria.' },
      { phrase: 'El rango Diamante no es una meta, es el punto de partida para transformar miles de familias.', emotion: 'Visión de grandeza', visualIdea: 'Diamante gigante emitiendo haces de luz hacia el cielo.' },
      { phrase: 'Tu negocio HGW es tan sólido como la confianza que construyes con tu equipo.', emotion: 'Confianza', visualIdea: 'Columnas de mármol sosteniendo un templo de prosperidad.' },
      { phrase: 'Un líder resuelve problemas; un gran líder anticipa soluciones.', emotion: 'Proactividad', visualIdea: 'Estratega frente a un tablero de ajedrez iluminado.' },
      { phrase: 'La lealtad y la ética son los cimientos innegociables del liderazgo duradero.', emotion: 'Ética', visualIdea: 'Cimiento de roca maciza bajo un edificio moderno de cristal.' },
      { phrase: 'No empujes a tu gente; camina adelante y abre el sendero con valor.', emotion: 'Valentía', visualIdea: 'Pionero abriendo camino en una selva con luz solar al frente.' },
      { phrase: 'El liderazgo se mide por la cantidad de personas libres que has ayudado a formar.', emotion: 'Libertad', visualIdea: 'Manos soltando globos de colores al aire en señal de libertad.' },
      { phrase: 'Aprende a enseñar, enseña a aprender y enseña a enseñar.', emotion: 'Educación', visualIdea: 'Maestro y discípulo en una cumbre intercambiando un libro dorado.' },
      { phrase: 'Un buen líder absorbe la presión y transmite calma, certeza y visión.', emotion: 'Seguridad', visualIdea: 'Oasis sereno en medio de un desierto iluminado por estrellas.' },
      { phrase: 'El éxito de tu organización empieza en tu propia creencia inquebrantable.', emotion: 'Convicción', visualIdea: 'Llama olímpica ardiendo con intensidad en la noche.' },
      { phrase: 'Conéctate al sistema de la Academia Digital HGW y conecta a todos los tuyos.', emotion: 'Sistematización', visualIdea: 'Red global de computadoras y hologramas interconectados 24/7.' },
      { phrase: 'No prometas lo que no puedas cumplir; cumple más de lo que prometiste.', emotion: 'Credibilidad', visualIdea: 'Apretón de manos firme sellado con destello de luz.' },
      { phrase: 'El liderazgo no busca el aplauso; busca el cambio positivo en la vida de los demás.', emotion: 'Propósito', visualIdea: 'Persona sonriendo al ver a su familia prosperar en su nuevo hogar.' },
      { phrase: 'Tu equipo es el reflejo de tu energía: mantén tu frecuencia en modo victoria.', emotion: 'Vibración positiva', visualIdea: 'Ondas concéntricas de luz dorada expandiéndose en el agua.' },
      { phrase: 'Un líder agradece a sus mentores y honra a cada socio de su red.', emotion: 'Gratitud', visualIdea: 'Árbol frondoso agradeciendo a sus raíces profundas en la tierra.' },
      { phrase: 'El secreto del bono de ganancia mutua: ganar juntos es mucho mejor que ganar solo.', emotion: 'Cooperación', visualIdea: 'Círculo de líderes chocando sus manos en señal de unidad.' },
      { phrase: 'Construye puentes donde otros ven muros; une voluntades hacia un bien común.', emotion: 'Unidad', visualIdea: 'Gran puente de cristal iluminado sobre un abismo.' },
      { phrase: 'Tu ejemplo silencioso grita más fuerte que cualquier discurso.', emotion: 'Coherencia', visualIdea: 'Líder trabajando enfocado en su oficina mientras afuera amanece.' },
      { phrase: 'La visión de un líder no tiene fronteras: HGW en más de 69 países para el mundo.', emotion: 'Expansión global', visualIdea: 'Globo terráqueo girando con puntos de luz en cada continente.' },
      { phrase: 'Naciste para liderar, inspirar y dejar una huella imborrable en este mundo.', emotion: 'Trascendencia', visualIdea: 'Estrella fugaz brillante cruzando un firmamento despejado.' }
    ],
    Gratitud: [
      { phrase: 'La gratitud convierte lo que tenemos en suficiente y más.', emotion: 'Plenitud', visualIdea: 'Taza caliente entre dos manos en una mañana de campo soleada.' },
      { phrase: 'Agradece por lo que tienes hoy mientras trabajas por lo que sueñas mañana.', emotion: 'Equilibrio', visualIdea: 'Ramillete de espigas de trigo doradas bajo el sol.' },
      { phrase: 'Un corazón agradecido es un imán irresistible para los milagros diarios.', emotion: 'Bendición', visualIdea: 'Corazón de luz radiante en el cielo al atardecer.' },
      { phrase: 'Gracias por cada oportunidad, cada reto y cada persona que cruzó mi camino.', emotion: 'Paz', visualIdea: 'Mar en calma reflejando un cielo dorado sin nubes.' },
      { phrase: 'La gratitud es la memoria del corazón y el inicio de la abundancia.', emotion: 'Amor', visualIdea: 'Manos extendidas al cielo recibiendo bendición de rocío matinal.' },
      { phrase: 'Agradezco por la salud de mi cuerpo, la fuerza de mi mente y la paz de mi alma.', emotion: 'Salud y bienestar', visualIdea: 'Persona respirando aire puro en la cima de un bosque de pinos.' },
      { phrase: 'Cada nuevo amanecer es un regalo divino: vívelo con entusiasmo y propósito.', emotion: 'Alegría de vivir', visualIdea: 'Sol saliendo entre las montañas con destellos dorados.' },
      { phrase: 'Gracias por la familia HGW que cree, sueña y crece unida todos los días.', emotion: 'Comunidad', visualIdea: 'Grupo de personas abrazadas sonriendo bajo el sol.' },
      { phrase: 'La queja aleja la prosperidad; la gratitud la multiplica.', emotion: 'Prosperidad', visualIdea: 'Jardín rebosante de flores de todos los colores vibrantes.' },
      { phrase: 'Gracias por las lecciones del pasado, la fuerza del presente y las promesas del futuro.', emotion: 'Esperanza', visualIdea: 'Sendero luminoso que se abre hacia un valle fértil.' },
      { phrase: 'Agradece en silencio y tus acciones hablarán en voz alta de tu nobleza.', emotion: 'Humildad', visualIdea: 'Flor de loto blanca abriéndose sobre agua cristalina.' },
      { phrase: 'La gratitud transforma los días ordinarios en días extraordinarios.', emotion: 'Magia cotidiana', visualIdea: 'Mesa con desayuno saludable, frutas y café HGW iluminado por luz solar.' },
      { phrase: 'Gracias por la oportunidad de emprender y construir un futuro digno para los míos.', emotion: 'Libertad', visualIdea: 'Casa hermosa con jardín y una familia sonriendo en el porche.' },
      { phrase: 'El agradecimiento no cuesta nada, pero enriquece todo lo que toca.', emotion: 'Generosidad', visualIdea: 'Monedas de oro convirtiéndose en mariposas de luz.' },
      { phrase: 'Cuando eres agradecido con lo poco, la vida te confía lo mucho.', emotion: 'Merecimiento', visualIdea: 'Pequeña semilla que se transforma en un árbol gigante con frutos.' },
      { phrase: 'Gracias por la energía vital que fluye en cada una de mis células hoy.', emotion: 'Vitalidad', visualIdea: 'Cuerpo humano translúcido con centros de energía alineados y brillantes.' },
      { phrase: 'La gratitud es el antídoto contra el miedo y la ansiedad.', emotion: 'Serenidad', visualIdea: 'Buda o persona en meditación en un lago en calma.' },
      { phrase: 'Agradece las puertas que se cerraron: te guiaron hacia las que debían abrirse.', emotion: 'Confianza en el destino', visualIdea: 'Puerta dorada abriéndose a un mundo de oportunidades.' },
      { phrase: 'Hoy elijo contar mis bendiciones antes que mis problemas.', emotion: 'Enfoque positivo', visualIdea: 'Cielo estrellado donde cada estrella representa una bendición.' },
      { phrase: 'Gracias por cada cliente satisfecho y cada distribuidor que confía en nuestro equipo.', emotion: 'Fidelidad', visualIdea: 'Mensajes de agradecimiento brillando en una pantalla moderna.' },
      { phrase: 'La gratitud llena tu alma de una paz que el dinero no puede comprar.', emotion: 'Paz espiritual', visualIdea: 'Puesta de sol en el océano con tonalidades violetas y naranjas.' },
      { phrase: 'Agradezco por la salud de mis seres queridos y el bienestar de mi hogar.', emotion: 'Protección familiar', visualIdea: 'Hogar cálido iluminado por dentro en una noche estrellada.' },
      { phrase: 'En todo momento y bajo cualquier circunstancia: gracias, gracias, gracias.', emotion: 'Devoción', visualIdea: 'Letras doradas flotando en el aire con luz suave.' },
      { phrase: 'La gratitud nos recuerda que nunca estamos solos en el camino.', emotion: 'Acompañamiento', visualIdea: 'Dos personas caminando juntas por la playa al atardecer.' },
      { phrase: 'Gracias por la capacidad de soñar en grande y la valentía de trabajar por ello.', emotion: 'Audacia', visualIdea: 'Persona mirando el horizonte con capa de luz dorada.' },
      { phrase: 'El agradecimiento sincero sana el cuerpo y rejuvenece el espíritu.', emotion: 'Sanación', visualIdea: 'Agua cristalina de manantial cayendo en cascada pura.' },
      { phrase: 'Gracias por las personas que creyeron en mí cuando yo mismo dudaba.', emotion: 'Reconocimiento', visualIdea: 'Abrazo sincero entre dos amigos bajo una luz cálida.' },
      { phrase: 'Agradece la vida que tienes hoy y prepárate para la vida que mereces mañana.', emotion: 'Proyección', visualIdea: 'Horizonte infinito con sol dorado en lo alto.' },
      { phrase: 'La gratitud es la clave que abre la puerta de la abundancia infinita.', emotion: 'Riqueza espiritual', visualIdea: 'Llave antigua de oro abriendo un cofre de luz.' },
      { phrase: 'Hoy vivo en gratitud constante y todo fluye a mi favor.', emotion: 'Flujo divino', visualIdea: 'Río caudaloso de aguas cristalinas corriendo bajo un cielo azul.' }
    ],
    Ventas: [
      { phrase: 'Vender no es convencer; es servir, educar y solucionar problemas reales.', emotion: 'Servicio ético', visualIdea: 'Asesor estrechando la mano de un cliente con amplia sonrisa.' },
      { phrase: 'La confianza es la moneda más valiosa en el mundo de los negocios.', emotion: 'Confianza', visualIdea: 'Escudo de seguridad con candado de oro brillante.' },
      { phrase: 'Cuando te apasiona lo que ofreces, la venta se convierte en una conversación natural.', emotion: 'Naturalidad', visualIdea: 'Dos personas compartiendo un café con folletos de productos de salud.' },
      { phrase: 'No vendas un producto; comparte una solución que cambie la vida de las personas.', emotion: 'Impacto', visualIdea: 'Caja de producto HGW con halo de luz que ilumina a una familia.' },
      { phrase: 'El mejor vendedor es aquel que escucha el doble de lo que habla.', emotion: 'Escucha activa', visualIdea: 'Persona escuchando atentamente a otra en una oficina moderna.' },
      { phrase: 'Cada objeción de tu prospecto es una oportunidad para demostrar valor.', emotion: 'Oportunidad', visualIdea: 'Pared de piedra convirtiéndose en una puerta dorada abierta.' },
      { phrase: 'La pasión y la creencia en tu producto cierran más ventas que cualquier técnica.', emotion: 'Convicción', visualIdea: 'Corazón encendido con llama dorada sobre catálogo de productos.' },
      { phrase: 'El seguimiento constante es donde se encuentra el 80% de tus ganancias.', emotion: 'Profesionalismo', visualIdea: 'Gráfica de crecimiento exponencial con barras ascendentes doradas.' },
      { phrase: 'Haz clientes, no solo ventas: un cliente satisfecho te traerá diez más.', emotion: 'Fidelización', visualIdea: 'Árbol con ramas que se multiplican con frutos dorados.' },
      { phrase: 'El entusiasmo en tu voz es contagioso. ¡Transmite seguridad en cada mensaje!', emotion: 'Energía', visualIdea: 'Ondas de sonido doradas expandiéndose desde un smartphone.' },
      { phrase: 'La honestidad en la venta es la mejor estrategia de retención a largo plazo.', emotion: 'Integridad', visualIdea: 'Balanza perfectamente equilibrada con sello de garantía.' },
      { phrase: 'No le temas al cierre: si sabes que tu producto ayuda, pedir la compra es un favor.', emotion: 'Seguridad', visualIdea: 'Firma de pedido en tablet con sonrisa de satisfacción del comprador.' },
      { phrase: 'La preparación previa a la llamada define el éxito de la conversación.', emotion: 'Planificación', visualIdea: 'Notas ordenadas y catálogo de productos listo junto a un teléfono.' },
      { phrase: 'Ofrece tanto valor que no comprarte parezca una mala decisión.', emotion: 'Valor masivo', visualIdea: 'Cofre rebosante de beneficios, bonos y asesoría personalizada.' },
      { phrase: 'Vender salud y bienestar es el trabajo más noble y gratificante del mundo.', emotion: 'Nobleza', visualIdea: 'Persona entregando una caja de Blueberry Coffee con cariño.' },
      { phrase: 'Tu velocidad de respuesta en WhatsApp duplica tus cierres de venta.', emotion: 'Agilidad', visualIdea: 'Notificación de mensaje con rayo de velocidad y check verde.' },
      { phrase: 'Un buen copy conecta con la emoción; la razón solo justifica la compra.', emotion: 'Psicología', visualIdea: 'Cerebro y corazón iluminados en armonía.' },
      { phrase: 'El precio solo es un problema en ausencia de valor percibido.', emotion: 'Estrategia', visualIdea: 'Etiqueta de precio pequeña frente a una montaña de beneficios de salud.' },
      { phrase: 'Sé el distribuidor con el que a ti mismo te encantaría comprar.', emotion: 'Autoexigencia', visualIdea: 'Reflejo en el espejo de un asesor impecable y sonriente.' },
      { phrase: 'La prospección diaria es el oxígeno de tu negocio multinivel.', emotion: 'Vitalidad comercial', visualIdea: 'Planta regada diariamente con agua cristalina floreciendo.' },
      { phrase: 'Cada conversación es una semilla: riégala con profesionalismo y cosecharás.', emotion: 'Siembra y cosecha', visualIdea: 'Campo de trigo dorado listo para la cosecha al atardecer.' },
      { phrase: 'Domina los beneficios de tus productos y nunca más tendrás que improvisar.', emotion: 'Conocimiento', visualIdea: 'Manual abierto con insignias de maestría y productos HGW.' },
      { phrase: 'El cliente no compra tu producto, compra la versión de sí mismo con tu producto.', emotion: 'Transformación', visualIdea: 'Persona mirándose al espejo viéndose llena de energía y vitalidad.' },
      { phrase: 'La persistencia educada siempre supera a la insistencia agresiva.', emotion: 'Elegancia', visualIdea: 'Gota de agua cayendo con suavidad pero transformando la roca.' },
      { phrase: 'Cierra con preguntas poderosas que lleven a tu prospecto a su mejor decisión.', emotion: 'Maestría en cierre', visualIdea: 'Signo de interrogación dorado que se convierte en una llave.' },
      { phrase: 'Tu negocio de ventas HGW no tiene techo financiero; el límite lo pones tú.', emotion: 'Abundancia', visualIdea: 'Rascacielos de cristal elevándose sin límite hacia las nubes.' },
      { phrase: 'Celebra cada no como un paso más hacia el sí que cambiará tu mes.', emotion: 'Resiliencia comercial', visualIdea: 'Gráfico con varios no que culminan en un gran SÍ dorado.' },
      { phrase: 'La satisfacción de tu cliente es tu mejor carta de presentación.', emotion: 'Reputación', visualIdea: 'Cinco estrellas doradas brillantes sobre fondo oscuro pulido.' },
      { phrase: 'Haz del servicio posventa tu mayor fábrica de nuevas recomendaciones.', emotion: 'Cuidado al cliente', visualIdea: 'Mensaje de WhatsApp: "¿Cómo te sentiste con tu producto?" con carita feliz.' },
      { phrase: 'Hoy es un gran día para conectar, servir y cerrar con éxito.', emotion: 'Determinación matutina', visualIdea: 'Sol brillando en lo alto sobre una ciudad activa y próspera.' }
    ],
    Bienestar: [
      { phrase: 'Cuidar tu cuerpo hoy es la mejor inversión para disfrutar tu vida mañana.', emotion: 'Salud preventiva', visualIdea: 'Persona sana y vital caminando por un sendero verde iluminado.' },
      { phrase: 'La salud no lo es todo, pero sin ella, todo lo demás es nada.', emotion: 'Conciencia', visualIdea: 'Gota de agua cristalina sobre una hoja verde fresca de menta.' },
      { phrase: 'Nutre tu cuerpo con lo mejor de la naturaleza y tu cuerpo cuidará de ti.', emotion: 'Nutrición pura', visualIdea: 'Frasco de Spirulina HGW rodeado de arándanos frescos y hojas verdes.' },
      { phrase: 'El bienestar integral es el equilibrio perfecto entre cuerpo, mente y propósito.', emotion: 'Armonía', visualIdea: 'Piedras zen equilibradas sobre la orilla de un río transparente.' },
      { phrase: 'Tu cuerpo es tu único hogar permanente en esta tierra: trátalo con amor.', emotion: 'Autocuidado', visualIdea: 'Manos cuidando un brote verde brillante bajo el sol.' },
      { phrase: 'Menos estrés, más naturaleza: regálate momentos de paz y salud todos los días.', emotion: 'Serenidad', visualIdea: 'Taza de té caliente junto a una ventana con vista a un bosque.' },
      { phrase: 'Una digestión ligera y limpia es la base de una energía imparable.', emotion: 'Vitalidad digestiva', visualIdea: 'Vaso de Fresh Drink verde cristalino con rodajas de limón y menta.' },
      { phrase: 'El descanso profundo y reparador es el mayor secreto de la longevidad.', emotion: 'Descanso', visualIdea: 'Almohada de turmalina en cama de lino blanco con luz de luna suave.' },
      { phrase: 'Antioxidantes naturales: la defensa diaria de tus células frente al paso del tiempo.', emotion: 'Juventud celular', visualIdea: 'Arándanos maduros con gotas de rocío brillando como joyas.' },
      { phrase: 'La salud no se compra en una farmacia; se cultiva con hábitos conscientes cada día.', emotion: 'Hábitos sanos', visualIdea: 'Plato balanceado con frutas, semillas y café saludable HGW.' },
      { phrase: 'Respira profundo, hidrátate con agua viva y dale a tu cuerpo lo que necesita.', emotion: 'Hidratación pura', visualIdea: 'Termo Waterson vertiendo agua alcalina cristalina en un vaso.' },
      { phrase: 'El café no solo debe despertarte; debe nutrirte y proteger tus defensas.', emotion: 'Café saludable', visualIdea: 'Taza de Blueberry Coffee con humo suave y granos de café aromáticos.' },
      { phrase: 'Cuidar tu visión hoy te permitirá seguir contemplando las maravillas del mundo mañana.', emotion: 'Salud visual', visualIdea: 'Mirada brillante y nítida contemplando un paisaje de montañas.' },
      { phrase: 'La turmalina y sus iones negativos: la energía de la tierra para tu confort diario.', emotion: 'Bioenergía', visualIdea: 'Cristal de turmalina negra con aura brillante de energía pura.' },
      { phrase: 'Una sonrisa saludable empieza con un microbioma bucal en perfecto equilibrio.', emotion: 'Higiene oral', visualIdea: 'Sonrisa radiante con pasta dental de probióticos HGW de fondo.' },
      { phrase: 'La verdadera belleza exterior es el reflejo de una profunda salud interior.', emotion: 'Belleza natural', visualIdea: 'Rostro femenino fresco y radiante iluminado por luz solar suave.' },
      { phrase: 'Desintoxica tu organismo periódicamente y siente cómo recuperas tu ligereza.', emotion: 'Desintoxicación', visualIdea: 'Bebida verde depurativa en frasco de vidrio con hojas botánicas.' },
      { phrase: 'El poder adaptógeno del Ganoderma y Cordyceps: sabiduría milenaria para el ritmo moderno.', emotion: 'Adaptógenos', visualIdea: 'Hongo Reishi rojo brillante en un tronco en medio de un bosque ancestral.' },
      { phrase: 'Mueve tu cuerpo, camina, respira aire puro y vive en sintonía con la naturaleza.', emotion: 'Movimiento y vida', visualIdea: 'Persona haciendo estiramientos al amanecer en un parque verde.' },
      { phrase: 'La salud femenina merece los mejores materiales: pureza, suavidad y protección aniónica.', emotion: 'Cuidado femenino', visualIdea: 'Flor de algodón suave sobre tela blanca con banda de turmalina.' },
      { phrase: 'Tu energía vital es tu mayor activo: protégela de la fatiga y el agotamiento.', emotion: 'Energía sostenida', visualIdea: 'Sol brillando intensamente detrás de la silueta de un árbol fuerte.' },
      { phrase: 'El colágeno es la estructura de tu juventud: dale a tu piel los péptidos que necesita.', emotion: 'Firmeza dérmica', visualIdea: 'Gotas de colágeno puro hidratando una piel suave y luminosa.' },
      { phrase: 'Comienza tu mañana eligiendo bienestar y terminarás tu día con satisfacción.', emotion: 'Elección consciente', visualIdea: 'Despertar con luz natural entrando por la ventana y taza humeante.' },
      { phrase: 'La paz mental es la mejor medicina preventiva que existe.', emotion: 'Tranquilidad', visualIdea: 'Lago de montaña al atardecer en calma absoluta.' },
      { phrase: 'Cuida tus articulaciones y rodillas para que nunca dejen de llevarte a donde sueñas.', emotion: 'Movilidad libre', visualIdea: 'Persona trotando con rodillera en un sendero de playa al amanecer.' },
      { phrase: 'Saludable por dentro, imparable por fuera.', emotion: 'Poder personal', visualIdea: 'Persona lista para conquistar el día con termo HGW en mano.' },
      { phrase: 'La prevención siempre será más sabia, económica y placentera que la curación.', emotion: 'Sabiduría preventiva', visualIdea: 'Escudo botánico protegiendo un núcleo de luz radiante.' },
      { phrase: 'Date tiempo para ti, para nutrirte, para descansar y para florecer.', emotion: 'Amor propio', visualIdea: 'Taza de té humeante con un libro y flores frescas al lado.' },
      { phrase: 'Health Green World: un mundo verde saludable al alcance de tu hogar.', emotion: 'Identidad HGW', visualIdea: 'Logo verde de HGW rodeado de naturaleza viva y hojas de arándano.' },
      { phrase: 'Hoy elijo sentirme bien, vivir con energía y contagiar salud a quienes me rodean.', emotion: 'Propósito de bienestar', visualIdea: 'Grupo de personas brindando con zumo de frutos rojos sonriendo.' }
    ],
    Superación: [
      { phrase: 'No importa cuántas veces caigas, lo que define tu destino es cuántas veces te levantas.', emotion: 'Resiliencia', visualIdea: 'Árbol creciendo con fuerza en la grieta de una roca escarpada.' },
      { phrase: 'Tus límites solo existen en tu mente; sal y demuéstrale al mundo de qué estás hecho.', emotion: 'Empoderamiento', visualIdea: 'Corredor rompiendo una barrera de niebla hacia un campo iluminado.' },
      { phrase: 'Las grandes tormentas forman a los mejores capitanes.', emotion: 'Fortaleza', visualIdea: 'Barco velero cruzando olas altas con luz dorada en el horizonte.' },
      { phrase: 'El dolor que sientes hoy será la fuerza que te impulse mañana.', emotion: 'Transformación', visualIdea: 'Oruga saliendo de su capullo convertida en mariposa dorada.' },
      { phrase: 'Nunca es tarde para reinventarte y empezar a construir la vida que mereces.', emotion: 'Renacimiento', visualIdea: 'Puerta antigua abriéndose a un jardín lleno de sol y flores.' },
      { phrase: 'La adversidad es la mejor escuela para forjar líderes indestructibles.', emotion: 'Carácter', visualIdea: 'Yunque de herrero con acero incandescente tomando forma de espada.' },
      { phrase: 'Convierte tus cicatrices en medallas de honor de las batallas que ganaste.', emotion: 'Orgullo positivo', visualIdea: 'Guerrero sereno con armadura dorada contemplando el valle.' },
      { phrase: 'No permitas que el ruido de las opiniones ajenas apague tu voz interior.', emotion: 'Convicción', visualIdea: 'Faro iluminando la noche con luz firme sobre las olas.' },
      { phrase: 'Si el camino se vuelve difícil, es porque estás subiendo de nivel.', emotion: 'Progreso', visualIdea: 'Escalones de piedra subiendo por una montaña hacia un templo de luz.' },
      { phrase: 'La fuerza no proviene de lo que puedes hacer, sino de superar lo que creías imposible.', emotion: 'Superación épica', visualIdea: 'Persona levantando los brazos en la cima de una cumbre nevada.' },
      { phrase: 'Cada tropiezo es un impulso disfrazado para saltar más alto.', emotion: 'Impulso', visualIdea: 'Resorte dorado expandiéndose con energía hacia arriba.' },
      { phrase: 'No compitas con nadie más que con la persona que fuiste ayer.', emotion: 'Autosuperación', visualIdea: 'Dos siluetas comparándose: una caminando y otra volando hacia el sol.' },
      { phrase: 'El éxito es levantarse una vez más de las que has sido derribado.', emotion: 'Tenacidad', visualIdea: 'Hombre poniéndose de pie con mirada firme tras una caída en la arena.' },
      { phrase: 'Los momentos más oscuros de la noche son justo antes de que amanezca.', emotion: 'Esperanza', visualIdea: 'Cielo oscuro con los primeros rayos púrpuras y dorados del alba.' },
      { phrase: 'No tienes que ser grande para empezar, pero tienes que empezar para ser grande.', emotion: 'Iniciativa', visualIdea: 'Pequeño brote verde atravesando el asfalto hacia la luz.' },
      { phrase: 'Tu pasado no define tu futuro; tus acciones de este preciso momento sí.', emotion: 'Presente', visualIdea: 'Reloj de arena con arena convirtiéndose en polvo de estrellas.' },
      { phrase: 'Cuando sientas que vas a rendirte, recuerda por qué empezaste este viaje.', emotion: 'Propósito profundo', visualIdea: 'Foto familiar enmarcada en madera cálida iluminada por vela.' },
      { phrase: 'La verdadera victoria es vencer tus propias dudas y temores internos.', emotion: 'Poder mental', visualIdea: 'Espejo en el que la persona ve a su versión más fuerte y sabia.' },
      { phrase: 'Dios no te daría un sueño tan grande si no te diera también la capacidad de lograrlo.', emotion: 'Fe inquebrantable', visualIdea: 'Rayo de sol celestial iluminando a una persona en oración.' },
      { phrase: 'El coraje no es la ausencia de miedo, es avanzar a pesar del miedo.', emotion: 'Coraje', visualIdea: 'Persona dando un paso sobre un puente colgante en las nubes.' },
      { phrase: 'La disciplina en los días difíciles es lo que separa a los campeones de los demás.', emotion: 'Firmeza', visualIdea: 'Atleta entrenando bajo la nieve con determinación en la mirada.' },
      { phrase: 'Cada experiencia difícil fue un entrenamiento para el éxito que hoy estás viviendo.', emotion: 'Agradecimiento maduro', visualIdea: 'Libro de vida con páginas doradas que brillan en la oscuridad.' },
      { phrase: 'Si la montaña es alta, disfruta la vista mientras sigues subiendo.', emotion: 'Gozo en el proceso', visualIdea: 'Sendero de montaña con flores silvestres y vista panorámica.' },
      { phrase: 'Tu potencial es infinito: no te atrevas a dudar del poder que reside en ti.', emotion: 'Poder interior', visualIdea: 'Galaxia espiral girando en el pecho de una persona serena.' },
      { phrase: 'Nadie puede robarte tus sueños a menos que tú decidas entregárselos.', emotion: 'Protección de metas', visualIdea: 'Escudo transparente protegiendo un cofre con gemas brillantes.' },
      { phrase: 'La constancia derriba muros que la fuerza bruta nunca pudo mover.', emotion: 'Paciencia activa', visualIdea: 'Gota de agua persistente abriendo paso a través de una roca.' },
      { phrase: 'Haz que tu historia de vida sea tan inspiradora que valga la pena contarla.', emotion: 'Legado', visualIdea: 'Líder en tarima hablando frente a una multitud que aplaude emocionada.' },
      { phrase: 'El fracaso temporal es solo un desvío hacia un camino mejor pavimentado.', emotion: 'Reorientación', visualIdea: 'Flecha dorada en un cruce de caminos apuntando al amanecer.' },
      { phrase: 'Eres más fuerte de lo que crees, más capaz de lo que imaginas y más bendecido de lo que sabes.', emotion: 'Gratitud y poder', visualIdea: 'Persona con brazos abiertos recibiendo la luz del sol en la playa.' },
      { phrase: 'Hoy dejo atrás las dudas y doy el salto hacia mi mejor versión.', emotion: 'Transformación final', visualIdea: 'Salto épico de una persona hacia un horizonte lleno de luz y posibilidades.' }
    ],
    Prosperidad: [],
    Confianza: [],
    Fe: [],
    Esperanza: [],
    Motivación: []
  };

  // Fallback defaults for missing categories
  const defaultItems = quoteTemplates[category] || quoteTemplates['Emprendimiento'];
  
  // Ensure we return exactly 30 items
  return Array.from({ length: 30 }, (_, index) => {
    const item = defaultItems[index % defaultItems.length];
    const phrase = item ? item.phrase : `La prosperidad y el éxito acompañan a quienes actúan con visión y disciplina día a día. (Frase #${index + 1})`;
    const emotion = item ? item.emotion : 'Inspiración y Abundancia';
    const visualIdea = item ? item.visualIdea : 'Composición visual elegante con luz dorada, naturaleza y tipografía sobria';

    return {
      numero: index + 1,
      frase: phrase,
      categoria: category,
      emotion: emotion,
      visualIdea: visualIdea,
      promptImagen: buildMasterQuotePrompt(phrase, category, emotion, format),
      formato: format
    };
  });
}
