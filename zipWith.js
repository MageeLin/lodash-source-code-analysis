import unzipWith from './unzipWith.js'

/**
 * 这个方法类似于`zip`，但是它接受一个`iteratee`（迭代方法），
 * 来指定分组的值应该如何被组合。
 * iteratee函数调用每个组的元素： (...group).
 *
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] 要处理的arrays
 * @param {Function} iteratee 迭代方法迭代每个array，决定如何组合分组值
 * @returns {Array} 返回分组后的array组成的arrays
 * @see unzip, unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */
function zipWith(...arrays) {
  // 拿到最后一个参数iteratee，并把它从arrays中pop出去
  const length = arrays.length
  let iteratee = length > 1 ? arrays[length - 1] : undefined
  iteratee = typeof iteratee === 'function' ? (arrays.pop(), iteratee) : undefined
  // 和zip方法类似，本质是调用unzipWith(arrays, iteratee)
  return unzipWith(arrays, iteratee)
}

export default zipWith
