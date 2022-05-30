// creating a fuction which will create from "ZpglnRxqenU" string "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
function accum(s) {
    let result = "";
      for (let i = 0; i < s.length; i++ ) {
        if ((s.length - i) == 1) { 
          result = result + s[i].toUpperCase() + (s[i].toLowerCase().repeat(i))  // using two methods on string in one line
        } 
        else result = result + (s[i].toUpperCase()) + (s[i].toLowerCase().repeat(i)) + "-"  ; 
    }
    return result;
  }
