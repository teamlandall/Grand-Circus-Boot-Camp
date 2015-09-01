(function(){
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', [ '$http', function($http){
		var store = this;

    store.products = [];
    
    $http.get('/products.json').success(function(data){
      store.products = data;
    });
	}]);

	var gems = [
  {
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
    images: [
      {
        full: 'Dodecahedron-01-full.jpg',
        thumb: 'Dodecahedron-01-thumb.jpg',
      },
      {
        full: 'Dodecahedron-02-full.jpg',
        thumb: 'Dodecahedron-02-thumb.jpg',
      },
    ];
    canPurchase: false,
    soldOut: true,
	},
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: ". . . ",
    canPurchase: false,
  }...
  ];

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });



})();

