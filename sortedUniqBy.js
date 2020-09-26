import baseSortedUniq from './.internal/baseSortedUniq.js'

/**
 * 这个方法类似`uniqBy`，但是它会对已排序数组进行速度优化。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {Function} iteratee 每个元素调用的iteratee迭代函数
 * @returns {Array} 返回新的数组副本
 * @example
 *
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
  // 当数组==null或者长度为0，就返回[]
  return (array != null && array.length)
    // 否则调用baseSortedUniq(array, iteratee)
    ? baseSortedUniq(array, iteratee)
    : []
}

export default sortedUniqBy
