import baseSortedIndex from './.internal/baseSortedIndex.js'

/**
 * 使用二进制检索来决定应该插入到数组中的`value`的最小的索引位置，以保证array的排序。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要检查的已排序数组。
 * @param {*} value 要计算的值
 * @returns {number} 返回 `value`应该在`array`中插入的位置 `index`。
 * @example
 *
 * sortedIndex([30, 50], 40)
 * // => 1
 */
function sortedIndex(array, value) {
  // 其实是调用 baseSortedIndex(array, value, false)
  return baseSortedIndex(array, value)
}

export default sortedIndex
