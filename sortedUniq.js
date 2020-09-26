import baseSortedUniq from './.internal/baseSortedUniq.js'

/**
 * 这个方法类似`uniq`，但是它只对已排序数组有效。
 * 如果输入的数组确定是已排序的，那么`sortedUniq` 要比 `uniq`更快。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @returns {Array} 返回新的数组副本
 * @example
 *
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
function sortedUniq(array) {
  // 当数组==null或者长度为0，就返回[]
  return (array != null && array.length)
    // 否则调用baseSortedUniq
    ? baseSortedUniq(array)
    : []
}

export default sortedUniq
