import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'
import last from './last.js'

/**
 * 这个方法类似 `intersection`，区别是它接受一个 `iteratee`参数，
 * 用于调用每一个`arrays`中的每个元素以产生一个值，通过产生的值进行比较。
 * 结果值是从第一数组中选择。
 * iteratee 会传入一个参数：(value)。
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] 要检查的`arrays`
 * @param {Function} iteratee iteratee调用每一个元素
 * @returns {Array}  返回一个包含所有传入数组交集元素的新数组。
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
function intersectionBy(...arrays) {
  // 取到最后一个参数，即为iteratee
  let iteratee = last(arrays)
  // 同样将arrays中的所有参数转为类数组对象
  const mapped = map(arrays, castArrayLikeObject)

  // 判断到底传没传iteratee参数，也就是最后一项经过类型转换后和以前是否还一致。
  if (iteratee === last(mapped)) {
    // 一致，说明没传iteratee参数
    iteratee = undefined
  } else {
    // 不一致，说明传了iteratee参数，则从mapped中弹出最后一个参数
    mapped.pop()
  }
  // 同intersection一样，还是避免传入参数不正确
  return (mapped.length && mapped[0] === arrays[0])
    // 同样是调用基础方法baseIntersection，但是多传一个iteratee参数
    ? baseIntersection(mapped, iteratee)
    : []
}

export default intersectionBy
