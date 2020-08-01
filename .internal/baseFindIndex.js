/**
 * `findIndex` 和 `findLastIndex`的实现基础
 *
 * @private
 * @param {Array} array 打算检索的数组
 * @param {Function} predicate 每次迭代时调用的函数
 * @param {number} fromIndex 起始处的索引位置
 * @param {boolean} [fromRight] 指定是否从右向左迭代
 * @returns {number} 返回找到元素的 索引值（index），否则返回 -1。
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  // 取到array.length
  const { length } = array
  // 如果从左向右，起始索引位置就是fromIndex - 1；如果从右向左，起始索引位置是 fromIndex + 1。
  // 目的是迭代时能把fromIndex包进去。
  let index = fromIndex + (fromRight ? 1 : -1)

  // 迭代时，从左向右则index递增，从右向左则index递减
  while ((fromRight ? index-- : ++index < length)) {
    // 在这里定义了predicate函数的参数(item, index, array)，找到了想要的元素则返回true
    if (predicate(array[index], index, array)) {
      // 返回想寻找元素的索引
      return index
    }
  }
  // 所有的元素都不匹配，就返回 -1。
  return -1
}

export default baseFindIndex
