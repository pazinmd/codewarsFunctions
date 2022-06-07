/// this functions multiplying each element with the next element in Array
// if we have an array test[2, 4, 8] then on the output we will recieve 2*4*8 = '64'
// here we dont have empty elements and arrays
function grow(x){
  let result = 1;
for ( let i = 0; i < x.length ; i++){
   result *= x[i]
  }
  return result;
}
