var input = 56239814;

function balancedNumber (num) {
  const strNum = num.toString(10);
  if (strNum.length < 3) {
    return "Balanced";
  }
  const strHalfLen = Math.round((strNum.length%2 === 1)?(strNum.length/2):((strNum.length-1)/2)) - 1;
  let buff = strNum.slice(-strHalfLen);
  let buff2 = (strNum.length%2 === 1) ? strNum.length/2 : (strNum.length - 1)/2; 
  console.log(buff, strHalfLen, buff2);
  const rightSumm = strNum.slice(-strHalfLen).split("").reduce((sum, cur) => parseInt(sum,10) + parseInt(cur,10), 0);
  const leftSumm = strNum.slice(0, strHalfLen).split("").reduce((sum,cur) => parseInt(sum,10) + parseInt(cur,10), 0);
  return rightSumm !== leftSumm ? "Not Balanced" : "Balanced";
}

var output = balancedNumber(input);
console.log(`${output}`);