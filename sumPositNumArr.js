//in this function I'm returning sum of positive values in an array 'arr'
function positiveSum(arr) {
  let sumOfPositiveValues = 0; // sum container, future result
  
  let i = 0; // counter for iterations inside of an array
  
  for (i; i < arr.length; i++) { // iterations will be repeated till 'i' is less than length of array
    
    if (arr [i] > 0) { // if value of array(arr) with index [i] is positive ...
    sumOfPositiveValues = arr[i] + sumOfPositiveValues; // add array value with index 'i' to our result container
  }
  }
  
  return sumOfPositiveValues; 
}




//same function using switch cases concstruction

function positiveSum(arr) { 
  let result = 0;
  let i = 0;
  while (i < arr.length) {
    switch arr[i]>0 {
      case true: { result + arr [i]};
      i++;
      break;
      default: i++;
    } return result;
}
