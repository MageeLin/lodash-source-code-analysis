
import Hash from './Hash.js'
// 可参考https://juejin.im/post/5c8cb622e51d454e0b5e0c76

/**
 * 获取map的数据
 *
 * @private
 * @param {Object} map 需要查询的map
 * @param {string} key 引用的键
 * @returns {*} 返回map的数据
 */
function getMapData({ __data__ }, key) {
  const data = __data__
  // 首先检查key是否适合作为键
  return isKeyable(key)
    // 如果适合，看看是不是string，是string就用string，否则用hash
    ? data[typeof key === 'string' ? 'string' : 'hash']
    // 不适合就用map
    : data.map
}

/**
 * 检查value是否适合作为唯一的对象键。
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果目标适合作为唯一的对象键则返回true，否则返回false。
 */
function isKeyable(value) {
  const type = typeof value
  // 如果typeof返回值为string、number、symbol、boolean且内容不为__proto__时，返回true
  // 如果typeof返回值不为string、number、symbol、boolean且内容为null时，返回true
  // 其余都为false
  return (type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean')
    ? (value !== '__proto__')
    : (value === null)
}

class MapCache {

  /**
   * 创建一个map缓存对象来存储键值对
   *
   * @private
   * @constructor
   * @param {Array} [entries] 要缓存的键值对
   */
  constructor(entries) {
    // 在构造函数里初始化index和length
    let index = -1
    const length = entries == null ? 0 : entries.length
    // 清空后挨个缓存
    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  /**
   * 从map里删除所有键值对
   *
   * @memberOf MapCache
   */
  clear() {
    // 重新初始化
    this.size = 0
    this.__data__ = {
      'hash': new Hash,
      'map': new Map,
      'string': new Hash
    }
  }

  /**
   * 从map里删除键和他对应的值
   *
   * @memberOf MapCache
   * @param {string} key 需要从map里删除值的键
   * @returns {boolean} 如果删除成功则返回true，否则返回false
   */
  delete(key) {
    // 使用确定类型实例的delete方法删除
    const result = getMapData(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  /**
   * 获取map中键对应的值
   *
   * @memberOf MapCache
   * @param {string} key 需要获取值的键
   * @returns {*} 返回对应的值
   */
  get(key) {
    return getMapData(this, key).get(key)
  }

  /**
   * 检查map中键对应的值是否存在
   *
   * @memberOf MapCache
   * @param {string} key 准备去检查的键
   * @returns {boolean} 如果检查的键对应的值存在则返回true，否则返回false
   */
  has(key) {
    // 使用确定类型实例的has方法检查
    return getMapData(this, key).has(key)
  }

  /**
   * 设置map中的键对应的值
   *
   * @memberOf MapCache
   * @param {string} key 准备去设置值的键
   * @param {*} value 打算设置成的值
   * @returns {Object} 返回这个mapCache实例
   */
  set(key, value) {
    // 使用确定类型实例的set方法设置值
    const data = getMapData(this, key)
    const size = data.size

    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }
}

export default MapCache
