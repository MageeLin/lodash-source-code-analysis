/**
 * `forEach` 对于array格式实现的特殊版本
 *
 * @private
 * @param {Array|Object} collection 要迭代的array
 * @param {Function} iteratee 每一次迭代时调用
 * @returns {Array|Object} 返回 `array`
 */
 function arrayEach(array, iteratee) {
  let index = -1;
  const length = array.length;

  // 迭代
  while (++index < length) {
    // 使用iteratee来调用每个元素，同时如果显式返回false，终止迭代
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  // 跟js的forEach不同，最后会把array返回
  return array;
}

export default arrayEach;
