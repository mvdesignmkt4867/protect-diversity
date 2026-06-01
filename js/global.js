/* ═══════════════════════════════════════════════════════════
   PROTECT DIVERSITY — Global JavaScript
   Nav, Cart Drawer, Scroll Animations, Mobile Menu
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── Header scroll border ── */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile menu ── */
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* ── Cart Drawer ── */
  const cartBtn = document.querySelector('[data-cart-toggle]');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-drawer-close');

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    if (cartDrawer) cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    if (cartDrawer) cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeCart();
  });

  /* ── Cart state (localStorage) ── */
  window.PD = window.PD || {};

  PD.cart = JSON.parse(localStorage.getItem('pd_cart') || '[]');

  PD.updateCartCount = function() {
    var badges = document.querySelectorAll('.cart-count');
    var total = PD.cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    badges.forEach(function(b) {
      b.textContent = total;
      b.style.display = total > 0 ? 'flex' : 'none';
    });
  };

  PD.addToCart = function(product) {
    var existing = PD.cart.find(function(item) { return item.id === product.id; });
    if (existing) {
      existing.qty += 1;
    } else {
      PD.cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    localStorage.setItem('pd_cart', JSON.stringify(PD.cart));
    PD.updateCartCount();
    PD.renderCartDrawer();
    openCart();
  };

  PD.removeFromCart = function(id) {
    PD.cart = PD.cart.filter(function(item) { return item.id !== id; });
    localStorage.setItem('pd_cart', JSON.stringify(PD.cart));
    PD.updateCartCount();
    PD.renderCartDrawer();
  };

  PD.updateQty = function(id, delta) {
    var item = PD.cart.find(function(i) { return i.id === id; });
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    localStorage.setItem('pd_cart', JSON.stringify(PD.cart));
    PD.updateCartCount();
    PD.renderCartDrawer();
  };

  PD.renderCartDrawer = function() {
    var itemsContainer = document.querySelector('.cart-drawer-items');
    var footerEl = document.querySelector('.cart-drawer-footer');
    if (!itemsContainer) return;

    if (PD.cart.length === 0) {
      itemsContainer.innerHTML = '<div class="cart-drawer-empty"><p>Tu bolsa está vacía</p><a href="index.html" class="btn-secondary">Explorar productos</a></div>';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (footerEl) footerEl.style.display = 'block';

    var html = '';
    PD.cart.forEach(function(item) {
      html += '<div class="cart-drawer-item">' +
        '<div class="cart-drawer-item-img"></div>' +
        '<div class="cart-drawer-item-info">' +
          '<div class="cart-drawer-item-name">' + item.name + '</div>' +
          '<div class="cart-drawer-item-price">$' + item.price + '</div>' +
          '<div class="cart-drawer-item-qty">' +
            '<button onclick="PD.updateQty(\'' + item.id + '\', -1)">−</button>' +
            '<span>' + item.qty + '</span>' +
            '<button onclick="PD.updateQty(\'' + item.id + '\', 1)">+</button>' +
          '</div>' +
          '<button class="cart-drawer-item-remove" onclick="PD.removeFromCart(\'' + item.id + '\')">Eliminar</button>' +
        '</div>' +
      '</div>';
    });
    itemsContainer.innerHTML = html;

    var subtotal = PD.cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
    var subtotalEl = document.querySelector('.cart-drawer-subtotal .amount');
    if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toLocaleString();

    var shippingEl = document.querySelector('.cart-drawer-shipping');
    if (shippingEl) {
      shippingEl.textContent = subtotal >= 1200 ? 'Envío gratis' : 'Envío gratis en compras desde $1,200';
    }
  };

  PD.updateCartCount();
  PD.renderCartDrawer();

  /* ── Add-to-cart buttons ── */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    var id = btn.dataset.productId || 'PS-ANTIBRILLO';
    var name = btn.dataset.productName || 'Protector Solar Anti-Brillo';
    var price = parseInt(btn.dataset.productPrice || '384', 10);
    PD.addToCart({ id: id, name: name, price: price });
  });

  /* ── Scroll reveal animations ── */
  if ('IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
      var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      revealElements.forEach(function(el) {
        revealObserver.observe(el);
      });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('visible');
    });
  }

})();
