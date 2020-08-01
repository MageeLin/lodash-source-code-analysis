import baseWhile from './.internal/baseWhile.js'

/**
 * 创建一个切片数组，删除array中从第一个元素开始到 predicate函数 返回假值的元素结束的部分。
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
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */
function dropWhile(array, predicate) {
  // 检查数组是否正常
  return (array != null && array.length)
    // 为正常数组时执行核心方法baseWhile
    // baseWhile(array, predicate, isDrop, fromRight)
    // 现在的情况是丢弃选中的元素，并且顺序是从左向右，实现了dropWhile
    ? baseWhile(array, predicate, true)
    // 数组为null、undefined或length为0时返回[]
    : []
}

export default dropWhile
