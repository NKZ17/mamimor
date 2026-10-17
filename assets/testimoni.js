/* MAMIMOR Testimoni Renderer */
(function () {
  const el = document.getElementById('testimoni-list');
  if (!el || typeof TESTIMONI === 'undefined') return;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const stars = n => {
    n = Math.max(0, Math.min(5, Math.round(n || 0)));
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  };

  el.innerHTML = TESTIMONI.map(t => `
    <article class="tcard">
      <div class="tcard-stars" aria-label="${t.rating} dari 5 bintang">${stars(t.rating)}</div>
      <p class="tcard-text">&ldquo;${esc(t.teks)}&rdquo;</p>
      <div class="tcard-foot">
        <strong>${esc(t.nama)}</strong>
        <span>${esc([t.kota, t.produk].filter(Boolean).join(' · '))}</span>
      </div>
    </article>
  `).join('');
})();
