(function () {
  'use strict';

  /* ─── Reduced Motion Check ─── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── DOM Ready ─── */
  document.addEventListener('DOMContentLoaded', function () {

    /* ── Scroll Reveal (Intersection Observer) ── */
    (function initReveal() {
      const els = document.querySelectorAll('.reveal');
      if (!els.length) return;

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      els.forEach(function (el) { observer.observe(el); });
    })();

    /* ── Text Reveal ── */
    if (!prefersReducedMotion) {
      (function initTextReveal() {
        const els = document.querySelectorAll('.reveal-text');
        if (!els.length) return;

        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
              setTimeout(function () {
                entry.target.classList.add('revealed');
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });

        els.forEach(function (el) { observer.observe(el); });
      })();
    }

    /* ── Nav Scroll Behavior ── */
    (function initNav() {
      const nav = document.querySelector('.nav');
      if (!nav) return;

      let ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            nav.classList.toggle('nav--scrolled', window.scrollY > 60);
            ticking = false;
          });
          ticking = true;
        }
      });
    })();

    /* ── Mobile Nav Toggle ── */
    (function initMobileNav() {
      const toggle = document.querySelector('.nav__toggle');
      const navLinks = document.querySelector('.nav__links');
      if (!toggle || !navLinks) return;

      toggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('nav__links--open');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      // Close on link click
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('nav__links--open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    })();

     /* ── Product Modal ── */
       function fixHtmlPaths(html) {
         return html;
       }

     (function initProductModal() {
       const modal = document.getElementById('product-modal');
       const overlay = document.getElementById('product-modal');

        window.openProduct = function (card) {
          const title = card.dataset.title || '';
          const subtitle = card.dataset.subtitle || '';
          const mainImage = card.dataset.mainImage || card.dataset.thumbnail || '';
           const idx = card.dataset.index;
           const scriptEl = document.querySelector(`.product-content[data-index="${idx}"]`);
           const description = scriptEl ? scriptEl.textContent : '';

           const modalTitle = document.getElementById('modal-title');
           const modalSubtitle = document.getElementById('modal-subtitle');
           const modalImage = document.getElementById('modal-image');
           const modalDescription = document.getElementById('modal-description');

           modalTitle.textContent = title;
           modalSubtitle.textContent = subtitle;

            if (mainImage) {
              modalImage.src = mainImage;
             modalImage.alt = title;
             modalImage.style.display = 'block';
           } else {
             modalImage.src = '';
             modalImage.style.display = 'none';
           }

            var html = description;
            if (html) {
              html = fixHtmlPaths(html);
            }
            modalDescription.innerHTML = html;

          modal.classList.add('modal-overlay--open');
          modal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        };

       window.closeProduct = function () {
         modal.classList.remove('modal-overlay--open');
         modal.setAttribute('aria-hidden', 'true');
         document.body.style.overflow = '';
       };

       // Close on overlay click (but not on modal content click)
       modal.addEventListener('click', function (e) {
         if (e.target === modal) {
           window.closeProduct();
         }
       });

       // Close on Escape key
       document.addEventListener('keydown', function (e) {
         if (e.key === 'Escape' && modal.classList.contains('modal-overlay--open')) {
           window.closeProduct();
         }
       });
     })();

     /* ── Smooth Scroll for Anchor Links ── */
    (function initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          const href = anchor.getAttribute('href');
          if (href === '#') return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
        });
      });
    })();



  });
})();
