




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
return item.price >14 && item.price < 18;
})

var titles = midPriceProducts.map(function(obj){

  return obj.title
})
// Problem 3
//Which item has a "GBP" currency code? Display it's name and price.










