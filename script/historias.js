let imagenes = document.querySelectorAll('.img-texto');

for(let imagen of imagenes) {
	let dataImg = imagen.getAttribute('data-img');	
	let modalImg = document.getElementById(dataImg);

	imagen.addEventListener('click', () => {
		modalImg.style.display = 'flex';
	});
}