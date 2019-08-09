var hours = 0;
var minutes = 6;

function date(h, m){
  return h>=0?(h<=23?(m>=0?(m<=59?true:false):false):false):false;
}

var output = date(hours, minutes);
console.log(`date output: ${output}`); 