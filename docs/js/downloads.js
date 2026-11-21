/* Sorana download resolver.
 *
 * The stable GitHub URLs (releases/latest/download/<name>) keep the Windows
 * and Linux portable buttons working without JavaScript. The macOS zip and the
 * Debian and RPM package names carry the version, so those links cannot be
 * written once and left alone. This module reads the latest published release,
 * maps each platform to the asset that release actually contains, and rewrites
 * every marked download link. It fills the Linux checksums and the release
 * version from the same response.
 *
 * Every link keeps a working static fallback: the latest release page for the
 * versioned packages, and the stable asset URL for the others. A rate limit,
 * a blocked request or an offline visitor costs precision, never a download.
 */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.SoranaDownloads = api;
  }
  if (typeof document !== 'undefined') {
    api.init();
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  var REPO = 'Tetramatrix/Sorana';
  var API_URL = 'https://api.github.com/repos/' + REPO + '/releases/latest';
  var CACHE_KEY = 'sorana:latest-release:v1';
  var CACHE_TTL_MS = 15 * 60 * 1000;
  var CHECKSUM_ROLES = ['linux-portable', 'linux-deb', 'linux-rpm'];

  var ROLE_TESTS = {
    windows: function (name) { return /\.exe$/i.test(name); },
    macos: function (name) { return /\.zip$/i.test(name); },
    'linux-portable': function (name) {
      return /^sorana$/i.test(name) || /\.appimage$/i.test(name);
    },
    'linux-deb': function (name) { return /\.deb$/i.test(name); },
    'linux-rpm': function (name) { return /\.rpm$/i.test(name); }
  };

  var ROLE_PREFERENCES = {
    windows: [/^sorana\.exe$/i],
    macos: [/^sorana.*\.zip$/i, /macos|darwin|osx/i],
    'linux-portable': [/^sorana$/i, /(?:linux|x86_64|amd64)/i],
    'linux-deb': [/amd64|x86_64/i],
    'linux-rpm': [/x86_64|amd64/i]
  };

  function pickAsset(assets, role) {
    var test = ROLE_TESTS[role];
    if (!test || !assets || typeof assets.length !== 'number') return null;
    var matches = [];
    var i;
    for (i = 0; i < assets.length; i++) {
      if (assets[i] && typeof assets[i].name === 'string' && test(assets[i].name)) {
        matches.push(assets[i]);
      }
    }
    if (!matches.length) return null;
    var preferences = ROLE_PREFERENCES[role] || [];
    for (i = 0; i < preferences.length; i++) {
      for (var j = 0; j < matches.length; j++) {
        if (preferences[i].test(matches[j].name)) return matches[j];
      }
    }
    return matches[0];
  }

  function roleForHref(href) {
    if (!href) return null;
    var clean = String(href).split('#')[0].split('?')[0];
    var name = clean.substring(clean.lastIndexOf('/') + 1).toLowerCase();
    if (name === 'sorana.exe') return 'windows';
    if (/^sorana.*\.zip$/i.test(name)) return 'macos';
    if (name === 'sorana') return 'linux-portable';
    return null;
  }

  function trimRelease(release) {
    var assets = [];
    var source = release && release.assets ? release.assets : [];
    for (var i = 0; i < source.length; i++) {
      var asset = source[i] || {};
      assets.push({
        name: asset.name || '',
        browser_download_url: asset.browser_download_url || '',
        digest: asset.digest || '',
        size: asset.size || 0
      });
    }
    return {
      tag_name: release && release.tag_name ? release.tag_name : '',
      html_url: release && release.html_url ? release.html_url : '',
      assets: assets
    };
  }

  function readCache() {
    try {
      if (!root || !root.sessionStorage) return null;
      var raw = root.sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (!cached || !cached.savedAt || !cached.release) return null;
      if (Date.now() - cached.savedAt > CACHE_TTL_MS) return null;
      return cached.release;
    } catch (error) {
      return null;
    }
  }

  function writeCache(release) {
    try {
      if (!root || !root.sessionStorage) return;
      root.sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        release: trimRelease(release)
      }));
    } catch (error) {
      /* A full or blocked storage must not stop the links from updating. */
    }
  }

  function fetchLatest() {
    var cached = readCache();
    if (cached) return Promise.resolve(cached);
    if (typeof fetch !== 'function') return Promise.resolve(null);
    return fetch(API_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      cache: 'no-cache'
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    }).then(function (release) {
      var trimmed = trimRelease(release);
      writeCache(trimmed);
      return trimmed;
    }).catch(function () {
      return null;
    });
  }

  function setVersion(release) {
    if (!release || !release.tag_name) return;
    var nodes = document.querySelectorAll('[data-release-version]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = release.tag_name;
    }
  }

  function updateLinks(release) {
    if (!release || !release.assets || !release.assets.length) return;
    var links = document.querySelectorAll(
      'a[data-download], a[href*="/releases/latest/download/"]'
    );
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var role = link.getAttribute('data-download') || roleForHref(link.getAttribute('href'));
      if (!role) continue;
      var asset = pickAsset(release.assets, role);
      if (!asset || !asset.browser_download_url) continue;
      link.setAttribute('href', asset.browser_download_url);
      if (!link.getAttribute('title')) link.setAttribute('title', asset.name);
    }
  }

  function updateChecksums(release) {
    var details = document.getElementById('linuxChecksums');
    if (!details) return;
    var list = details.querySelector('[data-release-checksums]');
    if (!list) return;
    var rows = [];
    for (var i = 0; i < CHECKSUM_ROLES.length; i++) {
      var asset = pickAsset(release.assets, CHECKSUM_ROLES[i]);
      if (!asset || !asset.digest || asset.digest.indexOf('sha256:') !== 0) continue;
      rows.push({ name: asset.name, digest: asset.digest.slice(7) });
    }
    while (list.firstChild) list.removeChild(list.firstChild);
    if (!rows.length) {
      details.style.display = 'none';
      return;
    }
    for (var j = 0; j < rows.length; j++) {
      var item = document.createElement('li');
      var name = document.createElement('strong');
      name.textContent = rows[j].name;
      var digest = document.createElement('code');
      digest.textContent = rows[j].digest;
      item.appendChild(name);
      item.appendChild(document.createTextNode(' '));
      item.appendChild(digest);
      list.appendChild(item);
    }
    details.style.display = 'block';
  }

  function applyRelease(release) {
    if (!release) return;
    updateLinks(release);
    setVersion(release);
    updateChecksums(release);
  }

  function init() {
    if (typeof document === 'undefined') return;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        fetchLatest().then(applyRelease);
      });
      return;
    }
    fetchLatest().then(applyRelease);
  }

  return {
    pickAsset: pickAsset,
    roleForHref: roleForHref,
    trimRelease: trimRelease,
    init: init
  };
});
