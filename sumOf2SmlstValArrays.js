// Using this function I can return a sum of two minimal values in an array with positive numbers

function sumTwoSmallestNumbers(numbers) {  
  
  function numComparsion(a,b) {  // comparsion function for arrays
    
    return a - b;
    
  }
  let result,finalResult; //creating a variable for temporary resulr and final result
  
  result = numbers.sort(numComparsion); //sorting 'numbers' array using our method
  
  finalResult = result[0] + result[1]; // counting a sum of first two values in a sorted array
  return finalResult
}
