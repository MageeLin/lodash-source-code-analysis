import baseGet from './.internal/baseGet.js'

/**
 * 根据 `object`对象的`path`路径获取值。 如果解析 `value` 是 `undefined` 会以 `defaultValue` 取代。
 *
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object 要检索的对象。
 * @param {Array|string} path 要获取属性的路径。
 * @param {*} [defaultValue] 如果解析值是 undefined ，defaultValue会被返回。
 * @returns {*} 返回解析的值。
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get(object, path, defaultValue) {
  // object为null或undefined时，返回undefined，否则返回baseGet
  const result = object == null ? undefined : baseGet(object, path)
  // result为undefined时，则返回默认值，否则返回result
  return result === undefined ? defaultValue : result
}

export default get
