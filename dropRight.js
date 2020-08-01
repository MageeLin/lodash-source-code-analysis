import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * 创建一个`array`的切片，删掉array的后n个元素。（n默认值为1。）
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {number} [n=1] 要丢弃的元素数
 * @returns {Array} 返回数组的切片
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array, n=1) {
  // 初始化length
  const length = array == null ? 0 : array.length
  // 先把n转化为从前向后数的索引数
  n = length - toInteger(n)
  // 数组有内容时返回slice(0,n)的切片
  return length ? slice(array, 0, n < 0 ? 0 : n) : []
}

export default dropRight
