import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * 此方法类似`flatMap`，但是会按照`depth`固定深度的扁平化map后的数组
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @param {number} [depth=1] 递归的最大的深度
 * @returns {Array} 返回新的扁平化后的数组
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDepth([1, 2], duplicate, 2)
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth(collection, iteratee, depth) {
  // 先获取深度
  // +depth强制转化为Number类型
  depth = depth === undefined ? 1 : +depth
  // map用来迭代集合
  // 调用baseFlatten并传参depth，按固定深度递归扁平化
  return baseFlatten(map(collection, iteratee), depth)
}

export default flatMapDepth
