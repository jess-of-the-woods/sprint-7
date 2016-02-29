var countChar = function (str, letter) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      result++
    }
  }
//  console.log(result + ' ' + letter)
  return result + ' ' + letter
}

var countBs = function (str) {
  return countChar(str, 'b')
}

countBs('bbbhello')

// console.log(countChar('Ooooooh!!', 'h'))

/* old countBs function
var countBs = function(str) {
  var result= "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      result++;
    }
  }
  return result;
} */
