var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function (currentValue){
  //taking the value from input (either currentValue.x which grabs the x value or currentValue.y which grabs the y value)
  //makes a variable named sideZ which is equal to currentValue.x (x) to the power of two, and adds to currentValue.y (y) to the power of two
  //then square roots sideZ and returns the value.
  var sideZ = Math.pow(currentValue.x,2) + Math.pow(currentValue.y,2);
  return Math.sqrt(sideZ);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);