/**
 * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，
 * 而且 typeof 后的结果是 "object"。
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 value 为一个类对象，那么返回 true，否则返回 false。
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
function isObjectLike(value) {
  // 跟描述的完全一致，只要typeof返回object并且不为null，就返回true
  return typeof value === 'object' && value !== null
}

export default isObjectLike
