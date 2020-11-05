/**
 * `property`的基础实现，不支持深度路径
 *
 * @private
 * @param {string} key 要获取的属性的键
 * @returns {Function} 返回新的访问器函数
 */
function baseProperty(key) {
  // 返回一个函数，这个函数执行时返回object中对应的键
  return (object) => object == null ? undefined : object[key]
}

export default baseProperty
