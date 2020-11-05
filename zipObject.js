import assignValue from './.internal/assignValue.js'
import baseZipObject from './.internal/baseZipObject.js'

/**
 * 这个方法类似 `fromPairs`，但是它接受2个数组，
 * 第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] 属性标识符数组
 * @param {Array} [values=[]] 属性值数组
 * @returns {Object} 返回一个新的对象
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2])
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue)
}

export default zipObject
