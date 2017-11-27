(function () {
  function hoverX () {
    return {
      restrict: "A",
      // controller: "FormController as form",
      link: function ($scope, $element, $attrs) {
        $element.on("mouseover", function () {
          $element.css("color", "red");
        });
        $element.on("mouseleave", function () {
          $element.css("color", "#000");
        });
      }
    };
  }
    
  
    angular
      .module("app")
      .directive("hoverX", hoverX);
  })();