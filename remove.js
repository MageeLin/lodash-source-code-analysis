import basePullAt from './.internal/basePullAt.js'

/**
 * 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。
 * predicate（断言） 会传入3个参数： (value, index, array)。
 *
 * **注意:** 和 `filter`不同, 这个方法会改变数组 `array`。使用`pull`来根据提供的value值从数组中移除元素。
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array 要修改的数组
 * @param {Function} predicate 每次迭代调用的函数
 * @returns {Array} 返回移除元素组成的新数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, reject, filter
 * @example
 *
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 == 0)
 *
 * console.log(array)
 * // => [1, 3]
 *
 * console.log(evens)
 * // => [2, 4]
 */
function remove(array, predicate) {
  // 初始化
  const result = []
  // 条件不满足就直接返回空数组
  if (!(array != null && array.length)) {
    return result
  }
  // 继续初始化
  let index = -1
  const indexes = []
  const { length } = array

  // 迭代
  while (++index < length) {
    // 取到数组每个元素值
    const value = array[index]
    // 如果断言返回真
    if (predicate(value, index, array)) {
      // 就把 value push到result，组成了返回的结果
      result.push(value)
      // 把index push到indexes，便于使用pullAt
      indexes.push(index)
    }
  }
  // 在原数组中删掉了对应元素
  basePullAt(array, indexes)
  // 把被删掉元素组成的数组返回
  return result
}

export default remove
