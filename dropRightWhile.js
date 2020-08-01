import baseWhile from './.internal/baseWhile.js'

/**
 * 创建一个array的切片，去除array中从 predicate函数 返回假值的元素开始开始到最后一个元素的部分。
 * predicate 会传入3个参数： (value, index, array)。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {Function} predicate 每次迭代时调用的函数
 * @returns {Array} 返回array的切片
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */
function dropRightWhile(array, predicate) {
  // 检查数组是否正常
  return (array != null && array.length)
    // 为正常数组时执行核心方法baseWhile
    // baseWhile(array, predicate, isDrop, fromRight)
    // 现在的情况是丢弃选中的元素，并且顺序是从右向左，实现了dropRightWhile
    ? baseWhile(array, predicate, true, true)
    // 数组为null、undefined或length为0时返回[]
    : []
}

export default dropRightWhile
