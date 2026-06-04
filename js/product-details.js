/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Detalle por producto (PDP dinámico)
   Fuente: Fichas Técnicas PDF + correcciones Excel A2 (cliente)
   Cada bloque mapea 1:1 a un metafield de Shopify:
     benefits      → product.metafields.custom.benefits (JSON)
     inci          → product.metafields.custom.ingredients_table (JSON)
     texture       → product.metafields.custom.texture_attrs (JSON)
     idealFor      → product.metafields.custom.ideal_for (JSON)
     notIdealFor   → product.metafields.custom.not_ideal_for (JSON)
   Datos compartidos:
     PD.usageByCategory   → 4 pasos por categoría
     PD.categoryFaqs      → 4 FAQ por categoría (P1–P4)
     PD.universalFaqs     → 4 FAQ universales de marca (P5–P8)

   ⚠ NOTA INCI: las fórmulas reflejan el Excel A2 del cliente.
   Para ingredientes nuevos sin % divulgado se usa el nombre INCI
   estándar y "—". Validar con laboratorio antes de publicar.
   ═══════════════════════════════════════════════════════════ */

window.PD = window.PD || {};

/* ── Modo de uso · 4 pasos por categoría ───────────────────── */
PD.usageByCategory = {
  'Protección Solar': [
    'Como último paso de tu rutina de día, sobre crema hidratante.',
    'Aplica una moneda (aprox. 2 dedos) en rostro, cuello y escote.',
    'Extiende con movimientos ascendentes hasta absorber.',
    'Reaplica cada 2–3 horas de exposición solar directa.'
  ],
  'Sueros': [
    'Sobre piel limpia y ligeramente húmeda (potencia la absorción).',
    'Aplica 3–4 gotas en la yema de los dedos.',
    'Da toques suaves — nunca arrastres ni frotes.',
    'Espera 60 segundos antes de aplicar crema o protector.'
  ],
  'Cremas': [
    'Después del suero, toma una cantidad del tamaño de una avellana.',
    'Calienta entre las palmas de las manos.',
    'Presiona sobre el rostro con movimientos ascendentes.',
    'Usa mañana y noche para mejores resultados.'
  ],
  'Limpiadores': [
    'Humedece el rostro con agua tibia.',
    'Aplica una cantidad pequeña en manos mojadas y emulsiona.',
    'Masajea 30 segundos con movimientos circulares.',
    'Enjuaga con abundante agua. Seca con toques, nunca frotes.'
  ]
};

/* ── FAQ universales de marca (iguales para todos) ─────────── */
PD.universalFaqs = [
  { q: '¿Los productos son realmente veganos y libres de crueldad?',
    a: 'Sí. Formulamos exclusivamente con ingredientes de origen vegetal o sintético seguro. Ningún ingrediente ni producto final se testa en animales. Certificación de proveedores y lotes.' },
  { q: '¿Son biodegradables?',
    a: 'Sí, al 100%. Las fórmulas se degradan en el medio ambiente sin residuos tóxicos. Nuestros empaques son reciclables y estamos transicionando a materiales compostables.' },
  { q: '¿Cómo sé si es adecuado para mi piel?',
    a: 'Cada producto incluye "Ideal para" y "No recomendado". Si aún tienes dudas, toma nuestro Quiz de Rutina y te recomendamos los productos correctos en 60 segundos.' },
  { q: '¿Cuándo veré resultados?',
    a: 'Hidratación: 1–7 días. Textura y luminosidad: 2–4 semanas. Manchas y líneas finas: 6–12 semanas de uso constante. La consistencia importa más que la cantidad.' }
];

