var $heading = document.querySelector('h1');

function updateHeading() {
  if ($heading.textContent === '4') {
    $heading.textContent = '3';
  } else if ($heading.textContent === '3') {
    $heading.textContent = '2';
  } else if ($heading.textContent === '2') {
    $heading.textContent = '1';
  } else if ($heading.textContent === '1') {
    $heading.textContent = '~Earth Beeelooowwww Us~';
    clearInterval(countDownInterval);
  }
}

var countDownInterval = setInterval(updateHeading, 1000);
