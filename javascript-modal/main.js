var $modalButton = document.querySelector('.modal-button');
var $overlayContainer = document.querySelector('.overlay-container');
var $noButton = document.querySelector('.no-button');

function openModal(event) {
  $overlayContainer.className = 'overlay-container active-container';
}

function closeModal(event) {
  $overlayContainer.className = 'overlay-container';
}

$modalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
