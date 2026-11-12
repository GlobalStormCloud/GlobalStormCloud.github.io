/* Analytics consent for the marketing site. First-party, no dependencies.
 *
 * Google Analytics 4 is requested and its cookies are set only after the visitor presses Accept.
 * Consent Mode v2 defaults are all "denied" before anything else; Accept updates analytics_storage only,
 * the ads signals stay denied. Decline, "no choice yet", Global Privacy Control and blocked storage all mean
 * no Google request at all.
 *
 * The choice is kept in localStorage under "gs-consent" as {v: policy version, c: granted|denied, t: ISO time}.
 * A stored record with another version is ignored, so bumping data-version on the banner re-asks everyone.
 * No cookie is used to remember the choice.
 */
(function () {
  'use strict';
  var KEY = 'gs-consent';
  var banner = document.getElementById('consent');
  if (!banner) return;
  var ID = banner.getAttribute('data-ga-id');
  var VERSION = banner.getAttribute('data-version');
  var stateEl = banner.querySelector('[data-consent-state]');
  var w = window;
  var loaded = false;
  var opener = null; // the footer control that reopened the banner, so focus can go back to it

  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });

  function read() {
    try {
      var r = JSON.parse(w.localStorage.getItem(KEY));
      if (r && r.v === VERSION && (r.c === 'granted' || r.c === 'denied')) return r.c;
    } catch (e) { /* blocked or corrupt: no stored choice */ }
    return null;
  }
  function write(c) {
    try { w.localStorage.setItem(KEY, JSON.stringify({ v: VERSION, c: c, t: new Date().toISOString() })); return true; } catch (e) { return false; }
  }
  function canStore() {
    try { w.localStorage.setItem(KEY + '-t', '1'); w.localStorage.removeItem(KEY + '-t'); return true; } catch (e) { return false; }
  }

  // Remove _ga and _ga_<id> (also left over from earlier versions of the site) on this host and its parent domains.
  function clearCookies() {
    var parts = location.hostname.split('.'), domains = [''], i;
    for (i = 0; i < parts.length - 1; i++) domains.push('; Domain=' + parts.slice(i).join('.'));
    document.cookie.split(';').forEach(function (p) {
      var name = p.split('=')[0].trim();
      if (!/^_ga(_|$)/.test(name)) return;
      domains.forEach(function (d) { document.cookie = name + '=; Max-Age=0; Path=/' + d; });
    });
  }

  function grant() {
    delete w['ga-disable-' + ID];
    gtag('consent', 'update', { analytics_storage: 'granted' });
    if (!loaded) {
      loaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
      document.head.appendChild(s);
      gtag('js', new Date());
    }
    gtag('config', ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  }
  function revoke() {
    w['ga-disable-' + ID] = true; // Google's documented switch: stops a tag that is already on the page
    gtag('consent', 'update', { analytics_storage: 'denied' });
    clearCookies();
  }

  var stored = read();
  var canSave = canStore();
  var gpc = navigator.globalPrivacyControl === true;
  var current = !canSave ? 'denied' : stored || (gpc ? 'denied' : null);

  if (current === 'granted') grant(); else clearCookies();

  function show(focus) {
    if (current && stateEl) {
      stateEl.textContent = banner.getAttribute(current === 'granted' ? 'data-state-on' : 'data-state-off');
      stateEl.hidden = false;
    } else if (stateEl) {
      stateEl.hidden = true;
    }
    banner.hidden = false;
    if (focus) banner.querySelector('button').focus();
  }

  banner.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-consent]');
    if (!b) return;
    var c = b.getAttribute('data-consent');
    if (!write(c)) c = 'denied'; // cannot remember it: treat as declined
    current = c;
    if (c === 'granted') grant(); else revoke();
    banner.hidden = true;
    if (opener) { opener.focus(); opener = null; }
  });

  if (canSave) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-consent-open]'), function (el) {
      el.parentNode.hidden = false; // the footer <li> ships hidden: without JS (or storage) the control would do nothing
      el.addEventListener('click', function () { opener = el; show(true); });
    });
    if (current === null) show(false);
  }
})();
