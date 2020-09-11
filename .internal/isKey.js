import isSymbol from '../isSymbol.js'

/** 用于匹配属性路径中的属性名称。 */
// 带有深度路径属性名的正则
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
// 直接属性名的正则
const reIsPlainProp = /^\w*$/

/**
 * 检查`value`是一个属性名并且不是一个属性路径
 *
 * @private
 * @param {*} value 要检查的值
 * @param {Object} [object] 要查询key的对象
 * @returns {boolean} 如果时一个属性名则返回`true`，否则返回`false`
 */
function isKey(value, object) {
  // 如果是个数组，则返回false
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  // 如果typeof结果是个number、boolean或者value直接为null或者value是个symbol，则返回true
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
  // 直接属性名正则验证 || 带深度的属性名验证 || 或value在object上能查询到
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

export default isKey
