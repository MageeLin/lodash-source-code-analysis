import memoizeCapped from './memoizeCapped.js'

// 点的charCode
const charCodeOfDot = '.'.charCodeAt(0)
// 转义字符正则表达式
const reEscapeChar = /\\(\\)?/g
// 属性名正则表达式
const rePropName = RegExp(
  // 匹配不是.或括号的任意值
  '[^.[\\]]+' + '|' +
  // 或者匹配括号内的属性名
  '\\[(?:' +
    // 匹配一个非字符串表达式
    '([^"\'][^[]*)' + '|' +
    // 或者是匹配字符串（支持转义字符）
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // 或者匹配 "" 作为连续 点 或 空括号之间的空白
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
  , 'g')

/**
 * 将一个`string`转化为属性路径数组
 *
 * @private
 * @param {string} string 要转化的字符串
 * @returns {Array} 返回属性路径数组
 */
// stringToPath是一个缓存函数
const stringToPath = memoizeCapped((string) => {
  // 定义一个空数组result
  const result = []
  // 当第一个字符为 点 时，push一个''
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }

  // 借用String.prototype的replace方法
  // 第一个参数是正则表达式，第二个参数是创建新的子字符串的函数
  // match是匹配的子串，，substring是被匹配的字符串
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  // 将result返回
  return result
})

export default stringToPath
