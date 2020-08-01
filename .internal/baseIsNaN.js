/**
 * isNaN的实现基础，不支持对象形式的数字。
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果value是NaN则返回true，否则返回false。
 */
function baseIsNaN(value) {
  // 只有NaN !== NaN
  return value !== value
}

export default baseIsNaN
