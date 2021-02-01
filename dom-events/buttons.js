function handleClick(event) {
  console.log('button clicked!');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered!');
  console.log('event:', event);
  console.log('event.target', event.target);
}
var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked!');
  console.log('event:', event);
  console.log('event.target', event.target);
}
var $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', handleDoubleClick);
