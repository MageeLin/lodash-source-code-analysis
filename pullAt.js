import map from './map.js'
import baseAt from './.internal/baseAt.js'
import basePullAt from './.internal/basePullAt.js'
import compareAscending from './.internal/compareAscending.js'
import isIndex from './.internal/isIndex.js'

/**
 * 根据索引 `indexes`，移除`array`中对应的元素，并返回被移除元素的数组。
 *
 * **注意:** 和 `at`不同, 这个方法会改变数组 `array`。
 *
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要修改的数组。
 * @param {...(number|number[])} [indexes] 要移除元素的索引。
 * @returns {Array} 返回移除元素组成的新数组。
 * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 *
 * console.log(array)
 * // => ['a', 'c']
 *
 * console.log(pulled)
 * // => ['b', 'd']
 */
function pullAt(array, ...indexes) {
  // 取到length
  const length = array == null ? 0 : array.length

  const result = baseAt(array, indexes)

  basePullAt(array, map(indexes, (index) => isIndex(index, length) ? +index : index).sort(compareAscending))
  return result
}

export default pullAt
