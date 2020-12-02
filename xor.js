import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * 创建一个给定数组唯一值的数组，
 * 对给定的多个数组使用[symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)，
 * 创建出一个唯一值数组。
 * 返回值的顺序取决于在数组的出现顺序
 *
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] 要检查的数组
 * @returns {Array} 返回过滤后的新数组
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @example
 *
 * xor([2, 1], [2, 3])
 * // => [1, 3]
 */
function xor(...arrays) {
  // 直接调用baseXor，并且进行了过滤，只有数组类型的参数才可以进行比较
  return baseXor(arrays.filter(isArrayLikeObject))
}

export default xor
