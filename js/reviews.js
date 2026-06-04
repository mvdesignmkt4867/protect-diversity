/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Reviews / Reseñas
   Datos de reseñas por producto
   En Shopify: migrar a Product Reviews metafields / Judge.me
   ═══════════════════════════════════════════════════════════ */

window.PD = window.PD || {};

PD.reviews = {

  'PS-ANTIBRILLO': [
    { id: 1, name: 'Mariana G.', city: 'CDMX', skin: 'Piel grasa', stars: 5, date: '2026-05-20', verified: true,
      title: 'Por fin un protector que no me deja brillosa',
      text: 'Tengo piel muy grasa y todos los protectores me dejaban la cara como espejo a las dos horas. Este dura TODO el día. No hay white cast, no hay sensación pesada. Lo recomiendo a ojos cerrados.' },
    { id: 2, name: 'Sofía R.', city: 'Guadalajara', skin: 'Piel mixta', stars: 5, date: '2026-05-12', verified: true,
      title: 'Lo más ligero que he probado',
      text: 'Se absorbe en segundos y el acabado mate es increíble. Lo uso antes del maquillaje y mi base dura el doble. La niacinamida se nota — mis poros han mejorado en un mes de uso.' },
    { id: 3, name: 'Andrea M.', city: 'Monterrey', skin: 'Piel grasa', stars: 4, date: '2026-05-02', verified: true,
      title: 'Muy bueno, reaplico a las 3 horas',
      text: 'El producto cumple lo que promete. Lo único es que con actividad física hay que replicar seguido, pero eso es normal con minerales. Para el día a día en oficina es perfecto.' },
    { id: 4, name: 'Camila V.', city: 'CDMX', skin: 'Piel mixta', stars: 5, date: '2026-04-28', verified: true,
      title: 'El mejor de su tipo',
      text: 'Tenía miedo porque ya había probado muchos minerales con white cast horrible. Este es completamente transparente. El olor es neutro, la textura es agua. 10/10.' },
  ],

  'PS-ANTIMANCHAS': [
    { id: 5, name: 'Valentina T.', city: 'CDMX', skin: 'Piel normal', stars: 5, date: '2026-05-18', verified: true,
      title: 'Mis manchas bajaron visiblemente',
      text: 'Llevo 6 semanas usándolo y las manchas que tenía de acné post-inflamatorio bajaron mucho en intensidad. La Vitamina C estable hace la diferencia — no irrita, no pica, solo funciona.' },
    { id: 6, name: 'Isabela F.', city: 'Puebla', skin: 'Piel sensible', stars: 4, date: '2026-05-08', verified: true,
      title: 'Funciona de verdad',
      text: 'Tengo piel sensible y la mayoría de los protectores con Vitamina C me irritan. Este no. Se siente suave, huele muy bien, y en 4 semanas noté diferencia en el tono.' },
    { id: 7, name: 'Lucía P.', city: 'Guadalajara', skin: 'Piel mixta', stars: 5, date: '2026-04-22', verified: true,
      title: 'Mi combo favorito',
      text: 'Lo combino con el Suero de Vitamina C de noche y el resultado es impresionante. Mi dermatóloga notó la mejora y me preguntó qué estaba usando. ¡Gracias PD!' },
  ],

  'PS-HIALURONICO': [
    { id: 8, name: 'Regina A.', city: 'CDMX', skin: 'Piel seca', stars: 5, date: '2026-05-22', verified: true,
      title: 'El único protector que no me reseca',
      text: 'Tengo piel seca y todos los solares me aprietan la cara al final del día. Este protege E hidrata. La textura es cremosa pero ligera, y el acabado es luminoso sin ser graso.' },
    { id: 9, name: 'Daniela S.', city: 'Querétaro', skin: 'Piel normal', stars: 5, date: '2026-05-10', verified: true,
      title: 'Piel hidratada todo el día',
      text: 'El pantenol se siente de inmediato. Lo aplico en la mañana y mi piel se ve plump y sana todo el día. La protección es real — sin quemaduras este verano.' },
    { id: 10, name: 'Natalia B.', city: 'Monterrey', skin: 'Piel seca-sensible', stars: 4, date: '2026-04-30', verified: true,
      title: 'Excelente para invierno',
      text: 'En temporada seca este protector es mi favorito. En verano muy húmedo puede sentirse un poco pesado, pero para climas templados o fríos es perfecto.' },
  ],

  'PS-COLOR-CLARO': [
    { id: 11, name: 'Fernanda L.', city: 'CDMX', skin: 'Piel clara', stars: 5, date: '2026-05-15', verified: true,
      title: 'Cobertura natural increíble',
      text: 'El tono claro es exactamente mi tono. Empata perfecto con mi subtono rosado. Cubre rojeces sin verse maquillado — parece que nada más tienes una piel muy bonita.' },
    { id: 12, name: 'Paola M.', city: 'GDL', skin: 'Piel clara con rojeces', stars: 5, date: '2026-05-05', verified: true,
      title: 'Adiós a las rojeces',
      text: 'Tengo rosacea leve y este protector es lo mejor que me ha pasado. Cubre, protege y no irrita. Mi dermatólogo lo aprobó específicamente.' },
  ],

  'PS-COLOR-MEDIO': [
    { id: 13, name: 'Alejandra C.', city: 'CDMX', skin: 'Piel media', stars: 5, date: '2026-05-19', verified: true,
      title: 'Exactamente mi tono',
      text: 'El tono medio está perfectísimo para mi piel mexicana. Sin white cast, sin efecto fantasma. Es buildable — puedo usarlo ligero o cubrirme más según el día.' },
    { id: 14, name: 'Jimena R.', city: 'Oaxaca', skin: 'Piel media-oscura', stars: 4, date: '2026-05-01', verified: true,
      title: 'Casi perfecto',
      text: 'El tono queda muy bien en mi piel. Solo desearía un tono un poco más oscuro para el verano cuando me bronceó más, pero para la mayor parte del año es mi protector favorito.' },
  ],

  'PS-NIACINAMIDA': [
    { id: 15, name: 'Michelle G.', city: 'CDMX', skin: 'Piel grasa con acné', stars: 5, date: '2026-05-21', verified: true,
      title: 'Mis poros visiblemente reducidos',
      text: 'En 4 semanas mis poros se ven más pequeños y mi piel produce menos sebo. El producto cumple exactamente lo que promete. La niacinamida al 5% es una concentración real, no marketing.' },
    { id: 16, name: 'Gabriela T.', city: 'Monterrey', skin: 'Todo tipo', stars: 5, date: '2026-05-09', verified: true,
      title: 'Multifunción real',
      text: 'Protege, unifica el tono, reduce poros y previene manchas. En un solo paso. La fórmula es increíblemente ligera y el acabado semi-mate dura horas.' },
  ],

  'PS-BARRA': [
    { id: 17, name: 'Karla M.', city: 'CDMX', skin: 'Todo tipo', stars: 5, date: '2026-05-16', verified: true,
      title: 'Perfecta para replicar',
      text: 'Siempre olvidaba reaplicar porque sacar crema encima del maquillaje es horrible. La barra cambia todo — deslizas, listo. Ideal para llevar al trabajo o de viaje.' },
    { id: 18, name: 'Paulina V.', city: 'Cancún', skin: 'Todo tipo', stars: 5, date: '2026-05-03', verified: true,
      title: 'Ideal para la playa',
      text: '100% mineral sin químicos en arrecifes. Lo usé todo el verano en Cancún y cero quemaduras. El formato en barra es genial para viajar sin líquidos.' },
  ],

  'PS-TOQUESECO': [
    { id: 19, name: 'Ana P.', city: 'CDMX', skin: 'Piel grasa', stars: 5, date: '2026-05-23', verified: true,
      title: 'Literalmente toque seco',
      text: 'El nombre lo dice todo. En 10 segundos se absorbe y queda absolutamente seco. Para mi piel extremadamente grasa es el único protector que aguanta el día sin retoque.' },
    { id: 20, name: 'Laura C.', city: 'Guadalajara', skin: 'Piel mixta', stars: 4, date: '2026-05-14', verified: true,
      title: 'Perfecto bajo maquillaje',
      text: 'Mi base dura 2x más desde que uso este como primer. El acabado polvo es exactamente lo que buscaba. Solo 4 estrellas porque en días muy húmedos hay que replicar.' },
  ],

  'SU-HIALURONICO': [
    { id: 21, name: 'Diana R.', city: 'CDMX', skin: 'Piel seca', stars: 5, date: '2026-05-20', verified: true,
      title: 'Los 3 pesos moleculares se sienten',
      text: 'He probado muchos sueros de HA y ninguno se compara. La hidratación superficial es inmediata, pero la profunda se nota después de 2 semanas. Mi piel se ve más firme y llena.' },
    { id: 22, name: 'Mónica L.', city: 'Monterrey', skin: 'Piel madura', stars: 5, date: '2026-05-11', verified: true,
      title: 'Mi suero anti-edad favorito',
      text: 'Tengo 52 años y este suero me ha devuelto luminosidad. Las líneas finas alrededor de mis ojos se ven menos marcadas. La textura es agua — no se siente nada pero hace todo.' },
  ],

  'SU-NIACINAMIDA': [
    { id: 23, name: 'Elena S.', city: 'CDMX', skin: 'Piel grasa con acné', stars: 5, date: '2026-05-17', verified: true,
      title: 'La concentración al 10% es REAL',
      text: 'La mayoría de sueros de niacinamida tienen 2-3% y lo esconden en la etiqueta. Este tiene 10% confirmado. En 3 semanas mis marcas de acné bajaron notablemente y mis poros se ven más pequeños.' },
    { id: 24, name: 'Adriana M.', city: 'Puebla', skin: 'Piel mixta', stars: 5, date: '2026-05-04', verified: true,
      title: 'Adiós sebo y poros',
      text: 'Lo uso antes del protector solar y mi piel se mantiene mate TODO el día. Las rojeces de acné tardaron en calmar pero ya en la semana 2 noté diferencia real.' },
  ],

  'SU-VITC': [
    { id: 25, name: 'Patricia G.', city: 'CDMX', skin: 'Piel apagada', stars: 5, date: '2026-05-19', verified: true,
      title: 'Mi piel brilla y no por aceite',
      text: 'Luminosidad real desde el día 3. La Vitamina C estable no se oxida, no pica, no irrita. En 2 meses mis manchas bajaron 60%. Lo combino con el PS Anti-Manchas y el resultado es impresionante.' },
    { id: 26, name: 'Claudia R.', city: 'GDL', skin: 'Todo tipo', stars: 5, date: '2026-05-06', verified: true,
      title: 'El trío antioxidante funciona',
      text: 'C + E + Ferúlico es el estándar de oro en vitamina C y este lo tiene todo. El precio es justo para la calidad. Ya va mi tercer frasco.' },
  ],

  'SU-OJOS': [
    { id: 27, name: 'Verónica T.', city: 'CDMX', skin: 'Todo tipo', stars: 5, date: '2026-05-18', verified: true,
      title: 'Mis ojeras mejoraron en 2 semanas',
      text: 'La cafeína hace su trabajo. Mis bolsas por la mañana bajaron notablemente. No migra a los ojos, no irrita. La textura es ultra ligera y se absorbe al instante.' },
    { id: 28, name: 'Sandra P.', city: 'Monterrey', skin: 'Piel madura', stars: 4, date: '2026-04-28', verified: true,
      title: 'Muy bueno para líneas finas',
      text: 'Las líneas del contorno de ojos se ven menos profundas. Para las ojeras muy marcadas no hace milagros, pero sí mejora. Oftalmológicamente probado — importante para esa zona.' },
  ],

  'CR-HIALURONICO': [
    { id: 29, name: 'Lorena M.', city: 'CDMX', skin: 'Piel seca-madura', stars: 5, date: '2026-05-21', verified: true,
      title: 'Efecto plumping real desde el día 1',
      text: 'La diferencia fue inmediata. El HA en liposomas penetra de verdad — no se queda en superficie. Mi piel se ve más firme, llena y sana. Ya no uso otro humectante.' },
    { id: 30, name: 'Rosa A.', city: 'Querétaro', skin: 'Piel seca', stars: 5, date: '2026-05-08', verified: true,
      title: 'Hidratación que dura 24h',
      text: 'Exagerado? No. Me pongo la crema en la noche y al día siguiente mi piel sigue hidratada. El karité y el escualano restauran la barrera de verdad.' },
  ],

  'CR-ILUMINADORA': [
    { id: 31, name: 'Rebeca F.', city: 'CDMX', skin: 'Piel apagada', stars: 5, date: '2026-05-15', verified: true,
      title: 'Luminosidad de otro nivel',
      text: 'Desde el día 3 mi piel se ve diferente — más viva, más luminosa. La Vitamina C en liposomas no irrita nada y el efecto es progresivo y duradero. Ya no uso corrector de día.' },
    { id: 32, name: 'Brenda L.', city: 'GDL', skin: 'Todo tipo', stars: 5, date: '2026-05-02', verified: true,
      title: 'Mañana y noche, perfecta',
      text: 'La textura es versátil — ligera para la mañana bajo protector, y nutritiva para la noche. El escudo antioxidante contra la contaminación se nota, vivo en zona de mucho tráfico.' },
  ],

  'LI-HIALURONICO': [
    { id: 33, name: 'Ximena C.', city: 'CDMX', skin: 'Piel sensible', stars: 5, date: '2026-05-20', verified: true,
      title: 'El único limpiador que no me irrita',
      text: 'Tengo piel muy reactiva y casi todo me da brote. Este limpia perfecto sin alterar mi barrera. pH balanceado de verdad — mi piel queda suave, no apretada.' },
    { id: 34, name: 'Tania R.', city: 'Monterrey', skin: 'Piel seca', stars: 5, date: '2026-05-09', verified: true,
      title: 'Limpia e hidrata al mismo tiempo',
      text: 'No creía que un limpiador pudiera hidratar. Este lo hace. El HA en la fórmula mantiene la hidratación incluso después de limpiar. Uso AM y PM sin problemas.' },
  ],

  'LI-GRASA': [
    { id: 35, name: 'Nadia T.', city: 'CDMX', skin: 'Piel grasa con acné', stars: 5, date: '2026-05-22', verified: true,
      title: 'Limpieza profunda sin resecar',
      text: 'La arcilla verde hace su trabajo — limpieza profunda real. Lo que me sorprendió es que no reseca ni genera efecto rebote. El salicílico es suave pero efectivo.' },
    { id: 36, name: 'Yolanda S.', city: 'Puebla', skin: 'Piel grasa', stars: 4, date: '2026-05-06', verified: true,
      title: 'Para piel muy grasa es el indicado',
      text: 'Mis poros se ven más limpios y mi piel produce menos sebo desde que uso este limpiador. En la primera semana hubo un pequeño brote de purga (normal) y después todo mejoró.' },
  ],

};

