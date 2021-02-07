/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// calling the queryselector method of the doc object and
// assigning its return value in a variable $todoForm

$todoForm.addEventListener('submit', function (event) {
  // calling the addEventListener method of the $todoFOrm object with 2 arguments.
  // The first argument is a string indicating that method shhould listen for the submit event
  // 2nd argument is an anonymous function definition
  event.preventDefault(); // Prevent default method of event object to prevent default submit actions
  var todo = {
    todoId: uuid.v4(),
    task: $todoForm.elements.task.value,
    isCompleted: false
  };
  /*
  an objected literal with 3 propert/value pairs being assigned to a variable todo.
  the object holds a todoId property with value of the return of the
  v4 method of the $todoForm object being called w/ no args, a task property
  with value of the val prop, of the task prop, of the elmnt prop, of the $todoForm obj,
  and a isCompleted prop with value of the boolean False
   */
  todos.push(todo); // push method of todos obj being called w/ arg var todo. (adds todo obj to todos obj)
  $todoList.append(renderTodo(todo)); // append method of todolist obj being called with arg of the return
  // of the renderTodo func being called with argument var todo
  $todoForm.reset(); // reset method of $todoForm obj. (resets form)
});

var $todoList = document.querySelector('#todo-list'); // queries the dom for
// THE element with ID todo-list and stores that value in a variable named $todoList

$todoList.addEventListener('change', function (event) {
  // adding the event listener method to the todoList obj to execute an anonymous an the 'change' event
  var todoId = event.target.getAttribute('id');
  // Once event is fired the return of the get Attr. method of the target prop, of the event obj,
  // being called with one arg 'id', will be assigned into a variable todoId
  for (var i = 0; i < todos.length; i++) {
    // loop though todos: for loop with initialization of the num 0 being assigned to
    // the variable i, with condition of i less than the lenngth prop of todos obj.
    // and final expression of i being incremented by 1.
    if (todos[i].todoId === todoId) {
      todos[i].isCompleted = event.target.checked;
      break;
    }
    // Next is an if statement with a condition of the todoId property of the todos object at i,
    // being strictly compared to the value of variable todoId.
    // if true, the checked property of the target prop of the event object will be assigned
    // to the isCompleted property of the todo object at i, followed by a break;
  }
});

for (var i = 0; i < todos.length; i++) {
  var $todo = renderTodo(todos[i]);
  $todoList.appendChild($todo);
}
// for loop with initialization of 0 being assigned to the variable i, and a conditional of
// i less than the length property of the todos object, and a final express of i being incremented by 1

function renderTodo(todo) { // function defintiton named renderTodo with parameter of todo

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');// createElement method of the doc object being called w/
  // one argument 'li' and the return of tha expression is being assigned to the variable $todo
  $todo.setAttribute('class', 'list-group-item');// setAttribute method of $todo object beiong called
  // w/ two arguments, string 'class' and string 'list-group-item'

  var $formCheck = document.createElement('div');// createElement method of document object bring called
  // w/ one argument string 'div' and the return of that expression is being assingned to the var
  // $formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');// setAttr method of formCheck object
  // being caled w/ two arguments, string 'class' and string 'from-check d-flex'

  var $checkbox = document.createElement('input');// createElement method of the document object being
  // called with one argument, string 'input', and the return of that expression is being assigned
  // to the variable $checkbox
  $checkbox.checked = todo.isCompleted;// the isCompleted property of the todo method if being
  // to the checked  property of the $checkbox object
  $checkbox.setAttribute('id', todo.todoId);// set attribute method of the $checkbox object is being
  // called with two  arguments, string 'id' and the value of the todoId property of the todo object
  $checkbox.setAttribute('type', 'checkbox');// set attribute method of the $checkbox object is being
  // called with two  arguments, string 'type' and string 'checkbox'
  $checkbox.setAttribute('class', 'form-check-input');// set attribute method of the $checkbox object is being
  // called with two  arguments, string 'class' and string 'form-check-input'

  var $label = document.createElement('label');// createElement method of the document object being
  // called with one argument, string 'label', and the return of that expression is being assigned
  // to the variable $label
  $label.setAttribute('for', todo.todoId);// set attribute method of the $label object is being
  // called with two  arguments, string 'for' and the value of the todoId property of the todo object
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');// set attribute method of the $label object is being
  // called with two  arguments, string 'class' and string 'form-check-label flex-grow-1 ml-2'
  $label.textContent = todo.task;// the value of the task property of the todo object is being assigned
  // to the textContent property of the $label object

  $todo.append($formCheck);// append method of the $todo object is being called with one argument,
  // the value of the variable $form check
  $formCheck.append($checkbox, $label);// append method of the $formCheck object is being called with two argument,
  // the value of the variable $checkbox, and the value of the variable $label

  return $todo;// return the value of the variable $todo fromt he function..
}
