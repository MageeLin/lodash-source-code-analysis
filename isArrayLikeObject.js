import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * 此方法类似`isArrayLike`，但是它还同时检查value是否是个对象。
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值。
 * @returns {boolean}  如果 value 是一个类数组对象，那么返回 true，否则返回 false。
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject(value) {
  // 检查是否是个类对象
  // 再检查是否是个类数组
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
