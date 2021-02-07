/* exported todos */

var todos = [];// array literal being assinged to the variable todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');// getItem method of the
// localStorage object being called w/ one argument, string 'javascript-local-storage'

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}// if statement with condition of varaible previousTodosJSON being strictly not equal to null
// if true, the return of the parse method of the json object being called w/ one argument, variable
// previousTodosJSON, is being assigned to the variable todos.

window.addEventListener('beforeunload', function (event) { // addEventListener method of the  window
  // onbject is being called with two arguments, string beforeunload and an anonymous function with
  // parameter event
  var todosJSON = JSON.stringify(todos);// stringify method of the JSON object is beinfg called w/
  // one argument, variable todos, and the return of that expression is being assigned to the variable
  // todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);// set item method of the localStorage
  // object  being called with 2 arguments, string javascript-local-storage and variable todosJSON
});
