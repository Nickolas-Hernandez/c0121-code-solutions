var $taskList = document.querySelector('.task-list');

function handleTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var listItem = event.target.closest('.task-list-item');
    console.log('ancestorElement:', listItem);
    listItem.remove();
  }
}

$taskList.addEventListener('click', handleTaskList);
