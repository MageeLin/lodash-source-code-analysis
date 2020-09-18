/**
 * 创建一个函数，比如`round`
 *
 * @private
 * @param {string} methodName 当求近似时使用的`Math`方法名
 * @returns {Function} 返回一个新的求近似的函数
 */
function createRound(methodName) {
  // 选择一种近似方法，floor，ceil，round
  const func = Math[methodName]
  // 返回一个函数
  return (number, precision) => {
    // 当精度precision不存在时，赋值为0
    // precision大于等于0时，不能超过292
    // precision小于0时，不能小于-292
    precision = precision == null ? 0 : (precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292))
    // 当精度不为0时
    if (precision) {
      // 用指数表示法转换以避免浮点问题。
      // 查看 [MDN](https://mdn.io/round#Examples) 更多细节.

      // 把数字split，pair[0]为系数，pair[1]为指数 比如(9876543211234567899876, -20)
      // 9876543211234567899876也就是98765432112345678e+21
      let pair = `${number}e`.split('e')
      // pair => ['9.876543211234568', '+21']
      const value = func(`${pair[0]}e${+pair[1] + precision}`)
      // value => func(9.8765432112345678e1) => 99
      pair = `${value}e`.split('e')
      // pair => ['99', '']
      return +`${pair[0]}e${+pair[1] - precision}`
      // 99e20
    }
    // 精度为0就直接调用Math的原生方法
    return func(number)
  }
}

export default createRound
