//returns an int number which contains a square of every digit in a number
// squareDigits(2112) // 4114
// squareDigits(32) //94
function squareDigits(num){
  let numArr = Array.from(String(num),Number);  //IMPORTANT creating an array from a number. Firstly converting to string, then to array
  for (let i = 0; i < numArr.length; i++) { 
    numArr[i] *= numArr[i]; 
  }
  return parseInt(numArr.join('')) //returning a number, using method 'join' to create a string, then 'parseInt' to convert it to number
}
