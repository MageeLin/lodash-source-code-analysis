import baseForOwn from './baseForOwn.js';
import isArrayLike from '../isArrayLike.js';

/**
 * `forEach` 的基础实现。
 *
 * @private
 * @param {Array|Object} collection 要迭代的collection
 * @param {Function} iteratee 每一次迭代时调用
 * @returns {Array|Object} 返回 `collection`
 */
function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection;
  }
  // 如果是类数组对象，就换baseForOwn来迭代
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee);
  }
  const length = collection.length;
  const iterable = Object(collection);
  let index = -1;

  // 迭代
  while (++index < length) {
    // 使用iteratee来调用每个元素，同时如果显式返回false，终止迭代
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }
  // 同样最后把collection返回
  return collection;
}

export default baseEach;
