/**
 *
 * 创建一个会缓存 `func` 结果的函数。
 * 如果提供了 `resolver` ，就用 `resolver` 的返回值作为 `key` 缓存函数的结果。
 * 默认情况下用第一个参数作为缓存的 `key`。 `func` 在调用时 `this` 会绑定在缓存函数上。
 *
 * **注意:** 缓存会暴露在缓存函数的 `cache`属性上。
 * 它是可以定制的，只要替换了 `memoize.Cache` 构造函数，
 * 或实现了 [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * 的 `clear`, `delete`, `get`, `has`, 和 `set`方法。
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func 需要将输出缓存的函数。
 * @param {Function} [resolver] 这个函数的返回值作为缓存的 key。
 * @returns {Function} 返回新的缓存化后的函数。
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // 修改结果缓存
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // 替换 `memoize.Cache`.
 * memoize.Cache = WeakMap
 */
function memoize(func, resolver) {
  // 当func不是函数 || resolver不是函数的时候，报错
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function')
  }
  // 定义一个函数memoized
  const memoized = function(...args) {
    // 如果resolver存在，就用resolver转化一下参数作为key，否则直接把第一个参数作为key
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache

    // 当cache中有key的时候，直接返回该key的值。完成了读取缓存的操作
    if (cache.has(key)) {
      return cache.get(key)
    }
    // cache没有这个key的时候，就用func执行这些参数
    const result = func.apply(this, args)
    // 然后在cache设置这个key的值为result，完成了设置缓存操作
    memoized.cache = cache.set(key, result) || cache
    return result
  }
  // 设置memoized这个函数对象的cache属性，默认为一个map
  memoized.cache = new (memoize.Cache || Map)
  // 把memoized函数返回
  return memoized
}

memoize.Cache = Map

export default memoize
