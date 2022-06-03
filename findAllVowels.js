function getCount(str) {
 let result = str.match(/[aeiou]/gi).length // here we are using method match and also searching for aeiou letters
  return result;                            // g means that we are looking for ALL matches
}                                           // i - search is case insensitive
