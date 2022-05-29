// how to return an opposite number?
function opposite(number) {
  return -number
}

//second solution 
function opposite(number) {
 let result =  number>0 ? -number: Math.abs(number);
  return result;
}
