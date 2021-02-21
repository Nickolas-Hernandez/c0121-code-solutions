var $carousel = document.querySelector('.carousel');
var $images = document.querySelectorAll('.pokemon');
var $circlesIcons = document.querySelectorAll('.tab-container > i');
var counter = 0;
var interval;

function handleCarousel(){
  $images[counter].classList.remove('active');
  $circlesIcons[counter].className = 'far fa-circle';
  if(counter === $circlesIcons.length-1){
    $images[0].classList.add('active');
    $circlesIcons[0].className = 'fas fa-circle';
    counter = 0;
  }else{
    $images[counter + 1].classList.add('active');
    $circlesIcons[counter + 1].className = 'fas fa-circle';
    counter++;
  }
}

function moveManually(event){
  if(event.target.tagName === "I"){
    clearInterval(interval);
    if(event.target.className === 'fas fa-angle-left'){
      $images[counter].classList.remove('active');
      $circlesIcons[counter].className = 'far fa-circle';
      if(counter === 0){
        counter = $circlesIcons.length - 1;
      }else counter--;
      $images[counter].classList.add('active');
      $circlesIcons[counter].className = 'fas fa-circle';
    }else if(event.target.className === 'fas fa-angle-right'){
      $images[counter].classList.remove('active');
      $circlesIcons[counter].className = 'far fa-circle';
      if(counter === $circlesIcons.length - 1){
        counter = 0;
      }else counter++;
      $images[counter].classList.add('active');
      $circlesIcons[counter].className = 'fas fa-circle';
    }else if (event.target.classList.contains('fa-circle')){
      $images[counter].classList.remove('active');
      $circlesIcons[counter].className = 'far fa-circle';
      for(var i = 0; i < $circlesIcons.length; i++){
        if($circlesIcons[i].id === event.target.id) counter = i;
      }
      $images[counter].classList.add('active');
      $circlesIcons[counter].className = 'fas fa-circle';
    }
    interval = setInterval(handleCarousel, 1000 * 3);
  }
}

interval = setInterval(handleCarousel, 1000 * 3);
$carousel.addEventListener('click', moveManually);
