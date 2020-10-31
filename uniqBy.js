import baseUniq from './.internal/baseUniq.js'

/**
 * 这个方法类似 `uniq` ，但是它接受一个 `iteratee` （迭代函数），
 * 调用数组（array）的每个元素以产生唯一性计算的标准。
 * 值在array中的顺序决定result的顺序。
 * iteratee 调用时会传入一个参数：(value)。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的array。
 * @param {Function} iteratee iteratee调用每个元素。
 * @returns {Array} 返回一个去重后的新的array副本。
 * @see uniq, uniqWith
 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function uniqBy(array, iteratee) {
  // array有值且为数组时，返回baseUniq()的结果
  return (array != null && array.length)
    ? baseUniq(array, iteratee)
    : []
}

export default uniqBy
