import baseFindKey from './.internal/baseFindKey.js'
import baseForOwnRight from './.internal/baseForOwnRight.js'

/**
 * 该方法类似`findKey`，但是按照相反的顺序从collection中迭代元素
 *
 * @since 2.0.0
 * @category Object
 * @param {Object} object 要检查的对象
 * @param {Function} predicate 每次迭代调用的函数
 * @returns {string|undefined} 返回匹配元素的key，或者undefined
 * @see find, findIndex, findKey, findLast, findLastIndex
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findLastKey(users, ({ age }) => age < 40)
 * // => returns 'pebbles' assuming `findKey` returns 'barney'
 */
function findLastKey(object, predicate) {
  // 直接调用baseFindKey
  return baseFindKey(object, predicate, baseForOwnRight)
}

export default findLastKey
