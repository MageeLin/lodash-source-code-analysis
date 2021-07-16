import baseFor from './baseFor.js';
import keys from '../keys.js';

/**
 * `forOwn` 的基础实现.
 *
 * @private
 * @param {Object} object 要迭代遍历的object
 * @param {Function} iteratee 每次迭代调用 iteratee 函数
 * @returns {Object} 返回 `object`.
 */
function baseForOwn(object, iteratee) {
  // 调用baseFor，keys参数说明是获取自身可枚举属性
  return object && baseFor(object, iteratee, keys);
}

export default baseForOwn;
