import isLength from './isLength.js'

/**
 * 检查 value 是否是类数组。 如果一个值被认为是类数组，
 * 那么它不是一个函数，并且value.length是个大于等于 0且小于等于 Number.MAX_SAFE_INTEGER的整数
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果value是一个类数组，那么返回 true，否则返回 false。
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike(value) {
  // 不为null或undefined
  // 不为function
  // length属性满足isLength
  return value != null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike
