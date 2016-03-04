

//items.forEach(function(obj) {
  //console.log(obj.price) });


// }
// var students = [studentA, studentB, studentC, studentD];

// function averageGPA(pupils) {
//   var gpaSum = pupils.reduce(function(totalGPA, currentStudent){
//     return totalGPA + currentStudent.gpa;
//   }, 0);
//   var average = gpaSum / pupils.length;
//   return average;
// }

// var avgGpaSpan = document.querySelector('.average-gpa');
// var passGpaSpan = document.querySelector('.average-passing-gpa');

// avgGpaSpan.textContent = averageGPA(students);
// //

// function averagePrice(items);
//   var itemSum= price.reduce(function(totalPrice, currentItem){
//     return totalPrice + currentItem.price;
//   }, 0)
// var average = itemsSum / numOfItems.length;
// return average;
// }


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
var pricesSet = items.map(function(obj){
  return obj.price;
})
//filter prices 
var setPrice = pricesSet.filter(function(price){
  return 14 < price && price < 18;
})

console.log(pricesSet);
console.log(setPrice);







