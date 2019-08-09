var input = `5 2 3`;

var inputArr = input.split(" ");

var inputA = parseInt(inputArr[0], 10);
var inputB = parseInt(inputArr[1], 10);
var inputC = parseInt(inputArr[2], 10);

function maxResult(a, b, c) {
  /*  get max\min value between a and c*/
  let maxBorderVal = a >= c ? a : c;
  let minBorderVal = maxBorderVal === a ? c : a;
  /*  in case of max border value is more than "1" 
      it must be used with "*" operator.
      else use "+" operator for each argument*/
  if (maxBorderVal > 1) {
    /*  in case of minBorderVal or buffVarB is "1",
        use "+" operator inside round brackets.
        else use "*" operator*/
    if (minBorderVal === 1 || b === 1) {
      return (minBorderVal + b) * maxBorderVal;
    } else {
      return minBorderVal * b * maxBorderVal;
    }
  } else {
    return minBorderVal + b + maxBorderVal;
  }
}

var output = maxResult(inputA, inputB, inputC);
console.log(output);
