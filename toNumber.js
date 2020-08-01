import isObject from './isObject.js'
import isSymbol from './isSymbol.js'

/** 用于各种Number类型的常量*/
const NAN = 0 / 0

/** 用于匹配前面或者后面的空白 */
const reTrim = /^\s+|\s+$/g

/** 用于检测错误的有符号十六进制字符串值 */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/** 用于检测二进制字符串值 */
const reIsBinary = /^0b[01]+$/i

/** 用于检测八进制字符串值 */
const reIsOctal = /^0o[0-7]+$/i

/** 不依赖于root的内置方法引用 */
const freeParseInt = parseInt

/**
 * 将目标值转换为数字
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 目标值
 * @returns {number} 返回一个数字.
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
function toNumber(value) {
  // 如果为number原始类型，则直接返回原值，否则继续
  if (typeof value === 'number') {
    return value
  }
  // 如果为symbol类型则返回NaN，否则继续
  if (isSymbol(value)) {
    return NAN
  }
  // 如果为对象类型，则先判断valueof属性是否typeof结果为function
  // 是的话就执行后赋值给other，否的话就valueof属性直接赋值给other
  //
  // 再判断other是否为对象，
  // 是对象则把toString结果赋值给value，否的话就other赋值给value。
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }
  // 如果当前的value是否为string类型，
  // 不是string类型的话就判断是否为0，
  // 为0则直接返回，不为0就强制转换后返回
  if (typeof value !== 'string') {
    return value === 0 ? value : +value
  }
  // 现在已经确定为string类型，掐头去尾
  value = value.replace(reTrim, '')
  // 判断是否为二进制
  const isBinary = reIsBinary.test(value)
  // 如果是二进制或八进制，就直接转换为数字返回
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    // 不是的话就判断是否为有错的16进制，是的话返回Nan，否就转化为数字返回
    : (reIsBadHex.test(value) ? NAN : +value)
}

export default toNumber
