/** 用于代替`undefined`的哈希值 */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {

  /**
   * 创建一个哈希对象。
   * 在原型链上有存、取、删、检查、清空五种方法。
   *
   * @private
   * @constructor
   * @param {Array} [entries] 准备缓存的键值对。
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
   * 从哈希中删除所有键值
   *
   * @memberOf Hash
   */
  clear() {
    // 重新初始化
    //将this.__data__原型设为了null，为的是能获得一个干净的字典
    // https://juejin.im/post/5acd8ced6fb9a028d444ee4e
    this.__data__ = Object.create(null)
    this.size = 0
  }

  /**
   * 从哈希中删除键和对应的值
   *
   * @memberOf Hash
   * @param {string} key 准备删除值的键。
   * @returns {boolean} 如果键值删除成功，则返回true，否则返回false。
   */
  delete(key) {
    // 如果对应 value 存在就删掉
    const result = this.has(key) && delete this.__data__[key]
    // 删除成功就size-=1
    this.size -= result ? 1 : 0
    return result
  }

  /**
   * 获取哈希中对应键的值
   *
   * @memberOf Hash
   * @param {string} key 准备获取值的键
   * @returns {*} 返回键值对
   */
  get(key) {
    const data = this.__data__
    const result = data[key]
    // 取值的时候再把HASH_UNDEFINED转为undefined
    return result === HASH_UNDEFINED ? undefined : result
  }

  /**
   * 检查哈希中键对应的值是否存在
   *
   * @memberOf Hash
   * @param {string} key 准备去检查的键
   * @returns {boolean} 如果检查的键对应的值存在则返回true，否则返回false
   */
  has(key) {
    const data = this.__data__
    // 此时，如果值为HASH_UNDEFINED是可以返回true的
    return data[key] !== undefined
  }

  /**
   * 设置哈希中的键对应的值
   *
   * @memberOf Hash
   * @param {string} key 准备去设置值的键
   * @param {*} value 打算设置成的值
   * @returns {Object} 返回这个哈希实例
   */
  set(key, value) {
    const data = this.__data__
    // key已经存在就size += 0，key不存在就size += 1
    this.size += this.has(key) ? 0 : 1
    // HASH_UNDEFINED在这里用上了，这里是为了让check检查的时候能返回true
    data[key] = value === undefined ? HASH_UNDEFINED : value
    // 返回哈希实例
    return this
  }
}

export default Hash
