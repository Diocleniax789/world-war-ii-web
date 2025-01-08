const botones = document.querySelectorAll(".boton");


for(let boton of botones) {
	boton.addEventListener('click', abrirPantalla = () => {
		const targetId = boton.getAttribute("data-target");
		const pantallaEmergente = document.getElementById(targetId);
		const botonCerrar = document.querySelector('.boton-cerrar');
		
		pantallaEmergente.style.display = 'flex';
		
		botonCerrar.addEventListener('click', cerrarPantalla = () => {
      		pantallaEmergente.style.display = 'none';
  		});
	}); 
}

