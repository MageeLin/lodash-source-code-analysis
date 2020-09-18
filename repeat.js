/**
 * 重复 `n` 次给定字符串。
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] 要重复的字符串。
 * @param {number} [n=1] 重复的次数。
 * @returns {string} 返回重复的字符串。
 * @example
 *
 * repeat('*', 3)
 * // => '***'
 *
 * repeat('abc', 2)
 * // => 'abcabc'
 *
 * repeat('abc', 0)
 * // => ''
 */
function repeat(string, n) {
  let result = ''
  // 当参数为空，或者重复次数不合理，直接返回空字符串
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result
  }
  // 利用平方求幂算法，以实现更快的重复。
  // 具体细节见 https://en.wikipedia.org/wiki/Exponentiation_by_squaring
  do {
    // 奇数
    if (n % 2) {
      // result就加一个当前字符串
      result += string
    }
    n = Math.floor(n / 2)
    if (n) {
      // 当 n > 0 时，就字符串翻倍
      string += string
    }
  } while (n)

  return result
}

export default repeat
