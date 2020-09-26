import baseSortedIndexBy from './baseSortedIndexBy.js'
import isSymbol from '../isSymbol.js'

/** 用作最大长度和数组索引的引用 */
// 4294967295 == 0xffffffff，8字节，64位
const MAX_ARRAY_LENGTH = 4294967295
// 4294967295 >>> 1 = 2147483647 === 0x7fffffff，
// 也就是逻辑右移1位
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1

/**
 * `sortedIndex` 和 `sortedLastIndex`的基础实现，对`array`执行二进制搜索，
 * 决定`value`应该在`array`中的插入的`index`，确保不打乱原数组顺序
 *
 * @private
 * @param {Array} array 要检查的排序后数组
 * @param {*} value 要计算的值
 * @param {boolean} [retHighest] 标志是否返回最大的匹配索引
 * @returns {number} 返回 `value`应该在`array`中插入的位置 `index`
 */
function baseSortedIndex(array, value, retHighest) {
  // 初始化变量
  let low = 0
  // array为空时，high为0，否则为length
  let high = array == null ? low : array.length

  // 当value是number类型
  if (typeof value === 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    // 当low < high时循环
    while (low < high) {
      // 逻辑右移一位相当于变小一半
      const mid = (low + high) >>> 1
      // computed是最中间的变量
      const computed = array[mid]
      // 当中间变量小于value时，就去后半个区间寻找
      if (computed !== null && !isSymbol(computed) &&
          (retHighest ? (computed <= value) : (computed < value))) {
        low = mid + 1
      } else {
        // 当中间变量大于等于value，就去前半个区间寻找
        high = mid
      }
    }
    // 最后low>=high了，就返回high
    return high
  }
  // 如果不是数字类型，不是null，或者数字值超过了HALF_MAX_ARRAY_LENGTH，就调用baseSortedIndexBy并返回
  return baseSortedIndexBy(array, value, (value) => value, retHighest)
}

export default baseSortedIndex
