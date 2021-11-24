/* exported todos */

var todos = [];

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});

var previousTodosJSON = localStorage.getItem('javascript-local-storage');

todos = JSON.parse(previousTodosJSON);
