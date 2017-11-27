(function () {
  var taskForm = {
    controller: "FormController",
    template: `
    <form class="formbox">
      <h1>TODO List</h1>
      <p>A place to store the things you have to do!</p>
      <input type="text" placeholder="Filter your to-dos" ng-model="$ctrl.taskFilter" id="filter">
    
      <ol>
        <task-list tasks="$ctrl.tasks" task-filter="$ctrl.taskFilter"></task-list>
      </ol>
    
      <input type="text" placeholder="Add your to-do" ng-model="$ctrl.newInput" id="addInput">

      <button ng-click="$ctrl.addTask($ctrl.newInput)" id="submit" hover-button>Add</button>
      
    </form>
    `
  };

  angular
    .module("app")
    .component("taskForm", taskForm);
})();