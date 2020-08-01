import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 需要处理的数组
 * @param {number} [size=1] 每个数组区块的长度
 * @returns {Array} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  // size必须大于等于0
  size = Math.max(toInteger(size), 0)
  // array为假时，length设为0；为真时设为数组长度
  const length = array == null ? 0 : array.length
  // length为假或size为0时，返回空数组
  if (!length || size < 1) {
    return []
  }
  // 初始化一个长度为（length / size并向上取整）的数组
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  // 循环取区块并赋值给result数组的对应位置
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  // 返回result
  return result
}

export default chunk
