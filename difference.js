import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * 创建一个具有唯一`array`值的数组，每个值不包含在其他给定的数组中。
 * （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)做相等比较。
 * 结果值的顺序是由第一个数组中的顺序确定。
 *
 * **No注意:**  与 `pullAll`不同，这个方法会返回一个新数组。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要检查的数组。
 * @param {...Array} [values] 要排除的值的数组。
 * @returns {Array}  返回一个过滤值后的新数组。
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  // 首先判断array是否是一个类数组对象
  return isArrayLikeObject(array)
    // 是类数组对象，则使用baseDifference方法来排除
    // baseFlatten中的depth=1，predicate为isArrayLikeObject，检查每一项是不是类数组对象，
    // 本质上是吧values这个类数组扁平化成一个数组，方便与array进行比较
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    // 非类数组对象则返回[]
    : []
}

export default difference
