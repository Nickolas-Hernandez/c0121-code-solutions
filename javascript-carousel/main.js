var $carousel = document.querySelector('.carousel');
var $images = document.querySelectorAll('.pokemon');
var counter = 0;

//find current index
function findCurrentIndex(nodeList){
  var currentIndex = 0;
  for(var i = 0; i < nodeList.length; i++){
    if(nodeList[i].classList.contains('active')){
      currentIndex = i;
    }
  }
  return currentIndex;
}

//moveRight
function moveRight(event){
  var currentIndex = findCurrentIndex($images);
  $images[currentIndex].classList.add('slide-out-left');
  $images[currentIndex + 1].classList.add('slide-in-right');
  $images[currentIndex + 1].classList.add('active');
}

//moveLeft

//moveRight

// setInterval(moveRight, 1000 * 2);