/* ── FAQ específicas por categoría (P1–P4) ─────────────────── */
PD.categoryFaqs = {
  'Protección Solar': [
    { q: '¿Deja efecto blanco (efecto mimo)?',
      a: 'No. Nuestras formulaciones minerales usan tamaños de partícula optimizados para absorberse sin dejar residuo blanquecino, incluso en pieles oscuras.' },
    { q: '¿Puedo usarlo bajo maquillaje?',
      a: 'Sí. Espera 1 minuto antes de aplicar base. Los formatos toque seco y anti-brillo funcionan especialmente bien como prep.' },
    { q: '¿Protege contra luz azul (pantallas)?',
      a: 'Sí. Nuestro Óxido de Zinc bloquea UVA, UVB y también luz visible (incluyendo luz azul de dispositivos).' },
    { q: '¿Cuánto producto debo usar?',
      a: 'Una moneda de 10 pesos para cara y cuello. Menos que eso reduce la protección real del FPS indicado.' }
  ],
  'Sueros': [
    { q: '¿Se puede combinar con otros sueros?',
      a: 'Sí, aplicándolos del más líquido al más denso, esperando 1 minuto entre cada uno. Vit. C en la mañana, niacinamida o HA en la noche.' },
    { q: '¿El suero reemplaza mi crema?',
      a: 'No. El suero aporta activos concentrados; la crema sella la hidratación. Ambos son complementarios.' },
    { q: '¿Cuánto tiempo dura el frasco?',
      a: 'Con uso diario (3–4 gotas AM + PM), entre 6–8 semanas.' },
    { q: '¿Cómo lo guardo?',
      a: 'En lugar fresco y seco, alejado de luz directa. Cerrado bien después de cada uso.' }
  ],
  'Cremas': [
    { q: '¿Mañana o noche?',
      a: 'Mañana y noche. Si solo usas una vez al día, la noche es cuando la piel más repara.' },
    { q: '¿Qué va primero, suero o crema?',
      a: 'Suero primero (más ligero), crema después (sella la hidratación).' },
    { q: '¿Es oclusiva?',
      a: 'No. Se absorbe por completo. Nutre sin bloquear la respiración de la piel.' },
    { q: '¿Puedo usarla como base de maquillaje?',
      a: 'Sí. Espera 1–2 minutos antes de aplicar FPS y después maquillaje.' }
  ],
  'Limpiadores': [
    { q: '¿Remueve maquillaje?',
      a: 'Maquillaje ligero y SPF sí. Para maquillaje pesado o a prueba de agua, usa un aceite limpiador primero (doble limpieza).' },
    { q: '¿Dos veces al día o solo una?',
      a: 'Mañana y noche, pero la limpieza matutina debe ser suave. Si tu piel es seca, considera solo enjuagar con agua por la mañana.' },
    { q: '¿Contiene sulfatos?',
      a: 'No. Usamos tensoactivos vegetales suaves que no dañan la barrera cutánea.' },
    { q: '¿Reseca la piel?',
      a: 'No. Fue formulado específicamente para limpiar sin remover lípidos naturales. Piel limpia, nunca tirante.' }
  ]
};

