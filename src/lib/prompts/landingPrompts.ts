import { LandingFormData } from '../../types';

export function buildChatGPTLandingPrompt(data: LandingFormData): string {
  const waUrl = data.linkWhatsapp || `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombreVendedor}, quiero ordenar ${data.nombreProducto} y conocer las promociones disponibles.`)}`;

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

2. INFORMACIÓN COMERCIAL Y CONTACTO:
- Vendedor / Distribuidor Oficial: ${data.nombreVendedor}
- Empresa: ${data.empresa || 'HGW Health Green World'}
- Código de Distribuidor: ${data.codigoDistribuidor}
- WhatsApp: ${data.whatsapp}
- Enlace directo a WhatsApp: ${waUrl}
- Teléfono: ${data.telefono}
- Email de contacto: ${data.email}
- Página Web / Tienda Online: ${data.paginaWeb}
- Ubicación / País: ${data.ciudad}, ${data.pais}

3. ELEMENTOS DE CONVERSIÓN:
- CTA Principal: "${data.ctaPrincipal || 'COMPRAR CON DESCUENTO AHORA'}"
- CTA Secundario: "${data.ctaSecundario || 'HABLAR CON UN ASESOR POR WHATSAPP'}"
- Garantía: ${data.garantia || 'Garantía de originalidad y satisfacción respaldada por Health Green World Group'}
- Tiempo de Promoción: ${data.tiempoPromocion || 'Oferta por tiempo limitado o hasta agotar existencias'}
- Testimonios sugeridos: ${data.testimonios || 'Experiencias de clientes reales satisfechos con la calidad del producto'}
- Preguntas Frecuentes: ${data.faqs || 'Preguntas sobre envíos a nivel nacional, formas de pago, cómo afiliarse y modo de uso'}

4. DIRECCIÓN VISUAL Y COLORES:
- Color Primario: ${data.colorPrincipal || '#0B3D2E'} (Verde HGW)
- Color Secundario: ${data.colorSecundario || '#D4AF37'} (Dorado Premium)
- Estilo: ${data.estilo || 'SaaS Premium / E-commerce de Alto Nivel, limpio, Mobile First y moderno'}
- Imagen del Producto: ${data.imagenPrincipal}
${data.imagenesAdicionales ? `- Imágenes Adicionales: ${data.imagenesAdicionales}` : ''}

REGLAS Y ESTRUCTURA OBLIGATORIA DE LA LANDING PAGE:
===================================================
La landing page debe incluir en orden armónico las siguientes 29 secciones:
1. Barra de anuncio superior (urgencia de envío / descuento).
2. Header / Barra de navegación con logo, enlaces de salto y botón WhatsApp.
3. Hero Section (Título de alto impacto, subtítulo persuasivo, badge de descuento, imagen hero del producto y CTA principal).
4. Barra de confianza (Certificaciones: FDA, ISO 9001, Halal, Presencia en +69 países).
5. Sección del Problema común que enfrenta el cliente.
6. Sección de la Solución natural con ${data.nombreProducto}.
7. Beneficios destacados (Tarjetas visuales con iconos).
8. Características técnicas y tabla nutricional / botánica.
9. Ingredientes puros y procedencia de la materia prima.
10. Modo de uso / Preparación paso a paso.
11. Para quién es ideal este producto.
12. Para quién NO es (filtrado ético).
13. Diferenciadores exclusivos de HGW frente a marcas convencionales.
14. Oferta irresistible con comparación de precios (Antes vs Ahora).
15. Paquetes especiales y opción de adquirir como Distribuidor HGW con descuento permanente.
16. Bonos adicionales por compra inmediata (Guía de uso digital, asesoría personalizada).
17. Testimonios y prueba social de clientes satisfechos.
18. Calculadora o desglose de ahorro económico.
19. Preguntas Frecuentes desplegables (Acordeón interactivo).
20. Manejo y derribo de objeciones frecuentes.
21. Garantía oficial de satisfacción y autenticidad.
22. Sección de Llamado a la Acción Final (Gran bloque de conversión).
23. Formulario de pedido rápido con envío automático a WhatsApp.
24. Botón flotante interactivo de WhatsApp fijado en la esquina.
25. Información sobre métodos de envío (Servientrega / Retiro en Oficinas Nacionales).
26. Directorio y datos de contacto de la distribuidora ${data.nombreVendedor} (Código: ${data.codigoDistribuidor}).
27. Footer completo con enlaces, mapa de sitio y derechos de autor.
28. Aviso de privacidad de datos.
29. Disclaimer legal correspondiente: "Este sitio es operado por un distribuidor independiente de HGW Health Green World. Los productos son suplementos y alimentos, no reemplazan tratamientos médicos prescritos."

REQUISITOS TÉCNICOS:
- Código HTML5 semántico y 100% responsive (Mobile First).
- Incluir CDN de Tailwind CSS y Lucide Icons / Feather.
- Scripts JS para acordeón de FAQs, contador regresivo de oferta y enlace con mensaje prellenado a WhatsApp.
- NO inventar propiedades médicas ni promesas de curación.
- Entrega el código HTML completo en un solo bloque listo para guardar como index.html.`;
}

