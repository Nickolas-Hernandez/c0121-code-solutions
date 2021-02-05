var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handelViewSwitch(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    var targetDataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $views.length; j++) {
      if (targetDataView === $views[i].getAttribute('data-view')) {
        $views[i].className = 'view';
      } else {
        $views[i].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', handelViewSwitch);
