/**
 * 通过调用迭代函数（iteratee）遍历数数组中的每一个元素来创建一个新数组
 * 迭代函数有三个参数: (value, index, array)
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array 被迭代的数组
 * @param {Function} iteratee 每次迭代时调用的函数
 * @returns {Array} 返回新的映射后的数组
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */
function map(array, iteratee) {
  // 初始化index、length和result
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  // 迭代
  while (++index < length) {
    // 把迭代函数返回的结果挨个赋值给新数组的对应位置
    result[index] = iteratee(array[index], index, array)
  }
  // 返回新数组
  return result
}

export default map
