imagen0 = document.getElementById('img-0');
console.log(imagen0);
ventanaModal = document.querySelector('.ventana-modal');

imagen0.addEventListener('click', () => {
	ventanaModal.style.display = 'flex';
});