import isSymbol from '../isSymbol.js'

/** 用作最大长度和数组索引的引用*/
// 4294967295 == 0xffffffff，8字节，64位
const MAX_ARRAY_LENGTH = 4294967295
// 4294967295 == 0xfffffffe
const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1

/**
 * `sortedIndexBy` 和 `sortedLastIndexBy`方法的基础实现，
 * 对`array`的每个元素调用了`iteratee`后和`value`比较来计算`value`在已排序数组中的索引。
 * `iteratee`调用一个参数(`value`)
 *
 * @private
 * @param {Array} array 要检查的已排序数组
 * @param {*} value 要计算的值
 * @param {Function} iteratee 每个元素调用的iteratee
 * @param {boolean} [retHighest] 标志是否返回最大的匹配索引
 * @returns {number} 返回 `value`应该在`array`中插入的位置 `index`
 */
function baseSortedIndexBy(array, value, iteratee, retHighest) {
  // 初始化变量low，high
  let low = 0
  let high = array == null ? 0 : array.length
  if (high == 0) {
    return 0
  }

  // 对value进行iteratee迭代
  value = iteratee(value)

  // 只有NaN !== NaN 这一种情况满足value !== value 为真
  const valIsNaN = value !== value
  // 是否未null
  const valIsNull = value === null
  // 是否为symbol
  const valIsSymbol = isSymbol(value)
  // 是否为undefined
  const valIsUndefined = value === undefined

  // 二分查找
  while (low < high) {
    let setLow
    const mid = Math.floor((low + high) / 2)
    // 把中间值用iteratee处理成computed
    const computed = iteratee(array[mid])
    // 是否已定义
    const othIsDefined = computed !== undefined
    // 是否为null
    const othIsNull = computed === null
    // 是否与自身相等
    const othIsReflexive = computed === computed
    // 是否是symbol
    const othIsSymbol = isSymbol(computed)

    // 这里都是在处理 简单的大小比较 解决不了的比较过程
    if (valIsNaN) {
      setLow = retHighest || othIsReflexive
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined)
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull)
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol)
    } else if (othIsNull || othIsSymbol) {
      setLow = false
    } else {
      // 这里才是最普适性的处理，上面都在处理特殊情况
      // 如果从左向右查，就是<=，如果从右向左查，就是<
      setLow = retHighest ? (computed <= value) : (computed < value)
    }
    // 二分查找核心
    if (setLow) {
      // 比中间值大，就修改low
      low = mid + 1
    } else {
      // 比中间值小，就修改high
      high = mid
    }
  }
  return Math.min(high, MAX_ARRAY_INDEX)
}

export default baseSortedIndexBy
