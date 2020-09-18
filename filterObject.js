/**
 * 迭代`object`的属性，返回 predicate（断言函数）返回真值 的所有元素的数组。
 * predicate（断言函数）调用三个参数：(value, index, array)。
 *
 * 如果想返回一个对象，请看`pickBy`
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object 要迭代的对象
 * @param {Function} predicate 每次迭代调用的函数
 * @returns {Array} 返回一个新的过滤后的数组
 * @see pickBy, pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const object = { 'a': 5, 'b': 8, 'c': 10 }
 *
 * filterObject(object, (n) => !(n % 5))
 * // => [5, 10]
 */
function filterObject(object, predicate) {
  // 初始化操作
  object = Object(object)
  const result = []

  // 迭代每一个键
  Object.keys(object).forEach((key) => {
    // value为每一个键对应的值
    const value = object[key]
    // 当断言函数返回真时，push到result种
    if (predicate(value, key, object)) {
      result.push(value)
    }
  })
  return result
}

export default filterObject
