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


let libreria = document.querySelector('.lib');
let libros = document.querySelectorAll('.img-texto');
let botonAtras = document.getElementById('boton-atras');
let botonAdelante = document.getElementById('boton-adelante');
let libroImgs = document.querySelectorAll('.ventana-img-modal');

for (let libro of libros) {
	let dataLibro = libro.getAttribute('data-libro');
	let libroImagen = document.getElementById(dataLibro);

}



botonAtras.addEventListener('click', () => {
	libreria.scrollLeft -= 300;
});

botonAdelante.addEventListener('click', () => {
	libreria.scrollLeft += 300;
});

function actualizarBoton() {
	if (libreria.scrollLeft === 0) {
		botonAtras.style.opacity = "0.5";
		botonAtras.style.cursor = "default";
	} else {
		botonAtras.style.opacity = "1";
		botonAtras.style.cursor = "pointer";		
	}

	if (libreria.scrollLeft >= libreria.scrollWidth - libreria.clientWidth) {
		botonAdelante.style.opacity = "0.5";
		botonAdelante.style.cursor = "default";			
	} else {
		botonAdelante.style.opacity = "1";
		botonAdelante.style.cursor = "pointer";		
	}
}

libreria.addEventListener('scroll', actualizarBoton);

actualizarBoton();




