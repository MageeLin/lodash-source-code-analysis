import baseFlatten from './.internal/baseFlatten.js'

/** 用于多种`Number`类型常量的引用 */
const INFINITY = 1 / 0

/**
 * 递归的扁平化`array`
 *
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要扁平化的数组
 * @returns {Array} 返回新的扁平化后的数组
 * @see flatMap, flatMapDeep, flatMapDepth, flatten, flattenDepth
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]s
 */
function flattenDeep(array) {
  // 先取到length
  const length = array == null ? 0 : array.length
  // 同样是调用baseFlatten，但是传参1 / 0
  return length ? baseFlatten(array, INFINITY) : []
}

export default flattenDeep
