/**
 * 在两个值之间执行
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)比较
 * 决定两个值是否相等
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value 要比较的值
 * @param {*} other 要比较的另一个值
 * @returns {boolean} 当两个值相等时返回`true`，否则返回`false`
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */
function eq(value, other) {
  // 只有当values严格相等 或者 两个值都为null时，才会返回ture
  // 其余都返回false
  return value === other || (value !== value && other !== other)
}

export default eq
