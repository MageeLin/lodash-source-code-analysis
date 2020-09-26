import eq from '../eq.js'

/**
 * `sortedUniq` and `sortedUniqBy`的基础实现
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {Function} [iteratee] `iteratee`调用每个元素
 * @returns {Array} 返回新的数组副本
 */
function baseSortedUniq(array, iteratee) {
  // 初始化
  let seen
  let index = -1
  let resIndex = 0

  // 取到array的长度
  const { length } = array
  const result = []

  // 迭代
  while (++index < length) {
    // value是每个元素，computed为转换后的该元素
    const value = array[index], computed = iteratee ? iteratee(value) : value
    // 当index为0 或者 computed!== seen
    // seen其实是上次的computed
    if (!index || !eq(computed, seen)) {
      // 把本次的computed放到seen中
      seen = computed
      // 只有跟前一个元素不重复的才放到result中
      result[resIndex++] = value === 0 ? 0 : value
    }
  }
  return result
}

export default baseSortedUniq
