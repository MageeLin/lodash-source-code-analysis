/** 用作各种`Number`常量的引用 */
const MAX_SAFE_INTEGER = 9007199254740991

/** 用于检测无符号整数值 */
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * 检查`value`是否是一个有效的类数组对象的索引index
 *
 * @private
 * @param {*} value 要检查的值
 * @param {number} [length=MAX_SAFE_INTEGER] 有效index的上界
 * @returns {boolean} 如果是一个有效的index，返回`true`；否则返回`false`
 */
function isIndex(value, length) {
  // 拿到value的typeof
  const type = typeof value
  // length限制如果没给，就默认MAX_SAFE_INTEGER
  length = length == null ? MAX_SAFE_INTEGER : length
  // length必须为真
  return !!length &&
  // type为数字或（type为symbol且为无符号整数）
    (type === 'number' ||
      (type !== 'symbol' && reIsUint.test(value))) &&
      // 并且value是0到length之间的整数
        (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
