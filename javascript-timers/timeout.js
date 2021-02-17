var $heading = document.querySelector('h1');

function updateHeading() {
  $heading.textContent = 'Hello There!';
}

setTimeout(updateHeading, 2 * 1000);
