var hours = 9;
var minutes = 59;
var extInterval = 1;

function date(h, m, e){
  if(h>23 || m>59) {
    return NaN;
  }
  var summ = (h*60+m+e);
  var hour = Math.floor(summ/60, -1)%24;
  var min = summ%60;
  var strHour = hour > 9 ? `${hour}` : `0${hour}`;
  var strMin = min > 9 ? `${min}` : `0${min}`;
  return `${strHour}:${strMin}`;
}

var output = date(hours, minutes, extInterval);
console.log(`addTime output: ${output}`);