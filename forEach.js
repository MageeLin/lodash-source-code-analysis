import arrayEach from './.internal/arrayEach.js';
import baseEach from './.internal/baseEach.js';

/**
 * 调用 `iteratee` 遍历 `collection` 中的每个元素，
 *  iteratee 调用3个参数： (value, index|key, collection)。
 * 如果迭代函数（iteratee）显式的返回`false`，迭代会提前退出。
 *
 * **注意:** 与其他"Collections"方法一样，类似于数组的表现，对象的 "length" 属性也会被遍历。
 * 如果想避免这种情况，可以用 `forIn` 或者 `forOwn` 代替。
 *
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection 要迭代的collection
 * @param {Function} iteratee 每一次迭代时调用
 * @returns {Array|Object} 返回`collection`
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (不能保证迭代顺序).
 */
function forEach(collection, iteratee) {
  // 如果是数组就用简单的数组迭代方式arrayEach，不是数组就用baseEach
  const func = Array.isArray(collection) ? arrayEach : baseEach;
  return func(collection, iteratee);
}

export default forEach;
