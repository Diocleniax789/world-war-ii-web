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
let presionando = false;
let startX;
let scrollLeftStart;

galeria.addEventListener('mousedown', (e) => {
  presionando = true;
  startX = e.pageX - galeria.offsetLeft;
  scrollLeftStart = galeria.scrollLeft;
});

galeria.addEventListener('mousemove', (e) => {
  if (!presionando) return;
  e.preventDefault();
  const x = e.pageX - galeria.offsetLeft;
  const walk = (x - startX) * 2; // Velocidad de desplazamiento
  galeria.scrollLeft = scrollLeftStart - walk;
});

galeria.addEventListener('mouseup', () => {
  presionando = false;
});

galeria.addEventListener('mouseleave', () => {
  presionando = false;
});
