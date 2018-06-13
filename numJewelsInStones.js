/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let numJewels = 0;

  for(let i = 0; i < S.length; i++) {
    let stone = S[i];
    if(J.includes(stone)) {
      numJewels+= 1;
    }
  }

  return numJewels;
};
