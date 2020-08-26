import baseIndexOf from './.internal/baseIndexOf.js'
import toInteger from './toInteger.js'

/**
 * 使用 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) 等值比较，
 * 返回首次在数组array中找到的value的索引值， 如果 `fromIndex` 为负值，将从`array`尾端索引进行匹配。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} [fromIndex=0] 开始搜索位置的索引
 * @returns {number} 返回匹配值的索引，否则返回`-1`
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  // 获取length
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  // 设置初始位置处索引index
  let index = fromIndex == null ? 0 : toInteger(fromIndex)
  // 如果index小于0，则计算出一个从左端数的index
  if (index < 0) {
    index = Math.max(length + index, 0)
  }
  // 调用核心方法baseIndexOf
  return baseIndexOf(array, value, index)
}

export default indexOf
