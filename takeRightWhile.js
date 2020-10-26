import baseWhile from './.internal/baseWhile.js'

/**
 * 从 `array` 的结束位置开始向左提取元素，直到 `predicate` 断言返回假值。
 * predicate 会传入三个参数： (value, index, array)。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组。
 * @param {Function} predicate 每次迭代调用的断言函数。
 * @returns {Array} 返回 `array` 的切片。
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 */
function takeRightWhile(array, predicate) {
  return (array != null && array.length)
    // baseWhile(array, predicate, isDrop, fromRight)
    ? baseWhile(array, predicate, false, true)
    : []
}

export default takeRightWhile
