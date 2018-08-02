/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let strLowerCase = "";
    let index = 0;
    for(let i = 0; i < str.length; i++) {
      let ch = str[i];
      if(str.charCodeAt(i) < 97 && upperCase.indexOf(ch) !== -1) { // uppercase
        index = upperCase.indexOf(ch);
        strLowerCase += lowerCase[index];
      } else if(str.charCodeAt(i) >= 97 && lowerCase.indexOf(ch) !== -1) {
        index = lowerCase.indexOf(ch);
        strLowerCase += lowerCase[index];
      } else {
        strLowerCase += ch;
      }
    }
    return strLowerCase;
};
