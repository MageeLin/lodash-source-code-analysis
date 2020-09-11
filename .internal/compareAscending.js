import isSymbol from '../isSymbol.js'

/**
 * 比较value，并用升序排序
 *
 * @private
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {number} 返回`value`的是否升序排列的指示符
 */
function compareAscending(value, other) {
  // 两个值不完全相等
  if (value !== other) {
    // value是否不为undefined
    const valIsDefined = value !== undefined
    // value是否为null
    const valIsNull = value === null
    // value是否是自己本身
    const valIsReflexive = value === value
    // value是否为symbol
    const valIsSymbol = isSymbol(value)

    // 同上
    const othIsDefined = other !== undefined
    const othIsNull = other === null
    const othIsReflexive = other === other
    const othIsSymbol = isSymbol(other)

    // 如果value为字符串
    const val = typeof value === 'string'
      // 是就执行字符串比较的结果
      ? value.localeCompare(other)
      // 否的话就转为负
      : -other

      // 下面是进行顺序比较
    if ((!othIsNull && !othIsSymbol && !valIsSymbol && val > 0) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && val < 0) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1
    }
  }
  // 如果两个值完全相等===，则返回0
  return 0
}

export default compareAscending
