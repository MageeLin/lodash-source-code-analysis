import baseFlatten from './.internal/baseFlatten.js'
import map from './map.js'

/**
 * 创建一个扁平化后的数组，
 * 这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，
 * 并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection 用来迭代遍历的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回扁平化后的新数组
 * @see flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [n, n]
 * }
 *
 * flatMap([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  // 先用map遍历集合，迭代collection
  // 再调用baseFlatten，传参1
  return baseFlatten(map(collection, iteratee), 1)
}

export default flatMap
