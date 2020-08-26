import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * indexOf的基础实现，不使用fromIndex边界检查
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {*} value 要搜索的值
 * @param {number} fromIndex 搜索开始位置的索引
 * @returns {number} 返回匹配值的索引，否则返回-1
 */
function baseIndexOf(array, value, fromIndex) {
  // value为NaN的时候，调用baseFindIndex；value不为NaN的时候，调用strictIndexOf
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    // 利用的是断言函数baseIsNaN
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
