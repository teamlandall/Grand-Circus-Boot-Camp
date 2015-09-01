(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });  

  app.directive('productPanels', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:fucntion(){

      },
      controllerAs: 'panels',
    };
  });

   app.directive('productGallery', function(){
    return{
      restrict:'E',
      templateUrl:'product-gallery.html',  
      controller: function(){
            this.current = 0;
              this.setCurrent = function(imageNumber){
                this.current = imageNumber || 0;
            };        
      },
      controllerAs: 'gallery'
    };
  });

})();