const botones = document.querySelectorAll('.boton');
let sonidoAbrir = new Audio('audio/button3.mp3');
let sonidoCerrar = new Audio('audio/button4.mp3');

sonidoAbrir.load();
sonidoCerrar.load();

for (let boton of botones) { 
  boton.addEventListener('click', () => {
    sonidoAbrir.play();
    const targetId = boton.getAttribute('data-target');
    const pantallaEmergente = document.getElementById(targetId);
    pantallaEmergente.style.display = 'flex';

    const botonCerrar = pantallaEmergente.querySelector('.boton-cerrar');
    botonCerrar.addEventListener('click', () => {
      sonidoCerrar.play();
      pantallaEmergente.style.display = 'none';
    });
  });
}


