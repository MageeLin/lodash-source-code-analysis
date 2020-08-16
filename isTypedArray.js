import getTag from './.internal/getTag.js'
import nodeTypes from './.internal/nodeTypes.js'
import isObjectLike from './isObjectLike.js'

/** 用于匹配类型化数组的`toStringTag`属性值 */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

/* Node.js帮助方法引用 */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * 检查`value`是否为类型化数组
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果`value`是类型化数组则返回true，否则返回`false`
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  // 在node.js环境，直接用nodeTypes.isTypedArray方法
  ? (value) => nodeIsTypedArray(value)
  // web环境中，先判断是不是类对象，是的话然后再用reTypedTag正则判断value的tag
  // 符合正则才是类型化数组
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value))

export default isTypedArray
