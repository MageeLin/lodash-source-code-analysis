import slice from './slice.js'

/**
 * 创建一个`array`的切片，从`array`的结束位置向左提取`n`个元素。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组。
 * @param {number} [n=1] 要提取的元素个数。
 * @returns {Array} 返回 array 数组的切片。
 * @example
 *
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 *
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * takeRight([1, 2, 3], 0)
 * // => []
 */
function takeRight(array, n=1) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // 这里是核心，用length-n将切片的开始位置转化为index
  n = length - n
  // 从n提取到末尾
  return slice(array, n < 0 ? 0 : n, length)
}

export default takeRight
