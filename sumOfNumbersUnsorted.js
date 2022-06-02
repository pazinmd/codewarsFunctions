function getSum( a,b ) { 
 let max = Math.max(a,b); //firstly we have to find out which number is min and which is max using Math module
  let min = Math.min(a,b);
  return (max - min + 1)* (min + max)/2; 
}
