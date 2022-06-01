// function which replace camelCase with two or more words
function solution(string) {
    let s = string.length;
  let result = '';
  for (let i = 0; i < s; i++) 
   if (string.charAt(i) === string.charAt(i).toUpperCase() )  {
     result = result.concat(" " + string[i] ) }
  else result = result.concat(string[i])
  return result;
}

// better and simpler solution
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
