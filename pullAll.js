import basePullAll from './.internal/basePullAll.js'

/**
 * 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
 *
 *   **注意：** 和 `difference` 方法不同，这个方法会改变数组。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array  要修改的数组。
 * @param {Array} values 要移除值的数组。
 * @returns {Array} 返回 `array`.
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  // array和value有值 && array和value有长度
  return (array != null && array.length && values != null && values.length)
    // 满足则调用basePullAll
    ? basePullAll(array, values)
    : array
}

export default pullAll
