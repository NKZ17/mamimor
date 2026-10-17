/* MAMIMOR Calendar Renderer */
(function () {
  const el = document.getElementById('calendar');
  if (!el) return;

  const BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const HARI  = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const fullSet = new Set((typeof FULL_DATES !== 'undefined' ? FULL_DATES : []));
  const monthsToShow = (typeof MONTHS_TO_SHOW !== 'undefined' ? MONTHS_TO_SHOW : 2);

  const pad = n => String(n).padStart(2, '0');
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  function buildMonth(year, month) {
    const first = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDow = first.getDay();

    let html = `<div class="cal-month"><div class="cal-head">${BULAN[month]} ${year}</div><div class="cal-grid">`;
    HARI.forEach(h => html += `<div class="cal-dow">${h}</div>`);

    for (let i = 0; i < startDow; i++) html += `<div class="cal-cell cal-empty"></div>`;

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const key = ymd(date);
      let cls = 'cal-cell';
      if (date < today) cls += ' cal-past';
      else if (fullSet.has(key)) cls += ' cal-full';
      else cls += ' cal-free';
      html += `<div class="${cls}"><span>${d}</span></div>`;
    }
    html += `</div></div>`;
    return html;
  }

  let out = '';
  const y = today.getFullYear(), m = today.getMonth();
  for (let i = 0; i < monthsToShow; i++) {
    const dt = new Date(y, m + i, 1);
    out += buildMonth(dt.getFullYear(), dt.getMonth());
  }
  el.innerHTML = out;
})();
