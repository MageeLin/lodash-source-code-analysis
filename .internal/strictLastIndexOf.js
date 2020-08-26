/**
 * `lastIndexOf`的特殊版本，执行的是值的严格相等比较，也就是`===`
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 开始搜索位置处的索引
 * @returns {number} 返回匹配值的索引，否则返回`-1`
 */
function strictLastIndexOf(array, value, fromIndex) {
  // 提前+1，方便做判断
  let index = fromIndex + 1
  // index向越来越小迭代
  while (index--) {
    // 核心，严格相等判断
    if (array[index] === value) {
      // 返回找到值的索引
      return index
    }
  }
  return index
}

export default strictLastIndexOf
