(() => {
    // Build-time constants injected during bundling
    const ALLOWED_HOSTS = (typeof __ALLOWED_HOSTS__ !== 'undefined')
        ? __ALLOWED_HOSTS__
        : ['cat-nitro.github.io', 'crownprincehospital.com', 'catman6112.github.io', 'nicolasai.com', 'localhost:5500', "127.0.0.1:5500"];
  
    const REDIRECT_URL = (typeof __REDIRECT_URL__ !== 'undefined')
        ? __REDIRECT_URL__
        : 'https://cyberhoot.com/cybrary/script-kiddie/';
  
    // Compute strings at runtime to frustrate grep
    const ok = ALLOWED_HOSTS.map(h =>
        h.split('').map(c => c.charCodeAt(0)).map(n => n.toString(36)).join('-')
    ).map(encoded =>
        encoded.split('-').map(n => String.fromCharCode(parseInt(n, 36))).join('')
    );
  
    if (!ok.includes(location.hostname)) {
      location.replace(REDIRECT_URL);
    }
  })();
  
  /* ========= 1. DOMContentLoaded – search filter ========= */
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('gameSearch');
    if (!searchInput) return;
  
    const gameLinks = Array.from(document.querySelectorAll('.game-list a'));
    const emuLinks  = Array.from(document.querySelectorAll('.emu-list  a'));
    const emuHeading = document.getElementById('emuHeading');
  
    const filterLinks = () => {
      const term = searchInput.value.trim().toLowerCase();
      let anyGameShown = false;
      let anyEmuShown  = false;
  
      const toggle = (link) => {
        const match = !term || link.textContent.toLowerCase().includes(term);
        link.style.display = match ? 'inline-block' : 'none';
        return match;
      };
  
      gameLinks.forEach(l => { if (toggle(l)) anyGameShown = true; });
      emuLinks.forEach(l  => { if (toggle(l)) anyEmuShown  = true; });
  
      if (emuHeading) emuHeading.style.display = anyEmuShown ? 'block' : 'none';
    };
  
    searchInput.addEventListener('input', filterLinks);
    filterLinks();
  });
  
  /* ========= 2. MOTD marquee & service‑worker ========= */
  window.addEventListener('load', () => {
    const motdText = document.querySelector('.motd-text');
    const container = document.querySelector('.motd-container');
    if (motdText && container) {
      const speed = 20; // px per second
      const duration = (motdText.offsetWidth + container.offsetWidth) / speed;
      motdText.style.animationDuration = `${duration}s`;
    }
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(r => console.info('SW ok', r.scope))
        .catch(err => console.warn('SW failed', err));
    }
  });
  
  /* ========= 3. Optional integrity self‑check ========= 
  (() => {
    // BUILD_HASH will be replaced by the bundler
    const EXPECTED = (typeof __BUILD_HASH__ !== 'undefined') ? __BUILD_HASH__ : null;
    if (!EXPECTED) return; // skip in dev
  
    // quick SHA‑256 via SubtleCrypto
    const hashText = async (txt) => {
      const buf = new TextEncoder().encode(txt);
      const hash = await crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,'0')).join('');
    };
  
    (async () => {
      const scriptTag = document.currentScript;
      if (!scriptTag || !EXPECTED) return;
      const actual = await hashText(scriptTag.textContent);
      if (actual !== EXPECTED) {
        console.warn('Bundle tampered with!');
        location.replace('about:blank'); // cheap fail‑closed
      }
    })();
  })(); */
  