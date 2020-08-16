import findLastIndex from './findLastIndex.js'
import isArrayLike from './isArrayLike.js'

/**
 * 此方法类似`find`，但是在collection中从右向左迭代
 * collection、array和object的区别
 * https://blog.csdn.net/Soaring_Tiger/article/details/48180511
 * http://underscorejs.org/#collections
 * https://stackoverflow.com/questions/23921647/lo-dash-difference-between-array-and-collection
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection 要检查的集合
 * @param {Function} predicate 每次迭代调用的函数
 * @param {number} [fromIndex=collection.length-1] 开始搜索位置处的索引
 * @returns {*} 返回匹配的元素，或者`undefined`
 * @see find, findIndex, findKey, findLastIndex, findLastKey
 * @example
 *
 * findLast([1, 2, 3, 4], n => n % 2 == 1)
 * // => 3
 */
function findLast(collection, predicate, fromIndex) {
  // 初始化一个迭代器和可迭代对象
  // Object(collection)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
  let iteratee
  const iterable = Object(collection)
  // 如果collection是类数组对象
  if (!isArrayLike(collection)) {
    // collection为key组成的数组
    collection = Object.keys(collection)
    // 改造predicate来适应类数组
    iteratee = predicate
    predicate = (key) => iteratee(iterable[key], key, iterable)
  }
  // 处理到这一步，就可以按照标准的数组来看待了，先查到需要返回元素的索引值
  const index = findLastIndex(collection, predicate, fromIndex)
  // 是数组就直接拿index，类数组对象就拿key，然后从可迭代对象iterable中返回结果
  return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined
}

export default findLast
