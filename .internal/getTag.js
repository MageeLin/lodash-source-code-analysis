const toString = Object.prototype.toString

/**
 * 获取目标值的类型标签（Symbol.toStringTag）
 *
 * @private
 * @param {*} value 需要查询的值
 * @returns {string} 返回类型标签.
 */
function getTag(value) {
  // 如果==为假，则先检查是否为undefined，
  // 是的话返回[object Undefined]，不是的话统统返回[object Null]
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  // 如==为真，直接借用Object原型链上的toString方法
  return toString.call(value)
}

export default getTag
