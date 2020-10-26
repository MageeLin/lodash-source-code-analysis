import baseWhile from './.internal/baseWhile.js'

/**
 * 从 `array` 的起始位置开始向右提取元素，直到 `predicate` 断言返回假值。
 * predicate 会传入三个参数： (value, index, array)。
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.要查询的数组
 * @param {Function} predicate The function invoked per iteration.每次迭代调用的函数。
 * @returns {Array} Returns the slice of `array`.返回 array 数组的切片。
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeWhile(users, ({ active }) => active)
 * // => objects for ['barney', 'fred']
 */
function takeWhile(array, predicate) {
  return (array != null && array.length)
    // baseWhile(array, predicate, isDrop, fromRight)
    ? baseWhile(array, predicate)
    : []
}

export default takeWhile
