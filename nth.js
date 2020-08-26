import isIndex from './.internal/isIndex.js'

/**
 * 获取`array`数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 *
 * @since 4.11.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {number} [n=0] 要返回元素的索引
 * @returns {*} 返回`array`的第n个元素
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
function nth(array, n) {
  // 获取length
  const length = array == null ? 0 : array.length
  if (!length) {
    return
  }
  // 处理n为负数的情况
  n += n < 0 ? length : 0
  // 看看n是不是有效的索引，是的话就返回该位置处的值
  return isIndex(n, length) ? array[n] : undefined
}

export default nth
