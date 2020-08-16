import arrayLikeKeys from './.internal/arrayLikeKeys.js'
import isArrayLike from './isArrayLike.js'

/**
 * 创建一个数组，存放`object`的自身可枚举属性名
 *
 * **注意:** 非object值将被强制转化为object，详见
 * [ES 规范](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * 查看更多细节
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回存放属性名的数组
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */
function keys(object) {
  // 如果是类数组对象，就返回arrayLikeKeys(object)
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    // 如果是不是类数组对象，就直接用Object.keys
    // （其实先用Object(object)进行了强制类型转换）
    : Object.keys(Object(object))
}

export default keys
