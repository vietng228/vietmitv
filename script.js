(() => {
  const root = document.documentElement;
 
  /* Reduce Transparency toggle (persists per viewer; system setting still applies) */
  const KEY = 'vmt-reduce-transparency';
  const toggle = document.getElementById('transparency-toggle');
  const apply = (on) => {
    root.classList.toggle('reduce-transparency', on);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(on));
      toggle.textContent = on ? 'Bật hiệu ứng kính' : 'Giảm độ trong suốt';
    }
  };
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === '1');
  toggle?.addEventListener('click', () => {
    const on = !root.classList.contains('reduce-transparency');
    apply(on);
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
  });
 
  /* Adaptive tint: the nav reads the tone of the content directly beneath it */
  const nav = document.querySelector('.nav');
  const zones = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
  let ticking = false;
  const update = () => {
    ticking = false;
    if (!nav) return;
    const r = nav.getBoundingClientRect();
    const y = r.top + r.height / 2;
    let tone = 'dark';
    for (const z of zones) {
      const b = z.getBoundingClientRect();
      if (b.top <= y && b.bottom >= y) tone = z.dataset.tone; // later (inner) zones win
    }
    nav.dataset.tone = tone;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
 
  /* Donate dialog */
  const dlg = document.getElementById('donate-dialog');
  const open = document.getElementById('donate-open');
  if (dlg && open) {
    open.addEventListener('click', () => dlg.showModal());
    dlg.querySelector('.dialog-close')?.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => open.focus());
  }
})();
 
