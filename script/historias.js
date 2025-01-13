let imagenes = document.querySelectorAll('.img-texto');
let botonesCerrar = document.querySelectorAll('.boton-cerrar');

for(let imagen of imagenes) {
	let dataImg = imagen.getAttribute('data-img');	
	let modalImg = document.getElementById(dataImg);
	let botonCerrar  = modalImg.getAttribute('class');

	imagen.addEventListener('click', () => {
		modalImg.style.display = 'flex';
	});

	for(let botonCerrar of botonesCerrar) {
		botonCerrar.addEventListener('click',() => {
			modalImg.style.display = 'none';
		});
	}
}