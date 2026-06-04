/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Quiz de Rutina
   Sistema de matching aprobado por cliente (junio 2026)

   PESOS:
   - Tipo de piel matchea ............... +4
   - Cada concern matcheado ............. +3
   - Rango de edad PRIMARIO ............. +2
   - Rango de edad ADYACENTE (±1 rango) . +1
   - Maquillaje + SPF compatible mate ... +2
   - Clima matchea ...................... +1
   - "No usa SPF" + producto es SPF ..... +3

   RUTINA: 1 Limpiador + 1 Suero + 1 Crema + 1 FPS
   (+ Contorno de Ojos si seleccionó "ojeras" como concern)
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  var AGES = ['18-24', '25-34', '35-44', '45+'];
  var ROLES = ['Limpiador', 'Suero', 'Crema', 'FPS'];

  var currentStep = 0;
  var answers = {
    skinType: '',
    concerns: [],
    climate: '',
    sunscreen: '',
    makeup: '',
    age: ''
  };

  /* ─── Helpers UI ─── */
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
    answers.age = el.dataset.value;
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
    } else if (currentStep === 5) {
      var sel = document.querySelector('[data-step="5"] .selected');
      if (sel) answers.makeup = sel.dataset.value;
    }
  }

  function updateUI() {
    document.querySelectorAll('.quiz-step').forEach(function(s) { s.classList.remove('active'); });
    var target = currentStep <= 6 ? '[data-step="' + currentStep + '"]' : '[data-step="results"]';
    var el = document.querySelector(target);
    if (el) el.classList.add('active');

    var total = 6;
    var progress = currentStep === 0 ? 0 : Math.min((currentStep / total) * 100, 100);
    document.getElementById('quizProgressBar').style.width = progress + '%';
    document.getElementById('quizCounter').textContent = currentStep > 0 && currentStep <= 6 ? currentStep + ' / ' + total : '';
  }

  /* ─── Scoring engine ─── */

  // Edad adyacente: ±1 rango
  function ageMatch(productAges, userAge) {
    if (!productAges || productAges.length === 0) return 0;
    if (productAges.indexOf(userAge) !== -1) return 2;  // primary
    var userIdx = AGES.indexOf(userAge);
    if (userIdx === -1) return 0;
    for (var i = 0; i < productAges.length; i++) {
      var pIdx = AGES.indexOf(productAges[i]);
      if (Math.abs(pIdx - userIdx) === 1) return 1;
    }
    return 0;
  }

  function scoreProduct(p, a) {
    var score = 0;
    var max = 0;

    // Skin type (+4)
    max += 4;
    if (p.bestFor && p.bestFor.indexOf(a.skinType) !== -1) score += 4;

    // Concerns (+3 each)
    var concernsMatched = 0;
    if (a.concerns && a.concerns.length > 0 && p.concerns) {
      a.concerns.forEach(function(c) {
        if (p.concerns.indexOf(c) !== -1) concernsMatched++;
      });
      score += concernsMatched * 3;
    }
    max += Math.min((a.concerns || []).length, (p.concerns || []).length) * 3;

    // Age (+2 primary / +1 adjacent)
    max += 2;
    score += ageMatch(p.ages, a.age);

    // Climate (+1)
    max += 1;
    if (p.climate && p.climate.indexOf(a.climate) !== -1) score += 1;

    // Maquillaje + SPF mate (+2)
    if (p.routineRole === 'FPS' && p.makeupCompat) {
      max += 2;
      if (a.makeup === 'si') score += 2;
    }

    // Sin SPF actual + producto es SPF (+3)
    if (p.routineRole === 'FPS') {
      max += 3;
      if (a.sunscreen === 'no') score += 3;
    }

    return { score: score, max: max };
  }

  function pickRoutine(scored) {
    var routine = [];
    var usedIds = {};

    ROLES.forEach(function(role) {
      var best = null;
      for (var i = 0; i < scored.length; i++) {
        var s = scored[i];
        if (s.product.routineRole === role && !usedIds[s.product.id]) {
          if (!best || s.score > best.score) best = s;
        }
      }
      if (best) {
        routine.push(best);
        usedIds[best.product.id] = true;
      }
    });

    // Contorno de Ojos: solo si seleccionó "ojeras"
    if (answers.concerns.indexOf('ojeras') !== -1) {
      var bestContorno = null;
      for (var i = 0; i < scored.length; i++) {
        var s = scored[i];
        if (s.product.routineRole === 'Contorno' && !usedIds[s.product.id]) {
          if (!bestContorno || s.score > bestContorno.score) bestContorno = s;
        }
      }
      if (bestContorno) {
        routine.push(bestContorno);
        usedIds[bestContorno.product.id] = true;
      }
    }

    return routine;
  }

  function showResults() {
    saveCurrentAnswers();
    currentStep = 'results';
    document.querySelectorAll('.quiz-step').forEach(function(s) { s.classList.remove('active'); });
    document.querySelector('[data-step="results"]').classList.add('active');
    document.getElementById('quizProgressBar').style.width = '100%';
    document.getElementById('quizCounter').textContent = '';

    var scored = (PD.catalog || []).map(function(p) {
      var r = scoreProduct(p, answers);
      return { product: p, score: r.score, max: r.max };
    });

    var routine = pickRoutine(scored);

    var grid = document.getElementById('resultsGrid');
    var total = 0;
    grid.innerHTML = '';

    routine.forEach(function(r) {
      var match = r.max > 0 ? Math.min(Math.round((r.score / r.max) * 100), 99) : 0;
      total += r.product.price;
      var imgSrc = r.product.img1 || '';
      var imgHtml = imgSrc
        ? '<img src="' + imgSrc + '" alt="' + r.product.name + '" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">'
        : '';
      grid.innerHTML += '<div class="card result-card">' +
        '<p class="result-card-match">' + match + '% match</p>' +
        '<div class="result-card-img" style="overflow:hidden;">' + imgHtml + '</div>' +
        '<h4>' + r.product.name + '</h4>' +
        '<p class="price">$' + r.product.price + '</p>' +
        '<p>' + r.product.shortDesc + '</p>' +
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
