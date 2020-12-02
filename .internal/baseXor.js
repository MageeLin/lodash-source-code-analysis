import baseDifference from './baseDifference.js'
import baseFlatten from './baseFlatten.js'
import baseUniq from './baseUniq.js'

/**
 * `xor`家族方法的基础实现，参数是要检查的每个数组。
 *
 * @private
 * @param {Array} arrays 要检查的每个数组
 * @param {Function} [iteratee] iteratee 调用每个元素
 * @param {Function} [comparator] comparator 调用每个元素
 * @returns {Array} 返回过滤值后的新数组
 */
function baseXor(arrays, iteratee, comparator) {
  // 如果arrays长度为1，则直接调用 baseUniq 去重返回
  const length = arrays.length
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : []
  }
  let index = -1
  const result = new Array(length)

  // 迭代arrays
  while (++index < length) {
    const array = arrays[index]
    let othIndex = -1

    // 迭代arrays中的其他array
    while (++othIndex < length) {
      if (othIndex != index) {
        // 核心步骤1：把result的对应位置设为用baseDifference比较后的array
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator)
      }
    }
  }
  // 核心步骤2：把结果展平一层，也就是把每一个 array 展开
  // 再调用 baseUniq 去重返回
  return baseUniq(baseFlatten(result, 1), iteratee, comparator)
}

export default baseXor
