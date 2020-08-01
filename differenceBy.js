import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 此方法类似`difference` ，但会多接受一个 iteratee （注：迭代函数），
 * 调用array 和 values 中的每个元素以产生比较的标准。
 * 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
 * （首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
 *
 * **注意:** 与 `pullAllBy`不同, 此方法会返回一个新数组。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {...Array} [values] 要排除的数组
 * @param {Function} iteratee 每个元素调用的迭代函数
 * @returns {Array} 返回一个过滤后的新数组
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array, ...values) {
  // 从values中取最后一个元素为迭代函数
  let iteratee = last(values)
  // 如果最后一个元素是类数组对象，说明调用的时候没给迭代函数
  // 那就直接给个undefined
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  // 这里的调用方式就与difference方法一致了，只不过多了个iteratee参数
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
    : []
}

export default differenceBy
