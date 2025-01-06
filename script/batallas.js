const botones = document.querySelectorAll('.boton');

for(let boton of botones) {
	let acum = 0;
	boton.addEventListener("click", sumarNumero = () => {
		if(acum >= 0 && acum <= 10){
			boton.textContent  = acum;
			acum += 1;
		} else {
			boton.textContent = 'FINALIZADO!';
		}
	
		if (acum > 10) {
			setTimeout(() => {
				acum = 0;
				boton.textContent = 'Click Aqui!';
				boton.style.color = 'gold';
			},2000);
		}
	});

}