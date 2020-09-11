import baseGet from './baseGet.js'
import slice from '../slice.js'

/**
 * 获取`object`上`path`的父级属性值
 *
 * @private
 * @param {Object} object 要查询的对象
 * @param {Array} path 要获取父级属性值的路径
 * @returns {*} 返回父级属性值
 */
function parent(object, path) {
  // 当length小于2，也就是length == 1时，直接就返回object
  // 否则，就用baseGet获取（去掉最后一个路径的）路径数组对应的值
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1))
}

export default parent
