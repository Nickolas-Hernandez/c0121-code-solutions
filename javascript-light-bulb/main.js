var $background = document.querySelector('.container');
var $lightBulb = document.querySelector('.light-bulb');

$lightBulb.addEventListener('click', function (event) {
  if ($lightBulb.className === 'light-bulb dark-mode') {
    $lightBulb.className = 'light-bulb light-mode';
    $background.className = 'container day-mode';
  } else {
    $lightBulb.className = 'light-bulb dark-mode';
    $background.className = 'container night-mode';
  }
});
