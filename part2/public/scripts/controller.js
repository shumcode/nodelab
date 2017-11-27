(function () {
  function FormController() {
    var vm = this;
    vm.tasks = [];
    vm.addTask = function(newInput) {
      vm.tasks.push(newInput);
      vm.newInput = "";
    }
    vm.removeTask = function(index) {
      vm.tasks.splice(index, 1);
    }
  }

  angular
    .module("app")
    .controller("FormController", FormController);
})();