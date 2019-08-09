var input = [35, 74, 53, 10, 43, 56, 45, 23];
var inputScore = 100;

function iAmBetter(arrScores, userScore) {
  let avrOfScores = (arrScores.reduce((sum, curVal) => (sum + curVal), userScore))/((arrScores.length)+1);
  return (userScore > avrOfScores);
}

var output = iAmBetter(input, inputScore) === true ? "Yes":"No";
console.log(`Am i better? ${output}`);