const openModalBtn = document.querySelector('.btn-open');

const backdrop = document.querySelector(".back-drop")

const closeModalBtn = document.querySelector('.btn-close');


openModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);

function showModal() {
	backdrop.classList.add("visible")

}

function closeModal() {
	backdrop.classList.remove('visible');
}