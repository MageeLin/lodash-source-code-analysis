import filter from './filter.js'
import map from './map.js'
import baseProperty from './.internal/baseProperty.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * 这个方法类似于`zip`，但是它接收分组`array`组成的`arrays`，
 * 并且创建一个`arrays`，`arrays`中的`array`是zip前的分组结构
 *
 * @since 1.2.0
 * @category Array
 * @param {Array} array 要执行的的arrays
 * @returns {Array} 返回重新分组后的arrays
 * @see unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * const zipped = zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * unzip(zipped)
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  // 当array是空数组时，返回[]
  if (!(array != null && array.length)) {
    return []
  }
  let length = 0
  // 迭代执行了两个功能，第一个是讲数组筛选出来
  // 第二个是让length为最长子数组的长度
  array = filter(array, (group) => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length)
      return true
    }
  })
  let index = -1
  // 根据最长长度length建一个空数组
  const result = new Array(length)
  // 迭代
  while (++index < length) {
    // 把每一个array都取对应的位置处的值map成一个新array
    // 然后赋值给result[index]
    result[index] = map(array, baseProperty(index))
  }
  return result
}

export default unzip
