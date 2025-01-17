imagen0 = document.getElementById('img-0');
ventanaModal = document.querySelector('.ventana-modal');
botonCerrar = document.getElementById('boton-cerrar');

imagen0.addEventListener('click', () => {
	ventanaModal.style.display = 'flex';
});

botonCerrar.addEventListener('click', () => {
	ventanaModal.style.display = 'none';
});


