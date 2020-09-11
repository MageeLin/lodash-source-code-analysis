/**
 * 该函数类似`baseIndexOf`，但是接受一个comparator
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 开始搜索位置处的索引
 * @param {Function} comparator 比较器comparator调用每个元素
 * @returns {number} 返回匹配值得索引，否则返回`-1`
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  // 从设定的索引处开始
  let index = fromIndex - 1
  // 这里用了解构方式获取length，赞成
  const { length } = array

  // 开始迭代
  while (++index < length) {
    // 拿array的每一个元素通过comparator的方式与value做对比
    if (comparator(array[index], value)) {
      // 找到了就返回索引
      return index
    }
  }
  // 找不到就返回-1
  return -1
}

export default baseIndexOfWith
