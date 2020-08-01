import MapCache from './MapCache.js'

/** 用于代替`undefined`的哈希值 */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class SetCache {

  /**
   * 创建一个数组缓存对象以存储唯一值。
   *
   * @private
   * @constructor
   * @param {Array} [values] 需要缓存的值
   */
  constructor(values) {
    // 在构造函数里初始化index和length
    let index = -1
    const length = values == null ? 0 : values.length
    // 挨个存到this.__data__中
    this.__data__ = new MapCache
    while (++index < length) {
      this.add(values[index])
    }
  }

  /**
   * 向数组缓存中添加值
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value 需要缓存的值
   * @returns {Object} 返回缓存实例
   */
  add(value) {
    this.__data__.set(value, HASH_UNDEFINED)
    return this
  }

  /**
   * 检查数组缓存中是否存在值
   *
   * @memberOf SetCache
   * @param {*} value 需要搜索的值
   * @returns {boolean} 如果value存在则返回true，否则返回false
   */
  has(value) {
    return this.__data__.has(value)
  }
}

// 最后在原型链上把push指向了add方法
SetCache.prototype.push = SetCache.prototype.add

export default SetCache
