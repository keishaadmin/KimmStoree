const names = ["Alya", "Rizky", "Nabila", "Dimas", "Aurel", "Fajar", "Salsa", "Rama", "Keysa", "Bagas"];
const services = ["Joki Tugas", "Editing Video", "Desain Canva"];

function showFakeOrder(){
  const name = names[Math.floor(Math.random()*names.length)];
  const service = services[Math.floor(Math.random()*services.length)];

  const notif = document.createElement("div");
  notif.style = `
    position:fixed;
    left:16px;
    bottom:80px;
    background:linear-gradient(135deg,#9fd3ff,#cfe9ff);
    color:#1f3c88;
    padding:12px 16px;
    border-radius:14px;
    font-weight:600;
    box-shadow:0 0 20px rgba(120,180,255,1);
    z-index:9999;
    animation:fadeInOut 5s ease;
  `;
  notif.innerHTML = `💸 <b>${name}</b> baru order <b>${service}</b>`;

  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 4800);
}

setInterval(showFakeOrder, 7000);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeInOut{
  0%{opacity:0;transform:translateY(10px)}
  10%{opacity:1;transform:translateY(0)}
  90%{opacity:1}
  100%{opacity:0;transform:translateY(10px)}
}`;
document.head.appendChild(style);