import isFlattenable from './isFlattenable.js'

/**
 * `flatten`方法的基本方法，支持带约束条件的扁平化
 *
 * @private
 * @param {Array} array 要扁平化的数组
 * @param {number} depth 最大的递归深度
 * @param {boolean} [predicate=isFlattenable] 每次迭代调用的函数
 * @param {boolean} [isStrict] 仅限通过`predicate`检查的值。
 * @param {Array} [result=[]] 初始的结果数组
 * @returns {Array} 返回一个新的扁平化后的数组。
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  // 给predicate和result置初始值
  predicate || (predicate = isFlattenable)
  result || (result = [])

  // array为null或undefined时，返回[]
  if (array == null) {
    return result
  }

  // 迭代
  for (const value of array) {
    // 深度大于0且可扁平化的value才执行下一步
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // 递归展平数组（受到调用堆栈数限制）。
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        // 达到深度或完全展平后就push到result中
        result.push(...value)
      }
    // 不可扁平化的值就按原样赋值给结果数组（isStrict为假的情况下）
    } else if (!isStrict) {
      // 不使用push是因为性能原因
      // 参见https://segmentfault.com/q/1010000021808718
      result[result.length] = value
    }
  }
  // 把最后的result数组返回
  return result
}

export default baseFlatten
