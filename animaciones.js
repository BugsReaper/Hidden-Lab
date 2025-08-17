// ----------------------------
// Funciones para Hidden Labs
// ----------------------------
const iframe = document.getElementById('experiment-frame');
const closeBtn = document.getElementById('close-iframe');
const openFullBtn = document.getElementById('open-full');

if (iframe && closeBtn && openFullBtn) {
  const buttons = document.querySelectorAll('.project-btn');

  // Clic en proyecto
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.src && btn.dataset.src !== "#") {
        iframe.src = btn.dataset.src;       // carga el proyecto en el iframe
        iframe.classList.add('visible');    // activa transición CSS
      }
    });
  });

  // Cerrar iframe
  closeBtn.addEventListener('click', () => {
    iframe.classList.remove('visible');   // transición suave
    setTimeout(() => {
      iframe.src = "";                     // limpia el iframe después de la animación
    }, 600);                               // coincide con la duración CSS
  });

  // Abrir proyecto en nueva pestaña
  openFullBtn.addEventListener('click', () => {
    if (iframe.src) {
      window.open(iframe.src, "_blank");  // abre en nueva pestaña
    }
  });
}

// ----------------------------
// Comprobar login al cargar
// ----------------------------
window.addEventListener('load', () => {
  const onHiddenLabsPage = iframe !== null; // si existe iframe, estamos en Home
  if (onHiddenLabsPage && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";    // redirige si no está logueado
  }
});

// ----------------------------
// Funciones para Login
// ----------------------------
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorMsg = document.getElementById('login-error');

  const USER = "bugreaper";
  const PASS = "nether123";

  loginBtn.addEventListener('click', () => {
    if(username.value === USER && password.value === PASS){
      localStorage.setItem("loggedIn", "true");  // marca como logueado
      window.location.href = "index.html";        // redirige al Hidden Labs
    } else {
      errorMsg.style.display = "block";
    }
  });
}

// ----------------------------
// Glitch animado para el título
// ----------------------------
const glitchTitle = document.getElementById('glitch-title');
if (glitchTitle) {
  setInterval(() => {
    glitchTitle.style.textShadow = 
      `${Math.random()*4-2}px ${Math.random()*4-2}px #ff00ff, 
       ${Math.random()*4-2}px ${Math.random()*4-2}px #00ffff`;
  }, 250);
}