export function generateStandAloneLandingHTML(data: LandingFormData): string {
  const waUrl = data.linkWhatsapp || `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombreVendedor}, quiero ordenar ${data.nombreProducto} con la promoción actual.`)}`;
  const primary = data.colorPrincipal || '#0B3D2E';
  const secondary = data.colorSecundario || '#D4AF37';

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
    h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
    :root {
      --primary-hgw: ${primary};
      --secondary-gold: ${secondary};
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased selection:bg-[#1F7A5A] selection:text-white">

  <!-- Top Announcement Bar -->
  <div class="bg-[${primary}] text-white text-xs sm:text-sm font-medium py-2 text-center px-4">
    🚀 <strong>Promoción Exclusiva HGW:</strong> Envíos a todo el país | Asesoría directa con la distribuidora <strong>${data.nombreVendedor}</strong> (Cód: ${data.codigoDistribuidor})
  </div>

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[${primary}] flex items-center justify-center text-white font-bold text-lg shadow">
          HGW
        </div>
        <div>
          <span class="font-heading font-bold text-lg text-[${primary}] block leading-tight">Health Green World</span>
          <span class="text-xs text-slate-500 font-medium">${data.nombreVendedor} · Distribuidor Oficial</span>
        </div>
      </div>
      <a href="${waUrl}" target="_blank" class="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md transition flex items-center gap-2">
        <span>WhatsApp</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50">
    <div class="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div class="inline-flex items-center gap-2 bg-emerald-100 text-[${primary}] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          ✨ Calidad Certificada Internacional
        </div>
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Descubre el poder natural de <span class="text-[${primary}]">${data.nombreProducto}</span>
        </h1>
        <p class="text-lg text-slate-600 mb-8 leading-relaxed">
          ${data.descripcion}
        </p>

        <!-- Pricing card in Hero -->
        <div class="bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 mb-8">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-3xl sm:text-4xl font-extrabold text-slate-900">$${data.precio.toFixed(2)} USD</span>
            ${data.precioAnterior > 0 ? `<span class="text-lg text-slate-400 line-through font-semibold">$${data.precioAnterior.toFixed(2)} USD</span>` : ''}
            <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">${data.descuento || 'Ahorro Especial'}</span>
          </div>
          <p class="text-xs text-slate-500 mb-4">Puntos de volumen: <strong>${data.bv} BV</strong> | Presentación: ${data.presentacion}</p>
          <a href="${waUrl}" target="_blank" class="w-full block text-center bg-[${primary}] hover:bg-emerald-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition text-lg">
            ${data.ctaPrincipal || '👉 PEDIR AHORA POR WHATSAPP'}
          </a>
        </div>

        <div class="flex items-center gap-4 text-xs text-slate-500 font-medium">
          <span class="flex items-center gap-1">🔒 Compra Segura</span>
          <span class="flex items-center gap-1">📦 Envío Inmediato</span>
          <span class="flex items-center gap-1">💎 Producto 100% Original</span>
        </div>
      </div>

      <!-- Product Image Container -->
      <div class="relative flex justify-center">
        <div class="relative w-full max-w-md bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
          <div class="absolute top-4 right-4 bg-[${secondary}] text-slate-900 text-xs font-black px-3 py-1 rounded-full shadow">
            PREMIUM
          </div>
          <img src="${data.imagenPrincipal}" alt="${data.nombreProducto}" class="w-full h-80 object-contain rounded-2xl mb-4" />
          <div class="bg-slate-50 p-4 rounded-xl text-center">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Categoría Oficial</span>
            <span class="text-sm font-bold text-[${primary}]">${data.categoria}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Benefits -->
  <section class="py-16 bg-white border-t border-slate-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">¿Por qué elegir ${data.nombreProducto}?</h2>
        <p class="text-slate-600">Beneficios científicamente respaldados por la tradición y la tecnología de Health Green World.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4">01</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Ingredientes Puros</h3>
          <p class="text-slate-600 text-sm leading-relaxed">${data.ingredientes}</p>
        </div>
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4">02</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Resultados Comprobados</h3>
          <p class="text-slate-600 text-sm leading-relaxed">${data.beneficios}</p>
        </div>
        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
          <div class="w-12 h-12 rounded-xl bg-[${primary}] text-white flex items-center justify-center font-bold text-xl mb-4">03</div>
          <h3 class="font-heading font-bold text-xl text-slate-900 mb-2">Respaldo Global</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Presente en más de 69 países con más de 31 años de trayectoria corporativa.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Fast Contact CTA -->
  <section class="py-16 bg-[${primary}] text-white text-center">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="font-heading text-3xl sm:text-4xl font-extrabold mb-4">¿Tienes dudas o deseas atención personalizada?</h2>
      <p class="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
        Comunícate directamente con ${data.nombreVendedor}. Te asesoraré sobre el modo de uso, envíos a tu ciudad o cómo afiliarte con descuento.
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
      <p>
        <strong>Aviso Importante:</strong> Este sitio es operado por <strong>${data.nombreVendedor}</strong> (Código Oficial HGW: <strong>${data.codigoDistribuidor}</strong>), distribuidora independiente autorizada de Health Green World (HGW). La información proporcionada tiene fines informativos y comerciales. Los productos no sustituyen tratamientos médicos prescritos.
      </p>
      <p class="text-slate-500">
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
