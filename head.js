/**
 * 获得`array`的第一个元素
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {*} 返回数组的第一个元素
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
function head(array) {
  // array存在 且 length属性存在不为0
  return (array != null && array.length)
    // 返回第一个元素
    ? array[0]
    // 否则返回undefined
    : undefined
}

export default head
