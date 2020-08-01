import baseIndexOf from './baseIndexOf.js'

/**
 * 数组`includes`方法的的特殊版本，不支持指定开始搜索位置的索引。
 *
 * @private
 * @param {Array} [array] 要检查的数组
 * @param {*} target 要搜索的值
 * @returns {boolean} 如果搜索到了目标则返回true，否则返回false。
 */
function arrayIncludes(array, value) {
  // 初始化length
  const length = array == null ? 0 : array.length
  // 当length不为0且能搜到value时，返回true，否则返回false。
  return !!length && baseIndexOf(array, value, 0) > -1
}

export default arrayIncludes
