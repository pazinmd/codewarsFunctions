//Function which can return a number in an expanded form
// 2112 = 2000 + 100 + 10 + 2

function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 0) {
    var remainder = num % multiple ; 
    if (remainder > 0 ) {
      result.unshift(remainder)  //IMPORTANT
      }
    num -= remainder;
    multiple = multiple *10
    }
  return result.join(' + ')
  }
