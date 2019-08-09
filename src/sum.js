var input1 = 20;
var input2 = "20";

function sum(a, b){
  if (isNaN(a) || isNaN(b)){
    return NaN;
  } 
  return (typeof(a) === "number"?a:parseInt(a,10)) + 
    (typeof(b) === "number"?b:parseInt(b,10));
}

var output = sum(input1, input2);
console.log(`sum output: ${output}`);