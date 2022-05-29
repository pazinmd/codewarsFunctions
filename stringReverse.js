//reversing a string
function solution(str){
  let strToArray = str.split(''); 
  // split method can create a new array and each letter 
  // will be separated from another without any blanks
  let reverseArray = strToArray.reverse();
  // reverse method creates a reversed array which will be
  // in variable reverseArray
  let resultString = reverseArray.join('');
  return resultString;
}
