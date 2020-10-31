import baseFlatten from './.internal/baseFlatten.js'
import baseUniq from './.internal/baseUniq.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法类似 `union`但是它接受一个 `comparator`比较器 ,
 * 调用比较 `arrays` 数组的每个 `array` 的每一个元素。
 * 结果值从该值出现的第一个 `array` 中选择。
 * comparator 调用时会传入2个参数： (arrVal, othVal)。
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.要检查的arrays。
 * @param {Function} [comparator] `comparator`比较器调用每个元素。
 * @returns {Array} 返回组合values后的新数组。
 * @see difference, union, unionBy, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * unionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function unionWith(...arrays) {
  // comparator是最后一个参数，并确保是一个函数
  let comparator = last(arrays)
  comparator = typeof comparator === 'function' ? comparator : undefined
  // 调用baseUniq(baseFlatten(), undefined, comparator)
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator)
}

export default unionWith
