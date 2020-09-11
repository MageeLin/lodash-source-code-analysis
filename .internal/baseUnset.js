import castPath from './castPath.js'
import last from '../last.js'
import parent from './parent.js'
import toKey from './toKey.js'

/**
 * `unset`方法的基础实现
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {Array|string} path 要移除的属性路径
 * @returns {boolean} 如果删除成功，那么返回 `true` ，否则返回 `false`。
 */
function baseUnset(object, path) {
  // 获取属性路径数组
  path = castPath(path, object)
  // 获取父级属性值的引用
  object = parent(object, path)
  // 在父级属性值中删掉该属性
  return object == null || delete object[toKey(last(path))]
}

export default baseUnset
