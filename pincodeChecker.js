//Returns whether a PIN is exactly 4 or 6 digits and has numbers only or not

//validatePIN(3122) //true
//validatePIN(213122) //true
//validatePIN(333s) // false

function validatePIN (pin) {
  if (pin.length === 4 && pin.match(/^[0-9]+$/g) ) {  // regexp using [0-9] $ and ^
  return  true
  }
  else if (pin.length === 6 && pin.match(/^[0-9]+$/g) ) {
  return true 
  }
  else {return false}
}
