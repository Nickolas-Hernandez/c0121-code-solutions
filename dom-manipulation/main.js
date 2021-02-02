var clickCounter = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clickCounter++;
  $clickCount.textContent = clickCounter;
  if (clickCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
