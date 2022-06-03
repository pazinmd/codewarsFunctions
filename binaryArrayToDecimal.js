const binaryArrayToNumber = arr => {
 let stringArr = parseInt((arr.join('')),2);  // making a string from array with a separator ''
 return stringArr;                            // converting binary to decimal using parseInt
};
