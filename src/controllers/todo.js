angular.module('todoApp', [])
  .controller('TodoListController', function() {

    var todo = new List();

    function Todolist(text, done) {
      this.text = text;
      this.done = done;
    }
    
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    todoList.addTodo = function() {
      console.log("todo")
      todo.append(new Todolist(todoList.todoText, false));
      // todoList.todos.push({text:todoList.todoText, done:false});
      // todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });