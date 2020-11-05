import map from './map.js'
import unzip from './unzip.js'

/**
 * 此方法类似于`unzip`，但是它接受一个`iteratee`迭代方法参数
 * 来指定重组值应该如何被组合。
 * iteratee 调用时会传入每个分组的值： (...group)。
 *
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] 要处理的arrays
 * @param {Function} iteratee 迭代方法迭代每个array，决定如何组合分组值
 * @returns {Array} 返回重新分组后的arrays
 * @example
 *
 * const zipped = zip([1, 2], [10, 20], [100, 200])
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * unzipWith(zipped, add)
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  // 当array是空数组时，返回[]
  if (!(array != null && array.length)) {
    return []
  }
  // 直接调用unzip返回结果
  const result = unzip(array)
  // 返回iteratee.apply(undefined, group)来转化group中的结果
  return map(result, (group) => iteratee.apply(undefined, group))
}

export default unzipWith
