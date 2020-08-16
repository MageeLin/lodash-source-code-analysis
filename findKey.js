/**
 * 该方法类似`find`。但是它返回最先被 predicate（断言函数） 判断为真值元素的 key，而不是元素本身。
 *
 * @since 1.1.0
 * @category Object
 * @param {Object} object 要检查的对象
 * @param {Function} predicate 每次迭代调用的函数
 * @returns {string|undefined} 返回匹配元素的key，或者`undefined`
 * @see find, findIndex, findLast, findLastIndex, findLastKey
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey(object, predicate) {
  // 初始化result为undefined
  let result
  // 当object为null或者undefined时，返回undefined
  if (object == null) {
    return result
  }
  // 用some方法来迭代，其实用find也可以，方便随时停止
  Object.keys(object).some((key) => {
    // 拿到键对应的值
    const value = object[key]
    // 如果断言函数返回真
    if (predicate(value, key, object)) {
      // 则把key赋值给result
      result = key
      // 返回true，停止迭代
      return true
    }
  })
  // 最后返回key
  return result
}

export default findKey
