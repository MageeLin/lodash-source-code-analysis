import baseSortedIndexBy from './.internal/baseSortedIndexBy.js'

/**
 * 这个方法类似`sortedIndex`，但是它接受一个 `iteratee` （迭代函数），
 * 调用`array`的每一个元素，返回结果和`value` 比较来计算排序。
 * iteratee 会传入一个参数：(value)。
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array 要检查的已排序数组。
 * @param {*} value 要计算的值
 * @param {Function} iteratee 每个元素调用的iteratee迭代函数
 * @returns {number} 返回`value`应该在`array`中插入的索引位置 `index`。
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 5 }]
 *
 * sortedIndexBy(objects, { 'n': 4 }, ({ n }) => n)
 * // => 0
 */
function sortedIndexBy(array, value, iteratee) {
  // 调用核心方法baseSortedIndexBy(array, value, iteratee)
  return baseSortedIndexBy(array, value, iteratee)
}

export default sortedIndexBy
