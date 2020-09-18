/**
 * 创建一个针对断言函数 `func` 结果取反的函数。
 * `func` 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。
 *
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate 需要对结果取反的断言函数。
 * @returns {Function} 返回一个新的取反函数。
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0
 * }
 *
 * filter([1, 2, 3, 4, 5, 6], negate(isEven))
 * // => [1, 3, 5]
 */
function negate(predicate) {
  // predicate如果不是函数就报错
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function')
  }
  // 返回一个匿名函数
  return function(...args) {
    // 返回的匿名这个函数执行后会返回（predicate函数的执行结果）取反，
    // 执行predicate时把this绑定到该匿名函数上，顺带带上参数
    return !predicate.apply(this, args)
  }
}

export default negate
