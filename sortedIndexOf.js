import baseSortedIndex from './.internal/baseSortedIndex.js'
import eq from './eq.js'

/**
 * 这个方法类似 `indexOf`，但是它是在已经排序的数组`array`上执行二进制检索。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @returns {number} 返回匹配值的`index`，否则返回`-1
 * @example
 *
 * sortedIndexOf([4, 5, 5, 5, 6], 5)
 * // => 1
 */
function sortedIndexOf(array, value) {
  // 先取到数组的length
  const length = array == null ? 0 : array.length
  // 数组有内容就处理
  if (length) {
    // 跟sortedIndex调用方式一样
    const index = baseSortedIndex(array, value)
    // 但是多了一步处理，就是数组的该项与value是否相等
    // 如果不相等说明数组中不存在这个值，就返回-1
    if (index < length && eq(array[index], value)) {
      // 确定查到数组中有该值，返回index
      return index
    }
  }
  // 数组没内容时返回-1
  return -1
}

export default sortedIndexOf
