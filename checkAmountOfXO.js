// Returns whether an amount of x's equals o's amounts or not
// XO(xxoo) true
// XO(xXoo) true
// XO(xxo) false

function XO(str) {
  let  amountOfX = str.match(/x/gi) || 0
  let amountOfO = str.match(/o/gi) || 0
  let result;
  amountOfX.length == amountOfO.length ? result = true : result = false;
  
  return result;
}
