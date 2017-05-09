const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return (_.reject(str, (item) => item === target)).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, (val) => val === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, item => !isNaN(item));
};

const filterToOnlyDigits = function(str) {
  let arr = str.split(' ').join('');
  return _.filter(arr, item => !isNaN(item)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  let arr = [];
  for (let key in obj) {
    arr.push(truncateString(obj[key], maxLength))
  }
  return arr
};

const countChars = function(str) {
  let obj = _.reduce(str, (acc, val) => {
    if (typeof acc[val] == 'undefined') {
      acc[val] = 1;
    } else {
      acc[val]++;
    }
    return acc;
  }, {});
  return obj;
};


const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
