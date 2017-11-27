(function () {
  function hoverTask () {
    return {
      controller: "FormController as form",
      link: function ($scope, $element, $attrs) {
        $element.on("mouseenter", function (index) {
          $element.css("background-color", "#ccc").css("border-radius", "5px");
        });
        $element.on("mouseleave", function (index) {
          $element.css("background-color", "white").css("border-radius", "5px");
        });
      }
    };
  }
    
  
    angular
      .module("app")
      .directive("hoverTask", hoverTask);
  })();