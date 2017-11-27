(function () {
  var taskList = {
    bindings: {
      tasks: "<",
      taskFilter: "<"
    },
    controller: "FormController",
    template: `
    
      <li ng-repeat="task in $ctrl.tasks | filter: $ctrl.taskFilter track by $index" hover-task>{{ task }}<i class="material-icons md-18" ng-click="$ctrl.removeTask($index)" hover-x>clear</i></li>
    
    `
  };

  angular
    .module("app")
    .component("taskList", taskList);
})();