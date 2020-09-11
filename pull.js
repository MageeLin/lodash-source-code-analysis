import pullAll from './pullAll.js'

/**
 * 移除数组`array`中所有和给定值相等的元素，
 * 使用 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) 进行全等比较。
 *
 * **注意：** 和 `without` 方法不同，这个方法会改变数组。通过断言使用 `remove` 从一个数组中移除元素。
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array 要修改的数组。
 * @param {...*} [values] 要删除的值。
 * @returns {Array} 返回 `array`.
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
function pull(array, ...values) {
  // 核心调用的pullAll
  return pullAll(array, values)
}

export default pull
