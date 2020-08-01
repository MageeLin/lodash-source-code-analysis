import getTag from './.internal/getTag.js'

/**
 * 检查目标值是否为Symbol原始类型或Symbol对象
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 需要检查的值
 * @returns {boolean} 如果为symbol则返回true，否则返回false
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
 // || 符号之后的判断是为了在ES2015之前的代码polyfill中检测symbol
  const type = typeof value
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol
