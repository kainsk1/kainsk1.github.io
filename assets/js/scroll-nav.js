/**
 * scroll-nav.js
 * – On the homepage: IntersectionObserver keeps the active nav item in sync
 *   with the visible section, and anchor clicks smooth-scroll instead of jump.
 * – On other pages: anchor links in the header href to "/#section" and work
 *   as normal navigations; this script does nothing on those pages.
 */
(function () {
  'use strict';

  // Only run the observer logic on the single-page homepage
  var isHome =
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html' ||
    window.location.pathname === '';

  var anchorLinks = Array.prototype.slice.call(
    document.querySelectorAll('[data-anchor]')
  );

  if (!anchorLinks.length) return;

  // ── Build id → nav link map ──────────────────────────────────────────────
  var linkMap = {};
  anchorLinks.forEach(function (link) {
    linkMap[link.getAttribute('data-anchor')] = link;
  });

  // ── Highlight helper ─────────────────────────────────────────────────────
  var activeId = null;
  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    anchorLinks.forEach(function (l) { l.classList.remove('active'); });
    if (id && linkMap[id]) linkMap[id].classList.add('active');
  }

  // ── Smooth-scroll intercept (homepage only) ──────────────────────────────
  if (isHome) {
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href') || '';
        var hashIdx = href.indexOf('#');
        if (hashIdx === -1) return;
        var hash = '#' + href.slice(hashIdx + 1);
        var target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // ── IntersectionObserver: which section is in viewport centre ───────────
    var sections = Array.prototype.slice.call(
      document.querySelectorAll('.page-section[id]')
    );

    if (sections.length && 'IntersectionObserver' in window) {
      // Fire when at least 10 % of a section crosses the middle band of the
      // viewport (the band from 20 % top to 70 % bottom).
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var navId = entry.target.getAttribute('data-nav-id') || entry.target.id;
              setActive(navId);
            }
          });
        },
        {
          rootMargin: '-15% 0px -65% 0px',
          threshold: 0
        }
      );

      sections.forEach(function (sec) { observer.observe(sec); });
    }

    // ── Set initial active state ─────────────────────────────────────────────
    // Always start at top; clear any stale hash from URL
    if (window.location.hash && history.replaceState) {
      history.replaceState(null, '', window.location.pathname);
    }
    if (sections.length) setActive(sections[0].id);
  }
})();
