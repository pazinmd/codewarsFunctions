//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) 
//that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
var numCom = function(a,b) {
  return a-b;  
}

var min = function(list){
  list.sort(numCom) 
    return list [0]
}

var max = function(list){
    list.sort(numCom)
    return list[list.length-1]
}
