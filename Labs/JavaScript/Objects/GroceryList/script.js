var item1 = { 
  name: "apple", 
  price: 2.99,
};

var item2 = {
  name: "milk",
  price: 3.52,
};

var item3 = {
  name: "chips",
  price: 1.21,
};

var item4 = {
  name: "crackers",
  price: 2.45,
};

var item5 = {
  name: "cereal",
  price: 3.59,
};

var groceryList = [
  item1,
  item2,
  item3,
  item4,
  item5,
];

groceryList.forEach(function(element){
	console.log(element.name + " $" + element.price);
});
  
var total = 0;

groceryList.forEach(function(element){
  total += element.price;
});

console.log("Total: $" + total);
















