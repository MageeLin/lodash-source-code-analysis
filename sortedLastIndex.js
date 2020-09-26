import baseSortedIndex from './.internal/baseSortedIndex.js'

/**
 *
 * 此方法类似于`sortedIndex`，但是返回 `value` 是在 `array` 中尽可能大的索引位置`index`。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要检查的已排序数组。
 * @param {*} value 要计算的值
 * @returns {number} 返回 `value`应该在`array`中插入的位置 `index`。
 *  into `array`.
 * @example
 *
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
function sortedLastIndex(array, value) {
  // 调用 baseSortedIndex(array, value, true)
  return baseSortedIndex(array, value, true)
}

export default sortedLastIndex
