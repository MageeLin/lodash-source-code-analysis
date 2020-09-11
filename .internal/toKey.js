import isSymbol from '../isSymbol.js'

/** 作为多种`Number`类型常量的引用 */
const INFINITY = 1 / 0

/**
 * 当`value`不是string或symbol，将`value`转化为字符串key
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {string|symbol} 返回key
 */
function toKey(value) {
  // 当为string或symbol时，直接返回value
  if (typeof value === 'string' || isSymbol(value)) {
    return value
  }
  // 当不是string时，先强制转化为字符串
  const result = `${value}`
  // 当为-0时返回-0，其余直接返回
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

export default toKey
