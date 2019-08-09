/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
  if (hours > 23 || minutes > 59) {
    return NaN;
  }
  var summ = hours * 60 + minutes + interval;
  var hour = Math.floor(summ / 60, -1) % 24;
  var min = summ % 60;
  var strHour = hour > 9 ? `${hour}` : `0${hour}`;
  var strMin = min > 9 ? `${min}` : `0${min}`;
  return `${strHour}:${strMin}`;
};
