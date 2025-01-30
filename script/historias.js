let imagenes = document.querySelectorAll('.img-texto');
let botonesCerrar = document.querySelectorAll('.boton-cerrar');
let sonidoBotonAbrir = new Audio('audio/button3.mp3');
let sonidoBotonCerrar = new Audio('audio/button4.mp3');

sonidoBotonAbrir.load();
sonidoBotonCerrar.load();

for(let imagen of imagenes) {
	let dataImg = imagen.getAttribute('data-img');	
	let modalImg = document.getElementById(dataImg);
	let botonCerrar  = modalImg.getAttribute('class');

	imagen.addEventListener('mouseover', () => {
		imagen.style.opacity = '0.5';
		imagen.style.transition = '0.3s';
	});

	imagen.addEventListener('mouseout', () => {
		imagen.style.opacity = '1';
	});

	imagen.addEventListener('click', () => {
		sonidoBotonAbrir.play();
		modalImg.style.display = 'flex';
	});

	for(let botonCerrar of botonesCerrar) {
		botonCerrar.addEventListener('click',() => {
			sonidoBotonCerrar.play();
			modalImg.style.display = 'none';
		});
	}
}

let galeria = document.querySelector('.galeria');
const botonAtras = document.getElementById('boton-atras');
const botonAdelante = document.getElementById('boton-adelante');

botonAtras.addEventListener('click', () => {
	galeria.scrollLeft -= 300;
});

botonAdelante.addEventListener('click', () => {
	galeria.scrollLeft += 300;
});

let menu = document.getElementById('navegador');
let menuWrap = document.getElementById('wrap-menu');
let activo = false;

menuWrap.addEventListener('click', () => {
	if(activo === false){
		menu.style.display = "flex";
		activo = true;
	} else {
		menu.style.display = "none";
		activo = false;
	}
});