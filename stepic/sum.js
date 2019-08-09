 /**
 * @param {Number} a ÐÐµÑÐ²Ð¾Ðµ ÑÐ»Ð°Ð³Ð°ÐµÐ¼Ð¾Ðµ
 * @param {Number} b ÐÑÐ¾ÑÐ¾Ðµ ÑÐ»Ð°Ð³Ð°ÐµÐ¼Ð¾Ðµ
 * @returns {Number}
 */
module.exports = function (a, b) {
  if (isNaN(a) || isNaN(b)){
    return NaN;
  } 
  return (typeof(a) === "number"?a:parseInt(a,10)) + 
    (typeof(b) === "number"?b:parseInt(b,10));
};
