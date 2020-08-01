import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** 当数组长度达到以下大小，则进行大数组优化，当前是200 */
const LARGE_ARRAY_SIZE = 200

/**
 * 类`difference`方法的基本实现，不支持排除多个数组。
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {Array} values 需要排除的数组
 * @param {Function} [iteratee] 每个元素调用的迭代函数
 * @param {Function} [comparator] 每个元素调用的比较器函数
 * @returns {Array} 返回过滤后的新数组
 */
function baseDifference(array, values, iteratee, comparator) {
  // 初始化设置
  // includes默认使用arrayIncludes
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  // 空数组直接返回[]
  if (!array.length) {
    return result
  }
  // 当迭代函数存在时，
  if (iteratee) {
    // 将value的每一项都调用迭代函数
    values = map(values, (value) => iteratee(value))
  }
  // 当比较器函数存在时，
  if (comparator) {
    // includes切换为arrayIncludesWith
    includes = arrayIncludesWith
    isCommon = false
  }
  // 当比较器函数不存在但是数组过长时（进行了优化）
  else if (values.length >= LARGE_ARRAY_SIZE) {
    // includes切换为cacheHas
    includes = cacheHas
    isCommon = false
    // value使用SetCache封装
    values = new SetCache(values)
  }
  // continue跳到此处
  outer:
  for (let value of array) {
    // 如果有迭代函数，则每一项都调用迭代函数返回computed
    const computed = iteratee == null ? value : iteratee(value)

    value = (comparator || value !== 0) ? value : 0
    // 如果是普通通用数组，且该项不为NaN
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      // 内层循环进行比较
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          // 查到相同项就跳出本层循环，就不执行push了
          continue outer
        }
      }
      // 没查到相同项，就push到新数组
      result.push(value)
    }
    // 如果不是普通通用数组，就去挨个执行includes函数（可能为cacheHas或arrayIncludesWith）
    else if (!includes(values, computed, comparator)) {
      // 当不重复的时候，就把本项push到新数组
      result.push(value)
    }
  }
  // 最后返回结果
  return result
}

export default baseDifference
