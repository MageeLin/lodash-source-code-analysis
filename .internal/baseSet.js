import assignValue from './assignValue.js'
import castPath from './castPath.js'
import isIndex from './isIndex.js'
import isObject from '../isObject.js'
import toKey from './toKey.js'

/**
 * `set`的基础实现
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {Array|string} path 要设置的属性路径
 * @param {*} value 要设置的属性值
 * @param {Function} [customizer] 自定义路径创建的方法
 * @returns {Object} 返回对象
 */
function baseSet(object, path, value, customizer) {
  // 不是对象就直接返回
  if (!isObject(object)) {
    return object
  }

  // 返回路径对应的路径数组
  path = castPath(path, object)

  const length = path.length
  const lastIndex = length - 1

  let index = -1
  let nested = object

  // 这里的迭代就是在用路径数组不停的给object添加后代属性，
  // object，nested(变)，objValue(变)都是原对象上的
  // value，newValue(变)都是要设置的属性上的
  while (nested != null && ++index < length) {
    const key = toKey(path[index])
    let newValue = value

    // 这下面都是怎么整理出对应的每一层的newValue
    if (index != lastIndex) {
      // nested是每一层的object
      const objValue = nested[key]
      // 如果有自定义路径创建的方法，就用，没有就undefined，方便下一步
      newValue = customizer ? customizer(objValue, key, nested) : undefined
      // 当对象上没有下一级路径时，就开始创建
      if (newValue === undefined) {
        newValue = isObject(objValue)
          // 原对象上有这个key就直接赋给newValue
          ? objValue
          // 是index则代表空数组，否则就是空对象
          : (isIndex(path[index + 1]) ? [] : {})
      }
    }
    assignValue(nested, key, newValue)
    nested = nested[key]
  }
  return object
}

export default baseSet