/* ── Detalle por producto ──────────────────────────────────── */
PD.details = {

  'PS-ANTIBRILLO': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ Amplio Espectro', desc: 'UVA + UVB con Óxido de Zinc mineral. Sin efecto mimo, incluso en pieles oscuras.' },
      { icon: '◐', title: 'Acabado Mate 8 Horas', desc: 'Absorbe el exceso de sebo sin resecar tu piel. Cero brillo de mediodía.' },
      { icon: '○', title: 'Minimiza Poros Visibles', desc: 'Regula la producción sebácea. Poros más finos con uso constante.' },
      { icon: '✓', title: 'No Comedogénico', desc: 'Testado en piel acneica. No obstruye poros. Apto para uso diario todo el año.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '15%', fn: 'Filtro mineral UVA/UVB de amplio espectro' },
      { name: 'Aloe vera', inci: 'ALOE BARBADENSIS', pct: '—', fn: 'Calmante natural, anti-inflamatorio' },
      { name: 'Octil Salicilato', inci: 'ETHYLHEXYL SALICYLATE', pct: '—', fn: 'Filtro UVB, potencia la fotoprotección' },
      { name: 'Glicerina Vegetal', inci: 'GLYCERIN', pct: '—', fn: 'Humectante suave' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '—', fn: 'Antioxidante natural' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Fluida · emulsión ligera' },
      { label: 'Acabado en piel', value: 'Mate · no pegajoso' },
      { label: 'Absorción', value: 'Rápida · menos de 60 seg' },
      { label: 'Efecto blanco', value: 'Ninguno', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sí', positive: true }
    ],
    idealFor: ['Piel grasa o mixta', 'Odias el brillo del mediodía', 'Usas maquillaje encima', 'Clima cálido o húmedo'],
    notIdealFor: ['Piel extremadamente seca'],
    notIdealAlt: 'mejor: PS con Ácido Hialurónico'
  },

  'PS-ANTIMANCHAS': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ + Vit. C', desc: 'Protege y previene nuevas manchas.' },
      { icon: '✦', title: 'Unifica Tono', desc: 'Atenúa la hiperpigmentación existente en 4–6 semanas.' },
      { icon: '◈', title: 'Antioxidante Doble', desc: 'Ácido Ferúlico + Vitamina E potencian el efecto.' },
      { icon: '✓', title: 'Sin Blanqueadores Agresivos', desc: 'Solo ingredientes avalados por dermatología.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '18%', fn: 'Filtro mineral UVA/UVB' },
      { name: 'Vitamina C Estable', inci: 'ASCORBYL GLUCOSIDE', pct: '3%', fn: 'Previene y aclara manchas' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '2%', fn: 'Unifica el tono' },
      { name: 'Ácido Ferúlico', inci: 'FERULIC ACID', pct: '—', fn: 'Potencia antioxidante' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '—', fn: 'Antioxidante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Fluida · ligeramente satinada' },
      { label: 'Acabado en piel', value: 'Luminoso' },
      { label: 'Absorción', value: 'Media · 60–90 seg' },
      { label: 'Efecto blanco', value: 'Ninguno', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sí', positive: true }
    ],
    idealFor: ['Manchas solares existentes', 'Melasma o hiperpigmentación', 'Piel con tendencia a manchar', 'Todo tipo de piel'],
    notIdealFor: ['Si buscas cobertura de color'],
    notIdealAlt: 'mejor: PS con Color'
  },

  'PS-HIALURONICO': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ Hidratante', desc: 'Protección sin sensación tirante.' },
      { icon: '◉', title: 'HA + Pantenol', desc: 'Hidrata hasta 24 horas.' },
      { icon: '❀', title: 'Apto Piel Sensible', desc: 'Sin perfume, sin alcohol, pH balanceado.' },
      { icon: '✓', title: 'Textura Ultra Ligera', desc: 'Se absorbe en 15 segundos.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '17%', fn: 'Filtro mineral de amplio espectro' },
      { name: 'Ácido Hialurónico Triple', inci: 'SODIUM HYALURONATE', pct: '2%', fn: 'Hidratación profunda' },
      { name: 'Octil Salicilato', inci: 'ETHYLHEXYL SALICYLATE', pct: '—', fn: 'Filtro UVB, potencia la fotoprotección' },
      { name: 'Pantenol', inci: 'PANTHENOL', pct: '—', fn: 'Repara la barrera cutánea' },
      { name: 'Glicerina Vegetal', inci: 'GLYCERIN', pct: '—', fn: 'Humectante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Crema ligera · envolvente' },
      { label: 'Acabado en piel', value: 'Hidratante' },
      { label: 'Absorción', value: 'Media · 60–90 seg' },
      { label: 'Efecto blanco', value: 'Mínimo' },
      { label: 'Compatible con maquillaje', value: 'Sí', positive: true }
    ],
    idealFor: ['Piel seca o deshidratada', 'Piel sensible', 'Clima frío o seco', 'Piel madura'],
    notIdealFor: ['Piel muy grasa'],
    notIdealAlt: 'mejor: PS Toque Seco'
  },

  'PS-COLOR-CLARO': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ con Color', desc: 'Protección + cobertura natural.' },
      { icon: '❂', title: 'Subtono Rosado', desc: 'Perfecto para piel clara con tinte rosa.' },
      { icon: '◐', title: 'Acabado Satinado', desc: 'Construible, nunca apelmazado.' },
      { icon: '✓', title: 'Oculta Imperfecciones', desc: 'Cubre rojeces y pequeñas marcas.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '16%', fn: 'Filtro mineral UVA/UVB' },
      { name: 'Pigmentos Minerales', inci: 'IRON OXIDES', pct: '—', fn: 'Cobertura natural, subtono rosado' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '2%', fn: 'Unifica el tono' },
      { name: 'Escualano Vegetal', inci: 'SQUALANE', pct: '—', fn: 'Hidratación ligera' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Crema ligera con pigmentos' },
      { label: 'Acabado en piel', value: 'Satinado · con color' },
      { label: 'Absorción', value: 'Media · 60–90 seg' },
      { label: 'Efecto blanco', value: 'Ninguno · aporta color', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sustituye la base', positive: true }
    ],
    idealFor: ['Piel clara con subtono rosado', 'Buscas cobertura ligera', 'No quieres usar base de maquillaje', 'Rojeces o capilares visibles'],
    notIdealFor: ['Subtono amarillo o piel media+'],
    notIdealAlt: 'mejor: PS con Color Tono Medio'
  },

  'PS-COLOR-MEDIO': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ con Color', desc: 'Protección + cobertura natural.' },
      { icon: '❂', title: 'Subtono Amarillo', desc: 'Perfecto para piel media con tinte cálido.' },
      { icon: '◐', title: 'Acabado Satinado', desc: 'Construible para cobertura ligera o media.' },
      { icon: '✓', title: 'Empareja el Tono', desc: 'Unifica manchas y rojeces.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '16%', fn: 'Filtro mineral UVA/UVB' },
      { name: 'Pigmentos Minerales', inci: 'IRON OXIDES', pct: '—', fn: 'Cobertura natural, subtono amarillo' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '2%', fn: 'Unifica el tono' },
      { name: 'Escualano Vegetal', inci: 'SQUALANE', pct: '—', fn: 'Hidratación ligera' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Crema ligera con pigmentos' },
      { label: 'Acabado en piel', value: 'Satinado · con color' },
      { label: 'Absorción', value: 'Media · 60–90 seg' },
      { label: 'Efecto blanco', value: 'Ninguno · aporta color', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sustituye la base', positive: true }
    ],
    idealFor: ['Piel media con subtono amarillo', 'Buscas cobertura ligera', 'Tono no uniforme', 'Prefieres minimalismo cosmético'],
    notIdealFor: ['Piel muy clara o muy oscura'],
    notIdealAlt: 'mejor: PS con Color Tono Claro'
  },

  'PS-NIACINAMIDA': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ Multifunción', desc: 'Protege + trata simultáneamente.' },
      { icon: '✦', title: 'Niacinamida 5%', desc: 'Máxima concentración anti-pigmentación.' },
      { icon: '◎', title: 'Fortalece la Barrera', desc: 'Piel más resiliente al daño ambiental.' },
      { icon: '✓', title: 'Uso Diario', desc: 'Apto para todos los días del año.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '16%', fn: 'Filtro mineral de amplio espectro' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '5%', fn: 'Anti-pigmentación, fortalece la barrera' },
      { name: 'Octil Salicilato', inci: 'ETHYLHEXYL SALICYLATE', pct: '—', fn: 'Filtro UVB' },
      { name: 'Ácido Hialurónico', inci: 'SODIUM HYALURONATE', pct: '—', fn: 'Hidratación' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '—', fn: 'Antioxidante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Gel-crema · ligera' },
      { label: 'Acabado en piel', value: 'Semi-mate' },
      { label: 'Absorción', value: 'Rápida · menos de 60 seg' },
      { label: 'Efecto blanco', value: 'Ninguno', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sí', positive: true }
    ],
    idealFor: ['Tendencia a pigmentarse', 'Quieres protección + tratamiento', 'Piel mixta o normal', 'Uso diario'],
    notIdealFor: ['Alergia conocida a niacinamida (muy raro)'],
    notIdealAlt: ''
  },

  'PS-BARRA': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ en Barra', desc: 'Protección compacta, lista para llevar.' },
      { icon: '✈', title: 'Reaplica Sin Ensuciarte', desc: 'Ideal para el día a día y los viajes.' },
      { icon: '◈', title: 'UVA, UVB y Luz Azul', desc: 'Protege también frente a pantallas.' },
      { icon: '✓', title: 'Resistente al Agua', desc: 'Formato en barra ideal para outdoor y deporte.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '20%', fn: 'Filtro mineral UVA/UVB' },
      { name: 'Escualano Vegetal', inci: 'SQUALANE', pct: '—', fn: 'Hidrata y da estructura a la barra' },
      { name: 'Octocrileno', inci: 'OCTOCRYLENE', pct: '—', fn: 'Filtro UVB, estabiliza la fotoprotección' },
      { name: 'Manteca de Karité', inci: 'BUTYROSPERMUM PARKII', pct: '—', fn: 'Hidratación profunda' },
      { name: 'Cera de Candelilla', inci: 'EUPHORBIA CERIFERA WAX', pct: '—', fn: 'Estructura de barra vegana' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Sólida · barra' },
      { label: 'Formato', value: 'Stick portátil' },
      { label: 'Absorción', value: 'Inmediata' },
      { label: 'Efecto blanco', value: 'Mínimo' },
      { label: 'Compatible con maquillaje', value: 'No recomendado encima' }
    ],
    idealFor: ['Actividades al aire libre', 'Viajes y tu bolso', 'Fácil reaplicación', 'Zonas específicas (cara, cuello)'],
    notIdealFor: ['Si prefieres cobertura uniforme de loción'],
    notIdealAlt: ''
  },

  'PS-TOQUESECO': {
    benefits: [
      { icon: '☀', title: 'FPS 50+ Ultra Seco', desc: 'Acabado polvo, ni brillo ni grasa.' },
      { icon: '◐', title: 'Ideal Bajo Maquillaje', desc: 'Prep perfecta, no pila tus texturas.' },
      { icon: '○', title: 'Absorbe Exceso de Sebo', desc: 'Almidón de tapioca natural.' },
      { icon: '✓', title: 'Piel Mixta y Grasa', desc: 'Formulado específicamente para ti.' }
    ],
    inci: [
      { name: 'Óxido de Zinc', inci: 'ZINC OXIDE', pct: '15%', fn: 'Filtro mineral UVA/UVB' },
      { name: 'Almidón de Tapioca', inci: 'TAPIOCA STARCH', pct: '—', fn: 'Acabado seco, absorbe sebo' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '3%', fn: 'Regula el sebo' },
      { name: 'Glicerina Vegetal', inci: 'GLYCERIN', pct: '—', fn: 'Humectante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Fluida · casi acuosa' },
      { label: 'Acabado en piel', value: 'Ultra mate · powder' },
      { label: 'Absorción', value: 'Muy rápida · menos de 30 seg' },
      { label: 'Efecto blanco', value: 'Ninguno', positive: true },
      { label: 'Compatible con maquillaje', value: 'Sí · acabado powder', positive: true }
    ],
    idealFor: ['Piel grasa o mixta', 'Odias cualquier sensación pegajosa', 'Uso diario bajo maquillaje', 'Clima húmedo'],
    notIdealFor: ['Piel seca (tirará)'],
    notIdealAlt: 'mejor: PS con Ácido Hialurónico'
  },

  'SU-HIALURONICO': {
    benefits: [
      { icon: '◉', title: '3 Pesos Moleculares', desc: 'Hidratación superficial + profunda simultánea.' },
      { icon: '✦', title: 'Firmeza Visible', desc: 'Piel más tensa en 2–3 semanas.' },
      { icon: '◎', title: 'Anti-Edad Real', desc: 'Rellena líneas finas de deshidratación.' },
      { icon: '✓', title: 'Apto Todos los Tipos', desc: 'Incluso piel sensible y madura.' }
    ],
    inci: [
      { name: 'HA Bajo Peso Molecular', inci: 'SODIUM HYALURONATE', pct: '1%', fn: 'Penetración profunda, anti-edad' },
      { name: 'HA Medio Peso Molecular', inci: 'HYALURONIC ACID', pct: '1%', fn: 'Hidratación de capas medias' },
      { name: 'HA Alto Peso Molecular', inci: 'HA CROSSPOLYMER', pct: '0.5%', fn: 'Firmeza superficial' },
      { name: 'Aloe Vera', inci: 'ALOE BARBADENSIS', pct: '—', fn: 'Calmante natural' },
      { name: 'Glicerina Vegetal', inci: 'GLYCERIN', pct: '—', fn: 'Humectante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Sérum acuoso · ligero' },
      { label: 'Sensación en piel', value: 'Sedosa, no pegajosa' },
      { label: 'Absorción', value: 'Rápida · ~60 seg' },
      { label: 'Momento de uso', value: 'AM + PM' },
      { label: 'En tu rutina', value: 'Tras limpiar, antes de la crema' }
    ],
    idealFor: ['Cualquier tipo de piel', 'Deshidratación crónica', 'Líneas finas por falta de agua', 'Complementa cualquier rutina'],
    notIdealFor: ['Es apto para todos los tipos de piel'],
    notIdealAlt: ''
  },

  'SU-NIACINAMIDA': {
    benefits: [
      { icon: '○', title: 'Niacinamida 10%', desc: 'Concentración clínica, resultados visibles.' },
      { icon: '◐', title: 'Minimiza Poros', desc: 'Reduce la apariencia de poros en 4 semanas.' },
      { icon: '✦', title: 'Aclara Marcas de Acné', desc: 'Atenúa la hiperpigmentación post-inflamatoria.' },
      { icon: '✓', title: 'Calma Rojeces', desc: 'El Zinc PCA reduce la inflamación.' }
    ],
    inci: [
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '10%', fn: 'Regula sebo, minimiza poros, aclara marcas' },
      { name: 'Zinc PCA', inci: 'ZINC PCA', pct: '1%', fn: 'Anti-inflamatorio' },
      { name: 'Goma de Acacia', inci: 'ACACIA SENEGAL GUM', pct: '—', fn: 'Textura sedosa, efecto tensor' },
      { name: 'Ácido Hialurónico', inci: 'SODIUM HYALURONATE', pct: '—', fn: 'Hidratación ligera' },
      { name: 'Pantenol', inci: 'PANTHENOL', pct: '—', fn: 'Calmante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Sérum gel · ligero' },
      { label: 'Sensación en piel', value: 'Fresca · mate' },
      { label: 'Absorción', value: 'Rápida · ~60 seg' },
      { label: 'Momento de uso', value: 'PM (o AM)' },
      { label: 'En tu rutina', value: 'Tras limpiar, antes de la crema' }
    ],
    idealFor: ['Piel grasa o mixta', 'Poros dilatados', 'Marcas de acné', 'Tendencia a rojeces'],
    notIdealFor: ['Piel muy seca sin otra hidratación'],
    notIdealAlt: ''
  },

  'SU-VITC': {
    benefits: [
      { icon: '✦', title: 'Vit. C Estable 5%', desc: 'No se oxida. Resultado consistente.' },
      { icon: '◈', title: 'Triple Antioxidante', desc: 'Vit. C + Vit. E + Ácido Ferúlico.' },
      { icon: '❂', title: 'Luminosidad Real', desc: 'Piel más brillante en 2 semanas.' },
      { icon: '✓', title: 'Unifica Tono', desc: 'Atenúa manchas y tono desigual.' }
    ],
    inci: [
      { name: 'Ascorbil Glucósido (Vit. C)', inci: 'ASCORBYL GLUCOSIDE', pct: '5%', fn: 'Vit. C estable, antioxidante' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '1%', fn: 'Potencia y estabiliza la Vit. C' },
      { name: 'Ácido Ferúlico', inci: 'FERULIC ACID', pct: '0.5%', fn: 'Estabiliza la fórmula' },
      { name: 'Aloe Vera', inci: 'ALOE BARBADENSIS', pct: '—', fn: 'Calmante natural' },
      { name: 'Goma de Acacia', inci: 'ACACIA SENEGAL GUM', pct: '—', fn: 'Textura, efecto tensor' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Sérum acuoso' },
      { label: 'Sensación en piel', value: 'Ligera · luminosa' },
      { label: 'Absorción', value: 'Rápida' },
      { label: 'Momento de uso', value: 'AM (mañana)' },
      { label: 'En tu rutina', value: 'Tras limpiar, antes de crema/FPS' }
    ],
    idealFor: ['Piel apagada o cansada', 'Manchas e hiperpigmentación', 'Prevención anti-edad', 'Daño solar acumulado'],
    notIdealFor: ['Piel muy reactiva a la Vit. C'],
    notIdealAlt: 'empieza 2–3 veces por semana'
  },

  'SU-OJOS': {
    benefits: [
      { icon: '◉', title: 'HA Triple + Cafeína', desc: 'Reduce bolsas y ojeras visibles.' },
      { icon: '✦', title: 'Firmeza del Contorno', desc: 'Aloe + Vit. E para la zona delicada.' },
      { icon: '◎', title: 'Apto Ojos Sensibles', desc: 'Oftalmológicamente probado.' },
      { icon: '✓', title: 'Textura Ultra Ligera', desc: 'No migra, no irrita.' }
    ],
    inci: [
      { name: 'Ácido Hialurónico Triple', inci: 'HYALURONIC COMPLEX', pct: '2%', fn: 'Hidratación y firmeza' },
      { name: 'Cafeína', inci: 'CAFFEINE', pct: '1%', fn: 'Reduce bolsas y ojeras' },
      { name: 'Acetato de Tocoferilo (Vit. E)', inci: 'TOCOPHERYL ACETATE', pct: '—', fn: 'Antioxidante estable' },
      { name: 'Aloe Vera', inci: 'ALOE BARBADENSIS', pct: '—', fn: 'Calma y descongestiona' },
      { name: 'Pantenol', inci: 'PANTHENOL', pct: '—', fn: 'Repara' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Gel-sérum ligero' },
      { label: 'Sensación en piel', value: 'Fresca · descongestiona' },
      { label: 'Absorción', value: 'Rápida' },
      { label: 'Momento de uso', value: 'AM + PM' },
      { label: 'En tu rutina', value: 'Solo en el contorno de ojos' }
    ],
    idealFor: ['Ojeras por deshidratación', 'Bolsas matutinas', 'Líneas finas de expresión', 'Contorno muy delicado'],
    notIdealFor: ['Es apto para todos los tipos de piel'],
    notIdealAlt: ''
  },

  'CR-HIALURONICO': {
    benefits: [
      { icon: '◉', title: 'HA Liposomado', desc: 'Penetra capas profundas, no queda en superficie.' },
      { icon: '✦', title: 'Rellena Líneas Finas', desc: 'Efecto plumping visible desde el día 1.' },
      { icon: '◈', title: 'Nutrición Intensa', desc: 'Aceite de almendras y manteca de cacao restauran lípidos.' },
      { icon: '✓', title: 'Ideal Piel Madura', desc: 'Y para quien sufre deshidratación severa.' }
    ],
    inci: [
      { name: 'Ácido Hialurónico Liposomado', inci: 'SODIUM HYALURONATE', pct: '2%', fn: 'Penetración en capas profundas' },
      { name: 'Aceite de Almendras', inci: 'PRUNUS AMYGDALUS DULCIS OIL', pct: '—', fn: 'Nutrición y emoliencia' },
      { name: 'Manteca de Cacao', inci: 'THEOBROMA CACAO SEED BUTTER', pct: '—', fn: 'Nutrición intensa, restaura lípidos' },
      { name: 'Pantenol', inci: 'PANTHENOL', pct: '—', fn: 'Repara la barrera' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '—', fn: 'Antioxidante' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Crema rica · envolvente' },
      { label: 'Acabado en piel', value: 'Nutritivo, no graso' },
      { label: 'Absorción', value: 'Media' },
      { label: 'Momento de uso', value: 'AM + PM' },
      { label: 'En tu rutina', value: 'Última (antes del FPS en AM)' }
    ],
    idealFor: ['Piel madura (35+)', 'Deshidratación profunda', 'Clima seco o frío', 'Piel sensible'],
    notIdealFor: ['Piel muy grasa'],
    notIdealAlt: 'mejor: Crema Iluminadora'
  },

  'CR-ILUMINADORA': {
    benefits: [
      { icon: '❂', title: 'Vit. C + E Liposomada', desc: 'Luminosidad desde el día 3.' },
      { icon: '✦', title: 'Estimula Colágeno', desc: 'Piel más firme y elástica con el tiempo.' },
      { icon: '◈', title: 'Escudo Antioxidante', desc: 'Protege de la contaminación y la luz azul.' },
      { icon: '✓', title: 'Uso Mañana o Noche', desc: 'Textura versátil, absorción rápida.' }
    ],
    inci: [
      { name: 'Vit. C Liposomada', inci: 'ASCORBYL GLUCOSIDE', pct: '3%', fn: 'Luminosidad + antioxidante' },
      { name: 'Vitamina E', inci: 'TOCOPHEROL', pct: '1%', fn: 'Potencia la Vit. C' },
      { name: 'Aceite de Almendras', inci: 'PRUNUS AMYGDALUS DULCIS OIL', pct: '—', fn: 'Nutrición y emoliencia' },
      { name: 'Manteca de Cacao', inci: 'THEOBROMA CACAO SEED BUTTER', pct: '—', fn: 'Restaura lípidos' },
      { name: 'Niacinamida', inci: 'NIACINAMIDE', pct: '2%', fn: 'Unifica el tono' }
    ],
    texture: [
      { label: 'Consistencia', value: 'Crema ligera' },
      { label: 'Acabado en piel', value: 'Luminoso, no graso' },
      { label: 'Absorción', value: 'Rápida' },
      { label: 'Momento de uso', value: 'AM + PM' },
      { label: 'En tu rutina', value: 'Antes del FPS / maquillaje' }
    ],
    idealFor: ['Piel apagada', 'Tono desigual', '20s a 40s', 'Todos los tipos de piel'],
    notIdealFor: ['Alergia a la Vit. C'],
    notIdealAlt: ''
  },

  'LI-HIALURONICO': {
    benefits: [
      { icon: '◉', title: 'Limpia Sin Resecar', desc: 'Tensoactivos suaves de origen vegetal.' },
      { icon: '✦', title: 'Preserva la Barrera', desc: 'pH balanceado, sin sulfatos agresivos.' },
      { icon: '❀', title: 'Apto Piel Sensible', desc: 'Sin fragancias sintéticas, sin colorantes.' },
      { icon: '✓', title: 'Uso AM + PM', desc: 'Diario sin irritar.' }
    ],
    inci: [
      { name: 'Coco Glucósido', inci: 'COCO GLUCOSIDE', pct: '—', fn: 'Tensoactivo suave de origen vegetal' },
      { name: 'Ácido Hialurónico', inci: 'SODIUM HYALURONATE', pct: '—', fn: 'Hidratación durante la limpieza' },
      { name: 'Aceite de Almendras', inci: 'PRUNUS AMYGDALUS DULCIS OIL', pct: '—', fn: 'Nutre, evita la resequedad' },
      { name: 'Extracto de Manzanilla', inci: 'CHAMOMILLA RECUTITA EXTRACT', pct: '—', fn: 'Calmante natural' },
      { name: 'Glicerina Vegetal', inci: 'GLYCERIN', pct: '—', fn: 'Humectante' }
    ],
    texture: [
      { label: 'Formato', value: 'Gel suave' },
      { label: 'Espuma', value: 'Ligera · cremosa' },
      { label: 'Sensación post-lavado', value: 'Limpia sin tirantez' },
      { label: 'Momento de uso', value: 'AM + PM' },
      { label: 'Doble limpieza', value: 'Remueve SPF y maquillaje ligero' }
    ],
    idealFor: ['Piel seca, normal o mixta', 'Piel sensible', 'Uso diario AM + PM', 'Remueve maquillaje ligero'],
    notIdealFor: ['Piel con acné activo'],
    notIdealAlt: 'mejor: Limpiador para Piel Grasa'
  },

  'LI-GRASA': {
    benefits: [
      { icon: '○', title: 'Limpieza Purificante', desc: 'Coco-betaine de origen vegetal limpia a fondo sin resecar.' },
      { icon: '◐', title: 'Calma y Equilibra', desc: 'Manzanilla, caléndula y lavanda desinflaman la piel reactiva.' },
      { icon: '✦', title: 'Regula el Sebo', desc: 'Ayuda a controlar el brillo y la sensación grasa día a día.' },
      { icon: '✓', title: 'No Agresivo', desc: 'Limpia sin desencadenar rebote de sebo. Uso diario.' }
    ],
    inci: [
      { name: 'Cocamidopropil Betaína', inci: 'COCAMIDOPROPYL BETAINE', pct: '—', fn: 'Tensoactivo suave de origen vegetal' },
      { name: 'Extracto de Manzanilla', inci: 'CHAMOMILLA RECUTITA EXTRACT', pct: '—', fn: 'Calmante, anti-inflamatorio' },
      { name: 'Extracto de Caléndula', inci: 'CALENDULA OFFICINALIS EXTRACT', pct: '—', fn: 'Calma y regenera' },
      { name: 'Extracto de Lavanda', inci: 'LAVANDULA ANGUSTIFOLIA EXTRACT', pct: '—', fn: 'Purifica y equilibra' },
      { name: 'Glicerina y Pantenol', inci: 'GLYCERIN · PANTHENOL', pct: '—', fn: 'Humecta y repara' }
    ],
    texture: [
      { label: 'Formato', value: 'Gel ligero' },
      { label: 'Espuma', value: 'Suave' },
      { label: 'Sensación post-lavado', value: 'Limpia, fresca, no reseca' },
      { label: 'Momento de uso', value: 'AM + PM (máx. 2×)' },
      { label: 'Doble limpieza', value: 'Remueve SPF y maquillaje ligero' }
    ],
    idealFor: ['Piel grasa con tendencia a brotes', 'Poros dilatados', 'Exceso de sebo', 'Piel reactiva que necesita calma'],
    notIdealFor: ['Piel muy seca'],
    notIdealAlt: 'mejor: Limpiador con Ácido Hialurónico'
  }

};
