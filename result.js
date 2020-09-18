import castPath from './.internal/castPath.js'
import toKey from './.internal/toKey.js'

/**
 * 这个方法类似`get`， 但是如果解析到的值是一个函数的话，
 * 就绑定 `this` 到这个函数并返回执行后的结果。
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object 要查询的对象
 * @param {Array|string} path 要解析的属性路径
 * @param {*} [defaultValue] 解析到`undefined`后返回的默认值
 * @returns {*} 返回解析后的值
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] }
 *
 * result(object, 'a[0].b.c1')
 * // => 3
 *
 * result(object, 'a[0].b.c2')
 * // => 4
 *
 * result(object, 'a[0].b.c3', 'default')
 * // => 'default'
 *
 * result(object, 'a[0].b.c3', () => 'default')
 * // => 'default'
 */
function result(object, path, defaultValue) {
  // 把path转为路径数组
  path = castPath(path, object)

  let index = -1
  let length = path.length

  // 当path为空的时候确保能进入循环
  if (!length) {
    length = 1
    object = undefined
  }
  // 迭代
  while (++index < length) {
    // object不为空时，value设为取object的每一级
    // toKey(path[index])是获取当前级的键
    let value = object == null ? undefined : object[toKey(path[index])]
    // 只要有某一级value为undefined时，打破循环，直接等于defaultValue
    if (value === undefined) {
      index = length
      value = defaultValue
    }
    // 当某一级value是函数时，直接执行value.call(object)并赋值给object，
    // 否则把value直接赋值给object，object因此被降级
    object = typeof value === 'function' ? value.call(object) : value
  }
  // 把最后的object返回
  return object
}

export default result
