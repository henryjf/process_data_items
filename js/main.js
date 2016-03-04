//var studentA = {
 // grade: 100,
 // name: 'Leonard',
 // gpa: 4.0
//}
//var studentB = {
  //grade: 10,
  //name: 'George',
  //gpa: 1.0
//}
//var studentC = {
  //grade: 88,
  //name: 'Karla',
  //gpa: 3.5
//}
//var studentD = {
//  grade: 72,
//  name: 'Fred',
//  gpa: 2.7
//}

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
// console.log(avgPrice);
// Want to round avgPrica
var str ="The average price is $" + avgPrice + ".";
console.log(str);

