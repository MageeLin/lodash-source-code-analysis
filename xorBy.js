import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 此方法类似 `xor` ，但是接受 `iteratee`（迭代器）参数，
 * `iteratee` 调用每一个 array 的每一个值，用生成的新值进行比较。
 * `iteratee` 调用1个参数：(value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] 要检查的数组
 * @param {Function} iteratee iteratee 调用每个元素
 * @returns {Array} 返回过滤值后的新数组
 * @see difference, union, unionBy, unionWith, without, xor, xorWith
 * @example
 *
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2, 3.4]
 */
function xorBy(...arrays) {
  // 取最后一个参数为iteratee
  let iteratee = last(arrays)
  // 如果最后一个参数仍然是数组，那iteratee就为undefined
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  // 过滤参数并调用baseXor
  return baseXor(arrays.filter(isArrayLikeObject), iteratee)
}

export default xorBy
