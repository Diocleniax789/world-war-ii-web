let botonesAbrir = document.querySelectorAll('.button-card');
let botonesCerrar = document.querySelectorAll('.boton-cerrar');
let sonidoBotonAbrir = new Audio('audio/button3.mp3');
let sonidoBotonCerrar = new Audio('audio/button4.mp3');
 
sonidoBotonAbrir.load();
sonidoBotonCerrar.load();

for(let botonAbrir of botonesAbrir) {
	let dataCard = botonAbrir.getAttribute('data-card');
	let mostrarVentana = document.getElementById(dataCard);

	botonAbrir.addEventListener('click', () => {
		sonidoBotonAbrir.play();
		mostrarVentana.style.display = "flex";
	});

	for(let botonCerrar of botonesCerrar) {
		botonCerrar.addEventListener('click', () => {
			sonidoBotonCerrar.play();
			mostrarVentana.style.display = "none";	
		});
	}	
}