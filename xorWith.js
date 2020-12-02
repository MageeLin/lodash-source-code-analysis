import baseXor from './.internal/baseXor.js'
import isArrayLikeObject from './isArrayLikeObject.js'
import last from './last.js'

/**
 * 此方法类似 `xor`，但是它接受一个 `comparator`（比较器）参数 ，
 * `comparator` 调用每个 `array` 的每个元素进行比较。
 * 返回值的顺序取决于在数组的出现顺序。
 * `comparator` 调用2个参数：(arrVal, othVal).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] 要检查的每个数组
 * @param {Function} [comparator] comparator 调用每个元素
 * @returns {Array} 返回过滤值后的新数组
 * @see difference, union, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * xorWith(objects, others, isEqual)
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function xorWith(...arrays) {
  // 取最后一个参数为 comparator
  let comparator = last(arrays)
  // 换了一种比较方式，如果comparator不是function类型，就设为undefined
  comparator = typeof comparator === 'function' ? comparator : undefined
  // 过滤参数并调用baseXor
  return baseXor(arrays.filter(isArrayLikeObject), undefined, comparator)
}

export default xorWith