/* Helper: obtener reseñas más recientes de todos los productos */
PD.getRecentReviews = function(count) {
  var all = [];
  Object.keys(PD.reviews).forEach(function(pid) {
    PD.reviews[pid].forEach(function(r) {
      all.push(Object.assign({}, r, { productId: pid }));
    });
  });
  all.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  return all.slice(0, count || 3);
};

/* Helper: promedio de estrellas */
PD.getAvgStars = function(productId) {
  var reviews = PD.reviews[productId];
  if (!reviews || !reviews.length) return null;
  var sum = reviews.reduce(function(s, r) { return s + r.stars; }, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
};

/* Helper: renderizar sección de reseñas de un producto */
PD.renderReviews = function(productId, container) {
  var reviews = PD.reviews[productId] || [];
  if (!reviews.length || !container) return;
  var avg = PD.getAvgStars(productId);
  var stars = function(n) {
    return '<span style="color:var(--ocre);">' + '★'.repeat(n) + '☆'.repeat(5 - n) + '</span>';
  };
  var initials = function(name) {
    return name.split(' ').map(function(w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  };

  var html = '<div class="reviews-header">' +
    '<div class="reviews-avg">' +
      '<span class="reviews-avg-num">' + avg + '</span>' +
      stars(Math.round(avg)) +
      '<span class="reviews-count">(' + reviews.length + ' reseñas verificadas)</span>' +
    '</div>' +
    '<p style="font-size:12px;opacity:0.4;font-style:italic;">Solo clientes que compraron pueden dejar reseña.</p>' +
  '</div>' +
  '<div class="reviews-grid">' +
    reviews.map(function(r) {
      return '<div class="review-card">' +
        '<div class="review-header">' +
          '<div class="review-avatar">' + initials(r.name) + '</div>' +
          '<div class="review-meta">' +
            '<div class="review-name">' + r.name + '</div>' +
            '<div class="review-info">' + r.city + ' · ' + r.skin + '</div>' +
          '</div>' +
          (r.verified ? '<span class="review-verified">✓ Verificada</span>' : '') +
        '</div>' +
        '<div class="review-stars">' + stars(r.stars) + '</div>' +
        '<h4 class="review-title">"' + r.title + '"</h4>' +
        '<p class="review-text">' + r.text + '</p>' +
        '<span class="review-date">' + r.date + '</span>' +
      '</div>';
    }).join('') +
  '</div>';
  container.innerHTML = html;
};
