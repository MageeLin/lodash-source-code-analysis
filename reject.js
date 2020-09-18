import filter from './filter.js'
import filterObject from './filterObject.js'
import negate from './negate.js'

/**
 * `filter`的相反方法，
 * 此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素。
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} predicate 每次迭代时调用的函数
 * @returns {Array} 返回新的过滤后的数组
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject(collection, predicate) {
  // 当collection参数是数组时使用filter方法，是集合时使用filterObject方法
  const func = Array.isArray(collection) ? filter : filterObject
  // 过滤参数其实是对所有的predicate取反，实现过滤掉所有为真的元素
  return func(collection, negate(predicate))
}

export default reject
