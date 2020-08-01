import toNumber from './toNumber.js'

/** 用作各种“数字”常量的引用。 */
const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308

/**
 * 将值转换为有限数字
 *
 * @since 4.12.0
 * @category Lang
 * @param {*} value 需要转换的值
 * @returns {number} 返回转换后的数字
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */
function toFinite(value) {
  // 先判断value是否假
  if (!value) {
    // 假的话就判断是否为0，为0返回0，否则返回value
    return value === 0 ? value : 0
  }
  // 把value转换为数字
  value = toNumber(value)
  // 判断是否正负无穷大
  if (value === INFINITY || value === -INFINITY) {
    // 是正负无穷大的话，则返回对应正负1.7976931348623157e+308
    const sign = (value < 0 ? -1 : 1)
    return sign * MAX_INTEGER
  }
  // value 如果!== value的情况，就是+0 === -0，此时返回0
  return value === value ? value : 0
}

export default toFinite
