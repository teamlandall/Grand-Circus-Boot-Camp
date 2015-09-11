var item1 = { 
  name: "Apple", 
  price: 2.99,
};

var item2 = {
  name: "Milk",
  price: 3.52,
};

var item3 = {
  name: "Chips",
  price: 1.21,
};

var item4 = {
  name: "Crackers",
  price: 2.45,
};

var item5 = {
  name: "Cereal",
  price: 3.59,
};

var groceryList = [ 
  item1, 
  item2, 
  item3, 
  item4, 
  item5, 
];

var shoppingList; 

groceryList.forEach(function(element){
	shoppingList = document.createElement("li");
  shoppingList.innerHTML = element.name + "..... $" + element.price;
  document.getElementById('list').appendChild(shoppingList);
});
  
var total = 0;

groceryList.forEach(function(element){
  total += element.price;
});

var totalPrice = document.createElement('h3');
totalPrice.innerHTML = "Total Price: $" + total;
document.getElementById('list-container').appendChild(totalPrice);

// All of my code below based on Pam's trying to do the add value
// NOT WORKING

var newName = document.getElementById('newItem');
var newCost = document.getElementById('newPrice');
var listUpdate = document.createElement("li");

document.getElementById("addItem").addEventListener('click', newProduct);

function newProduct(){
  groceryList.name.push(newName);
  groceryList.price.push(newPrice);

  listUpdate.innerHTML = newName + "..... $" + newCost;
  document.getElementById('list').appendChild(listUpdate);

}



var testItem = document.createElement("li");
testItem.innerHTML = "Bacon..... $ 3.45";
document.getElementById('list').appendChild(testItem);

















