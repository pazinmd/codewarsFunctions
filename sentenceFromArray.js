// Function smash will return a string with array values and blanks
// Firstly I will do it using if else constructions
function smash (words) {
let  arrayLengthCounter = words.length;
  let i = 0;
  let stringWArray;
  if (arrayLengthCounter==1){
    return words[0]}
  else if (arrayLengthCounter==0) {
    return ''
  }
   else {  for (i; i < (arrayLengthCounter-1); i++) {
     stringWArray = words.join( " ")
   }
   }
return stringWArray;
     
   }

// also it can be solved in a very short way
smash = function (words) {
  return words.join(" ");
};
