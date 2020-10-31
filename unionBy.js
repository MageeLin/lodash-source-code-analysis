import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法类似 `union` ，但是它接受一个 `iteratee` （迭代函数），
 * 调用`arrays`数组中的每个`array`的每个元素以产生唯一性计算的标准。
 * 结果值从该值出现的第一个 `array` 中选择。
 * iteratee 会传入一个参数：(value)。
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] 要检查的arrays。
 * @param {Function} iteratee 每个元素调用的iteratee。
 * @returns {Array} 返回组合values后的新数组。
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function unionBy(...arrays) {
  // 拿到iteratee参数并确保是个函数
  let iteratee = last(arrays)
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  // 调用baseUniq(baseFlatten(), iteratee)
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee)
}

export default unionBy
