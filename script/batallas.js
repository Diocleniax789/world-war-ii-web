const botones = document.querySelectorAll('.boton');

for (let boton of botones) {
  boton.addEventListener('click', () => {
    const targetId = boton.getAttribute('data-target');
    const pantallaEmergente = document.getElementById(targetId);
    pantallaEmergente.style.display = 'flex';

    const botonCerrar = pantallaEmergente.querySelector('.boton-cerrar');
    botonCerrar.addEventListener('click', () => {
      pantallaEmergente.style.display = 'none';
    });
  });
}
