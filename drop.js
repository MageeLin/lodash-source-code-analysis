import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * 创建一个`array`的切片，删掉array前n个元素。（n默认值为1。）
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @param {number} [n=1] 要丢弃的元素数
 * @returns {Array} 返回数组的切片
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array, n=1) {
  // 初始化length
  const length = array == null ? 0 : array.length
  // 数组有内容时返回slice(n,length)的切片
  return length
    ? slice(array, n < 0 ? 0 : toInteger(n), length)
    : []
}

export default drop
