// this function can transform numbers into  a fake binary  view
// if number is more than 5 (including five) - print 1, else -  0

function fakeBin(x){
  let result = ''; // firstly we need a blank string
for (let i = 0; i < x.length; i++) { // till i <= x.length
 if (x[i] < 5) { 
result = result.concat("0"); } //working with new string using a concat method
  else result =  result.concat("1"); // same
}
  return result;
  }
