import castPath from './castPath.js'
import toKey from './toKey.js'

/**
 * `get`方法的基础实现，不用支持默认值
 *
 * @private
 * @param {Object} object 要检索的对象。
 * @param {Array|string} path 要获取属性的路径。
 * @returns {*} 返回解析的值。
 */
function baseGet(object, path) {
  // 拿到路径数组
  path = castPath(path, object)

  let index = 0
  const length = path.length

  // 迭代，一级级向下拿到最终的值
  while (object != null && index < length) {
    object = object[toKey(path[index++])]
  }
  // index == length，也就是执行到底时，返回最终的值
  return (index && index == length) ? object : undefined
}

export default baseGet
