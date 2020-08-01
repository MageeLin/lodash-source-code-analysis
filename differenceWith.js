import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 此方法类似`difference` ，但是它接受一个 comparator （比较器），
 * 调用比较器来比较array，values中的元素。
 * 结果值是从第一个数组中选择。
 * comparator 调用参数有两个：(arrVal, othVal)。
 *
 * **注意:** 与 `pullAllBy`不同, 此方法会返回一个新数组。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {...Array} [values] 要排除的数组
 * @param {Function} [comparator] 每个元素调用的比较器
 * @returns {Array} 返回一个过滤后的新数组
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array, ...values) {
  // 从values中取最后一个元素为迭代函数
  let comparator = last(values)
  // 如果最后一个元素是类数组对象，说明调用的时候没给比较器
  // 那就直接给个undefined
  if (isArrayLikeObject(comparator)) {
    comparator = undefined
  }
  // 这里的调用方式与difference方法一致，只不过iteratee参数为空，多了个comparator参数
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : []
}

export default differenceWith
