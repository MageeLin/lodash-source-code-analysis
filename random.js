import toFinite from './toFinite.js'

/** 内置方法引用，不依赖于`root` */
const freeParseFloat = parseFloat

/**
 * 产生一个包括 lower 与 upper 之间的数。
 * 如果只提供一个参数返回一个0到提供数之间的数。
 * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 *
 * **注意:** JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
 *
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] 下限
 * @param {number} [upper=1] 上限
 * @param {boolean} [floating] 指定是否返回浮点数
 * @returns {number} 返回随机数
 * @see uniqueId
 * @example
 *
 * random(0, 5)
 * // => 0到5之间的整数
 *
 * random(5)
 * // => 也是0到5之间的整数
 *
 * random(5, true)
 * // => 0到5之间的浮点数
 *
 * random(1.2, 5.2)
 * // => 1.2到5.2之间的浮点数
 */
function random(lower, upper, floating) {
  // 判断给的参数够不够，在不够的情况下
  if (floating === undefined) {
    // 说明给了两个参数，修改参数为lower, undefined, floating
    if (typeof upper === 'boolean') {
      floating = upper
      upper = undefined
    }
    // 说明给了一个参数，修改参数为undefined, undefined, floating
    else if (typeof lower === 'boolean') {
      floating = lower
      lower = undefined
    }
  }
  if (lower === undefined && upper === undefined) {
    // 当参数为undefined, undefined, floating时，将参数修改为0, 1, floating
    lower = 0
    upper = 1
  }
  else {
    // 下面的情况是至少有两个参数
    // 将lower改为有限数字
    lower = toFinite(lower)
    if (upper === undefined) {
      // 有两个参数的情况，把upper改为lower，lower改为0
      upper = lower
      lower = 0
    } else {
      // 有三个参数时，就将参数有限化
      upper = toFinite(upper)
    }
  }
  // 经过上面一系列处理，如果lower比upper大，就交换下
  if (lower > upper) {
    const temp = lower
    lower = upper
    upper = temp
  }
  // 如果floating为真，或者lower upper为浮点数，就返回浮点数
  if (floating || lower % 1 || upper % 1) {
    // 0-1的随机数
    const rand = Math.random()
    // 随机数长度
    const randLength = `${rand}`.length - 1
    // 返回随机浮点数
    // freeParseFloat(`1e-${randLength}`)的操作是为了确保必为浮点数。
    // ？？存疑当rand为0时还是返回0
    return Math.min(lower + (rand * (upper - lower + freeParseFloat(`1e-${randLength}`))), upper)
  }
  // 否则返回整数随机数，常规随机数操作
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

export default random
