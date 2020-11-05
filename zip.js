import unzip from './unzip.js'

/**
 * 创建一个分组元素的`arrays`，`arrays`的第一个`array`包含所有给定`array`的第一个元素，
 * `arrays`的第二个`array`包含所有给定`array`的第二个元素，以此类推。
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] 要处理的arrays
 * @returns {Array} 返回分组后的array组成的arrays
 * @see unzip, unzipWith, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays) {
  // 返回了unzip(arrays)的结果，unzip和zip在本质上是一样的
  return unzip(arrays)
}

export default zip
