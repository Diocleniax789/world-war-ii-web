imagen0 = document.getElementById('img-0');
ventanaModal = document.querySelector('.ventana-modal');
botonCerrar = document.getElementById('boton-cerrar');
sonidoBotonAbrir = new Audio('audio/button3.mp3');
sonidoBotonCerrar = new Audio('audio/button4.mp3');

sonidoBotonAbrir.load();
sonidoBotonCerrar.load();

imagen0.addEventListener('click', () => {
	sonidoBotonAbrir.play();
	ventanaModal.style.display = 'flex';
});

botonCerrar.addEventListener('click', () => {
	sonidoBotonCerrar.play();
	ventanaModal.style.display = 'none';
});


