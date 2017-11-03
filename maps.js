var wordList = ["theres", "vomit", "on", "his", "sweater", "already", "moms", "spaghetti"]

var myMap = function(arr,callback){
  var result = [];
    for(var i = 0; i < arr.length; i++){
      if(typeof callback === 'function'){
        var cbResult = callback(arr[i])
        result.push(cbResult)
      }
    }
  return result
}

var myMapResult = myMap(wordList, function(word) {
  return word.toUpperCase();
});

console.log(myMapResult);