/**
 * indexOf的一个特定版本，对value执行严格相等比较，即 ===。
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 搜索开始位置处的索引
 * @returns {number} 返回匹配值的索引，否则返回-1
 */
function strictIndexOf(array, value, fromIndex) {
  // 把fromIndex位置处的值包含进来
  let index = fromIndex - 1
  // 取到array.length
  const { length } = array

  // 迭代
  while (++index < length) {
    // 比较时使用===
    if (array[index] === value) {
      // 返回搜索到的索引
      return index
    }
  }
  // 返回-1
  return -1
}

export default strictIndexOf
