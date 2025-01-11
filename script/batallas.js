const botones = document.querySelectorAll('.boton');
let sonido = new Audio('audio/button2.mp3');

sonido.load();

for (let boton of botones) { 
  boton.addEventListener('click', () => {
    sonido.play();
    const targetId = boton.getAttribute('data-target');
    const pantallaEmergente = document.getElementById(targetId);
    pantallaEmergente.style.display = 'flex';

    const botonCerrar = pantallaEmergente.querySelector('.boton-cerrar');
    botonCerrar.addEventListener('click', () => {
      sonido.play();
      pantallaEmergente.style.display = 'none';
    });
  });
}


