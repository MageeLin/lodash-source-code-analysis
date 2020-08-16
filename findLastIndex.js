import baseFindIndex from './.internal/baseFindIndex.js'
import toInteger from './toInteger.js'

/**
 * 此方法类似`findIndex`， 区别是它是从右到左的迭代集合array中的元素。
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array 要搜索的数组
 * @param {Function} predicate 每次迭代时调用的函数
 * @param {number} [fromIndex=array.length-1] 开始搜索位置的索引值
 * @returns {number} 返回找到元素的 索引值（index），否则返回 -1。
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
function findLastIndex(array, predicate, fromIndex) {
  // 初始化length
  const length = array == null ? 0 : array.length
  // 空数组返回-1
  if (!length) {
    return -1
  }
  // 默认从最右侧开始
  let index = length - 1

  // 如果设置了起始搜索位置
  if (fromIndex !== undefined) {
    // 先处理index为整数
    index = toInteger(fromIndex)
    // 把index处理为合适的值
    index = fromIndex < 0
      // 当起始搜索位置为负数时，返回`length + index`和`0`的最大值
      ? Math.max(length + index, 0)
      // 当起始搜索位置为正数时，返回`index`和`length - 1`的最小值
      : Math.min(index, length - 1)
  }
  // 调用内置核心baseFindIndex方法
  return baseFindIndex(array, predicate, index, true)
}

export default findLastIndex
