import toFinite from './toFinite.js'

/**
 * 转换值为整数
 *
 * **注意:** 这个方法大致基于
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 需要转换的值
 * @returns {number} 返回转换后的整数
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  // 转换为有限数字
  const result = toFinite(value)
  // 对1取余
  const remainder = result % 1
  // 能取到余数就减去余数，返回了整数值
  return remainder ? result - remainder : result
}

export default toInteger
