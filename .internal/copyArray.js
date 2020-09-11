/**
 * 复制`source`的值到`array`中
 *
 * @private
 * @param {Array} source 复制值的来源
 * @param {Array} [array=[]] 要复制到的数组
 * @returns {Array} 返回 `array`.
 */
function copyArray(source, array) {
  let index = -1
  const length = source.length

  // array若是空，就把array设为与source等长的空数组
  array || (array = new Array(length))
  // 开始迭代
  while (++index < length) {
    // 把每个值复制过去，所以是个浅拷贝
    array[index] = source[index]
  }
  return array
}

export default copyArray
