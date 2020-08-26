/**
 * 获取除了array数组第一个元素以外的全部元素。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检索的数组。
 * @returns {Array}  返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array) {
  // 获取长度
  const length = array == null ? 0 : array.length
  // 空数组或空值默认返回
  if (!length) {
    return []
  }
  // 解构出tail
  const [, ...result] = array
  return result
}

export default tail
