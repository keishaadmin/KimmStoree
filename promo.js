const promoHTML = `
<div id="promoPopup" style="position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div class="card" style="max-width:420px;width:90%;text-align:center;">
    <h2>🎉 PROMO GACOER 🎉</h2>
    <p>Diskon <b>30%</b> untuk <b>Order Pertama</b> 😻</p>
    <p style="font-size:.9rem;opacity:.8;">⏳ Berakhir dalam:</p>
    <div id="countdown" style="font-size:1.4rem;font-weight:700;margin:8px 0;">00:00:00</div>
    <a href="https://wa.me/6285183430496" target="_blank" class="cta pulse">🔥 Klaim Sekarang</a>
    <div style="margin-top:10px;">
      <button onclick="document.getElementById('promoPopup').remove()" style="background:transparent;border:none;color:#1f3c88;font-weight:700;cursor:pointer;">Nanti dulu</button>
    </div>
  </div>
</div>`;

document.body.insertAdjacentHTML("beforeend", promoHTML);

// countdown 24 jam
const endTime = new Date(Date.now() + 24*60*60*1000);
const cd = document.getElementById('countdown');

setInterval(() => {
  const diff = endTime - new Date();
  if (diff <= 0) return cd.textContent = "00:00:00";

  const h = String(Math.floor(diff/3.6e6)).padStart(2,'0');
  const m = String(Math.floor(diff%3.6e6/6e4)).padStart(2,'0');
  const s = String(Math.floor(diff%6e4/1e3)).padStart(2,'0');
  cd.textContent = `${h}:${m}:${s}`;
}, 1000);