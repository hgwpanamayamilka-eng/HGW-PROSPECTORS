import { BannerFormData, BannerPromptResult } from '../../types';

export function buildMasterBannerPrompt(data: BannerFormData): BannerPromptResult {
  const formatAspect = data.formato === '1:1' 
    ? '1:1 (Square, 1080x1080px)' 
    : data.formato === '9:16' 
      ? '9:16 (Vertical Story / Reel, 1080x1920px)' 
      : '16:9 (Landscape Stage / Banner, 1920x1080px)';

  const mjAspect = data.formato === '1:1' 
    ? '--ar 1:1' 
    : data.formato === '9:16' 
      ? '--ar 9:16' 
      : '--ar 16:9';

  let bannerTitleEs = '';
  let bannerTitleEn = '';
  let bannerSubEs = '';
  let bannerSubEn = '';
  let badgeEs = '';
  let badgeEn = '';
  let backgroundDescriptionEs = '';
  let backgroundDescriptionEn = '';

  switch (data.tipo) {
    case 'bienvenida':
      bannerTitleEs = '¡BIENVENIDO(A) AL EQUIPO HGW!';
      bannerTitleEn = 'WELCOME TO THE HGW TEAM!';
      bannerSubEs = `Nuevo socio(a) emprendedor(a) que inicia su camino al éxito y libertad financiera en Health Green World.`;
      bannerSubEn = `New entrepreneur partner starting the journey to success and financial freedom with Health Green World.`;
      badgeEs = 'NUEVO SOCIO HGW';
      badgeEn = 'NEW HGW PARTNER';
      backgroundDescriptionEs = 'Fondo elegante en tonos verde esmeralda profundo (#0B3D2E) con destellos dorados (#D4AF37), partículas brillantes de luz, confeti dorado sutil y formas geométricas abstractas modernas con textura de lujo.';
      backgroundDescriptionEn = 'Elegant deep emerald green background (#0B3D2E) with luxury gold bokeh sparkles (#D4AF37), subtle gold confetti, floating light beams, and modern geometric luxury glassmorphic shapes.';
      break;

    case 'ascenso_rango':
      bannerTitleEs = `¡FELICITACIONES POR TU NUEVO RANGO ${data.rango?.toUpperCase() || 'DIAMANTE'}!`;
      bannerTitleEn = `CONGRATULATIONS ON YOUR NEW RANK: ${data.rango?.toUpperCase() || 'DIAMOND'}!`;
      bannerSubEs = `Por tu liderazgo extraordinario, constancia, visión y compromiso inquebrantable en HGW.`;
      bannerSubEn = `For your extraordinary leadership, dedication, vision, and unwavering commitment with HGW.`;
      badgeEs = `RANGO: ${data.rango || 'DIAMANTE HGW'}`;
      badgeEn = `RANK: ${data.rango || 'DIAMOND HGW'}`;
      backgroundDescriptionEs = 'Fondo majestuoso de gala con pedestal iluminado, resplandor dorado y esmeralda de alta gama, diamantes brillantes flotantes 3D, rayos de luz volumétrica y laureles dorados de victoria.';
      backgroundDescriptionEn = 'Majestic gala recognition backdrop with illuminated pedestal, luxury emerald and pure gold light flares, 3D floating sparkling diamonds, volumetric light rays, and golden victory laurel wreath elements.';
      break;

    case 'ascenso_membresia':
      bannerTitleEs = `¡NUEVO NIVEL DE MEMBRESÍA: ${data.membresia?.toUpperCase() || 'MASTER'}!`;
      bannerTitleEn = `NEW MEMBERSHIP LEVEL: ${data.membresia?.toUpperCase() || 'MASTER'}!`;
      bannerSubEs = `Maximizando el plan de ganancias de ganancia mutua y desbloqueando el 100% de los beneficios de Health Green World.`;
      bannerSubEn = `Maximizing the mutual benefit compensation plan and unlocking 100% of Health Green World rewards.`;
      badgeEs = `MEMBRESÍA ${data.membresia || 'MASTER'}`;
      badgeEn = `MEMBERSHIP ${data.membresia || 'MASTER'}`;
      backgroundDescriptionEs = 'Fondo premium de alta fidelidad corporativa en degradado esmeralda oscuro y dorado brillante, con un escudo de membresía metálico y brillo reflectivo.';
      backgroundDescriptionEn = 'High-fidelity corporate VIP background in dark emerald and radiant gold gradient, featuring a metallic luxury badge emblem with crisp light reflections.';
      break;

    case 'ganador_viajes':
      bannerTitleEs = `¡CALIFICADO(A) AL VIAJE INTERNACIONAL HGW!`;
      bannerTitleEn = `QUALIFIED FOR THE HGW INTERNATIONAL TRIP!`;
      bannerSubEs = `Destino: ${data.premioNombre || 'Convención Internacional & Crucero de Lujo'}. ¡Tu esfuerzo y liderazgo te llevan por el mundo!`;
      bannerSubEn = `Destination: ${data.premioNombre || 'International Convention & Luxury Cruise'}. Your effort and leadership take you around the world!`;
      badgeEs = 'GANADOR(A) DE VIAJE';
      badgeEn = 'TRAVEL WINNER';
      backgroundDescriptionEs = 'Fondo paradisiaco de lujo con palmeras doradas estilizadas, silueta de crucero de lujo y avión en cielo crepuscular iluminado con acentos dorados y esmeralda.';
      backgroundDescriptionEn = 'Ultra-luxury resort and travel atmosphere with subtle tropical silhouettes, luxury cruise and aircraft accents, golden sunset rays, and emerald crystal particles.';
      break;

    case 'ganador_carro':
      bannerTitleEs = `¡GANADOR(A) DEL BONO DE AUTO 0 KM!`;
      bannerTitleEn = `WINNER OF THE HGW LUXURY CAR BONUS 0 KM!`;
      bannerSubEs = `¡El fruto de tu liderazgo sobre ruedas! Entregando resultados con la oportunidad Health Green World.`;
      bannerSubEn = `Leadership on wheels! Delivering massive results with the Health Green World opportunity.`;
      badgeEs = 'BONO AUTO 0 KM';
      badgeEn = 'LUXURY CAR BONUS';
      backgroundDescriptionEs = 'Escenario de showroom de lujo con iluminación cenital dramática, reflejos en piso de espejo negro, silueta de automóvil deportivo de alta gama y destellos dorados con listón de premio.';
      backgroundDescriptionEn = 'Luxury automotive showroom stage with dramatic overhead spotlights, black mirror floor reflections, sleek high-end car silhouette, and gold winner ribbons with celebration sparks.';
      break;

    case 'ganador_casa':
      bannerTitleEs = `¡GANADOR(A) DEL BONO INMOBILIARIO / CASA DE ENSUEÑO!`;
      bannerTitleEn = `WINNER OF THE DREAM HOUSE REAL ESTATE BONUS!`;
      bannerSubEs = `¡Construyendo un patrimonio sólido y libertad duradera para tu familia con HGW!`;
      bannerSubEn = `Building a solid legacy and lasting freedom for your family with Health Green World!`;
      badgeEs = 'BONO CASA HGW';
      badgeEn = 'DREAM HOUSE BONUS';
      backgroundDescriptionEs = 'Fondo arquitectónico de mansión moderna iluminada con piscina infinita de noche, jardín de lujo, llaves doradas estilizadas con logo HGW y resplandores dorados de celebración.';
      backgroundDescriptionEn = 'Architectural luxury modern estate at twilight with warm interior illumination, infinity pool reflections, stylized golden house key with HGW accents, and celebratory golden light beams.';
      break;

    case 'aniversario':
      bannerTitleEs = `¡CELEBRACIÓN DE ANIVERSARIO HGW GLOBAL!`;
      bannerTitleEn = `HGW GLOBAL ANNIVERSARY CELEBRATION!`;
      bannerSubEs = `Más de 31 años de ciencia, bienestar y prosperidad transformando millones de vidas en más de 69 países.`;
      bannerSubEn = `Over 31 years of science, wellness, and prosperity transforming millions of lives across 69+ countries.`;
      badgeEs = 'GALA DE ANIVERSARIO';
      badgeEn = 'ANNIVERSARY GALA';
      backgroundDescriptionEs = 'Fondo de gala monumental con cortinajes oscuros de seda, fuegos artificiales dorados elegantes en el cielo, pedestal central con corona de laurel y tipografía conmemorativa en relieve de oro puro.';
      backgroundDescriptionEn = 'Monumental gala ballroom atmosphere with dark silk drapery, elegant golden fireworks in the sky, central recognition pedestal with golden laurel emblem, and embossed pure gold lettering.';
      break;
  }

  const photoRefTextEs = data.driveFotoUrl
    ? `\n- FOTOGRAFÍA DEL HOMENAJEADO(A) (ENLACE GOOGLE DRIVE DE ALTA RESOLUCIÓN): ${data.driveFotoUrl}\n* Integrar el rostro y figura del homenajeado(a) de forma nítida, profesional y con iluminación de estudio fotográfico sobre el marco de reconocimiento.`
    : data.fotoHomenajeado
      ? `\n- FOTOGRAFÍA DEL HOMENAJEADO(A): ${data.fotoHomenajeado}`
      : '\n- FOTOGRAFÍA: Retrato fotográfico profesional de un líder o socia con sonrisa auténtica, porte elegante y traje formal/semiformal de negocios.';

  const photoRefTextEn = data.driveFotoUrl
    ? `\n- HONOREE PHOTO REFERENCE (GOOGLE DRIVE HIGH-RES): ${data.driveFotoUrl}\n* Place the honoree's face and body cleanly inside the central recognition frame with studio lighting and ultra-sharp professional portrait finish.`
    : '\n- HONOREE PORTRAIT: Ultra-sharp professional business portrait of an inspiring smiling leader dressed in elegant attire, radiating confidence and success.';

  const sponsorTextEs = data.patrocinador ? `\n- Patrocinador / Líder Ascendente: ${data.patrocinador}` : '';
  const cityTextEs = data.paisCiudad ? `\n- Ciudad / País: ${data.paisCiudad}` : '';
  const customMessageEs = data.mensajePersonalizado ? `\n- Mensaje Especial: "${data.mensajePersonalizado}"` : '';

  const promptSpanish = `Actúa como un Director de Arte y Diseñador Gráfico Senior especializado en banners publicitarios y de reconocimiento corporativo para Network Marketing y eventos de gala de HGW (Health Green World).

Crea un banner gráfico publicitario de reconocimiento de altísimo impacto visual con las siguientes especificaciones:

INFORMACIÓN DEL BANNER:
=======================
1. TÍTULO PRINCIPAL: "${bannerTitleEs}"
2. TIPO DE RECONOCIMIENTO: ${badgeEs}
3. HOMENAJEADO(A): ${data.nombreHomenajeado || 'Líder Destacado(a)'}
${data.rango ? `4. RANGO ALCANZADO: ${data.rango}` : ''}
${data.membresia ? `5. MEMBRESÍA: ${data.membresia}` : ''}
${data.premioNombre ? `6. PREMIO / LOGRO: ${data.premioNombre}` : ''}
${sponsorTextEs}${cityTextEs}${customMessageEs}
7. EMPRESA: Health Green World (HGW) - Multinacional de Salud y Bienestar
8. FORMATO DEL LIENZO: ${formatAspect}

DIRECCIÓN DE ARTE Y COMPOSICIÓN:
================================
- Estilo: Fotografía publicitaria comercial y diseño de afiche de gala premium (VIP Luxury Awards Poster).
- Paleta Cromática: Verde Esmeralda HGW (#0B3D2E, #1F7A5A) combinado con Oro Imperial Pulido (#D4AF37, #FFDF73) y toques de blanco puro y cristalino.
- Iluminación: Iluminación de estudio cinematográfico con luces de recorte doradas, reflejos volumétricos de luz, partículas doradas flotantes y fondo con profundidad de campo desenfocada.
- Tipografía en el Banner: Tipografía display geométrica moderna en relieve metálico dorado 3D y blanco, perfectamente legible, sin faltas ortográficas.
${photoRefTextEs}
- Logo y Elementos de Marca: Escudo circular elegante de HGW, laureles dorados de victoria, sellos de distinción y cintas de felicitación.

INSTRUCCIÓN ESPECIAL PARA EL GENERADOR:
Genera la imagen completa a sangre (full-bleed), sin bordes blancos, ultra nítida, calidad 8K, hiperrealista, con simetría visual impecable y máxima elegancia corporativa.`;

  const promptEnglish = `Ultra-premium corporate recognition banner and awards poster for Health Green World (HGW).
Subject: "${bannerTitleEn}" celebrating honoree "${data.nombreHomenajeado || 'Distinguished Leader'}".
Award Badge: "${badgeEn}".
${data.rango ? `Rank: ${data.rango}.` : ''}
${data.premioNombre ? `Award: ${data.premioNombre}.` : ''}
Visual Style: Luxury VIP award ceremony celebration, commercial advertising photography and high-end graphic design.
Color Palette: Deep Emerald Green (#0B3D2E), brushed imperial gold (#D4AF37), polished chrome accents and crystal highlights.
Background: ${backgroundDescriptionEn}
Lighting: Volumetric rim lighting, dramatic stage spot lights, floating golden dust particles, bokeh light sparks, luxury ambient occlusion.
${photoRefTextEn}
Composition: Balanced centered hierarchy, metallic 3D golden typography, victory laurels, gold ribbons, cinematic lighting, 8k resolution, photorealistic, sharp focus, magazine cover quality. ${mjAspect} --v 6.0 --style raw`;

  const negativePrompt = `deformed hands, extra fingers, blurry face, distorted text, low quality, pixelated, amateur layout, watermark, signature, stock photo watermark, washed out colors, oversaturated neon, cartoon, 3d render bad anatomy, cropped text`;

  return {
    promptSpanish,
    promptEnglish,
    negativePrompt,
    headline: bannerTitleEs,
    format: data.formato
  };
}
