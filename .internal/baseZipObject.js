/**
 * `zipObject` 的基础实现，使用 `assignFunc`来分配属性值。
 *
 * @private
 * @param {Array} props 属性标识符
 * @param {Array} values 属性值
 * @param {Function} assignFunc 分配属性的函数
 * @returns {Object} 返回一个新的对象
 */
function baseZipObject(props, values, assignFunc) {
  // 初始化
  let index = -1
  const length = props.length
  const valsLength = values.length
  // 新建一个结果对象
  const result = {}

  // 迭代
  while (++index < length) {
    // 规范values中的value值
    const value = index < valsLength ? values[index] : undefined
    // 使用assignFunc来分配value
    assignFunc(result, props[index], value)
  }
  return result
}

export default baseZipObject
