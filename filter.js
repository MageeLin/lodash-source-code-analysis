/**
 * 遍历 array（数组）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。
 * predicate（断言函数）调用三个参数：(value, index, array)。
 *
 * **注意:** 与`remove`不同，此方法会返回一个新数组
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array 要迭代的数组
 * @param {Function} predicate 每次迭代调用的断言函数
 * @returns {Array} 返回新的筛选过的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function filter(array, predicate) {
  // 各种初始化操作
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  const result = []

  // 迭代
  while (++index < length) {
    // value为每一个元素
    const value = array[index]
    // 执行断言函数，返回真时，就push到result种
    if (predicate(value, index, array)) {
      result[resIndex++] = value
    }
  }
  // 返回结果
  return result
}

export default filter
