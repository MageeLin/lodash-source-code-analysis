/**
 * `assignValue` and `assignMergeValue`的基础实现，没有进行value检查
 *
 * @private
 * @param {Object} object 要修改的对象
 * @param {string} key 要分配的属性键
 * @param {*} 要分配的值
 */
function baseAssignValue(object, key, value) {
  // 当给对象的原型分配值时，使用Object.defineProperty()
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    // 普通情况就直接分配
    object[key] = value
  }
}

export default baseAssignValue
