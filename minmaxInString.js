//IMPORTANT 
//function which returns min and max number in a string

//highAndLow('1 8 12 -22')
//expected output is a string '-22 12'

function highAndLow(numbers) {
   numbers = numbers.split(' '); //deleting spaces with method split
  return `${ Math.max(...numbers) } ${ Math.min(...numbers) }`;  // here we're making magic using `` apostrophes and math module
}
