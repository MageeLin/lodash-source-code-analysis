import baseUniq from './.internal/baseUniq.js'

/**
 * 这个方法类似 `uniq`， 但是它接受一个 `comparator`比较器，
 * 调用比较`array`数组的每一个元素。
 * 值在array中的顺序决定result的顺序。
 * comparator 调用时会传入2个参数： (arrVal, othVal)。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组。
 * @param {Function} [comparator] comparator 调用每个元素。
 * @returns {Array} 返回一个去重后的新的array副本。
 * @see uniq, uniqBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * uniqWith(objects, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  // 检查comparator是不是一个函数
  comparator = typeof comparator === 'function' ? comparator : undefined
  return (array != null && array.length)
    // 调用baseUniq()
    ? baseUniq(array, undefined, comparator)
    : []
}

export default uniqWith
