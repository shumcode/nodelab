(function () {
  function hoverButton () {
    return {
      controller: "FormController as form",
      link: function ($scope, $element, $attrs) {
        $element.on("mouseenter", function () {
          console.log('test')
          $element.css("background-color", "#ff1493");
        });
        $element.on("mouseleave", function () {
          $element.css("background-color", "#ff69b4");
        });
      }
    };
  }
    
  
    angular
      .module("app")
      .directive("hoverButton", hoverButton);
  })();