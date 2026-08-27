import { LandingFormData } from '../../types';
import { getEmbedVideoUrl, getDirectImageUrl } from '../imageUtils';

export function buildChatGPTLandingPrompt(data: LandingFormData): string {
  const waUrl = data.linkWhatsapp || `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombreVendedor}, quiero ordenar ${data.nombreProducto} y conocer las promociones disponibles.`)}`;
  const referralUrl = data.enlaceReferido || `https://hgwpanama.com/registro?ref=${data.codigoDistribuidor}`;
  const profilePhotoUrl = data.fotoPerfil || 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link';

  return `Actúa como un desarrollador web Senior y especialista en CRO (Optimización de la Tasa de Conversión), diseño UX/UI y copywriting de ventas directas.

Genera una landing page completa, moderna y lista para producción en un único archivo HTML autocontenido (con estilos CSS integrados usando Tailwind CSS vía CDN y JavaScript interactivo limpio).

INFORMACIÓN EXACTA Y REAL PROPORCIONADA:
=========================================
1. PRODUCTO:
- Nombre: ${data.nombreProducto}
- Categoría: ${data.categoria}
- Descripción: ${data.descripcion}
- Beneficios Principales: ${data.beneficios}
- Ingredientes / Composición: ${data.ingredientes}
- Presentación: ${data.presentacion}
- Precio Normal: $${data.precioAnterior > 0 ? data.precioAnterior.toFixed(2) : (data.precio * 1.35).toFixed(2)} USD
- Precio de Oferta Actual: $${data.precio.toFixed(2)} USD
- Descuento / Ahorro: ${data.descuento || '30% - 50% al registrarse como socio'}
- Puntos de Volumen (BV): ${data.bv} BV
- Público Objetivo: ${data.publicoObjetivo || 'Familias, profesionales y personas interesadas en salud natural'}

2. INFORMACIÓN COMERCIAL, ASESORA OFICIAL Y VIDEOS:
- Vendedora / Distribuidora Oficial: ${data.nombreVendedor}
- Foto de Perfil Oficial de la Distribuidora (Enlace Drive / Imagen Directa): ${profilePhotoUrl}
- Empresa: ${data.empresa || 'HGW Health Green World'}
- Código de Distribuidor / Patrocinador: ${data.codigoDistribuidor}
- WhatsApp: ${data.whatsapp}
- Enlace directo a WhatsApp: ${waUrl}
- Enlace Oficial de Registro / Referido HGW: ${referralUrl}
${data.videoTutorialRegistro ? `- Video Tutorial de Registro Oficial (Cómo crear la cuenta HGW): ${data.videoTutorialRegistro}` : ''}
${data.videoOpcional1 ? `- Video Opcional 1 (Presentación / Plan de Compensación): ${data.videoOpcional1}` : ''}
${data.videoOpcional2 ? `- Video Opcional 2 (Uso de Oficina Virtual / Testimonios): ${data.videoOpcional2}` : ''}
- Teléfono: ${data.telefono}
- Email de contacto: ${data.email}
- Página Web / Tienda Online: ${data.paginaWeb}
- Ubicación / País: ${data.ciudad}, ${data.pais}

3. ELEMENTOS DE CONVERSIÓN:
- CTA Principal: "${data.ctaPrincipal || 'COMPRAR CON DESCUENTO AHORA'}"
- CTA Secundario: "${data.ctaSecundario || 'HABLAR CON UN ASESOR POR WHATSAPP'}"
- CTA Registro de Socio: "REGISTRARME COMO SOCIO CON DESCUENTO (CÓDIGO: ${data.codigoDistribuidor})"
- Garantía: ${data.garantia || 'Garantía de originalidad y satisfacción respaldada por Health Green World Group'}
- Tiempo de Promoción: ${data.tiempoPromocion || 'Oferta por tiempo limitado o hasta agotar existencias'}
- Testimonios sugeridos: ${data.testimonios || 'Experiencias de clientes reales satisfechos con la calidad del producto'}
- Preguntas Frecuentes: ${data.faqs || 'Preguntas sobre envíos a nivel nacional, formas de pago, cómo afiliarse y modo de uso'}

4. DIRECCIÓN VISUAL, FOTO DE PERFIL Y REGLA DE TIPOGRAFÍA CENTRADA:
- REGLA ESTRICTA DE TIPOGRAFÍA: TODOS los títulos (h1, h2, h3, h4) y subtítulos de TODAS las secciones de la landing page DEBEN estar estrictamente centrados (text-center, mx-auto, max-w-3xl) para garantizar máxima simetría visual y balance estético en dispositivos móviles y de escritorio.
- FOTO DE PERFIL DE LA DISTRIBUIDORA: La fotografía oficial de la asesora (${profilePhotoUrl}) DEBE aparecer visiblemente en el Header/Navbar, en una Sección de Autoridad & Confianza ("Conoce a tu Asesora Oficial HGW") y en el bloque de contacto final de WhatsApp, con marco circular elegante, borde dorado (#D4AF37) y badge de distribuidora certificada.
- Color Primario: ${data.colorPrincipal || '#0B3D2E'} (Verde Esmeralda HGW)
- Color Secundario: ${data.colorSecundario || '#D4AF37'} (Dorado Imperial)
- Estilo: ${data.estilo || 'SaaS Premium / E-commerce de Alto Nivel, limpio, Mobile First y moderno'}
- Imagen del Producto (Vista Web): ${data.imagenPrincipal}
${data.driveUrl ? `- Enlace Oficial de Google Drive del Producto (Activo Original en Alta Resolución): ${data.driveUrl}` : ''}
${data.imagenesAdicionales ? `- Imágenes Adicionales: ${data.imagenesAdicionales}` : ''}
- REGLA DE IMÁGENES: Usa el activo fotográfico del producto (${data.driveUrl || data.imagenPrincipal}) como imagen principal y hero del producto, y complementa con imágenes de personas sonrientes, familias o profesionales que reflejen el estilo de vida saludable y los beneficios de HGW.

REGLAS Y ESTRUCTURA OBLIGATORIA DE LA LANDING PAGE (29 SECCIONES):
===================================================================
La landing page debe incluir en orden armónico las siguientes 29 secciones:
1. Barra de anuncio superior (urgencia de envío / descuento).
2. Header / Barra de navegación con foto de perfil de la distribuidora ${data.nombreVendedor}, logo HGW, enlaces de salto y botón WhatsApp.
3. Hero Section (Título H1 CENTRADO de alto impacto, subtítulo CENTRADO persuasivo, badge de descuento, imagen hero del producto y CTA principal).
4. Barra de confianza (Certificaciones: FDA, ISO 9001, Halal, Presencia en +69 países).
5. Sección del Problema común que enfrenta el cliente (Título y subtítulo centrados).
6. Sección de la Solución natural con ${data.nombreProducto} (Título y subtítulo centrados).
7. Beneficios destacados (Tarjetas visuales con iconos, títulos centrados).
8. Características técnicas y tabla nutricional / botánica.
9. Ingredientes puros y procedencia de la materia prima.
10. Modo de uso / Preparación paso a paso.
11. Para quién es ideal este producto.
12. Para quién NO es (filtrado ético).
13. Diferenciadores exclusivos de HGW frente a marcas convencionales.
14. Oferta irresistible con comparación de precios (Antes vs Ahora).
15. Paquetes especiales y opción de adquirir como Distribuidor HGW con descuento permanente.
16. SECCIÓN ESPECIAL DE TUTORIAL: "Paso a Paso: Cómo Crear tu Cuenta HGW y Registrarte" con reproductor de video centrado embed (${data.videoTutorialRegistro || 'Video explicativo'}) y botón directo a tu enlace de afiliación (${referralUrl}).
17. Bonos adicionales por compra inmediata (Guía de uso digital, asesoría personalizada).
18. Testimonios y prueba social de clientes satisfechos.
19. Calculadora o desglose de ahorro económico.
20. Preguntas Frecuentes desplegables (Acordeón interactivo).
21. Manejo y derribo de objeciones frecuentes.
22. Garantía oficial de satisfacción y autenticidad.
23. Sección de Autoridad & Confianza: "Tu Asesora Oficial HGW" con la foto de perfil de ${data.nombreVendedor}, código ${data.codigoDistribuidor}, ciudad ${data.ciudad} y mensaje de bienvenida.
24. Formulario de pedido rápido con envío automático a WhatsApp.
25. Botón flotante interactivo de WhatsApp fijado en la esquina con foto miniatura.
26. Información sobre métodos de envío (Servientrega / Retiro en Oficinas Nacionales).
27. Directorio y datos de contacto de la distribuidora ${data.nombreVendedor} (Código: ${data.codigoDistribuidor}).
28. Footer completo con enlaces, foto de perfil, mapa de sitio y derechos de autor.
29. Disclaimer legal correspondiente: "Este sitio es operado por un distribuidor independiente de HGW Health Green World. Los productos son suplementos y alimentos, no reemplazan tratamientos médicos prescritos."

REQUISITOS TÉCNICOS:
- Todos los encabezados H1, H2, H3 y subtítulos deben tener la clase 'text-center' y estar centrados con mx-auto.
- Código HTML5 semántico y 100% responsive (Mobile First).
- Incluir CDN de Tailwind CSS y Lucide Icons / Feather.
- Scripts JS para acordeón de FAQs, contador regresivo de oferta y enlace con mensaje prellenado a WhatsApp.
- NO inventar propiedades médicas ni promesas de curación.
- Entrega el código HTML completo en un solo bloque listo para guardar como index.html.`;
}

