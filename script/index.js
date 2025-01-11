let botones = document.querySelectorAll('.boton');
let sonido = new Audio('audio/button2.mp3');

for(let boton of botones) {	
	boton.addEventListener('mouseover',botonSonido = () => {		
		sonido.load();
		sonido.play();
	});
}