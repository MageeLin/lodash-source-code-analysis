/**
 * 检查value是否为
 * [Object类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * 例如 arrays, functions, objects, regexes, `new Number(0)`, and `new String('')
 * @since 0.1.0
 * @category Lang
 * @param {*} value 需要检查的值
 * @returns {boolean} 如果对象则返回true，不是返回false
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
  // 本质上使用typeof判断符来判断,这是以下类型的返回值，所以需要先排除null，并把function纳入进来
  // typeof null                'object'
  // typeof function() {}       'function'
  // typeof {}                  'object'
  // typeof []                  'object'
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export default isObject
