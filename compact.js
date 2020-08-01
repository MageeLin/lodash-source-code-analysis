/**
 * 创建一个新数组，包含原数组中所有的非假值元素。
 * 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 待处理的数组
 * @returns {Array} 返回过滤掉假值的新数组。
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  let resIndex = 0
  const result = []
  // 当array为undefined和null时，返回[]
  if (array == null) {
    return result
  }

  for (const value of array) {
    // false, null, 0, "", undefined, 和 NaN在判断是都为假
    if (value) {
      // 新数组递增赋值
      result[resIndex++] = value
    }
  }
  return result
}

export default compact
