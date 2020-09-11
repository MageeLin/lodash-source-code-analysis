import basePullAll from './.internal/basePullAll.js'

/**
 *
 * 这个方法类似于 `pullAll` ，区别是这个方法接受 comparator
 * 调用array中的元素和values比较。
 * comparator 会传入两个参数：(arrVal, othVal)。
 *
 * **注意:** 不同于 `differenceWith`, 这个方法会改变数组 array。
 *
 * @since 4.6.0
 * @category Array
 * @param {Array} array 要修改的数组。
 * @param {Array} values 要移除值的数组。
 * @param {Function} [comparator] comparator（比较器）调用每个元素。
 * @returns {Array} 返回 `array`.
 * @see pull, pullAll, pullAllBy, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
 *
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual)
 * console.log(array)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array, values, comparator) {
  // array和value有值 && array和value有长度
  return (array != null && array.length && values != null && values.length)
    // 满足则调用basePullAll，但是多加参数comparator
    ? basePullAll(array, values, undefined, comparator)
    : array
}

export default pullAllWith
