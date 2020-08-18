import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/** 用于多种`Number`类型常量的引用 */
const INFINITY = 1 / 0

/**
 * 此方法类似`flatMap`，但是会递归的扁平化map后的结果。
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回扁平化后的新数组
 * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDeep([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  // map用来迭代集合
  // 调用baseFlatten并传参1 / 0，无限递归迭代
  return baseFlatten(map(collection, iteratee), INFINITY)
}

export default flatMapDeep
