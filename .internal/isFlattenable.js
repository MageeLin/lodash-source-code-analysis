import isArguments from '../isArguments.js'

/** 内置值引用 */
// 内置的Symbol.isConcatSpreadable符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。
const spreadableSymbol = Symbol.isConcatSpreadable

/**
 * 检查value是否是一个可扁平化的arguments对象或数组
 *
 * @private
 * @param {*} value 要检查的值
 * @returns {boolean} 如果要检查的值是可扁平化的则返回true，否则返回false
 */
function isFlattenable(value) {
  // 是数组则返回true
  // 是arguments对象则返回true
  // Symbol.isConcatSpreadable属性为true则返回true
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
  return Array.isArray(value) || isArguments(value) ||
    !!(value && value[spreadableSymbol])
}

export default isFlattenable
