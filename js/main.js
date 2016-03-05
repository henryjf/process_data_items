




// Problem 1
var prices = items.map(function(obj){
  return obj.price;
});
var sumPrices = prices.reduce(function(prev, next){
  return prev + next;
});
var avgPrice = sumPrices / items.length;
//numAvgPrice.toFixed(avgPrice);

// Want to round avgPrice
var str ="The average price is $" + avgPrice + ".";
console.log(str);

// Problem 2

//get all prices
// var prices = items.map(function(obj){
//   return obj.price;
// })
var midPriceProducts = items.filter(function(item){
return item.price > 14 && item.price < 18;
})

var titles = midPriceProducts.map(function(obj){
  return obj.title
})

console.log(titles);

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

console.log(str);

//Problem 4
//Display a list of all items who are made of wood.

// get materials list from all items
// find "wood" in materials list
// link materials lists to title list
// print out materials list

// var woodItems = items.indexOf(function(currentItem) {
//  return currentItem.materials.wood;
//   })

// var pine = woodItems.map(function(item) {
//   return item.title;
//     })

// console.log(pine); 

// Problem 5
// Which items are made of eight or more materials?
// Display the name, number of items and the items it is made of.

var numMater = items.filter(function(item){
  return item.materials.length >= 8;
})

  var titles =numMater.map(function(obj){
  return obj.title;
})
  //
  console.log(titles);



// Problem 6
// How many items were made by their sellers?

var selfMade = items.filter(function(obj){
  return obj.who_made === "i_did";
})

var made = selfMade.map(function(item){
 return item.title;
})

var str = made.length + " were made by their sellers";

console.log(str);



































// var woodItems = items.filter(function(obj){
// return obj.materials.wood === "wood";
// })

// var madeOfWood = woodItems.map(function(item){
//   return item.title;
      
// })

 //console.log(woodItems);

// var woodItems = items.filter(function(obj) {
//     if (obj.materials === "wood") {
//         return obj.title;
//     }});

// console.log(obj);
















