import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'blueberry-candy',
    nombre: 'Blueberry Candy (Caramelos de Arándano)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelos duros elaborados con polvo de arándano natural, prácticos y deliciosos para disfrutar en cualquier momento.',
    descripcion: 'Los Caramelos de Arándano HGW son una forma práctica, deliciosa y conveniente de disfrutar el sabor y los antioxidantes de los arándanos en cualquier momento del día. Elaborados con polvo de arándano seleccionado, conservan sus bondades nutricionales y aportan antocianinas que favorecen la salud visual y el bienestar celular.',
    beneficios: [
      'Aporte natural de antioxidantes y antocianinas.',
      'Contribuye al cuidado y confort de la salud visual.',
      'Refuerza la protección celular frente al estrés oxidativo.',
      'Sabor delicioso y natural sin culpas.',
      'Presentación en frasco portable con 60 caramelos.'
    ],
    ingredientes: ['Polvo de arándanos (Blueberry)', 'Azúcar', 'Jarabe de glucosa', 'Aroma natural'],
    presentacion: 'Frasco con 60 caramelos (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Arándanos de alta calidad',
    imagen: 'https://lh3.googleusercontent.com/d/1RnzqoZ3FUGrRYH5X5Yo_WxGDL7opwwfE',
    driveUrl: 'https://drive.google.com/file/d/1RnzqoZ3FUGrRYH5X5Yo_WxGDL7opwwfE/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1eTFs4b9a7wEIsAkODOfnbDNoVFtQctAD/view?usp=drivesdk',
      'https://drive.google.com/file/d/1-iUyftIyXYkGf6LzMDyeQyrnD8U0i6H4/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Aporte natural de antioxidantes provenientes del arándano.',
      'Ideal para disfrutar un dulce saludable en cualquier momento.',
      'Contiene antocianinas que complementan el cuidado de la visión.'
    ],
    claims_no_permitidos: [
      'Cura enfermedades de los ojos o cataratas.',
      'Elimina por completo la necesidad de usar lentes.',
      'Cura la diabetes o el cáncer.'
    ],
    informacion_adicional: 'Duración de 24 meses. Consumir 1 a 3 unidades al día.'
  },
  {
    id: 'mermelada-arandanos',
    nombre: 'Mermelada de Arándanos (Blueberry Fruit Tea Jam)',
    categoria: 'Alimentos Funcionales',
    descripcion_corta: 'Deliciosa mermelada frutada con arándanos enteros seleccionados, ideal para desayunos y meriendas nutritivas.',
    descripcion: 'La Mermelada Frutada HGW es una deliciosa concentración elaborada con arándanos cuidadosamente seleccionados, conservando su sabor natural y sus valiosos fitonutrientes. Su textura suave con trozos de fruta real la convierte en el acompañamiento perfecto para panes, tostadas, panquecas o postres familiares.',
    beneficios: [
      'Elaborada con fruta real de arándano.',
      'Rica en antocianinas y polifenoles bioactivos.',
      'Alternativa dulce y nutritiva para toda la familia.',
      'Textura suave y aroma deliciosamente frutal.'
    ],
    ingredientes: ['Arándano natural', 'Azúcar blanca granulada', 'Jarabe de malta', 'Pectina', 'Ácido cítrico'],
    presentacion: 'Frasco de 200 g',
    precio: 12.00,
    precio_distribuidor: 8.00,
    BV: 4.00,
    materia_prima: 'Arándanos seleccionados',
    imagen: 'https://lh3.googleusercontent.com/d/1_5DlGwk1pxeaVa0aBnv_hdN7gRNcsLSB',
    driveUrl: 'https://drive.google.com/file/d/1_5DlGwk1pxeaVa0aBnv_hdN7gRNcsLSB/view?usp=drivesdk',
    claims_permitidos: [
      'Deliciosa opción gourmet con propiedades antioxidantes naturales.',
      'Perfecto complemento para desayunos balanceados.',
      'Conserva las propiedades organolépticas del arándano.'
    ],
    claims_no_permitidos: [
      'Garantiza la pérdida de peso inmediata.',
      'Sustituto de tratamientos médicos para la glucosa.'
    ],
    videoUrl: 'https://youtu.be/sz64iiCfujU'
  },
  {
    id: 'peptido-colageno-arandano',
    nombre: 'Péptido de Colágeno de Arándano',
    categoria: 'Suplementos Nutricionales',
    descripcion_corta: 'Fórmula líquida funcional con péptidos bioactivos de colágeno, arándano, frutas y vitaminas para el cuidado de piel y articulaciones.',
    descripcion: 'El Péptido de Colágeno y Arándanos HGW combina colágeno hidrolizado de alta asimilación con concentrados de frutas rojas (cereza, uva, açaí, naranja sanguina) y micronutrientes esenciales. Su tecnología en péptidos favorece la absorción celular, ayudando a nutrir la elasticidad dérmica, el cabello, las uñas y la flexibilidad articular.',
    beneficios: [
      'Péptidos y tripéptidos de colágeno de máxima absorción.',
      'Contribuye a la firmeza, hidratación y elasticidad de la piel.',
      'Nutre y apoya la salud de articulaciones y cartílagos.',
      'Fortificado con vitaminas A, C, B1, B6, B12, D, E y minerales (Calcio, Magnesio, Zinc).',
      'Aporte de antioxidantes provenientes de 11 frutas y vegetales.'
    ],
    ingredientes: ['Péptido y tripéptido de colágeno', 'Concentrado de arándanos', 'Cereza', 'Açaí', 'Uva', 'Vitaminas A, C, E, Complejo B', 'Zinc', 'FOS'],
    presentacion: 'Caja con 12 sachets bebibles (300 g total / 25 g c/u)',
    precio: 29.00,
    precio_distribuidor: 20.00,
    BV: 12.00,
    materia_prima: 'Péptidos de colágeno y arándanos',
    imagen: 'https://lh3.googleusercontent.com/d/1YO8lm6tWUdNmeZkFXrOfVCKu5YVG9_xI',
    driveUrl: 'https://drive.google.com/file/d/1YO8lm6tWUdNmeZkFXrOfVCKu5YVG9_xI/view?usp=drivesdk',
    claims_permitidos: [
      'Nutrición avanzada para el cuidado de la piel, uñas y cabello.',
      'Contribuye al mantenimiento de la movilidad y confort articular.',
      'Fórmula sinérgica con vitaminas antioxidantes.'
    ],
    claims_no_permitidos: [
      'Elimina las arrugas en 24 horas garantizado.',
      'Cura la artrosis o regenera cartílagos destruidos de inmediato.'
    ],
    videoUrl: 'https://youtu.be/S9k8OzLjTgA'
  },
  {
    id: 'pro-shaping-tea',
    nombre: 'Té Moldeador Profesional (Pro Shaping Tea)',
    categoria: 'Tés e Infusiones Saludables',
    descripcion_corta: 'Selecta infusión herbal milenaria con Té Verde, Semillas de Casia, Espino y Ginseng para apoyar el metabolismo y la digestión.',
    descripcion: 'Pro-Shaping Tea HGW es una selecta infusión herbal diseñada según la tradición oriental para acompañar un estilo de vida activo y saludable. Combina té verde premium, espino blanco, semillas de casia, raíz de ginseng y sang ye, ofreciendo una bebida digestiva, revitalizante y tonificante que ayuda a mejorar el metabolismo y la ligereza digestiva.',
    beneficios: [
      'Favorece la digestión y la sensación de ligereza después de comer.',
      'Apoya el metabolismo natural y la eliminación de toxinas.',
      'Aporte de antioxidantes polifenólicos del té verde.',
      'Con hierbas tradicionales chinas como espino y semillas de casia.',
      'Fácil preparación en bolsitas filtrantes prácticas.'
    ],
    ingredientes: ['Té verde (Camellia sinensis)', 'Espino (Crataegus spp.)', 'Semillas de casia (Semen cassiae)', 'Ginseng (Panax ginseng)', 'Sang Ye (Folium mori)', 'Arroz rojo fermentado'],
    presentacion: 'Caja con 24 bolsitas filtrantes (72 g total / 3 g c/u)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 9.60,
    materia_prima: 'Mezcla botánica oriental',
    imagen: 'https://lh3.googleusercontent.com/d/11PunA1eraGhCqxkz4m4zwgTohgLhfj8b',
    driveUrl: 'https://drive.google.com/file/d/11PunA1eraGhCqxkz4m4zwgTohgLhfj8b/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/10KQgXbUMA46qqEQV6AMueytWegZ8G4CK/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Infusión herbal digestiva y tonificante.',
      'Ideal para acompañar dietas y programas de bienestar físico.',
      'Bebida natural libre de aditivos artificiales.'
    ],
    claims_no_permitidos: [
      'Quema grasa automáticamente sin hacer dieta ni ejercicio.',
      'Cura la obesidad de manera milagrosa.'
    ],
    videoUrl: 'https://youtu.be/AHgLCdAgsOE'
  },
  {
    id: 'berry-juice-high-vc',
    nombre: 'Berry Juice HIGH VC (Zumo de Frutos Rojos)',
    categoria: 'Bebidas Nutritivas',
    descripcion_corta: 'Bebida en polvo rica en Vitamina C natural con extractos concentrados de arándanos, moras, cerezas y uvas.',
    descripcion: 'Berry Juice High VC HGW es una explosión antioxidante en polvo rica en vitamina C, elaborada con una selecta combinación de arándanos, moras, uvas y cerezas. Su fórmula concentra bioflavonoides y micronutrientes que apoyan el sistema inmunológico, la producción natural de colágeno y la protección celular contra los radicales libres.',
    beneficios: [
      'Alto contenido de Vitamina C biodisponible.',
      'Poderosa acción antioxidante con frutos rojos.',
      'Apoya las defensas y el sistema inmunológico.',
      'Favorece la salud visual y la vitalidad cutánea.',
      'Fresco y agradable sabor frutal, fácil de disolver en agua.'
    ],
    ingredientes: ['Jugo de arándano en polvo', 'Jugo de uva en polvo', 'Extracto de cereza', 'Extracto de mora', 'Extracto de frambuesa', 'Vitamina C'],
    presentacion: 'Caja con 30 sachets (180 g total / 6 g c/u)',
    precio: 25.00,
    precio_distribuidor: 17.00,
    BV: 8.50,
    materia_prima: 'Concentrado de frutos rojos',
    imagen: 'https://lh3.googleusercontent.com/d/1soRruTg-3cQ5NccJZrza5fzfM4Hrl9gA',
    driveUrl: 'https://drive.google.com/file/d/1soRruTg-3cQ5NccJZrza5fzfM4Hrl9gA/view?usp=drivesdk',
    claims_permitidos: [
      'Excelente fuente de vitamina C y antioxidantes.',
      'Refuerzo nutricional para toda la familia.',
      'Bebida refrescante y nutritiva para cualquier momento del día.'
    ],
    claims_no_permitidos: [
      'Cura gripes o infecciones virales al instante.',
      'Garantiza inmunidad total contra virus.'
    ]
  },
  {
    id: 'fresh-drink-chang-jingjing',
    nombre: 'Fresh Drink Chang JingJing (Limpiador Digestivo)',
    categoria: 'Bebidas Funcionales',
    descripcion_corta: 'Bebida verde instantánea a base de hierba de cebada, bayas de goji, regaliz y diente de león para el bienestar intestinal.',
    descripcion: 'Fresh Drink Chang JingJing HGW es una selecta mezcla herbal verde para la limpieza digestiva profunda y amigable. Formulada con pasto de cebada rico en clorofila, bayas de goji, diente de león, regaliz y crisantemo, ayuda a regular el tránsito intestinal, depurar toxinas y balancear el pH del organismo.',
    beneficios: [
      'Favorece la limpieza y desintoxicación suave del colon.',
      'Rico en fibra soluble y clorofila alcalinizante.',
      'Apoya el funcionamiento digestivo y hepático.',
      'Ayuda a reducir la pesadez y el estreñimiento ocasional.',
      'Libre de grasas, refrescante sabor a hierba verde natural.'
    ],
    ingredientes: ['Cebada en polvo', 'Bayas de goji (fruto)', 'Gan Cao / Regaliz (raíz)', 'Diente de león (hojas y flor)', 'Crisantemo', 'Ácido cítrico'],
    presentacion: 'Caja con 6 sachets de 21 g (126 g total)',
    precio: 13.00,
    precio_distribuidor: 9.00,
    BV: 5.40,
    materia_prima: 'Mezcla verde botánica y fitonutrientes',
    imagen: 'https://lh3.googleusercontent.com/d/1sxM3-0WqqI13ADKvU5QG25AMozh3BgD0',
    driveUrl: 'https://drive.google.com/file/d/1sxM3-0WqqI13ADKvU5QG25AMozh3BgD0/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1c3SMUWaUWIMsfVFywOPSaa0bQAJzdNnY/view?usp=drivesdk',
      'https://drive.google.com/file/d/1UFx0FZ6Inbru3b_gGpBgiIeNzxV8vu0C/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Bebida verde con fibra natural para apoyar la regularidad digestiva.',
      'Efecto depurativo y alcalinizante suave.',
      'Ideal para protocolos de desintoxicación y bienestar intestinal.'
    ],
    claims_no_permitidos: [
      'Cura el cáncer de colon o pólipos.',
      'Sustituto de cirugías o tratamientos médicos gastroenterológicos.'
    ],
    videoUrl: 'https://youtu.be/YAik3rb8GQw'
  },
  {
    id: 'blueberry-wine',
    nombre: 'Vino de Arándanos HGW (Blueberry Wine)',
    categoria: 'Licores Orgánicos y Especialidades',
    descripcion_corta: 'Vino fino elaborado 100% con frutos de arándano fermentados, rico en polifenoles, aroma frutal y notas elegantes.',
    descripcion: 'El Vino de Arándanos HGW es una exquisita creación artesanal obtenida exclusivamente de arándanos frescos fermentados. Ofrece una concentración notable de antioxidantes y antocianinas en una bebida elegante y aromática, perfecta para celebraciones, cenas especiales o momentos de relajación.',
    beneficios: [
      'Elaborado con arándanos de alta graduación antioxidante.',
      'Aporta polifenoles que protegen la salud cardiovascular.',
      'Aroma frutal profundo y sabor suave en boca.',
      'Temperatura ideal de servicio entre 12 y 14 °C.'
    ],
    ingredientes: ['Frutos de arándanos fermentados', 'Sulfitos'],
    presentacion: 'Botella de vidrio de 750 ml',
    precio: 36.00,
    precio_distribuidor: 26.00,
    BV: 5.20,
    materia_prima: 'Arándanos selectos de Canadá',
    imagen: 'https://lh3.googleusercontent.com/d/1XdBwlYSMfgEZe6jlzc2xh0tHCM1TSVxA',
    driveUrl: 'https://drive.google.com/file/d/1XdBwlYSMfgEZe6jlzc2xh0tHCM1TSVxA/view?usp=drivesdk',
    claims_permitidos: [
      'Vino frutal elaborado con arándanos de alta calidad.',
      'Elegante opción con antioxidantes para brindar con salud.'
    ],
    claims_no_permitidos: [
      'Bebida medicinal para curar enfermedades.',
      'Apto para menores de edad.'
    ],
    informacion_adicional: 'El consumo excesivo de alcohol es dañino para la salud. Venta exclusiva para mayores de 18 años.',
    videoUrl: 'https://youtu.be/PfSFBPwqdkw'
  },
  {
    id: 'trebol-coffee-cream',
    nombre: 'Trébol Coffee Cream (Café Trébol)',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café instantáneo enriquecido con extracto de Trébol Rojo (Trifolium pratense), rosas y raíz de pueraria para el bienestar femenino.',
    descripcion: 'Trébol Coffee Cream HGW es una innovadora bebida caliente que combina selectos granos de café con extracto botánico de trébol rojo, rosa y raíz de pueraria. Tradicionalmente apreciado por sus isoflavonas naturales que acompañan los ciclos hormonales y aportan relajación, es una experiencia cremosa y reconfortante.',
    beneficios: [
      'Aporte de isoflavonas botánicas del trébol rojo.',
      'Apoya el equilibrio y bienestar en etapas de madurez femenina.',
      'Sabor cremoso, suave y aromático.',
      'Ayuda a reducir la tensión y el estrés diario.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Crema no láctea', 'Extracto de Trifolium pratense', 'Extracto de rosa', 'Extracto de raíz de pueraria', 'Semilla de lino'],
    presentacion: 'Caja con 12 sachets de 15 g (180 g total)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 8.00,
    materia_prima: 'Café gourmet y extracto de trébol rojo',
    imagen: 'https://lh3.googleusercontent.com/d/1d3kM-6Gqm0DcSwS2cfuuYkZ10036b8Br',
    driveUrl: 'https://drive.google.com/file/d/1d3kM-6Gqm0DcSwS2cfuuYkZ10036b8Br/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1Ko69VZDes855GTD4ROi8MQC8O6NwzyPH/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Bebida reconfortante con extractos herbales para el bienestar de la mujer.',
      'Alternativa cremosa al café tradicional con fitonutrientes naturales.'
    ],
    claims_no_permitidos: [
      'Aumento mamario milagroso garantizado.',
      'Cura hormonal médica o sustituto de terapia hormonal.'
    ],
    videoUrl: 'https://youtu.be/Wugs4B28v2Y'
  },
  {
    id: 'cordyceps-coffee-cream',
    nombre: 'Cordyceps Coffee Cream',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café gourmet cremoso fortificado con micelio de Cordyceps Sinensis y arándano para máxima energía física y mental.',
    descripcion: 'Cordyceps Coffee Cream HGW une la riqueza aromática del café premium con el legendario hongo tibetano Cordyceps sinensis y extracto de arándano. Diseñado para personas activas, deportistas y profesionales que necesitan energía constante sin caídas bruscas, reforzando la vitalidad y la resistencia física.',
    beneficios: [
      'Fortificado con micelio puro de Cordyceps Sinensis.',
      'Ayuda a elevar la energía celular y la resistencia al cansancio.',
      'Apoya el rendimiento físico, mental y respiratorio.',
      'Textura suave y sabor equilibrado sin octógonos.',
      'Práctica presentación en sobres para preparar al instante.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Crema no láctea', 'Micelio de Cordyceps sinensis en polvo', 'Arándano en polvo'],
    presentacion: 'Caja con 12 sachets de 15 g (180 g total)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 9.60,
    materia_prima: 'Cordyceps Sinensis y café selecto',
    imagen: 'https://lh3.googleusercontent.com/d/1GjEut1ue2NkzQjnH2jc8JRpHc4ZkeqY3',
    driveUrl: 'https://drive.google.com/file/d/1GjEut1ue2NkzQjnH2jc8JRpHc4ZkeqY3/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1N3un1TV1b14yE0Me8Ufy9xb1VPYxVngr/view?usp=drivesdk',
      'https://drive.google.com/file/d/1XxOvaE4NGKKMyGTzrgdfZJgGfeOk3xae/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Café funcional energizante para el rendimiento diario.',
      'Tradicional hongo adaptógeno para mayor vitalidad y resistencia.',
      'Excelente alternativa para empezar la mañana con enfoque.'
    ],
    claims_no_permitidos: [
      'Cura el asma o la bronquitis crónica de forma milagrosa.',
      'Sustituto de medicamentos cardiorrespiratorios.'
    ],
    videoUrl: 'https://youtu.be/8RBynZlTBSQ'
  },
  {
    id: 'black-tea-coffee',
    nombre: 'Black Tea Coffee (Café con Té Negro)',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Bebida sin azúcar que fusiona café arabiga y té negro premium para concentración mental y digestión ligera.',
    descripcion: 'Black Tea Coffee HGW combina la intensidad del café arabiga con la elegancia antioxidante del té negro. Una mezcla sin azúcar añadida, ideal para quienes buscan agudeza mental, memoria y apoyo digestivo diario con un sabor limpio y vigorizante.',
    beneficios: [
      'Sin azúcar añadida, endulzado naturalmente.',
      'Estimula la concentración, lucidez mental y memoria.',
      'Favorece la digestión y ayuda a eliminar la fatiga.',
      'Aporte de teanina y antioxidantes del té negro.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Té negro (Camellia sinensis)', 'Edulcorante natural'],
    presentacion: 'Caja con 12 sobres de 3.5 g (42 g total)',
    precio: 20.00,
    precio_distribuidor: 14.00,
    BV: 7.00,
    materia_prima: 'Café arábigo y té negro fermentado',
    imagen: 'https://lh3.googleusercontent.com/d/17YD4LnY_THurfVpCOA1uX1ThnT6ilvec',
    driveUrl: 'https://drive.google.com/file/d/17YD4LnY_THurfVpCOA1uX1ThnT6ilvec/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1YHCsgPxdILXLPyzlU2_-9tFWfh98MhVZ/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Combinación sin azúcar para mayor lucidez y productividad.',
      'Bebida liviana con antioxidantes naturales.'
    ],
    claims_no_permitidos: [
      'Cura enfermedades neurológicas.',
      'Elimina por completo el cansancio crónico patológico.'
    ],
    videoUrl: 'https://youtu.be/Vf41cDOI3DY'
  },
  {
    id: 'coffee-ceps',
    nombre: 'Coffee Ceps (Café Cordyceps sin Azúcar)',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café puro instantáneo sin azúcar fortificado con micelio fermentado de Cordyceps sinensis para el bienestar renal y físico.',
    descripcion: 'Coffee Ceps HGW es la versión pura y sin azúcar para los amantes del café negro que desean los beneficios adaptógenos del Cordyceps. Rico en aminoácidos y polisacáridos bioactivos, apoya la función renal, la vitalidad y la recuperación muscular.',
    beneficios: [
      'Fórmula pura sin azúcar y sin crema añadida.',
      'Fortalecido con micelio fermentado de Cordyceps sinensis.',
      'Apoya la vitalidad, resistencia física y energía celular.',
      'Acompañante ideal para estilos de vida activos y fitness.'
    ],
    ingredientes: ['Café instantáneo puro en polvo', 'Micelio de Cordyceps sinensis fermentado'],
    presentacion: 'Caja con 12 sobres de 3.5 g (42 g total)',
    precio: 20.00,
    precio_distribuidor: 14.00,
    BV: 7.00,
    materia_prima: 'Cordyceps Sinensis y café arabiga',
    imagen: 'https://lh3.googleusercontent.com/d/1qyyUVAmR4z45gMHXfzdc6gjYYaauk2ob',
    driveUrl: 'https://drive.google.com/file/d/1qyyUVAmR4z45gMHXfzdc6gjYYaauk2ob/view?usp=drivesdk',
    claims_permitidos: [
      'Café negro funcional libre de azúcares y grasas.',
      'Soporte adaptógeno natural para la vitalidad diaria.'
    ],
    claims_no_permitidos: [
      'Cura la insuficiencia renal o enfermedades pulmonares severas.'
    ],
    videoUrl: 'https://youtu.be/oPskEdxZ16E'
  },
  {
    id: 'blueberry-coffee',
    nombre: 'Blueberry Coffee (Café con Arándanos)',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café gourmet enriquecido con superalimento de arándanos de alta biodisponibilidad para la visión y vitalidad.',
    descripcion: 'Blueberry Coffee HGW es una de las fórmulas estrella de la marca, uniendo café de aroma exquisito con extracto concentrado de arándanos ricos en antocianinas. Con un poder antioxidante superior, ofrece un impulso de energía mientras protege la salud visual y celular.',
    beneficios: [
      'Concentración alta de antocianinas de rápida biodisponibilidad.',
      'Combina energía estimulante con protección antioxidante.',
      'Contribuye al cuidado visual y la microcirculación ocular.',
      'Delicioso aroma frutal y textura cremosa.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Crema no láctea', 'Polvo de arándanos (Vaccinium corymbosum L.)'],
    presentacion: 'Caja con 12 sachets de 15 g (180 g total)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 9.60,
    materia_prima: 'Arándano canadiense y café arábica',
    imagen: 'https://lh3.googleusercontent.com/d/1b2KTKEMfvEnWG_iG9_Zv9FuYGo07R-bW',
    driveUrl: 'https://drive.google.com/file/d/1b2KTKEMfvEnWG_iG9_Zv9FuYGo07R-bW/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1BL58MS4C_t1yzzh-iFoKB8VUhlIQLrcY/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Café antioxidante enriquecido con arándanos reales.',
      'Nutrición y energía en cada taza para el día a día.'
    ],
    claims_no_permitidos: [
      'Cura el glaucoma o miopía.',
      'Garantiza regeneración macular instantánea.'
    ],
    videoUrl: 'https://youtu.be/rhSUE14uunU'
  },
  {
    id: 'lactiberry',
    nombre: 'Lactiberry (Té Negro con Arándanos y Lácteo)',
    categoria: 'Tés e Infusiones Saludables',
    descripcion_corta: 'Deliciosa bebida cremosa que combina té negro de altura, arándanos enteros y proteínas lácteas de Nueva Zelanda.',
    descripcion: 'Lactiberry HGW es una bebida gourmet instantánea diseñada para nutrir y reconfortar. Su exclusiva fórmula integra té negro de alta montaña, polvo de arándanos y suero de leche de Nueva Zelanda, proporcionando proteínas de alto valor biológico y antioxidantes en un deleite suave.',
    beneficios: [
      'Contiene producto lácteo de pastoreo de Nueva Zelanda.',
      'Aporte de proteínas, calcio y bioflavonoides del té negro.',
      'Enriquecido con arándano real para protección celular.',
      'Bebida saciante y reconfortante para desayunos y meriendas.'
    ],
    ingredientes: ['Crema no láctea', 'Suero de leche', 'Leche descremada en polvo', 'Arándanos en polvo (1.5%)', 'Té negro (Camellia sinensis)', 'Azúcar granulada'],
    presentacion: 'Caja con 10 sachets de 30 g (300 g total)',
    precio: 26.00,
    precio_distribuidor: 18.00,
    BV: 9.00,
    materia_prima: 'Leche de Nueva Zelanda, té negro y arándanos',
    imagen: 'https://lh3.googleusercontent.com/d/1LPWR1rp6l6bNZfF6dVqn59hoUp4IO7vB',
    driveUrl: 'https://drive.google.com/file/d/1LPWR1rp6l6bNZfF6dVqn59hoUp4IO7vB/view?usp=drivesdk',
    claims_permitidos: [
      'Bebida nutritiva y saciante con antioxidantes y proteínas lácteas.',
      'Excelente sabor cremoso para disfrutar caliente.'
    ],
    claims_no_permitidos: [
      'Cura la osteoporosis.',
      'Sustituto de tratamientos médicos óseos.'
    ],
    videoUrl: 'https://youtu.be/klWgM6ploi4'
  },
  {
    id: 'ashwaganda-coffee',
    nombre: 'Ashwagandha Coffee Cream',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café adaptógeno con extracto de Ashwagandha de la India, frambuesa y ostra para vitalidad y reducción del estrés.',
    descripcion: 'Ashwagandha Coffee Cream HGW es la combinación perfecta entre la energía del café y la serenidad de la raíz adaptógena Ashwagandha (Withania somnifera). Permite mantener el foco mental y la vitalidad sin agitación nerviosa, favoreciendo el descanso nocturno y el equilibrio emocional.',
    beneficios: [
      'Contiene extracto botánico de Ashwagandha (ginseng indio).',
      'Ayuda a modular la respuesta corporal frente al estrés diario.',
      'Favorece la concentración serena y la relajación.',
      'Fortificado con extractos de flor de Eucommia y frambuesa.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Crema no láctea', 'Extracto de Ashwagandha (Withania somnifera)', 'Extracto de frambuesa', 'Extracto de ostra', 'Extracto de Eucommia'],
    presentacion: 'Caja con 12 sachets de 15 g (180 g total)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 8.00,
    materia_prima: 'Ashwagandha india y café gourmet',
    imagen: 'https://lh3.googleusercontent.com/d/1-J5Hhsv4TSrY7nKAbwS2jwxDE1EoBPMw',
    driveUrl: 'https://drive.google.com/file/d/1-J5Hhsv4TSrY7nKAbwS2jwxDE1EoBPMw/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1_qaxS2jw74lFbjMHsOmhkxmhFW2koh0V/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Café adaptógeno para acompañar jornadas intensas de trabajo o estudio.',
      'Contribuye al manejo natural del estrés y la fatiga mental.'
    ],
    claims_no_permitidos: [
      'Cura trastornos psiquiátricos de ansiedad o depresión clínica.',
      'Tratamiento médico para el insomnio crónico.'
    ],
    videoUrl: 'https://youtu.be/lrdZhiHa-kU'
  },
  {
    id: 'ganoderma-soluble-coffee',
    nombre: 'Ganoderma Soluble Coffee',
    categoria: 'Cafés Orgánicos Saludables',
    descripcion_corta: 'Café soluble premium fortificado con extracto puro de Ganoderma Lucidum (Reishi) para el sistema inmune.',
    descripcion: 'Ganoderma Soluble Coffee HGW integra el café gourmet con el "Rey de las Hierbas", el hongo Ganoderma Lucidum (Reishi). Conocido por su riqueza en triterpenos, germanio orgánico y polisacáridos beta-glucanos, ofrece una experiencia deliciosa que apoya las defensas naturales y la longevidad celular.',
    beneficios: [
      'Fortificado con extracto de Ganoderma Lucidum de cultivo orgánico.',
      'Aporte de beta-glucanos y triterpenos inmunomoduladores.',
      'Contribuye a la neutralización de radicales libres y desintoxicación.',
      'Reduce la sensación de fatiga y promueve la vitalidad general.'
    ],
    ingredientes: ['Café instantáneo en polvo', 'Crema no láctea', 'Extracto de Ganoderma lucidum', 'Azúcar granulada'],
    presentacion: 'Caja con 12 sobres de 15 g (180 g total)',
    precio: 23.00,
    precio_distribuidor: 16.00,
    BV: 9.60,
    materia_prima: 'Ganoderma Lucidum (Reishi)',
    imagen: 'https://lh3.googleusercontent.com/d/1N1VLXoYFPxS4Jur4xzYBduxwenHUwm8s',
    driveUrl: 'https://drive.google.com/file/d/1N1VLXoYFPxS4Jur4xzYBduxwenHUwm8s/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/14SVaSZNV1hhG2rWOC7srf2u2fdBJNaSN/view?usp=drivesdk',
      'https://drive.google.com/file/d/10OxyVm5niPw-3OqGfmLEDjcxxKNHtuww/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Café con el legendario hongo Reishi para apoyar las defensas.',
      'Sabor suave y aromático con beneficios adaptógenos.'
    ],
    claims_no_permitidos: [
      'Cura el cáncer, VIH o tumores.',
      'Sustituto de tratamientos oncológicos o farmacológicos.'
    ],
    videoUrl: 'https://youtu.be/_rLruFfZszk'
  },
  {
    id: 'proteina-soja-arandano',
    nombre: 'Proteína de Soja con Arándanos en Polvo',
    categoria: 'Suplementos Nutricionales',
    descripcion_corta: 'Bebida proteica vegetal con proteína aislada de soya, proteína de maní, arándanos, lecitina y konjac para saciedad y masa muscular.',
    descripcion: 'La Proteína de Soya y Arándano HGW es una completa formulación vegetal que aporta aminoácidos esenciales necesarios para la recuperación muscular y el mantenimiento del tono corporal. Con fibra de konjac para una agradable sensación de saciedad y arándanos ricos en antioxidantes, es ideal para deportistas y personas en control de peso.',
    beneficios: [
      'Proteína aislada de soya de alto valor biológico con todos los aminoácidos.',
      'Proteína de maní rica en arginina para desarrollo y reparación muscular.',
      'Fibra viscosa de Konjac que promueve la saciedad y apoya el perfil lipídico.',
      'Poder antioxidante del arándano.',
      'Ligeramente dulce con xilitol, libre de octógonos.'
    ],
    ingredientes: ['Proteína aislada de soya', 'Proteína de maní', 'Arándano en polvo', 'Lecitina de soya', 'Fibra de konjac', 'Xilitol'],
    presentacion: 'Caja con 12 sachets de 20 g (240 g total)',
    precio: 36.00,
    precio_distribuidor: 25.00,
    BV: 15.00,
    materia_prima: 'Proteína vegetal de soya y arándanos',
    imagen: 'https://lh3.googleusercontent.com/d/1sXrkO5cC8ETS71nPmX00rWo7SY2BX4k6',
    driveUrl: 'https://drive.google.com/file/d/1sXrkO5cC8ETS71nPmX00rWo7SY2BX4k6/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/14wSgWkSHp-gZplrOiFO0h5TyXqGXEpy0/view?usp=drivesdk',
      'https://drive.google.com/file/d/1U2u6tff07Xtr3JlYkmP9zSZvkoqapP-L/view?usp=drivesdk',
      'https://drive.google.com/file/d/1gC9WMwtRCjx3L0XKn1UuNGYY3QCLURZg/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Excelente suplemento proteico vegetal para complementar la dieta diaria.',
      'Apoyo en planes de actividad física y saciedad saludable.'
    ],
    claims_no_permitidos: [
      'Cura trastornos metabólicos graves.',
      'Garantiza aumento de masa muscular sin entrenamiento físico.'
    ],
    videoUrl: 'https://youtu.be/ibmFBtCzf4g'
  },
  {
    id: 'ganoderma-candy',
    nombre: 'Ganoderma Candy (Caramelos de Ganoderma)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelos duros enriquecidos con extracto de Ganoderma Lucidum para disfrutar las propiedades del Reishi en formato dulce.',
    descripcion: 'Ganoderma Candy HGW ofrece una manera práctica y sabrosa de consumir extracto de Ganoderma lucidum durante la jornada. Un caramelo funcional que complementa las defensas y proporciona un momento de placer saludable en cualquier lugar.',
    beneficios: [
      'Aporte de triterpenos y polisacáridos del Ganoderma.',
      'Formato portátil en frasco cómodo para llevar.',
      'Excelente alternativa a las golosinas tradicionales.'
    ],
    ingredientes: ['Extracto de Ganoderma lucidum', 'Jarabe de glucosa', 'Azúcar', 'Aromatizantes naturales'],
    presentacion: 'Frasco con 60 caramelos (30 g)',
    precio: 8.30,
    precio_distribuidor: 5.80,
    BV: 2.90,
    materia_prima: 'Ganoderma Lucidum',
    imagen: 'https://lh3.googleusercontent.com/d/1HQHBV5uwqiP9c9Vm4zCsdZoPymiy5q09',
    driveUrl: 'https://drive.google.com/file/d/1HQHBV5uwqiP9c9Vm4zCsdZoPymiy5q09/view?usp=drivesdk',
    claims_permitidos: [
      'Caramelos funcionales con extracto de Ganoderma.',
      'Disfruta de las bondades del Reishi en un dulce práctico.'
    ],
    claims_no_permitidos: [
      'Cura enfermedades inmunes o crónicas.'
    ]
  },
  {
    id: 'biolacti-candy',
    nombre: 'Biolacti Candy (Caramelo con Probióticos)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelo duro con cepas probióticas activas y sabor a leche descremada para apoyar el equilibrio de la flora intestinal.',
    descripcion: 'Biolacti Candy HGW es un innovador caramelo enriquecido con microorganismos benéficos (Lactobacillus acidophilus, Bifidobacterium lactis y Streptococcus thermophilus). Con un delicioso sabor a leche descremada y bajo contenido de azúcar, apoya la microbiota digestiva de manera práctica.',
    beneficios: [
      'Aporta cepas probióticas activas para el balance intestinal.',
      'Favorece el confort digestivo después de las comidas.',
      'Delicioso sabor a leche descremada con bajo nivel de azúcar.',
      'Formato práctico de 60 unidades por frasco.'
    ],
    ingredientes: ['Lactobacillus acidophilus', 'Bifidobacterium lactis', 'Streptococcus thermophilus', 'Leche descremada en polvo', 'Lactosa'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Probióticos y leche descremada',
    imagen: 'https://lh3.googleusercontent.com/d/1rwI9Shy4hp1oHAAHsmcGYrdgkKsC41MS',
    driveUrl: 'https://drive.google.com/file/d/1rwI9Shy4hp1oHAAHsmcGYrdgkKsC41MS/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1zUg42gcrv42BM_MCHkS9wTCBzWge3PsC/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Complemento con probióticos para el cuidado diario de la flora digestiva.',
      'Caramelo práctico con delicioso sabor lácteo.'
    ],
    claims_no_permitidos: [
      'Cura infecciones intestinales agudas o diarrea bacteriana grave.'
    ]
  },
  {
    id: 'gestifruit-candy',
    nombre: 'Gestifruit Candy (Caramelo de Mandarina)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelo duro sabor mandarina cítrica con extractos de espino blanco, melena de león y ñame silvestre para frescura digestiva.',
    descripcion: 'Gestifrut Candy HGW combina el sabor cítrico y refrescante de la mandarina con extractos botánicos de espino blanco, hongo melena de león (Hericium erinaceus), ñame silvestre y fucoidan. Una alternativa dulce y digestiva para disfrutar en cualquier momento.',
    beneficios: [
      'Sabor cítrico vibrante que revitaliza el aliento y paladar.',
      'Con melena de león y extractos herbales digestivos.',
      'Contiene vitamina C natural de la mandarina.',
      'Práctico envase para bolso o auto.'
    ],
    ingredientes: ['Extracto de mandarina (Citrus reticulata)', 'Extracto de espino blanco', 'Extracto de melena de león', 'Extracto de ñame silvestre', 'Fucoidan', 'Sorbitol'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Mandarina y mezcla herbal',
    imagen: 'https://lh3.googleusercontent.com/d/1goszEagtDMq7K1G9A7u9IXcDVU7IDqAO',
    driveUrl: 'https://drive.google.com/file/d/1goszEagtDMq7K1G9A7u9IXcDVU7IDqAO/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/15rKusJJbgUAzB6Yu8vH9FSGSSbfQVkbK/view?usp=drivesdk',
      'https://drive.google.com/file/d/1kNbj0DzhZj2xecPgte9lgONmTbd2q9Kd/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Caramelo refrescante con extractos botánicos y vitamina C.',
      'Sabor natural a mandarina para consentirte sanamente.'
    ],
    claims_no_permitidos: [
      'Cura úlceras gástricas o gastritis severa.'
    ],
    videoUrl: 'https://youtu.be/DKMWnP3wmI8'
  },
  {
    id: 'peptipro-candy',
    nombre: 'Peptipro Candy (Colágeno y Ginseng)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelo duro con péptidos bioactivos de colágeno, ginseng y rosa mosqueta para vitalidad y cuidado de la piel.',
    descripcion: 'Peptipro Candy HGW reúne el poder del colágeno hidrolizado y la fuerza tonificante del Panax Ginseng en un caramelo práctico y de agradable sabor herbal. Una forma novedosa de cuidar tu piel, cabello y energía sin necesidad de batidos ni preparaciones.',
    beneficios: [
      'Péptidos de colágeno de fácil absorción bucal.',
      'Extracto de ginseng para vitalidad y reducción de fatiga.',
      'Con rosa mosqueta y nutrientes vegetales.',
      'Fácil de llevar al trabajo, gimnasio o viajes.'
    ],
    ingredientes: ['Péptidos de colágeno', 'Ginseng (Panax ginseng)', 'Rosa mosqueta', 'Soya', 'Frijol mungo', 'Sorbitol'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Colágeno hidrolizado y Ginseng',
    imagen: 'https://lh3.googleusercontent.com/d/1gHxY-UX5puIPcxK6R135h2MX3bEBGska',
    driveUrl: 'https://drive.google.com/file/d/1gHxY-UX5puIPcxK6R135h2MX3bEBGska/view?usp=drivesdk',
    claims_permitidos: [
      'Caramelos funcionales con colágeno y ginseng para tu rutina de belleza y energía.',
      'Fórmula práctica para disfrutar en cualquier lugar.'
    ],
    claims_no_permitidos: [
      'Elimina las arrugas en 24 horas.',
      'Cura dolores articulares crónicos.'
    ],
    videoUrl: 'https://youtu.be/rhfnW6UU5II'
  },
  {
    id: 'moruva-candy',
    nombre: 'Moruva Candy (Moringa y Uva)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelos duros que combinan la riqueza nutricional de la Moringa y el poder antioxidante del extracto de uva.',
    descripcion: 'Moruva Candy HGW fusiona las propiedades de la moringa oleifera ("el árbol de la vida") y las uvas ricas en resveratrol. Un caramelo dulce y natural que aporta fitonutrientes y antioxidantes para revitalizar el cuerpo a lo largo del día.',
    beneficios: [
      'Extracto de moringa rico en vitaminas y minerales.',
      'Resveratrol y polifenoles del extracto de uva.',
      'Alternativa dulce de origen 100% vegetal.',
      'Sabor frutal agradable para toda la familia.'
    ],
    ingredientes: ['Extracto de moringa', 'Extracto de uva', 'Jarabe de glucosa', 'Azúcar'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Moringa y uva',
    imagen: 'https://lh3.googleusercontent.com/d/1gbrmhS136n1Pej_K26zLQalBM_dDS_4V',
    driveUrl: 'https://drive.google.com/file/d/1gbrmhS136n1Pej_K26zLQalBM_dDS_4V/view?usp=drivesdk',
    claims_permitidos: [
      'Dulce botánico con antioxidantes de moringa y uva.',
      'Acompañamiento nutritivo y sabroso para tu jornada.'
    ],
    claims_no_permitidos: [
      'Cura la diabetes o hipertensión.'
    ]
  },
  {
    id: 'herbal-fresh-candy',
    nombre: 'Herbal Fresh Candy HGW (Caramelo Herbal Refrescante)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelo duro con extractos herbales refrescantes para cuidar la garganta, brindar aliento limpio y frescura.',
    descripcion: 'Herbal Fresh Candy HGW es un caramelo botánico elaborado con extractos seleccionados que brindan un alivio inmediato a la garganta y una sensación de frescura bucal prolongada.',
    beneficios: [
      'Frescura intensa para la garganta y aliento limpio.',
      'Fórmula con extractos botánicos naturales.',
      'Envase práctico de 60 unidades fácil de transportar.'
    ],
    ingredientes: ['Extractos herbales naturales', 'Menta', 'Sorbitol', 'Jarabe vegetal'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Extractos herbales y menta',
    imagen: 'https://lh3.googleusercontent.com/d/1og_3IQNAgPXBsql5AO_ImYNRqoAblMkV',
    driveUrl: 'https://drive.google.com/file/d/1og_3IQNAgPXBsql5AO_ImYNRqoAblMkV/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1Ocrmo8B5Ghx0gbiminuU22TYkMUOaiLu/view?usp=drivesdk',
      'https://drive.google.com/file/d/1tsoE60ELuphASUcfxcV0yv51QfViGjqy/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Caramelos refrescantes con extractos herbales.',
      'Ideal para cuidar la garganta y refrescar el aliento.'
    ],
    claims_no_permitidos: [
      'Cura infecciones bacterianas de garganta.'
    ]
  },
  {
    id: 'coffee-candy',
    nombre: 'Coffee Candy HGW (Caramelos de Café)',
    categoria: 'Serie Candys HGW',
    descripcion_corta: 'Caramelos con auténtico extracto de café para un toque de energía, sabor gourmet y concentración durante el día.',
    descripcion: 'Coffee Candy HGW concentra el sabor y la vitalidad del café gourmet en un práctico caramelo. Ideal para conductores, estudiantes y trabajadores que necesitan una dosis rápida de frescura y atención.',
    beneficios: [
      'Auténtico sabor a café gourmet con cafeína natural.',
      'Ayuda a mantener la atención y despejar la mente.',
      'Presentación de bolsillo en frasco de 60 unidades.'
    ],
    ingredientes: ['Extracto de café tostado', 'Jarabe de glucosa', 'Azúcar', 'Aromas naturales'],
    presentacion: 'Frasco con 60 unidades (30 g)',
    precio: 5.80,
    precio_distribuidor: 4.00,
    BV: 2.00,
    materia_prima: 'Café tostado selecto',
    imagen: 'https://lh3.googleusercontent.com/d/11s3bTucHLGU1SnORVRSj62KWk4_9q5UH',
    driveUrl: 'https://drive.google.com/file/d/11s3bTucHLGU1SnORVRSj62KWk4_9q5UH/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1SmLTYYOVnqjQTMQ4imp7oe2T40cf4JEc/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Kan7CVIAsQyZPzmNNJPOqyuNGPtP6DDe/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Caramelos con sabor a café para recargar el día.',
      'Sabor delicioso y estimulante.'
    ],
    claims_no_permitidos: [
      'Sustituto de tratamientos para la narcolepsia.'
    ]
  },
  {
    id: 'choco-blue',
    nombre: 'Choco Blue (Chocolate con Arándanos)',
    categoria: 'Chocolates Orgánicos Saludables',
    descripcion_corta: 'Bebida instantánea de cacao natural, leche descremada y arándanos, rica en antioxidantes y sabor reconfortante.',
    descripcion: 'Choco Blue HGW es una deliciosa bebida de chocolate en polvo elaborada con cacao natural de primera calidad, leche descremada y polvo de arándano. Aporta la energía reconfortante del chocolate con los beneficios antioxidantes y cardiovasculares de los arándanos, en un perfil bajo en grasa.',
    beneficios: [
      'Cacao natural rico en flavonoides protectores.',
      'Arándano con antocianinas para la salud visual y celular.',
      'Con leche descremada baja en grasa y fuente de calcio.',
      'Fácil preparación con agua caliente o leche vegetal.'
    ],
    ingredientes: ['Cacao natural en polvo', 'Leche descremada en polvo', 'Polvo de arándanos', 'Azúcar'],
    presentacion: 'Caja con 20 sachets de 33 g (660 g total)',
    precio: 40.00,
    precio_distribuidor: 28.00,
    BV: 11.20,
    materia_prima: 'Cacao puro y arándano',
    imagen: 'https://lh3.googleusercontent.com/d/1jVJZz8JiIhGSd3ryDxGvHFLFhFo1t1_E',
    driveUrl: 'https://drive.google.com/file/d/1jVJZz8JiIhGSd3ryDxGvHFLFhFo1t1_E/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/15u-upP9Ikr5wT3NaXBhuqxYnu5i6V6aI/view?usp=drivesdk',
      'https://drive.google.com/file/d/1bz46PTKOarDxdQbT9un0bz5nP7NK5CTy/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Bebida achocolatada nutritiva con arándanos para toda la familia.',
      'Placer reconfortante con antioxidantes naturales.'
    ],
    claims_no_permitidos: [
      'Cura problemas cardíacos o cerebrales.'
    ]
  },
  {
    id: 'choco-gano',
    nombre: 'Choco Gano (Chocolate con Ganoderma)',
    categoria: 'Chocolates Orgánicos Saludables',
    descripcion_corta: 'Chocolate en polvo gourmet con Ganoderma Lucidum y leche descremada para energía, defensas y sabor placentero.',
    descripcion: 'Choco Gano HGW une el reconfortante sabor del cacao puro con el extracto milenario de Ganoderma Lucidum. Diseñado para ofrecer energía sostenida, vitalidad y apoyo al sistema inmune, manteniendo una textura cremosa y un perfil nutricional balanceado.',
    beneficios: [
      'Cacao premium con extracto bioactivo de Ganoderma lucidum.',
      'Apoya las defensas y la respuesta inmunológica natural.',
      'Perfil bajo en grasa gracias a la leche descremada.',
      'Listo en instantes en agua o leche caliente.'
    ],
    ingredientes: ['Cacao en polvo', 'Leche descremada en polvo', 'Extracto de Ganoderma lucidum', 'Azúcar'],
    presentacion: 'Caja con 20 sachets de 33 g (660 g total)',
    precio: 40.00,
    precio_distribuidor: 28.00,
    BV: 11.20,
    materia_prima: 'Cacao y Ganoderma Lucidum',
    imagen: 'https://lh3.googleusercontent.com/d/1U9wWgRhWaGPs27VaNXD00SILOIs2RoT-',
    driveUrl: 'https://drive.google.com/file/d/1U9wWgRhWaGPs27VaNXD00SILOIs2RoT-/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/14nDoRq2jYsuMPdEUwY6E6JRtEtnlk5Bt/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IJxApdBbMM3PVAGtPLjQMxQdwbeEwYlQ/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Chocolate funcional con Ganoderma para nutrir tus mañanas y tardes.',
      'Rico sabor con propiedades antioxidantes y defensivas.'
    ],
    claims_no_permitidos: [
      'Tratamiento curativo de enfermedades tumorales o virales.'
    ]
  },
  {
    id: 'spirulina-plus-capsule',
    nombre: 'Spirulina Plus Capsule (Espirulina en Cápsula)',
    categoria: 'Suplementos Nutricionales',
    descripcion_corta: 'Superalimento celular en cápsulas a base de microalga Spirulina Platensis y Ginseng Americano con nanotecnología.',
    descripcion: 'Spirulina Plus Capsule HGW es el suplemento nutricional completo por excelencia. Contiene microalga Spirulina Platensis cultivada con altos estándares biológicos, enriquecida con Ginseng Americano procesado mediante nanotecnología para máxima biodisponibilidad. Aporta más del 56% de proteínas, aminoácidos esenciales, clorofila, ficocianina, hierro, zinc y vitaminas.',
    beneficios: [
      'Considerado el "alimento ideal del siglo XXI" por la FAO.',
      'Aporte completo de proteínas vegetales y todos los aminoácidos esenciales.',
      'Ayuda a regular la inmunidad y combatir la fatiga física y mental.',
      'Nutrición concentrada rica en hierro, ficocianina y clorofila.',
      'Protege la mucosa gástrica y apoya la vitalidad general.'
    ],
    ingredientes: ['Spirulina Platensis en polvo', 'Ginseng Americano (Panax quinquefolius)'],
    presentacion: 'Frasco con 60 cápsulas de 500 mg c/u (30 g)',
    precio: 25.00,
    precio_distribuidor: 17.00,
    BV: 8.50,
    materia_prima: 'Spirulina Platensis y Ginseng Americano',
    imagen: 'https://lh3.googleusercontent.com/d/1SADmRbxl3z9_CEBgDHuLc2O7nQR79rJR',
    driveUrl: 'https://drive.google.com/file/d/1SADmRbxl3z9_CEBgDHuLc2O7nQR79rJR/view?usp=drivesdk',
    claims_permitidos: [
      'Superalimento concentrado con vitaminas, minerales y proteínas.',
      'Apoyo nutricional integral para personas activas o convalecientes.',
      'Cápsulas de fácil ingesta sin receta médica.'
    ],
    claims_no_permitidos: [
      'Cura el cáncer tras quimioterapia.',
      'Cura la anemia ferropénica severa de la noche a la mañana.'
    ]
  },
  {
    id: 'plantillas-turmalina',
    nombre: 'Plantillas de Turmalina para el Cuidado de la Salud',
    categoria: 'Artículos Terapéuticos y Bienestar',
    descripcion_corta: 'Plantillas ergonómicas con cristales de turmalina para estimulación de puntos de reflexología podal y confort.',
    descripcion: 'Las Plantillas de Turmalina HGW están desarrolladas para brindar confort térmico y estimulación de los puntos energéticos de la planta del pie. Al caminar, la fricción natural activa las propiedades de la piedra de turmalina, generando calor suave e iones negativos que apoyan la microcirculación y reducen el cansancio de piernas y pies.',
    beneficios: [
      'Efecto térmico natural y emisión de aniones por fricción.',
      'Estimulación de puntos clave de reflexología podal.',
      'Ayuda a reducir la fatiga en jornadas de pie prolongadas.',
      'Recortables para ajustarse a cualquier talla de calzado.'
    ],
    ingredientes: ['Fibras térmicas especiales', 'Partículas de piedra de turmalina natural', 'EVA amortiguadora'],
    presentacion: '1 par de plantillas ajustables',
    precio: 9.00,
    precio_distribuidor: 6.00,
    BV: 3.00,
    materia_prima: 'Turmalina natural y fibra técnica',
    imagen: 'https://lh3.googleusercontent.com/d/1nhF-NyKBXeXUxqOOaZPE9-XWpqs5C9y_',
    driveUrl: 'https://drive.google.com/file/d/1nhF-NyKBXeXUxqOOaZPE9-XWpqs5C9y_/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1YEQ5pfuudlaMJjjvow20fN6wrtNgUi6E/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Plantillas para confort y bienestar al caminar.',
      'Tecnología de turmalina natural sin cables ni baterías.'
    ],
    claims_no_permitidos: [
      'Cura la fascitis plantar o artritis de forma milagrosa.'
    ]
  },
  {
    id: 'protector-rodilla-turmalina',
    nombre: 'Protector de Rodilla Autocalentable de Turmalina',
    categoria: 'Artículos Terapéuticos y Bienestar',
    descripcion_corta: 'Rodillera ergonómica con nanoturmalina e infrarrojo lejano que genera calor natural para aliviar molestias articulares.',
    descripcion: 'El Protector de Rodilla de Turmalina HGW proporciona soporte, estabilidad y un reconfortante efecto térmico natural. Las partículas de turmalina activan calor e infrarrojo lejano al entrar en contacto con la piel, mejorando la circulación local y ayudando a relajar los músculos y ligamentos de la rodilla.',
    beneficios: [
      'Genera calor natural autocalentable sin necesidad de pilas ni electricidad.',
      'Favorece la circulación sanguínea y alivia la rigidez en la rodilla.',
      'Diseño ergonómico ajustable con velcro de alta resistencia.',
      'Ideal para personas con desgaste articular, deportistas o adultos mayores.'
    ],
    ingredientes: ['Tejido elástico transpirable', 'Nanopartículas de turmalina activa', 'Banda de ajuste de velcro'],
    presentacion: '1 par de rodilleras ajustables',
    precio: 55.00,
    precio_distribuidor: 39.00,
    BV: 15.60,
    materia_prima: 'Piedra de turmalina bioactiva',
    imagen: 'https://lh3.googleusercontent.com/d/1mmdH5ouNcl7Oy4qwA-xmez1Fy6whE66g',
    driveUrl: 'https://drive.google.com/file/d/1mmdH5ouNcl7Oy4qwA-xmez1Fy6whE66g/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1u5cYYuK1H7Veb-fGVPsekXzbDIvExJLv/view?usp=drivesdk',
      'https://drive.google.com/file/d/1iMY7Z8V6G72SF3e4IjL0d9Ge-D0dPEoJ/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Soporte térmico natural para rodillas cansadas o rígidas.',
      'Sensación de calor suave y mayor estabilidad al caminar.'
    ],
    claims_no_permitidos: [
      'Cura lesiones de meniscos rotos o artrosis en fase terminal.',
      'Reemplazo de prótesis o cirugía ortopédica.'
    ]
  },
  {
    id: 'protector-cintura-turmalina',
    nombre: 'Protector de Cintura de Turmalina (Cinturón Lumbar)',
    categoria: 'Artículos Terapéuticos y Bienestar',
    descripcion_corta: 'Cinturón faja lumbar con nanoturmalina y piedras magnéticas para soporte postural y alivio térmico en la espalda.',
    descripcion: 'El Protector de Cintura de Turmalina HGW está diseñado para brindar apoyo lumbar, corregir la postura y ofrecer alivio térmico en la zona baja de la espalda. Combina nanoturmalina y magnetos terapéuticos que emiten calor suave e infrarrojo lejano al contacto con la piel, relajando la musculatura tensa.',
    beneficios: [
      'Soporte lumbar ergonómico que promueve una mejor postura.',
      'Calor terapéutico natural activado por turmalina y magnetos.',
      'Alivia la sensación de tensión y cansancio en la espalda baja.',
      'Ajuste con bandas elásticas dobles de compresión gradual.'
    ],
    ingredientes: ['Tela elástica de alta densidad', 'Puntos de nanoturmalina', 'Imanes magnéticos integrados', 'Cierres de velcro'],
    presentacion: '1 unidad de faja lumbar ajustable',
    precio: 69.00,
    precio_distribuidor: 48.00,
    BV: 19.20,
    materia_prima: 'Nanoturmalina y piedras magnéticas',
    imagen: 'https://lh3.googleusercontent.com/d/1r3aUhi5333obLfnW20I8_VQGch-joevd',
    driveUrl: 'https://drive.google.com/file/d/1r3aUhi5333obLfnW20I8_VQGch-joevd/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1BFUS4vusJt949hJCOehQSftMAywoqSpx/view?usp=drivesdk',
      'https://drive.google.com/file/d/1PwJi9q9lCwzCFFh_EF590VwNkxOboDgi/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Faja con tecnología de calor natural para confort lumbar.',
      'Soporte firme para actividades cotidianas o largas horas sentado.'
    ],
    claims_no_permitidos: [
      'Quema toda la grasa abdominal sin hacer dieta.',
      'Cura hernias discales o deformidades de columna.'
    ]
  },
  {
    id: 'protector-cuello-turmalina',
    nombre: 'Protector de Cuello Autocalentable de Turmalina (Cuellera)',
    categoria: 'Artículos Terapéuticos y Bienestar',
    descripcion_corta: 'Cuellera cervical con turmalina activa para aliviar tensiones por trabajo de oficina, pantallas y malas posturas.',
    descripcion: 'El Protector de Cuello de Turmalina HGW proporciona soporte cervical y calor suave focalizado. Especialmente útil para personas que pasan muchas horas frente a computadoras o teléfonos, ayuda a relajar la musculatura del cuello y hombros, favoreciendo el descanso y la relajación.',
    beneficios: [
      'Alivio de la tensión y rigidez en la zona cervical.',
      'Calor natural sin cables ni baterías.',
      'Diseño ligero, cómodo y fácil de colocar en cualquier momento.',
      'Uso recomendado de 15 a 45 minutos al día.'
    ],
    ingredientes: ['Neopreno suave y transpirable', 'Matriz de nanoturmalina autocalentable', 'Velcro ajustable'],
    presentacion: '1 unidad',
    precio: 16.00,
    precio_distribuidor: 11.00,
    BV: 4.40,
    materia_prima: 'Turmalina natural',
    imagen: 'https://lh3.googleusercontent.com/d/1bhhZCig3sZYn_9qdLUHO0NXW8QN-M5VD',
    driveUrl: 'https://drive.google.com/file/d/1bhhZCig3sZYn_9qdLUHO0NXW8QN-M5VD/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1gtwL3ulyWc8iWeu_0H0NAei-JZxQOk1T/view?usp=drivesdk',
      'https://drive.google.com/file/d/1CvrdxAX3gxetirnpHAVyfqCrpRSQ9Ol0/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Accesorio de confort térmico para el cuello y cervicales.',
      'Ayuda a relajar la musculatura tensa tras largas jornadas.'
    ],
    claims_no_permitidos: [
      'Cura la espondilosis cervical o dolores neurológicos severos.'
    ]
  },
  {
    id: 'toalla-sanitaria-dia',
    nombre: 'Toalla Sanitaria con Turmalina Uso Día',
    categoria: 'Cuidado Personal e Higiene Femenina',
    descripcion_corta: 'Toalla femenina diurna con banda aniónica de turmalina, diseño anatómico y absorción rápida para días activos.',
    descripcion: 'Enjoyable Day Use HGW ofrece la protección perfecta para el día. Diseñada con canales de absorción rápida, alas laterales de fijación segura y banda aniónica de turmalina para garantizar libertad de movimiento, frescura y comodidad en todo momento.',
    beneficios: [
      'Diseño diurno anatómico con alas de sujeción.',
      'Banda aniónica con turmalina para control de frescura.',
      'Capa de algodón suave que no irrita la piel.',
      'Alta capacidad de absorción con sensación seca.'
    ],
    ingredientes: ['Celulosa', 'Tela no tejida de algodón', 'Banda de turmalina', 'Película transpirable'],
    presentacion: 'Paquete con 10 unidades',
    precio: 5.00,
    precio_distribuidor: 3.50,
    BV: 1.70,
    materia_prima: 'Algodón y turmalina',
    imagen: 'https://lh3.googleusercontent.com/d/1xQZJzQQGP7Xf1HdcIZsbaoHMEdgteXm8',
    driveUrl: 'https://drive.google.com/file/d/1xQZJzQQGP7Xf1HdcIZsbaoHMEdgteXm8/view?usp=drivesdk',
    claims_permitidos: [
      'Máxima comodidad y protección diurna con tecnología de aniones.',
      'Cuidado femenino delicado y transpirable.'
    ],
    claims_no_permitidos: [
      'Cura cólicos médicos severos o enfermedades endometriales.'
    ]
  },
  {
    id: 'toalla-sanitaria-noche',
    nombre: 'Toalla Sanitaria con Turmalina Uso Noche',
    categoria: 'Cuidado Personal e Higiene Femenina',
    descripcion_corta: 'Toallas higiénicas nocturnas con suave algodón orgánico y banda aniónica de turmalina para máxima absorción y frescura.',
    descripcion: 'Enjoyable Night Use HGW es una toalla higiénica femenina especialmente diseñada para la noche. Combina una suave capa de algodón hipoalergénico con una banda de turmalina generadora de aniones, proporcionando alta absorción, control de humedad y una sensación prolongada de frescura y tranquilidad durante el descanso.',
    beneficios: [
      'Banda aniónica de turmalina para mayor higiene y frescura.',
      'Capa superior de suave algodón libre de químicos irritantes.',
      'Núcleo superabsorbente con barreras antifugas para la noche.',
      'Empaque higiénico hermético que protege cada unidad.'
    ],
    ingredientes: ['Algodón orgánico suave', 'Banda de turmalina generadora de iones negativos', 'Polímero superabsorbente', 'Película transpirable'],
    presentacion: 'Paquete con 8 unidades',
    precio: 4.50,
    precio_distribuidor: 3.20,
    BV: 1.60,
    materia_prima: 'Algodón y banda de turmalina aniónica',
    imagen: 'https://lh3.googleusercontent.com/d/1vmPomxc2GqLY-TlcYHaZhsg9TVo_2t9T',
    driveUrl: 'https://drive.google.com/file/d/1vmPomxc2GqLY-TlcYHaZhsg9TVo_2t9T/view?usp=drivesdk',
    claims_permitidos: [
      'Higiene íntima femenina superior con tecnología de aniones.',
      'Comodidad, suavidad y protección nocturna sin irritaciones.'
    ],
    claims_no_permitidos: [
      'Cura infecciones bacterianas o enfermedades ginecológicas graves.'
    ]
  },
  {
    id: 'protector-diario-turmalina',
    nombre: 'Protector Íntimo Diario con Turmalina',
    categoria: 'Cuidado Personal e Higiene Femenina',
    descripcion_corta: 'Protectores diarios ultrafinos con banda aniónica de turmalina para frescura, absorción y confianza todo el día.',
    descripcion: 'Enjoyable Panty Liner HGW es un protector íntimo ultrafino diseñado para el confort y la higiene diaria femenina. Su banda central de turmalina genera iones negativos que ayudan a mantener una sensación limpia y fresca durante las actividades cotidianas.',
    beneficios: [
      'Diseño anatómico ultrafino y discreto.',
      'Banda aniónica de turmalina para frescura y control de olores.',
      'Capa de algodón suave y transpirable.',
      'Ideal para uso diario continuo.'
    ],
    ingredientes: ['Celulosa suave', 'Tela no tejida de algodón', 'Banda con extracto de turmalina aniónica', 'Polipropileno'],
    presentacion: 'Paquete con 30 unidades',
    precio: 5.00,
    precio_distribuidor: 3.50,
    BV: 1.70,
    materia_prima: 'Algodón y turmalina aniónica',
    imagen: 'https://lh3.googleusercontent.com/d/1BG5WNt0-W9QqvtKGE8P6EvwicZbAlcGA',
    driveUrl: 'https://drive.google.com/file/d/1BG5WNt0-W9QqvtKGE8P6EvwicZbAlcGA/view?usp=drivesdk',
    claims_permitidos: [
      'Protección e higiene diaria con confort y frescura prolongada.',
      'Hipoalergénico y suave con la piel íntima.'
    ],
    claims_no_permitidos: [
      'Cura miomas, quistes o infecciones.'
    ]
  },
  {
    id: 'pen-gel-intimo',
    nombre: 'Pen Gel Íntimo Femenino HGW',
    categoria: 'Cuidado Personal e Higiene Femenina',
    descripcion_corta: 'Gel íntimo botánico formulado para el cuidado, hidratación, equilibrio del pH y confort en la zona íntima.',
    descripcion: 'Pen Gel HGW es una fórmula ginecológica suave con extractos botánicos naturales diseñada para la higiene, equilibrio y bienestar de la zona íntima femenina.',
    beneficios: [
      'Equilibrio óptimo del pH íntimo.',
      'Hidratación y sensación de alivio y frescura.',
      'Fórmula botánica suave y no irritante.'
    ],
    ingredientes: ['Extractos botánicos purificados', 'Ácido láctico', 'Glicerina vegetal', 'Agua desionizada'],
    presentacion: 'Caja con aplicadores individuales',
    precio: 18.00,
    precio_distribuidor: 12.50,
    BV: 6.00,
    materia_prima: 'Extractos botánicos calmantes',
    imagen: 'https://lh3.googleusercontent.com/d/1erQ4yMHlxpIgMwmp5cHUmQM3nbKgxaEp',
    driveUrl: 'https://drive.google.com/file/d/1erQ4yMHlxpIgMwmp5cHUmQM3nbKgxaEp/view?usp=drivesdk',
    claims_permitidos: [
      'Higiene y cuidado íntimo suave y reconfortante.',
      'Favorece el balance y la hidratación de la zona delicada.'
    ],
    claims_no_permitidos: [
      'Cura enfermedades de transmisión sexual o infecciones graves.'
    ]
  },
  {
    id: 'press-on-nails',
    nombre: 'Press On Nails (Uñas Acrílicas Postizas)',
    categoria: 'Belleza y Cuidado Personal',
    descripcion_corta: 'Sets de uñas postizas de aplicación rápida en minutos, reutilizables y con diseños modernos y elegantes.',
    descripcion: 'Press On Nails HGW permite transformar la apariencia de tus manos en minutos, logrando una manicura elegante y profesional desde casa. Con variedad de formas y diseños contemporáneos, son reutilizables y no dañan las uñas naturales cuando se usan correctamente.',
    beneficios: [
      'Manicura profesional lista en 10 minutos.',
      'Reutilizables con adhesivos de calidad.',
      'Variedad de tamaños y estilos para toda ocasión.',
      'No requiere lámparas UV ni químicos agresivos.'
    ],
    ingredientes: ['Acrílico de grado cosmético', 'Adhesivos hipoalergénicos', 'Mini lima y palito de naranjo'],
    presentacion: 'Caja con 24 a 30 piezas + accesorios de colocación',
    precio: 8.58,
    precio_distribuidor: 6.00,
    BV: 1.20,
    materia_prima: 'Acrílico cosmético',
    imagen: 'https://lh3.googleusercontent.com/d/1bF3G97NO_XRwR41uWi26lMvNq5qTz3hh',
    driveUrl: 'https://drive.google.com/file/d/1bF3G97NO_XRwR41uWi26lMvNq5qTz3hh/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/15sCBYw7djn_eJqvUZvRQZVlccsp4Gxv5/view?usp=drivesdk',
      'https://drive.google.com/file/d/1OrnKTe8u3eFqkYJ7ucQ6C3BcNiBHVRm6/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Uñas listas para lucir elegantes al instante.',
      'Fácil colocación y remoción sin dañar la uña natural.'
    ],
    claims_no_permitidos: [
      'Uñas permanentes que nunca se caen.'
    ]
  },
  {
    id: 'colgante-piedra-energetica',
    nombre: 'Colgante de Piedra Energética (Energy Stone Pendant)',
    categoria: 'Joyería Terapéutica y Accesorios',
    descripcion_corta: 'Colgante exclusivo con piedra volcánica y turmalina emisora de iones negativos para protección y equilibrio energético.',
    descripcion: 'El Colgante de Piedra Energética HGW es una pieza refinada diseñada para acompañar tu día con estilo y serenidad. Inspirado en la tradición holística oriental, incorpora minerales naturales y turmalina que emiten aniones protectores, favoreciendo la sensación de vitalidad, enfoque mental y armonía.',
    beneficios: [
      'Emisión natural de iones negativos protectores.',
      'Ayuda a mantener la serenidad y la concentración mental.',
      'Diseño elegante y versátil para uso diario continuo.',
      'Protección holística en entornos con alta radiación electrónica.'
    ],
    ingredientes: ['Piedras minerales de turmalina natural', 'Cordón hipoalergénico'],
    presentacion: '1 unidad en estuche de lujo',
    precio: 50.00,
    precio_distribuidor: 35.00,
    BV: 21.00,
    materia_prima: 'Turmalina negra y minerales bioenergéticos',
    imagen: 'https://lh3.googleusercontent.com/d/1HAB5j8wJlW3qAg2p99Ukhkxwl4yJtonJ',
    driveUrl: 'https://drive.google.com/file/d/1HAB5j8wJlW3qAg2p99Ukhkxwl4yJtonJ/view?usp=drivesdk',
    claims_permitidos: [
      'Colgante artesanal con piedras naturales de turmalina.',
      'Accesorio elegante para bienestar y equilibrio personal.'
    ],
    claims_no_permitidos: [
      'Escudo mágico que cura enfermedades o elimina todas las radiaciones.'
    ]
  },
  {
    id: 'collar-turmalina',
    nombre: 'Collar de Turmalina HGW',
    categoria: 'Joyería Terapéutica y Accesorios',
    descripcion_corta: 'Collar hecho a mano con cuentas de turmalina multicolor pulida, combinando elegancia y armonía natural.',
    descripcion: 'El Collar de Turmalina HGW es una pieza artesanal elaborada con auténticas piedras de turmalina en diversos tonos naturales. Además de su belleza visual como joya exclusiva, la turmalina es reconocida en la gemoterapia por su energía receptiva y calmante que aporta equilibrio y ligereza.',
    beneficios: [
      'Elaborado artesanalmente con piedras de turmalina natural.',
      'Diseño sofisticado que complementa cualquier atuendo.',
      'Piedra apreciada por sus propiedades holísticas y de serenidad.',
      'Cierre seguro y ajuste ergonómico.'
    ],
    ingredientes: ['Cuentas de piedra de turmalina natural seleccionadas'],
    presentacion: '1 unidad en estuche protector',
    precio: 40.00,
    precio_distribuidor: 28.00,
    BV: 16.80,
    materia_prima: 'Turmalina natural pulida',
    imagen: 'https://lh3.googleusercontent.com/d/1wdDMN4XlpJN2sGED96RH7ZT0kaTr8E6v',
    driveUrl: 'https://drive.google.com/file/d/1wdDMN4XlpJN2sGED96RH7ZT0kaTr8E6v/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1CZ53tY_uYxJjb8Pw6nbCF5YGqIWQgPq3/view?usp=drivesdk',
      'https://drive.google.com/file/d/1uSwUjCcNSCyMHAz0x5mvdNlexv_bB-qf/view?usp=drivesdk',
      'https://drive.google.com/file/d/1m-oJwyYh2s_UYxHSSSg4NFK2AzddhMtw/view?usp=drivesdk',
      'https://drive.google.com/file/d/1AdAnRMxKqvJVNSnS0EkCoz4c6m1VcK99/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Joyería artesanal con turmalina auténtica.',
      'Accesorio distintivo para bienestar emocional y elegancia.'
    ],
    claims_no_permitidos: [
      'Tratamiento médico contra enfermedades de tiroides.'
    ]
  },
  {
    id: 'pulsera-turmalina',
    nombre: 'Pulsera de Turmalina HGW',
    categoria: 'Joyería Terapéutica y Accesorios',
    descripcion_corta: 'Pulsera elástica con piedras pulidas de turmalina para llevar la energía protectora y elegancia en la muñeca.',
    descripcion: 'La Pulsera de Turmalina HGW es un accesorio elegante y versátil que se adapta cómodamente a tu muñeca. Fabricada con cuentas de turmalina seleccionadas, es la compañera perfecta para lucir con estilo mientras disfrutas de una sensación de equilibrio y tranquilidad durante tus actividades diarias.',
    beneficios: [
      'Cuentas pulidas de turmalina natural de alta calidad.',
      'Banda elástica adaptable a diferentes medidas.',
      'Accesorio diario para complementar tu bienestar holístico.'
    ],
    ingredientes: ['Piedras de turmalina natural pulida', 'Hilo elástico de alta resistencia'],
    presentacion: '1 unidad en estuche',
    precio: 20.00,
    precio_distribuidor: 14.00,
    BV: 8.40,
    materia_prima: 'Turmalina natural',
    imagen: 'https://lh3.googleusercontent.com/d/1pd6CAgYuRKp6xDSPcJEoHyCbHnGJOMV7',
    driveUrl: 'https://drive.google.com/file/d/1pd6CAgYuRKp6xDSPcJEoHyCbHnGJOMV7/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1Gmvn2ELPTl3Kwwf4I0E1isvjMEu_Co3o/view?usp=drivesdk',
      'https://drive.google.com/file/d/1WxbDGgZ24YVUPpLXNIesw3sLbRV666KV/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Accesorio de moda y bienestar con piedras naturales.',
      'Diseño unisex cómodo y adaptable.'
    ],
    claims_no_permitidos: [
      'Cura dolores de muñeca o síndrome del túnel carpiano de forma garantizada.'
    ]
  },
  {
    id: 'termo-turmalina-waterson',
    nombre: 'Termo de Turmalina Waterson (Tourmaline Thermo)',
    categoria: 'Equipos y Herramientas Empresariales',
    descripcion_corta: 'Termo de acero inoxidable con filtro interno de piedras de turmalina para alcalinizar e ionizar el agua naturalmente.',
    descripcion: 'El Termo Waterson de Turmalina HGW es un recipiente térmico de acero inoxidable grado alimenticio que incorpora un cartucho interno con esferas de turmalina y minerales activos. Ayuda a transformar el agua común en agua más alcalina, ligera e hidratante de forma natural y sin químicos.',
    beneficios: [
      'Filtro interno de piedras de turmalina natural.',
      'Ayuda a alcalinizar e ionizar el agua potable.',
      'Conserva la temperatura fría o caliente por varias horas.',
      'Acero inoxidable 304 libre de BPA y no tóxico.',
      'Capacidad de 500 ml ideal para llevar a todas partes.'
    ],
    ingredientes: ['Cuerpo de acero inoxidable 304', 'Cartucho mineralizador con piedras de turmalina'],
    presentacion: '1 termo de 500 ml en caja protectora',
    precio: 95.00,
    precio_distribuidor: 65.00,
    BV: 32.50,
    materia_prima: 'Acero inoxidable y cristales de turmalina',
    imagen: 'https://lh3.googleusercontent.com/d/1l7wJQ4JAWdbXk_w6ja4MwHZlDaYU7kzs',
    driveUrl: 'https://drive.google.com/file/d/1l7wJQ4JAWdbXk_w6ja4MwHZlDaYU7kzs/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/18UGgBcYt4YgxAqspXR-VljEwsUD3j6_H/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Termo mineralizador portátil para una hidratación de mejor calidad.',
      'Elegante diseño térmico para oficina, viajes y entrenamiento.'
    ],
    claims_no_permitidos: [
      'Cura la acidez estomacal patológica o enfermedades crónicas por sí solo.'
    ],
    videoUrl: 'https://youtu.be/Q-c8-zc4RFE'
  },
  {
    id: 'taza-termica-coffee-cup',
    nombre: 'Taza Térmica para Café (Coffee Cup HGW)',
    categoria: 'Equipos y Herramientas Empresariales',
    descripcion_corta: 'Vaso térmico hermético de 390 ml para conservar tus cafés y tés HGW calientes o fríos por horas.',
    descripcion: 'El Coffee Cup HGW es un vaso térmico reutilizable de 390 ml con tapa hermética antifugas. Diseñado especialmente para disfrutar de tus cafés funcionales HGW en la oficina, vehículo o caminatas, manteniendo la temperatura óptima y cuidando el medio ambiente.',
    beneficios: [
      'Conserva la temperatura de bebidas calientes y frías por horas.',
      'Tapa hermética con boquilla ergonómica antifugas.',
      'Materiales libres de BPA, ecológico y fácil de lavar.',
      'Tamaño perfecto para portavasos de automóvil (390 ml).'
    ],
    ingredientes: ['Acero inoxidable y polipropileno libre de BPA'],
    presentacion: '1 vaso térmico de 390 ml',
    precio: 26.00,
    precio_distribuidor: 18.00,
    BV: 7.20,
    materia_prima: 'Acero inoxidable grado alimentario',
    imagen: 'https://lh3.googleusercontent.com/d/13XUtP3lzi8O_XbPqj7w3xdA2777aEaDB',
    driveUrl: 'https://drive.google.com/file/d/13XUtP3lzi8O_XbPqj7w3xdA2777aEaDB/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1-IIhkesEGnujzpgAtpahGO3seu0iLIPK/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'El compañero perfecto para tus bebidas calientes o frías HGW.',
      'Resistente, reutilizable y elegante.'
    ],
    claims_no_permitidos: [],
    videoUrl: 'https://youtu.be/4frhNybjsWU'
  },
  {
    id: 'hervidor-electrico',
    nombre: 'Hervidor Eléctrico Rápido HGW',
    categoria: 'Equipos y Herramientas Empresariales',
    descripcion_corta: 'Hervidor eléctrico de alta eficiencia de 1.8 Litros para preparar en segundos tus cafés, tés y batidos funcionales.',
    descripcion: 'El Hervidor Eléctrico HGW calienta agua en pocos minutos con apagado automático de seguridad. Es la herramienta esencial en el hogar o la oficina para preparar al instante toda la gama de cafés saludables, tés e infusiones de Health Green World.',
    beneficios: [
      'Hierve agua en 3 a 5 minutos con bajo consumo energético.',
      'Capacidad familiar de 1.8 Litros.',
      'Apagado automático de seguridad al alcanzar el punto de ebullición.',
      'Cuerpo resistente y base giratoria 360°.'
    ],
    ingredientes: ['Cuerpo de acero inoxidable y plástico resistente al calor'],
    presentacion: '1 unidad (Capacidad 1.8 Litros)',
    precio: 60.00,
    precio_distribuidor: 42.00,
    BV: 8.40,
    materia_prima: 'Componentes eléctricos y acero inoxidable',
    imagen: 'https://lh3.googleusercontent.com/d/1-vuN0OfqCUQQO3TubNXP6YCOqGLvrBA6',
    driveUrl: 'https://drive.google.com/file/d/1-vuN0OfqCUQQO3TubNXP6YCOqGLvrBA6/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1-YT5Gg-QCyHoSn25_7KCSuWwXrbQ5l_S/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Preparación rápida y segura de tus bebidas HGW.',
      'Herramienta indispensable para demostraciones y consumo diario.'
    ],
    claims_no_permitidos: [],
    videoUrl: 'https://youtu.be/xf1qDuBUmY4'
  },
  {
    id: 'vaso-termico-hgw',
    nombre: 'Vaso Térmico HGW',
    categoria: 'Equipos y Herramientas Empresariales',
    descripcion_corta: 'Vaso térmico ergonómico para transportar bebidas hidratantes, tés y cafés con tapa hermética.',
    descripcion: 'Vaso térmico diseñado para el día a día, ideal para llevar agua alcalina o bebidas energéticas durante entrenamientos y viajes.',
    beneficios: [
      'Conserva la frescura y temperatura de tus bebidas.',
      'Diseño liviano, moderno y durable.',
      'Fácil limpieza y transporte.'
    ],
    ingredientes: ['Material térmico de alta durabilidad libre de BPA'],
    presentacion: '1 unidad',
    precio: 31.50,
    precio_distribuidor: 22.00,
    BV: 8.80,
    materia_prima: 'Materiales térmicos grado alimenticio',
    imagen: 'https://lh3.googleusercontent.com/d/1LwTIe6Qc6lilWXTPdhk_9MVfVkgujnlW',
    driveUrl: 'https://drive.google.com/file/d/1LwTIe6Qc6lilWXTPdhk_9MVfVkgujnlW/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/17F-ngbKdmnHNGbQEYqgkmupnjc37F8VD/view?usp=drivesdk'
    ],
    claims_permitidos: ['Práctico y seguro para bebidas frías o calientes.'],
    claims_no_permitidos: []
  },
  {
    id: 'almohada-magnetica-turmalina',
    nombre: 'Almohada Magnética de Turmalina (Magnet Pillow)',
    categoria: 'Artículos Terapéuticos y Bienestar',
    descripcion_corta: 'Almohada ergonómica cervical con placas de turmalina e imanes para un descanso reparador y relajación del cuello.',
    descripcion: 'La Almohada Magnética de Turmalina HGW combina soporte anatómico cervical con tecnología de turmalina e imanes bioenergéticos. Proporciona una agradable sensación de confort térmico y relajación muscular durante las horas de sueño, favoreciendo un despertar renovado.',
    beneficios: [
      'Soporte cervical ergonómico que alinea la columna durante el sueño.',
      'Puntos de turmalina que generan calor suave y aniones.',
      'Imanes integrados para promover la relajación profunda.',
      'Funda suave, transpirable y lavable.'
    ],
    ingredientes: ['Espuma viscoelástica de memoria', 'Placas de turmalina mineral', 'Imanes magnéticos terapéuticos', 'Funda transpirable'],
    presentacion: '1 unidad ergonómica',
    precio: 89.00,
    precio_distribuidor: 62.00,
    BV: 18.60,
    materia_prima: 'Turmalina y magnetos',
    imagen: 'https://lh3.googleusercontent.com/d/1fpUgxErX0MQhzbjJ2u2U-wdeZYXpJmhr',
    driveUrl: 'https://drive.google.com/file/d/1fpUgxErX0MQhzbjJ2u2U-wdeZYXpJmhr/view?usp=drivesdk',
    claims_permitidos: [
      'Almohada anatómica para un descanso cervical placentero y confortable.',
      'Tecnología magnética y de turmalina para mayor relax.'
    ],
    claims_no_permitidos: [
      'Cura el insomnio crónico severo o la apnea del sueño.'
    ],
    videoUrl: 'https://youtu.be/HIoeb2uxL0s'
  },
  {
    id: 'pasta-dental-turmalina-negra',
    nombre: 'Pasta Dental con Turmalina Negra HGW',
    categoria: 'Cuidado Personal e Higiene Bucal',
    descripcion_corta: 'Dentífrico botánico con micropartículas de turmalina negra para limpieza profunda, remoción de placa y frescura bucal.',
    descripcion: 'La Pasta Dental con Turmalina Negra HGW aprovecha las cualidades purificadoras del mineral de turmalina para brindar una limpieza dental profunda. Ayuda a combatir la placa bacteriana, proteger el esmalte dental y refrescar el aliento de forma natural y duradera.',
    beneficios: [
      'Micropartículas de turmalina negra para limpieza y remoción de manchas superficiales.',
      'Ayuda a fortalecer las encías y prevenir el mal aliento.',
      'Fórmula suave que cuida el esmalte dental.',
      'Sabor refrescante que perdura durante horas.'
    ],
    ingredientes: ['Extracto de turmalina negra', 'Carbonato de calcio', 'Sorbitol', 'Sílice hidratada', 'Menta natural'],
    presentacion: 'Tubo de 120 g',
    precio: 8.00,
    precio_distribuidor: 5.00,
    BV: 3.00,
    materia_prima: 'Extracto de turmalina negra',
    imagen: 'https://lh3.googleusercontent.com/d/1y-4nNnYCpibPY445jWvimVl0KSv5N9L6',
    driveUrl: 'https://drive.google.com/file/d/1y-4nNnYCpibPY445jWvimVl0KSv5N9L6/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1a4DGuy5n0IxYv3Qz6d5GbuCqfvVDrQaq/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Higiene bucal avanzada con minerales purificadores.',
      'Aliento fresco y encías saludables.'
    ],
    claims_no_permitidos: [
      'Cura la periodontitis avanzada o regenera dientes caídos.'
    ]
  },
  {
    id: 'pasta-dental-turmalina-blanca',
    nombre: 'Pasta Dental con Turmalina Blanca HGW',
    categoria: 'Cuidado Personal e Higiene Bucal',
    descripcion_corta: 'Pasta dental blanqueadora suave con turmalina blanca y minerales para brillo natural y protección del esmalte.',
    descripcion: 'La Pasta Dental con Turmalina Blanca HGW combina extracto de turmalina blanca purificada y agentes abrillantadores naturales para remover manchas superficiales causadas por café o té, manteniendo el esmalte fuerte y el aliento fresco.',
    beneficios: [
      'Efecto blanqueador suave sin dañar el esmalte dental.',
      'Extracto de turmalina blanca para higiene integral.',
      'Control de sarro y frescura bucal prolongada.',
      'Ideal para uso diario de toda la familia.'
    ],
    ingredientes: ['Extracto de turmalina blanca', 'Carbonato de calcio', 'Sílice hidratada', 'Menta refrescante'],
    presentacion: 'Tubo de 120 g',
    precio: 8.00,
    precio_distribuidor: 5.00,
    BV: 3.00,
    materia_prima: 'Turmalina blanca purificada',
    imagen: 'https://lh3.googleusercontent.com/d/18Hc8CNusf3omof2f8XG0LwbWcMVE4Hz5',
    driveUrl: 'https://drive.google.com/file/d/18Hc8CNusf3omof2f8XG0LwbWcMVE4Hz5/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1yUYF947AKl6sHQzr3r1J0osTaKhwLFVg/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Blanqueamiento dental suave y aliento fresco.',
      'Protección diaria con minerales naturales.'
    ],
    claims_no_permitidos: [
      'Blanqueamiento químico abrasivo en 1 segundo.'
    ]
  },
  {
    id: 'pasta-dental-probioticos',
    nombre: 'Pasta Dental con Probióticos HGW',
    categoria: 'Cuidado Personal e Higiene Bucal',
    descripcion_corta: 'Pasta dental formulada con probióticos bioactivos para equilibrar la microbiota bucal y proteger encías sensibles.',
    descripcion: 'La Pasta Dental con Probióticos HGW introduce tecnología de avanzada en el cuidado bucal al incluir cepas probióticas que compiten naturalmente contra las bacterias causantes de caries y placa, protegiendo las encías y manteniendo un aliento limpio y sano.',
    beneficios: [
      'Enriquecida con probióticos para balancear el microbioma oral.',
      'Protección duradera contra la placa y el mal aliento.',
      'Suave con encías sensibles e hipoalergénica.',
      'Aroma fresco y sensación de limpieza natural.'
    ],
    ingredientes: ['Cepas probióticas activas', 'Sorbitol', 'Sílice', 'Extractos botánicos', 'Menta fresca'],
    presentacion: 'Tubo de 120 g',
    precio: 8.00,
    precio_distribuidor: 5.00,
    BV: 2.50,
    materia_prima: 'Probióticos y extractos herbales',
    imagen: 'https://lh3.googleusercontent.com/d/1TGMwLpJczROw8WB3T2SVdCiELpEni6QB',
    driveUrl: 'https://drive.google.com/file/d/1TGMwLpJczROw8WB3T2SVdCiELpEni6QB/view?usp=drivesdk',
    imagenes_adicionales: [
      'https://drive.google.com/file/d/1anfcSThO1ZWfpsVPTCUDuaEqepcb0K6h/view?usp=drivesdk'
    ],
    claims_permitidos: [
      'Dentífrico con probióticos para un cuidado oral equilibrado.',
      'Ideal para el uso diario de toda la familia.'
    ],
    claims_no_permitidos: [
      'Sustituto de tratamientos odontológicos de endodoncia.'
    ]
  },
  {
    id: 'combo-membresia-prejunior',
    nombre: 'Paquete de Activación Prejunior (50 BV)',
    categoria: 'Membresías y Oportunidad HGW',
    descripcion_corta: 'Paquete de inicio rápido para nuevos distribuidores HGW con 30% de descuento en activación y recompras.',
    descripcion: 'La Membresía Prejunior HGW es la puerta de entrada para iniciar tu propio negocio de distribución independiente. Requiere una inversión accesible de aproximadamente $89 a $100 en productos de tu preferencia, otorgándote un 30% de descuento inmediato, acceso a la Academia Digital HGW 24/7 y la posibilidad de ganar hasta 7 bonos de compensación mutua.',
    beneficios: [
      'Inversión accesible (89 - 100 USD aprox.) en productos que tú elijas.',
      '30% de descuento en activación y compras recurrentes.',
      'Acceso al Bono de Inicio Rápido (10% en 2 niveles) y Bono de Equipo (5%).',
      'Tope de ganancia diaria en Bono de Equipo: 50 USD.',
      'Acceso total a la Academia Digital HGW 24/7 y oficina virtual.'
    ],
    ingredientes: ['Selección libre de productos del catálogo HGW hasta acumular 50 BV'],
    presentacion: 'Activación de código oficial HGW + 50 BV en productos',
    precio: 100.00,
    precio_distribuidor: 70.00,
    BV: 50.00,
    materia_prima: 'Oportunidad de Negocio HGW',
    imagen: 'https://hgwpanama.com/wp-content/uploads/2026/08/rango-plata-hgw.webp',
    driveUrl: 'https://drive.google.com/file/d/1qiIrjqio2z9qomLGY5y0iO3lPmqTop5b/view?usp=drivesdk',
    claims_permitidos: [
      'Comienza tu negocio independiente con baja inversión.',
      'Plan de Ganancia Mutua innovador con respaldo internacional en más de 69 países.'
    ],
    claims_no_permitidos: [
      'Garantiza volverse millonario sin trabajar o sin compartir los productos.'
    ]
  },
  {
    id: 'combo-membresia-master',
    nombre: 'Paquete de Activación Master (600 BV)',
    categoria: 'Membresías y Oportunidad HGW',
    descripcion_corta: 'Máxima membresía con 30% en activación, 60% de descuento en recompras, Bono Equipo 10% y tope de $720 diarios.',
    descripcion: 'La Membresía Master HGW es la posición de mayor liderazgo y rentabilidad en la compañía. Con 600 BV en productos, obtienes el máximo beneficio: 60% de descuento en todas tus recompras mensuales (con reconsumo mínimo de solo 10 BV = $20), 10% en Bono de Equipo con tope diario de $720 USD y bono élite hasta 6 niveles de profundidad.',
    beneficios: [
      'Máximo descuento de la compañía: 60% en todas las recompras.',
      'Reconsumo mensual mínimo de solo 10 BV ($20 aprox.).',
      'Bono de Equipo al 10% con tope de ganancia de hasta 720 USD diarios.',
      'Bono Élite del 4% hasta 6 generaciones.',
      'Posicionamiento prioritario en la red de Ganancia Mutua de tu patrocinador.'
    ],
    ingredientes: ['Selección libre de productos HGW hasta completar 600 BV'],
    presentacion: 'Activación Master Oficial HGW (600 BV)',
    precio: 1024.00,
    precio_distribuidor: 614.00,
    BV: 600.00,
    materia_prima: 'Oportunidad de Liderazgo HGW',
    imagen: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp',
    driveUrl: 'https://drive.google.com/file/d/1qiIrjqio2z9qomLGY5y0iO3lPmqTop5b/view?usp=drivesdk',
    claims_permitidos: [
      'Posición óptima para constructores de redes y líderes de negocio.',
      'Máximo margen comercial de reventa (hasta 60% de utilidad).'
    ],
    claims_no_permitidos: [
      'Ingresos pasivos mágicos sin construcción ni duplicación.'
    ]
  }
];

export const HGW_PRODUCTS = INITIAL_PRODUCTS;
