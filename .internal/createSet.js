import setToArray from './setToArray.js'

/** 作为各种`Number`常量的引用 */
const INFINITY = 1 / 0

/**
 * 创建一个`values`组成的set对象
 *
 * @private
 * @param {Array} values 要添加到set中的values值
 * @returns {Object} 返回新的set
 */
// [,-0] => [empty, -0]
// new Set([,-0]) => Set{ 0: undefined, 1: 0 }
// setToArray(new Set([,-0])) => [undefined, 0]
// setToArray(new Set([,-0]))[1] => 0
// 1 / setToArray(new Set([,-0]))[1] => Infinity
// 所以可以看出，这里第一个目的是来试一试 undefined 会不会被 Set 跳过，第二个目的是试一试-0会不会被转为0
// 用来判断对Set的支持程度
const createSet = (Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY)
  // 可以用set时，就返回创建set的函数
  ? (values) => new Set(values)
  // 不能用set，就返回个空函数
  : () => {}

export default createSet
