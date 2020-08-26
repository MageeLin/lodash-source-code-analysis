import baseFindIndex from './.internal/baseFindIndex.js'
import baseIsNaN from './.internal/baseIsNaN.js'
import strictLastIndexOf from './.internal/strictLastIndexOf.js'
import toInteger from './toInteger.js'

/**
 * 这个方法类似`indexOf`，区别是它是从右到左遍历array的元素。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要搜索的数组。
 * @param {*} value 要搜索的值。
 * @param {number} [fromIndex=array.length-1] 开始搜索位置的索引。
 * @returns {number} 返回匹配值的索引值，否则返回 -1。
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  // 获取长度
  const length = array == null ? 0 : array.length
  // 如果为空值或者空数组，返回-1
  if (!length) {
    return -1
  }
  let index = length
  // 如果设置了fromIndex，就把index设为fromIndex
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    // 防止index越界
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  // 最后，当不为NaN时，直接进行严格比较
  return value === value
    ? strictLastIndexOf(array, value, index)
    // 为NaN时，进行特殊比较
    : baseFindIndex(array, baseIsNaN, index, true)
}

export default lastIndexOf
