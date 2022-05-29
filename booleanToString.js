//simple construction which shows 'Yes' if bool = true and 'No' if bool = false
function boolToWord( bool ){
  switch (bool) { // function can be written with many possible concstructin,
                  // here I'm using simple switch conctruction
      case true: // in case of bool = true function returns "yes"
      return "Yes";
      break;
      default: // when function works with boolean values only we have only two possible cases
      return "No"
  }
}

// another solution using ternary operator, even simpler

function boolToWord( bool ){
  return bool ? 'Yes':'No';  // if else instruction, where condition can be written like: 
                             //"is bool variable = true? then return Yes, else -  return No"
}
