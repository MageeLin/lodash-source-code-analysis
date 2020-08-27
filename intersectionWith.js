import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'
import last from './last.js'

/**
 *
 * 这个方法类似 `intersection`，区别是它接受一个 `comparator` ，用于调用比较`arrays`中的每个元素。
 * 结果值是从第一数组中选择。
 * comparator 会传入两个参数：(arrVal, othVal)。
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] 要检查的数组
 * @param {Function} [comparator] 调用每一个元素的比较器
 * @returns {Array} 返回一个包含所有传入数组交集元素的新数组。
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * intersectionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }]
 */
function intersectionWith(...arrays) {
  // 取到最后一个参数，即为iteratee
  let comparator = last(arrays)
  // 同样将arrays中的所有参数转为类数组对象
  const mapped = map(arrays, castArrayLikeObject)

  // 这里选择的是与intersectionBy不同的判断方式，直接判断typeOf是否为function
  comparator = typeof comparator === 'function' ? comparator : undefined
  // 存在comparator时，直接弹出最后一个参数
  if (comparator) {
    mapped.pop()
  }

  // 同intersection一样，还是避免传入参数不正确
  return (mapped.length && mapped[0] === arrays[0])
    // 同样是调用基础方法baseIntersection，但是多传一个comparator参数
    ? baseIntersection(mapped, undefined, comparator)
    : []
}

export default intersectionWith
