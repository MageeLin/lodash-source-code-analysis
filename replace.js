/**
 * 将`string`字符串中匹配的`pattern`替换为给定的`replacement`
 *
 * **注意:** 该方法基于 [`String#replace`](https://mdn.io/String/replace).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] 要修改的字符串
 * @param {RegExp|string} pattern 要匹配的内容
 * @param {Function|string} replacement 替换的内容
 * @returns {string} 返回替换后的字符串
 * @see truncate, trim
 * @example
 *
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
function replace(...args) {
  // string是第一个参数，而且要进行字符串化
  const string = `${args[0]}`
  // 参数少于三个时，直接返回string
  // 否则，就调用String.prototype.replace方法
  return args.length < 3 ? string : string.replace(args[1], args[2])
}

export default replace
