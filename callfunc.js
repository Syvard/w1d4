// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(item){
    if (item === "Waldo") {
      found(arr.indexOf(item));   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);