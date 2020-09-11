import basePullAll from './.internal/basePullAll.js'

/**
 * 这个方法类似于 `pullAll` ，区别是这个方法接受一个 `iteratee`（迭代函数）
 * 调用 `array` 和 `values`的每个值以产生一个值，通过产生的值进行了比较。
 * iteratee 会传入一个参数： (value)。
 *
 * **注意:** 不同于 `differenceBy`, 这个方法会改变数组 array。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.要修改的数组。
 * @param {Array} values The values to remove.要移除值的数组。
 * @param {Function} iteratee iteratee（迭代器）调用每个元素。
 * @returns {Array} 返回 `array`.
 * @see pull, pullAll, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
 *
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
 * console.log(array)
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array, values, iteratee) {
  // array和value有值 && array和value有长度
  return (array != null && array.length && values != null && values.length)
    // 满足则调用basePullAll，但是多加参数iteratee
    ? basePullAll(array, values, iteratee)
    : array
}

export default pullAllBy
