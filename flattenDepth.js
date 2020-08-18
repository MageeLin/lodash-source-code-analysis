import baseFlatten from './.internal/baseFlatten.js'

/**
 * 固定深度的递归扁平化`array`
 *
 * @since 4.4.0
 * @category Array
 * @param {Array} array 要扁平化的数组
 * @param {number} [depth=1] 最大递归深度
 * @returns {Array} 返回新的扁平化后的数组
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  // 获取array的length
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // +depth是转化为数字格式
  depth = depth === undefined ? 1 : +depth
  // 调用baseFlatten，传参depth
  return baseFlatten(array, depth)
}

export default flattenDepth
