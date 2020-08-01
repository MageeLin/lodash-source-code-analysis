/**
 * 检查缓存中键对应的值是否存在
 *
 * @private
 * @param {Object} cache 需要查询的缓存
 * @param {string} key 需要查询的键
 * @returns {boolean} 如果检查的键对应的值存在则返回true，否则返回false
 */
function cacheHas(cache, key) {
  return cache.has(key)
}

export default cacheHas
