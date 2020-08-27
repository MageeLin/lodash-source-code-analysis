import isArrayLikeObject from '../isArrayLikeObject.js'

/**
 * 如果`value`不是一个类数组对象，则返回一个空数组
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {Array|Object} 返回转换后的类数组对象
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : []
}

export default castArrayLikeObject
