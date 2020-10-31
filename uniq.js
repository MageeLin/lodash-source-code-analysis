import baseUniq from './.internal/baseUniq.js'

/**
 * 创建一个去重后的array数组副本。
 * 使用了 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * 做等值比较。只有第一次出现的元素才会被保留。值在array中的顺序决定result的顺序。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要检查的数组。
 * @returns {Array} 返回一个去重后的新的array副本。
 * @see uniqBy, uniqWith
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
function uniq(array) {
  // array有值且为数组时，返回baseUniq()的结果
  return (array != null && array.length)
    ? baseUniq(array)
    : []
}

export default uniq
