/**
 * 创建一个数组，来源是裁剪数组array，从 start 位置开始到 end 位置结束，但不包括 end 本身的位置。
 *
 * **注意:** 这个方法被用来代替
 * [`Array#slice`](https://mdn.io/Array/slice)确保返回的是个稠密数组。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array 要裁剪的数组
 * @param {number} [start=0] 开始位置。负数索引将会被看作从数组结束位置的向前偏移。
 * @param {number} [end=array.length] 结束位置。负数索引将会被看作从数组结束位置的向前偏移。
 * @returns {Array} 返回剪切后的数组。
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
function slice(array, start, end) {
  // array是否为undefined或null，是的话则length为0
  let length = array == null ? 0 : array.length
 //  length为假（undefined或0），则返回空数组
  if (!length) {
    return []
  }
  // start是否为undefined或null，是的话则start赋值为0
  start = start == null ? 0 : start
  // start是否为undefined，是的话则end赋值为length
  end = end === undefined ? length : end
  // 如果start小于0
  if (start < 0) {
    // 防止真正的start变为负数
    start = -start > length ? 0 : (length + start)
  }
  // 防止end比length还大
  end = end > length ? length : end
  // 如果end小于0
  if (end < 0) {
    end += length
  }
  // 如果start大于end时，length赋值0，否则就使用>>>移位0确保length是个正整数
  length = start > end ? 0 : ((end - start) >>> 0)
  // 确保start是个正整数
  start >>>= 0
  // 返回结果初始化
  let index = -1
  const result = new Array(length)
  // 循环赋值
  while (++index < length) {
    result[index] = array[index + start]
  }
  // 返回
  return result
}

export default slice
