let summation = function (num) {
  let result = 0; //here i'm going to summarize all the numbers from 1 to num
  
  let i = 1; //in the description of my exercise there was a condition, that we start with 1
  
   while (i <= num) { // while 1 less or equal to num we have to add i to result
  result = result + i;
  i++; // after every iteration of the while loop i'm increasing i by 1
}

  return result // returning result
}
