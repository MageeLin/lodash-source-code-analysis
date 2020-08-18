import baseFlatten from './.internal/baseFlatten.js'

/**
 * 使`array`扁平化一层深度
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要扁平化的数组
 * @returns {Array} 返回扁平化后的新数组
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  // 先取到数组的长度
  const length = array == null ? 0 : array.length
  // 调用baseFlatten，传参1
  return length ? baseFlatten(array, 1) : []
}

export default flatten
