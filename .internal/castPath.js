import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * 当`value`不是单独值的时候，返回path数组
 *
 * @private
 * @param {*} value 要检查的值
 * @param {Object} [object] 要查询key的对象
 * @returns {Array} 返回转换换后的属性路径数组
 */
function castPath(value, object) {
  // value是数组的时候直接返回value
  if (Array.isArray(value)) {
    return value
  }
  // 如果value是一个key，就用数组包起来，否则调用stringToPath
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
