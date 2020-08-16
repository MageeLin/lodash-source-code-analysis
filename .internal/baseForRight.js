/**
 * 该方法类似`baseFor`，但是按照相反的方向迭代属性
 *
 * @private
 * @param {Object} object 需要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @param {Function} keysFunc 获得`object`的key的函数
 * @returns {Object} 返回`object`
 */
function baseForRight(object, iteratee, keysFunc) {
  // 初始化object为可迭代对象
  const iterable = Object(object)
  // props是key组成的数组
  const props = keysFunc(object)
  let { length } = props

  // 反向迭代
  while (length--) {
    // 拿到每次的key
    const key = props[length]
    // 当iteratee函数返回false时，跳出循环
    // 实际在iteratee函数中执行了各种操作
    if (iteratee(iterable[key], key, iterable) === false) {
      break
    }
  }
  return object
}

export default baseForRight
