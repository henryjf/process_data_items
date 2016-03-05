




// Problem 1
var prices = items.map(function(obj){
  return obj.price;
});
var sumPrices = prices.reduce(function(prev, next){
  return prev + next;
});
var avgPrice = sumPrices / items.length;
//numAvgPrice.toFixed(avgPrice);

 //console.log(avgPrice);

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







