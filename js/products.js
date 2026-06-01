/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Catálogo completo de productos
   Fuente: Fichas Técnicas v1.0
   16 productos · 4 categorías
   ═══════════════════════════════════════════════════════════ */

window.PD = window.PD || {};

PD.catalog = [
  /* ─── PROTECCIÓN SOLAR ─── */
  {
    id: 'PS-ANTIBRILLO',
    name: 'Protector Solar Anti-Brillo',
    category: 'Protección Solar',
    pill: 'MATE',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Control de brillo y sebo todo el día. Acabado mate ultra ligero con SPF 50+ amplio espectro.',
    keyIngredient: 'Óxido de Zinc 15% + Niacinamida 3%',
    bestFor: ['piel grasa', 'piel mixta'],
    concerns: ['brillo', 'sebo', 'poros', 'acne'],
    stars: 4.8, reviews: 241,
    img1: 'img/products/ps-antibrillo-1.jpg',
    img2: 'img/products/ps-antibrillo-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-ANTIMANCHAS',
    name: 'Protector Solar Anti-Manchas',
    category: 'Protección Solar',
    pill: 'VIT. C',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Con Vitamina C estable. Previene y atenúa manchas e hiperpigmentación.',
    keyIngredient: 'Vitamina C Estable 3% + Ácido Ferúlico',
    bestFor: ['todo tipo de piel'],
    concerns: ['manchas', 'pigmentación', 'fotoenvejecimiento'],
    stars: 4.8, reviews: 203,
    img1: 'img/products/ps-antimanchas-1.jpg',
    img2: 'img/products/ps-antimanchas-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-HIALURONICO',
    name: 'Protector Solar con Ácido Hialurónico',
    category: 'Protección Solar',
    pill: 'HIDRATA',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Hidratación profunda + fotoprotección. Anti-envejecimiento diario sin sensación tirante.',
    keyIngredient: 'Ácido Hialurónico + Pantenol',
    bestFor: ['piel seca', 'piel normal', 'piel sensible'],
    concerns: ['deshidratación', 'líneas finas'],
    stars: 4.9, reviews: 189,
    img1: 'img/products/ps-hialuronico-1.jpg',
    img2: 'img/products/ps-hialuronico-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-COLOR-CLARO',
    name: 'Protector Solar con Color — Tono Claro',
    category: 'Protección Solar',
    pill: 'TONO CLARO',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Acabado satinado para subtono rosado. Empareja y cubre imperfecciones.',
    keyIngredient: 'Óxido de Zinc + Pigmentos Minerales',
    bestFor: ['piel clara'],
    concerns: ['rojeces', 'imperfecciones'],
    stars: 4.6, reviews: 98,
    img1: 'img/products/ps-color-claro-1.jpg',
    img2: 'img/products/ps-color-claro-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-COLOR-MEDIO',
    name: 'Protector Solar con Color — Tono Medio',
    category: 'Protección Solar',
    pill: 'TONO MEDIO',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Subtono amarillo. Acabado satinado construible. Empareja manchas y rojeces.',
    keyIngredient: 'Óxido de Zinc + Pigmentos Minerales',
    bestFor: ['piel media'],
    concerns: ['desigualdad de tono'],
    stars: 4.7, reviews: 112,
    img1: 'img/products/ps-color-medio-1.jpg',
    img2: 'img/products/ps-color-medio-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-NIACINAMIDA',
    name: 'Protector Solar con Niacinamida',
    category: 'Protección Solar',
    pill: 'NIACINAMIDA',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Previene fotoenvejecimiento y pigmentación. Multifunción para todo tipo de piel.',
    keyIngredient: 'Niacinamida 5% + Óxido de Zinc',
    bestFor: ['todo tipo de piel'],
    concerns: ['pigmentación', 'poros', 'fotoenvejecimiento'],
    stars: 4.8, reviews: 167,
    img1: 'img/products/ps-niacinamida-1.jpg',
    img2: 'img/products/ps-niacinamida-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-BARRA',
    name: 'Protector Solar en Barra',
    category: 'Protección Solar',
    pill: 'EN BARRA',
    price: 360, comparePrice: 450, discount: '-20% OFF',
    shortDesc: 'Formato compacto para llevar. UVA, UVB, luz azul. 100% mineral, apto para arrecifes.',
    keyIngredient: 'Óxido de Zinc + Dióxido de Titanio 100% Mineral',
    bestFor: ['todo tipo', 'outdoor'],
    concerns: ['luz azul', 're-aplicación'],
    stars: 4.5, reviews: 87,
    img1: 'img/products/ps-barra-1.jpg',
    img2: 'img/products/ps-barra-1.jpg',
    url: 'producto.html'
  },
  {
    id: 'PS-TOQUESECO',
    name: 'Protector Solar Toque Seco',
    category: 'Protección Solar',
    pill: 'TOQUE SECO',
    price: 384, comparePrice: 480, discount: '-20% OFF',
    shortDesc: 'Fotoprotección con acabado ultra seco. Controla brillo. Prep perfecta bajo maquillaje.',
    keyIngredient: 'Óxido de Zinc + Almidón de Tapioca',
    bestFor: ['piel grasa', 'piel mixta'],
    concerns: ['brillo', 'fotoenvejecimiento'],
    stars: 4.7, reviews: 145,
    img1: 'img/products/ps-toqueseco-1.jpg',
    img2: 'img/products/ps-toqueseco-2.jpg',
    url: 'producto.html'
  },

  /* ─── SUEROS ─── */
  {
    id: 'SU-HIALURONICO',
    name: 'Suero Facial con Ácido Hialurónico',
    category: 'Sueros',
    pill: 'TRIPLE HA',
    price: 392, comparePrice: 490, discount: '-20% OFF',
    shortDesc: 'Tres pesos moleculares. Firmeza superficial + anti-edad profundo.',
    keyIngredient: 'Ácido Hialurónico en 3 Pesos Moleculares',
    bestFor: ['piel seca', 'piel madura', 'todo tipo'],
    concerns: ['deshidratación', 'líneas finas', 'flacidez'],
    stars: 4.8, reviews: 156,
    img1: 'img/products/su-hialuronico-1.jpg',
    img2: 'img/products/su-hialuronico-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'SU-NIACINAMIDA',
    name: 'Suero Facial con Niacinamida',
    category: 'Sueros',
    pill: 'SEBOREGULA',
    price: 392, comparePrice: 490, discount: '-20% OFF',
    shortDesc: 'Seborregula y desinflamia. Minimiza poros y aclara marcas de acné en 4 semanas.',
    keyIngredient: 'Niacinamida 10% + Zinc PCA',
    bestFor: ['piel grasa', 'piel mixta', 'acné'],
    concerns: ['poros', 'sebo', 'marcas', 'rojeces'],
    stars: 4.7, reviews: 134,
    img1: 'img/products/su-niacinamida-1.jpg',
    img2: 'img/products/su-niacinamida-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'SU-VITC',
    name: 'Suero Facial con Vitamina C',
    category: 'Sueros',
    pill: 'ANTIOXIDANTE',
    price: 392, comparePrice: 490, discount: '-20% OFF',
    shortDesc: 'Vitamina C estable 5%. Antioxidante triple, luminosidad real, anti-manchas.',
    keyIngredient: 'Vitamina C Estable 5% + Vitamina E + Ferúlico',
    bestFor: ['piel apagada', 'todo tipo'],
    concerns: ['manchas', 'piel apagada', 'radicales libres'],
    stars: 4.7, reviews: 178,
    img1: 'img/products/su-vitc-1.jpg',
    img2: 'img/products/su-vitc-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'SU-OJOS',
    name: 'Suero para Contorno de Ojos',
    category: 'Sueros',
    pill: 'OJOS',
    price: 392, comparePrice: 490, discount: '-20% OFF',
    shortDesc: 'HA triple + cafeína + aloe vera. Reduce bolsas y ojeras. Oftalmológicamente probado.',
    keyIngredient: 'HA Triple + Cafeína + Aloe Vera',
    bestFor: ['todo tipo'],
    concerns: ['ojeras', 'bolsas', 'líneas finas'],
    stars: 4.6, reviews: 112,
    img1: 'img/products/su-ojos-1.jpg',
    img2: 'img/products/su-ojos-2.jpg',
    url: 'producto.html'
  },

  /* ─── CREMAS ─── */
  {
    id: 'CR-HIALURONICO',
    name: 'Crema Facial con Ácido Hialurónico',
    category: 'Cremas',
    pill: 'ANTI-EDAD',
    price: 368, comparePrice: 460, discount: '-20% OFF',
    shortDesc: 'HA en liposomas. Rellena líneas, retiene agua, efecto plumping desde el día 1.',
    keyIngredient: 'HA Encapsulado en Liposomas',
    bestFor: ['piel seca', 'piel madura'],
    concerns: ['líneas finas', 'arrugas', 'deshidratación'],
    stars: 4.8, reviews: 143,
    img1: 'img/products/cr-hialuronico-1.jpg',
    img2: 'img/products/cr-hialuronico-2.jpg',
    url: 'producto.html'
  },
  {
    id: 'CR-ILUMINADORA',
    name: 'Crema Facial Hidratante Iluminadora',
    category: 'Cremas',
    pill: 'LUMINOSIDAD',
    price: 368, comparePrice: 460, discount: '-20% OFF',
    shortDesc: 'Vit. C + E en liposomas. Estimula colágeno, piel luminosa desde el día 3.',
    keyIngredient: 'Vitamina C + E Liposomadas',
    bestFor: ['piel apagada', 'todo tipo'],
    concerns: ['apagada', 'líneas finas'],
    stars: 4.7, reviews: 121,
    img1: 'img/products/cr-iluminadora-1.jpg',
    img2: 'img/products/cr-iluminadora-2.jpg',
    url: 'producto.html'
  },

  /* ─── LIMPIADORES ─── */
  {
    id: 'LI-HIALURONICO',
    name: 'Limpiador Facial con Ácido Hialurónico',
    category: 'Limpiadores',
    pill: 'SUAVE',
    price: 376, comparePrice: 470, discount: '-20% OFF',
    shortDesc: 'Para todo tipo de piel, incluso sensible. Suave, pH balanceado, uso AM + PM.',
    keyIngredient: 'Coco Glucósido + Ácido Hialurónico',
    bestFor: ['piel sensible', 'piel seca', 'todo tipo'],
    concerns: ['sensibilidad', 'tirantez'],
    stars: 4.7, reviews: 98,
    img1: 'img/products/li-hialuronico-1.jpg',
    img2: 'img/products/li-hialuronico-1.jpg',
    url: 'producto.html'
  },
  {
    id: 'LI-GRASA',
    name: 'Limpiador Facial para Piel Grasa',
    category: 'Limpiadores',
    pill: 'PIEL GRASA',
    price: 376, comparePrice: 470, discount: '-20% OFF',
    shortDesc: 'Arcilla verde + salicílico. Purifica profundo, destapa poros, regula sebo sin resecar.',
    keyIngredient: 'Arcilla Verde + Salicílico Natural',
    bestFor: ['piel grasa', 'acné'],
    concerns: ['sebo', 'brillo', 'poros'],
    stars: 4.6, reviews: 89,
    img1: 'img/products/li-grasa-1.jpg',
    img2: 'img/products/li-grasa-1.jpg',
    url: 'producto.html'
  }
];

