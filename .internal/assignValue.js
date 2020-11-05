import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/** 用于检查对象的自身属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 当`object`上`key`对应的值与`value`不相等时，就把`value`分配给它
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {string} key 要分配的属性键
 * @param {*} value 要分配的属性值
 */
function assignValue(object, key, value) {
  // 拿到object上对应的属性值
  const objValue = object[key]

  // 当key不是object的自身属性，或者 要分配的值与objValue对应的值不相等时
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    // 当value为有效数字时
    if (value !== 0 || (1 / value) === (1 / objValue)) {
      // 执行baseAssignValue()
      baseAssignValue(object, key, value)
    }
  // 或者当 value为undefined 且 object上没有key时
  } else if (value === undefined && !(key in object)) {
    // 执行baseAssignValue()
    baseAssignValue(object, key, value)
  }
}

export default assignValue
