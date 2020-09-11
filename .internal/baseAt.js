import get from '../get.js'

/**
 * `at`方法的基础实现，不用支持单个的路径
 *
 * @private
 * @param {Object} object 要迭代的对象
 * @param {string[]} paths 要获取的对象的元素路径数组
 * @returns {Array} 返回要获取的元素组成的数组
 */
function baseAt(object, paths) {
  // 初始化
  let index = -1
  const length = paths.length
  const result = new Array(length)
  const skip = object == null

  // 迭代
  while (++index < length) {
    // object为null或undefined时，就返回undefined
    // 否则就给result对应位置赋值get();
    result[index] = skip ? undefined : get(object, paths[index])
  }
  return result
}

export default baseAt
