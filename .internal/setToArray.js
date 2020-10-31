/**
 * 将 `set` 的值转化为 `array`
 *
 * @private
 * @param {Object} set 要转化的 `set`
 * @returns {Array} 返回 `values` 组成的数组
 */
function setToArray(set) {
  let index = -1
  // 根据set的长度创建一个定长数组
  const result = new Array(set.size)

  // 不断的把set的值push给result
  set.forEach((value) => {
    result[++index] = value
  })
  // 返回结果
  return result
}

export default setToArray
