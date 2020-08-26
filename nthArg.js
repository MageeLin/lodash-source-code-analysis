import nth from './nth.js'

/**
 * 创建一个函数，这个函数返回第 n 个参数。如果 n为负数，则返回从结尾开始的第n个参数。
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [n=0] 要返回参数的索引值
 * @returns {Function} 返回一个新的直通函数
 * @example
 *
 * const func = nthArg(1)
 * func('a', 'b', 'c', 'd')
 * // => 'b'
 *
 * const func = nthArg(-2)
 * func('a', 'b', 'c', 'd')
 * // => 'c'
 */
function nthArg(n) {
  // 返回一个函数，这个函数的功能就是返回第n个参数
  return (...args) => nth(args, n)
}

export default nthArg
