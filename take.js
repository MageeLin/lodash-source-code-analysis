import slice from './slice.js'

/**
 * 创建一个`array`的切片，从`array`的起始位置开始提取`n`个元素。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要查询的数组。
 * @param {number} [n=1] 要提取的元素个数。
 * @returns {Array} 返回`array`的切片。
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */
function take(array, n=1) {
  // 默认提取一个
  if (!(array != null && array.length)) {
    return []
  }
  // 本质上使用的是slice提取的
  // n小于0时，就设为0
  return slice(array, 0, n < 0 ? 0 : n)
}

export default take
