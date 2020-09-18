import createRound from './.internal/createRound.js'

/**
 * 根据 `precision`（精度） 四舍五入 `number`。
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number 要四舍五入的数字。
 * @param {number} [precision=0] .四舍五入的精度。
 * @returns {number} 返回四舍五入后的数字。
 * @example
 *
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
// 调用createRound返回的方法
const round = createRound('round')

export default round
