import baseForRight from './baseForRight.js'
import keys from '../keys.js'

/**
 * `forOwnRight`的基础实现
 *
 * @private
 * @param {Object} object 要迭代的`object`
 * @param {Function} iteratee 每次迭代时调用的函数
 * @returns {Object} 返回`object`
 */
function baseForOwnRight(object, iteratee) {
  // 当object为真时返回baseForRight的返回结果
  return object && baseForRight(object, iteratee, keys)
}

export default baseForOwnRight
