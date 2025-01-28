let botones = document.querySelectorAll('.boton');
let sonido = new Audio('audio/button2.mp3');

sonido.load();

for(let boton of botones) {	
	boton.addEventListener('mouseover',botonSonido = () => {		
		sonido.play();
	});
}
