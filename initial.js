import slice from './slice.js'

/**
 * 获得`array`中除去最后一个元素的其他内容
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array 要查询的数组
 * @returns {Array} 返回`array`的剪切
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */
function initial(array) {
  // 获取length
  const length = array == null ? 0 : array.length
  // 如果数组有内容，就剪切第0个到倒数第一个（不包含）之间的内容
  return length ? slice(array, 0, -1) : []
}

export default initial
