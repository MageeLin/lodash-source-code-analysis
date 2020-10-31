import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * 创建一个按顺序排列的唯一值的数组。
 * 所有给定数组的元素值使用
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * 做等值比较。
 * （注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] 要检查的arrays
 * @returns {Array} 返回arrays的并集
 * @see difference, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */
function union(...arrays) {
  // 调用baseUniq(baseFlatten())
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true))
}

export default union
