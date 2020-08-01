/** 用作各种`Number`类型常量的引用 */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * 检查value是否为类数组的有效长度
 *
 * **No注意:** 这个方法大致基于
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果是一个有效的长度则返回ture，否则返回false。
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength(value) {
  // 首先必须是一个number
  // 第二必须时大于等于0小于等于9007199254740991的整数
  return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

export default isLength
