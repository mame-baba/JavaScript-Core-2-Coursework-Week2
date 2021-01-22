function shoppingList(arrayOfPeople) {
  var myList = document.querySelector("#content");
  var myNewList = document.createElement("ul");
  arrayOfPeople.forEach(element => {
var newShoppingList = document.createElement("li");
newShoppingList.innerText = element;
myNewList.appendChild(newShoppingList);

  });
  // console.log(myNewList);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
