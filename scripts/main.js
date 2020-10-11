const cartButton = document.getElementById('cart-button');
const modalWindow = document.querySelector('.modal');
const closeModalWindow = document.querySelector('.modal-close');

const toggleModalWindow = () => modalWindow.classList.toggle('is-active');

cartButton.addEventListener('click', toggleModalWindow);
closeModalWindow.addEventListener('click', toggleModalWindow);

new WOW().init();