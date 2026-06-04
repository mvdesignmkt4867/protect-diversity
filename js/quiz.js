/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Quiz de Rutina IA
   Product matching logic based on skin type × concerns
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  var currentStep = 0;
  var answers = { skinType: '', concerns: [], climate: '', sunscreen: '', makeup: '' };

  var products = [
    { id: 'PS-ANTIBRILLO',   name: 'Protector Solar Anti-Brillo',             price: 384, category: 'Protección Solar', skin: ['grasa','mixta'],                   concerns: ['brillo','poros','acne'],              climate: ['calido','templado'],       makeup: true,  desc: 'FPS 50+ mate. Control de brillo todo el día.' },
    { id: 'PS-ANTIMANCHAS',  name: 'Protector Solar Anti-Manchas',            price: 384, category: 'Protección Solar', skin: ['todo tipo'],                       concerns: ['manchas','pigmentacion'],             climate: ['calido','templado','frio'], makeup: true,  desc: 'FPS 50+ con Vitamina C estable. Previene manchas.' },
    { id: 'PS-HIALURONICO',  name: 'Protector Solar con Ácido Hialurónico',   price: 384, category: 'Protección Solar', skin: ['seca','sensible','mixta'],          concerns: ['deshidratacion','lineas finas'],      climate: ['frio','templado'],         makeup: true,  desc: 'FPS 50+ hidratante. Piel seca y sensible.' },
    { id: 'PS-NIACINAMIDA',  name: 'Protector Solar con Niacinamida',         price: 384, category: 'Protección Solar', skin: ['todo tipo'],                       concerns: ['poros','brillo','manchas'],           climate: ['calido','templado'],       makeup: true,  desc: 'FPS 50+ multifunción. Niacinamida 5%.' },
    { id: 'PS-TOQUESECO',    name: 'Protector Solar Toque Seco',              price: 384, category: 'Protección Solar', skin: ['grasa','mixta'],                   concerns: ['brillo'],                            climate: ['calido'],                  makeup: true,  desc: 'FPS 50+ ultra seco. Prep perfecta bajo maquillaje.' },
    { id: 'PS-BARRA',        name: 'Protector Solar en Barra',                price: 360, category: 'Protección Solar', skin: ['todo tipo'],                       concerns: ['reaplica'],                          climate: ['calido','templado'],       makeup: false, desc: 'FPS 50+ compacto. 100% mineral, para llevar.' },
    { id: 'SU-HIALURONICO',  name: 'Suero Facial con Ácido Hialurónico',      price: 392, category: 'Sueros',           skin: ['seca','sensible','mixta','grosa'],  concerns: ['deshidratacion','lineas finas'],      climate: ['frio','templado','calido'], makeup: false, desc: 'Triple HA. Firmeza + hidratación profunda.' },
    { id: 'SU-NIACINAMIDA',  name: 'Suero Facial con Niacinamida',            price: 392, category: 'Sueros',           skin: ['grasa','mixta','acne'],             concerns: ['poros','brillo','manchas','acne'],    climate: ['calido','templado'],       makeup: false, desc: 'Niacinamida 10%. Poros y marcas de acné.' },
    { id: 'SU-VITC',         name: 'Suero Facial con Vitamina C',             price: 392, category: 'Sueros',           skin: ['todo tipo'],                       concerns: ['manchas','piel apagada'],             climate: ['calido','templado','frio'], makeup: false, desc: 'Vit. C estable 5%. Luminosidad y antimanchas.' },
    { id: 'SU-OJOS',         name: 'Suero para Contorno de Ojos',             price: 392, category: 'Sueros',           skin: ['todo tipo'],                       concerns: ['ojeras','lineas finas'],              climate: ['calido','templado','frio'], makeup: false, desc: 'HA triple + cafeína. Ojeras y bolsas.' },
    { id: 'CR-HIALURONICO',  name: 'Crema Facial con Ácido Hialurónico',      price: 368, category: 'Cremas',           skin: ['seca','madura'],                   concerns: ['deshidratacion','arrugas'],           climate: ['frio','templado'],         makeup: false, desc: 'HA en liposomas. Efecto plumping desde el día 1.' },
    { id: 'CR-ILUMINADORA',  name: 'Crema Facial Hidratante Iluminadora',     price: 368, category: 'Cremas',           skin: ['todo tipo'],                       concerns: ['piel apagada','lineas finas'],        climate: ['templado','frio'],         makeup: false, desc: 'Vit. C + E liposomadas. Luminosidad real.' },
    { id: 'LI-HIALURONICO',  name: 'Limpiador Facial con Ácido Hialurónico',  price: 376, category: 'Limpiadores',      skin: ['seca','sensible','todo tipo'],      concerns: ['sensibilidad'],                      climate: ['frio','templado','calido'], makeup: false, desc: 'Limpieza suave sin resecar. pH balanceado.' },
    { id: 'LI-GRASA',        name: 'Limpiador Facial para Piel Grasa',        price: 376, category: 'Limpiadores',      skin: ['grasa','mixta','acne'],             concerns: ['brillo','poros','acne'],              climate: ['calido','templado'],       makeup: false, desc: 'Arcilla verde + salicílico. Purifica y regula sebo.' }
  ];

  window.selectOption = function(el) {
    el.parentElement.querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
    el.classList.add('selected');
    setTimeout(nextStep, 300);
  };

  window.toggleMulti = function(el) {
    el.classList.toggle('selected');
  };

  window.selectAndFinish = function(el) {
    el.parentElement.querySelectorAll('.quiz-option').forEach(function(o) { o.classList.remove('selected'); });
    el.classList.add('selected');
    answers.makeup = el.dataset.value;
    setTimeout(showResults, 400);
  };

  window.nextStep = function() {
    saveCurrentAnswers();
    currentStep++;
    updateUI();
  };

  window.prevStep = function() {
    currentStep--;
    updateUI();
  };

  function saveCurrentAnswers() {
    if (currentStep === 1) {
      var sel = document.querySelector('#skinType .selected');
      if (sel) answers.skinType = sel.dataset.value;
    } else if (currentStep === 2) {
      answers.concerns = [];
      document.querySelectorAll('#concerns .selected').forEach(function(el) { answers.concerns.push(el.dataset.value); });
    } else if (currentStep === 3) {
      var sel = document.querySelector('#climate .selected');
      if (sel) answers.climate = sel.dataset.value;
    } else if (currentStep === 4) {
      var sel = document.querySelector('[data-step="4"] .selected');
      if (sel) answers.sunscreen = sel.dataset.value;
    }
  }

  function updateUI() {
    document.querySelectorAll('.quiz-step').forEach(function(s) { s.classList.remove('active'); });
    var target = currentStep <= 5 ? '[data-step="' + currentStep + '"]' : '[data-step="results"]';
    var el = document.querySelector(target);
    if (el) el.classList.add('active');

    var total = 5;
    var progress = currentStep === 0 ? 0 : Math.min((currentStep / total) * 100, 100);
    document.getElementById('quizProgressBar').style.width = progress + '%';
    document.getElementById('quizCounter').textContent = currentStep > 0 && currentStep <= 5 ? currentStep + ' / ' + total : '';
  }

  function showResults() {
    saveCurrentAnswers();
    currentStep = 'results';
    document.querySelectorAll('.quiz-step').forEach(function(s) { s.classList.remove('active'); });
    document.querySelector('[data-step="results"]').classList.add('active');
    document.getElementById('quizProgressBar').style.width = '100%';
    document.getElementById('quizCounter').textContent = '';

    var scored = products.map(function(p) {
      var score = 0;
      if (p.skin.indexOf(answers.skinType) !== -1) score += 3;
      answers.concerns.forEach(function(c) { if (p.concerns.indexOf(c) !== -1) score += 2; });
      if (p.climate.indexOf(answers.climate) !== -1) score += 1;
      if (answers.makeup === 'si' && p.makeup) score += 1;
      return { product: p, score: score };
    });

    scored.sort(function(a, b) { return b.score - a.score; });

    var routine = [];
    var categories = {};
    scored.forEach(function(s) {
      if (routine.length >= 4) return;
      if (!categories[s.product.category] && s.score > 0) {
        categories[s.product.category] = true;
        routine.push(s);
      }
    });

    if (routine.length < 3) {
      scored.forEach(function(s) {
        if (routine.length >= 4) return;
        if (routine.indexOf(s) === -1 && s.score > 0) routine.push(s);
      });
    }

    var maxScore = routine.length > 0 ? routine[0].score : 1;

    var grid = document.getElementById('resultsGrid');
    var total = 0;
    grid.innerHTML = '';
    routine.forEach(function(r) {
      var match = Math.min(Math.round((r.score / maxScore) * 100), 99);
      total += r.product.price;
      var catalogEntry = (PD.catalog || []).find(function(p) { return p.id === r.product.id; });
      var imgSrc = catalogEntry && catalogEntry.img1 ? catalogEntry.img1 : '';
      var imgHtml = imgSrc
        ? '<img src="' + imgSrc + '" alt="' + r.product.name + '" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">'
        : '';
      grid.innerHTML += '<div class="card result-card">' +
        '<p class="result-card-match">' + match + '% match</p>' +
        '<div class="result-card-img" style="overflow:hidden;">' + imgHtml + '</div>' +
        '<h4>' + r.product.name + '</h4>' +
        '<p class="price">$' + r.product.price + '</p>' +
        '<p>' + r.product.desc + '</p>' +
        '<button class="product-card-btn" style="margin-top:12px;" data-add-to-cart data-product-id="' + r.product.id + '" data-product-name="' + r.product.name + '" data-product-price="' + r.product.price + '">AGREGAR</button>' +
      '</div>';
    });

    document.getElementById('resultsTotal').textContent = '$' + total.toLocaleString();
    document.getElementById('resultsSavings').textContent = 'Ahorra $' + Math.round(total * 0.2) + ' con el 20% de descuento';

    document.getElementById('addRoutineBtn').onclick = function() {
      routine.forEach(function(r) {
        PD.addToCart({ id: r.product.id, name: r.product.name, price: r.product.price });
      });
    };
  }

})();
