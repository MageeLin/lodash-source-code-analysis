import getTag from './.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * 检查value是否是一个类arguments对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 value 为一个类参数对象，那么返回 true，否则返回 false。
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
  // 先检查是不是一个类对象，是的话再getTag，看看标签是否为[object Arguments]
  return isObjectLike(value) && getTag(value) == '[object Arguments]'
}

export default isArguments
