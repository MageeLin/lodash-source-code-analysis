import baseSet from './.internal/baseSet.js'
import baseZipObject from './.internal/baseZipObject.js'

/**
 * 这个方法类似 `zipObject`，但是它支持属性路径。
 *
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] 属性标识符
 * @param {Array} [values=[]] 属性值
 * @returns {Object} 返回新对象
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * @example
 *
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  // 同样是调用的baseZipObject()，但是分配方法用的是baseSet
  return baseZipObject(props || [], values || [], baseSet)
}

export default zipObjectDeep