/* Helper: get product by ID */
PD.getProduct = function(id) {
  return PD.catalog.find(function(p) { return p.id === id; });
};

/* Helper: get products by category */
PD.getByCategory = function(category) {
  return PD.catalog.filter(function(p) { return p.category === category; });
};

/* Helper: render a product card HTML */
PD.renderCard = function(p, delay) {
  var delayClass = delay ? ' reveal-delay-' + delay : '';
  var imgHtml = p.img1
    ? '<img src="' + p.img1 + '" alt="' + p.name + '"' +
      (p.img2 ? ' onmouseover="this.src=\'' + p.img2 + '\'" onmouseout="this.src=\'' + p.img1 + '\'"' : '') +
      ' loading="lazy">'
    : '';
  return '<a href="' + (p.url || 'producto.html') + '" class="product-card reveal' + delayClass + '">' +
    '<div class="product-card-img">' +
      imgHtml +
      '<div class="pills"><span class="pill pill--cacao">' + p.pill + '</span>' +
      (p.category === 'Protección Solar' ? '<span class="pill pill--ocre">SPF 50+</span>' : '') +
      '</div>' +
    '</div>' +
    '<div class="product-card-body">' +
      '<p class="product-card-category">' + p.category.toUpperCase() + '</p>' +
      '<h3 class="product-card-name">' + p.name + '</h3>' +
      '<div class="product-card-price">' +
        '<span class="current">$' + p.price + '</span>' +
        '<span class="compare">$' + p.comparePrice + '</span>' +
        '<span class="discount">' + p.discount + '</span>' +
      '</div>' +
      '<div class="product-card-rating">' +
        '<span class="stars" style="color:var(--ocre)">' + p.stars + ' ★</span>' +
        '<span class="score" style="font-size:12px;opacity:0.5;">(' + p.reviews + ' reseñas)</span>' +
      '</div>' +
      '<button class="product-card-btn" ' +
        'data-add-to-cart ' +
        'data-product-id="' + p.id + '" ' +
        'data-product-name="' + p.name + '" ' +
        'data-product-price="' + p.price + '"' +
      '>AGREGAR</button>' +
    '</div>' +
  '</a>';
};
