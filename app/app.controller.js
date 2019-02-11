"use strict";

function TodoController() {
    const vm = this;
    vm.tasks = [ 
        {task: "eat breakfast", completed: true},
        {task: "study", completed: true},
        {task: "make dinner", completed: false},
        {task: "read a book", completed: false},
    ];
    vm.addTask = () => {
        vm.tasks.push({
          task: vm.newTask.name,
          completed: false,
        });
        vm.newTask = {};
      }
      vm.clearInput = {};
      vm.removeTask = (index, task) => {
        vm.tasks.splice(index, 1);
      };
      vm.completeTask = (index) => {
        vm.tasks[index].completed = true;
      };

}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);