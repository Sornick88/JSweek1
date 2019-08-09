import "./styles.css";

var errMsgNaN = "incorrect value: ";

var inputA = 5;
var inputB = 2;
var inputC = 3;

function isNumber(val) {
  return typeof val === "number";
}

function isString(val) {
  return typeof val === "string";
}

function valCheck(val) {
  let retVal;
  if (isNumber(val)) {
    retVal = val;
  } else if (isString(val)) {
    retVal = parseInt(val, 10);
    if (isNaN(retVal)) {
      return NaN;
    }
  } else {
    retVal = NaN;
  }
  return retVal;
}

function resultOutput(val) {
  let buff = valCheck(val);
  let resultStr = `Result ${buff}`;
  return (document.getElementById("result").innerHTML = resultStr);
}

function maxResult(a, b, c) {
  /*assert block*/
  let buffVarA = valCheck(a);
  if (isNaN(buffVarA)) {
    console.error(`${errMsgNaN}${a}\n`);
    return NaN;
  }
  let buffVarB = valCheck(b);
  if (isNaN(buffVarB)) {
    console.error(`${errMsgNaN}${b}\n`);
    return NaN;
  }
  let buffVarC = valCheck(c);
  if (isNaN(buffVarC)) {
    console.error(`${errMsgNaN}${c}\n`);
    return NaN;
  }
  /*  get max\min value between a and c*/
  let maxBorderVal = buffVarA >= buffVarC ? buffVarA : buffVarC;
  let minBorderVal = maxBorderVal === buffVarA ? buffVarC : buffVarA;
  /*  in case of max border value is more than "1" 
      it must be used with "*" operator.
      else use "+" operator for each argument*/
  if (maxBorderVal > 1) {
    /*  in case of minBorderVal or buffVarB is "1",
        use "+" operator inside round brackets.
        else use "*" operator*/
    if (minBorderVal === 1 || buffVarB === 1) {
      return (minBorderVal + buffVarB) * maxBorderVal;
    } else {
      return minBorderVal * buffVarB * maxBorderVal;
    }
  } else {
    return minBorderVal + buffVarB + maxBorderVal;
  }
}

var output = maxResult(inputA, inputB, inputC);
console.log(output);
resultOutput(output);
