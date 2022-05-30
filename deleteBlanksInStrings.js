function noSpace(x){
  let a = ''; // setting an empty string
for (let i = 0; i < x.length; i++) { // 
  if (x[i]!==" ") {a= a + x[i] }
}
  return a;
}
