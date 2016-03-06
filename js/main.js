// Problem 1 
//Show me how to calculate the average price of all items.

//get all prices
// add them 
//divide them by number of prices
// print answer

var prices = items.map(function(obj){
  return obj.price;
});
var sumPrices = prices.reduce(function(prev, next){
  return prev + next;
});
var avgPrice = (sumPrices / items.length).toFixed(2);
//numAvgPrice.toFixed(avgPrice);

// Want to round avgPrice
var str ="The average price is $" + avgPrice + ".";
// console.log(str);

  var answer1 = document.querySelector(".answer1")
  answer1.innerHTML = str;

// Problem 2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD

//get all prices
//find prices btw 14 and 18;
//link prices btw 14 and 18 to their titles;
//print titles

var midPriceProducts = items.filter(function(item){
return item.price > 14 && item.price < 18;
})

var titles = midPriceProducts.map(function(obj){
  return obj.title
})

var answer2 = document.querySelector(".answer2")
answer2.innerHTML = titles;

// Problem 3
//Which item has a "GBP" currency code? Display it's name and price.

//find all currency code items;
//filter currency items to get GBP item
//link GBP item to its title 
//print out string w title and price

var britishItem = items.filter(function(obj){
return obj.currency_code === "GBP";
})

var currency = britishItem.map(function(item){
   return item.title;
 })

var str = currency + " costs £18";

var answer3 = document.querySelector(".answer3")
answer3.innerHTML = str;

//Problem 4
//Display a list of all items who are made of wood.

// get materials list from all items
// find "wood" in materials list
// link materials lists to title list
// print out materials list

var woodItems = items.filter(function(currentItem) {
 return currentItem.materials.wood;
  })

var woodProduct = woodItems.indexOf(function(item){
  return item.materials.wood;
})
  
var answer4 = document.querySelector(".answer4")
answer4.innerHTML = woodProduct;

// Problem 5
// Which items are made of eight or more materials?
// Display the name, number of items and the items it is made of.

var numMater = items.filter(function(item){
  return item.materials.length >= 8;
})

var titles =numMater.map(function(obj){
  return obj.title;
}) 

var answer5 = document.querySelector(".answer5")
answer5.innerHTML = titles;

// Problem 6
// How many items were made by their sellers?

var selfMade = items.filter(function(obj){
  return obj.who_made === "i_did";
})

var made = selfMade.map(function(item){
 return item.title;
})

var str = made.length + " were made by their sellers";

var answer6 = document.querySelector(".answer6")
answer6.innerHTML = str;
