import baseSortedIndex from './.internal/baseSortedIndex.js'
import eq from './eq.js'

/**
 * 这个方法类似`lastIndexOf`，但是它是在已经排序的`array`上执行二进制检索。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @returns {number} 返回匹配值的`index`，否则返回`-1
 * @example
 *
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */
function sortedLastIndexOf(array, value) {
  // 先取到数组的length
  const length = array == null ? 0 : array.length
  if (length) {
    // 跟sortedLastIndex调用方式一样，但是减1
    const index = baseSortedIndex(array, value, true) - 1
    // 如果不相等说明数组中不存在这个值，就返回-1
    if (eq(array[index], value)) {
      // 确定查到数组中有该值，返回index
      return index
    }
  }
  return -1
}

export default sortedLastIndexOf
