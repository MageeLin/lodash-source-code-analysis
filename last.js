/**
 * 获取array中的最后一个元素。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {*} 返回array的最后一项
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
  // 先取到array的长度
  const length = array == null ? 0 : array.length
  // array[length - 1]就是最后一项，否则返回undefined
  return length ? array[length - 1] : undefined
}

export default last
