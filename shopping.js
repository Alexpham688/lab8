var totalBill = 0;
var newElement=document.createElement('div');
newElement.style.backgroundColor = "lightgrey";
newElement.style.height = "500px";
newElement.style.width = "500px";


document.body.appendChild(newElement);
var groceryList=[

  {
    food: 'milk',
    price: 3.40
  },
  {
    food: 'carrots',
    price: 6.33
  },
  {
    food: 'turkey',
    price: 8.33
  },
  {
    food: 'yogurt',
    price: 6.99
  },
  {
    food: 'potatoes',
    price: 7.00
  },
  {
    food: 'cheese',
    price: 7.50
  },
  {
    food: 'oranges',
    price: 5.90
  },
  {
    food: 'tomatoes',
    price: 4.34
  },
  {
    food: 'avocado',
    price: 4.90
  },
  {
    food: 'bread',
    price: 3.30
  }];
  var total=0;
  var taxOne= .06;
  var taxTwo= 1.06;
    groceryList.forEach(function(i){
    console.log(i.price, i.food);
    var itemName=document.createElement("div"); // CHANGE TO OL IF IT DOESNT WORK
    itemName.innerText= i.food;
    newElement.appendChild(itemName);
    itemName.className="food";
    // var newElement2=document.createElement('div');
    // newElement.style.backgroundColor = "lightgrey";
    // newElement.style.height = "300px";
    // newElement.style.width = "400px";
    var itemPrice=document.createElement("div");
    itemPrice.innerText=i.price;
    newElement.appendChild(itemPrice);
    var list=document.getElementById("price")
    itemPrice.className="price";



     total+=i.price;


});


// var newElement2=document.createElement('div');
// newElement.style.backgroundColor = "lightgrey";
// newElement.style.height = "300px";
// newElement.style.width = "400px";
// var itemTotal.innerText =total;
// newElement2.appendChild(itemTotal);
// var list=document.getElementById("total");
// itemPrice.className="total";

 console.log('total is ' + total+ ' without tax')

console.log( 'total is ' + total * taxTwo + ' with tax')
var itemTotal=document.createElement("total");
itemTotal.innerText=i.total;
newElement.appendChild(itemTotal);
