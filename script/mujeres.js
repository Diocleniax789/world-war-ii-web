let imagenes = document.querySelectorAll('.img');
let botonesCerrar = document.querySelectorAll('.boton-cerrar');


for(let imagen of imagenes) {
	let dataImagen = imagen.getAttribute('data-modal');
	let imagenModal = document.getElementById(dataImagen);

	imagen.addEventListener('click', () => {
		imagenModal.style.display = "flex";
	});

	for(let botonCerrar of botonesCerrar) {
		botonCerrar.addEventListener('click', () => {
			imagenModal.style.display = "none";
		});
	}
}