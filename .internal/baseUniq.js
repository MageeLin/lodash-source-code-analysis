import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import cacheHas from './cacheHas.js'
import createSet from './createSet.js'
import setToArray from './setToArray.js'

/** 超过该常量后，就进行大数组优化 */
const LARGE_ARRAY_SIZE = 200

/**
 * `uniqBy`的基础实现
 *
 * @private
 * @param {Array} array 要检查的数组
 * @param {Function} [iteratee] iteratee迭代器调用每个元素
 * @param {Function} [comparator] comparator比较器比较每个元素
 * @returns {Array} 返回一个新的数组副本
 */
function baseUniq(array, iteratee, comparator) {
  // 初始化变量
  let index = -1
  let includes = arrayIncludes
  let isCommon = true

  const { length } = array
  const result = []
  // 把seen的指向result的地址
  let seen = result

  // 当第三个参数comparator存在时，就非普通模式
  // 并把includes设为arrayIncludesWith
  if (comparator) {
    isCommon = false
    includes = arrayIncludesWith
  }
  // 另外如果length过长，也是非普通模式
  // 就用cache缓存的模式
  else if (length >= LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(array)
    if (set) {
      return setToArray(set)
    }
    isCommon = false
    includes = cacheHas
    seen = new SetCache
  }
  // 普通模式下，就指向result
  else {
    seen = iteratee ? [] : result
  }

  // 跳出的位置
  outer:
  // 开始迭代
  while (++index < length) {
    let value = array[index]
    // 如果有迭代器，就用迭代器来变换下本次迭代的元素
    const computed = iteratee ? iteratee(value) : value

    // 当comparator不存在且value为0时，将value设为0
    value = (comparator || value !== 0) ? value : 0

    // 普通模式情况下
    if (isCommon && computed === computed) {
      let seenIndex = seen.length
      // 在这里实现了去重，如果seen中查到了与computed相同的元素，就跳出到最外层
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer
        }
      }
      // 有iteratee时，就给seen push一个转化后的
      if (iteratee) {
        seen.push(computed)
      }
      // 给结果数组push该值
      result.push(value)
    }
    // 非普通模式下，就调用includes方法
    else if (!includes(seen, computed, comparator)) {
      // 当为缓存的情况下，就给seen push这个computed
      if (seen !== result) {
        seen.push(computed)
      }
      // 给结果数组push该值
      result.push(value)
    }
  }
  return result
}

export default baseUniq
