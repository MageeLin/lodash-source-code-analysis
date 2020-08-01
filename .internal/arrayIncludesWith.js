/**
 * 此函数与`arrayIncludes`相似，但会接受一个比较器（comparator）函数参数
 *
 * @private
 * @param {Array} [array] 要检查的数组
 * @param {*} target 要搜索的值
 * @param {Function} comparator 每个元素调用的比较器函数
 * @returns {boolean} 如果检索到目标则返回true，否则返回false
 */
function arrayIncludesWith(array, target, comparator) {
  // 如果array参数为undefined或null，返回false
  if (array == null) {
    return false
  }

  // 迭代
  for (const value of array) {
    // 每次迭代调用比较器
    if (comparator(target, value)) {
      // comparator返回true的时候，就返回true
      return true
    }
  }
  // 没检索到，返回false
  return false
}

export default arrayIncludesWith