export function generateStandAloneLandingHTML(data: LandingFormData): string {
  const waUrl = data.linkWhatsapp || `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombreVendedor}, quiero ordenar ${data.nombreProducto} con la promoción actual.`)}`;
  const referralUrl = data.enlaceReferido || `https://hgwpanama.com/registro?ref=${data.codigoDistribuidor}`;
  const primary = data.colorPrincipal || '#0B3D2E';
  const secondary = data.colorSecundario || '#D4AF37';

  // Profile photo handling with Google Drive conversion
  const rawProfilePhoto = data.fotoPerfil || 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link';
  const directProfilePhoto = getDirectImageUrl(rawProfilePhoto);

  const embedMainVideo = data.videoTutorialRegistro ? getEmbedVideoUrl(data.videoTutorialRegistro) : null;
  const embedOpt1 = data.videoOpcional1 ? getEmbedVideoUrl(data.videoOpcional1) : null;
  const embedOpt2 = data.videoOpcional2 ? getEmbedVideoUrl(data.videoOpcional2) : null;

  return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.nombreProducto} | Distribuidor Autorizado HGW ${data.nombreVendedor}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; text-align: center; }
    :root {
      --primary-hgw: ${primary};
      --secondary-gold: ${secondary};
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased selection:bg-[#1F7A5A] selection:text-white">

  <!-- Top Announcement Bar -->
  <div class="bg-[${primary}] text-white text-xs sm:text-sm font-medium py-2.5 text-center px-4">
    🚀 <strong>Promoción Exclusiva HGW:</strong> Envíos a todo el país | Asesoría directa con la distribuidora <strong>${data.nombreVendedor}</strong> (Cód: ${data.codigoDistribuidor})
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Profile photo and brand badge -->
        <div class="relative">
          ${directProfilePhoto ? `
            <img 
              src="${directProfilePhoto}" 
              alt="${data.nombreVendedor}" 
              referrerpolicy="no-referrer"
              class="w-11 h-11 rounded-full object-cover border-2 border-[${secondary}] shadow-md"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="hidden w-11 h-11 rounded-full bg-[${primary}] text-white items-center justify-center font-bold text-sm shadow">
              HGW
            </div>
          ` : `
            <div class="w-11 h-11 rounded-full bg-[${primary}] text-white flex items-center justify-center font-bold text-sm shadow">
              HGW
            </div>
          `}
          <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-bold" title="Distribuidora Verificada">
            ✓
          </span>
        </div>
        <div>
          <span class="font-heading font-bold text-base sm:text-lg text-[${primary}] block leading-tight text-left">${data.nombreVendedor}</span>
          <span class="text-[11px] text-slate-500 font-medium block text-left">Distribuidora Autorizada HGW · Cód: ${data.codigoDistribuidor}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a href="${referralUrl}" target="_blank" class="hidden sm:inline-flex bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1.5 rounded-xl text-xs font-bold transition">
          <span>Crear Cuenta HGW</span>
        </a>
        <a href="${waUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-1.5">
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section (Centered Layout) -->
  <section class="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50">
    <div class="max-w-5xl mx-auto px-4 text-center">
      
      <div class="inline-flex items-center justify-center gap-2 bg-emerald-100 text-[${primary}] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 mx-auto shadow-xs">
        ${directProfilePhoto ? `
          <img src="${directProfilePhoto}" alt="${data.nombreVendedor}" referrerpolicy="no-referrer" class="w-4 h-4 rounded-full object-cover" />
        ` : ''}
        <span>✨ Calidad Certificada HGW · Asesoría de ${data.nombreVendedor}</span>
      </div>

      <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
        Descubre el poder natural y bienestar con <span class="text-[${primary}]">${data.nombreProducto}</span>
      </h1>

      <p class="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-center">
        ${data.descripcion}
      </p>

      <!-- Centered Product Image & Pricing Card -->
      <div class="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-8">
        
        <!-- Product Image -->
        <div class="relative flex justify-center">
          <div class="relative w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
            <div class="absolute top-4 right-4 bg-[${secondary}] text-slate-900 text-xs font-black px-3 py-1 rounded-full shadow">
              PREMIUM
            </div>
            <img src="${data.imagenPrincipal}" alt="${data.nombreProducto}" class="w-full h-72 object-contain rounded-2xl mb-4" />
            <div class="bg-slate-50 p-3 rounded-xl text-center">
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Categoría Oficial</span>
              <span class="text-xs font-bold text-[${primary}]">${data.categoria}</span>
            </div>
          </div>
        </div>

        <!-- Pricing & Action Card -->
        <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-emerald-100 text-center space-y-4">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            ${data.descuento || 'Ahorro Especial de Socio'}
          </span>
          
          <div class="flex items-baseline justify-center gap-3">
            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900">$${data.precio.toFixed(2)} USD</span>
            ${data.precioAnterior > 0 ? `<span class="text-lg text-slate-400 line-through font-semibold">$${data.precioAnterior.toFixed(2)} USD</span>` : ''}
          </div>

          <p class="text-xs text-slate-500">Puntos de volumen: <strong>${data.bv} BV</strong> | Presentación: ${data.presentacion}</p>

          <div class="space-y-2.5 pt-2">
            <a href="${waUrl}" target="_blank" class="w-full block text-center bg-[${primary}] hover:bg-emerald-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition text-base">
              ${data.ctaPrincipal || '👉 PEDIR AHORA POR WHATSAPP'}
            </a>

            <a href="${referralUrl}" target="_blank" class="w-full block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3 px-6 rounded-xl shadow-md transition text-xs uppercase tracking-wider">
              ⭐ Afiliarme con Código ${data.codigoDistribuidor}
            </a>
          </div>

          <div class="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium pt-2">
            <span class="flex items-center gap-1">🔒 Compra Segura</span>
            <span class="flex items-center gap-1">📦 Envío Rápido</span>
            <span class="flex items-center gap-1">💎 100% Original</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Key Benefits (Centered Headings) -->
  <section class="py-16 bg-white border-t border-slate-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-3 text-center">¿Por qué elegir ${data.nombreProducto}?</h2>
        <p class="text-slate-600 text-center">Beneficios científicamente respaldados por la tradición botánica y la biotecnología de Health Green World.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-center">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">01</div>
          <h3 class="font-heading font-bold text-lg text-slate-900 mb-2 text-center">Ingredientes Puros</h3>
          <p class="text-slate-600 text-sm leading-relaxed text-center">${data.ingredientes}</p>
        </div>
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-center">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">02</div>
          <h3 class="font-heading font-bold text-lg text-slate-900 mb-2 text-center">Resultados Comprobados</h3>
          <p class="text-slate-600 text-sm leading-relaxed text-center">${data.beneficios}</p>
        </div>
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-center">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">03</div>
          <h3 class="font-heading font-bold text-lg text-slate-900 mb-2 text-center">Respaldo Global</h3>
          <p class="text-slate-600 text-sm leading-relaxed text-center">Presencia en más de 69 países con más de 31 años de trayectoria corporativa.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Tu Asesora y Distribuidora Oficial HGW (Requested with Profile Photo) -->
  <section class="py-16 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-t border-slate-100">
    <div class="max-w-4xl mx-auto px-4">
      
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 text-amber-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
          🌟 Asesoría Personalizada y Directa
        </span>
        <h2 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 text-center">
          Conoce a tu Distribuidora Autorizada HGW
        </h2>
        <p class="text-slate-600 text-sm sm:text-base text-center">
          Cuentas con el respaldo, asesoramiento nutricional y acompañamiento directo en cada etapa de tu pedido o afiliación.
        </p>
      </div>

      <!-- Distributor Bio Card -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        
        <!-- Profile Picture with Gold & Emerald double frame -->
        <div class="relative shrink-0 text-center">
          <div class="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#0B3D2E] via-[#D4AF37] to-[#1F7A5A] shadow-2xl mx-auto">
            ${directProfilePhoto ? `
              <img 
                src="${directProfilePhoto}" 
                alt="${data.nombreVendedor}" 
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover rounded-full bg-slate-100"
                onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full rounded-full bg-emerald-900 text-white flex items-center justify-center text-3xl font-bold\\'>HGW</div>'"
              />
            ` : `
              <div class="w-full h-full rounded-full bg-emerald-900 text-white flex items-center justify-center text-3xl font-bold">
                HGW
              </div>
            `}
          </div>
          <div class="absolute bottom-1 right-2 bg-emerald-600 text-white p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>

        <!-- Bio & Credentials -->
        <div class="flex-1 text-center md:text-left space-y-3">
          <div class="inline-flex items-center gap-2 bg-emerald-50 text-[${primary}] px-3 py-1 rounded-lg text-xs font-bold">
            <span>🏅 Distribuidora Oficial & Líder de Expansión</span>
          </div>

          <h3 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 text-center md:text-left">
            ${data.nombreVendedor}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            "Mi compromiso es ayudarte a transformar tu salud con la suplementación botánica de más alta pureza de HGW y guiarte si deseas emprender como socio con descuentos permanentes del 30% al 50%."
          </p>

          <!-- Contact details badges -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs">
            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-mono font-bold">
              ID Patrocinador: <strong class="text-[${primary}]">${data.codigoDistribuidor}</strong>
            </span>
            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">
              📍 ${data.ciudad}, ${data.pais}
            </span>
            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
              📞 ${data.whatsapp}
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
            <a href="${waUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center gap-2">
              <span>💬 Chatear con ${data.nombreVendedor}</span>
            </a>
            <a href="${referralUrl}" target="_blank" class="bg-[${primary}] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center gap-2">
              <span>⭐ Registrarme en su Equipo</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Video Tutorial Section: Cómo Crear tu Cuenta HGW (Requested) -->
  <section class="py-16 bg-slate-900 text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      
      <div class="inline-flex items-center gap-2 bg-[#D4AF37] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 mx-auto">
        🎥 Video Tutorial Paso a Paso
      </div>

      <h2 class="font-heading text-3xl sm:text-4xl font-extrabold mb-3 text-center text-white">
        Cómo Crear tu Cuenta en HGW y Comprar con Descuento
      </h2>

      <p class="text-emerald-200 text-sm sm:text-base max-w-xl mx-auto mb-8 text-center">
        Sigue esta breve guía en video para registrarte oficialmente como socio o cliente preferencial con el código <strong>${data.codigoDistribuidor}</strong> de <strong>${data.nombreVendedor}</strong>.
      </p>

      <!-- Main Tutorial Video Embed -->
      <div class="relative w-full aspect-video max-w-3xl mx-auto bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/40 mb-8">
        ${embedMainVideo ? `
          <iframe 
            src="${embedMainVideo}" 
            title="Video Tutorial Registro HGW" 
            class="w-full h-full" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        ` : `
          <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
            <div class="w-16 h-16 rounded-full bg-emerald-700/60 text-[#D4AF37] flex items-center justify-center text-2xl font-bold">▶</div>
            <h3 class="text-lg font-bold text-white text-center">Video Tutorial Oficial de Registro HGW</h3>
            <p class="text-xs text-slate-400 max-w-md text-center">Haz clic abajo para abrir tu cuenta con el código oficial de patrocinador de ${data.nombreVendedor}.</p>
          </div>
        `}
      </div>

      <!-- Optional Videos Grid if provided -->
      ${(embedOpt1 || embedOpt2) ? `
        <div class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 text-center">
          ${embedOpt1 ? `
            <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 text-center">
              <h4 class="font-heading font-bold text-sm text-emerald-300 mb-2 text-center">Plan de Ganancia & Beneficios</h4>
              <div class="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe src="${embedOpt1}" title="Video 1" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          ` : ''}
          ${embedOpt2 ? `
            <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 text-center">
              <h4 class="font-heading font-bold text-sm text-emerald-300 mb-2 text-center">Oficina Virtual & Testimonios</h4>
              <div class="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe src="${embedOpt2}" title="Video 2" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <div class="flex flex-wrap justify-center gap-4">
        <a href="${referralUrl}" target="_blank" class="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-8 rounded-xl shadow-xl text-base flex items-center gap-2 transition">
          <span>✨ REGISTRARME AHORA CON EL CÓDIGO ${data.codigoDistribuidor}</span>
        </a>
      </div>

    </div>
  </section>

  <!-- Fast Contact CTA with Profile Picture -->
  <section class="py-16 bg-[${primary}] text-white text-center">
    <div class="max-w-4xl mx-auto px-4 text-center">
      
      <!-- Mini avatar with status indicator -->
      <div class="inline-flex items-center gap-3 bg-black/20 p-2 pr-4 rounded-full mb-6 mx-auto border border-white/10">
        ${directProfilePhoto ? `
          <img src="${directProfilePhoto}" alt="${data.nombreVendedor}" referrerpolicy="no-referrer" class="w-10 h-10 rounded-full object-cover border-2 border-[${secondary}]" />
        ` : ''}
        <div class="text-left">
          <span class="text-xs font-bold text-white block">${data.nombreVendedor}</span>
          <span class="text-[10px] text-emerald-300 flex items-center gap-1 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> En línea para ayudarte
          </span>
        </div>
      </div>

      <h2 class="font-heading text-3xl sm:text-4xl font-extrabold mb-4 text-center text-white">¿Tienes dudas o deseas atención personalizada?</h2>
      <p class="text-emerald-100 text-base sm:text-lg mb-8 max-w-xl mx-auto text-center">
        Comunícate directamente con <strong>${data.nombreVendedor}</strong>. Te asesoraré sobre el modo de uso, envíos a tu ciudad o cómo afiliarte con descuento.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="${waUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl shadow-xl text-lg flex items-center gap-2">
          <span>📲 Contactar por WhatsApp: ${data.whatsapp}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Legal Disclaimer -->
  <footer class="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 text-center space-y-4">
      <div class="flex items-center justify-center gap-3 mb-2">
        ${directProfilePhoto ? `
          <img src="${directProfilePhoto}" alt="${data.nombreVendedor}" referrerpolicy="no-referrer" class="w-8 h-8 rounded-full object-cover border border-[${secondary}]" />
        ` : ''}
        <span class="text-white font-bold text-sm">${data.nombreVendedor}</span>
        <span class="text-slate-500">·</span>
        <span class="text-emerald-400 font-mono">Código HGW: ${data.codigoDistribuidor}</span>
      </div>
      <p class="text-center max-w-3xl mx-auto">
        <strong>Aviso Importante:</strong> Este sitio es operado por <strong>${data.nombreVendedor}</strong> (Código Oficial HGW: <strong>${data.codigoDistribuidor}</strong>), distribuidora independiente autorizada de Health Green World (HGW). La información proporcionada tiene fines informativos y comerciales. Los productos no sustituyen tratamientos médicos prescritos.
      </p>
      <p class="text-slate-500 text-center">
        © ${new Date().getFullYear()} HGW Marketing AI · Todos los derechos reservados.
      </p>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a href="${waUrl}" target="_blank" class="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110">
    <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
  </a>
</body>
</html>`;
}
