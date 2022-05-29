//function which will check whether the number ever or odd
function even_or_odd(number) {
  let compare = number % 2;  // variable "compare" will hold remainder after dividing
 
  if (compare==0) {  // remainder after dividing of even number is always 0
    return "Even"
  }
  else {return "Odd"} // in any case where remainder is not equals 0 
}


// same task using switch construction
function even_or_odd(number) {
 switch (number%2)
 {
   case 0: return "Even";
     break;
     
   default: return "Odd" 
 }
}


// and also using ternary operator
function even_or_odd(number) {
  let compare = (number%2) ? "Odd" : "Even";
  
  return compare;
 }
