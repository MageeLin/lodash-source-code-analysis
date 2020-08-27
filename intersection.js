import map from './map.js'
import baseIntersection from './.internal/baseIntersection.js'
import castArrayLikeObject from './.internal/castArrayLikeObject.js'

/**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，
 * 使用 [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * 顺序和结果值的引用由第一个数组决定
 * 进行相等性比较。（注：可以理解为给定数组的交集）
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] 要检查的`arrays`
 * @returns {Array} 返回一个包含所有传入数组交集元素的新数组。
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
function intersection(...arrays) {
  // 先使用map方法将所有的参数转化为对应的类数组对象，避免传入的参数不正确
  const mapped = map(arrays, castArrayLikeObject)
  // 当mapped的length存在且第一个参数为类数组对象时（其实还是避免传入参数不正确）
  return (mapped.length && mapped[0] === arrays[0])
    // 调用基础的baseIntersection(mapped)方法
    ? baseIntersection(mapped)
    // 否则返回空数组
    : []
}

export default intersection
